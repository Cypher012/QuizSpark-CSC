import { Course } from "../../courses";
import { Question } from "../../quiz-types";
import chapter1 from "./chapter-1";
import chapters23 from "./chapters-2-3";
import chapter4 from "./chapter-4";

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
  ],
  getQuestions: (): Question[] => {
    return [...chapter1, ...chapters23, ...chapter4];
  },
};
