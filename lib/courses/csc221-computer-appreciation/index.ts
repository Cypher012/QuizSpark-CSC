import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import { csc221Chapter1 } from "./chapter-1";
import { csc221Chapter2 } from "./chapter-2";
import { csc221Chapter3 } from "./chapter-3";
import { csc221Chapter4 } from "./chapter-4";
import { csc221Chapter5 } from "./chapter-5";
import { csc221Chapter6 } from "./chapter-6";
import { csc221Chapter7 } from "./chapter-7";

export const csc221ComputerAppreciation: Course = {
  id: "csc221-computer-appreciation",
  code: "CSC221",
  name: "Computer Appreciation",
  description:
    "Explore the history of computing, hardware architecture, software systems, data representation, and systematic problem-solving techniques using algorithms and flowcharts.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Chapter 1",
      description: "Overview of Computer Milestones and Generations",
    },
    {
      id: "Chapter 2",
      label: "Chapter 2",
      description: "Computer Types, Structure, and Industry 4.0/5.0",
    },
    {
      id: "Chapter 3",
      label: "Chapter 3",
      description: "System and Application Software Systems",
    },
    {
      id: "Chapter 4",
      label: "Chapter 4",
      description: "Data Processing Cycles and Decision Support Systems (DSS)",
    },
    {
      id: "Chapter 5",
      label: "Chapter 5",
      description: "Data Representation: Number Systems and Signed Integers",
    },
    {
      id: "Chapter 6",
      label: "Chapter 6",
      description: "Floating Point Numbers and IEEE 754 Standard",
    },
    {
      id: "Chapter 7",
      label: "Chapter 7",
      description: "Problem Solving, Algorithms, and Flowcharting",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...csc221Chapter1,
      ...csc221Chapter2,
      ...csc221Chapter3,
      ...csc221Chapter4,
      ...csc221Chapter5,
      ...csc221Chapter6,
      ...csc221Chapter7,
    ] as QuestionV2[];
  },
};
