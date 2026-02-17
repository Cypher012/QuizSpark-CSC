"use client";

import { useState, useEffect, useCallback } from "react";
import {
  type Question,
  type QuestionV2,
  type ShuffledQuestion,
  isQuestionV2,
} from "@/lib/quiz-types";
import { shuffleQuestions } from "@/lib/utils/question-shuffle";
import {
  getEnabledCourses,
  getCourseById,
  filterByChapter,
  filterByChapters,
  Course,
} from "@/lib/courses";
import QuestionCard from "./question-card";
import ProgressHeader from "./progress-header";
import ResultSummary from "./result-summary";
import ChapterSelect from "./chapter-select";
import CourseSelect from "./course-select";
import QuestionNavigator from "./question-navigator";
import CSC307QuizContainer from "./csc307-quiz-container";

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

export default function QuizContainer() {
  // Course and chapter selection state
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<
    string | null | undefined
  >(undefined);
  const [selectedChapters, setSelectedChapters] = useState<string[] | null>(
    null,
  );
  const [enabledCourses, setEnabledCourses] = useState<Course[]>([]);

  // Quiz state
  const [questions, setQuestions] = useState<
    (Question | QuestionV2 | ShuffledQuestion)[]
  >([]);
  const [isReady, setIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [state, setState] = useState<QuizState>("idle");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState(0);

  // Load enabled courses on mount
  useEffect(() => {
    setEnabledCourses(getEnabledCourses());
  }, []);

  const handleSelectCourse = (courseId: string) => {
    const course = getCourseById(courseId);
    if (course) {
      setSelectedCourse(course);
    }
  };

  const handleSelectChapter = (chapter: string | null) => {
    if (!selectedCourse) return;

    setSelectedChapter(chapter);
    const courseQuestions = selectedCourse.getQuestions();
    const filtered = filterByChapter(courseQuestions, chapter);

    // Check if all questions are V2 format, if so shuffle them
    const processedQuestions = filtered.every(isQuestionV2)
      ? shuffleQuestions(filtered as QuestionV2[])
      : shuffleArray(filtered);

    setQuestions(processedQuestions);
    setIsReady(true);
  };

  const handleSelectCustomChapters = (chapters: string[]) => {
    if (!selectedCourse) return;

    setSelectedChapter(null);
    setSelectedChapters(chapters);
    const courseQuestions = selectedCourse.getQuestions();
    const filtered = filterByChapters(courseQuestions, chapters);

    const processedQuestions = filtered.every(isQuestionV2)
      ? shuffleQuestions(filtered as QuestionV2[])
      : shuffleArray(filtered);

    setQuestions(processedQuestions);
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

    // Handle both old and new question formats for correctness check
    const isCorrect =
      isQuestionV2(currentQuestion) && "displayCorrectAnswer" in currentQuestion
        ? selectedOption === currentQuestion.displayCorrectAnswer
        : isQuestionV2(currentQuestion)
          ? selectedOption ===
            String.fromCharCode(65 + currentQuestion.correctAnswer)
          : selectedOption === (currentQuestion as Question).correctOptionId;

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
    if (!selectedCourse) return;

    const courseQuestions = selectedCourse.getQuestions();
    const filtered = selectedChapters
      ? filterByChapters(courseQuestions, selectedChapters)
      : filterByChapter(courseQuestions, selectedChapter ?? null);

    // Check if all questions are V2 format, if so shuffle them (new shuffle each restart)
    const processedQuestions = filtered.every(isQuestionV2)
      ? shuffleQuestions(filtered as QuestionV2[])
      : shuffleArray(filtered);

    setQuestions(processedQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setState("idle");
    setUserAnswers([]);
    setScore(0);
  };

  const handleBackToChapters = () => {
    setSelectedChapter(undefined);
    setSelectedChapters(null);
    setQuestions([]);
    setIsReady(false);
    setCurrentIndex(0);
    setSelectedOption(null);
    setState("idle");
    setUserAnswers([]);
    setScore(0);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setSelectedChapter(undefined);
    setSelectedChapters(null);
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
    const previousAnswer = userAnswers.find((a) => a.questionId === questionId);
    if (previousAnswer) {
      setCurrentIndex(index);
      setSelectedOption(previousAnswer.selectedOptionId);
      setState("revealed");
    }
  };

  // Show course selection if no course selected yet
  if (!selectedCourse) {
    return (
      <CourseSelect
        courses={enabledCourses}
        onSelectCourse={handleSelectCourse}
      />
    );
  }

  // Handle CSC307 tokenized quiz separately
  if (selectedCourse.quizType === "tokenized") {
    return (
      <CSC307QuizContainer
        chapter={selectedChapter ?? null}
        onBackToChapters={handleBackToChapters}
        onBackToCourses={handleBackToCourses}
      />
    );
  }

  // Show chapter selection if no chapter selected yet
  if (selectedChapter === undefined) {
    return (
      <ChapterSelect
        course={selectedCourse}
        onSelectChapter={handleSelectChapter}
        onSelectCustomChapters={handleSelectCustomChapters}
        onBackToCourses={handleBackToCourses}
      />
    );
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
        onBackToCourses={handleBackToCourses}
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
