import { QuestionV2 } from "@/lib/quiz-types";

const CSC315Lecturer1: QuestionV2[] = [
  // --- SINGLE-WORD BLANKS ---
  {
    id: "CSC315_001",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The systematic way of organizing data so as to be able to use them efficiently is known as ______.",
    options: ["Algorithm", "Structure", "DS", "Interface"],
    correctAnswer: 2,
    explanation:
      "Based on the definition: 'The systematic way of organizing data so as to be able to use them efficiently is known as DS.'",
  },
  {
    id: "CSC315_002",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "With implementation, the internal representation of a DS is provided. It also provides the definition of the ______ to be used in the DS operations.",
    options: ["Memory", "Algorithms", "Interfaces", "Parameters"],
    correctAnswer: 1,
    explanation:
      "From Page 4: 'It also allows/provide the definition of the algorithms to be used in the DS operations.'",
  },
  {
    id: "CSC315_003",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Entities of similar attributes form an entity ______.",
    options: ["Group", "Set", "List", "File"],
    correctAnswer: 1,
    explanation:
      "From Basic Terminology: 'Entities of similar attributes form an entity set.'",
  },
  {
    id: "CSC315_004",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "In Data Definition, 'Accurate' means the definition should be ______.",
    options: ["Concise", "Traceable", "Unambiguous", "Atomic"],
    correctAnswer: 2,
    explanation:
      "From Data Definition characteristics: 'Accurate - Definition should be unambiguous.'",
  },
  {
    id: "CSC315_005",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Variables, expressions, and data types are example of ______ for representing, describing, and manipulating data.",
    options: ["Code", "Tools", "Syntax", "Functions"],
    correctAnswer: 1,
    explanation:
      "From Page 15: 'data types are example of Tools... Other tools include: variables, expressions'.",
  },
  {
    id: "CSC315_006",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Linked data structures are made of distinct sectors of memory that are bound together by ______.",
    options: ["Arrays", "Nodes", "Pointers", "Indices"],
    correctAnswer: 2,
    explanation:
      "From Page 17: 'Linked data structures: are made of distinct sectors of memory that are bound together by pointers.'",
  },
  {
    id: "CSC315_007",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The representation of a particular data structure in the main memory of a computer is known as ______ structure.",
    options: ["File", "Storage", "Logical", "Physical"],
    correctAnswer: 1,
    explanation:
      "From Page 24: 'The representation of particular data structure in the main memory... is known as storage structure'.",
  },
  {
    id: "CSC315_008",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "______ operation destroys memory space allocated for specified data structure.",
    options: ["Delete", "Remove", "Destroy", "Free"],
    correctAnswer: 2,
    explanation:
      "From Page 42: 'Destroy operation destroys memory space allocated for specified data structure.'",
  },
  {
    id: "CSC315_009",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Selection operation deals with ______ a particular data within a data structure.",
    options: ["Sorting", "Updating", "Accessing", "Deleting"],
    correctAnswer: 2,
    explanation:
      "From Page 42: 'Selection operation deals with accessing a particular data within a data structure.'",
  },
  {
    id: "CSC315_010",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Each location of an element in an array has a numerical ______.",
    options: ["Pointer", "Value", "Address", "Index"],
    correctAnswer: 3,
    explanation:
      "From Page 44: 'Each location of an element in an array has a numerical index'.",
  },

  // --- MULTI-WORD BLANKS ---
  {
    id: "CSC315_011",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "______ entails that the memory usage of a data structure operation must be as little as possible.",
    options: [
      "Time Complexity",
      "Space Complexity",
      "Memory Allocation",
      "Data Compression",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 5: 'Space Complexity - this entails that the memory usage... must also be as little as possible.'",
  },
  {
    id: "CSC315_012",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "A ______ is a collection of field values of a given entity.",
    options: ["Data Object", "Entity Set", "Record", "File Structure"],
    correctAnswer: 2,
    explanation:
      "From Basic Terminology: 'Record is a collection of field values of a given entity.'",
  },
  {
    id: "CSC315_013",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Those data types for which a language has built-in support are known as ______.",
    options: [
      "Derived Data Types",
      "Abstract Data Types",
      "Built-in Data Types",
      "Primitive Data Types",
    ],
    correctAnswer: 2,
    explanation:
      "From Page 12: 'Those data types for which a language has built-in support are known as Built-in Data types.'",
  },
  {
    id: "CSC315_014",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "In ______ data structures, the data items are arranged in a linear sequence. Example: Array.",
    options: ["Non-Linear", "Linear", "Homogeneous", "Dynamic"],
    correctAnswer: 1,
    explanation:
      "From Table 1: 'In Linear data structures, the data items are arranged in a linear sequence.'",
  },
  {
    id: "CSC315_015",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "______ means storing data in contiguous or adjoining sectors of memory.",
    options: [
      "Linked data structures",
      "Contiguous data structures",
      "Dynamic data structures",
      "Pointer structures",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 17: 'Contiguous data structures: it means storing data in contiguous or adjoining sectors of memory.'",
  },
  {
    id: "CSC315_016",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The ______ is a data structure that is defined indirectly by the operations that may be performed on it.",
    options: [
      "Physical Data Type",
      "Implementation Detail",
      "Abstract Data Type",
      "User Defined Type",
    ],
    correctAnswer: 2,
    explanation:
      "From Page 35: 'The ADT is a data structure that is defined indirectly by the operations that may be performed on it.'",
  },
  {
    id: "CSC315_017",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "A ______ is a variation of Linked list in which navigation is possible in both ways, either forward and backward.",
    options: [
      "Simple Linked List",
      "Circular Linked List",
      "Doubly Linked List",
      "Header Linked List",
    ],
    correctAnswer: 2,
    explanation:
      "From Page 75: 'Doubly Linked List is a variation of Linked list in which navigation is possible in both ways'.",
  },
  {
    id: "CSC315_018",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "______ is an empirical analysis of an algorithm where the selected algorithm is implemented using programming language.",
    options: [
      "A Priori Analysis",
      "A Posteriori Analysis",
      "Asymptotic Analysis",
      "Complexity Analysis",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 88: 'A Posteriori Analysis - This is an empirical analysis... implemented using programming language.'",
  },
  {
    id: "CSC315_019",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The ______ represents the amount of memory space required by the algorithm in its life cycle.",
    options: [
      "Time Complexity",
      "Space Complexity",
      "Code Size",
      "Stack Trace",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 89: 'Space complexity of an algorithm represents the amount of memory space required...'",
  },
  {
    id: "CSC315_020",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "______ algorithms try to find a localized optimum solution, which may eventually lead to globally optimized solutions.",
    options: [
      "Divide and Conquer",
      "Dynamic Programming",
      "Greedy",
      "Backtracking",
    ],
    correctAnswer: 2,
    explanation:
      "From Page 100: 'Greedy algorithms try to find a localized optimum solution...'",
  },

  // --- LIST-STYLE BLANKS ---
  {
    id: "CSC315_021",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The three common problems which applications face are: (1) Data Search, (2) Processor Speed, and (3) ______.",
    options: [
      "Memory Leaks",
      "Multiple Requests",
      "Disk Failure",
      "Network Latency",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 6-7: The problems are (i) Data Search, (ii) Processor Speed, (iii) Multiple Requests.",
  },
  {
    id: "CSC315_022",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Three cases are used to compare data structure execution time: (1) Worst Case, (2) Average Case, and (3) ______.",
    options: ["Null Case", "Best Case", "Ideal Case", "Real Case"],
    correctAnswer: 1,
    explanation:
      "From Page 8: The three cases are Worst Case, Average Case, and Best Case.",
  },
  {
    id: "CSC315_023",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Data types are classified into two types: (1) Built-in Data Type and (2) ______.",
    options: [
      "Primitive Data Type",
      "Abstract Data Type",
      "Derived Data Type",
      "Complex Data Type",
    ],
    correctAnswer: 2,
    explanation:
      "From Page 11: 'Data type is classified into two types: Built-in Data Type, Derived Data Type'.",
  },
  {
    id: "CSC315_024",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The fundamental types of data structures classified based on arrays and pointers are: (1) Contiguous data structures and (2) ______.",
    options: [
      "Static data structures",
      "Linked data structures",
      "Linear data structures",
      "Dynamic data structures",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 17: '2 fundamental types... Contiguous data structures... Linked data structures'.",
  },
  {
    id: "CSC315_025",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The possible operations on an ADT include: (1) initialize, (2) add data, (3) access data, and (4) ______.",
    options: ["sort data", "remove data", "print data", "save data"],
    correctAnswer: 1,
    explanation:
      "From Page 40: 'The possible operations fall into these categories: initialize, add data, access data, remove data'.",
  },
  {
    id: "CSC315_026",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Basic operations supported by an array include: (1) Traverse, (2) Insertion, (3) Deletion, (4) Search, and (5) ______.",
    options: ["Merge", "Update", "Split", "Create"],
    correctAnswer: 1,
    explanation:
      "From Page 45: 'Following are the basic operations... Traverse, Insertion, Deletion, Search, Update'.",
  },
  {
    id: "CSC315_027",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The three commonly used asymptotic notations are: (1) O Notation, (2) Ω Notation, and (3) ______.",
    options: ["α Notation", "β Notation", "θ Notation", "σ Notation"],
    correctAnswer: 2,
    explanation:
      "From Page 91: 'Following are the commonly used asymptotic notations... O Notation, Ω Notation, θ Notation'.",
  },
  {
    id: "CSC315_028",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Divide and conquer involves three steps: (1) Divide/Break, (2) Conquer/Solve, and (3) ______.",
    options: ["Traverse", "Loop", "Merge/Combine", "Destroy"],
    correctAnswer: 2,
    explanation:
      "From Page 102-103: 'Broadly, we can understand divide-and-conquer approach in a three-step process... Divide, Conquer, Merge'.",
  },
  {
    id: "CSC315_029",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Examples of Divide and Conquer algorithms include: (1) Merge Sort, (2) Quick Sort, and (3) ______.",
    options: [
      "Bubble Sort",
      "Binary Search",
      "Linear Search",
      "Insertion Sort",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 103: 'The following computer algorithms are based on divide-and-conquer... Merge Sort, Quick Sort, Binary Search'.",
  },
  {
    id: "CSC315_030",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The two constructors for a Stack ADT are: (1) EmptyStack and (2) ______.",
    options: [
      "pop(element, stack)",
      "top(stack)",
      "push(element, stack)",
      "create(stack)",
    ],
    correctAnswer: 2,
    explanation:
      "From Page 79: 'The two constructors are: EmptyStack... and push(element, stack)'.",
  },

  // --- DEFINITION/EXPLANATION BLANKS ---
  {
    id: "CSC315_031",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The meaning of Data Structure (DS) is: ____________________________________________________",
    options: [
      "The hardware used to store data permanently.",
      "The systematic way of organizing data so as to be able to use them efficiently.",
      "The process of writing code to solve a problem.",
      "The interface that allows a user to interact with a database.",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 4: 'Def. of Data Structure (DS). The systematic way of organizing data so as to be able to use them efficiently is known as DS.'",
  },
  {
    id: "CSC315_032",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The definition of Correctness in DS characteristics is: ____________________________________________________",
    options: [
      "The memory usage of a data structure operation must be as little as possible.",
      "The execution time of the operations must be as small as possible.",
      "Data structure implementation should implement its interface correctly.",
      "The data structure should be able to expand dynamically.",
    ],
    correctAnswer: 2,
    explanation:
      "From Page 5: 'Correctness - Data structure implementation should implement its interface correctly.'",
  },
  {
    id: "CSC315_033",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The meaning of 'Atomic' in Data Definition is: ____________________________________________________",
    options: [
      "Definition should be unambiguous.",
      "Definition should define a single concept.",
      "Definition should be able to be mapped to some data element.",
      "Definition should be understandable.",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 10: 'Atomic - Definition should define a single concept.'",
  },
  {
    id: "CSC315_034",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The definition of an Abstract Data Type (ADT) is: ____________________________________________________",
    options: [
      "A data structure that is defined indirectly by the operations that may be performed on it.",
      "A data structure that is directly operated upon by machine instructions.",
      "A variable that holds the memory address of another variable.",
      "A collection of field values of a given entity.",
    ],
    correctAnswer: 0,
    explanation:
      "From Page 35: 'The ADT is a data structure that is defined indirectly by the operations that may be performed on it.'",
  },
  {
    id: "CSC315_035",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The meaning of 'Encapsulation' in the context of ADT is: ____________________________________________________",
    options: [
      "The user must know the internal implementation details to use the ADT.",
      "Different implementations of an ADT are possible.",
      "The user does not need any technical knowledge of how the implementation works to use the ADT.",
      "The data structure implementation should implement its interface correctly.",
    ],
    correctAnswer: 2,
    explanation:
      "From Page 39: 'Encapsulation: The user does not need any technical knowledge of how the implementation works to use the ADT.'",
  },
  {
    id: "CSC315_036",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The definition of Traversal is: ____________________________________________________",
    options: [
      "A process of combining the data items of two different sorted lists.",
      "A process of visiting each and every node of a list in a systematic manner.",
      "A process of partitioning a single list to multiple lists.",
      "A process of arranging all data items in a particular order.",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 43: 'Traversal is a process of visiting each and every node of a list in systematic manner.'",
  },
  {
    id: "CSC315_037",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The meaning of A Priori Analysis is: ____________________________________________________",
    options: [
      "An empirical analysis where the algorithm is implemented and executed.",
      "A process of breaking the problem into smaller sub-problems.",
      "A theoretical analysis where efficiency is measured assuming factors like processor speed are constant.",
      "A method to find a localized optimum solution.",
    ],
    correctAnswer: 2,
    explanation:
      "From Page 88: 'A Priori Analysis - This is a theoretical analysis of an algorithm. Efficiency... is measured by assuming that all other factors... are constant.'",
  },
  {
    id: "CSC315_038",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The definition of O Notation (Big Oh) is: ____________________________________________________",
    options: [
      "The formal way to express the lower bound of an algorithm's running time.",
      "The formal way to express the upper bound of an algorithm's running time.",
      "The formal way to express both the lower and upper bound of an algorithm's running time.",
      "The formal way to express the average case of an algorithm.",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 91: 'The notation O(n) is the formal way to express the upper bound of an algorithm's running time.'",
  },
  {
    id: "CSC315_039",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The meaning of 'Stable' in sorting algorithms is: ____________________________________________________",
    options: [
      "The algorithm always takes O(n log n) time.",
      "The algorithm can sort linked lists as well as arrays.",
      "Items with identical keys are kept in their original order.",
      "The algorithm uses a divide and conquer strategy.",
    ],
    correctAnswer: 2,
    explanation:
      "From Page 112: 'Sorting algorithms which satisfy this useful property (keeping items with identical keys in their original order) are said to be stable.'",
  },
  {
    id: "CSC315_040",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The definition of Dynamic Programming is: ____________________________________________________",
    options: [
      "An approach where decisions are made from the given solution domain to find a localized optimum.",
      "An approach where the problem is divided into smaller independent sub-problems.",
      "An approach where sub-problems are solved independently and then merged.",
      "An approach where results of smaller sub-problems are remembered and used for similar or overlapping sub-problems.",
    ],
    correctAnswer: 3,
    explanation:
      "From Page 123: 'Dynamic programming... results of these smaller sub-problems are remembered and used for similar or overlapping sub-problems.'",
  },

  // --- MIXED FORMATS (ADDITIONAL) ---
  {
    id: "CSC315_041",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "A ______ is a single elementary unit of information representing an attribute of an entity.",
    options: ["Record", "Field", "File", "Group Item"],
    correctAnswer: 1,
    explanation:
      "From Basic Terminology: 'Field is a single elementary unit of information...'",
  },
  {
    id: "CSC315_042",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Static data structures are those whose sizes and structures associated memory locations are fixed at ______.",
    options: ["Runtime", "Compile time", "Creation time", "Execution time"],
    correctAnswer: 1,
    explanation:
      "From Table 1: 'Static data structures... are fixed, at compile time.'",
  },
  {
    id: "CSC315_043",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The study of Data Structures covers: (1) memory required, (2) time required, (3) representation in memory, and (4) ______.",
    options: [
      "hardware requirements",
      "operations to be performed",
      "network bandwidth",
      "user interface design",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 26: 'It covers four points... (iv) the operations to be performed on data.'",
  },
  {
    id: "CSC315_044",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The ADT corresponds to a ______ (or Java interface) for those who write code in Java.",
    options: ["function", "variable", "class", "package"],
    correctAnswer: 2,
    explanation:
      "From Page 37: 'For those who write/code in Java ADT corresponds to a class (or Java interface)'.",
  },
  {
    id: "CSC315_045",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "In a Singly Linked List, item navigation is ______ only.",
    options: ["Backward", "Forward", "Bidirectional", "Random"],
    correctAnswer: 1,
    explanation:
      "From Page 62: 'Simple Linked List: Item navigation is forward only.'",
  },
  {
    id: "CSC315_046",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "In a Doubly Linked List, each link contains a connection to the first link called ______ and to the last link called ______.",
    options: ["Start, End", "Head, Tail", "First, Last", "Top, Bottom"],
    correctAnswer: 2,
    explanation:
      "From Page 75: 'A Linked List contains the connection link to the first link called First and to the last link called Last.'",
  },
  {
    id: "CSC315_047",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The operation `isEmpty(stack)` returns whether a stack is ______.",
    options: ["Full", "Empty", "Null", "Valid"],
    correctAnswer: 1,
    explanation:
      "From Page 79: 'isEmpty(stack) - condition which tells whether a stack is empty'.",
  },
  {
    id: "CSC315_048",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Characteristics of an Algorithm include: (1) Unambiguous, (2) Input, (3) Output, (4) Finiteness, (5) Feasibility, and (6) ______.",
    options: ["Dependent", "Complex", "Independent", "Recursive"],
    correctAnswer: 2,
    explanation:
      "From Page 83: 'Independent - An algorithm should have step-by-step directions, which should be independent of any programming code.'",
  },
  {
    id: "CSC315_049",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The meaning of Time Complexity is: ____________________________________________________",
    options: [
      "The amount of memory space required by the algorithm in its life cycle.",
      "The amount of time required by the algorithm to run to completion.",
      "The number of variables used in the algorithm.",
      "The length of the code written for the algorithm.",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 89: 'Time complexity of an algorithm represents the amount of time required by the algorithm to run to completion.'",
  },
  {
    id: "CSC315_050",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "If f(n) = n^2, then if the size of the problem doubles (2n), the time will be ______.",
    options: [
      "twice as big",
      "four times as big",
      "eight times as big",
      "the same",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 96: 'n^2 ... four times as big as before, f(2n) = 4f(n)'.",
  },
  {
    id: "CSC315_051",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Counting coins is an example of a ______ algorithm.",
    options: ["Divide and Conquer", "Greedy", "Dynamic", "Sorting"],
    correctAnswer: 1,
    explanation:
      "From Page 100: 'Counting Coins... the greedy approach forces the algorithm to pick the largest possible coin.'",
  },
  {
    id: "CSC315_052",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "In Divide and Conquer, the ______ step involves breaking the problem into smaller sub-problems.",
    options: ["Conquer", "Merge", "Divide", "Combine"],
    correctAnswer: 2,
    explanation:
      "From Page 102: 'Divide/Break: This step involves breaking the problem into smaller sub-problems.'",
  },
  {
    id: "CSC315_053",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Bubble Sort follows the ______ sort approach.",
    options: ["Insertion", "Selection", "Exchange", "Divide and Conquer"],
    correctAnswer: 2,
    explanation:
      "From Page 106: 'Bubble Sort follows the exchange sort approach.'",
  },
  {
    id: "CSC315_054",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Insertion Sort starts by treating the first entry a[0] as an ______.",
    options: [
      "Unsorted array",
      "Empty array",
      "Already sorted array",
      "Invalid entry",
    ],
    correctAnswer: 2,
    explanation:
      "From Page 107: 'Insertion Sort starts by treating the first entry a[0] as an already sorted array'.",
  },
  {
    id: "CSC315_055",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Selection Sort finds the ______ item and puts it into the first position.",
    options: ["Largest", "Median", "Smallest", "Last"],
    correctAnswer: 2,
    explanation:
      "From Page 109: 'Selection Sort is... It first finds the smallest item and puts it into a[0]'.",
  },
  {
    id: "CSC315_056",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Treesort has an overall average time complexity of ______.",
    options: ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
    correctAnswer: 2,
    explanation:
      "From Page 113: 'Treesort has an overall average time complexity of O(n log n).'",
  },
  {
    id: "CSC315_057",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The sorting algorithm that uses a pivot to split the array is ______.",
    options: ["Merge Sort", "Heap Sort", "Quick Sort", "Bubble Sort"],
    correctAnswer: 2,
    explanation:
      "From Page 115: 'The value that defines the split is called the pivot... is the standard Quicksort strategy.'",
  },
  {
    id: "CSC315_058",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Merge Sort splits the array at each stage into its first and last ______.",
    options: ["Quarter", "Third", "Half", "Element"],
    correctAnswer: 2,
    explanation:
      "From Page 119: 'mergesort... simply splits the array at each stage into its first and last half'.",
  },
  {
    id: "CSC315_059",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Dynamic algorithms use ______ to remember the output of already solved sub-problems.",
    options: ["Recursion", "Memorization", "Iteration", "Randomization"],
    correctAnswer: 1,
    explanation:
      "From Page 123: 'Dynamic algorithms use memorization to remember the output of already solved sub-problems.'",
  },
  {
    id: "CSC315_060",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The definition of Binary Search is: ____________________________________________________",
    options: [
      "A search that checks every element in the list sequentially.",
      "A search that requires a sorted array and repeatedly splits the array into two segments.",
      "A search that uses a hash table to find elements.",
      "A search that starts from the middle and moves outwards.",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 127: 'This algorithm works by repeatedly splitting the array into two segments... Because the array is sorted...'",
  },
  {
    id: "CSC315_061",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "If an operation's worst case time is f(n), then this operation will not take more than ______ time.",
    options: ["n", "f(n)", "n^2", "log n"],
    correctAnswer: 1,
    explanation:
      "From Page 8: 'If an operation's worst case time is f(n) then this operation will not take more than f(n) time'.",
  },
  {
    id: "CSC315_062",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "A ______ is that which contains certain attributes or properties, which may be assigned values.",
    options: ["Field", "Record", "Entity", "File"],
    correctAnswer: 2,
    explanation:
      "From Page 9: 'An entity is that which contains certain attributes or properties'.",
  },
  {
    id: "CSC315_063",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Primitive data structures include: (1) Integers, (2) Floats, (3) Character, and (4) ______.",
    options: ["Arrays", "Lists", "Pointers", "Files"],
    correctAnswer: 2,
    explanation:
      "From Page 30: 'Integers, floats, character and pointers are examples of primitive data structures.'",
  },
  {
    id: "CSC315_064",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "______ operation updates or modifies the data in the data structure.",
    options: ["Selection", "Updating", "Searching", "Merging"],
    correctAnswer: 1,
    explanation:
      "From Page 43: 'Updating - It updates or modifies the data in the data structure.'",
  },
  {
    id: "CSC315_065",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "In C, an array length of 10 means index ranges from 0 to ______.",
    options: ["10", "9", "1", "11"],
    correctAnswer: 1,
    explanation:
      "From Page 44: 'Index starts with 0... Size: 10' implies indices 0-9.",
  },
  {
    id: "CSC315_066",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "A ______ Linked List is where the last item contains the link of the first element as next.",
    options: ["Doubly", "Simple", "Circular", "Linear"],
    correctAnswer: 2,
    explanation:
      "From Page 62: 'Circular Linked List... Last item contains link of the first element as next'.",
  },
  {
    id: "CSC315_067",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The ______ operation results in reserving memory for program elements.",
    options: ["Destroy", "Update", "Create", "Search"],
    correctAnswer: 2,
    explanation:
      "From Page 42: 'The create operation results in reserving memory for program elements.'",
  },
  {
    id: "CSC315_068",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "An algorithm must terminate after a finite number of steps. This characteristic is called ______.",
    options: ["Feasibility", "Finiteness", "Input", "Unambiguous"],
    correctAnswer: 1,
    explanation:
      "From Page 83: 'Finiteness - Algorithms must terminate after a finite number of steps.'",
  },
  {
    id: "CSC315_069",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The notation Ω(n) measures the ______ case time complexity.",
    options: ["Worst", "Average", "Best", "Random"],
    correctAnswer: 2,
    explanation:
      "From Page 91: 'The notation Ω(n)... measures the best case time complexity'.",
  },
  {
    id: "CSC315_070",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Tower of Hanoi is an example of a problem solvable by ______.",
    options: [
      "Greedy Algorithm",
      "Dynamic Programming",
      "Linear Search",
      "Bubble Sort",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 123: 'The following... can be solved using dynamic programming... Tower of Hanoi'.",
  },
  {
    id: "CSC315_071",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "In Merge Sort, the merge step creates a new ______ to store the results.",
    options: ["Tree", "Stack", "Array", "File"],
    correctAnswer: 2,
    explanation:
      "From Page 120: 'For arrays, a suitable merge algorithm would start by creating a new array b to store the results'.",
  },
  {
    id: "CSC315_072",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The ______ case for Quicksort occurs when the pivot splits the array into an empty sub-array and the whole array.",
    options: ["Best", "Average", "Worst", "Ideal"],
    correctAnswer: 2,
    explanation:
      "From Page 115: 'One situation that we absolutely have to avoid... (bad split)... algorithm will not even terminate'.",
  },
  {
    id: "CSC315_073",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "Heapsort has a worst case complexity of ______.",
    options: ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
    correctAnswer: 2,
    explanation:
      "From Page 114: 'Thus the overall average and worst-case complexities are both O(n log n).'",
  },
  {
    id: "CSC315_074",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The two main approaches for Divide and Conquer sorting are (1) Splitting items by value (Quicksort) and (2) ______.",
    options: [
      "Splitting by index/position (Mergesort)",
      "Splitting by type",
      "Splitting by frequency",
      "Splitting randomly",
    ],
    correctAnswer: 0,
    explanation:
      "From Page 114: 'Assuming we are working on an array... split the set of indices... is the underlying idea for a sorting algorithm called mergesort.'",
  },
  {
    id: "CSC315_075",
    course: "CSC 315",
    chapter: "Lecturer 1",
    text: "The definition of Greedy Algorithm is: ____________________________________________________",
    options: [
      "An algorithm that looks ahead to find the global optimum.",
      "An algorithm that makes decisions from the given solution domain by choosing the closest solution that seems to provide an optimum.",
      "An algorithm that divides the problem into equal halves.",
      "An algorithm that tries every possible combination.",
    ],
    correctAnswer: 1,
    explanation:
      "From Page 100: 'In greedy algorithm approach... As being greedy, the closest solution that seems to provide an optimum solution is chosen.'",
  },
];

export default CSC315Lecturer1;
