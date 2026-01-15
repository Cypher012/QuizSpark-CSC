"use client";

import { Course } from "@/lib/courses";

interface CourseSelectProps {
  courses: Course[];
  onSelectCourse: (courseId: string) => void;
}

export default function CourseSelect({ courses, onSelectCourse }: CourseSelectProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Select Your Course
          </h1>
          <p className="text-slate-400">
            Choose a course to start practicing with interactive quizzes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => onSelectCourse(course.id)}
              className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-left group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                    {course.code}
                  </span>
                  <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                    <svg
                      className="w-5 h-5"
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
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {course.name}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm flex-grow">
                  {course.description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xs text-slate-400">
                    {course.chapters.length} {course.chapters.length === 1 ? "chapter" : "chapters"} available
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        <p className="text-center mt-auto pt-8 text-slate-400 text-sm">
          Crafted by Cipher 💻 ❤️
        </p>
      </div>
    </div>
  );
}
