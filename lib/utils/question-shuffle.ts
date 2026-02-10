import { QuestionV2, ShuffledQuestion } from '../quiz-types';

/**
 * Shuffles the options of a single question while tracking the correct answer.
 * Uses Fisher-Yates shuffle for randomization.
 *
 * @param question - The question to shuffle
 * @returns A shuffled question with displayOptions (A-D) and displayCorrectAnswer
 */
export function shuffleQuestion(question: QuestionV2): ShuffledQuestion {
  // Get the text of the correct answer before shuffling
  const correctText = question.options[question.correctAnswer];

  // Create a shuffled copy of the options
  const shuffled = [...question.options].sort(() => Math.random() - 0.5);

  // Find the new index of the correct answer after shuffling
  const newIndex = shuffled.indexOf(correctText);

  return {
    ...question,
    displayOptions: {
      A: shuffled[0],
      B: shuffled[1],
      C: shuffled[2],
      D: shuffled[3]
    },
    displayCorrectAnswer: String.fromCharCode(65 + newIndex) as 'A' | 'B' | 'C' | 'D',
    originalCorrectAnswer: question.correctAnswer
  };
}

/**
 * Shuffles an array of questions.
 * Each question's options are independently shuffled.
 *
 * @param questions - Array of questions to shuffle
 * @returns Array of shuffled questions
 */
export function shuffleQuestions(questions: QuestionV2[]): ShuffledQuestion[] {
  return questions.map(shuffleQuestion);
}
