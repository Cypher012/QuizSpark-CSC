import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import mockExamA from "./mock_exam_a";
import mockExamB from "./mock_exam_b";
import mockExamC from "./mock_exam_c";

// Separate exam-simulation bank for MTH 302, distinct from the full 480-question
// study bank in "../questions/". Built to match the real exam format the user
// reported: 25 questions in 60 minutes (2.4 min/question), so recognition-speed
// practice matters more here than exhaustive topic coverage.
//
// Each 25-question set draws only from confirmed in-scope, handwritten-note
// content, excluding everything already established as untaught: the heat and
// wave equations, canonical/normal form, the Bernoulli equation, linear
// operators, directional derivatives, complex Fourier series, and half-range
// sine/cosine expansions. Distribution mirrors the real exam's rough 2-3
// questions per chapter, with Chapters 4, 10, and 12 weighted slightly higher
// to reflect how much more extensively they were actually covered by hand.
//
// Original question ids are preserved in a comment above each entry so you can
// trace any question back to its home chapter in "../questions/" for a full
// re-read if you get it wrong.

export const mth302ExamPrepCourse: Course = {
  id: "mth302-exam-prep",
  code: "MTH302",
  name: "Mathematical Methods IV — Exam Simulation",
  description:
    "Three independent 25-question, 60-minute practice exams curated from the full MTH302 question bank, covering only material confirmed to have actually been taught. Built for timed recognition-speed practice ahead of a 25-question, 60-minute exam.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Mock Exam A",
      description:
        "25 questions across all 11 in-scope chapters, weighted toward Chapters 4, 10, and 12. Time yourself: 60 minutes.",
    },
    {
      id: "Chapter 2",
      label: "Mock Exam B",
      description:
        "A second independent 25-question set with no repeats from Mock Exam A. Time yourself: 60 minutes.",
    },
    {
      id: "Chapter 3",
      label: "Mock Exam C",
      description:
        "A third independent 25-question set with no repeats from Mock Exams A or B. Time yourself: 60 minutes.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [...mockExamA, ...mockExamB, ...mockExamC];
  },
};
