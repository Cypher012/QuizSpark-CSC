"use client";

import { useState } from "react";
import type { Question } from "@/lib/quiz-types";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface UserAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}

interface ResultSummaryProps {
  score: number;
  total: number;
  userAnswers: UserAnswer[];
  questions: Question[];
  onRestart: () => void;
  onBackToChapters?: () => void;
  onBackToCourses?: () => void;
}

export default function ResultSummary({
  score,
  total,
  userAnswers,
  questions,
  onRestart,
  onBackToChapters,
  onBackToCourses,
}: ResultSummaryProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 70;

  const getPerformanceMessage = () => {
    if (percentage === 100) return "Perfect Score!";
    if (percentage >= 90) return "Outstanding!";
    if (percentage >= 80) return "Excellent!";
    if (percentage >= 70) return "Good Job!";
    if (percentage >= 60) return "Not Bad!";
    return "Keep Practicing!";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Summary Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 mb-8 animate-in fade-in duration-500">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2">
              Quiz Complete!
            </h1>
            <p
              className={cn(
                "text-2xl font-semibold",
                passed
                  ? "text-green-600 dark:text-green-400"
                  : "text-orange-600 dark:text-orange-400",
              )}
            >
              {getPerformanceMessage()}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                Score
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                {score}/{total}
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                Percentage
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                {percentage}%
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 text-center col-span-2 sm:col-span-1">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                Correct
              </p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {score}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={onRestart}
              className="flex-1 h-11 text-base font-semibold"
            >
              Restart Quiz
            </Button>
            {onBackToChapters && (
              <Button
                onClick={onBackToChapters}
                variant="outline"
                className="flex-1 h-11 text-base font-semibold"
              >
                Change Chapter
              </Button>
            )}
            {onBackToCourses && (
              <Button
                onClick={onBackToCourses}
                variant="outline"
                className="flex-1 h-11 text-base font-semibold"
              >
                Change Course
              </Button>
            )}
          </div>
        </div>

        {/* Review Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            Review Your Answers
          </h2>

          {userAnswers.map((answer, index) => {
            const question = questions.find((q) => q.id === answer.questionId);
            if (!question) return null;

            const selectedOption = question.options.find(
              (o) => o.id === answer.selectedOptionId,
            );
            const correctOption = question.options.find(
              (o) => o.id === question.correctOptionId,
            );

            return (
              <div
                key={answer.questionId}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() =>
                    setExpandedId(
                      expandedId === answer.questionId
                        ? null
                        : answer.questionId,
                    )
                  }
                  className="w-full p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                          Q{index + 1}
                        </span>
                        <span
                          className={cn(
                            "inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold",
                            answer.isCorrect
                              ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                              : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
                          )}
                        >
                          {answer.isCorrect ? "✓ Correct" : "✗ Wrong"}
                        </span>
                      </div>
                      <p className="text-slate-900 dark:text-white font-medium">
                        {question.text}
                      </p>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-slate-400 transition-transform flex-shrink-0",
                        expandedId === answer.questionId && "rotate-180",
                      )}
                    />
                  </div>
                </button>

                {expandedId === answer.questionId && (
                  <div className="border-t border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-700/30 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-2">
                        Your Answer
                      </p>
                      <p
                        className={cn(
                          "text-sm p-3 rounded border-2",
                          answer.isCorrect
                            ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700 text-green-900 dark:text-green-100"
                            : "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700 text-red-900 dark:text-red-100",
                        )}
                      >
                        {selectedOption?.text}
                      </p>
                    </div>

                    {!answer.isCorrect && (
                      <div>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-2">
                          Correct Answer
                        </p>
                        <p className="text-sm p-3 rounded border-2 bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700 text-green-900 dark:text-green-100">
                          {correctOption?.text}
                        </p>
                      </div>
                    )}

                    {question.explanation && (
                      <div>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-2">
                          Explanation
                        </p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
