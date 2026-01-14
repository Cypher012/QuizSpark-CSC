"use client";

import { useState, useEffect } from "react";
import { type Question, allQuestions } from "@/lib/quiz-data";
import QuestionCard from "./question-card";
import ProgressHeader from "./progress-header";
import ResultSummary from "./result-summary";
import ChapterSelect from "./chapter-select";
import QuestionNavigator from "./question-navigator";

type QuizState = "idle" | "answered" | "revealed" | "next" | "complete";

interface UserAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function filterByChapter(
  questions: Question[],
  chapter: string | null,
): Question[] {
  if (chapter === null) {
    return questions;
  }
  return questions.filter((q) => q.chapter === chapter);
}

export default function QuizContainer() {
  const [selectedChapter, setSelectedChapter] = useState<
    string | null | undefined
  >(undefined);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isReady, setIsReady] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [state, setState] = useState<QuizState>("idle");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState(0);

  const handleSelectChapter = (chapter: string | null) => {
    setSelectedChapter(chapter);
    const filtered = filterByChapter(allQuestions, chapter);
    setQuestions(shuffleArray(filtered));
    setIsReady(true);
  };

  // Warn user before leaving/refreshing during active quiz
  useEffect(() => {
    const isQuizInProgress =
      isReady && state !== "complete" && userAnswers.length > 0;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isQuizInProgress) {
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isReady, state, userAnswers.length]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const isAnswered = state !== "idle";
  const isRevealed = state === "revealed" || state === "complete";

  const handleSelectOption = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOption(optionId);
    }
  };

  const handleConfirmAnswer = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption === currentQuestion.correctOptionId;

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOptionId: selectedOption,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setState("revealed");
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setState("complete");
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setState("idle");
    }
  };

  const handleRestart = () => {
    const filtered = filterByChapter(allQuestions, selectedChapter ?? null);
    setQuestions(shuffleArray(filtered));
    setCurrentIndex(0);
    setSelectedOption(null);
    setState("idle");
    setUserAnswers([]);
    setScore(0);
  };

  const handleBackToChapters = () => {
    setSelectedChapter(undefined);
    setQuestions([]);
    setIsReady(false);
    setCurrentIndex(0);
    setSelectedOption(null);
    setState("idle");
    setUserAnswers([]);
    setScore(0);
  };

  const handleNavigateToQuestion = (index: number) => {
    // Only allow navigation to answered questions
    const questionId = questions[index]?.id;
    const isQuestionAnswered = userAnswers.some(
      (a) => a.questionId === questionId,
    );
    if (isQuestionAnswered) {
      setCurrentIndex(index);
      setSelectedOption(null);
      setState("revealed");
    }
  };

  // Show chapter selection if no chapter selected yet
  if (selectedChapter === undefined) {
    return <ChapterSelect onSelectChapter={handleSelectChapter} />;
  }

  if (!isReady) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
        <div className="max-w-2xl mx-auto flex items-center justify-center min-h-[50vh]">
          <div className="text-white text-lg">Loading quiz...</div>
        </div>
      </div>
    );
  }

  if (state === "complete") {
    return (
      <ResultSummary
        score={score}
        total={questions.length}
        userAnswers={userAnswers}
        questions={questions}
        onRestart={handleRestart}
        onBackToChapters={handleBackToChapters}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8 pb-20">
      <div className="max-w-2xl mx-auto">
        <ProgressHeader
          current={currentIndex + 1}
          total={questions.length}
          score={score}
        />

        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          isRevealed={isRevealed}
          onSelectOption={handleSelectOption}
          onConfirmAnswer={handleConfirmAnswer}
          onNextQuestion={handleNextQuestion}
          isLastQuestion={isLastQuestion}
        />
      </div>

      <QuestionNavigator
        totalQuestions={questions.length}
        currentIndex={currentIndex}
        userAnswers={userAnswers}
        questionIds={questions.map((q) => q.id)}
        onNavigate={handleNavigateToQuestion}
      />
    </div>
  );
}
