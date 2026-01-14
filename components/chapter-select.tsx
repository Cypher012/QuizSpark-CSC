"use client";

interface ChapterSelectProps {
  onSelectChapter: (chapter: string | null) => void;
}

export default function ChapterSelect({ onSelectChapter }: ChapterSelectProps) {
  const chapters = [
    { id: "Chapter 1", label: "Chapter 1", description: "Basic Concepts" },
    {
      id: "Chapter 2",
      label: "Chapter 2",
      description: "x86 Processor Architecture",
    },
    {
      id: "Chapter 3",
      label: "Chapter 3",
      description: "Assembly Language Fundamentals",
    },
    {
      id: null,
      label: "All Chapters",
      description: "All questions from every chapter",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Select Quiz Chapter
          </h1>
          <p className="text-slate-400">
            Choose a specific chapter to focus on, or take the full quiz with
            all chapters.
          </p>
        </div>

        <div className="space-y-4">
          {chapters.map((chapter) => (
            <button
              key={chapter.id ?? "all"}
              onClick={() => onSelectChapter(chapter.id)}
              className="w-full p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-left group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {chapter.label}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">
                    {chapter.description}
                  </p>
                </div>
                <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
