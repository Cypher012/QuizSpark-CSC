import { Course } from "../../courses";
import { Question } from "../../quiz-types";
import chapter1 from "./chapter-1";
import chapter2 from "./chapter-2";
import chapter3 from "./chapter-3";

export const csc311InfoSystemsCourse: Course = {
  id: "csc311-info-systems",
  code: "CSC311",
  name: "Introduction to Information Systems",
  description:
    "Learn the fundamentals of information systems, their components, types, and role in modern organizations.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Module 1 Lecture 2",
      description:
        "Introduction to Information System - Covers history of information communication and IS, data vs information vs knowledge, properties of information, organization and representation of information, system concepts, system components, system classifications, system performance, and system modelling.",
    },
    {
      id: "Chapter 2",
      label: "Module 2 Lecture 2-2",
      description:
        "Concept of Organizing Data and Information - Covers data hierarchy, entities/attributes/keys, traditional vs database approach, database models (hierarchical, network, relational), SQL and its categories (DDL, DML, DCL, TCL), schemas/subschemas, data dictionary, distributed databases, data warehousing, data mining, OLAP, ODBC, and ORDBMS.",
    },
    {
      id: "Chapter 3",
      label: "Module 3 Lecture 3",
      description:
        "Fundamentals of web design including design principles, website evolution, design processes, usability, accessibility, and introduction to HTML5 and CSS basics.",
    },
  ],
  getQuestions: (): Question[] => {
    return [...chapter1, ...chapter2, ...chapter3];
  },
};
