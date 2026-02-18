"use client";

interface ExamTimerProps {
  secondsLeft: number;
}

export default function ExamTimer({ secondsLeft }: ExamTimerProps) {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const display = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const isRed = secondsLeft <= 60;
  const isAmber = !isRed && secondsLeft <= 300;

  return (
    <div
      className={`flex flex-col items-end bg-slate-700/50 backdrop-blur rounded-lg p-3 sm:p-4 border ${
        isRed
          ? "border-red-500 animate-pulse"
          : isAmber
            ? "border-amber-500"
            : "border-slate-600"
      }`}
    >
      <p
        className={`text-xs mb-1 ${isRed ? "text-red-400" : isAmber ? "text-amber-400" : "text-slate-300"}`}
      >
        Time Left
      </p>
      <p
        className={`text-2xl sm:text-3xl font-bold font-mono ${
          isRed ? "text-red-400" : isAmber ? "text-amber-400" : "text-white"
        }`}
      >
        {display}
      </p>
    </div>
  );
}
