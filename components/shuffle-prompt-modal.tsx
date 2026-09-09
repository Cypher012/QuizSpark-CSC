"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DURATION_OPTIONS } from "@/lib/quiz-types";
import { Shuffle } from "lucide-react";

const FOCUS_RING =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-chalk-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-board";

interface ShufflePromptModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStart: (
    shuffle: boolean,
    durationMinutes: number | null,
    studyMode: boolean,
    questionCount: number | null,
  ) => void;
  // Only set for courses that offer a question-count picker (currently
  // MTH302); omitted elsewhere so the step doesn't render.
  questionCountOptions?: number[];
  availableCount?: number;
}

export default function ShufflePromptModal({
  open,
  onOpenChange,
  onStart,
  questionCountOptions,
  availableCount,
}: ShufflePromptModalProps) {
  const [shuffle, setShuffle] = useState(true);
  const [durationMinutes, setDurationMinutes] = useState<number | null>(null);
  const [studyMode, setStudyMode] = useState(false);
  const [questionCount, setQuestionCount] = useState<number | null>(null);
  const showQuestionCountStep =
    !!questionCountOptions && questionCountOptions.length > 0;

  // Don't carry the previous quiz's choices into a fresh prompt.
  useEffect(() => {
    if (open) {
      setShuffle(true);
      setDurationMinutes(null);
      setStudyMode(false);
      setQuestionCount(null);
    }
  }, [open]);

  const handleStart = () => {
    // Study mode is a read-through, so a countdown would be meaningless.
    onStart(shuffle, studyMode ? null : durationMinutes, studyMode, questionCount);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-board border-2 border-board-line text-board-ink w-[calc(100%-2rem)] sm:max-w-sm max-h-[92dvh] overflow-y-auto rounded-md shadow-2xl">
        <Shuffle className="w-9 h-9 text-chalk-yellow mb-2" />
        <DialogHeader>
          <DialogTitle className="text-board-ink text-lg font-bold mb-1">
            Set Up Your Quiz
          </DialogTitle>
          <DialogDescription className="text-board-ink-muted text-sm leading-relaxed">
            Answer options are always shuffled. Choose the question order, how
            you want to work through them, and whether to run against a clock.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 pt-1">
          {/* Step 1 -- Question order */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-full bg-chalk-yellow text-chalk-yellow-ink text-xs font-bold flex items-center justify-center">
                1
              </span>
              <p className="text-sm font-bold text-board-ink">
                Question order
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShuffle(false)}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 border ${FOCUS_RING} ${
                  !shuffle
                    ? "bg-chalk-yellow border-chalk-yellow text-chalk-yellow-ink"
                    : "bg-board-2 border-board-line text-board-ink-muted hover:border-board-ink-muted hover:text-board-ink"
                }`}
              >
                Written order
              </button>
              <button
                onClick={() => setShuffle(true)}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 border ${FOCUS_RING} ${
                  shuffle
                    ? "bg-chalk-yellow border-chalk-yellow text-chalk-yellow-ink"
                    : "bg-board-2 border-board-line text-board-ink-muted hover:border-board-ink-muted hover:text-board-ink"
                }`}
              >
                Shuffle
              </button>
            </div>
          </div>

          {/* Step 2 -- Quiz vs. study (answers pre-revealed) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-full bg-chalk-yellow text-chalk-yellow-ink text-xs font-bold flex items-center justify-center">
                2
              </span>
              <p className="text-sm font-bold text-board-ink">Mode</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStudyMode(false)}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 border ${FOCUS_RING} ${
                  !studyMode
                    ? "bg-chalk-yellow border-chalk-yellow text-chalk-yellow-ink"
                    : "bg-board-2 border-board-line text-board-ink-muted hover:border-board-ink-muted hover:text-board-ink"
                }`}
              >
                Quiz me
              </button>
              <button
                onClick={() => setStudyMode(true)}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 border ${FOCUS_RING} ${
                  studyMode
                    ? "bg-chalk-yellow border-chalk-yellow text-chalk-yellow-ink"
                    : "bg-board-2 border-board-line text-board-ink-muted hover:border-board-ink-muted hover:text-board-ink"
                }`}
              >
                Show answers
              </button>
            </div>
            <p className="text-xs text-board-ink-muted mt-2 leading-relaxed">
              {studyMode
                ? "Correct answers and explanations are shown up front - read through without answering. Nothing is scored."
                : "Pick an answer on each question and get marked as you go."}
            </p>
          </div>

          {/* Step 3 -- Optional question count (MTH302 only) */}
          {showQuestionCountStep && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-chalk-yellow text-chalk-yellow-ink text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <p className="text-sm font-bold text-board-ink">Questions</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setQuestionCount(null)}
                  className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 border ${FOCUS_RING} ${
                    questionCount === null
                      ? "bg-chalk-yellow border-chalk-yellow text-chalk-yellow-ink"
                      : "bg-board-2 border-board-line text-board-ink-muted hover:border-board-ink-muted hover:text-board-ink"
                  }`}
                >
                  All{availableCount ? ` (${availableCount})` : ""}
                </button>
                {questionCountOptions!.map((count) => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 border ${FOCUS_RING} ${
                      questionCount === count
                        ? "bg-chalk-yellow border-chalk-yellow text-chalk-yellow-ink"
                        : "bg-board-2 border-board-line text-board-ink-muted hover:border-board-ink-muted hover:text-board-ink"
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 -- Optional timer (pointless while just reading answers) */}
          <div className={studyMode ? "hidden" : undefined}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-full bg-chalk-yellow text-chalk-yellow-ink text-xs font-bold flex items-center justify-center">
                {showQuestionCountStep ? 4 : 3}
              </span>
              <p className="text-sm font-bold text-board-ink">Timer</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setDurationMinutes(null)}
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 border ${FOCUS_RING} ${
                  durationMinutes === null
                    ? "bg-chalk-yellow border-chalk-yellow text-chalk-yellow-ink"
                    : "bg-board-2 border-board-line text-board-ink-muted hover:border-board-ink-muted hover:text-board-ink"
                }`}
              >
                No timer
              </button>
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

          <Button
            onClick={handleStart}
            className="w-full h-auto min-h-11 py-2 text-sm font-bold rounded-md"
          >
            {studyMode ? "Start Studying" : "Start Quiz"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
