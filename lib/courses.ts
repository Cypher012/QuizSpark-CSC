import { Question, QuestionV2 } from "./quiz-types";

import { csc302JavaProgrammingCourse } from "./courses/csc302-oop";
import { csc304BusinessProgrammingCourse } from "./courses/csc304-bcp";
import { cpe310AgentBasedSystemsCourse } from "./courses/cpe310-agent-based";
import { csc306HciCourse } from "./courses/csc306-hci";
import { csc312SystemAnalysisCourse } from "./courses/csc312-system-analysis";
import { mth302DifferentialEquationsCourse } from "./courses/mth301-differential-equation";
import { mth302ExamPrepCourse } from "./courses/mth302-exam-prep";
import { csc308NumericalComputationIICourse } from "./courses/csc308-numerical-computation-II";
import { aee302StatisticsCourse } from "./courses/aee302-eng-stats";
import { cpe316Course } from "./courses/cpe316-intro-ai";

export interface Chapter {
  id: string;
  label: string;
  description: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  description: string;
  chapters: Chapter[];
  getQuestions: () => Question[] | QuestionV2[]; // Support both old and new formats
}

// ============================================
// TOGGLE COURSES HERE - Just comment/uncomment lines to show/hide courses
// ============================================
export const courses: Course[] = [
  csc306HciCourse,
  csc304BusinessProgrammingCourse,
  csc312SystemAnalysisCourse,
  cpe310AgentBasedSystemsCourse,
  mth302DifferentialEquationsCourse,
  mth302ExamPrepCourse,
  csc308NumericalComputationIICourse,
  aee302StatisticsCourse,
  csc302JavaProgrammingCourse,
  cpe316Course,
];

// Default enabled state for courses
export const defaultEnabledCourses: Record<string, boolean> = {
  "csc302-oop": true,
};

// LocalStorage key for course visibility settings
export const COURSE_VISIBILITY_KEY = "quiz-app-course-visibility";

// The MTH302 mock exams are hidden from the course grid unless unlocked via
// the URL query "?mth302=mock" -- a quiet link-only entry point rather than a
// course everyone browsing the app sees. Once unlocked it stays unlocked in
// this browser, so the link only needs to be visited once.
const MTH302_MOCK_COURSE_ID = "mth302-exam-prep";
const MTH302_MOCK_UNLOCK_KEY = "quiz-app-mth302-mock-unlocked";

// Checks the current URL for the unlock query param and persists it if
// present. Call once on app load, before reading enabled courses.
export function checkMth302MockUnlock(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  if (params.get("mth302") === "mock") {
    localStorage.setItem(MTH302_MOCK_UNLOCK_KEY, "true");
  }
}

function isMth302MockUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(MTH302_MOCK_UNLOCK_KEY) === "true";
}

// Get enabled courses from localStorage or defaults
export function getEnabledCourseIds(): Record<string, boolean> {
  if (typeof window === "undefined") return defaultEnabledCourses;

  const stored = localStorage.getItem(COURSE_VISIBILITY_KEY);
  if (stored) {
    try {
      return { ...defaultEnabledCourses, ...JSON.parse(stored) };
    } catch {
      return defaultEnabledCourses;
    }
  }
  return defaultEnabledCourses;
}

// Save course visibility settings
export function saveEnabledCourseIds(settings: Record<string, boolean>): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(COURSE_VISIBILITY_KEY, JSON.stringify(settings));
}

// Get filtered courses based on enabled state
export function getEnabledCourses(): Course[] {
  const enabledIds = getEnabledCourseIds();
  return courses
    .filter((course) => enabledIds[course.id] !== false)
    .filter(
      (course) =>
        course.id !== MTH302_MOCK_COURSE_ID || isMth302MockUnlocked(),
    );
}

// Helper to get a course by ID
export function getCourseById(courseId: string): Course | undefined {
  return courses.find((course) => course.id === courseId);
}

// Helper to get questions for a course
export function getCourseQuestions(
  courseId: string,
): Question[] | QuestionV2[] {
  const course = getCourseById(courseId);
  return course ? course.getQuestions() : [];
}

// Helper to filter questions by chapter within a course
export function filterByChapter(
  questions: Question[] | QuestionV2[],
  chapter: string | null,
): Question[] | QuestionV2[] {
  if (chapter === null) {
    return questions;
  }
  return questions.filter((q) => q.chapter === chapter) as
    Question[] | QuestionV2[];
}

export function filterByChapters(
  questions: Question[] | QuestionV2[],
  chapters: string[],
): Question[] | QuestionV2[] {
  const chapterSet = new Set(chapters);
  return questions.filter((q) => chapterSet.has(q.chapter ?? "")) as
    Question[] | QuestionV2[];
}
