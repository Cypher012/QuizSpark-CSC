"use client";

import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/courses";
import { type ExamConfig, DURATION_OPTIONS } from "@/lib/quiz-types";
import { filterByChapters } from "@/lib/courses";
import { Clock } from "lucide-react";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-board";

interface PracticeExamModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: Course;
  onStartExam: (config: ExamConfig) => void;
}

const QUESTION_COUNT_OPTIONS = [25, 30, 60, 75, 100, 120, 150];

export default function PracticeExamModal({
  open,
  onOpenChange,
  course,
  onStartExam,
}: PracticeExamModalProps) {
  const allChapterIds = course.chapters.map((c) => c.id);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([
    ...allChapterIds,
  ]);
  const [questionCount, setQuestionCount] = useState<number | null>(null);
  const [durationMinutes, setDurationMinutes] = useState<number | null>(null);

  const availableCount = useMemo(() => {
    if (selectedChapters.length === 0) return 0;
    const all = course.getQuestions();
    return filterByChapters(all, selectedChapters).length;
  }, [selectedChapters, course]);

  const questionOptions = useMemo(
    () => QUESTION_COUNT_OPTIONS.filter((n) => n <= availableCount),
    [availableCount],
  );

  const validQuestionCount =
    questionCount !== null && questionCount <= availableCount;

  const canStart =
    selectedChapters.length > 0 &&
    validQuestionCount &&
    durationMinutes !== null;

  const toggleChapter = (chapterId: string) => {
    setSelectedChapters((prev) => {
      const next = prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId];
      setQuestionCount(null);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedChapters.length === allChapterIds.length) {
      setSelectedChapters([]);
    } else {
      setSelectedChapters([...allChapterIds]);
    }
    setQuestionCount(null);
  };

  const handleStart = () => {
    if (!canStart || questionCount === null || durationMinutes === null) return;
    onStartExam({
      chapters: selectedChapters,
      questionCount,
      durationMinutes,
    });
    onOpenChange(false);
  };

  const allSelected = selectedChapters.length === allChapterIds.length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-board border-2 border-board-line text-board-ink w-[calc(100%-2rem)] sm:max-w-lg max-h-[92dvh] overflow-y-auto p-0 gap-0 rounded-md shadow-2xl">
        {/* Header — chalked notice strip */}
        <div className="board-surface px-6 pt-6 pb-5 border-b border-board-line min-w-0">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-chalk-yellow flex-shrink-0" />
              <div className="min-w-0">
                <DialogTitle className="font-display text-2xl text-board-ink leading-tight">
                  Practice Exam
                </DialogTitle>
                <DialogDescription className="text-board-ink-muted text-xs mt-0.5 truncate">
                  {course.code} &mdash; {course.name}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
        </div>

        <div className="px-6 py-5 space-y-6 min-w-0">
          {/* Step 1 — Chapters */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-chalk-yellow text-chalk-yellow-ink text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <p className="text-sm font-bold text-board-ink">Chapters</p>
              </div>
              <button
                onClick={toggleAll}
                className={`text-xs font-bold text-chalk-coral-bright hover:text-chalk-coral-bright/80 transition-colors rounded ${FOCUS_RING}`}
              >
                {allSelected ? "Deselect all" : "Select all"}
              </button>
            </div>

            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {course.chapters.map((chapter) => {
                const isChecked = selectedChapters.includes(chapter.id);
                return (
                  <label
                    key={chapter.id}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-all duration-200 border ${
                      isChecked
                        ? "bg-chalk-yellow/20 border-chalk-yellow"
                        : "bg-board-2 border-board-line hover:border-board-ink-muted"
                    }`}
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => toggleChapter(chapter.id)}
                    />
                    <div className="min-w-0">
                      <p className="text-board-ink text-sm font-medium leading-tight">
                        {chapter.label}
                      </p>
                      <p className="text-board-ink-muted text-xs truncate">
                        {chapter.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            {selectedChapters.length === 0 ? (
              <p className="text-xs text-chalk-coral-bright bg-chalk-coral/10 border border-chalk-coral/30 rounded-md px-3 py-2.5 mt-2">
                Select at least one chapter
              </p>
            ) : (
              <p className="text-xs text-board-ink-muted mt-2">
                {availableCount} question
                {availableCount !== 1 ? "s" : ""} available
              </p>
            )}
          </div>

          {/* Step 2 — Question Count */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${selectedChapters.length > 0 ? "bg-chalk-yellow text-chalk-yellow-ink" : "bg-board-2 text-board-ink-muted"}`}
              >
                2
              </span>
              <p className="text-sm font-bold text-board-ink">Questions</p>
            </div>

            {questionOptions.length === 0 ? (
              <p className="text-xs text-chalk-coral-bright bg-chalk-coral/10 border border-chalk-coral/30 rounded-md px-3 py-2.5">
                Need at least {QUESTION_COUNT_OPTIONS[0]} questions &mdash;
                select more chapters.
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {questionOptions.map((n) => (
                  <button
                    key={n}
                    onClick={() => setQuestionCount(n)}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 border ${FOCUS_RING} ${
                      questionCount === n
                        ? "bg-chalk-yellow border-chalk-yellow text-chalk-yellow-ink"
                        : "bg-board-2 border-board-line text-board-ink-muted hover:border-board-ink-muted hover:text-board-ink"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Step 3 — Duration */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${validQuestionCount ? "bg-chalk-yellow text-chalk-yellow-ink" : "bg-board-2 text-board-ink-muted"}`}
              >
                3
              </span>
              <p className="text-sm font-bold text-board-ink">Duration</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {DURATION_OPTIONS.map((mins) => (
                <button
                  key={mins}
                  onClick={() => setDurationMinutes(mins)}
                  className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 border ${FOCUS_RING} ${
                    durationMinutes === mins
                      ? "bg-chalk-yellow border-chalk-yellow text-chalk-yellow-ink"
                      : "bg-board-2 border-board-line text-board-ink-muted hover:border-board-ink-muted hover:text-board-ink"
                  }`}
                >
                  {mins}m
                </button>
              ))}
            </div>
          </div>

          {/* Summary + Start */}
          <div className="pt-1">
            {canStart && questionCount && durationMinutes && (
              <div className="flex items-center gap-2 flex-wrap mb-4 px-3 py-2.5 bg-board-2 rounded-md border border-board-line">
                <span className="text-board-ink-muted text-xs">Exam:</span>
                <span className="text-xs font-bold text-board-ink bg-board px-2 py-0.5 rounded-sm border border-board-line">
                  {selectedChapters.length} chapter
                  {selectedChapters.length !== 1 ? "s" : ""}
                </span>
                <span className="text-board-ink-muted text-xs">&middot;</span>
                <span className="text-xs font-bold text-board-ink bg-board px-2 py-0.5 rounded-sm border border-board-line">
                  {questionCount} questions
                </span>
                <span className="text-board-ink-muted text-xs">&middot;</span>
                <span className="text-xs font-bold text-board-ink bg-board px-2 py-0.5 rounded-sm border border-board-line">
                  {durationMinutes} min
                </span>
              </div>
            )}

            <Button
              onClick={handleStart}
              disabled={!canStart}
              className="w-full h-auto min-h-11 py-2 text-sm font-bold rounded-md whitespace-normal text-center leading-snug"
            >
              {canStart ? "Start Exam" : "Complete all steps above"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
