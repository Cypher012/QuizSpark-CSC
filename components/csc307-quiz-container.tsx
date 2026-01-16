"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import TokenizedAnswerCard from "./tokenized-answer-card";
import {
  CSC307Question,
  CSC307QuizMode,
  MasteryLevel,
  getCSC307Questions,
  getLevelBadgeColor,
  getLevelName,
  getLevelDescription,
  countBlanksAtLevel,
} from "@/lib/courses/csc307-numerical-computation";
import {
  ChevronLeft,
  BookOpen,
  GraduationCap,
  Target,
  Trophy,
  RotateCcw,
  Star,
} from "lucide-react";

interface CSC307QuizContainerProps {
  chapter: string | null;
  onBackToChapters: () => void;
  onBackToCourses: () => void;
}

interface QuestionScore {
  questionId: string;
  level: MasteryLevel;
  score: number;
  total: number;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function CSC307QuizContainer({
  chapter,
  onBackToChapters,
  onBackToCourses,
}: CSC307QuizContainerProps) {
  const [mode, setMode] = useState<CSC307QuizMode | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<MasteryLevel>(1);
  const [questions, setQuestions] = useState<CSC307Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLevel, setCurrentLevel] = useState<MasteryLevel>(1);
  const [scores, setScores] = useState<QuestionScore[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  // Load questions on mount
  useEffect(() => {
    const allQuestions = getCSC307Questions();
    setQuestions(shuffleArray(allQuestions));
  }, []);

  // Warn user before leaving during active quiz
  useEffect(() => {
    const isQuizInProgress = mode !== null && !isComplete && scores.length > 0;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isQuizInProgress) {
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [mode, isComplete, scores.length]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelectMode = (
    selectedMode: CSC307QuizMode,
    level?: MasteryLevel,
  ) => {
    setMode(selectedMode);
    if (level) {
      setSelectedLevel(level);
      setCurrentLevel(level);
    } else {
      setCurrentLevel(1);
    }
    setCurrentIndex(0);
    setScores([]);
    setIsComplete(false);
  };

  const handleQuestionComplete = (score: number, total: number) => {
    setScores((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        level: currentLevel,
        score,
        total,
      },
    ]);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setIsComplete(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      // In learn mode, reset to level 1 for new question
      if (mode === "learn") {
        setCurrentLevel(1);
      }
    }
  };

  const handleLevelUp = () => {
    if (currentLevel < 4) {
      setCurrentLevel((prev) => Math.min(prev + 1, 4) as MasteryLevel);
    }
  };

  const handleRestart = () => {
    setQuestions(shuffleArray(getCSC307Questions()));
    setCurrentIndex(0);
    setCurrentLevel(mode === "test" ? selectedLevel : 1);
    setScores([]);
    setIsComplete(false);
  };

  const handleChangeMode = () => {
    setMode(null);
    setCurrentIndex(0);
    setCurrentLevel(1);
    setScores([]);
    setIsComplete(false);
  };

  // Calculate totals
  const totalScore = scores.reduce((acc, s) => acc + s.score, 0);
  const totalPossible = scores.reduce((acc, s) => acc + s.total, 0);
  const percentage =
    totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;

  // Mode selection screen
  if (mode === null) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              onClick={onBackToCourses}
              className="text-slate-300 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              CSC 307: Numerical Computations I
            </h1>
            <p className="text-xl text-slate-300">
              Progressive Mastery Quiz with Yorùbá Terminology
            </p>
            <p className="text-slate-400 mt-2">
              {questions.length} definition questions &bull; 4 mastery levels
            </p>
          </div>

          {/* Mode Selection */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {/* Learn Mode */}
            <button
              onClick={() => handleSelectMode("learn")}
              className={cn(
                "p-6 rounded-xl border-2 border-slate-600 bg-slate-800/50 text-left",
                "hover:border-green-500 hover:bg-slate-800 transition-all duration-200",
                "group",
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-green-500/20 text-green-400 group-hover:bg-green-500/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Learn Mode</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Start at Level 1 and progress through all 4 levels. Master each
                definition step by step.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge className="bg-green-100 text-green-800">
                  Level 1 → 4
                </Badge>
                <Badge className="bg-purple-100 text-purple-800">
                  Progressive
                </Badge>
              </div>
            </button>

            {/* Review Mode */}
            <button
              onClick={() => handleSelectMode("review")}
              className={cn(
                "p-6 rounded-xl border-2 border-slate-600 bg-slate-800/50 text-left",
                "hover:border-blue-500 hover:bg-slate-800 transition-all duration-200",
                "group",
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Review Mode</h3>
              </div>
              <p className="text-slate-400 mb-4">
                View complete definitions with Yorùbá anchors highlighted.
                Perfect for studying before testing.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge className="bg-blue-100 text-blue-800">Read-Only</Badge>
                <Badge className="bg-purple-100 text-purple-800">
                  Anchors Highlighted
                </Badge>
              </div>
            </button>

            {/* Test Mode */}
            <button
              onClick={() => handleSelectMode("test", 1)}
              className={cn(
                "p-6 rounded-xl border-2 border-slate-600 bg-slate-800/50 text-left",
                "hover:border-orange-500 hover:bg-slate-800 transition-all duration-200",
                "group",
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Test Mode</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Choose a level and test all questions at that difficulty.
                Challenge yourself!
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge className="bg-orange-100 text-orange-800">
                  Pick Level
                </Badge>
                <Badge className="bg-red-100 text-red-800">Challenge</Badge>
              </div>
            </button>
          </div>

          {/* Level Selection for Test Mode */}
          {mode === null && (
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Test - Select Level:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {([1, 2, 3, 4] as MasteryLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => handleSelectMode("test", lvl)}
                    className={cn(
                      "p-4 rounded-lg border-2 transition-all",
                      "hover:scale-105",
                      lvl === 1 &&
                        "border-green-500 bg-green-500/10 hover:bg-green-500/20",
                      lvl === 2 &&
                        "border-blue-500 bg-blue-500/10 hover:bg-blue-500/20",
                      lvl === 3 &&
                        "border-orange-500 bg-orange-500/10 hover:bg-orange-500/20",
                      lvl === 4 &&
                        "border-red-500 bg-red-500/10 hover:bg-red-500/20",
                    )}
                  >
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {Array.from({ length: lvl }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-4 h-4",
                            lvl === 1 && "text-green-400",
                            lvl === 2 && "text-blue-400",
                            lvl === 3 && "text-orange-400",
                            lvl === 4 && "text-red-400",
                          )}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="text-white font-semibold">Level {lvl}</p>
                    <p className="text-slate-400 text-xs">
                      {getLevelName(lvl)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Results screen
  if (isComplete) {
    const getPerformanceMessage = () => {
      if (percentage === 100) return "Perfect Mastery!";
      if (percentage >= 90) return "Outstanding!";
      if (percentage >= 80) return "Excellent!";
      if (percentage >= 70) return "Good Progress!";
      if (percentage >= 60) return "Keep Practicing!";
      return "More Study Needed";
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 mb-8 animate-in fade-in duration-500">
            <div className="text-center mb-8">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                Quiz Complete!
              </h1>
              <p
                className={cn(
                  "text-2xl font-semibold",
                  percentage >= 70
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
                  Blanks Correct
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {totalScore}/{totalPossible}
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
                  Questions
                </p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {scores.length}
                </p>
              </div>
            </div>

            {/* Per-question breakdown */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Question Breakdown
              </h3>
              <div className="space-y-3">
                {scores.map((s, i) => {
                  const q = questions.find((q) => q.id === s.questionId);
                  const qPercent =
                    s.total > 0 ? Math.round((s.score / s.total) * 100) : 0;
                  return (
                    <div
                      key={`${s.questionId}-${i}`}
                      className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                    >
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 w-8">
                        Q{i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium text-slate-900 dark:text-white">
                            {q?.term}
                            {q?.yoruba && (
                              <span className="ml-1 text-purple-600 dark:text-purple-400">
                                ({q.yoruba})
                              </span>
                            )}
                          </p>
                          <Badge
                            className={cn(
                              "text-xs",
                              getLevelBadgeColor(s.level),
                            )}
                          >
                            L{s.level}
                          </Badge>
                        </div>
                        <Progress value={qPercent} className="h-2" />
                      </div>
                      <span
                        className={cn(
                          "text-sm font-semibold",
                          qPercent >= 70
                            ? "text-green-600 dark:text-green-400"
                            : "text-orange-600 dark:text-orange-400",
                        )}
                      >
                        {s.score}/{s.total}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleRestart}
                className="flex-1 h-11 text-base font-semibold"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button
                onClick={handleChangeMode}
                variant="outline"
                className="flex-1 h-11 text-base font-semibold"
              >
                Change Mode
              </Button>
              <Button
                onClick={onBackToCourses}
                variant="outline"
                className="flex-1 h-11 text-base font-semibold"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                All Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz in progress
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8 pb-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleChangeMode}
                  className="text-slate-300 hover:text-white -ml-2"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Change Mode
                </Button>
                <Badge
                  className={cn(
                    mode === "learn" && "bg-green-500",
                    mode === "review" && "bg-blue-500",
                    mode === "test" && "bg-orange-500",
                  )}
                >
                  {mode === "learn" && "Learn"}
                  {mode === "review" && "Review"}
                  {mode === "test" && `Test L${selectedLevel}`}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                CSC 307 Quiz
              </h1>
              <p className="text-slate-300">
                Definition {currentIndex + 1} of {questions.length}
              </p>
            </div>
            <div className="text-right bg-slate-700/50 backdrop-blur rounded-lg p-3 sm:p-4 border border-slate-600">
              <p className="text-sm text-slate-300 mb-1">Score</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {totalScore}/{totalPossible || "0"}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Progress
              value={((currentIndex + 1) / questions.length) * 100}
              className="h-2"
            />
            <p className="text-xs text-slate-400 text-right">
              {Math.round(((currentIndex + 1) / questions.length) * 100)}%
              Complete
            </p>
          </div>
        </div>

        {/* Question Card */}
        {currentQuestion && (
          <TokenizedAnswerCard
            question={currentQuestion}
            mode={mode}
            level={currentLevel}
            onComplete={handleQuestionComplete}
            onNextQuestion={handleNextQuestion}
            onLevelUp={mode === "learn" ? handleLevelUp : undefined}
            isLastQuestion={isLastQuestion}
          />
        )}
      </div>
    </div>
  );
}
