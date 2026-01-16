"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  CSC307Question,
  MasteryLevel,
  CSC307QuizMode,
  getTokensForLevel,
  getExpectedAnswers,
  getLevelDescription,
  getLevelBadgeColor,
  getLevelName,
  checkAnswer,
} from "@/lib/courses/csc307-numerical-computation";
import {
  CheckCircle,
  XCircle,
  Eye,
  EyeOff,
  RotateCcw,
  ChevronRight,
  Sparkles,
  MousePointerClick,
} from "lucide-react";

interface TokenizedAnswerCardProps {
  question: CSC307Question;
  mode: CSC307QuizMode;
  level: MasteryLevel;
  onComplete?: (score: number, total: number) => void;
  onNextQuestion?: () => void;
  onLevelUp?: () => void;
  isLastQuestion?: boolean;
}

interface BlankState {
  index: number;
  expectedAnswer: string;
  userAnswer: string;
  isChecked: boolean;
  isCorrect: boolean | null;
  isActive: boolean; // Currently selected for input
}

export default function TokenizedAnswerCard({
  question,
  mode,
  level,
  onComplete,
  onNextQuestion,
  onLevelUp,
  isLastQuestion = false,
}: TokenizedAnswerCardProps) {
  const [blankStates, setBlankStates] = useState<BlankState[]>([]);
  const [showFullAnswer, setShowFullAnswer] = useState(mode === "review");
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeBlankIndex, setActiveBlankIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize blank states when question or level changes
  useEffect(() => {
    if (mode === "review") {
      setBlankStates([]);
      setShowFullAnswer(true);
      setIsCompleted(false);
      setActiveBlankIndex(null);
      return;
    }

    const expectedAnswers = getExpectedAnswers(question, level);
    const tokens = getTokensForLevel(question, level);

    // Map expected answers to their positions
    let answerIndex = 0;
    const states: BlankState[] = [];

    tokens.forEach((token, idx) => {
      if (token.isBlank) {
        states.push({
          index: idx,
          expectedAnswer: expectedAnswers[answerIndex] || "",
          userAnswer: "",
          isChecked: false,
          isCorrect: null,
          isActive: false,
        });
        answerIndex++;
      }
    });

    setBlankStates(states);
    setShowFullAnswer(false);
    setIsCompleted(false);
    setActiveBlankIndex(null);
  }, [question, level, mode]);

  // Focus input when active blank changes
  useEffect(() => {
    if (activeBlankIndex !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeBlankIndex]);

  // Check for completion when all blanks are checked
  useEffect(() => {
    if (blankStates.length === 0) return;

    const allChecked = blankStates.every((s) => s.isChecked);
    if (allChecked && !isCompleted) {
      const correctCount = blankStates.filter((s) => s.isCorrect).length;
      const totalBlanks = blankStates.length;

      if (correctCount === totalBlanks) {
        setIsCompleted(true);
        onComplete?.(correctCount, totalBlanks);
      }
    }
  }, [blankStates, isCompleted, onComplete]);

  // Get processed tokens for display
  const processedTokens = getTokensForLevel(question, level);

  // Handle clicking on a blank to select it
  const handleBlankClick = (blankIndex: number) => {
    const state = blankStates[blankIndex];
    if (state?.isChecked) return; // Don't allow selecting already checked blanks

    setActiveBlankIndex(blankIndex);
    setBlankStates((prev) =>
      prev.map((s, i) => ({
        ...s,
        isActive: i === blankIndex,
      })),
    );
  };

  // Handle input change for active blank
  const handleInputChange = (value: string) => {
    if (activeBlankIndex === null) return;

    setBlankStates((prev) =>
      prev.map((state, i) =>
        i === activeBlankIndex ? { ...state, userAnswer: value } : state,
      ),
    );
  };

  // Check the currently active blank
  const handleCheckCurrentBlank = () => {
    if (activeBlankIndex === null) return;

    const state = blankStates[activeBlankIndex];
    if (!state || !state.userAnswer.trim()) return;

    const isCorrect = checkAnswer(state.expectedAnswer, state.userAnswer);

    setBlankStates((prev) =>
      prev.map((s, i) =>
        i === activeBlankIndex
          ? { ...s, isChecked: true, isCorrect, isActive: false }
          : s,
      ),
    );

    // Find next unchecked blank
    const nextUncheckedIndex = blankStates.findIndex(
      (s, i) => i > activeBlankIndex && !s.isChecked,
    );

    if (nextUncheckedIndex !== -1) {
      setActiveBlankIndex(nextUncheckedIndex);
      setBlankStates((prev) =>
        prev.map((s, i) => ({
          ...s,
          isActive: i === nextUncheckedIndex,
        })),
      );
    } else {
      // Check if there are any unchecked blanks before the current one
      const prevUncheckedIndex = blankStates.findIndex(
        (s, i) => i < activeBlankIndex && !s.isChecked,
      );

      if (prevUncheckedIndex !== -1) {
        setActiveBlankIndex(prevUncheckedIndex);
        setBlankStates((prev) =>
          prev.map((s, i) => ({
            ...s,
            isActive: i === prevUncheckedIndex,
          })),
        );
      } else {
        setActiveBlankIndex(null);
      }
    }
  };

  // Check all remaining unchecked blanks
  const handleCheckAllRemaining = () => {
    const newStates = blankStates.map((state) => {
      if (state.isChecked) return state;
      return {
        ...state,
        isChecked: true,
        isCorrect: checkAnswer(state.expectedAnswer, state.userAnswer),
        isActive: false,
      };
    });

    setBlankStates(newStates);
    setActiveBlankIndex(null);

    const correctCount = newStates.filter((s) => s.isCorrect).length;
    const totalBlanks = newStates.length;

    if (correctCount === totalBlanks) {
      setIsCompleted(true);
      onComplete?.(correctCount, totalBlanks);
    }
  };

  // Reset current attempt
  const handleReset = () => {
    setBlankStates((prev) =>
      prev.map((state) => ({
        ...state,
        userAnswer: "",
        isChecked: false,
        isCorrect: null,
        isActive: false,
      })),
    );
    setActiveBlankIndex(null);
    setIsCompleted(false);
  };

  // Calculate progress
  const totalBlanks = blankStates.length;
  const checkedCount = blankStates.filter((s) => s.isChecked).length;
  const correctCount = blankStates.filter((s) => s.isCorrect === true).length;
  const progressPercent =
    totalBlanks > 0 ? (correctCount / totalBlanks) * 100 : 0;
  const allChecked = checkedCount === totalBlanks && totalBlanks > 0;

  // Find blank state by token index
  const getBlankStateByTokenIndex = (
    tokenIndex: number,
  ): BlankState | undefined => {
    return blankStates.find((s) => s.index === tokenIndex);
  };

  // Get blank input index (for sequential ordering)
  const getBlankInputIndex = (tokenIndex: number): number => {
    return blankStates.findIndex((s) => s.index === tokenIndex);
  };

  // Render token
  const renderToken = (
    token: { text: string; isBlank: boolean; isAnchor: boolean },
    index: number,
  ) => {
    // Anchor token - always visible, highlighted
    if (token.isAnchor) {
      return (
        <span
          key={index}
          className="inline-flex items-center px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 font-semibold"
        >
          {token.text}
        </span>
      );
    }

    // Review mode or showing full answer - show all text
    if (showFullAnswer) {
      const blankState = getBlankStateByTokenIndex(index);
      if (blankState) {
        return (
          <span
            key={index}
            className={cn(
              "inline-flex items-center px-1 py-0.5 rounded font-medium",
              blankState.isCorrect === true &&
                "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200",
              blankState.isCorrect === false &&
                "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200",
              blankState.isCorrect === null &&
                "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",
            )}
          >
            {token.text}
          </span>
        );
      }
      return (
        <span key={index} className="text-slate-700 dark:text-slate-300">
          {token.text}
        </span>
      );
    }

    // Blank token
    if (token.isBlank) {
      const blankState = getBlankStateByTokenIndex(index);
      const blankIndex = getBlankInputIndex(index);

      if (!blankState) return null;

      // Already checked - show result
      if (blankState.isChecked) {
        return (
          <span key={index} className="inline-flex items-center gap-1 my-1">
            <span
              className={cn(
                "inline-flex items-center gap-1 px-2 py-1 rounded border-2",
                blankState.isCorrect
                  ? "bg-green-50 dark:bg-green-900/30 border-green-400 text-green-800 dark:text-green-200"
                  : "bg-red-50 dark:bg-red-900/30 border-red-400 text-red-800 dark:text-red-200",
              )}
            >
              {blankState.isCorrect ? (
                <CheckCircle className="w-4 h-4 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 shrink-0" />
              )}
              <span className="font-medium">
                {blankState.isCorrect
                  ? blankState.userAnswer
                  : blankState.expectedAnswer}
              </span>
              {!blankState.isCorrect && blankState.userAnswer && (
                <span className="text-xs line-through opacity-60">
                  ({blankState.userAnswer})
                </span>
              )}
            </span>
          </span>
        );
      }

      // Clickable blank placeholder
      return (
        <button
          key={index}
          onClick={() => handleBlankClick(blankIndex)}
          className={cn(
            "inline-flex items-center justify-center my-1 px-3 py-1 rounded border-2 border-dashed transition-all",
            "min-w-[80px] text-sm font-medium",
            blankState.isActive
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-2 ring-blue-300"
              : blankState.userAnswer
                ? "border-slate-400 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                : "border-slate-300 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20",
          )}
          style={{
            minWidth: `${Math.max(Math.min(token.text.length * 8, 250), 80)}px`,
          }}
        >
          {blankState.userAnswer || (
            <span className="flex items-center gap-1">
              <MousePointerClick className="w-3 h-3" />
              Blank {blankIndex + 1}
            </span>
          )}
        </button>
      );
    }

    // Regular content token
    return (
      <span key={index} className="text-slate-700 dark:text-slate-300">
        {token.text}
      </span>
    );
  };

  // Get active blank state
  const activeBlank =
    activeBlankIndex !== null ? blankStates[activeBlankIndex] : null;

  return (
    <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700">
        {/* Question Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {question.term}
                {question.yoruba && (
                  <span className="ml-2 text-lg font-normal text-purple-600 dark:text-purple-400">
                    ({question.yoruba})
                  </span>
                )}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                {question.question}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={cn("text-xs", getLevelBadgeColor(level))}>
                Level {level}: {getLevelName(level)}
              </Badge>
              {mode !== "review" && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFullAnswer(!showFullAnswer)}
                  className="shrink-0"
                >
                  {showFullAnswer ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Level Description */}
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            {getLevelDescription(level)}
          </p>
        </div>

        {/* Progress Bar (only in non-review mode) */}
        {mode !== "review" && totalBlanks > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-slate-600 dark:text-slate-400">
                {checkedCount === 0
                  ? `${totalBlanks} blanks - Click any to answer`
                  : `Checked: ${checkedCount}/${totalBlanks} | Correct: ${correctCount}`}
              </span>
              {checkedCount > 0 && (
                <span
                  className={cn(
                    "font-semibold",
                    correctCount === checkedCount
                      ? "text-green-600"
                      : correctCount >= checkedCount * 0.7
                        ? "text-blue-600"
                        : "text-orange-600",
                  )}
                >
                  {checkedCount > 0
                    ? Math.round((correctCount / checkedCount) * 100)
                    : 0}
                  %
                </span>
              )}
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full transition-all duration-500",
                  progressPercent === 100
                    ? "bg-green-500"
                    : progressPercent >= 70
                      ? "bg-blue-500"
                      : "bg-orange-500",
                )}
                style={{ width: `${(checkedCount / totalBlanks) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Answer Area */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
          <p className="text-lg leading-loose">
            {processedTokens.map((token, index) => renderToken(token, index))}
          </p>
        </div>

        {/* Active Blank Input Area */}
        {activeBlank && !showFullAnswer && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center gap-2 mb-3">
              <Badge
                variant="outline"
                className="text-blue-700 dark:text-blue-300 border-blue-400"
              >
                Blank {activeBlankIndex !== null ? activeBlankIndex + 1 : ""}
              </Badge>
              <span className="text-sm text-blue-600 dark:text-blue-400">
                Type your answer below
              </span>
            </div>
            <div className="flex gap-3">
              <Input
                ref={inputRef}
                type="text"
                value={activeBlank.userAnswer}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && activeBlank.userAnswer.trim()) {
                    handleCheckCurrentBlank();
                  }
                  if (e.key === "Escape") {
                    setActiveBlankIndex(null);
                    setBlankStates((prev) =>
                      prev.map((s) => ({ ...s, isActive: false })),
                    );
                  }
                }}
                placeholder="Type your answer..."
                className="flex-1 h-11 text-base border-blue-300 focus:border-blue-500"
                autoFocus
              />
              <Button
                onClick={handleCheckCurrentBlank}
                disabled={!activeBlank.userAnswer.trim()}
                className="h-11 px-6"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Check
              </Button>
            </div>
            <p className="text-xs text-blue-500 dark:text-blue-400 mt-2">
              Press Enter to check, Escape to cancel
            </p>
          </div>
        )}

        {/* Key Points (shown after completion or in review mode) */}
        {(isCompleted || mode === "review") && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Key Points:
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {question.keyPoints.map((point, i) => (
                <li
                  key={i}
                  className="text-blue-800 dark:text-blue-200 text-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Completion Feedback */}
        {isCompleted && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              <span className="font-semibold text-green-900 dark:text-green-100">
                Level {level} Complete! All {totalBlanks} blanks correct.
              </span>
            </div>
            {level < 4 && (
              <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                Ready to try Level {level + 1}?
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-200 dark:border-slate-700">
          {mode !== "review" && !allChecked && checkedCount < totalBlanks && (
            <Button
              onClick={handleCheckAllRemaining}
              variant="outline"
              className="flex-1 min-w-[150px]"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Check All ({totalBlanks - checkedCount} remaining)
            </Button>
          )}

          {mode !== "review" && allChecked && !isCompleted && (
            <Button onClick={handleReset} variant="outline" className="flex-1">
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          )}

          {isCompleted && level < 4 && onLevelUp && (
            <Button onClick={onLevelUp} variant="outline" className="flex-1">
              Level Up to {level + 1}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}

          {(isCompleted || mode === "review" || allChecked) &&
            onNextQuestion && (
              <Button onClick={onNextQuestion} className="flex-1 min-w-[150px]">
                {isLastQuestion ? "See Results" : "Next Question"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
        </div>
      </div>
    </div>
  );
}
