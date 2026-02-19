import { QuestionV2 } from "@/lib/quiz-types";

export const csc311Chapter4_2: QuestionV2[] = [
  {
    id: "csc311_ch42_001",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "What does SDLC stand for in the context of information systems?",
    options: [
      "System Development Life Cycle",
      "Software Design and Logical Construction",
      "Structured Data Logic Control",
      "Software Deployment Logic Cycle",
    ],
    correctAnswer: 0,
    explanation:
      "SDLC stands for System Development Life Cycle, which is the organized process of designing, developing, and implementing information systems to meet business needs.",
  },
  {
    id: "csc311_ch42_002",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which of the following best describes the primary purpose of the SDLC?",
    options: [
      "To eliminate the need for user involvement in system development activities",
      "To provide a disciplined and structured process for building information systems",
      "To reduce the number of phases required in software development projects",
      "To allow developers to bypass testing phases when deadlines are tight",
    ],
    correctAnswer: 1,
    explanation:
      "The SDLC provides a disciplined and structured process to avoid problems like cost overruns, missed deadlines, and systems that don't meet user needs.",
  },
  {
    id: "csc311_ch42_003",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Ad-hoc system development without following SDLC typically leads to which problem?",
    options: [
      "Excessive documentation",
      "Too many testing phases",
      "Cost overruns and missed deadlines",
      "Over-involvement of end users",
    ],
    correctAnswer: 2,
    explanation:
      "Ad-hoc system development leads to cost overruns, missed deadlines, systems that don't meet user needs, and poor quality and reliability.",
  },
  {
    id: "csc311_ch42_004",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "How many core phases are typically identified in the SDLC?",
    options: ["Six phases", "Four phases", "Five phases", "Seven phases"],
    correctAnswer: 0,
    explanation:
      "The SDLC consists of six core phases: Planning, Analysis, Design, Implementation, Testing, and Maintenance.",
  },
  {
    id: "csc311_ch42_005",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which SDLC phase involves identifying and selecting the project?",
    options: [
      "Planning phase",
      "Analysis phase",
      "Design phase",
      "Implementation phase",
    ],
    correctAnswer: 0,
    explanation:
      "The Planning phase involves identifying and selecting the project and conducting feasibility studies.",
  },
  {
    id: "csc311_ch42_006",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Technical feasibility in the planning phase addresses which question?",
    options: [
      "What is the cost/benefit ratio?",
      "Can we build the system?",
      "Will the system be used?",
      "Can we build it on time?",
    ],
    correctAnswer: 1,
    explanation:
      "Technical feasibility asks 'Can we build it?' It assesses whether the organization has the technical capability to develop the system.",
  },
  {
    id: "csc311_ch42_007",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which type of feasibility study evaluates the Return on Investment (ROI)?",
    options: [
      "Technical feasibility",
      "Operational feasibility",
      "Economic feasibility",
      "Schedule feasibility",
    ],
    correctAnswer: 2,
    explanation:
      "Economic feasibility evaluates the cost/benefit analysis and Return on Investment (ROI) of the proposed system.",
  },
  {
    id: "csc311_ch42_008",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Operational feasibility primarily determines whether:",
    options: [
      "the project can be completed within budget constraints",
      "the technology required is currently available",
      "the project timeline is realistic and achievable",
      "the system will actually be used by the organization",
    ],
    correctAnswer: 3,
    explanation:
      "Operational feasibility asks 'Will it be used?' It determines whether the system will be accepted and used by the organization.",
  },
  {
    id: "csc311_ch42_009",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Schedule feasibility in the SDLC planning phase addresses:",
    options: [
      "whether the system can be built within the required timeframe",
      "whether users will accept the new system implementation",
      "whether the organization has sufficient technical expertise",
      "whether the system will provide adequate return on investment",
    ],
    correctAnswer: 0,
    explanation:
      "Schedule feasibility asks 'Can we build it on time?' It evaluates whether the project can be completed within acceptable time constraints.",
  },
  {
    id: "csc311_ch42_010",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "During the Analysis phase, requirements are gathered through:",
    options: [
      "coding and programming activities",
      "interviews, surveys, and observation",
      "hardware installation procedures",
      "unit and integration testing methods",
    ],
    correctAnswer: 1,
    explanation:
      "Requirements gathering in the Analysis phase is done through interviews, surveys, and observation of current processes.",
  },
  {
    id: "csc311_ch42_011",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "What does the 'as-is' model represent in the Analysis phase?",
    options: [
      "The current system being studied",
      "The proposed future system design",
      "The hardware specifications needed",
      "The user interface layout design",
    ],
    correctAnswer: 0,
    explanation:
      "The 'as-is' model represents the current system being studied during the Analysis phase, showing how things work now.",
  },
  {
    id: "csc311_ch42_012",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The 'to-be' model in the Analysis phase defines:",
    options: [
      "the physical hardware requirements",
      "the current system documentation",
      "the new system's logical requirements",
      "the maintenance schedule and costs",
    ],
    correctAnswer: 2,
    explanation:
      "The 'to-be' model defines the new system's logical requirements, showing what the future system should do.",
  },
  {
    id: "csc311_ch42_013",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which SDLC phase involves creating data flows and process models?",
    options: [
      "Planning phase",
      "Testing phase",
      "Maintenance phase",
      "Design phase",
    ],
    correctAnswer: 3,
    explanation:
      "The Design phase involves creating data flows and process models as part of the logical design activities.",
  },
  {
    id: "csc311_ch42_014",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Logical design in the SDLC focuses on:",
    options: [
      "what the system will do functionally",
      "how the system will be physically built",
      "which hardware components are needed",
      "where the system will be deployed",
    ],
    correctAnswer: 0,
    explanation:
      "Logical design focuses on what the system will do, including data flows and process models, without specifying physical implementation details.",
  },
  {
    id: "csc311_ch42_015",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Physical design includes all of the following EXCEPT:",
    options: [
      "hardware specifications",
      "business requirements gathering",
      "database design details",
      "user interface layouts",
    ],
    correctAnswer: 1,
    explanation:
      "Physical design includes hardware specs, software choices, database design, and UI layouts. Business requirements gathering belongs to the Analysis phase.",
  },
  {
    id: "csc311_ch42_016",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The technical blueprint for a system is created during which phase?",
    options: [
      "Analysis phase",
      "Planning phase",
      "Design phase",
      "Testing phase",
    ],
    correctAnswer: 2,
    explanation:
      "The Design phase creates the technical blueprint that serves as the detailed plan for building the system.",
  },
  {
    id: "csc311_ch42_017",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "System construction and coding/programming occur during which SDLC phase?",
    options: [
      "Design phase",
      "Analysis phase",
      "Planning phase",
      "Implementation phase",
    ],
    correctAnswer: 3,
    explanation:
      "The Implementation phase is where system construction occurs, including coding and programming the system.",
  },
  {
    id: "csc311_ch42_018",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "In the parallel deployment strategy:",
    options: [
      "old and new systems run simultaneously for a period",
      "the new system immediately replaces the old one",
      "modules are rolled out one at a time sequentially",
      "the system is launched in one department first",
    ],
    correctAnswer: 0,
    explanation:
      "Parallel deployment means the old and new systems run simultaneously, allowing comparison and fallback if needed.",
  },
  {
    id: "csc311_ch42_019",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which deployment strategy involves launching the system in one department first?",
    options: [
      "Parallel deployment",
      "Pilot deployment",
      "Plunge deployment",
      "Phased deployment",
    ],
    correctAnswer: 1,
    explanation:
      "Pilot deployment involves launching the system in one department first before rolling it out to the entire organization.",
  },
  {
    id: "csc311_ch42_020",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Phased deployment is characterized by:",
    options: [
      "running old and new systems at the same time",
      "immediate switch from old to new system",
      "rolling out modules one at a time sequentially",
      "testing in one department before full rollout",
    ],
    correctAnswer: 2,
    explanation:
      "Phased deployment involves rolling out modules one at a time, gradually implementing the complete system.",
  },
  {
    id: "csc311_ch42_021",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The plunge or direct cutover deployment strategy involves:",
    options: [
      "testing the system in a pilot department first",
      "running both systems in parallel for validation",
      "gradual rollout of system modules over time",
      "an immediate switch from the old system to new",
    ],
    correctAnswer: 3,
    explanation:
      "Plunge or direct cutover deployment involves an immediate switch from the old system to the new one.",
  },
  {
    id: "csc311_ch42_022",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Unit testing in the SDLC testing phase focuses on:",
    options: [
      "individual components or modules",
      "complete integrated system functionality",
      "interfaces between different modules",
      "end-user validation and acceptance",
    ],
    correctAnswer: 0,
    explanation:
      "Unit testing focuses on testing individual components or modules in isolation to verify they work correctly.",
  },
  {
    id: "csc311_ch42_023",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Integration testing verifies:",
    options: [
      "that individual modules function correctly",
      "that interfaces between modules work properly",
      "that end users accept the final system",
      "that requirements were gathered correctly",
    ],
    correctAnswer: 1,
    explanation:
      "Integration testing verifies that the interfaces between modules work properly when components are combined.",
  },
  {
    id: "csc311_ch42_024",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "System testing evaluates:",
    options: [
      "individual software components",
      "user acceptance criteria only",
      "the complete integrated system",
      "hardware specifications alone",
    ],
    correctAnswer: 2,
    explanation:
      "System testing evaluates the complete integrated system to ensure all components work together as expected.",
  },
  {
    id: "csc311_ch42_025",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "User Acceptance Testing (UAT) is performed by:",
    options: [
      "developers during the coding phase",
      "end-users for validation purposes",
      "system architects during design",
      "project managers during planning",
    ],
    correctAnswer: 1,
    explanation:
      "User Acceptance Testing (UAT) is performed by end-users to validate that the system meets their requirements.",
  },
  {
    id: "csc311_ch42_026",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which SDLC phase is typically the longest and most costly?",
    options: [
      "Planning phase",
      "Analysis phase",
      "Maintenance phase",
      "Design phase",
    ],
    correctAnswer: 2,
    explanation:
      "The Maintenance phase is often the longest and most costly phase of the SDLC as it continues throughout the system's operational life.",
  },
  {
    id: "csc311_ch42_027",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Activities in the Maintenance phase include all EXCEPT:",
    options: [
      "conducting feasibility studies",
      "fixing bugs and errors",
      "making system enhancements",
      "adapting to new technologies",
    ],
    correctAnswer: 0,
    explanation:
      "Maintenance includes fixing bugs, making enhancements, and adapting to changes. Feasibility studies belong to the Planning phase.",
  },
  {
    id: "csc311_ch42_028",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "According to SDLC principles, who provides requirements and participates in UAT?",
    options: [
      "System architects",
      "Database administrators",
      "Users",
      "Network engineers",
    ],
    correctAnswer: 2,
    explanation:
      "Users provide requirements, participate in testing (UAT), and give feedback throughout the development process.",
  },
  {
    id: "csc311_ch42_029",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Managers' responsibilities in SDLC include all EXCEPT:",
    options: [
      "writing program source code",
      "securing funding for projects",
      "championing the project",
      "making strategic decisions",
    ],
    correctAnswer: 0,
    explanation:
      "Managers secure funding, champion projects, make strategic decisions, and manage change. Writing code is a developer responsibility.",
  },
  {
    id: "csc311_ch42_030",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The principle 'IT builds the system, but the business owns it' emphasizes:",
    options: [
      "that IT should make all business decisions",
      "the importance of user and manager involvement",
      "that business users should write the code",
      "that IT owns the system completely",
    ],
    correctAnswer: 1,
    explanation:
      "This principle emphasizes that while IT builds systems technically, business stakeholders must be involved as they ultimately own and use the system.",
  },
  {
    id: "csc311_ch42_031",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The Waterfall SDLC model is best described as:",
    options: [
      "a cyclic process with repeated refinement cycles",
      "a risk-driven model with iterative loops",
      "a linear sequential approach with completed phases",
      "an approach emphasizing customer collaboration",
    ],
    correctAnswer: 2,
    explanation:
      "The Waterfall model is a linear, sequential approach where each phase must be fully completed before the next begins.",
  },
  {
    id: "csc311_ch42_032",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which SDLC model builds systems through repeated cycles of refinement?",
    options: [
      "Iterative model",
      "Waterfall model",
      "Plunge model",
      "Parallel model",
    ],
    correctAnswer: 0,
    explanation:
      "The Iterative model is a cyclic process where the system is built through repeated cycles of refinement, creating progressively more complete versions.",
  },
  {
    id: "csc311_ch42_033",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The Spiral model is characterized as:",
    options: [
      "a linear approach with sequential phases",
      "a risk-driven model with iterative loops",
      "a purely documentation-driven methodology",
      "a model that skips the testing phase",
    ],
    correctAnswer: 1,
    explanation:
      "The Spiral model is a risk-driven model that cycles through phases of planning, risk analysis, engineering, and evaluation in iterative loops.",
  },
  {
    id: "csc311_ch42_034",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Agile methodology emphasizes all of the following EXCEPT:",
    options: [
      "rapid delivery of working software",
      "strict adherence to initial plans",
      "customer collaboration throughout development",
      "responding to change flexibly",
    ],
    correctAnswer: 1,
    explanation:
      "Agile emphasizes rapid delivery, customer collaboration, and responding to change OVER strict planning. Rigid adherence to plans contradicts Agile principles.",
  },
  {
    id: "csc311_ch42_035",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "In the SDLC, the Planning phase answers which fundamental question?",
    options: [
      "Why should we build this system?",
      "What are the system requirements?",
      "How will the system be built?",
      "When will testing be completed?",
    ],
    correctAnswer: 0,
    explanation:
      "Planning answers 'Why?' by determining whether the project should be undertaken through feasibility studies.",
  },
  {
    id: "csc311_ch42_036",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The Analysis phase of SDLC primarily answers:",
    options: [
      "Why should we build this system?",
      "How will the system be built?",
      "What should the system do?",
      "Who will maintain the system?",
    ],
    correctAnswer: 2,
    explanation:
      "Analysis answers 'What?' by determining what the system needs to do through requirements gathering and analysis.",
  },
  {
    id: "csc311_ch42_037",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which fundamental question does the Design phase address?",
    options: [
      "How will the system be built?",
      "Why is this project necessary?",
      "What are the user requirements?",
      "Who will test the system?",
    ],
    correctAnswer: 0,
    explanation:
      "Design answers 'How?' by determining how the system will be built through logical and physical design specifications.",
  },
  {
    id: "csc311_ch42_038",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which deployment strategy carries the highest risk if the new system fails?",
    options: [
      "Parallel deployment",
      "Pilot deployment",
      "Plunge deployment",
      "Phased deployment",
    ],
    correctAnswer: 2,
    explanation:
      "Plunge (direct cutover) carries the highest risk because there is no fallback system if the new system fails.",
  },
  {
    id: "csc311_ch42_039",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The correct sequence of SDLC phases is:",
    options: [
      "Analysis, Planning, Design, Implementation, Testing, Maintenance",
      "Planning, Analysis, Design, Implementation, Testing, Maintenance",
      "Planning, Design, Analysis, Implementation, Testing, Maintenance",
      "Design, Planning, Analysis, Testing, Implementation, Maintenance",
    ],
    correctAnswer: 1,
    explanation:
      "The correct SDLC sequence is: Planning, Analysis, Design, Implementation, Testing, and Maintenance.",
  },
  {
    id: "csc311_ch42_040",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which testing type must be completed before integration testing can begin?",
    options: [
      "System testing",
      "User acceptance testing",
      "Unit testing",
      "Performance testing",
    ],
    correctAnswer: 2,
    explanation:
      "Unit testing of individual components must be completed before integration testing can verify how modules work together.",
  },
  {
    id: "csc311_ch42_041",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Training users and creating documentation occurs during which phase?",
    options: [
      "Implementation phase",
      "Planning phase",
      "Analysis phase",
      "Maintenance phase",
    ],
    correctAnswer: 0,
    explanation:
      "Training users and creating documentation are key activities in the Implementation phase alongside system deployment.",
  },
  {
    id: "csc311_ch42_042",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "A system that doesn't meet user needs is typically a result of:",
    options: [
      "following a structured development process",
      "excessive user involvement in requirements",
      "ad-hoc development without proper methodology",
      "too much time spent on feasibility studies",
    ],
    correctAnswer: 2,
    explanation:
      "Systems that don't meet user needs typically result from ad-hoc development that lacks proper methodology and user involvement.",
  },
  {
    id: "csc311_ch42_043",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The Iterative model creates:",
    options: [
      "a single complete system at the end of development",
      "progressively more complete versions through cycles",
      "risk analysis reports at each iteration",
      "documentation before any coding begins",
    ],
    correctAnswer: 1,
    explanation:
      "The Iterative model builds the system through repeated cycles of refinement, creating progressively more complete versions.",
  },
  {
    id: "csc311_ch42_044",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "In the Spiral model, which activity is central to each iteration?",
    options: [
      "Risk analysis",
      "User interface design",
      "Database creation",
      "Code compilation",
    ],
    correctAnswer: 0,
    explanation:
      "The Spiral model is risk-driven and cycles through planning, risk analysis, engineering, and evaluation in each iteration.",
  },
  {
    id: "csc311_ch42_045",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Agile methodology prioritizes responding to change over:",
    options: [
      "customer collaboration",
      "working software delivery",
      "following a strict plan",
      "team communication",
    ],
    correctAnswer: 2,
    explanation:
      "Agile prioritizes responding to change over following a strict plan, allowing flexibility throughout development.",
  },
  {
    id: "csc311_ch42_046",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which feasibility type would evaluate whether staff will accept a new system?",
    options: [
      "Technical feasibility",
      "Operational feasibility",
      "Economic feasibility",
      "Schedule feasibility",
    ],
    correctAnswer: 1,
    explanation:
      "Operational feasibility evaluates whether the system will be accepted and used by staff and the organization.",
  },
  {
    id: "csc311_ch42_047",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which phase would involve studying existing business processes?",
    options: [
      "Analysis phase",
      "Design phase",
      "Testing phase",
      "Maintenance phase",
    ],
    correctAnswer: 0,
    explanation:
      "The Analysis phase involves studying the current system and existing business processes to understand the 'as-is' state.",
  },
  {
    id: "csc311_ch42_048",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Software choices and database design specifications belong to:",
    options: [
      "logical design",
      "requirements analysis",
      "physical design",
      "feasibility assessment",
    ],
    correctAnswer: 2,
    explanation:
      "Physical design specifies how the system will be built, including software choices, database design, and hardware specifications.",
  },
  {
    id: "csc311_ch42_049",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The safest deployment strategy when system reliability is uncertain is:",
    options: [
      "direct cutover deployment",
      "parallel deployment approach",
      "plunge deployment method",
      "immediate switch strategy",
    ],
    correctAnswer: 1,
    explanation:
      "Parallel deployment is safest when reliability is uncertain because both old and new systems run simultaneously, providing a fallback.",
  },
  {
    id: "csc311_ch42_050",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Managing organizational change during system implementation is the responsibility of:",
    options: [
      "end users primarily",
      "software developers",
      "managers",
      "database administrators",
    ],
    correctAnswer: 2,
    explanation:
      "Managers are responsible for managing organizational change, securing funding, championing the project, and making strategic decisions.",
  },
  {
    id: "csc311_ch42_051",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The primary deliverable of the Design phase is:",
    options: [
      "a technical blueprint",
      "a feasibility study report",
      "tested software modules",
      "user training materials",
    ],
    correctAnswer: 0,
    explanation:
      "The Design phase creates a technical blueprint that serves as the detailed plan for building the system.",
  },
  {
    id: "csc311_ch42_052",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which statement about the Waterfall model is TRUE?",
    options: [
      "It allows phases to overlap significantly",
      "It emphasizes continuous customer collaboration",
      "Risk analysis is central to each phase",
      "Each phase must be completed before the next begins",
    ],
    correctAnswer: 3,
    explanation:
      "In the Waterfall model, each phase must be fully completed before the next phase begins, following a linear sequential approach.",
  },
  {
    id: "csc311_ch42_053",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Poor quality and reliability in developed systems often result from:",
    options: [
      "ad-hoc development approaches",
      "following the SDLC methodology strictly",
      "conducting thorough feasibility studies",
      "excessive testing procedures",
    ],
    correctAnswer: 0,
    explanation:
      "Poor quality and reliability are common problems when ad-hoc development approaches are used instead of structured methodologies.",
  },
  {
    id: "csc311_ch42_054",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The 'as-is' and 'to-be' models are created during:",
    options: [
      "Planning phase",
      "Design phase",
      "Analysis phase",
      "Testing phase",
    ],
    correctAnswer: 2,
    explanation:
      "The Analysis phase creates both the 'as-is' model (current system) and 'to-be' model (future system requirements).",
  },
  {
    id: "csc311_ch42_055",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which is NOT a type of feasibility study in the Planning phase?",
    options: [
      "Technical feasibility",
      "Integration feasibility",
      "Economic feasibility",
      "Operational feasibility",
    ],
    correctAnswer: 1,
    explanation:
      "The four types of feasibility studies are Technical, Economic, Operational, and Schedule. Integration feasibility is not a standard category.",
  },
  {
    id: "csc311_ch42_056",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "User involvement is critical for SDLC success because:",
    options: [
      "users write the actual program code",
      "users manage the project budget",
      "users design the database schema",
      "users provide requirements and validate the system",
    ],
    correctAnswer: 3,
    explanation:
      "Users provide requirements, participate in testing (UAT), and give feedback, which is essential for building systems that meet actual needs.",
  },
  {
    id: "csc311_ch42_057",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "A pilot deployment strategy is most appropriate when:",
    options: [
      "immediate full implementation is required",
      "testing in a controlled environment first is desired",
      "the old system must continue running indefinitely",
      "all modules must be deployed simultaneously",
    ],
    correctAnswer: 1,
    explanation:
      "Pilot deployment is used when testing in a controlled environment (one department) is desired before full organizational rollout.",
  },
  {
    id: "csc311_ch42_058",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Adapting the system to new business needs occurs during:",
    options: [
      "Planning phase",
      "Implementation phase",
      "Maintenance phase",
      "Testing phase",
    ],
    correctAnswer: 2,
    explanation:
      "The Maintenance phase includes adapting the system to new business needs or technologies throughout its operational life.",
  },
  {
    id: "csc311_ch42_059",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The SDLC is defined as:",
    options: [
      "a random approach to building software applications",
      "a method for testing software without documentation",
      "the organized process of designing and implementing information systems",
      "a technique for bypassing requirements gathering activities",
    ],
    correctAnswer: 2,
    explanation:
      "SDLC is the organized process of designing, developing, and implementing information systems to meet business needs.",
  },
  {
    id: "csc311_ch42_060",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which SDLC model would be most appropriate for a project with unclear requirements?",
    options: [
      "Waterfall model",
      "Direct cutover approach",
      "Parallel implementation model",
      "Iterative or Agile model",
    ],
    correctAnswer: 3,
    explanation:
      "Iterative and Agile models are best for unclear requirements as they allow refinement through cycles and respond to changing needs.",
  },
  {
    id: "csc311_ch42_061",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Data flows and process models are components of:",
    options: [
      "logical design specifications",
      "technical feasibility assessment",
      "user acceptance testing protocols",
      "maintenance planning documents",
    ],
    correctAnswer: 0,
    explanation:
      "Data flows and process models are part of logical design, which defines what the system will do functionally.",
  },
  {
    id: "csc311_ch42_062",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Hardware specs and user interface layouts are part of:",
    options: [
      "logical design activities",
      "physical design activities",
      "feasibility study components",
      "unit testing procedures",
    ],
    correctAnswer: 1,
    explanation:
      "Physical design includes hardware specifications, software choices, database design, and user interface layouts.",
  },
  {
    id: "csc311_ch42_063",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The testing phase that occurs immediately after integration testing is:",
    options: [
      "system testing",
      "unit testing",
      "regression testing",
      "stress testing",
    ],
    correctAnswer: 0,
    explanation:
      "The testing sequence is Unit Testing, Integration Testing, System Testing, then User Acceptance Testing.",
  },
  {
    id: "csc311_ch42_064",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which activity is NOT part of the Implementation phase?",
    options: [
      "System construction and coding",
      "Conducting feasibility studies",
      "Training users on the system",
      "Creating system documentation",
    ],
    correctAnswer: 1,
    explanation:
      "Conducting feasibility studies is a Planning phase activity, not an Implementation phase activity.",
  },
  {
    id: "csc311_ch42_065",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The Agile approach values which of the following?",
    options: [
      "Customer collaboration and rapid delivery",
      "Comprehensive documentation over working software",
      "Following the plan over responding to change",
      "Contract negotiation over customer collaboration",
    ],
    correctAnswer: 0,
    explanation:
      "Agile values customer collaboration, rapid delivery, and responding to change over strict documentation and planning.",
  },
  {
    id: "csc311_ch42_066",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which phase determines whether the organization can build the system technically?",
    options: [
      "Analysis phase",
      "Planning phase",
      "Design phase",
      "Testing phase",
    ],
    correctAnswer: 1,
    explanation:
      "The Planning phase conducts technical feasibility to determine if the organization can build the system.",
  },
  {
    id: "csc311_ch42_067",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "ROI analysis is most closely associated with which feasibility type?",
    options: [
      "Economic feasibility assessment",
      "Schedule feasibility assessment",
      "Operational feasibility assessment",
      "Technical feasibility assessment",
    ],
    correctAnswer: 0,
    explanation:
      "Economic feasibility evaluates cost/benefit analysis and Return on Investment (ROI).",
  },
  {
    id: "csc311_ch42_068",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "A key characteristic of the Spiral model that distinguishes it from Waterfall is:",
    options: [
      "its linear sequential approach",
      "its avoidance of iteration",
      "its single-pass development",
      "its emphasis on risk analysis",
    ],
    correctAnswer: 3,
    explanation:
      "The Spiral model is distinguished by its risk-driven approach, cycling through planning, risk analysis, engineering, and evaluation.",
  },
  {
    id: "csc311_ch42_069",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Minor and major enhancements to a deployed system occur during:",
    options: [
      "Design phase",
      "Maintenance phase",
      "Analysis phase",
      "Implementation phase",
    ],
    correctAnswer: 1,
    explanation:
      "Making minor and major enhancements is a key activity of the Maintenance phase.",
  },
  {
    id: "csc311_ch42_070",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which deployment strategy allows gradual transition with module-by-module release?",
    options: [
      "Phased deployment",
      "Plunge deployment",
      "Pilot deployment",
      "Parallel deployment",
    ],
    correctAnswer: 0,
    explanation:
      "Phased deployment rolls out modules one at a time, allowing gradual transition to the new system.",
  },
  {
    id: "csc311_ch42_071",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The primary purpose of modeling business processes in the Analysis phase is to:",
    options: [
      "determine hardware requirements",
      "write the source code for the system",
      "understand current operations and define requirements",
      "train end users on new procedures",
    ],
    correctAnswer: 2,
    explanation:
      "Modeling business processes helps understand current operations (as-is) and define requirements for the new system (to-be).",
  },
  {
    id: "csc311_ch42_072",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Successful systems require user involvement primarily because:",
    options: [
      "users are responsible for writing code",
      "users understand business needs and will use the system",
      "users manage the technical infrastructure",
      "users conduct all system testing activities",
    ],
    correctAnswer: 1,
    explanation:
      "Users understand business needs and will ultimately use the system, making their involvement critical for building relevant systems.",
  },
  {
    id: "csc311_ch42_073",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which phase comes immediately before the Testing phase in SDLC?",
    options: [
      "Analysis phase",
      "Implementation phase",
      "Design phase",
      "Planning phase",
    ],
    correctAnswer: 1,
    explanation:
      "The SDLC sequence is Planning, Analysis, Design, Implementation, Testing, Maintenance. Implementation precedes Testing.",
  },
  {
    id: "csc311_ch42_074",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "End-user validation of the completed system is known as:",
    options: [
      "Unit Testing",
      "Integration Testing",
      "User Acceptance Testing",
      "System Testing",
    ],
    correctAnswer: 2,
    explanation:
      "User Acceptance Testing (UAT) is end-user validation to ensure the system meets their requirements.",
  },
  {
    id: "csc311_ch42_075",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The SDLC provides structure to avoid all of the following EXCEPT:",
    options: [
      "cost overruns",
      "excessive planning time",
      "missed deadlines",
      "poor quality systems",
    ],
    correctAnswer: 1,
    explanation:
      "SDLC helps avoid cost overruns, missed deadlines, and poor quality. It does not aim to reduce planning time; proper planning is essential.",
  },
  {
    id: "csc311_ch42_076",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which model cycles through planning, risk analysis, engineering, and evaluation?",
    options: [
      "Waterfall model",
      "Spiral model",
      "Iterative model",
      "Agile model",
    ],
    correctAnswer: 1,
    explanation:
      "The Spiral model specifically cycles through planning, risk analysis, engineering, and evaluation in iterative loops.",
  },
  {
    id: "csc311_ch42_077",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Interviews and surveys are techniques used during which SDLC phase?",
    options: [
      "Analysis phase",
      "Planning phase",
      "Testing phase",
      "Maintenance phase",
    ],
    correctAnswer: 0,
    explanation:
      "Interviews, surveys, and observation are requirements gathering techniques used during the Analysis phase.",
  },
  {
    id: "csc311_ch42_078",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "A cost/benefit analysis would reveal whether a project is:",
    options: [
      "technically feasible",
      "operationally feasible",
      "economically feasible",
      "schedule feasible",
    ],
    correctAnswer: 2,
    explanation:
      "Cost/benefit analysis is part of economic feasibility, determining if the project provides adequate return on investment.",
  },
  {
    id: "csc311_ch42_079",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which statement about the Maintenance phase is FALSE?",
    options: [
      "It includes fixing bugs and errors",
      "It includes adapting to new technologies",
      "It includes making system enhancements",
      "It is typically short and inexpensive",
    ],
    correctAnswer: 3,
    explanation:
      "The Maintenance phase is often the LONGEST and most COSTLY phase, not short and inexpensive.",
  },
  {
    id: "csc311_ch42_080",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Champions of IT projects who secure funding are typically:",
    options: ["managers", "end users", "programmers", "testers"],
    correctAnswer: 0,
    explanation:
      "Managers are responsible for securing funding, championing projects, and making strategic decisions.",
  },
  {
    id: "csc311_ch42_081",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which deployment approach provides the most risk mitigation through redundancy?",
    options: [
      "Parallel operation of both systems",
      "Direct cutover with minimal overlap",
      "Immediate plunge implementation",
      "Single department pilot only",
    ],
    correctAnswer: 0,
    explanation:
      "Parallel deployment provides the most risk mitigation by running both systems simultaneously as a fallback.",
  },
  {
    id: "csc311_ch42_082",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The Design phase is divided into:",
    options: [
      "technical and economic design",
      "internal and external design",
      "logical and physical design",
      "primary and secondary design",
    ],
    correctAnswer: 2,
    explanation:
      "Design is divided into logical design (what the system does) and physical design (how it will be built).",
  },
  {
    id: "csc311_ch42_083",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which is the correct order of testing types in the Testing phase?",
    options: [
      "Unit, Integration, System, UAT",
      "System, Unit, Integration, UAT",
      "Integration, Unit, UAT, System",
      "UAT, System, Integration, Unit",
    ],
    correctAnswer: 0,
    explanation:
      "The correct testing order is Unit Testing, Integration Testing, System Testing, then User Acceptance Testing.",
  },
  {
    id: "csc311_ch42_084",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The four types of feasibility assessed during Planning are:",
    options: [
      "Logical, Physical, Economic, Technical",
      "Technical, Economic, Operational, Schedule",
      "Unit, Integration, System, Acceptance",
      "Planning, Analysis, Design, Testing",
    ],
    correctAnswer: 1,
    explanation:
      "The four feasibility types are Technical, Economic, Operational, and Schedule feasibility.",
  },
  {
    id: "csc311_ch42_085",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "In Agile methodology, incremental delivery means:",
    options: [
      "delivering working software in small frequent releases",
      "delivering the complete system only at the end",
      "avoiding all documentation throughout the project",
      "completing each phase before moving to the next",
    ],
    correctAnswer: 0,
    explanation:
      "Agile emphasizes incremental and iterative delivery of working software in small, frequent releases.",
  },
  {
    id: "csc311_ch42_086",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Observation as a requirements gathering technique involves:",
    options: [
      "designing the user interface layouts",
      "testing the completed system modules",
      "writing program code for features",
      "watching users perform their current tasks",
    ],
    correctAnswer: 3,
    explanation:
      "Observation involves watching users perform their current tasks to understand requirements and business processes.",
  },
  {
    id: "csc311_ch42_087",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which phase would address the question 'Can we complete this project in 6 months?'",
    options: [
      "Planning phase",
      "Analysis phase",
      "Design phase",
      "Testing phase",
    ],
    correctAnswer: 0,
    explanation:
      "Schedule feasibility, assessed during Planning, addresses whether the project can be completed within time constraints.",
  },
  {
    id: "csc311_ch42_088",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "A system blueprint specifying database tables and fields is part of:",
    options: [
      "logical design specifications",
      "feasibility study documents",
      "physical design specifications",
      "user acceptance criteria",
    ],
    correctAnswer: 2,
    explanation:
      "Database design with specific tables and fields is part of physical design, which specifies how the system will be built.",
  },
  {
    id: "csc311_ch42_089",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Testing interfaces between modules is the focus of:",
    options: [
      "unit testing activities",
      "user acceptance testing activities",
      "integration testing activities",
      "feasibility testing activities",
    ],
    correctAnswer: 2,
    explanation:
      "Integration testing specifically tests the interfaces between modules to ensure they work together properly.",
  },
  {
    id: "csc311_ch42_090",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which SDLC model is LEAST flexible in accommodating requirement changes?",
    options: [
      "Agile model",
      "Waterfall model",
      "Iterative model",
      "Spiral model",
    ],
    correctAnswer: 1,
    explanation:
      "The Waterfall model is least flexible because each phase must be completed before the next begins, making changes difficult.",
  },
  {
    id: "csc311_ch42_091",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The organized process of designing, developing, and implementing information systems is called:",
    options: [
      "Database Management Cycle",
      "System Development Life Cycle",
      "Software Testing Framework",
      "Network Implementation Plan",
    ],
    correctAnswer: 1,
    explanation:
      "The System Development Life Cycle (SDLC) is the organized process for designing, developing, and implementing information systems.",
  },
  {
    id: "csc311_ch42_092",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which feasibility asks 'Will users and management support and use the system?'",
    options: [
      "Technical feasibility",
      "Schedule feasibility",
      "Economic feasibility",
      "Operational feasibility",
    ],
    correctAnswer: 3,
    explanation:
      "Operational feasibility assesses whether the system will be accepted and used by the organization's users and management.",
  },
  {
    id: "csc311_ch42_093",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Creating progressively more complete versions through cycles describes:",
    options: [
      "the Iterative development model",
      "the Waterfall development model",
      "the Plunge deployment strategy",
      "the Parallel deployment strategy",
    ],
    correctAnswer: 0,
    explanation:
      "The Iterative model builds systems through repeated cycles of refinement, creating progressively more complete versions.",
  },
  {
    id: "csc311_ch42_094",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "The Implementation phase does NOT include:",
    options: [
      "gathering requirements",
      "coding the system",
      "deploying the system",
      "training users",
    ],
    correctAnswer: 0,
    explanation:
      "Requirements gathering is an Analysis phase activity. Implementation includes coding, deployment, and training.",
  },
  {
    id: "csc311_ch42_095",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which phase transforms the 'what' into 'how'?",
    options: [
      "Planning phase",
      "Design phase",
      "Analysis phase",
      "Maintenance phase",
    ],
    correctAnswer: 1,
    explanation:
      "Analysis defines 'what' the system should do, while Design transforms this into 'how' it will be built.",
  },
  {
    id: "csc311_ch42_096",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Complete integrated system functionality is verified during:",
    options: [
      "unit testing",
      "integration testing",
      "acceptance testing",
      "system testing",
    ],
    correctAnswer: 3,
    explanation:
      "System testing evaluates the complete integrated system to ensure all components work together as intended.",
  },
  {
    id: "csc311_ch42_097",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Bug fixes after system deployment are part of:",
    options: [
      "Maintenance phase",
      "Implementation phase",
      "Testing phase",
      "Design phase",
    ],
    correctAnswer: 0,
    explanation:
      "Fixing bugs and errors after deployment is a key activity of the Maintenance phase.",
  },
  {
    id: "csc311_ch42_098",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which deployment strategy tests the system with a subset of users first?",
    options: [
      "Parallel deployment",
      "Pilot deployment",
      "Phased deployment",
      "Plunge deployment",
    ],
    correctAnswer: 1,
    explanation:
      "Pilot deployment launches the system in one department first, testing with a subset of users before full rollout.",
  },
  {
    id: "csc311_ch42_099",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Strategic decisions about IT projects are made by:",
    options: [
      "database administrators",
      "system testers",
      "network technicians",
      "managers",
    ],
    correctAnswer: 3,
    explanation:
      "Managers make strategic decisions, secure funding, champion projects, and manage organizational change.",
  },
  {
    id: "csc311_ch42_100",
    course: "CSC 311",
    chapter: "Chapter 4_2",
    text: "Which SDLC model requires completing each phase before proceeding to the next?",
    options: [
      "Spiral model",
      "Agile model",
      "Waterfall model",
      "Iterative model",
    ],
    correctAnswer: 2,
    explanation:
      "The Waterfall model is a linear sequential approach where each phase must be fully completed before the next begins.",
  },
];

export default csc311Chapter4_2;
