"use client";

import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const [questionCount, setQuestionCount] = useState<string>("");
  const [durationMinutes, setDurationMinutes] = useState<string>("");

  const availableCount = useMemo(() => {
    if (selectedChapters.length === 0) return 0;
    const all = course.getQuestions();
    return filterByChapters(all, selectedChapters).length;
  }, [selectedChapters, course]);

  const questionOptions = useMemo(
    () => QUESTION_COUNT_OPTIONS.filter((n) => n <= availableCount),
    [availableCount],
  );

  // Reset question count if it exceeds available after chapter change
  const parsedQuestionCount = parseInt(questionCount, 10);
  const validQuestionCount =
    !isNaN(parsedQuestionCount) && parsedQuestionCount <= availableCount;

  const canStart =
    selectedChapters.length > 0 && validQuestionCount && durationMinutes !== "";

  const toggleChapter = (chapterId: string) => {
    setSelectedChapters((prev) => {
      const next = prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId];
      // Clear question count if it now exceeds available
      setQuestionCount("");
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedChapters.length === allChapterIds.length) {
      setSelectedChapters([]);
    } else {
      setSelectedChapters([...allChapterIds]);
    }
    setQuestionCount("");
  };

  const handleStart = () => {
    if (!canStart) return;
    onStartExam({
      chapters: selectedChapters,
      questionCount: parsedQuestionCount,
      durationMinutes: parseInt(durationMinutes, 10),
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-800 border-slate-700 text-white w-full max-w-2xl max-h-[90dvh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            Practice Exam Mode
          </DialogTitle>
          <p className="text-slate-400 text-sm">
            Set up your timed practice exam for{" "}
            <span className="text-white font-medium">{course.code}</span>
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-2">
          {/* Chapter Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-slate-200">
                Select Chapters
              </p>
              <button
                onClick={toggleAll}
                className="text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors"
              >
                {selectedChapters.length === allChapterIds.length
                  ? "Deselect All"
                  : "Select All"}
              </button>
            </div>
            <div className="space-y-2 max-h-52 sm:max-h-72 overflow-y-auto pr-1">
              {course.chapters.map((chapter) => {
                const isChecked = selectedChapters.includes(chapter.id);
                return (
                  <label
                    key={chapter.id}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                      isChecked
                        ? "bg-amber-900/30 border border-amber-700"
                        : "bg-slate-700/50 border border-slate-600 hover:border-slate-500"
                    }`}
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => toggleChapter(chapter.id)}
                      className="data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                    />
                    <div>
                      <p className="text-white text-sm font-medium">
                        {chapter.label}
                      </p>
                      <p className="text-slate-400 text-xs">
                        {chapter.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
            {selectedChapters.length > 0 && (
              <p className="text-xs text-slate-400 mt-2">
                {availableCount} question{availableCount !== 1 ? "s" : ""}{" "}
                available from selected chapters
              </p>
            )}
            {selectedChapters.length === 0 && (
              <p className="text-xs text-red-400 mt-2">
                Select at least one chapter to continue
              </p>
            )}
          </div>

          {/* Question Count */}
          <div>
            <p className="text-sm font-medium text-slate-200 mb-3">
              Number of Questions
            </p>
            {questionOptions.length === 0 ? (
              <p className="text-xs text-amber-400 bg-amber-900/20 border border-amber-800 rounded-lg px-3 py-2">
                Not enough questions available. Select more chapters to unlock
                question count options (minimum 60 needed).
              </p>
            ) : (
              <Select value={questionCount} onValueChange={setQuestionCount}>
                <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Choose question count..." />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  {questionOptions.map((n) => (
                    <SelectItem
                      key={n}
                      value={String(n)}
                      className="text-white focus:bg-slate-700 focus:text-white"
                    >
                      {n} questions
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          {/* Duration */}
          <div>
            <p className="text-sm font-medium text-slate-200 mb-3">
              Exam Duration
            </p>
            <Select value={durationMinutes} onValueChange={setDurationMinutes}>
              <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Choose duration..." />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 text-white">
                {DURATION_OPTIONS.map((mins) => (
                  <SelectItem
                    key={mins}
                    value={String(mins)}
                    className="text-white focus:bg-slate-700 focus:text-white"
                  >
                    {mins} minutes
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Start Button */}
          <Button
            onClick={handleStart}
            disabled={!canStart}
            className="w-full h-11 bg-amber-600 hover:bg-amber-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-semibold text-base"
          >
            {canStart
              ? `Start Exam — ${parsedQuestionCount} questions, ${durationMinutes} min`
              : "Complete all options above to start"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
