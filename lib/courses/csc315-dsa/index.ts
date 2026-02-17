import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import lecturer1 from "./lecturer-1";
import lecturer3 from "./lecturer-3";

export const csc315DSACourse: Course = {
  id: "csc315-dsa",
  code: "CSC315",
  name: "Data Structures and Algorithms",
  description:
    "Explore fundamental data structures and algorithms including arrays, linked lists, stacks, queues, trees, sorting, and searching.",
  chapters: [
    {
      id: "Lecturer 1",
      label: "Lecturer 1",
      description: "Introduction to Data Structures",
    },
    {
      id: "Lecturer 3",
      label: "Lecturer 3",
      description: "Arrays, Linked Lists, Sorting, and Searching",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [...lecturer1, ...lecturer3];
  },
};
