import { Question, QuestionV2 } from "./quiz-types";

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
  // Flag to indicate special quiz type (tokenized for CSC307)
  quizType?: "standard" | "tokenized";
}

// Import course data
import { cpe301AssemblyCourse } from "./courses/cpe301-assembly";
import { csc311InfoSystemsCourse } from "./courses/csc311-info-systems";
import { csc307NumericalComputationCourse } from "./courses/csc307-numerical-computation";
import { csc221ComputerAppreciation } from "./courses/csc221-computer-appreciation";
import { csc315DSACourse } from "./courses/csc315-dsa";

// ============================================
// TOGGLE COURSES HERE - Just comment/uncomment lines to show/hide courses
// ============================================
export const courses: Course[] = [
  cpe301AssemblyCourse,
  csc315DSACourse,
  csc311InfoSystemsCourse,
  csc221ComputerAppreciation,
  // { ...csc307NumericalComputationCourse, quizType: "tokenized" }, // Uncomment to enable CSC307
];

// All available courses (master list - for settings UI)
export const allCourses: Course[] = [
  cpe301AssemblyCourse,
  csc315DSACourse,
  csc311InfoSystemsCourse,
  csc221ComputerAppreciation,
  { ...csc307NumericalComputationCourse, quizType: "tokenized" },
];

// Default enabled state for courses
export const defaultEnabledCourses: Record<string, boolean> = {
  "cpe301-assembly": true,
  "csc315-dsa": true,
  "csc311-info-systems": true,
  "csc221-computer-appreciation": true,
  "csc307-numerical-computation": false,
};

// LocalStorage key for course visibility settings
export const COURSE_VISIBILITY_KEY = "quiz-app-course-visibility";

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
  return courses.filter((course) => enabledIds[course.id] !== false);
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
    | Question[]
    | QuestionV2[];
}
