"use client";

import { useState } from "react";
import { Course } from "@/lib/courses";
import { Checkbox } from "@/components/ui/checkbox";

interface ChapterSelectProps {
  course: Course;
  onSelectChapter: (chapter: string | null) => void;
  onSelectCustomChapters: (chapters: string[]) => void;
  onBackToCourses: () => void;
}

export default function ChapterSelect({
  course,
  onSelectChapter,
  onSelectCustomChapters,
  onBackToCourses,
}: ChapterSelectProps) {
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);

  const allChapterIds = course.chapters.map((c) => c.id);

  const toggleCustomMode = () => {
    if (!isCustomMode) {
      setSelectedChapters([...allChapterIds]);
    }
    setIsCustomMode(!isCustomMode);
  };

  const toggleChapter = (chapterId: string) => {
    setSelectedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId],
    );
  };

  const toggleAll = () => {
    if (selectedChapters.length === allChapterIds.length) {
      setSelectedChapters([]);
    } else {
      setSelectedChapters([...allChapterIds]);
    }
  };

  const handleStartCustomQuiz = () => {
    if (selectedChapters.length === 0) return;

    if (selectedChapters.length === allChapterIds.length) {
      onSelectChapter(null);
    } else if (selectedChapters.length === 1) {
      onSelectChapter(selectedChapters[0]);
    } else {
      onSelectCustomChapters(selectedChapters);
    }
  };

  const allSelected = selectedChapters.length === allChapterIds.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          {/* Custom Quiz option */}
          <button
            onClick={toggleCustomMode}
            className="w-full p-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-left group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Custom Quiz
                </h2>
                <p className="text-purple-100 mt-1">
                  Pick specific chapters to combine
                </p>
              </div>
              <div className="text-purple-200 group-hover:text-white transition-colors">
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
                    d={isCustomMode ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
                  />
                </svg>
              </div>
            </div>
          </button>

          {/* Custom selection panel */}
          {isCustomMode && (
            <div className="sm:col-span-2 bg-slate-800/50 rounded-2xl border border-slate-700 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">
                  {selectedChapters.length} of {allChapterIds.length} chapters
                  selected
                </p>
                <button
                  onClick={toggleAll}
                  className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {allSelected ? "Deselect All" : "Select All"}
                </button>
              </div>

              <div className="space-y-2">
                {course.chapters.map((chapter) => {
                  const isChecked = selectedChapters.includes(chapter.id);
                  return (
                    <label
                      key={chapter.id}
                      className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        isChecked
                          ? "bg-purple-900/30 border border-purple-700"
                          : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={() => toggleChapter(chapter.id)}
                        className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <div>
                        <p className="text-white font-medium">
                          {chapter.label}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {chapter.description}
                        </p>
                      </div>
                    </label>
                  );
                })}
              </div>

              <button
                onClick={handleStartCustomQuiz}
                disabled={selectedChapters.length === 0}
                className="w-full p-4 bg-purple-600 hover:bg-purple-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-semibold rounded-xl transition-colors duration-200"
              >
                {selectedChapters.length === 0
                  ? "Select at least one chapter"
                  : `Start Quiz (${selectedChapters.length} ${selectedChapters.length === 1 ? "chapter" : "chapters"})`}
              </button>
            </div>
          )}
        </div>

        <p className="text-center mt-auto pt-8 text-slate-400 text-sm">
          Crafted by Cipher
        </p>
      </div>
    </div>
  );
}
