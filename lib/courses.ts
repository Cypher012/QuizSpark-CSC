import { Question } from "./quiz-types";

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
  getQuestions: () => Question[];
  // Flag to indicate special quiz type (tokenized for CSC307)
  quizType?: "standard" | "tokenized";
}

// Import course data
import { cpe301AssemblyCourse } from "./courses/cpe301-assembly";
import { csc311InfoSystemsCourse } from "./courses/csc311-info-systems";
import { csc307NumericalComputationCourse } from "./courses/csc307-numerical-computation";

// Export all available courses
export const courses: Course[] = [
  cpe301AssemblyCourse,
  csc311InfoSystemsCourse,
  { ...csc307NumericalComputationCourse, quizType: "tokenized" },
];

// Helper to get a course by ID
export function getCourseById(courseId: string): Course | undefined {
  return courses.find((course) => course.id === courseId);
}

// Helper to get questions for a course
export function getCourseQuestions(courseId: string): Question[] {
  const course = getCourseById(courseId);
  return course ? course.getQuestions() : [];
}

// Helper to filter questions by chapter within a course
export function filterByChapter(
  questions: Question[],
  chapter: string | null,
): Question[] {
  if (chapter === null) {
    return questions;
  }
  return questions.filter((q) => q.chapter === chapter);
}
