"use client";

import { Progress } from "@/components/ui/progress";

interface ProgressHeaderProps {
  current: number;
  total: number;
  score: number;
}

export default function ProgressHeader({
  current,
  total,
  score,
}: ProgressHeaderProps) {
  const progress = (current / total) * 100;

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
        <div className="text-right bg-slate-700/50 backdrop-blur rounded-lg p-3 sm:p-4 border border-slate-600">
          <p className="text-sm text-slate-300 mb-1">Score</p>
          <p className="text-2xl sm:text-3xl font-bold text-white">
            {score}/{total}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-slate-400 text-right">
          {Math.round(progress)}% Complete
        </p>
      </div>
    </div>
  );
}
