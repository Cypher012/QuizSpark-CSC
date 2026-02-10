import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import chapter1 from "./chapter-1";
import chapter2 from "./chapter-2";
import chapter3 from "./chapter-3";
import { csc311Chapter4_1 } from "./chapter-41";
import { csc311Chapter4_2 } from "./chapter-42";

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
        "Organizations and Information Systems - Covers technical and behavioral definitions of organizations, organizational features (routines, business processes, politics, culture, environment, structure), organizational levels (strategic, management, operational, knowledge workers), and their relationship with information systems.",
    },
    {
      id: "Chapter 4_1",
      label: "Module 4 Lecture 4-1",
      description:
        "Information Systems Fundamentals - Covers IS history (1642-present), major development stages (1960s-2000s), IS definitions, six core components (hardware, software, data, people, procedures, networks), technical/social/socio-technical perspectives, IS users and usage patterns, benefits, five fundamental principles, real-world applications (banking, universities, hospitals, retail, e-government), and emerging consequences.",
    },
    {
      id: "Chapter 4_2",
      label: "Module 4 Lecture 4-2",
      description:
        "System Development Life Cycle (SDLC) - Covers SDLC purpose, 6 core phases (Planning, Analysis, Design, Implementation, Testing, Maintenance), SDLC models (Waterfall, Iterative, Spiral, Agile), feasibility studies, requirements gathering, as-is/to-be models, logical vs physical design, deployment strategies (Parallel, Pilot, Phased, Plunge), testing types (Unit, Integration, System, UAT), and roles of users and managers.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...chapter1,
      ...chapter2,
      ...chapter3,
      ...csc311Chapter4_1,
      ...csc311Chapter4_2,
    ];
  },
};
