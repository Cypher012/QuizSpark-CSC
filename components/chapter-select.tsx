"use client";

import { useMemo, useState } from "react";
import { Course, filterByChapter, filterByChapters } from "@/lib/courses";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import PracticeExamModal from "./practice-exam-modal";
import ShufflePromptModal from "./shuffle-prompt-modal";
import type { ExamConfig } from "@/lib/quiz-types";
import ThemeToggle from "./theme-toggle";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Clock,
} from "lucide-react";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-board";

// Question-count picker is currently a one-course pilot -- MTH302 has enough
// depth per chapter to make trimming a run worthwhile.
const QUESTION_COUNT_COURSES = ["MTH302"];
const QUESTION_COUNT_OPTIONS = [10, 15, 20, 25];

interface ChapterSelectProps {
  course: Course;
  onSelectChapter: (
    chapter: string | null,
    shuffle: boolean,
    durationMinutes: number | null,
    studyMode: boolean,
    questionCount: number | null,
  ) => void;
  onSelectCustomChapters: (
    chapters: string[],
    shuffle: boolean,
    durationMinutes: number | null,
    studyMode: boolean,
    questionCount: number | null,
  ) => void;
  onStartExam: (config: ExamConfig) => void;
  onBackToCourses: () => void;
}

type PendingSelection =
  | { kind: "chapter"; chapterId: string | null }
  | { kind: "custom"; chapters: string[] };

export default function ChapterSelect({
  course,
  onSelectChapter,
  onSelectCustomChapters,
  onStartExam,
  onBackToCourses,
}: ChapterSelectProps) {
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [pendingSelection, setPendingSelection] =
    useState<PendingSelection | null>(null);

  const allChapterIds = course.chapters.map((c) => c.id);

  const chapterQuestionCounts = useMemo(() => {
    const questions = course.getQuestions();
    const counts: Record<string, number> = {};
    for (const chapter of course.chapters) {
      counts[chapter.id] = filterByChapter(questions, chapter.id).length;
    }
    return counts;
  }, [course]);

  const toggleCustomMode = () => {
    if (!isCustomMode) {
      setSelectedChapters([...allChapterIds]);
    }
    setIsCustomMode(!isCustomMode);
  };

  const toggleChapter = (chapterId: string) => {
    setSelectedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId],
    );
  };

  const toggleAll = () => {
    if (selectedChapters.length === allChapterIds.length) {
      setSelectedChapters([]);
    } else {
      setSelectedChapters([...allChapterIds]);
    }
  };

  const requestStart = (selection: PendingSelection) => {
    setPendingSelection(selection);
  };

  const showQuestionCountPicker = QUESTION_COUNT_COURSES.includes(course.code);

  // Available pool for the pending selection, used to cap/label the
  // question-count options in the setup modal.
  const pendingAvailableCount = useMemo(() => {
    if (!pendingSelection) return 0;
    const questions = course.getQuestions();
    return pendingSelection.kind === "chapter"
      ? filterByChapter(questions, pendingSelection.chapterId).length
      : filterByChapters(questions, pendingSelection.chapters).length;
  }, [pendingSelection, course]);

  const pendingQuestionCountOptions = showQuestionCountPicker
    ? QUESTION_COUNT_OPTIONS.filter((n) => n < pendingAvailableCount)
    : undefined;

  const handleStart = (
    shuffle: boolean,
    durationMinutes: number | null,
    studyMode: boolean,
    questionCount: number | null,
  ) => {
    const selection = pendingSelection;
    setPendingSelection(null);
    if (!selection) return;
    if (selection.kind === "chapter") {
      onSelectChapter(
        selection.chapterId,
        shuffle,
        durationMinutes,
        studyMode,
        questionCount,
      );
    } else {
      onSelectCustomChapters(
        selection.chapters,
        shuffle,
        durationMinutes,
        studyMode,
        questionCount,
      );
    }
  };

  const handleStartCustomQuiz = () => {
    if (selectedChapters.length === 0) return;

    if (selectedChapters.length === allChapterIds.length) {
      requestStart({ kind: "chapter", chapterId: null });
    } else if (selectedChapters.length === 1) {
      requestStart({ kind: "chapter", chapterId: selectedChapters[0] });
    } else {
      requestStart({ kind: "custom", chapters: selectedChapters });
    }
  };

  const allSelected = selectedChapters.length === allChapterIds.length;

  return (
    <div className="min-h-screen board-surface px-3 py-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
        {/* Back button */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <button
            onClick={onBackToCourses}
            className={`flex items-center text-board-ink-muted hover:text-chalk-yellow transition-colors group rounded-lg ${FOCUS_RING}`}
          >
            <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Courses
          </button>
          <ThemeToggle />
        </div>

        <div className="text-center mb-8">
          <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-bold tracking-wide bg-chalk-yellow text-chalk-yellow-ink rounded-sm -rotate-1 mb-4">
            {course.code}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl text-board-ink chalk-underline mb-3">
            {course.name}
          </h1>
          <p className="text-board-ink-muted">
            Choose a specific chapter to focus on, or take the full quiz with
            all chapters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {course.chapters.map((chapter, i) => {
            const questionCount = chapterQuestionCounts[chapter.id] ?? 0;
            const isEmpty = questionCount === 0;
            return (
              <button
                key={chapter.id}
                onClick={() =>
                  !isEmpty &&
                  requestStart({ kind: "chapter", chapterId: chapter.id })
                }
                disabled={isEmpty}
                className={`paper-surface rounded-md shadow-[0_10px_24px_-10px_rgba(15,20,17,0.55)] hover:shadow-[0_16px_32px_-10px_rgba(15,20,17,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-left group pl-9 pr-4 py-4 sm:pl-16 sm:pr-6 sm:py-6 disabled:opacity-60 disabled:hover:shadow-[0_10px_24px_-10px_rgba(15,20,17,0.55)] disabled:hover:translate-y-0 disabled:cursor-not-allowed ${FOCUS_RING}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-rule-red">
                      Ch. {chapter.id.split(" ")[1]}
                    </span>
                    <h2 className="text-lg font-bold text-paper-ink group-hover:text-rule-red transition-colors leading-snug mt-0.5">
                      {chapter.label}
                    </h2>
                    <p className="text-paper-ink-muted text-sm mt-1">
                      {isEmpty
                        ? "No questions available yet"
                        : chapter.description}
                    </p>
                  </div>
                  {!isEmpty && (
                    <ChevronRight className="w-5 h-5 text-paper-ink-muted group-hover:text-rule-red group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* All Chapters option */}
          <button
            onClick={() => requestStart({ kind: "chapter", chapterId: null })}
            className={`paper-surface rounded-md shadow-[0_10px_24px_-10px_rgba(15,20,17,0.55)] hover:shadow-[0_16px_32px_-10px_rgba(15,20,17,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-left group pl-9 pr-4 py-4 sm:pl-16 sm:pr-6 sm:py-6 ${FOCUS_RING}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-chalk-sage uppercase tracking-wide">
                  Everything
                </span>
                <h2 className="text-lg font-bold text-paper-ink leading-snug mt-0.5">
                  All Chapters
                </h2>
                <p className="text-paper-ink-muted text-sm mt-1">
                  All questions from every chapter
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-chalk-sage group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
            </div>
          </button>

          {/* Custom Quiz option */}
          <button
            onClick={toggleCustomMode}
            className={`paper-surface rounded-md shadow-[0_10px_24px_-10px_rgba(15,20,17,0.55)] hover:shadow-[0_16px_32px_-10px_rgba(15,20,17,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-left group pl-9 pr-4 py-4 sm:pl-16 sm:pr-6 sm:py-6 ${FOCUS_RING}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-rule-blue uppercase tracking-wide">
                  Pick &amp; mix
                </span>
                <h2 className="text-lg font-bold text-paper-ink leading-snug mt-0.5">
                  Custom Quiz
                </h2>
                <p className="text-paper-ink-muted text-sm mt-1">
                  Pick specific chapters to combine
                </p>
              </div>
              {isCustomMode ? (
                <ChevronUp className="w-5 h-5 text-paper-ink-muted flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-paper-ink-muted flex-shrink-0" />
              )}
            </div>
          </button>

          {/* Custom selection panel */}
          {isCustomMode && (
            <div className="sm:col-span-2 paper-surface-plain rounded-md border-2 border-dashed border-paper-line p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-paper-ink-muted">
                  {selectedChapters.length} of {allChapterIds.length} chapters
                  selected
                </p>
                <button
                  onClick={toggleAll}
                  className={`text-sm font-bold text-rule-red hover:text-chalk-coral transition-colors rounded ${FOCUS_RING}`}
                >
                  {allSelected ? "Deselect All" : "Select All"}
                </button>
              </div>

              <div className="space-y-2">
                {course.chapters.map((chapter) => {
                  const isChecked = selectedChapters.includes(chapter.id);
                  return (
                    <label
                      key={chapter.id}
                      className={`flex items-center gap-3 p-4 rounded-md cursor-pointer transition-all duration-200 border ${
                        isChecked
                          ? "bg-chalk-yellow/15 border-chalk-yellow"
                          : "bg-paper border-paper-line hover:border-paper-ink-muted"
                      }`}
                    >
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={() => toggleChapter(chapter.id)}
                      />
                      <div>
                        <p className="text-paper-ink font-medium">
                          {chapter.label}
                        </p>
                        <p className="text-paper-ink-muted text-sm">
                          {chapter.description}
                        </p>
                      </div>
                    </label>
                  );
                })}
              </div>

              <Button
                onClick={handleStartCustomQuiz}
                disabled={selectedChapters.length === 0}
                className="w-full h-auto p-4 text-base font-bold rounded-md whitespace-normal text-center leading-snug"
              >
                {selectedChapters.length === 0
                  ? "Select at least one chapter"
                  : `Start Quiz (${selectedChapters.length} ${selectedChapters.length === 1 ? "chapter" : "chapters"})`}
              </Button>
            </div>
          )}
        </div>

        {/* Practice Exam Mode — chalked on the board, not on paper: this is the real test */}
        <button
          onClick={() => setIsExamModalOpen(true)}
          className={`board-surface rounded-md border border-board-line shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_32px_-10px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 transition-all duration-200 text-left group mt-4 p-6 ${FOCUS_RING}`}
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="chalk-underline inline-block font-display text-chalk-yellow text-base mb-1">
                Practice Exam
              </span>
              <p className="text-board-ink-muted text-sm mt-1">
                Timed &middot; pick chapters, question count &amp; duration
              </p>
            </div>
            <Clock className="w-6 h-6 text-chalk-yellow group-hover:rotate-12 transition-transform flex-shrink-0" />
          </div>
        </button>
      </div>

      <PracticeExamModal
        open={isExamModalOpen}
        onOpenChange={setIsExamModalOpen}
        course={course}
        onStartExam={onStartExam}
      />

      <ShufflePromptModal
        open={pendingSelection !== null}
        onOpenChange={(open) => {
          if (!open) setPendingSelection(null);
        }}
        onStart={handleStart}
        questionCountOptions={pendingQuestionCountOptions}
        availableCount={pendingAvailableCount}
      />
    </div>
  );
}
