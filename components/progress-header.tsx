"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import ExamTimer from "./exam-timer";

interface ProgressHeaderProps {
  current: number;
  total: number;
  score: number;
  examEndTime?: number | null;
  onTimeUp?: () => void;
}

export default function ProgressHeader({
  current,
  total,
  score,
  examEndTime,
  onTimeUp,
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
