import { Course } from "../../courses";
import {
  csc307Chapter1Questions,
  CSC307Question,
  CSC307QuestionBank,
  Token,
} from "./chapter-1";

// Re-export types for use elsewhere
export type { CSC307Question, CSC307QuestionBank, Token };

// Mastery levels for the quiz
export type MasteryLevel = 1 | 2 | 3 | 4;

// Quiz modes
export type CSC307QuizMode =
  | "learn" // Progressive mastery through levels 1-4
  | "review" // View full answers with highlighted anchors
  | "test"; // Test mode - pick a level and complete all questions

// User progress tracking for a single question
export interface CSC307QuestionProgress {
  questionId: string;
  completedLevels: MasteryLevel[];
  currentLevel: MasteryLevel;
  attempts: number;
  lastAttemptDate?: string;
}

// Get all CSC 307 questions
export function getCSC307Questions(): CSC307QuestionBank {
  return [...csc307Chapter1Questions];
}

/**
 * Get tokens for a specific mastery level
 * @param question - The question object
 * @param level - Mastery level (1-4)
 * @returns Array of tokens with visibility info for rendering
 */
export function getTokensForLevel(
  question: CSC307Question,
  level: MasteryLevel,
): { text: string; isBlank: boolean; isAnchor: boolean }[] {
  return question.tokens.map((token) => {
    const isAnchor = token.type === "anchor";
    const isBlank =
      !isAnchor &&
      token.blankAtLevel !== undefined &&
      token.blankAtLevel <= level;

    return {
      text: token.text,
      isBlank,
      isAnchor,
    };
  });
}

/**
 * Get only the blanked tokens for a level (for answer checking)
 * @param question - The question object
 * @param level - Mastery level (1-4)
 * @returns Array of expected answers in order
 */
export function getExpectedAnswers(
  question: CSC307Question,
  level: MasteryLevel,
): string[] {
  return question.tokens
    .filter(
      (token) =>
        token.type === "content" &&
        token.blankAtLevel !== undefined &&
        token.blankAtLevel <= level,
    )
    .map((token) => token.text.trim());
}

/**
 * Get level description
 */
export function getLevelDescription(level: MasteryLevel): string {
  const descriptions: Record<MasteryLevel, string> = {
    1: "Beginner - Fill in key terms only",
    2: "Intermediate - Fill in key phrases",
    3: "Advanced - Fill in most content",
    4: "Master - Full recall (only Yorùbá/formulas shown)",
  };
  return descriptions[level];
}

// Helper: Count blanks at a specific level
export function countBlanksAtLevel(
  question: CSC307Question,
  level: MasteryLevel,
): number {
  return question.tokens.filter(
    (t) =>
      t.type === "content" &&
      t.blankAtLevel !== undefined &&
      t.blankAtLevel <= level,
  ).length;
}

// Helper: Count anchors in a question
export function countAnchors(question: CSC307Question): number {
  return question.tokens.filter((t) => t.type === "anchor").length;
}

// Helper: Check if answer matches (case-insensitive, trim whitespace)
export function checkAnswer(expected: string, userAnswer: string): boolean {
  const normalizedExpected = expected.toLowerCase().trim();
  const normalizedAnswer = userAnswer.toLowerCase().trim();
  return normalizedExpected === normalizedAnswer;
}

// Helper: Get level color class
export function getLevelColor(level: MasteryLevel): string {
  switch (level) {
    case 1:
      return "text-green-500";
    case 2:
      return "text-blue-500";
    case 3:
      return "text-orange-500";
    case 4:
      return "text-red-500";
  }
}

// Helper: Get level badge color class
export function getLevelBadgeColor(level: MasteryLevel): string {
  switch (level) {
    case 1:
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case 2:
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case 3:
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    case 4:
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
  }
}

// Helper: Get level name
export function getLevelName(level: MasteryLevel): string {
  switch (level) {
    case 1:
      return "Beginner";
    case 2:
      return "Intermediate";
    case 3:
      return "Advanced";
    case 4:
      return "Master";
  }
}

// Course definition for CSC 307
export const csc307NumericalComputationCourse: Course = {
  id: "csc307-numerical-computation",
  code: "CSC307",
  name: "Numerical Computations I",
  description:
    "Progressive mastery quiz for definition-type theory questions in Numerical Computations. Features tokenized answers with Yorùbá terminology and 4-level difficulty progression.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Fundamental Definitions",
      description:
        "Core definitions including Computing (Ìṣirò), Computation, Numerical-term (Ọ̀nkà), Constant (Ẹyọ), Fraction (Àabọ̀), Process (Ìlànọ̀n), Polynomial, and Algorithm. Features 4-level progressive mastery system.",
    },
  ],
  // This returns an empty array since CSC307 uses a different question format
  getQuestions: () => [],
};
