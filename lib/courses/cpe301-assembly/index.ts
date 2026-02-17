import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
// import chapter1 from "./chapter-1";
import { cpe301Chapter1 as chapter1 } from "./chapter-1-new";
import chapter2 from "./chapter-2-new";
import chapter3 from "./chapter-3-new";
import chapter4 from "./chapter-4-new";
import chapter5 from "./chapter-5";
import chapter6 from "./chapter-6";
import chapter7 from "./chapter-7";

export const cpe301AssemblyCourse: Course = {
  id: "cpe301-assembly",
  code: "CPE301",
  name: "Assembly Language Programming",
  description:
    "Master x86 processor architecture, assembly language fundamentals, data transfers, addressing modes, and arithmetic operations.",
  chapters: [
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
      id: "Chapter 4",
      label: "Chapter 4",
      description: "Data Transfers, Addressing, and Arithmetic",
    },
    {
      id: "Chapter 5",
      label: "Chapter 5",
      description: "Procedures (Subroutines and Functions)",
    },
    {
      id: "Chapter 6",
      label: "Chapter 6",
      description: "Conditional Processsing",
    },
    {
      id: "Chapter 7",
      label: "Chapter 7",
      description: "Integer Arithmetic",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...chapter1,
      ...chapter2,
      ...chapter3,
      ...chapter4,
      ...chapter5,
      ...chapter6,
      ...chapter7,
    ];
  },
};
