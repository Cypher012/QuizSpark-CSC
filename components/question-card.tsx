"use client";

import type { Question, QuestionV2, ShuffledQuestion } from "@/lib/quiz-types";
import { isQuestionV2, isShuffledQuestion } from "@/lib/quiz-types";
import OptionButton from "./option-button";
import FeedbackPanel from "./feedback-panel";
import { Button } from "@/components/ui/button";

interface QuestionCardProps {
  question: Question | QuestionV2 | ShuffledQuestion; // Support all question types
  selectedOption: string | null;
  isRevealed: boolean;
  onSelectOption: (optionId: string) => void;
  onConfirmAnswer: () => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

export default function QuestionCard({
  question,
  selectedOption,
  isRevealed,
  onSelectOption,
  onConfirmAnswer,
  onNextQuestion,
  isLastQuestion,
}: QuestionCardProps) {
  // Handle both old and new question formats for correctness check
  const isCorrect =
    isQuestionV2(question) && isShuffledQuestion(question)
      ? selectedOption === question.displayCorrectAnswer
      : isQuestionV2(question)
        ? selectedOption === String(question.correctAnswer)
        : selectedOption === (question as Question).correctOptionId;

  return (
    <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700">
        {/* Question Text */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-balance">
            {question.text}
          </h2>
          {question.chapter && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              {question.chapter}
            </p>
          )}
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {isQuestionV2(question) && isShuffledQuestion(question)
            ? // Render shuffled V2 questions with A/B/C/D labels
              Object.entries(question.displayOptions).map(([label, text]) => (
                <OptionButton
                  key={label}
                  option={text}
                  optionLabel={label as "A" | "B" | "C" | "D"}
                  isSelected={selectedOption === label}
                  isCorrect={label === question.displayCorrectAnswer}
                  isRevealed={isRevealed}
                  onClick={() => onSelectOption(label)}
                  isDisabled={isRevealed}
                />
              ))
            : isQuestionV2(question)
              ? // Render non-shuffled V2 questions
                question.options.map((text, index) => {
                  const label = String.fromCharCode(65 + index) as
                    | "A"
                    | "B"
                    | "C"
                    | "D";
                  return (
                    <OptionButton
                      key={label}
                      option={text}
                      optionLabel={label}
                      isSelected={selectedOption === label}
                      isCorrect={index === question.correctAnswer}
                      isRevealed={isRevealed}
                      onClick={() => onSelectOption(label)}
                      isDisabled={isRevealed}
                    />
                  );
                })
              : // Render old V1 questions
                (question as Question).options.map((option) => (
                  <OptionButton
                    key={option.id}
                    option={option}
                    isSelected={selectedOption === option.id}
                    isCorrect={
                      option.id === (question as Question).correctOptionId
                    }
                    isRevealed={isRevealed}
                    onClick={() => onSelectOption(option.id)}
                    isDisabled={isRevealed}
                  />
                ))}
        </div>

        {/* Feedback Panel */}
        {isRevealed && (
          <FeedbackPanel
            isCorrect={isCorrect}
            explanation={question.explanation}
          />
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6 border-t border-slate-200 dark:border-slate-700">
          {!isRevealed ? (
            <Button
              onClick={onConfirmAnswer}
              disabled={!selectedOption}
              className="flex-1 h-10 sm:h-11 text-base font-semibold transition-all duration-200"
            >
              Confirm Answer
            </Button>
          ) : (
            <Button
              onClick={onNextQuestion}
              className="flex-1 h-10 sm:h-11 text-base font-semibold transition-all duration-200"
            >
              {isLastQuestion ? "See Results" : "Next Question"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
