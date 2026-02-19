"use client";

import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/courses";
import type { ExamConfig } from "@/lib/quiz-types";
import { filterByChapters } from "@/lib/courses";

interface PracticeExamModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: Course;
  onStartExam: (config: ExamConfig) => void;
}

const DURATION_OPTIONS = [10, 15, 20, 30, 45, 60];
const QUESTION_COUNT_OPTIONS = [60, 100, 120, 150];

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
      <DialogContent className="bg-slate-900 border border-slate-700/60 text-white w-full max-w-lg max-h-[92dvh] overflow-y-auto p-0 gap-0 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="px-6 pt-6 pb-5 border-b border-slate-700/60">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <DialogTitle className="text-lg font-semibold text-white leading-tight">
                  Practice Exam
                </DialogTitle>
                <p className="text-slate-400 text-xs mt-0.5">
                  {course.code} — {course.name}
                </p>
              </div>
            </div>
          </DialogHeader>
        </div>

        <div className="px-6 py-5 space-y-6">
          {/* Step 1 — Chapters */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-black text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <p className="text-sm font-semibold text-white">Chapters</p>
              </div>
              <button
                onClick={toggleAll}
                className="text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors"
              >
                {allSelected ? "Deselect all" : "Select all"}
              </button>
            </div>

            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
              {course.chapters.map((chapter) => {
                const isChecked = selectedChapters.includes(chapter.id);
                return (
                  <label
                    key={chapter.id}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                      isChecked
                        ? "bg-amber-500/10 border border-amber-500/40"
                        : "bg-slate-800/60 border border-slate-700/50 hover:border-slate-600"
                    }`}
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => toggleChapter(chapter.id)}
                      className="data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500 border-slate-500"
                    />
                    <div className="min-w-0">
                      <p className="text-white text-sm font-medium leading-tight">
                        {chapter.label}
                      </p>
                      <p className="text-slate-400 text-xs truncate">
                        {chapter.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            <p
              className={`text-xs mt-2 ${selectedChapters.length === 0 ? "text-red-400" : "text-slate-500"}`}
            >
              {selectedChapters.length === 0
                ? "Select at least one chapter"
                : `${availableCount} question${availableCount !== 1 ? "s" : ""} available`}
            </p>
          </div>

          {/* Step 2 — Question Count */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${selectedChapters.length > 0 ? "bg-amber-500 text-black" : "bg-slate-700 text-slate-400"}`}
              >
                2
              </span>
              <p className="text-sm font-semibold text-white">Questions</p>
            </div>

            {questionOptions.length === 0 ? (
              <p className="text-xs text-amber-400/80 bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-2.5">
                Need at least 60 questions — select more chapters.
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {questionOptions.map((n) => (
                  <button
                    key={n}
                    onClick={() => setQuestionCount(n)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 border ${
                      questionCount === n
                        ? "bg-amber-500 border-amber-500 text-black"
                        : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
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
                className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${validQuestionCount ? "bg-amber-500 text-black" : "bg-slate-700 text-slate-400"}`}
              >
                3
              </span>
              <p className="text-sm font-semibold text-white">Duration</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {DURATION_OPTIONS.map((mins) => (
                <button
                  key={mins}
                  onClick={() => setDurationMinutes(mins)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 border ${
                    durationMinutes === mins
                      ? "bg-amber-500 border-amber-500 text-black"
                      : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
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
              <div className="flex items-center gap-2 flex-wrap mb-4 px-3 py-2.5 bg-slate-800/60 rounded-xl border border-slate-700/50">
                <span className="text-slate-400 text-xs">Exam:</span>
                <span className="text-xs font-medium text-white bg-slate-700 px-2 py-0.5 rounded-lg">
                  {selectedChapters.length} chapter
                  {selectedChapters.length !== 1 ? "s" : ""}
                </span>
                <span className="text-slate-600 text-xs">·</span>
                <span className="text-xs font-medium text-white bg-slate-700 px-2 py-0.5 rounded-lg">
                  {questionCount} questions
                </span>
                <span className="text-slate-600 text-xs">·</span>
                <span className="text-xs font-medium text-white bg-slate-700 px-2 py-0.5 rounded-lg">
                  {durationMinutes} min
                </span>
              </div>
            )}

            <Button
              onClick={handleStart}
              disabled={!canStart}
              className="w-full h-11 bg-amber-500 hover:bg-amber-400 disabled:bg-slate-800 disabled:text-slate-600 disabled:border disabled:border-slate-700 text-black font-semibold text-sm rounded-xl transition-all duration-150"
            >
              {canStart ? "Start Exam" : "Complete all steps above"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
