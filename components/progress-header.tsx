"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import ExamTimer from "./exam-timer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface ProgressHeaderProps {
  current: number;
  total: number;
  score: number;
  examEndTime?: number | null;
  onTimeUp?: () => void;
  onExitExam?: () => void;
}

export default function ProgressHeader({
  current,
  total,
  score,
  examEndTime,
  onTimeUp,
  onExitExam,
}: ProgressHeaderProps) {
  const progress = (current / total) * 100;
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    if (!examEndTime) return 0;
    return Math.max(0, Math.ceil((examEndTime - Date.now()) / 1000));
  });

  useEffect(() => {
    if (!examEndTime) return;

    const tick = () => {
      const remaining = Math.ceil((examEndTime - Date.now()) / 1000);
      if (remaining <= 0) {
        setSecondsLeft(0);
        onTimeUp?.();
        return;
      }
      setSecondsLeft(remaining);
    };

    tick(); // run immediately
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [examEndTime, onTimeUp]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Quiz Spark
          </h1>
          <p className="text-slate-300">
            Question {current} of {total}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {examEndTime && onExitExam && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-400 border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 hover:text-red-300 transition-all duration-150">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Exit
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-slate-900 border border-slate-700 text-white rounded-2xl shadow-2xl p-0 overflow-hidden max-w-sm">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/15 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white text-lg font-semibold mb-1">
                      Exit exam?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-slate-400 text-sm leading-relaxed">
                      Your progress will be lost and the exam will be cancelled.
                      This cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </div>
                <div className="flex gap-2 px-6 pb-6">
                  <AlertDialogCancel className="flex-1 h-10 bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white rounded-xl text-sm font-medium transition-all">
                    Keep going
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={onExitExam}
                    className="flex-1 h-10 bg-red-600 hover:bg-red-500 text-white border-0 rounded-xl text-sm font-medium transition-all"
                  >
                    Exit exam
                  </AlertDialogAction>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          )}
          {examEndTime ? (
            <ExamTimer secondsLeft={secondsLeft} />
          ) : (
            <div className="text-right bg-slate-700/50 backdrop-blur rounded-lg p-3 sm:p-4 border border-slate-600">
              <p className="text-sm text-slate-300 mb-1">Score</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {score}/{total}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Progress
          value={progress}
          className="h-2 bg-slate-600 [&>[data-slot=progress-indicator]]:bg-white"
        />
        <p className="text-xs text-slate-400 text-right">
          {Math.round(progress)}% Complete
        </p>
      </div>
    </div>
  );
}
