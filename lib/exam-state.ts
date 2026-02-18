import type { ShuffledQuestion } from "./quiz-types";

const EXAM_KEY = "quiz-spark-exam-state";

interface UserAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}

export interface PersistedExamState {
  endTimestamp: number;
  questions: ShuffledQuestion[];
  userAnswers: UserAnswer[];
  currentIndex: number;
  score: number;
  courseId: string;
}

export function saveExamState(state: PersistedExamState): void {
  try {
    localStorage.setItem(EXAM_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (SSR or private browsing)
  }
}

export function loadExamState(): PersistedExamState | null {
  try {
    const raw = localStorage.getItem(EXAM_KEY);
    if (!raw) return null;
    const state = JSON.parse(raw) as PersistedExamState;
    // Discard if already expired
    if (state.endTimestamp <= Date.now()) {
      clearExamState();
      return null;
    }
    return state;
  } catch {
    return null;
  }
}

export function clearExamState(): void {
  try {
    localStorage.removeItem(EXAM_KEY);
  } catch {
    // ignore
  }
}
