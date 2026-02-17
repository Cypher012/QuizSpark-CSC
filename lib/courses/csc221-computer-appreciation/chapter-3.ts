import { QuestionV2 } from "../../quiz-types";

export const csc221Chapter3: QuestionV2[] = [
  {
    id: "csc221_105",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "What is the definition of Computer Software provided in the text?",
    options: [
      "Physical components that make up the computer system",
      "A set of program and procedures intended to perform specific tasks",
      "A device used for high-speed mathematical calculations",
      "The electrical circuitry that processes binary data",
    ],
    correctAnswer: 1,
    explanation:
      "Computer Software is a set of program and procedures that are intended to perform specific tasks on a computer system.",
  },
  {
    id: "csc221_106",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "What are the two main types of computer software mentioned in the document?",
    options: [
      "Hardware and Middleware",
      "System Software and Application Software",
      "Low-level and High-level languages",
      "Internal and External programs",
    ],
    correctAnswer: 1,
    explanation:
      "The text identifies System Software and Application Software as the two main types.",
  },
  {
    id: "csc221_107",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Software can only be written using high-level languages like Java and C++.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The text states that software can be written using low-level languages (like assembly) as well as high-level languages.",
  },
  {
    id: "csc221_108",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which of the following is considered a computer hardware resource managed by programs?",
    options: [
      "VLC Media Player",
      "Operating System",
      "Arithmetic and Logic Unit (ALU)",
      "Database Management System",
    ],
    correctAnswer: 2,
    explanation:
      "The ALU is listed as a hardware resource alongside the CPU, RAM, and Registers.",
  },
  {
    id: "csc221_109",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "A 'Visual Display Unit' is another name for a:",
    options: ["Keyboard", "Monitor", "CPU", "Serial Port"],
    correctAnswer: 1,
    explanation:
      "The text lists 'Monitor or Visual Display Unit' as a peripheral device.",
  },
  {
    id: "csc221_110",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which of these is NOT listed as a 'Port' in the hardware resources section?",
    options: ["USB Port", "Serial Port", "Parallel Port", "HDMI Port"],
    correctAnswer: 3,
    explanation:
      "The text specifically mentions USB, Serial, and Parallel ports, but does not list HDMI.",
  },
  {
    id: "csc221_111",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "System software interfaces between the application software and the computer hardware.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "System program/software is a category of computer software which interface between the application software and the computer hardware.",
  },
  {
    id: "csc221_112",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "How does system software manage multiple application programs running at the same time?",
    options: [
      "By merging them into a single process",
      "By deleting unused hardware resources",
      "By allocating resources using a scheduling algorithm",
      "By converting high-level code to assembly language",
    ],
    correctAnswer: 2,
    explanation:
      "The system software allocates hardware resources (CPU, Memory, etc.) to application programs using a scheduling algorithm.",
  },
  {
    id: "csc221_113",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which of the following is an example of system software?",
    options: [
      "Word Processor",
      "VLC Media Player",
      "Operating System",
      "Spreadsheet",
    ],
    correctAnswer: 2,
    explanation:
      "An example of the system software provided in the text is the Operating System.",
  },
  {
    id: "csc221_114",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "The Operating System is the most important system software in the computer system.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The Operating System is described as a powerful system software and the most important one.",
  },
  {
    id: "csc221_115",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which of the following is categorized as a system program?",
    options: ["Device Drivers", "Google Docs", "MySQL", "Microsoft PowerPoint"],
    correctAnswer: 0,
    explanation:
      "Device Drivers are listed as one of the examples of system software, along with Utility Programs and Language Processors.",
  },
  {
    id: "csc221_116",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "BIOS stands for Basic Input / Output System and is considered a type of firmware.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The document defines BIOS as Basic Input / Output System, which is a firmware that interfaces hardware and the OS.",
  },
  {
    id: "csc221_117",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "What is the native language that a computer operates on?",
    options: ["Java", "Assembly Language", "Machine Language (Binary)", "C++"],
    correctAnswer: 2,
    explanation:
      "The native language the computer operates on is the machine language, represented in zeros and ones.",
  },
  {
    id: "csc221_118",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "What is the binary equivalence of the decimal number 3 according to the text's table?",
    options: ["0001", "0010", "0011", "0100"],
    correctAnswer: 2,
    explanation:
      "The table on page 13 shows that decimal 3 equals binary 0011.",
  },
  {
    id: "csc221_119",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "When you power on the computer, which component starts the boot sequence and looks for the OS?",
    options: ["The ALU", "The BIOS", "The Word Processor", "The GPU"],
    correctAnswer: 1,
    explanation:
      "When you power on your computer system, the BIOS then starts the boot sequence.",
  },
  {
    id: "csc221_120",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "The BIOS fetches the Operating System from storage and loads it into the:",
    options: ["Hard Drive", "CPU Cache", "RAM", "ROM"],
    correctAnswer: 2,
    explanation:
      "The BIOS will then fetch the operating system from storage and load it into the RAM.",
  },
  {
    id: "csc221_121",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "A computer can run application programs without an Operating System.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The text states: 'Without the operating system your computer can not run' and 'Without the system software you can not run the application software'.",
  },
  {
    id: "csc221_122",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which of the following is NOT a function of the Operating System listed in the document?",
    options: [
      "Process Management",
      "Deadlock Handling",
      "Creating high quality graphs",
      "Resource Management",
    ],
    correctAnswer: 2,
    explanation:
      "Functions listed include Resource, Process, File management, Deadlock handling, and Virtual memory. Creating graphs is a function of spreadsheets.",
  },
  {
    id: "csc221_123",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "DOS and Android are examples of Operating Systems.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The text lists Window OS, Linux, Unix, DOS, and Android OS as examples of Operating Systems.",
  },
  {
    id: "csc221_124",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Users interact directly with which type of software?",
    options: [
      "Firmware",
      "Application Software",
      "System Software",
      "Machine Language",
    ],
    correctAnswer: 1,
    explanation:
      "Users interact directly with application software while the application software interact with the system software.",
  },
  {
    id: "csc221_125",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Application software interact directly with hardware resources without any intermediate layers.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Application software interacts with system software, and system software interacts with hardware resources.",
  },
  {
    id: "csc221_126",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "A word processor like Microsoft Word can be used to:",
    options: [
      "Manage a database via SQL",
      "Create electronic slide shows",
      "Create documents, letters, or reports",
      "Simulate physical electrical states",
    ],
    correctAnswer: 2,
    explanation:
      "A word processor such as Microsoft word can be used to create documents, letters or reports.",
  },
  {
    id: "csc221_127",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which of the following is an example of a word processor?",
    options: ["LaTeX", "MySQL", "MS Access", "VLC"],
    correctAnswer: 0,
    explanation:
      "The text lists Microsoft word, Google Doc, iWork, and LaTeX as examples of word processors.",
  },
  {
    id: "csc221_128",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "A spreadsheet is described as 'versatile' because of its:",
    options: [
      "Ability to play movie clips",
      "Wide range of dynamic calculations",
      "Interface with firmware",
      "Data integrity and security features",
    ],
    correctAnswer: 1,
    explanation:
      "A spreadsheet is a versatile computer application program, versatile for its wide range of dynamic calculation.",
  },
  {
    id: "csc221_129",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Microsoft Excel can be used to create high-quality graphs such as pie charts and bar charts.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The text states spreadsheets can be used to plot or create high quality graphs and charts.",
  },
  {
    id: "csc221_130",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "In a spreadsheet, what is the work space of a rectangular grid of rows and columns called?",
    options: ["A Slide", "A Worksheet", "A Database", "A Report"],
    correctAnswer: 1,
    explanation:
      "Each worksheet has a page layout or a work space of rectangular grid of rows and columns.",
  },
  {
    id: "csc221_131",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Cells in a spreadsheet can hold values such as integers and real/floating point numbers.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The text states cells can hold integers (2, 10) or real numbers (2.12, 10.56).",
  },
  {
    id: "csc221_132",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which type of software allows you to create electronic slide shows?",
    options: [
      "Spreadsheet",
      "Presentation Software",
      "Database Management System",
      "Utility Program",
    ],
    correctAnswer: 1,
    explanation:
      "Presentation Software is an application software program that allows you to create electronic slide shows.",
  },
  {
    id: "csc221_133",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Presentation software is used to present information in an organized manner to an audience.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "It is used to present information in a organized manner to an audience in a meeting, class or conference.",
  },
  {
    id: "csc221_134",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "What can be inserted into a slide within presentation software?",
    options: [
      "Only text and pictures",
      "Only graphs and charts",
      "Text, clip art, sound clips, movie clips, and more",
      "BIOS settings and firmware instructions",
    ],
    correctAnswer: 2,
    explanation:
      "Slides can contain text, clip art, sound clips, movie clips, graphs, and imported web screens.",
  },
  {
    id: "csc221_135",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which software program controls the organization, storage, management, and retrieval of data in a database?",
    options: ["Spreadsheet", "DBMS", "Word Processor", "BIOS"],
    correctAnswer: 1,
    explanation:
      "Database Management Software (DBMS) is the program that controls organization, storage, and retrieval of data.",
  },
  {
    id: "csc221_136",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "MySQL, SQLite, and MS Access are examples of Database Management Software.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The text lists MySQL, SQLite, and MS Access as examples of DBMS.",
  },
  {
    id: "csc221_137",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "A DBMS makes manipulation of data possible via a query language such as:",
    options: ["BASIC", "SQL", "Java", "Binary"],
    correctAnswer: 1,
    explanation:
      "Manipulation of data is possible via query language such as SQL (Structured Query Language).",
  },
  {
    id: "csc221_138",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which of the following is a feature of a DBMS listed in the text?",
    options: [
      "Electronic slide show creation",
      "Dynamic calculation via formulas",
      "Data integrity and security",
      "Boot sequence management",
    ],
    correctAnswer: 2,
    explanation:
      "Features of a DBMS include data integrity, security, backup, concurrency control, and data sharing.",
  },
  {
    id: "csc221_139",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Application software can run on a computer even if the System Software is absent.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The text explicitly states: 'Without the system software you can not run the application software on the computer'.",
  },
  {
    id: "csc221_140",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Registers are considered a computer hardware resource managed by programs.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Registers are listed as one of the hardware resources on page 5.",
  },
  {
    id: "csc221_141",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "The Operating System starts working as soon as the system is switched on and stops only when switched off.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is a direct quote from page 14 of the document.",
  },
  {
    id: "csc221_142",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which layer interact directly with the hardware resources?",
    options: ["Application Software", "User", "System Software", "Spreadsheet"],
    correctAnswer: 2,
    explanation:
      "The system software interact with the computer hardware resources, acting as an intermediary for application software.",
  },
  {
    id: "csc221_143",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "A decimal number '5' is represented by which binary string in the document's table?",
    options: ["0100", "0101", "0011", "0111"],
    correctAnswer: 1,
    explanation: "According to the table on page 13, decimal 5 is binary 0101.",
  },
  {
    id: "csc221_144",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Spreadsheet worksheets are typically arranged into:",
    options: ["Databases", "Workbooks", "Presentations", "Slides"],
    correctAnswer: 1,
    explanation:
      "Typically a spreadsheet application has worksheets arranged into workbooks.",
  },
  {
    id: "csc221_145",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Data mining is a feature of presentation software.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Data mining is listed as a feature of a DBMS (Database Management Software), not presentation software.",
  },
  {
    id: "csc221_146",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "The term 'SQL' stands for:",
    options: [
      "System Query Language",
      "Structured Query Language",
      "Standard Quick Logic",
      "Serial Question List",
    ],
    correctAnswer: 1,
    explanation:
      "SQL stands for Structured Query Language, used for manipulating data in a DBMS.",
  },
  {
    id: "csc221_147",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Virtual memory management is a function of the Operating System.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The functions of an OS include 'Creating and managing virtual memory'.",
  },
  {
    id: "csc221_148",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which of the following describes computer software as a collection?",
    options: [
      "A collection of integrated hardware components",
      "A collection and integrated computer programs performing tasks",
      "A set of peripheral devices used by a single user",
      "The physical storage disks containing data",
    ],
    correctAnswer: 1,
    explanation:
      "Computer Software is defined as a collection and integrated computer programs which perform specific or generic tasks.",
  },
  {
    id: "csc221_149",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "The BIOS is responsible for fetching the Operating System from the hard drive.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The BIOS will then fetch the operating system from the storage (e.g. hard drive) and load it into the RAM.",
  },
  {
    id: "csc221_150",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Deadlock is a concept of interest related to Operating Systems.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Topics of interest in OS include Basic Principles, Features, Functions, Process, Deadlock, and Resource Management.",
  },
  {
    id: "csc221_151",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Operating Systems manage file storage and retrieval.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "File Management is explicitly listed as a function of the Operating System.",
  },
  {
    id: "csc221_152",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Which of the following can be used to make corrections to a report after it has been created?",
    options: ["BIOS", "Word Processor", "Cache Memory", "Serial Port"],
    correctAnswer: 1,
    explanation:
      "In a word processor, you can edit, modify and make corrections or adjustments to reports after creating them.",
  },
  {
    id: "csc221_153",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "The BIOS transfers control to the Operating System and is no longer involved until power off.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The BIOS fetches the OS, loads it, and then transfers control to the OS until power off.",
  },
  {
    id: "csc221_154",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "What is the primary purpose of presentation software?",
    options: [
      "To perform complex mathematical data mining",
      "To convey a message clearly and logically via slides",
      "To manage peripheral devices like the mouse and keyboard",
      "To allocate RAM to different running applications",
    ],
    correctAnswer: 1,
    explanation:
      "Presentation software allows you to convey your message clearly and logically to your audience via electronic slide shows.",
  },
  {
    id: "csc221_155",
    course: "CSC 221",
    chapter: "Chapter 3",
    text: "Concurrency control is a feature of word processors.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Concurrency control is listed as a feature of a DBMS (Database Management Software).",
  },
];
