"use client";

import { Course } from "@/lib/courses";

interface ChapterSelectProps {
  course: Course;
  onSelectChapter: (chapter: string | null) => void;
  onBackToCourses: () => void;
}

export default function ChapterSelect({
  course,
  onSelectChapter,
  onBackToCourses,
}: ChapterSelectProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
        {/* Back button */}
        <button
          onClick={onBackToCourses}
          className="mb-6 flex items-center text-slate-400 hover:text-white transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Courses
        </button>

        <div className="text-center mb-8">
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full mb-4 inline-block">
            {course.code}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {course.name}
          </h1>
          <p className="text-slate-400">
            Choose a specific chapter to focus on, or take the full quiz with
            all chapters.
          </p>
          {course.code === "CSC311" && (
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 rounded-lg">
              <svg
                className="w-4 h-4 mr-2 text-amber-600 dark:text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-amber-700 dark:text-amber-300 text-sm font-medium">
                More modules to be added soon
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {course.chapters.map((chapter) => (
            <button
              key={chapter.id}
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

          {/* All Chapters option */}
          <button
            onClick={() => onSelectChapter(null)}
            className="w-full p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-left group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  All Chapters
                </h2>
                <p className="text-blue-100 mt-1">
                  All questions from every chapter
                </p>
              </div>
              <div className="text-blue-200 group-hover:text-white transition-colors">
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
        </div>
        
        <p className="text-center mt-auto pt-8 text-slate-400 text-sm">
          Crafted by Cipher 💻 ❤️
        </p>
      </div>
    </div>
  );
}
