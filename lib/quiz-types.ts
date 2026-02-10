// ============================================================
// OLD STRUCTURE (for backward compatibility during migration)
// ============================================================
export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctOptionId: string;
  explanation?: string;
  chapter?: string;
}

// ============================================================
// NEW STRUCTURE (index-based with shuffling support)
// ============================================================
export interface QuestionV2 {
  id: string; // Standardized: "cpe301_001"
  course: string; // Required: "CPE 301"
  chapter: string; // Required: "Chapter 1"
  text: string;
  options: string[]; // Simple array: ["Option 1", "Option 2", ...]
  correctAnswer: number; // Index 0-3
  explanation: string; // Required (no optional)
}

export interface ShuffledQuestion extends QuestionV2 {
  displayOptions: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  displayCorrectAnswer: "A" | "B" | "C" | "D";
  originalCorrectAnswer: number;
}

// ============================================================
// TYPE GUARDS
// ============================================================
export function isQuestionV2(
  q: Question | QuestionV2 | ShuffledQuestion,
): q is QuestionV2 | ShuffledQuestion {
  return "correctAnswer" in q && typeof q.correctAnswer === "number";
}

export function isQuestionV1(
  q: Question | QuestionV2 | ShuffledQuestion,
): q is Question {
  return "correctOptionId" in q && typeof q.correctOptionId === "string";
}

export function isShuffledQuestion(
  q: QuestionV2 | ShuffledQuestion,
): q is ShuffledQuestion {
  return "displayOptions" in q && "displayCorrectAnswer" in q;
}
