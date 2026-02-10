import { Question, QuestionV2 } from '../quiz-types';

/**
 * Converts a question from the old structure to the new V2 structure.
 * Used during migration to convert old question data.
 *
 * @param oldQuestion - Question in old format with Option objects
 * @param courseName - Name of the course (e.g., "CPE 301")
 * @returns Question in new V2 format with string array options
 */
export function convertQuestionToV2(
  oldQuestion: Question,
  courseName: string
): QuestionV2 {
  // Map option IDs to array indices
  const optionIdToIndex: Record<string, number> = {
    'a': 0,
    'A': 0,
    'b': 1,
    'B': 1,
    'c': 2,
    'C': 2,
    'd': 3,
    'D': 3
  };

  return {
    id: oldQuestion.id, // ID standardization happens during data migration
    course: courseName,
    chapter: oldQuestion.chapter || 'Unknown',
    text: oldQuestion.text,
    options: oldQuestion.options.map(opt => opt.text),
    correctAnswer: optionIdToIndex[oldQuestion.correctOptionId],
    explanation: oldQuestion.explanation || ''
  };
}

/**
 * Converts an array of questions from old to new format.
 *
 * @param oldQuestions - Array of questions in old format
 * @param courseName - Name of the course
 * @returns Array of questions in new V2 format
 */
export function convertQuestionsToV2(
  oldQuestions: Question[],
  courseName: string
): QuestionV2[] {
  return oldQuestions.map(q => convertQuestionToV2(q, courseName));
}
