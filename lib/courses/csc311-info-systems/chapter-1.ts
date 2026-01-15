import { Question } from "../../quiz-types";

const chapter1Questions: Question[] = [
  {
    id: "csc311-1",
    text: "Who invented the first mechanical calculator in 1642?",
    options: [
      { id: "a", text: "Herman Hollerith" },
      { id: "b", text: "Blaise Pascal" },
      { id: "c", text: "Charles Babbage" },
      { id: "d", text: "Alan Turing" },
    ],
    correctOptionId: "b",
    explanation:
      "Blaise Pascal, French mathematician and philosopher, invented the mechanical calculator in 1642 so figures could be added to provide information.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-2",
    text: "What was the purpose of the punch card system created by Herman Hollerith in 1890?",
    options: [
      { id: "a", text: "To calculate mathematical equations" },
      { id: "b", text: "To tabulate data for the 1890 census" },
      { id: "c", text: "To store music files" },
      { id: "d", text: "To connect computers to the internet" },
    ],
    correctOptionId: "b",
    explanation:
      "Herman Hollerith created a punch card system specifically to tabulate data for the 1890 census. His company later evolved into IBM.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-3",
    text: "Herman Hollerith's company eventually evolved into which major corporation?",
    options: [
      { id: "a", text: "Microsoft" },
      { id: "b", text: "Apple" },
      { id: "c", text: "International Business Machines (IBM)" },
      { id: "d", text: "Google" },
    ],
    correctOptionId: "c",
    explanation:
      "Hollerith used his company to provide data processing equipment, which eventually evolved into International Business Machines (IBM).",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-4",
    text: "In what year did IBM create a punch card system that allowed mainframes to read and interpret data?",
    options: [
      { id: "a", text: "1890" },
      { id: "b", text: "1942" },
      { id: "c", text: "1952" },
      { id: "d", text: "1960" },
    ],
    correctOptionId: "c",
    explanation:
      "On May 21, 1952, IBM created a punch card system that allowed mainframes to read and interpret data from computers by reading hole punchers.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-5",
    text: "What limitation did accounting systems face in the mid-1960s despite being fairly effective?",
    options: [
      { id: "a", text: "They were too expensive" },
      { id: "b", text: "They lacked capacity" },
      { id: "c", text: "They required too much electricity" },
      { id: "d", text: "They were too slow" },
    ],
    correctOptionId: "b",
    explanation:
      "Mid-1960's accounting systems were fairly effective in supplying descriptive information but lacked capacity.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-6",
    text: "When did colleges and business schools create a full four-year program to study information systems?",
    options: [
      { id: "a", text: "1960" },
      { id: "b", text: "1970" },
      { id: "c", text: "1980" },
      { id: "d", text: "1990" },
    ],
    correctOptionId: "b",
    explanation:
      "In September 1970, colleges and business schools created a full four-year program designed to study information systems.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-7",
    text: "What significant development occurred in the 1980s regarding computing in organizations?",
    options: [
      { id: "a", text: "Mainframe computers were invented" },
      {
        id: "b",
        text: "PCs and LANs were installed, making departments less dependent on IT",
      },
      { id: "c", text: "The Internet was invented" },
      { id: "d", text: "Cloud computing was introduced" },
    ],
    correctOptionId: "b",
    explanation:
      "In 1980, PCs and LANs were installed, and departments set up their own computer systems. Using Word Processors and Spreadsheets made departments less dependent on the IT department.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-8",
    text: "What became corporate standards in the 1990s?",
    options: [
      { id: "a", text: "Personal Computers" },
      { id: "b", text: "Punch card systems" },
      { id: "c", text: "Wide Area Networks (WANs)" },
      { id: "d", text: "Mechanical calculators" },
    ],
    correctOptionId: "c",
    explanation:
      "In 1990, Wide Area Networks (WANs) became corporate standards, and management looked for system integration and data integration.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-9",
    text: "In the year 2000, what was the main focus of information systems development?",
    options: [
      { id: "a", text: "Entertainment and gaming" },
      { id: "b", text: "Social media integration" },
      {
        id: "c",
        text: "Efficiencies and speed in inventory, manufacturing, and distributions",
      },
      { id: "d", text: "Artificial intelligence" },
    ],
    correctOptionId: "c",
    explanation:
      "In 2000, WANs expanded to the Internet to include global enterprise and business partners. The main focus was efficiencies and speed in inventory, manufacturing, and distributions.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-10",
    text: "Which of the following is NOT a property of information?",
    options: [
      { id: "a", text: "Objective" },
      { id: "b", text: "Subjective" },
      { id: "c", text: "Temporary" },
      { id: "d", text: "Permanent" },
    ],
    correctOptionId: "d",
    explanation:
      "Information has three properties: Objective, Subjective, and Temporary. Information is temporary with every update in the database, not permanent.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-11",
    text: "What does it mean when we say information is 'objective'?",
    options: [
      { id: "a", text: "It is useful only to specific individuals" },
      {
        id: "b",
        text: "It is a key component of any modern scientific research",
      },
      { id: "c", text: "It changes frequently" },
      { id: "d", text: "It cannot be verified" },
    ],
    correctOptionId: "b",
    explanation:
      "Objective information is a key component of any modern scientific research. It refers to information that is factual and unbiased.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-12",
    text: "The property of information that explains why a set of information useful to science may be irrelevant for others is called:",
    options: [
      { id: "a", text: "Objective" },
      { id: "b", text: "Temporary" },
      { id: "c", text: "Subjective" },
      { id: "d", text: "Abstract" },
    ],
    correctOptionId: "c",
    explanation:
      "Subjective means that a set of information which is useful to science may be abstract or irrelevant for others.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-13",
    text: "What are the two common ways of representing information in computing?",
    options: [
      { id: "a", text: "Hexadecimal and octal systems" },
      { id: "b", text: "Decimal system and binary system" },
      { id: "c", text: "ASCII and Unicode" },
      { id: "d", text: "Analog and digital systems" },
    ],
    correctOptionId: "b",
    explanation:
      "Decimal system and binary system are two ways of representing information. The binary circuits of computers are designed to operate under two states (0,1).",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-14",
    text: "The binary circuits of computers are designed to operate under how many states?",
    options: [
      { id: "a", text: "One" },
      { id: "b", text: "Two" },
      { id: "c", text: "Three" },
      { id: "d", text: "Four" },
    ],
    correctOptionId: "b",
    explanation:
      "The binary circuits of computers are designed to operate under two states (0,1).",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-15",
    text: "Which of the following best describes 'data'?",
    options: [
      { id: "a", text: "Processed facts with meaning" },
      {
        id: "b",
        text: "Raw facts that simply exist and have no significance beyond their existence",
      },
      { id: "c", text: "Knowledge applied to decision making" },
      { id: "d", text: "Organized facts ready for use" },
    ],
    correctOptionId: "b",
    explanation:
      "Data is raw. It simply exists and has no significance beyond its existence. It can exist in any form, usable or not, and does not have meaning of itself.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-16",
    text: "What is the singular form of 'data'?",
    options: [
      { id: "a", text: "Datas" },
      { id: "b", text: "Datum" },
      { id: "c", text: "Date" },
      { id: "d", text: "Data" },
    ],
    correctOptionId: "b",
    explanation:
      "Data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-17",
    text: "In database management systems, what is the term for administrative information stored in index files and data dictionaries?",
    options: [
      { id: "a", text: "Primary data" },
      { id: "b", text: "Secondary data" },
      { id: "c", text: "Metadata" },
      { id: "d", text: "Raw data" },
    ],
    correctOptionId: "c",
    explanation:
      "In database management systems, data files store the database information, whereas other files like index files and data dictionaries store administrative information known as metadata.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-18",
    text: "What is a 'process' in the context of information systems?",
    options: [
      { id: "a", text: "Raw data storage" },
      {
        id: "b",
        text: "A set of logically related tasks performed to achieve a defined outcome",
      },
      { id: "c", text: "The final output of a system" },
      { id: "d", text: "Hardware components of a computer" },
    ],
    correctOptionId: "b",
    explanation:
      "Process is a set of logically related tasks performed to achieve a defined outcome, specifically turning data into information.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-19",
    text: "What is required to define relationships among data to create useful information?",
    options: [
      { id: "a", text: "Hardware" },
      { id: "b", text: "Software" },
      { id: "c", text: "Knowledge" },
      { id: "d", text: "Network" },
    ],
    correctOptionId: "c",
    explanation:
      "The process of defining relationships among data to create useful information requires knowledge.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-20",
    text: "Which statement best describes 'knowledge' in information systems?",
    options: [
      { id: "a", text: "Raw facts without meaning" },
      {
        id: "b",
        text: "Data and the relationships among data elements that enable generalization",
      },
      { id: "c", text: "Physical storage of information" },
      { id: "d", text: "Network connectivity" },
    ],
    correctOptionId: "b",
    explanation:
      "Knowledge involves both data and the relationships among data elements or their sets. This organization of data based on relationships enables one to draw generalizations from the data.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-21",
    text: "What is a 'knowledge base'?",
    options: [
      { id: "a", text: "A database that stores only raw data" },
      {
        id: "b",
        text: "A collection of data, rules, procedures, and relationships that must be followed to achieve value",
      },
      { id: "c", text: "A hardware component for data storage" },
      { id: "d", text: "A type of network topology" },
    ],
    correctOptionId: "b",
    explanation:
      "A knowledge base is the collection of data, rules, procedures, and relationships that must be followed to achieve value or the proper outcome.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-22",
    text: "What is information?",
    options: [
      { id: "a", text: "Raw data without context" },
      {
        id: "b",
        text: "Data that has been given meaning by way of relational connection",
      },
      { id: "c", text: "Hardware used in computing" },
      { id: "d", text: "The process of storing data" },
    ],
    correctOptionId: "b",
    explanation:
      "Information is data that has been given meaning by way of relational connection. This meaning can be useful, but does not have to be.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-23",
    text: "What is the first characteristic that distinguishes information from data?",
    options: [
      { id: "a", text: "Information must be digital" },
      {
        id: "b",
        text: "Information must be seen in a context in which it makes sense",
      },
      { id: "c", text: "Information must be stored in a database" },
      { id: "d", text: "Information must be numerical" },
    ],
    correctOptionId: "b",
    explanation:
      "When comparing data with information, the first obvious difference is that information must be seen in a context in which it makes sense.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-24",
    text: "What is the second characteristic that distinguishes information from data?",
    options: [
      {
        id: "a",
        text: "There must be a process by which data gets transformed into information",
      },
      { id: "b", text: "Information must be encrypted" },
      { id: "c", text: "Information must be stored permanently" },
      { id: "d", text: "Information must be shared publicly" },
    ],
    correctOptionId: "a",
    explanation:
      "The second characteristic is that there must be a process by which data gets transformed into information.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-25",
    text: "In the process of transforming data into information, what is applied?",
    options: [
      { id: "a", text: "Hardware" },
      { id: "b", text: "Software only" },
      {
        id: "c",
        text: "Knowledge by selecting, organizing, and manipulating data",
      },
      { id: "d", text: "Network connectivity" },
    ],
    correctOptionId: "c",
    explanation:
      "The transformation process involves applying knowledge by selecting, organizing, and manipulating data to convert it into information.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-26",
    text: "Which model of organizing information arranges data one after another, as in magnetic tapes?",
    options: [
      { id: "a", text: "Binary tree model" },
      { id: "b", text: "Linear model" },
      { id: "c", text: "Hierarchy model" },
      { id: "d", text: "Hypertext model" },
    ],
    correctOptionId: "b",
    explanation:
      "The simplest way of organizing information is through linear model. In this form, data is structured one after another, for example, in magnetic tapes, music tapes, etc.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-27",
    text: "In which model of organizing information is data arranged in an inverted tree format where it assumes two values?",
    options: [
      { id: "a", text: "Linear model" },
      { id: "b", text: "Binary tree model" },
      { id: "c", text: "Hypertext model" },
      { id: "d", text: "Random access model" },
    ],
    correctOptionId: "b",
    explanation:
      "In a binary tree model, data is arranged in an inverted tree format where it assumes two values.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-28",
    text: "The UNIX operating system uses which model for its file system?",
    options: [
      { id: "a", text: "Linear model" },
      { id: "b", text: "Binary tree model" },
      { id: "c", text: "Hierarchy model" },
      { id: "d", text: "Random access model" },
    ],
    correctOptionId: "c",
    explanation:
      "The hierarchy model is derived from a binary tree model. In this model, branch can assume multi-value data. The UNIX operating system uses this model for its file system.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-29",
    text: "The World Wide Web is an example of which model of organizing information?",
    options: [
      { id: "a", text: "Linear model" },
      { id: "b", text: "Binary tree model" },
      { id: "c", text: "Hypertext model" },
      { id: "d", text: "Random access model" },
    ],
    correctOptionId: "c",
    explanation:
      "The hypertext model is another way of organizing information; World Wide Web is an example of this model.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-30",
    text: "Which model is used for optimum utilization of available computer storage space?",
    options: [
      { id: "a", text: "Linear model" },
      { id: "b", text: "Hierarchy model" },
      { id: "c", text: "Hypertext model" },
      { id: "d", text: "Random access model" },
    ],
    correctOptionId: "d",
    explanation:
      "Random access model is used for optimum utilization of available computer storage space. Here data is stored in specified location under direction of the operating system.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-31",
    text: "What is network topology?",
    options: [
      { id: "a", text: "The physical location of a network" },
      {
        id: "b",
        text: "The layout of all connected devices providing virtual shape or structure to the network",
      },
      { id: "c", text: "The speed of data transmission" },
      { id: "d", text: "The type of cables used in networking" },
    ],
    correctOptionId: "b",
    explanation:
      "The layout of all the connected devices, which provides virtual shape or structure to the network, is known as network topology.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-32",
    text: "Which of the following is NOT a basic type of network topology?",
    options: [
      { id: "a", text: "Bus" },
      { id: "b", text: "Star" },
      { id: "c", text: "Linear" },
      { id: "d", text: "Mesh" },
    ],
    correctOptionId: "c",
    explanation:
      "The basic types of topology are bus, ring, star, tree, and mesh. Linear is not a network topology but a model for organizing information.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-33",
    text: "Which of the following devices is used to construct and manage network topologies?",
    options: [
      { id: "a", text: "Printer" },
      { id: "b", text: "Scanner" },
      { id: "c", text: "Router" },
      { id: "d", text: "Monitor" },
    ],
    correctOptionId: "c",
    explanation:
      "Network topologies are constructed and managed with help of Hubs, Switches, Bridges, Routers, Brouters, and Gateways.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-34",
    text: "Which of the following is a way through which information can be made secured?",
    options: [
      { id: "a", text: "Data deletion" },
      { id: "b", text: "Data back-up" },
      { id: "c", text: "Data corruption" },
      { id: "d", text: "Data exposure" },
    ],
    correctOptionId: "b",
    explanation:
      "Data back-up is one way through which information can be made secured. Security management for network and information system is distinct for different setups.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-35",
    text: "When does data become information?",
    options: [
      { id: "a", text: "When it is stored in a database" },
      {
        id: "b",
        text: "When it is applied to some purpose and adds value for the recipient",
      },
      { id: "c", text: "When it is encrypted" },
      { id: "d", text: "When it is deleted" },
    ],
    correctOptionId: "b",
    explanation:
      "Data becomes information when it is applied to some purpose and adds value for the recipient.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-36",
    text: "The value of information is directly linked to:",
    options: [
      { id: "a", text: "How expensive it is to store" },
      {
        id: "b",
        text: "How it helps people achieve their organizational goals",
      },
      { id: "c", text: "How old the data is" },
      { id: "d", text: "The size of the database" },
    ],
    correctOptionId: "b",
    explanation:
      "The value of information is directly linked to how it helps people achieve their organizational goals.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-37",
    text: "The value of information must also relate to:",
    options: [
      { id: "a", text: "The color of the display" },
      {
        id: "b",
        text: "The frequency of its provision and the management hierarchy level where it is used",
      },
      { id: "c", text: "The brand of computer used" },
      { id: "d", text: "The number of employees in IT department" },
    ],
    correctOptionId: "b",
    explanation:
      "The value of information must also relate to the frequency of its provision, and to the level in the management hierarchy where it is sent and used.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-38",
    text: "Which of the following is a characteristic of valuable information?",
    options: [
      { id: "a", text: "Complexity" },
      { id: "b", text: "Accuracy" },
      { id: "c", text: "Confusion" },
      { id: "d", text: "Redundancy" },
    ],
    correctOptionId: "b",
    explanation:
      "To be valuable, information must have several characteristics. Accuracy is one of the key characteristics of valuable information.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-39",
    text: "Information flows in organizations primarily through:",
    options: [
      { id: "a", text: "Hierarchy and project-based organization" },
      { id: "b", text: "Random distribution" },
      { id: "c", text: "External sources only" },
      { id: "d", text: "Verbal communication only" },
    ],
    correctOptionId: "a",
    explanation:
      "Information flows in a hierarchy and project-based organisation. Without a good flow of information, most organisations would not find it possible to function.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-40",
    text: "What has made information more readily available according to the lecture?",
    options: [
      { id: "a", text: "Paper-based systems" },
      { id: "b", text: "The explosion of electronic information" },
      { id: "c", text: "Reduction in computer use" },
      { id: "d", text: "Manual filing systems" },
    ],
    correctOptionId: "b",
    explanation:
      "Information has become more readily available due to the explosion of electronic information. Dynamics in Technology has made it faster for information flow.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-41",
    text: "What is 'information mapping'?",
    options: [
      { id: "a", text: "Creating physical maps using GPS" },
      {
        id: "b",
        text: "Mapping the information flow into and out of an organization to think about how effectively information is managed",
      },
      { id: "c", text: "Creating network diagrams" },
      { id: "d", text: "Designing database schemas" },
    ],
    correctOptionId: "b",
    explanation:
      "Mapping the information flow into and out of an organization is one way to think about how effectively information is managed.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-42",
    text: "What is the first step in information mapping?",
    options: [
      { id: "a", text: "Creating a database" },
      {
        id: "b",
        text: "Identification of the source of information and the people that require the information",
      },
      { id: "c", text: "Installing software" },
      { id: "d", text: "Hiring IT staff" },
    ],
    correctOptionId: "b",
    explanation:
      "To do information mapping, identification of the source of information is necessary and the people that require the information.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-43",
    text: "A system is best defined as:",
    options: [
      { id: "a", text: "A single computer" },
      {
        id: "b",
        text: "A set of elements or components that interact to accomplish a goal or set of objectives",
      },
      { id: "c", text: "A database only" },
      { id: "d", text: "A network cable" },
    ],
    correctOptionId: "b",
    explanation:
      "A system is a set of elements or components that interact to accomplish a goal or set of objectives.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-44",
    text: "Which statement is TRUE about a system?",
    options: [
      { id: "a", text: "Components do not affect each other" },
      {
        id: "b",
        text: "Each component contributes towards the behavior of the system and is affected by being in the system",
      },
      { id: "c", text: "Removing a component has no effect on the system" },
      { id: "d", text: "Systems have no specific objectives" },
    ],
    correctOptionId: "b",
    explanation:
      "Each component contributes specifically towards the behaviour of the system and is affected by being in the system. If a component is removed, it will change the system behaviour.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-45",
    text: "A system may include all of the following EXCEPT:",
    options: [
      { id: "a", text: "Software" },
      { id: "b", text: "Mechanical and electrical hardware" },
      { id: "c", text: "People" },
      { id: "d", text: "Isolated, independent elements" },
    ],
    correctOptionId: "d",
    explanation:
      "A system may include software, mechanical, electrical and electronic hardware and be operated by people. System components are dependent on other system components, not isolated.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-46",
    text: "What happens when there is lack of coordination among system components?",
    options: [
      { id: "a", text: "Improved efficiency" },
      { id: "b", text: "Counterproductive results" },
      { id: "c", text: "Faster processing" },
      { id: "d", text: "Better output quality" },
    ],
    correctOptionId: "b",
    explanation:
      "In a system, network of components work towards a single objective. If there is lack of co-ordination among components, it leads to counterproductive results.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-47",
    text: "Which system feature refers to systems that react to the exterior environment?",
    options: [
      { id: "a", text: "Limitation" },
      { id: "b", text: "Adaptability" },
      { id: "c", text: "Stability" },
      { id: "d", text: "Complexity" },
    ],
    correctOptionId: "b",
    explanation:
      "Adaptability: some systems are adaptive to the exterior environment, while some systems are non-adaptive to the external environment.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-48",
    text: "An anti-lock braking system in a car is an example of:",
    options: [
      { id: "a", text: "A non-adaptive system" },
      { id: "b", text: "An adaptive system" },
      { id: "c", text: "A static system" },
      { id: "d", text: "A closed system" },
    ],
    correctOptionId: "b",
    explanation:
      "Anti-lock braking system in car reacts depending on the road conditions, making it an adaptive system.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-49",
    text: "A music system in a car is an example of:",
    options: [
      { id: "a", text: "An adaptive system" },
      { id: "b", text: "A non-adaptive system" },
      { id: "c", text: "An open system" },
      { id: "d", text: "A dynamic system" },
    ],
    correctOptionId: "b",
    explanation:
      "The music system in the car is independent of other happenings with the car, making it a non-adaptive system.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-50",
    text: "System boundaries or limits can be defined by:",
    options: [
      { id: "a", text: "User preferences only" },
      { id: "b", text: "Law or current state of technology" },
      { id: "c", text: "Hardware specifications only" },
      { id: "d", text: "Software requirements only" },
    ],
    correctOptionId: "b",
    explanation:
      "Every system has pre-defined limits or boundaries within which it operates. These limits or boundaries can be defined by law or current state of technology.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-51",
    text: "What are the three basic elements of a system?",
    options: [
      { id: "a", text: "Hardware, software, and people" },
      { id: "b", text: "Inputs, processing mechanisms, and outputs" },
      { id: "c", text: "Data, information, and knowledge" },
      { id: "d", text: "Networks, databases, and servers" },
    ],
    correctOptionId: "b",
    explanation:
      "The basic elements of a system are: Inputs (gathering and capturing data), Processing mechanisms (converting data into outputs), and Outputs (useful information).",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-52",
    text: "In a system, what is the activity of gathering and capturing data called?",
    options: [
      { id: "a", text: "Processing" },
      { id: "b", text: "Output" },
      { id: "c", text: "Input" },
      { id: "d", text: "Feedback" },
    ],
    correctOptionId: "c",
    explanation:
      "Inputs refer to the activity of gathering and capturing data in a system.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-53",
    text: "What is the role of processing mechanisms in a system?",
    options: [
      { id: "a", text: "Gathering data" },
      { id: "b", text: "Converting or transforming data into useful outputs" },
      { id: "c", text: "Storing data permanently" },
      { id: "d", text: "Deleting unnecessary data" },
    ],
    correctOptionId: "b",
    explanation:
      "Processing mechanisms are responsible for converting or transforming data into useful outputs.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-54",
    text: "Outputs in a system are usually in the form of:",
    options: [
      { id: "a", text: "Raw data only" },
      { id: "b", text: "Documents and/or reports" },
      { id: "c", text: "Hardware components" },
      { id: "d", text: "Network cables" },
    ],
    correctOptionId: "b",
    explanation:
      "Outputs are useful information, usually in the form of documents and/or reports.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-55",
    text: "What are the system components responsible for transformations called?",
    options: [
      { id: "a", text: "Outputs" },
      { id: "b", text: "Inputs" },
      { id: "c", text: "Interfaces" },
      { id: "d", text: "Boundaries" },
    ],
    correctOptionId: "c",
    explanation:
      "The system components responsible for transformations are called the interfaces.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-56",
    text: "What separates systems from the environment and each other?",
    options: [
      { id: "a", text: "Interfaces" },
      { id: "b", text: "Boundaries" },
      { id: "c", text: "Processes" },
      { id: "d", text: "Inputs" },
    ],
    correctOptionId: "b",
    explanation:
      "Systems contain boundaries that separate them from the environment and each other.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-57",
    text: "The part of the outside world with which the system interacts is called the:",
    options: [
      { id: "a", text: "System boundary" },
      { id: "b", text: "System interface" },
      { id: "c", text: "System's environment" },
      { id: "d", text: "System input" },
    ],
    correctOptionId: "c",
    explanation:
      "The part of the outside world with which the system interacts is called the system's environment.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-58",
    text: "A simple system is characterized by:",
    options: [
      { id: "a", text: "Many highly related elements" },
      {
        id: "b",
        text: "Few components with uncomplicated relationships between elements",
      },
      { id: "c", text: "Rapid and constant change" },
      { id: "d", text: "No interaction with the environment" },
    ],
    correctOptionId: "b",
    explanation:
      "A simple system has few components, and the relationships or interaction between elements is uncomplicated and straightforward.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-59",
    text: "A complex system is characterized by:",
    options: [
      { id: "a", text: "Few components" },
      {
        id: "b",
        text: "Many elements that are highly related and interconnected",
      },
      { id: "c", text: "No interaction with the environment" },
      { id: "d", text: "Little change over time" },
    ],
    correctOptionId: "b",
    explanation:
      "A complex system has many elements that are highly related and interconnected.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-60",
    text: "An open system is one that:",
    options: [
      { id: "a", text: "Has no interaction with the environment" },
      { id: "b", text: "Interacts with the environment" },
      { id: "c", text: "Never changes" },
      { id: "d", text: "Is always temporary" },
    ],
    correctOptionId: "b",
    explanation: "An open system interacts with the environment.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-61",
    text: "A closed system is one that:",
    options: [
      { id: "a", text: "Interacts heavily with the environment" },
      { id: "b", text: "Has no interaction with the environment" },
      { id: "c", text: "Is always complex" },
      { id: "d", text: "Changes rapidly" },
    ],
    correctOptionId: "b",
    explanation: "A closed system has no interaction with the environment.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-62",
    text: "A stable system is one that:",
    options: [
      { id: "a", text: "Undergoes rapid and constant change" },
      { id: "b", text: "Undergoes very little change over time" },
      { id: "c", text: "Is not able to change in response to environment" },
      { id: "d", text: "Exists for only a short period" },
    ],
    correctOptionId: "b",
    explanation: "A stable system undergoes very little change over time.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-63",
    text: "A dynamic system is one that:",
    options: [
      { id: "a", text: "Never changes" },
      { id: "b", text: "Undergoes rapid and constant change over time" },
      { id: "c", text: "Has no components" },
      { id: "d", text: "Is always simple" },
    ],
    correctOptionId: "b",
    explanation:
      "A dynamic system undergoes rapid and constant change over time.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-64",
    text: "An adaptive system is one that:",
    options: [
      { id: "a", text: "Is not able to change in response to the environment" },
      {
        id: "b",
        text: "Is able to change in response to change in the environment",
      },
      { id: "c", text: "Has no boundaries" },
      { id: "d", text: "Is always closed" },
    ],
    correctOptionId: "b",
    explanation:
      "An adaptive system is able to change in response to change in the environment.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-65",
    text: "A non-adaptive system is one that:",
    options: [
      { id: "a", text: "Can adapt to any changes" },
      {
        id: "b",
        text: "Is not able to change in response to change in the environment",
      },
      { id: "c", text: "Is always open" },
      { id: "d", text: "Is always dynamic" },
    ],
    correctOptionId: "b",
    explanation:
      "A non-adaptive system is not able to change in response to change in the environment.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-66",
    text: "A permanent system is one that:",
    options: [
      { id: "a", text: "Exists for only a short period of time" },
      { id: "b", text: "Exists for a relatively long period of time" },
      { id: "c", text: "Has no components" },
      { id: "d", text: "Is always complex" },
    ],
    correctOptionId: "b",
    explanation:
      "A permanent system exists for a relatively long period of time.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-67",
    text: "A temporary system is one that:",
    options: [
      { id: "a", text: "Exists for a very long period of time" },
      { id: "b", text: "Exists for only a relatively short period of time" },
      { id: "c", text: "Never interacts with the environment" },
      { id: "d", text: "Is always stable" },
    ],
    correctOptionId: "b",
    explanation:
      "A temporary system exists for only a relatively short period of time.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-68",
    text: "What is a System Performance Standard?",
    options: [
      { id: "a", text: "The hardware specifications of a system" },
      { id: "b", text: "A specific objective of the system" },
      { id: "c", text: "The cost of the system" },
      { id: "d", text: "The age of the system" },
    ],
    correctOptionId: "b",
    explanation:
      "System Performance Standard is a specific objective of the system.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-69",
    text: "How is system performance standard computed?",
    options: [
      { id: "a", text: "By counting hardware components" },
      {
        id: "b",
        text: "By dividing the goals actually achieved by the total of stated goals",
      },
      { id: "c", text: "By measuring electricity consumption" },
      { id: "d", text: "By calculating storage capacity" },
    ],
    correctOptionId: "b",
    explanation:
      "System Performance Standard can be computed by dividing the goals actually achieved by the total of stated goals.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-70",
    text: "What are the determinants of system performance?",
    options: [
      { id: "a", text: "Hardware specifications" },
      { id: "b", text: "Variances from the standard" },
      { id: "c", text: "Software versions" },
      { id: "d", text: "Network speed" },
    ],
    correctOptionId: "b",
    explanation:
      "Once standards are established, system performance is measured and compared with the standard. Variances from the standard are determinants of system performance.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-71",
    text: "A system variable is:",
    options: [
      {
        id: "a",
        text: "A value that cannot be controlled by the decision maker",
      },
      {
        id: "b",
        text: "A quantity or item that can be controlled by the decision maker",
      },
      { id: "c", text: "A constant value" },
      { id: "d", text: "An external factor" },
    ],
    correctOptionId: "b",
    explanation:
      "A system variable is a quality or item that can be controlled by the decision maker.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-72",
    text: "Which of the following is an example of a system variable?",
    options: [
      { id: "a", text: "Cost of raw materials" },
      { id: "b", text: "The price a company charges for a product" },
      { id: "c", text: "Market competition" },
      { id: "d", text: "Government regulations" },
    ],
    correctOptionId: "b",
    explanation:
      "The price a company charges for a product is an example of a system variable because it can be controlled by the decision maker.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-73",
    text: "A system parameter is:",
    options: [
      {
        id: "a",
        text: "A quantity that can be controlled by the decision maker",
      },
      {
        id: "b",
        text: "A value or quantity that cannot be controlled by the decision maker",
      },
      { id: "c", text: "An internal factor" },
      { id: "d", text: "A type of output" },
    ],
    correctOptionId: "b",
    explanation:
      "A system parameter is a value or quantity that cannot be controlled by the decision maker.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-74",
    text: "Which of the following is an example of a system parameter?",
    options: [
      { id: "a", text: "Product pricing" },
      { id: "b", text: "Marketing strategy" },
      { id: "c", text: "Cost of raw material" },
      { id: "d", text: "Employee salaries" },
    ],
    correctOptionId: "c",
    explanation:
      "Cost of a raw material is an example of a system parameter because it cannot be controlled by the decision maker.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-75",
    text: "Why are models of systems used instead of real-life systems?",
    options: [
      { id: "a", text: "Because real systems are too expensive" },
      {
        id: "b",
        text: "Because the real world is complex and dynamic, making testing difficult",
      },
      { id: "c", text: "Because models are more accurate" },
      { id: "d", text: "Because real systems don't exist" },
    ],
    correctOptionId: "b",
    explanation:
      "The real world is complex and dynamic. Therefore, when testing for different relationships and their effects, models of systems are used which are simplified instead of real life systems.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-76",
    text: "A model can be defined as:",
    options: [
      { id: "a", text: "An exact replica of reality" },
      {
        id: "b",
        text: "An abstraction or approximation used to represent reality",
      },
      { id: "c", text: "A type of hardware" },
      { id: "d", text: "A database structure" },
    ],
    correctOptionId: "b",
    explanation:
      "A model can be said to be an abstraction or an approximation that is used to represent reality.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-77",
    text: "How many basic types of models are there?",
    options: [
      { id: "a", text: "Two" },
      { id: "b", text: "Three" },
      { id: "c", text: "Four" },
      { id: "d", text: "Five" },
    ],
    correctOptionId: "c",
    explanation:
      "There are four basic types of models: narrative, physical, schematic, and mathematical.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-78",
    text: "A narrative model provides:",
    options: [
      { id: "a", text: "A physical representation of reality" },
      { id: "b", text: "A verbal description of reality" },
      { id: "c", text: "A graphic representation of reality" },
      { id: "d", text: "An arithmetic representation of reality" },
    ],
    correctOptionId: "b",
    explanation: "A narrative model provides a verbal description of reality.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-79",
    text: "A physical model is:",
    options: [
      { id: "a", text: "A verbal description" },
      {
        id: "b",
        text: "A tangible representation of reality, often computed, designed, or constructed",
      },
      { id: "c", text: "A graph or chart" },
      { id: "d", text: "A mathematical formula" },
    ],
    correctOptionId: "b",
    explanation:
      "A physical model is a tangible representation of reality often computed, designed, or constructed.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-80",
    text: "A schematic model is:",
    options: [
      { id: "a", text: "A verbal description of reality" },
      { id: "b", text: "A tangible representation" },
      {
        id: "c",
        text: "A graphic representation of reality such as a graph or chart",
      },
      { id: "d", text: "An arithmetic representation" },
    ],
    correctOptionId: "c",
    explanation:
      "A schematic model is a graphic representation of reality such as a graph or chart.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-81",
    text: "A mathematical model is:",
    options: [
      { id: "a", text: "A verbal description" },
      { id: "b", text: "A tangible representation" },
      { id: "c", text: "A graphic representation" },
      { id: "d", text: "An arithmetic representation" },
    ],
    correctOptionId: "d",
    explanation: "A mathematical model is an arithmetic representation.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-82",
    text: "In the healthcare example given, what represents the 'input'?",
    options: [
      { id: "a", text: "Obtaining glasses" },
      { id: "b", text: "Eye problem due to focus on computer screen" },
      { id: "c", text: "Ophthalmologist checking and prescribing" },
      { id: "d", text: "Patient being better with glasses" },
    ],
    correctOptionId: "b",
    explanation:
      "Eye problem due to so much focus on the computer screen represents the input in the healthcare example.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-83",
    text: "In the healthcare example, what represents the 'process'?",
    options: [
      { id: "a", text: "Eye problem" },
      { id: "b", text: "Obtaining glasses" },
      {
        id: "c",
        text: "Visits an Ophthalmologist who checks and prescribes glasses",
      },
      { id: "d", text: "Patient with glasses is better" },
    ],
    correctOptionId: "c",
    explanation:
      "Visits an Ophthalmologist who checks and prescribes the aid of glasses represents the process.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-84",
    text: "In the healthcare example, what represents the 'output'?",
    options: [
      { id: "a", text: "Eye problem" },
      { id: "b", text: "Visiting the doctor" },
      { id: "c", text: "Obtains glasses" },
      { id: "d", text: "Patient with glasses is better" },
    ],
    correctOptionId: "c",
    explanation:
      "Obtains glasses represents the output in the healthcare example.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-85",
    text: "In the healthcare example, what represents 'feedback'?",
    options: [
      { id: "a", text: "Eye problem" },
      { id: "b", text: "Visiting the doctor" },
      { id: "c", text: "Obtaining glasses" },
      { id: "d", text: "Patient with glasses is a lot better" },
    ],
    correctOptionId: "d",
    explanation:
      "Patient with glasses is a lot better represents the feedback in the healthcare example.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-86",
    text: "What year marked the increased enthusiasm for information systems to enhance management decision process?",
    options: [
      { id: "a", text: "1952" },
      { id: "b", text: "1960" },
      { id: "c", text: "1970" },
      { id: "d", text: "1980" },
    ],
    correctOptionId: "b",
    explanation:
      "In 1960, there was increased enthusiasm for information systems to enhance management decision process.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-87",
    text: "Which of the following is NOT a basic type of network topology?",
    options: [
      { id: "a", text: "Ring" },
      { id: "b", text: "Tree" },
      { id: "c", text: "Hierarchy" },
      { id: "d", text: "Bus" },
    ],
    correctOptionId: "c",
    explanation:
      "The basic types of topology are bus, ring, star, tree, and mesh. Hierarchy is a model for organizing information, not a network topology.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-88",
    text: "Which device among the following is used to manage network topologies?",
    options: [
      { id: "a", text: "Gateway" },
      { id: "b", text: "Keyboard" },
      { id: "c", text: "Mouse" },
      { id: "d", text: "Printer" },
    ],
    correctOptionId: "a",
    explanation:
      "Network topologies are constructed and managed with help of Hubs, Switches, Bridges, Routers, Brouters, and Gateways.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-89",
    text: "The term 'data' is often used to distinguish:",
    options: [
      { id: "a", text: "Audio from video information" },
      {
        id: "b",
        text: "Binary machine-readable information from textual human-readable information",
      },
      { id: "c", text: "Old from new information" },
      { id: "d", text: "Local from remote information" },
    ],
    correctOptionId: "b",
    explanation:
      "The term data is often used to distinguish binary machine-readable information from textual human-readable information.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-90",
    text: "In a spreadsheet, what is typically held at the beginning?",
    options: [
      { id: "a", text: "Information" },
      { id: "b", text: "Knowledge" },
      { id: "c", text: "Data" },
      { id: "d", text: "Wisdom" },
    ],
    correctOptionId: "c",
    explanation:
      "In computer parlance, a spreadsheet generally starts out by holding data.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-91",
    text: "A relational database creates information from:",
    options: [
      { id: "a", text: "Hardware components" },
      { id: "b", text: "The data stored within it" },
      { id: "c", text: "Network connections" },
      { id: "d", text: "User interfaces" },
    ],
    correctOptionId: "b",
    explanation:
      "In computer parlance, a relational database makes information from the data stored within it.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-92",
    text: "The act of selecting or rejecting facts based on their relevancy to particular tasks is based on:",
    options: [
      { id: "a", text: "Data" },
      { id: "b", text: "Information" },
      { id: "c", text: "Knowledge" },
      { id: "d", text: "Output" },
    ],
    correctOptionId: "c",
    explanation:
      "The act of selecting or rejecting facts based on their relevancy to particular tasks is also based on a type of knowledge used in the process of converting data into information.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-93",
    text: "What directly affects the way information is managed and retrieved?",
    options: [
      { id: "a", text: "The cost of storage" },
      { id: "b", text: "The way information is organized" },
      { id: "c", text: "The number of users" },
      { id: "d", text: "The brand of computer" },
    ],
    correctOptionId: "b",
    explanation:
      "The way in which information is organized directly affects the way the information is managed and retrieved.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-94",
    text: "Which of the following is TRUE about e-governance evolution?",
    options: [
      { id: "a", text: "It has remained the same over 25 years" },
      {
        id: "b",
        text: "It evolved from rudimentary uses to integration throughout government operations",
      },
      { id: "c", text: "It has decreased in most countries" },
      { id: "d", text: "It only applies to developed countries" },
    ],
    correctOptionId: "b",
    explanation:
      "E-governance has evolved rapidly from rudimentary uses of ICTs as simple tools to support highly structured administrative work to the integration of ICT throughout government operations.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-95",
    text: "According to the lecture, developing countries compared to developed countries in e-government adoption are:",
    options: [
      { id: "a", text: "Ahead" },
      { id: "b", text: "At the same level" },
      { id: "c", text: "Lagging behind" },
      { id: "d", text: "Not compared" },
    ],
    correctOptionId: "c",
    explanation:
      "Generally, developing countries are lagging behind in e-government adoption compared with developed countries.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-96",
    text: "What can heavily impact the way public services are delivered and citizen engagement processes are carried out?",
    options: [
      { id: "a", text: "Paper-based systems" },
      { id: "b", text: "Manual processes" },
      { id: "c", text: "Web 2.0, social media, and mobile/wireless ICT" },
      { id: "d", text: "Traditional mail" },
    ],
    correctOptionId: "c",
    explanation:
      "The growing use of Web 2.0, social media, and mobile and wireless ICT by citizens can heavily impact the way public services are delivered and how citizen engagement processes are carried out.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-97",
    text: "Information is represented with help of:",
    options: [
      { id: "a", text: "Only numbers" },
      { id: "b", text: "Data, numbers, letters, or symbols" },
      { id: "c", text: "Only letters" },
      { id: "d", text: "Only symbols" },
    ],
    correctOptionId: "b",
    explanation:
      "Information is represented with help of data, numbers, letters, or symbols. Information is perceived in a way it gets represented.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-98",
    text: "What is required for innovative ICTs to be seamlessly integrated into governance structure?",
    options: [
      { id: "a", text: "More hardware" },
      {
        id: "b",
        text: "Understanding the relationship between stakeholders and ICTs",
      },
      { id: "c", text: "Faster internet" },
      { id: "d", text: "More software" },
    ],
    correctOptionId: "b",
    explanation:
      "Only when the relationship between stakeholders and ICTs is clearly understood can innovative ICTs be seamlessly integrated into the governance structure.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-99",
    text: "Which of the following is a challenge for governments in the age of big data?",
    options: [
      { id: "a", text: "Too much paper" },
      {
        id: "b",
        text: "Missing management approaches, governance structures, and policy frameworks",
      },
      { id: "c", text: "Too many employees" },
      { id: "d", text: "Slow printers" },
    ],
    correctOptionId: "b",
    explanation:
      "New management approaches, governance structures, and policy frameworks are still missing, posing a challenge for governments to operate effectively in the age of big data.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-100",
    text: "Knowledge enables one to:",
    options: [
      { id: "a", text: "Store more data" },
      {
        id: "b",
        text: "Draw generalizations from organized data and formulate questions",
      },
      { id: "c", text: "Delete unnecessary files" },
      { id: "d", text: "Create faster networks" },
    ],
    correctOptionId: "b",
    explanation:
      "The organization of data based on relationships is what enables one to draw generalizations from the data so organized, and to formulate questions about which one wishes to acquire more data.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-101",
    text: "A Brouter is used to:",
    options: [
      { id: "a", text: "Store data" },
      { id: "b", text: "Print documents" },
      { id: "c", text: "Construct and manage network topologies" },
      { id: "d", text: "Create presentations" },
    ],
    correctOptionId: "c",
    explanation:
      "Network topologies are constructed and managed with help of Hubs, Switches, Bridges, Routers, Brouters, and Gateways.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-102",
    text: "Security management for network and information system is:",
    options: [
      { id: "a", text: "The same for all setups" },
      {
        id: "b",
        text: "Distinct for different setups like home, small business, large business, etc.",
      },
      { id: "c", text: "Not necessary for small businesses" },
      { id: "d", text: "Only required for government systems" },
    ],
    correctOptionId: "b",
    explanation:
      "Security management for network and information system is distinct for different setups like home, small business, medium business, large business, school, and government.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-103",
    text: "Without a good flow of information, most organizations would:",
    options: [
      { id: "a", text: "Function normally" },
      { id: "b", text: "Become more efficient" },
      { id: "c", text: "Not find it possible to function" },
      { id: "d", text: "Save money" },
    ],
    correctOptionId: "c",
    explanation:
      "Without a good flow of information, most organisations would not find it possible to function.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-104",
    text: "To determine how effectively information meets decision making needs is part of:",
    options: [
      { id: "a", text: "Data backup" },
      { id: "b", text: "Information mapping" },
      { id: "c", text: "Network configuration" },
      { id: "d", text: "System installation" },
    ],
    correctOptionId: "b",
    explanation:
      "Information mapping involves determining how effective information meets decision making needs and how it meets the information needs of others within and outside the organisation.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-105",
    text: "The system concept is described as:",
    options: [
      { id: "a", text: "An objective concept with a universal definition" },
      {
        id: "b",
        text: "A subjective concept with no unanimously accepted definition",
      },
      { id: "c", text: "A hardware specification" },
      { id: "d", text: "A software program" },
    ],
    correctOptionId: "b",
    explanation:
      "Since a system is a subjective concept, there is no unanimously accepted definition of a system.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-106",
    text: "The properties and behaviour of system components are:",
    options: [
      { id: "a", text: "Completely independent" },
      { id: "b", text: "Inextricably inter-mingled" },
      { id: "c", text: "Unrelated to each other" },
      { id: "d", text: "Fixed and unchangeable" },
    ],
    correctOptionId: "b",
    explanation:
      "The properties and behaviour of system components are inextricably inter-mingled.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-107",
    text: "Which model allows branches to assume multi-value data?",
    options: [
      { id: "a", text: "Linear model" },
      { id: "b", text: "Binary tree model" },
      { id: "c", text: "Hierarchy model" },
      { id: "d", text: "Hypertext model" },
    ],
    correctOptionId: "c",
    explanation:
      "The hierarchy model is derived from a binary tree model. In this model, branch can assume multi-value data.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-108",
    text: "Magnetic tapes use which model for organizing information?",
    options: [
      { id: "a", text: "Binary tree model" },
      { id: "b", text: "Hierarchy model" },
      { id: "c", text: "Linear model" },
      { id: "d", text: "Random access model" },
    ],
    correctOptionId: "c",
    explanation:
      "In the linear model, data is structured one after another, for example, in magnetic tapes, music tapes, etc.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-109",
    text: "In the random access model, data storage location is determined by:",
    options: [
      { id: "a", text: "The user" },
      { id: "b", text: "The operating system" },
      { id: "c", text: "Random chance" },
      { id: "d", text: "The hardware manufacturer" },
    ],
    correctOptionId: "b",
    explanation:
      "In the random access model, data is stored in specified location under direction of the operating system.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-110",
    text: "The physical structure of a network:",
    options: [
      { id: "a", text: "Is always the same as network topology" },
      { id: "b", text: "May not be representative of network topology" },
      { id: "c", text: "Determines the network topology" },
      { id: "d", text: "Has no relationship with network topology" },
    ],
    correctOptionId: "b",
    explanation:
      "The physical structure may not be representative of network topology.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-111",
    text: "When was the first cell phone call made?",
    options: [
      { id: "a", text: "1960" },
      { id: "b", text: "1970" },
      { id: "c", text: "1980" },
      { id: "d", text: "1990" },
    ],
    correctOptionId: "b",
    explanation:
      "According to the lecture, the first cell phone call was made around 1970, during the same period when colleges created four-year programs for information systems.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-112",
    text: "Which of the following was invented around the year 2000?",
    options: [
      { id: "a", text: "Punch cards" },
      { id: "b", text: "Mainframe computers" },
      { id: "c", text: "iPhone, iPad, and iPod" },
      { id: "d", text: "LANs" },
    ],
    correctOptionId: "c",
    explanation:
      "In 2000, iPhone, iPad, and iPod were invented. The main focus was efficiencies and speed in inventory, manufacturing, and distributions.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-113",
    text: "What did Word Processors and Spreadsheets enable departments to do in the 1980s?",
    options: [
      { id: "a", text: "Become more dependent on IT department" },
      { id: "b", text: "Become less dependent on the IT department" },
      { id: "c", text: "Eliminate all paper work" },
      { id: "d", text: "Shut down operations" },
    ],
    correctOptionId: "b",
    explanation:
      "Using Word Processors and Spreadsheets made departments less dependent on the IT department in the 1980s.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-114",
    text: "In 1970, what type of computers were being used?",
    options: [
      { id: "a", text: "Personal computers" },
      { id: "b", text: "Laptops" },
      { id: "c", text: "Mainframe computers" },
      { id: "d", text: "Smartphones" },
    ],
    correctOptionId: "c",
    explanation:
      "In 1970, Mainframe Computers were being used, and computers and data were centralized.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-115",
    text: "Systems were connected to which business functions in the 1970s?",
    options: [
      { id: "a", text: "Social media and marketing" },
      { id: "b", text: "Billing, inventory, and payroll" },
      { id: "c", text: "Cloud computing and AI" },
      { id: "d", text: "Video conferencing" },
    ],
    correctOptionId: "b",
    explanation:
      "In 1970, systems were connected to business functions such as billing, inventory, and payroll.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-116",
    text: "In 1990, management looked for:",
    options: [
      { id: "a", text: "More paper-based systems" },
      { id: "b", text: "System integration and data integration" },
      { id: "c", text: "Elimination of computers" },
      { id: "d", text: "Fewer employees" },
    ],
    correctOptionId: "b",
    explanation:
      "In 1990, Wide Area Networks (WANs) became corporate standards, and management looked for system integration and data integration.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-117",
    text: "The hierarchy model of organizing information is derived from:",
    options: [
      { id: "a", text: "Linear model" },
      { id: "b", text: "Binary tree model" },
      { id: "c", text: "Hypertext model" },
      { id: "d", text: "Random access model" },
    ],
    correctOptionId: "b",
    explanation: "The hierarchy model is derived from a binary tree model.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-118",
    text: "Knowledge can be described as an awareness and understanding of:",
    options: [
      { id: "a", text: "Hardware specifications" },
      {
        id: "b",
        text: "A set of information and how that information can be made useful to support a specific task",
      },
      { id: "c", text: "Network topology" },
      { id: "d", text: "Software versions" },
    ],
    correctOptionId: "b",
    explanation:
      "Knowledge is an awareness and understanding of a set of information and how that information can be made useful to support a specific task.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-119",
    text: "Why is information described as temporary?",
    options: [
      { id: "a", text: "Because it is always deleted" },
      { id: "b", text: "With every update in the database" },
      { id: "c", text: "Because computers fail" },
      { id: "d", text: "Because it is never stored" },
    ],
    correctOptionId: "b",
    explanation: "Information is temporary with every update in the database.",
    chapter: "Chapter 1",
  },
  {
    id: "csc311-120",
    text: "Which of the following is TRUE about the system's objective?",
    options: [
      { id: "a", text: "A system has no specific objective" },
      {
        id: "b",
        text: "The system does something and exhibits a type of behaviour unique to the system",
      },
      { id: "c", text: "All systems have the same objective" },
      { id: "d", text: "Systems cannot have objectives" },
    ],
    correctOptionId: "b",
    explanation:
      "The system does something, i.e., it exhibits a type of behaviour unique to the system or has a specific objective or purpose.",
    chapter: "Chapter 1",
  },
];

export default chapter1Questions;
