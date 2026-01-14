export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctOptionId: string;
  explanation?: string;
  chapter?: string;
}

// ============================================================
// CPE301 CHAPTER 1 - ASSEMBLY LANGUAGE FUNDAMENTALS (260 QUESTIONS)
// ============================================================
export const cpe301Chapter1: Question[] = [
  // SECTION 1: INTRODUCTION TO ASSEMBLY LANGUAGE (1-25)
  {
    id: "cpe301-1",
    chapter: "Chapter 1",
    text: "Assembly language is considered to be:",
    options: [
      { id: "a", text: "A high-level language" },
      { id: "b", text: "A machine-independent language" },
      { id: "c", text: "The oldest programming language" },
      { id: "d", text: "A portable language" },
    ],
    correctOptionId: "c",
    explanation:
      "Assembly language is considered the oldest programming language because it was one of the first ways programmers could write instructions for computers using human-readable mnemonics instead of raw binary.",
  },
  {
    id: "cpe301-2",
    chapter: "Chapter 1",
    text: "What is the relationship between assembly language and machine language?",
    options: [
      { id: "a", text: "Many-to-one" },
      { id: "b", text: "One-to-many" },
      { id: "c", text: "One-to-one" },
      { id: "d", text: "Many-to-many" },
    ],
    correctOptionId: "c",
    explanation:
      "Assembly language has a one-to-one relationship with machine language, meaning each assembly instruction corresponds to exactly one machine instruction.",
  },
  {
    id: "cpe301-3",
    chapter: "Chapter 1",
    text: "Which of the following is NOT a well-known x86 assembler?",
    options: [
      { id: "a", text: "MASM" },
      { id: "b", text: "TASM" },
      { id: "c", text: "NASM" },
      { id: "d", text: "JAVA" },
    ],
    correctOptionId: "d",
    explanation:
      "JAVA is not an assembler—it's a high-level programming language. MASM, TASM, and NASM are all well-known x86 assemblers.",
  },
  {
    id: "cpe301-4",
    chapter: "Chapter 1",
    text: "What does MASM stand for?",
    options: [
      { id: "a", text: "Microsoft Assembly Module" },
      { id: "b", text: "Microsoft Macro Assembler" },
      { id: "c", text: "Machine Assembly System Manager" },
      { id: "d", text: "Micro Architecture System Module" },
    ],
    correctOptionId: "b",
    explanation:
      "MASM stands for Microsoft Macro Assembler. It's Microsoft's x86 assembler that supports macro instructions.",
  },
  {
    id: "cpe301-5",
    chapter: "Chapter 1",
    text: "A utility program that converts source code programs from assembly language into machine language is called:",
    options: [
      { id: "a", text: "Compiler" },
      { id: "b", text: "Interpreter" },
      { id: "c", text: "Assembler" },
      { id: "d", text: "Debugger" },
    ],
    correctOptionId: "c",
    explanation:
      "An assembler converts assembly language source code into machine language (object code). A compiler converts high-level language to machine code.",
  },
  {
    id: "cpe301-6",
    chapter: "Chapter 1",
    text: "A utility program that combines individual files created by an assembler into a single executable program is called:",
    options: [
      { id: "a", text: "Compiler" },
      { id: "b", text: "Linker" },
      { id: "c", text: "Loader" },
      { id: "d", text: "Debugger" },
    ],
    correctOptionId: "b",
    explanation:
      "A linker combines multiple object files into a single executable program, resolving references between files and linking required library code.",
  },
  {
    id: "cpe301-7",
    chapter: "Chapter 1",
    text: "Which utility lets you step through a program while it's running and examine registers and memory?",
    options: [
      { id: "a", text: "Assembler" },
      { id: "b", text: "Linker" },
      { id: "c", text: "Debugger" },
      { id: "d", text: "Compiler" },
    ],
    correctOptionId: "c",
    explanation:
      "A debugger allows programmers to execute a program step by step, set breakpoints, and examine registers and memory to find and fix bugs.",
  },
  {
    id: "cpe301-8",
    chapter: "Chapter 1",
    text: "What type of relationship exists between high-level languages like C++ and machine language?",
    options: [
      { id: "a", text: "One-to-one" },
      { id: "b", text: "One-to-many" },
      { id: "c", text: "Many-to-one" },
      { id: "d", text: "No relationship" },
    ],
    correctOptionId: "b",
    explanation:
      "High-level languages have a one-to-many relationship with machine language. A single high-level statement typically expands into multiple machine instructions.",
  },
  {
    id: "cpe301-9",
    chapter: "Chapter 1",
    text: "Which of the following is TRUE about assembly language portability?",
    options: [
      { id: "a", text: "Assembly language is highly portable" },
      {
        id: "b",
        text: "Assembly language is designed for a specific processor family",
      },
      { id: "c", text: "Assembly language programs can run on any computer" },
      { id: "d", text: "Assembly language is as portable as Java" },
    ],
    correctOptionId: "b",
    explanation:
      "Assembly language is NOT portable—it's designed for a specific processor family (like x86 or ARM). Code written for one architecture won't run on another.",
  },
  {
    id: "cpe301-10",
    chapter: "Chapter 1",
    text: "Registers are:",
    options: [
      { id: "a", text: "External storage devices" },
      { id: "b", text: "Named storage locations in the CPU" },
      { id: "c", text: "Types of memory chips" },
      { id: "d", text: "Input/output devices" },
    ],
    correctOptionId: "b",
    explanation:
      "Registers are small, fast storage locations built directly into the CPU. They hold data being actively processed and are much faster than RAM.",
  },
  {
    id: "cpe301-11",
    chapter: "Chapter 1",
    text: "Programs written for small amounts of memory in single-purpose devices are called:",
    options: [
      { id: "a", text: "System programs" },
      { id: "b", text: "Embedded programs" },
      { id: "c", text: "Real-time programs" },
      { id: "d", text: "Kernel programs" },
    ],
    correctOptionId: "b",
    explanation:
      "Embedded programs are written for embedded systems—dedicated computers within devices with limited memory that perform specific functions.",
  },
  {
    id: "cpe301-12",
    chapter: "Chapter 1",
    text: "Which of the following is an example of an embedded system?",
    options: [
      { id: "a", text: "Personal computer" },
      { id: "b", text: "Mainframe computer" },
      { id: "c", text: "Automobile fuel and ignition systems" },
      { id: "d", text: "Web server" },
    ],
    correctOptionId: "c",
    explanation:
      "Automobile fuel and ignition systems are examples of embedded systems containing dedicated microcontrollers running specialized software.",
  },
  {
    id: "cpe301-13",
    chapter: "Chapter 1",
    text: "Device drivers:",
    options: [
      { id: "a", text: "Are written in high-level languages only" },
      { id: "b", text: "Translate OS commands into hardware references" },
      { id: "c", text: "Manage user applications" },
      { id: "d", text: "Control the operating system" },
    ],
    correctOptionId: "b",
    explanation:
      "Device drivers translate OS commands into hardware-specific instructions, allowing the OS to communicate with various hardware devices.",
  },
  {
    id: "cpe301-14",
    chapter: "Chapter 1",
    text: "32-Bit Protected Mode programs run under:",
    options: [
      { id: "a", text: "All 32-bit versions of Windows" },
      { id: "b", text: "Windows only" },
      { id: "c", text: "MS-DOS only" },
      { id: "d", text: "Real-address mode only" },
    ],
    correctOptionId: "a",
    explanation:
      "32-bit Protected Mode programs run under all 32-bit versions of Windows and also on 64-bit Windows through compatibility layers.",
  },
  {
    id: "cpe301-15",
    chapter: "Chapter 1",
    text: "Which mode is NOT supported by 64-bit Windows?",
    options: [
      { id: "a", text: "32-Bit Protected Mode" },
      { id: "b", text: "64-Bit Long Mode" },
      { id: "c", text: "16-Bit Real-Address Mode" },
      { id: "d", text: "Virtual-8086 Mode" },
    ],
    correctOptionId: "c",
    explanation:
      "64-bit Windows does NOT support 16-bit Real-Address Mode. It supports 32-bit protected mode for backward compatibility and 64-bit long mode.",
  },
  {
    id: "cpe301-16",
    chapter: "Chapter 1",
    text: "NASM is a Linux assembler with syntax similar to:",
    options: [
      { id: "a", text: "TASM" },
      { id: "b", text: "GAS" },
      { id: "c", text: "MASM" },
      { id: "d", text: "JAVA" },
    ],
    correctOptionId: "c",
    explanation:
      "NASM uses Intel syntax similar to MASM, unlike GAS which uses AT&T syntax with different operand ordering.",
  },
  {
    id: "cpe301-17",
    chapter: "Chapter 1",
    text: "Which language provides the most direct access to hardware?",
    options: [
      { id: "a", text: "Java" },
      { id: "b", text: "Python" },
      { id: "c", text: "Assembly language" },
      { id: "d", text: "C++" },
    ],
    correctOptionId: "c",
    explanation:
      "Assembly language provides the most direct hardware access, allowing programmers to manipulate registers, memory addresses, and hardware ports directly.",
  },
  {
    id: "cpe301-18",
    chapter: "Chapter 1",
    text: "A valid reason to learn assembly language is:",
    options: [
      { id: "a", text: "It improves understanding of CPU architecture" },
      { id: "b", text: "It enables writing efficient device drivers" },
      { id: "c", text: "It provides embedded systems programming capability" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    explanation:
      "All options are valid reasons: understanding CPU architecture, writing device drivers, and embedded systems programming all benefit from assembly knowledge.",
  },
  {
    id: "cpe301-19",
    chapter: "Chapter 1",
    text: "TASM stands for:",
    options: [
      { id: "a", text: "Turbo Assembler" },
      { id: "b", text: "Terminal Assembly System" },
      { id: "c", text: "Translate Assembly Module" },
      { id: "d", text: "Text Assembly Manager" },
    ],
    correctOptionId: "a",
    explanation:
      "TASM stands for Turbo Assembler, developed by Borland, supporting both MASM-compatible and its own 'Ideal' syntax mode.",
  },
  {
    id: "cpe301-20",
    chapter: "Chapter 1",
    text: "Assembly language has:",
    options: [
      { id: "a", text: "More rules than high-level languages" },
      { id: "b", text: "Fewer rules than high-level languages" },
      { id: "c", text: "The same rules as high-level languages" },
      { id: "d", text: "No rules" },
    ],
    correctOptionId: "b",
    explanation:
      "Assembly language has fewer syntactic rules than high-level languages, lacking complex structures like classes or type checking.",
  },
  {
    id: "cpe301-21",
    chapter: "Chapter 1",
    text: "A single C++ statement typically expands into:",
    options: [
      { id: "a", text: "A single assembly instruction" },
      { id: "b", text: "Multiple assembly instructions" },
      { id: "c", text: "No assembly instructions" },
      { id: "d", text: "Depends on optimization level" },
    ],
    correctOptionId: "b",
    explanation:
      "A single C++ statement typically expands into multiple assembly instructions. Even a simple assignment may require load, compute, and store instructions.",
  },
  {
    id: "cpe301-22",
    chapter: "Chapter 1",
    text: "Which type of software is NOT typically written in assembly?",
    options: [
      { id: "a", text: "Device drivers" },
      { id: "b", text: "Operating systems" },
      { id: "c", text: "Large commercial applications" },
      { id: "d", text: "Embedded systems" },
    ],
    correctOptionId: "c",
    explanation:
      "Large commercial applications are NOT typically written in assembly because it's too time-consuming to write and maintain.",
  },
  {
    id: "cpe301-23",
    chapter: "Chapter 1",
    text: "GAS stands for:",
    options: [
      { id: "a", text: "Global Assembly System" },
      { id: "b", text: "GNU Assembler" },
      { id: "c", text: "General Assembly Service" },
      { id: "d", text: "Graphics Assembly System" },
    ],
    correctOptionId: "b",
    explanation:
      "GAS stands for GNU Assembler, the default assembler in the GNU toolchain used on Linux and Unix-like systems.",
  },
  {
    id: "cpe301-24",
    chapter: "Chapter 1",
    text: "JNI in Java stands for:",
    options: [
      { id: "a", text: "Java Native Interface" },
      { id: "b", text: "Java Network Interface" },
      { id: "c", text: "Java Numeric Instruction" },
      { id: "d", text: "Java Number Interpreter" },
    ],
    correctOptionId: "a",
    explanation:
      "JNI stands for Java Native Interface, allowing Java code to call native applications written in C, C++, or assembly.",
  },
  {
    id: "cpe301-25",
    chapter: "Chapter 1",
    text: "Why is assembly language not used for large application programs?",
    options: [
      { id: "a", text: "It's not capable of complex operations" },
      { id: "b", text: "It takes too much time to write and maintain" },
      { id: "c", text: "It produces inefficient code" },
      { id: "d", text: "It cannot access hardware" },
    ],
    correctOptionId: "b",
    explanation:
      "Assembly takes too much time to write and maintain. Each operation requires explicit instructions, making development slow and code hard to modify.",
  },

  // SECTION 2: VIRTUAL MACHINE CONCEPT (26-45)
  {
    id: "cpe301-26",
    chapter: "Chapter 1",
    text: "The virtual machine concept was explained by:",
    options: [
      { id: "a", text: "Donald Knuth" },
      { id: "b", text: "Andrew Tanenbaum" },
      { id: "c", text: "Alan Turing" },
      { id: "d", text: "Linus Torvalds" },
    ],
    correctOptionId: "b",
    explanation:
      "Andrew Tanenbaum explained the virtual machine concept, describing computers as a hierarchy of virtual machines in his textbook on structured computer organization.",
  },
  {
    id: "cpe301-27",
    chapter: "Chapter 1",
    text: "In the virtual machine concept, L0 represents:",
    options: [
      { id: "a", text: "Assembly language" },
      { id: "b", text: "High-level language" },
      { id: "c", text: "Native machine language" },
      { id: "d", text: "Intermediate code" },
    ],
    correctOptionId: "c",
    explanation:
      "L0 (Level 0) represents native machine language—the actual binary instructions that the physical hardware can execute directly.",
  },
  {
    id: "cpe301-28",
    chapter: "Chapter 1",
    text: "A method that decodes and executes each instruction as it runs is called:",
    options: [
      { id: "a", text: "Compilation" },
      { id: "b", text: "Translation" },
      { id: "c", text: "Interpretation" },
      { id: "d", text: "Assembly" },
    ],
    correctOptionId: "c",
    explanation:
      "Interpretation decodes and executes each instruction one at a time as the program runs, unlike compilation which converts the entire program first.",
  },
  {
    id: "cpe301-29",
    chapter: "Chapter 1",
    text: "A method that converts an entire program before execution is called:",
    options: [
      { id: "a", text: "Interpretation" },
      { id: "b", text: "Translation" },
      { id: "c", text: "Execution" },
      { id: "d", text: "Runtime processing" },
    ],
    correctOptionId: "b",
    explanation:
      "Translation (compilation) converts an entire program before execution. The translated program can then run independently.",
  },
  {
    id: "cpe301-30",
    chapter: "Chapter 1",
    text: "A virtual machine is:",
    options: [
      { id: "a", text: "A physical computer" },
      { id: "b", text: "Software that emulates another computer's functions" },
      { id: "c", text: "A network of computers" },
      { id: "d", text: "A type of processor" },
    ],
    correctOptionId: "b",
    explanation:
      "A virtual machine is software that emulates another computer's functions, creating an abstraction layer for program execution.",
  },
  {
    id: "cpe301-31",
    chapter: "Chapter 1",
    text: "Level 1 in the virtual machine model represents:",
    options: [
      { id: "a", text: "Machine language" },
      { id: "b", text: "Assembly language" },
      { id: "c", text: "Digital logic hardware" },
      { id: "d", text: "High-level language" },
    ],
    correctOptionId: "c",
    explanation:
      "Level 1 represents digital logic hardware—the actual electronic circuits (logic gates, registers, buses) that implement the CPU.",
  },
  {
    id: "cpe301-32",
    chapter: "Chapter 1",
    text: "Instruction Set Architecture (ISA) is at:",
    options: [
      { id: "a", text: "Level 1" },
      { id: "b", text: "Level 2" },
      { id: "c", text: "Level 3" },
      { id: "d", text: "Level 4" },
    ],
    correctOptionId: "b",
    explanation:
      "The ISA is at Level 2, defining the machine instructions, registers, and addressing modes—the interface between hardware and software.",
  },
  {
    id: "cpe301-33",
    chapter: "Chapter 1",
    text: "Assembly language is at:",
    options: [
      { id: "a", text: "Level 1" },
      { id: "b", text: "Level 2" },
      { id: "c", text: "Level 3" },
      { id: "d", text: "Level 4" },
    ],
    correctOptionId: "c",
    explanation:
      "Assembly language is at Level 3, providing human-readable mnemonics that are translated (assembled) to Level 2 machine language.",
  },
  {
    id: "cpe301-34",
    chapter: "Chapter 1",
    text: "High-level languages are at:",
    options: [
      { id: "a", text: "Level 2" },
      { id: "b", text: "Level 3" },
      { id: "c", text: "Level 4" },
      { id: "d", text: "Level 5" },
    ],
    correctOptionId: "c",
    explanation:
      "High-level languages are at Level 4, providing abstractions like variables and functions that are translated to lower levels.",
  },
  {
    id: "cpe301-35",
    chapter: "Chapter 1",
    text: "Compared to interpreted programs, translated programs:",
    options: [
      { id: "a", text: "Execute more slowly" },
      { id: "b", text: "Execute more quickly" },
      { id: "c", text: "Have the same execution speed" },
      { id: "d", text: "Require the interpreter at runtime" },
    ],
    correctOptionId: "b",
    explanation:
      "Translated programs execute more quickly because translation is done once before execution, avoiding runtime decoding overhead.",
  },
  {
    id: "cpe301-36",
    chapter: "Chapter 1",
    text: "Java bytecode is executed by:",
    options: [
      { id: "a", text: "The CPU directly" },
      { id: "b", text: "The Java Virtual Machine (JVM)" },
      { id: "c", text: "The operating system" },
      { id: "d", text: "A compiler" },
    ],
    correctOptionId: "b",
    explanation:
      "Java bytecode is executed by the JVM, which interprets or JIT-compiles it, allowing Java to run on any platform with a JVM.",
  },
  {
    id: "cpe301-37",
    chapter: "Chapter 1",
    text: "A microprogram is:",
    options: [
      { id: "a", text: "A small assembly program" },
      { id: "b", text: "Program embedded in the microprocessor chip" },
      { id: "c", text: "A user-written program" },
      { id: "d", text: "A system utility" },
    ],
    correctOptionId: "b",
    explanation:
      "A microprogram is firmware embedded in the CPU that implements machine instructions using microinstructions to control internal operations.",
  },
  {
    id: "cpe301-38",
    chapter: "Chapter 1",
    text: "Machine language consists of:",
    options: [
      { id: "a", text: "Text instructions" },
      { id: "b", text: "Alphabetic characters" },
      { id: "c", text: "Binary values" },
      { id: "d", text: "Hexadecimal codes" },
    ],
    correctOptionId: "c",
    explanation:
      "Machine language consists of binary values (0s and 1s)—the actual bit patterns that the CPU reads and executes directly.",
  },
  {
    id: "cpe301-39",
    chapter: "Chapter 1",
    text: "Which uses short mnemonics like ADD, SUB, MOV?",
    options: [
      { id: "a", text: "Machine language" },
      { id: "b", text: "High-level language" },
      { id: "c", text: "Assembly language" },
      { id: "d", text: "Bytecode" },
    ],
    correctOptionId: "c",
    explanation:
      "Assembly language uses short mnemonics like ADD, SUB, MOV—human-readable abbreviations representing machine instructions.",
  },
  {
    id: "cpe301-40",
    chapter: "Chapter 1",
    text: "The first level at which users write programs is:",
    options: [
      { id: "a", text: "Level 1" },
      { id: "b", text: "Level 2" },
      { id: "c", text: "Level 3" },
      { id: "d", text: "Level 4" },
    ],
    correctOptionId: "c",
    explanation:
      "Level 3 (Assembly language) is the first level where users typically write programs. Most programmers work at Level 4 (high-level languages).",
  },
  {
    id: "cpe301-41",
    chapter: "Chapter 1",
    text: "Assembly programs are:",
    options: [
      { id: "a", text: "Interpreted as they run" },
      { id: "b", text: "Translated (assembled) entirely before execution" },
      { id: "c", text: "Executed by the CPU directly" },
      { id: "d", text: "Compiled to bytecode" },
    ],
    correctOptionId: "b",
    explanation:
      "Assembly programs are translated entirely before execution. The assembler converts source to machine code, which is then linked into an executable.",
  },
  {
    id: "cpe301-42",
    chapter: "Chapter 1",
    text: "The Java Virtual Machine is implemented on:",
    options: [
      { id: "a", text: "Only one type of computer" },
      { id: "b", text: "Only Intel processors" },
      { id: "c", text: "Many different computer systems" },
      { id: "d", text: "Supercomputers only" },
    ],
    correctOptionId: "c",
    explanation:
      "The JVM is implemented on many different systems, enabling Java's 'write once, run anywhere' capability.",
  },
  {
    id: "cpe301-43",
    chapter: "Chapter 1",
    text: "A machine instruction is executed by:",
    options: [
      { id: "a", text: "Only hardware directly" },
      { id: "b", text: "Only by microprogram" },
      { id: "c", text: "Either hardware directly or by microprogram" },
      { id: "d", text: "Only by the assembler" },
    ],
    correctOptionId: "c",
    explanation:
      "Machine instructions can be executed either by hardware directly (hardwired) or by microprogram. Simple instructions may be hardwired for speed.",
  },
  {
    id: "cpe301-44",
    chapter: "Chapter 1",
    text: "Layered virtual machines explain:",
    options: [
      { id: "a", text: "How networks work" },
      {
        id: "b",
        text: "The relationship between software and hardware layers",
      },
      { id: "c", text: "How databases store data" },
      { id: "d", text: "User interface design" },
    ],
    correctOptionId: "b",
    explanation:
      "Layered virtual machines explain the relationship between software and hardware layers, from physical circuits up to high-level languages.",
  },
  {
    id: "cpe301-45",
    chapter: "Chapter 1",
    text: "Programs written at any layer in the virtual machine are:",
    options: [
      { id: "a", text: "Directly executed by hardware" },
      { id: "b", text: "Translated or interpreted by the next-lowest layer" },
      { id: "c", text: "Never executed" },
      { id: "d", text: "Stored in ROM" },
    ],
    correctOptionId: "b",
    explanation:
      "Programs at any layer are translated or interpreted by the next-lowest layer, continuing down until reaching hardware execution.",
  },

  // SECTION 3: BINARY INTEGERS (46-80)
  {
    id: "cpe301-46",
    chapter: "Chapter 1",
    text: "A binary digit is called:",
    options: [
      { id: "a", text: "Digit" },
      { id: "b", text: "Bit" },
      { id: "c", text: "Byte" },
      { id: "d", text: "Word" },
    ],
    correctOptionId: "b",
    explanation:
      "A binary digit is called a 'bit' (binary digit). It's the smallest unit of data, having only two values: 0 or 1.",
  },
  {
    id: "cpe301-47",
    chapter: "Chapter 1",
    text: "Binary numbers are base:",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "10" },
      { id: "c", text: "2" },
      { id: "d", text: "16" },
    ],
    correctOptionId: "c",
    explanation:
      "Binary numbers are base 2, using only two digits: 0 and 1. Each position represents a power of 2.",
  },
  {
    id: "cpe301-48",
    chapter: "Chapter 1",
    text: "A binary digit can be:",
    options: [
      { id: "a", text: "Any digit from 0 to 9" },
      { id: "b", text: "0 or 1" },
      { id: "c", text: "Any hexadecimal digit" },
      { id: "d", text: "0 to 7" },
    ],
    correctOptionId: "b",
    explanation:
      "A binary digit (bit) can only be 0 or 1, since binary is base 2 and only uses two symbols.",
  },
  {
    id: "cpe301-49",
    chapter: "Chapter 1",
    text: "The leftmost bit of a binary number is the:",
    options: [
      { id: "a", text: "LSB" },
      { id: "b", text: "MSB" },
      { id: "c", text: "Bit 0" },
      { id: "d", text: "Sign bit" },
    ],
    correctOptionId: "b",
    explanation:
      "The leftmost bit is the MSB (Most Significant Bit), having the highest positional value. In 8 bits, the MSB represents 2^7 (128).",
  },
  {
    id: "cpe301-50",
    chapter: "Chapter 1",
    text: "MSB stands for:",
    options: [
      { id: "a", text: "Memory Stored Bits" },
      { id: "b", text: "Most Significant Bit" },
      { id: "c", text: "Minimum Set Bits" },
      { id: "d", text: "Machine System Byte" },
    ],
    correctOptionId: "b",
    explanation:
      "MSB stands for Most Significant Bit—the leftmost bit carrying the greatest weight (highest power of 2).",
  },
  {
    id: "cpe301-51",
    chapter: "Chapter 1",
    text: "LSB stands for:",
    options: [
      { id: "a", text: "Least Significant Bit" },
      { id: "b", text: "Large Storage Byte" },
      { id: "c", text: "Load System Bits" },
      { id: "d", text: "Left Shift Bits" },
    ],
    correctOptionId: "a",
    explanation:
      "LSB stands for Least Significant Bit—the rightmost bit with the smallest weight (2^0 = 1).",
  },
  {
    id: "cpe301-52",
    chapter: "Chapter 1",
    text: "Bits in a binary number are numbered starting from:",
    options: [
      { id: "a", text: "1 on the left" },
      { id: "b", text: "1 on the right" },
      { id: "c", text: "0 on the left" },
      { id: "d", text: "0 on the right" },
    ],
    correctOptionId: "d",
    explanation:
      "Bits are numbered starting from 0 on the right (LSB), matching the power of 2 each position represents.",
  },
  {
    id: "cpe301-53",
    chapter: "Chapter 1",
    text: "2^0 equals:",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "10" },
    ],
    correctOptionId: "b",
    explanation: "2^0 equals 1. Any number raised to the power of 0 equals 1.",
  },
  {
    id: "cpe301-54",
    chapter: "Chapter 1",
    text: "2^3 equals:",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "9" },
    ],
    correctOptionId: "c",
    explanation:
      "2^3 = 2 × 2 × 2 = 8. Bit position 3 represents the value 8 when set.",
  },
  {
    id: "cpe301-55",
    chapter: "Chapter 1",
    text: "2^4 equals:",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "8" },
      { id: "c", text: "16" },
      { id: "d", text: "24" },
    ],
    correctOptionId: "c",
    explanation:
      "2^4 = 16. This represents one hexadecimal digit (values 0-15).",
  },
  {
    id: "cpe301-56",
    chapter: "Chapter 1",
    text: "2^8 equals:",
    options: [
      { id: "a", text: "128" },
      { id: "b", text: "256" },
      { id: "c", text: "512" },
      { id: "d", text: "1024" },
    ],
    correctOptionId: "b",
    explanation:
      "2^8 = 256, the number of values representable with 8 bits (one byte), ranging 0-255.",
  },
  {
    id: "cpe301-57",
    chapter: "Chapter 1",
    text: "2^10 equals:",
    options: [
      { id: "a", text: "512" },
      { id: "b", text: "1000" },
      { id: "c", text: "1024" },
      { id: "d", text: "2048" },
    ],
    correctOptionId: "c",
    explanation:
      "2^10 = 1024, approximately 1000. This is why 1024 bytes is called a kilobyte.",
  },
  {
    id: "cpe301-58",
    chapter: "Chapter 1",
    text: "The decimal value of binary 00001001 is:",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
      { id: "d", text: "17" },
    ],
    correctOptionId: "b",
    explanation: "00001001 = 2^3 + 2^0 = 8 + 1 = 9. Bits 0 and 3 are set.",
  },
  {
    id: "cpe301-59",
    chapter: "Chapter 1",
    text: "The decimal value of binary 00001111 is:",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "15" },
      { id: "c", text: "16" },
      { id: "d", text: "17" },
    ],
    correctOptionId: "b",
    explanation: "00001111 = 8 + 4 + 2 + 1 = 15. The lower 4 bits are all set.",
  },
  {
    id: "cpe301-60",
    chapter: "Chapter 1",
    text: "The decimal value of binary 00010000 is:",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "16" },
      { id: "c", text: "32" },
      { id: "d", text: "17" },
    ],
    correctOptionId: "b",
    explanation: "00010000 = 2^4 = 16. Only bit 4 is set.",
  },
  {
    id: "cpe301-61",
    chapter: "Chapter 1",
    text: "The decimal value of unsigned binary 11111111 is:",
    options: [
      { id: "a", text: "127" },
      { id: "b", text: "128" },
      { id: "c", text: "254" },
      { id: "d", text: "255" },
    ],
    correctOptionId: "d",
    explanation:
      "Unsigned 11111111 = 2^8 - 1 = 255. All 8 bits set gives the maximum unsigned byte value.",
  },
  {
    id: "cpe301-62",
    chapter: "Chapter 1",
    text: "The decimal value of unsigned binary 10000000 is:",
    options: [
      { id: "a", text: "64" },
      { id: "b", text: "128" },
      { id: "c", text: "255" },
      { id: "d", text: "256" },
    ],
    correctOptionId: "b",
    explanation: "Unsigned 10000000 = 2^7 = 128. Only bit 7 is set.",
  },
  {
    id: "cpe301-63",
    chapter: "Chapter 1",
    text: "To convert a decimal number to binary, divide by:",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "10" },
      { id: "c", text: "2" },
      { id: "d", text: "16" },
    ],
    correctOptionId: "c",
    explanation:
      "To convert decimal to binary, repeatedly divide by 2 and record remainders, reading them bottom to top.",
  },
  {
    id: "cpe301-64",
    chapter: "Chapter 1",
    text: "The binary representation of decimal 13 is:",
    options: [
      { id: "a", text: "00001010" },
      { id: "b", text: "00001011" },
      { id: "c", text: "00001100" },
      { id: "d", text: "00001101" },
    ],
    correctOptionId: "d",
    explanation: "13 = 8 + 4 + 1 = 2^3 + 2^2 + 2^0 = 00001101.",
  },
  {
    id: "cpe301-65",
    chapter: "Chapter 1",
    text: "The binary representation of decimal 7 is:",
    options: [
      { id: "a", text: "00000110" },
      { id: "b", text: "00000111" },
      { id: "c", text: "00001000" },
      { id: "d", text: "00001001" },
    ],
    correctOptionId: "b",
    explanation: "7 = 4 + 2 + 1 = 2^2 + 2^1 + 2^0 = 00000111.",
  },
  {
    id: "cpe301-66",
    chapter: "Chapter 1",
    text: "The binary representation of decimal 16 is:",
    options: [
      { id: "a", text: "00001111" },
      { id: "b", text: "00010000" },
      { id: "c", text: "00010001" },
      { id: "d", text: "00100000" },
    ],
    correctOptionId: "b",
    explanation: "16 = 2^4 = 00010000. Only bit 4 is set.",
  },
  {
    id: "cpe301-67",
    chapter: "Chapter 1",
    text: "The binary representation of decimal 32 is:",
    options: [
      { id: "a", text: "00010000" },
      { id: "b", text: "00100000" },
      { id: "c", text: "01000000" },
      { id: "d", text: "10000000" },
    ],
    correctOptionId: "b",
    explanation: "32 = 2^5 = 00100000. Only bit 5 is set.",
  },
  {
    id: "cpe301-68",
    chapter: "Chapter 1",
    text: "The result of binary 00000100 + 00000111 is:",
    options: [
      { id: "a", text: "00001010" },
      { id: "b", text: "00001011" },
      { id: "c", text: "00001100" },
      { id: "d", text: "00001101" },
    ],
    correctOptionId: "b",
    explanation: "00000100 (4) + 00000111 (7) = 00001011 (11).",
  },
  {
    id: "cpe301-69",
    chapter: "Chapter 1",
    text: "In binary, 1 + 1 equals:",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "10" },
      { id: "d", text: "11" },
    ],
    correctOptionId: "c",
    explanation:
      "In binary, 1 + 1 = 10 (decimal 2). Adding two 1s requires a carry to the next position.",
  },
  {
    id: "cpe301-70",
    chapter: "Chapter 1",
    text: "A carry is generated when:",
    options: [
      { id: "a", text: "0 + 0 = 0" },
      { id: "b", text: "1 + 0 = 1" },
      { id: "c", text: "1 + 1 = 10" },
      { id: "d", text: "1 + 1 = 1" },
    ],
    correctOptionId: "c",
    explanation:
      "A carry is generated when 1 + 1 = 10. The sum exceeds one digit, carrying to the next position.",
  },
  {
    id: "cpe301-71",
    chapter: "Chapter 1",
    text: "The formula for bits needed to represent n is:",
    options: [
      { id: "a", text: "n" },
      { id: "b", text: "log₂ n" },
      { id: "c", text: "ceiling(log₂ n)" },
      { id: "d", text: "2^n" },
    ],
    correctOptionId: "c",
    explanation:
      "ceiling(log₂ n) gives the minimum bits needed to represent n values. The ceiling rounds up for fractional results.",
  },
  {
    id: "cpe301-72",
    chapter: "Chapter 1",
    text: "The number of bits needed to represent decimal 17 is:",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "8" },
    ],
    correctOptionId: "b",
    explanation:
      "17 requires 5 bits. 4 bits represent 0-15, but 17 = 10001 needs 5 bits.",
  },
  {
    id: "cpe301-73",
    chapter: "Chapter 1",
    text: "The decimal value of binary 01100100 is:",
    options: [
      { id: "a", text: "96" },
      { id: "b", text: "100" },
      { id: "c", text: "108" },
      { id: "d", text: "110" },
    ],
    correctOptionId: "b",
    explanation: "01100100 = 64 + 32 + 4 = 100. Bits 6, 5, and 2 are set.",
  },
  {
    id: "cpe301-74",
    chapter: "Chapter 1",
    text: "Binary 1101.1110 is easier to read because:",
    options: [
      { id: "a", text: "It uses fewer digits" },
      { id: "b", text: "Dots are inserted every 4 or 8 bits" },
      { id: "c", text: "It follows hexadecimal rules" },
      { id: "d", text: "It is always accurate" },
    ],
    correctOptionId: "b",
    explanation:
      "Inserting dots/spaces every 4 or 8 bits improves readability and aids hex conversion.",
  },
  {
    id: "cpe301-75",
    chapter: "Chapter 1",
    text: "The decimal value of binary 00110101 is:",
    options: [
      { id: "a", text: "50" },
      { id: "b", text: "52" },
      { id: "c", text: "53" },
      { id: "d", text: "54" },
    ],
    correctOptionId: "c",
    explanation: "00110101 = 32 + 16 + 4 + 1 = 53. Bits 5, 4, 2, 0 are set.",
  },
  {
    id: "cpe301-76",
    chapter: "Chapter 1",
    text: "The binary representation of decimal 255 is:",
    options: [
      { id: "a", text: "11111110" },
      { id: "b", text: "11111111" },
      { id: "c", text: "10000000" },
      { id: "d", text: "01111111" },
    ],
    correctOptionId: "b",
    explanation:
      "255 = 2^8 - 1 = 11111111. All 8 bits set gives max unsigned byte.",
  },
  {
    id: "cpe301-77",
    chapter: "Chapter 1",
    text: "A signed binary integer can be:",
    options: [
      { id: "a", text: "Positive only" },
      { id: "b", text: "Negative only" },
      { id: "c", text: "Positive or negative" },
      { id: "d", text: "Zero only" },
    ],
    correctOptionId: "c",
    explanation:
      "Signed integers can be positive, negative, or zero. The MSB indicates the sign.",
  },
  {
    id: "cpe301-78",
    chapter: "Chapter 1",
    text: "An unsigned binary integer is by default:",
    options: [
      { id: "a", text: "Negative" },
      { id: "b", text: "Positive" },
      { id: "c", text: "Zero" },
      { id: "d", text: "Indeterminate" },
    ],
    correctOptionId: "b",
    explanation:
      "Unsigned integers are always positive (or zero). All bits represent magnitude.",
  },
  {
    id: "cpe301-79",
    chapter: "Chapter 1",
    text: "Zero is considered:",
    options: [
      { id: "a", text: "Positive" },
      { id: "b", text: "Negative" },
      { id: "c", text: "Positive or neither positive nor negative" },
      { id: "d", text: "Undefined" },
    ],
    correctOptionId: "c",
    explanation:
      "Zero is typically considered neither positive nor negative, though in computing it's grouped with positives (sign bit = 0).",
  },
  {
    id: "cpe301-80",
    chapter: "Chapter 1",
    text: "The result of binary 00001111 + 00000010 is:",
    options: [
      { id: "a", text: "00010000" },
      { id: "b", text: "00010001" },
      { id: "c", text: "00010010" },
      { id: "d", text: "00010011" },
    ],
    correctOptionId: "b",
    explanation: "00001111 (15) + 00000010 (2) = 00010001 (17).",
  },

  // SECTION 4: INTEGER STORAGE SIZES (81-100)
  {
    id: "cpe301-81",
    chapter: "Chapter 1",
    text: "The basic storage unit in an x86 computer is:",
    options: [
      { id: "a", text: "Bit" },
      { id: "b", text: "Byte" },
      { id: "c", text: "Word" },
      { id: "d", text: "Kilobyte" },
    ],
    correctOptionId: "b",
    explanation:
      "The byte (8 bits) is the basic storage unit. Memory is byte-addressable.",
  },
  {
    id: "cpe301-82",
    chapter: "Chapter 1",
    text: "Number of bits in a byte:",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "8" },
      { id: "c", text: "16" },
      { id: "d", text: "32" },
    ],
    correctOptionId: "b",
    explanation: "A byte contains 8 bits, representing 256 different values.",
  },
  {
    id: "cpe301-83",
    chapter: "Chapter 1",
    text: "Number of bytes in a word:",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "8" },
    ],
    correctOptionId: "b",
    explanation: "In x86 terminology, a word is 2 bytes (16 bits).",
  },
  {
    id: "cpe301-84",
    chapter: "Chapter 1",
    text: "Number of bits in a word:",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "16" },
      { id: "c", text: "32" },
      { id: "d", text: "64" },
    ],
    correctOptionId: "b",
    explanation: "A word in x86 is 16 bits, representing 0-65535 unsigned.",
  },
  {
    id: "cpe301-85",
    chapter: "Chapter 1",
    text: "Number of bytes in a doubleword:",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "8" },
      { id: "d", text: "16" },
    ],
    correctOptionId: "b",
    explanation:
      "A doubleword (DWORD) is 4 bytes (32 bits), the native size for 32-bit processors.",
  },
  {
    id: "cpe301-86",
    chapter: "Chapter 1",
    text: "Number of bits in a doubleword:",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "32" },
      { id: "c", text: "64" },
      { id: "d", text: "128" },
    ],
    correctOptionId: "b",
    explanation: "A doubleword is 32 bits (4 bytes).",
  },
  {
    id: "cpe301-87",
    chapter: "Chapter 1",
    text: "Number of bytes in a quadword:",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "8" },
      { id: "c", text: "16" },
      { id: "d", text: "32" },
    ],
    correctOptionId: "b",
    explanation:
      "A quadword (QWORD) is 8 bytes (64 bits), native for 64-bit processors.",
  },
  {
    id: "cpe301-88",
    chapter: "Chapter 1",
    text: "Number of bits in a quadword:",
    options: [
      { id: "a", text: "32" },
      { id: "b", text: "64" },
      { id: "c", text: "128" },
      { id: "d", text: "256" },
    ],
    correctOptionId: "b",
    explanation: "A quadword is 64 bits (8 bytes).",
  },
  {
    id: "cpe301-89",
    chapter: "Chapter 1",
    text: "Number of bits in a double quadword:",
    options: [
      { id: "a", text: "64" },
      { id: "b", text: "128" },
      { id: "c", text: "256" },
      { id: "d", text: "512" },
    ],
    correctOptionId: "b",
    explanation:
      "A double quadword is 128 bits (16 bytes), used in SIMD/SSE operations.",
  },
  {
    id: "cpe301-90",
    chapter: "Chapter 1",
    text: "One kilobyte equals:",
    options: [
      { id: "a", text: "1000 bytes" },
      { id: "b", text: "1024 bytes" },
      { id: "c", text: "2048 bytes" },
      { id: "d", text: "512 bytes" },
    ],
    correctOptionId: "b",
    explanation: "One KB = 1024 bytes = 2^10 bytes in binary terms.",
  },
  {
    id: "cpe301-91",
    chapter: "Chapter 1",
    text: "One kilobyte equals 2 to the power of:",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
      { id: "d", text: "11" },
    ],
    correctOptionId: "c",
    explanation: "1 KB = 2^10 = 1024 bytes.",
  },
  {
    id: "cpe301-92",
    chapter: "Chapter 1",
    text: "One megabyte equals:",
    options: [
      { id: "a", text: "1,000,000 bytes" },
      { id: "b", text: "1,048,576 bytes" },
      { id: "c", text: "1,024,000 bytes" },
      { id: "d", text: "2,097,152 bytes" },
    ],
    correctOptionId: "b",
    explanation: "1 MB = 2^20 = 1,048,576 bytes = 1024 KB.",
  },
  {
    id: "cpe301-93",
    chapter: "Chapter 1",
    text: "One megabyte equals 2 to the power of:",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "18" },
      { id: "c", text: "20" },
      { id: "d", text: "25" },
    ],
    correctOptionId: "c",
    explanation: "1 MB = 2^20 bytes. Pattern: KB=2^10, MB=2^20, GB=2^30.",
  },
  {
    id: "cpe301-94",
    chapter: "Chapter 1",
    text: "One gigabyte equals 2 to the power of:",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "25" },
      { id: "c", text: "30" },
      { id: "d", text: "35" },
    ],
    correctOptionId: "c",
    explanation: "1 GB = 2^30 bytes ≈ 1 billion bytes.",
  },
  {
    id: "cpe301-95",
    chapter: "Chapter 1",
    text: "One terabyte equals 2 to the power of:",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "35" },
      { id: "c", text: "40" },
      { id: "d", text: "45" },
    ],
    correctOptionId: "c",
    explanation: "1 TB = 2^40 bytes ≈ 1 trillion bytes.",
  },
  {
    id: "cpe301-96",
    chapter: "Chapter 1",
    text: "The range of an unsigned byte is:",
    options: [
      { id: "a", text: "-128 to 127" },
      { id: "b", text: "0 to 127" },
      { id: "c", text: "0 to 255" },
      { id: "d", text: "1 to 256" },
    ],
    correctOptionId: "c",
    explanation: "Unsigned byte: 0 to 255 (2^8 = 256 values starting from 0).",
  },
  {
    id: "cpe301-97",
    chapter: "Chapter 1",
    text: "The range of an unsigned word is:",
    options: [
      { id: "a", text: "0 to 32767" },
      { id: "b", text: "0 to 65535" },
      { id: "c", text: "-32768 to 32767" },
      { id: "d", text: "-65536 to 65535" },
    ],
    correctOptionId: "b",
    explanation: "Unsigned word (16 bits): 0 to 65535 = 2^16 - 1.",
  },
  {
    id: "cpe301-98",
    chapter: "Chapter 1",
    text: "The maximum value of an unsigned byte is:",
    options: [
      { id: "a", text: "128" },
      { id: "b", text: "256" },
      { id: "c", text: "2^8 - 1" },
      { id: "d", text: "2^7 - 1" },
    ],
    correctOptionId: "c",
    explanation: "Max unsigned byte = 2^8 - 1 = 255.",
  },
  {
    id: "cpe301-99",
    chapter: "Chapter 1",
    text: "One petabyte equals 2 to the power of:",
    options: [
      { id: "a", text: "40" },
      { id: "b", text: "45" },
      { id: "c", text: "50" },
      { id: "d", text: "55" },
    ],
    correctOptionId: "c",
    explanation: "1 PB = 2^50 bytes ≈ 1000 TB.",
  },
  {
    id: "cpe301-100",
    chapter: "Chapter 1",
    text: "One exabyte equals 2 to the power of:",
    options: [
      { id: "a", text: "50" },
      { id: "b", text: "55" },
      { id: "c", text: "60" },
      { id: "d", text: "65" },
    ],
    correctOptionId: "c",
    explanation: "1 EB = 2^60 bytes ≈ 1000 PB.",
  },

  // SECTION 5: HEXADECIMAL INTEGERS (101-130)
  {
    id: "cpe301-101",
    chapter: "Chapter 1",
    text: "Hexadecimal numbers are base:",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "10" },
      { id: "c", text: "16" },
      { id: "d", text: "2" },
    ],
    correctOptionId: "c",
    explanation: "Hexadecimal is base 16, using digits 0-9 and letters A-F.",
  },
  {
    id: "cpe301-102",
    chapter: "Chapter 1",
    text: "Each hexadecimal digit represents:",
    options: [
      { id: "a", text: "2 binary bits" },
      { id: "b", text: "4 binary bits" },
      { id: "c", text: "8 binary bits" },
      { id: "d", text: "1 binary bit" },
    ],
    correctOptionId: "b",
    explanation:
      "Each hex digit = 4 binary bits (nibble). 2^4 = 16 values per digit.",
  },
  {
    id: "cpe301-103",
    chapter: "Chapter 1",
    text: "Two hexadecimal digits represent:",
    options: [
      { id: "a", text: "A word" },
      { id: "b", text: "A nibble" },
      { id: "c", text: "A byte" },
      { id: "d", text: "A doubleword" },
    ],
    correctOptionId: "c",
    explanation: "Two hex digits = 8 bits = 1 byte. Example: FF = 11111111.",
  },
  {
    id: "cpe301-104",
    chapter: "Chapter 1",
    text: "The letter A in hexadecimal represents decimal:",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "10" },
      { id: "c", text: "11" },
      { id: "d", text: "12" },
    ],
    correctOptionId: "b",
    explanation: "Hex A = decimal 10. Letters A-F represent 10-15.",
  },
  {
    id: "cpe301-105",
    chapter: "Chapter 1",
    text: "The letter F in hexadecimal represents decimal:",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "15" },
      { id: "c", text: "16" },
      { id: "d", text: "17" },
    ],
    correctOptionId: "b",
    explanation: "Hex F = decimal 15, the highest single hex digit.",
  },
  {
    id: "cpe301-106",
    chapter: "Chapter 1",
    text: "The letter B in hexadecimal represents decimal:",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "11" },
      { id: "c", text: "12" },
      { id: "d", text: "13" },
    ],
    correctOptionId: "b",
    explanation: "Hex B = decimal 11. A=10, B=11, C=12, D=13, E=14, F=15.",
  },
  {
    id: "cpe301-107",
    chapter: "Chapter 1",
    text: "The letter C in hexadecimal represents decimal:",
    options: [
      { id: "a", text: "11" },
      { id: "b", text: "12" },
      { id: "c", text: "13" },
      { id: "d", text: "14" },
    ],
    correctOptionId: "b",
    explanation: "Hex C = decimal 12 = binary 1100.",
  },
  {
    id: "cpe301-108",
    chapter: "Chapter 1",
    text: "The letter D in hexadecimal represents decimal:",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "13" },
      { id: "c", text: "14" },
      { id: "d", text: "15" },
    ],
    correctOptionId: "b",
    explanation: "Hex D = decimal 13 = binary 1101.",
  },
  {
    id: "cpe301-109",
    chapter: "Chapter 1",
    text: "The letter E in hexadecimal represents decimal:",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "14" },
      { id: "c", text: "15" },
      { id: "d", text: "16" },
    ],
    correctOptionId: "b",
    explanation: "Hex E = decimal 14 = binary 1110.",
  },
  {
    id: "cpe301-110",
    chapter: "Chapter 1",
    text: "The binary equivalent of hexadecimal A is:",
    options: [
      { id: "a", text: "1000" },
      { id: "b", text: "1001" },
      { id: "c", text: "1010" },
      { id: "d", text: "1011" },
    ],
    correctOptionId: "c",
    explanation: "Hex A = 10 = binary 1010 (8+2).",
  },
  {
    id: "cpe301-111",
    chapter: "Chapter 1",
    text: "The binary equivalent of hexadecimal F is:",
    options: [
      { id: "a", text: "1110" },
      { id: "b", text: "1111" },
      { id: "c", text: "10000" },
      { id: "d", text: "01111" },
    ],
    correctOptionId: "b",
    explanation: "Hex F = 15 = binary 1111 (all four bits set).",
  },
  {
    id: "cpe301-112",
    chapter: "Chapter 1",
    text: "The hexadecimal equivalent of binary 1100 is:",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "B" },
      { id: "c", text: "C" },
      { id: "d", text: "D" },
    ],
    correctOptionId: "c",
    explanation: "Binary 1100 = 8 + 4 = 12 = hex C.",
  },
  {
    id: "cpe301-113",
    chapter: "Chapter 1",
    text: "The hexadecimal equivalent of binary 1111 is:",
    options: [
      { id: "a", text: "D" },
      { id: "b", text: "E" },
      { id: "c", text: "F" },
      { id: "d", text: "10" },
    ],
    correctOptionId: "c",
    explanation: "Binary 1111 = 15 = hex F.",
  },
  {
    id: "cpe301-114",
    chapter: "Chapter 1",
    text: "16^0 equals:",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "16" },
      { id: "d", text: "256" },
    ],
    correctOptionId: "b",
    explanation: "16^0 = 1. Any non-zero number to power 0 equals 1.",
  },
  {
    id: "cpe301-115",
    chapter: "Chapter 1",
    text: "16^1 equals:",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "16" },
      { id: "c", text: "256" },
      { id: "d", text: "4096" },
    ],
    correctOptionId: "b",
    explanation: "16^1 = 16. The second hex digit position has weight 16.",
  },
  {
    id: "cpe301-116",
    chapter: "Chapter 1",
    text: "16^2 equals:",
    options: [
      { id: "a", text: "32" },
      { id: "b", text: "128" },
      { id: "c", text: "256" },
      { id: "d", text: "512" },
    ],
    correctOptionId: "c",
    explanation: "16^2 = 256. Third hex digit position weight.",
  },
  {
    id: "cpe301-117",
    chapter: "Chapter 1",
    text: "16^3 equals:",
    options: [
      { id: "a", text: "1024" },
      { id: "b", text: "2048" },
      { id: "c", text: "4096" },
      { id: "d", text: "8192" },
    ],
    correctOptionId: "c",
    explanation: "16^3 = 4096. Fourth hex digit position weight.",
  },
  {
    id: "cpe301-118",
    chapter: "Chapter 1",
    text: "The decimal value of hexadecimal 1A is:",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "25" },
      { id: "c", text: "26" },
      { id: "d", text: "27" },
    ],
    correctOptionId: "c",
    explanation: "1A = 1×16 + 10×1 = 16 + 10 = 26.",
  },
  {
    id: "cpe301-119",
    chapter: "Chapter 1",
    text: "The decimal value of hexadecimal 10 is:",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "15" },
      { id: "c", text: "16" },
      { id: "d", text: "17" },
    ],
    correctOptionId: "c",
    explanation:
      "Hex 10 = 1×16 + 0 = 16 decimal. Don't confuse with decimal 10!",
  },
  {
    id: "cpe301-120",
    chapter: "Chapter 1",
    text: "The decimal value of hexadecimal FF is:",
    options: [
      { id: "a", text: "250" },
      { id: "b", text: "255" },
      { id: "c", text: "256" },
      { id: "d", text: "260" },
    ],
    correctOptionId: "b",
    explanation: "FF = 15×16 + 15 = 240 + 15 = 255 (max byte).",
  },
  {
    id: "cpe301-121",
    chapter: "Chapter 1",
    text: "To convert a decimal number to hexadecimal, divide by:",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "10" },
      { id: "c", text: "2" },
      { id: "d", text: "16" },
    ],
    correctOptionId: "d",
    explanation:
      "Divide by 16, record remainders (convert 10-15 to A-F), read bottom to top.",
  },
  {
    id: "cpe301-122",
    chapter: "Chapter 1",
    text: "The hexadecimal representation of decimal 255 is:",
    options: [
      { id: "a", text: "FE" },
      { id: "b", text: "FF" },
      { id: "c", text: "100" },
      { id: "d", text: "AF" },
    ],
    correctOptionId: "b",
    explanation: "255 ÷ 16 = 15 R15, both are F, so 255 = FF.",
  },
  {
    id: "cpe301-123",
    chapter: "Chapter 1",
    text: "The hexadecimal representation of decimal 16 is:",
    options: [
      { id: "a", text: "F" },
      { id: "b", text: "10" },
      { id: "c", text: "11" },
      { id: "d", text: "20" },
    ],
    correctOptionId: "b",
    explanation: "16 ÷ 16 = 1 R0, so decimal 16 = hex 10.",
  },
  {
    id: "cpe301-124",
    chapter: "Chapter 1",
    text: "The sum of hexadecimal 6A2 + 49A is:",
    options: [
      { id: "a", text: "B3C" },
      { id: "b", text: "AE5" },
      { id: "c", text: "C00" },
      { id: "d", text: "BC3" },
    ],
    correctOptionId: "a",
    explanation: "6A2 + 49A: 2+A=C, A+9=13(3 carry 1), 6+4+1=B. Result: B3C.",
  },
  {
    id: "cpe301-125",
    chapter: "Chapter 1",
    text: "The binary equivalent of hexadecimal 5 is:",
    options: [
      { id: "a", text: "0100" },
      { id: "b", text: "0101" },
      { id: "c", text: "0110" },
      { id: "d", text: "0111" },
    ],
    correctOptionId: "b",
    explanation: "Hex 5 = 4 + 1 = binary 0101.",
  },
  {
    id: "cpe301-126",
    chapter: "Chapter 1",
    text: "The hexadecimal representation of binary 0001 0110 1010 0111 is:",
    options: [
      { id: "a", text: "15A7" },
      { id: "b", text: "16A7" },
      { id: "c", text: "17A8" },
      { id: "d", text: "26B7" },
    ],
    correctOptionId: "b",
    explanation: "Group by 4: 0001=1, 0110=6, 1010=A, 0111=7 → 16A7.",
  },
  {
    id: "cpe301-127",
    chapter: "Chapter 1",
    text: "Hexadecimal is useful because:",
    options: [
      { id: "a", text: "It is easier to remember" },
      { id: "b", text: "Large binary numbers are cumbersome to read" },
      { id: "c", text: "It reduces memory usage" },
      { id: "d", text: "It speeds up computation" },
    ],
    correctOptionId: "b",
    explanation:
      "Hex provides compact representation of binary—each digit is 4 bits.",
  },
  {
    id: "cpe301-128",
    chapter: "Chapter 1",
    text: "Number of hexadecimal digits needed for one byte:",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" },
    ],
    correctOptionId: "b",
    explanation: "2 hex digits = 8 bits = 1 byte (e.g., FF = 11111111).",
  },
  {
    id: "cpe301-129",
    chapter: "Chapter 1",
    text: "Hexadecimal digits include:",
    options: [
      { id: "a", text: "0-9 only" },
      { id: "b", text: "A-F only" },
      { id: "c", text: "0-9 and A-F" },
      { id: "d", text: "0-7" },
    ],
    correctOptionId: "c",
    explanation: "Hex uses 0-9 for 0-9 and A-F for 10-15 (16 total symbols).",
  },
  {
    id: "cpe301-130",
    chapter: "Chapter 1",
    text: "The decimal value of hexadecimal 3BA4 is:",
    options: [
      { id: "a", text: "15,000" },
      { id: "b", text: "15,268" },
      { id: "c", text: "15,400" },
      { id: "d", text: "16,000" },
    ],
    correctOptionId: "b",
    explanation:
      "3BA4 = 3×4096 + 11×256 + 10×16 + 4 = 12288 + 2816 + 160 + 4 = 15,268.",
  },

  // SECTION 6: SIGNED BINARY INTEGERS (131-160)
  {
    id: "cpe301-131",
    chapter: "Chapter 1",
    text: "In signed binary representation, the MSB indicates:",
    options: [
      { id: "a", text: "The magnitude of the number" },
      { id: "b", text: "The sign of the number" },
      { id: "c", text: "The parity of the number" },
      { id: "d", text: "The overflow status" },
    ],
    correctOptionId: "b",
    explanation: "The MSB indicates sign: 0 = positive/zero, 1 = negative.",
  },
  {
    id: "cpe301-132",
    chapter: "Chapter 1",
    text: "When MSB = 0, the number is:",
    options: [
      { id: "a", text: "Negative" },
      { id: "b", text: "Positive" },
      { id: "c", text: "Zero" },
      { id: "d", text: "Undefined" },
    ],
    correctOptionId: "b",
    explanation:
      "MSB = 0 indicates positive (or zero). Remaining bits show magnitude.",
  },
  {
    id: "cpe301-133",
    chapter: "Chapter 1",
    text: "When MSB = 1, the number is:",
    options: [
      { id: "a", text: "Positive" },
      { id: "b", text: "Negative" },
      { id: "c", text: "Zero" },
      { id: "d", text: "Undefined" },
    ],
    correctOptionId: "b",
    explanation: "MSB = 1 indicates negative in two's complement.",
  },
  {
    id: "cpe301-134",
    chapter: "Chapter 1",
    text: "Negative integers use:",
    options: [
      { id: "a", text: "Sign-magnitude representation" },
      { id: "b", text: "One's complement" },
      { id: "c", text: "Two's complement" },
      { id: "d", text: "Direct representation" },
    ],
    correctOptionId: "c",
    explanation:
      "Modern computers use two's complement: only one zero, and addition works for both signs.",
  },
  {
    id: "cpe301-135",
    chapter: "Chapter 1",
    text: "Two's complement of an integer is its:",
    options: [
      { id: "a", text: "Opposite" },
      { id: "b", text: "Additive inverse" },
      { id: "c", text: "Reciprocal" },
      { id: "d", text: "Compliment" },
    ],
    correctOptionId: "b",
    explanation:
      "Two's complement is the additive inverse: number + its two's complement = 0.",
  },
  {
    id: "cpe301-136",
    chapter: "Chapter 1",
    text: "A number plus its two's complement equals:",
    options: [
      { id: "a", text: "One" },
      { id: "b", text: "The number itself" },
      { id: "c", text: "Zero" },
      { id: "d", text: "Two" },
    ],
    correctOptionId: "c",
    explanation:
      "N + (-N) = 0 (ignoring overflow). Defining property of two's complement.",
  },
  {
    id: "cpe301-137",
    chapter: "Chapter 1",
    text: "To create the two's complement of a number:",
    options: [
      { id: "a", text: "Invert bits and add 1" },
      { id: "b", text: "Add 1" },
      { id: "c", text: "Invert bits" },
      { id: "d", text: "Subtract 1" },
    ],
    correctOptionId: "a",
    explanation: "Two's complement: (1) invert all bits, (2) add 1.",
  },
  {
    id: "cpe301-138",
    chapter: "Chapter 1",
    text: "The two's complement of binary 00000001 is:",
    options: [
      { id: "a", text: "11111110" },
      { id: "b", text: "11111111" },
      { id: "c", text: "10000001" },
      { id: "d", text: "10000000" },
    ],
    correctOptionId: "b",
    explanation: "00000001 → invert → 11111110 → +1 → 11111111 (= -1).",
  },
  {
    id: "cpe301-139",
    chapter: "Chapter 1",
    text: "Two's complement eliminates the need for:",
    options: [
      { id: "a", text: "Adders" },
      { id: "b", text: "Multiplication circuits" },
      { id: "c", text: "Separate subtraction circuits" },
      { id: "d", text: "Logic gates" },
    ],
    correctOptionId: "c",
    explanation:
      "Subtraction becomes addition: A - B = A + (-B). Same hardware works.",
  },
  {
    id: "cpe301-140",
    chapter: "Chapter 1",
    text: "The operation A - B is converted to:",
    options: [
      { id: "a", text: "A + B" },
      { id: "b", text: "A + (-B)" },
      { id: "c", text: "A × B" },
      { id: "d", text: "-A - B" },
    ],
    correctOptionId: "b",
    explanation: "Subtraction A - B becomes A + (two's complement of B).",
  },
  {
    id: "cpe301-141",
    chapter: "Chapter 1",
    text: "The signed binary 11111111 (8-bit) equals:",
    options: [
      { id: "a", text: "-128" },
      { id: "b", text: "-2" },
      { id: "c", text: "-1" },
      { id: "d", text: "255" },
    ],
    correctOptionId: "c",
    explanation:
      "11111111 = -1. Two's complement: invert→00000000, +1→00000001 = 1, so original = -1.",
  },
  {
    id: "cpe301-142",
    chapter: "Chapter 1",
    text: "The signed binary 10000000 (8-bit) equals:",
    options: [
      { id: "a", text: "-127" },
      { id: "b", text: "-128" },
      { id: "c", text: "-1" },
      { id: "d", text: "0" },
    ],
    correctOptionId: "b",
    explanation: "10000000 = -128, the minimum signed byte value (-2^7).",
  },
  {
    id: "cpe301-143",
    chapter: "Chapter 1",
    text: "The range of a signed byte is:",
    options: [
      { id: "a", text: "0 to 255" },
      { id: "b", text: "-127 to 127" },
      { id: "c", text: "-128 to 127" },
      { id: "d", text: "-256 to 255" },
    ],
    correctOptionId: "c",
    explanation: "Signed byte: -128 to 127 (-2^7 to 2^7-1).",
  },
  {
    id: "cpe301-144",
    chapter: "Chapter 1",
    text: "The range of a signed n-bit binary integer is:",
    options: [
      { id: "a", text: "0 to 2^n - 1" },
      { id: "b", text: "-2^n to 2^n" },
      { id: "c", text: "-2^(n-1) to 2^(n-1) - 1" },
      { id: "d", text: "1 to 2^n" },
    ],
    correctOptionId: "c",
    explanation: "Signed n-bit: -2^(n-1) to 2^(n-1) - 1. One bit for sign.",
  },
  {
    id: "cpe301-145",
    chapter: "Chapter 1",
    text: "The range of a signed word is:",
    options: [
      { id: "a", text: "0 to 65535" },
      { id: "b", text: "-32767 to 32767" },
      { id: "c", text: "-32768 to 32767" },
      { id: "d", text: "-65536 to 65535" },
    ],
    correctOptionId: "c",
    explanation: "Signed word (16 bits): -32768 to 32767 (-2^15 to 2^15-1).",
  },
  {
    id: "cpe301-146",
    chapter: "Chapter 1",
    text: "To convert -43 to binary:",
    options: [
      { id: "a", text: "Convert 43 to binary and negate" },
      { id: "b", text: "Subtract 43 from 256" },
      { id: "c", text: "Convert 43 to binary, then compute two's complement" },
      { id: "d", text: "Add a minus sign to 43" },
    ],
    correctOptionId: "c",
    explanation:
      "Convert +43 to binary, then apply two's complement (invert + add 1).",
  },
  {
    id: "cpe301-147",
    chapter: "Chapter 1",
    text: "The binary representation of -43 (8-bit) is:",
    options: [
      { id: "a", text: "11010100" },
      { id: "b", text: "11010101" },
      { id: "c", text: "10101011" },
      { id: "d", text: "11010011" },
    ],
    correctOptionId: "b",
    explanation: "43 = 00101011 → invert → 11010100 → +1 → 11010101 = -43.",
  },
  {
    id: "cpe301-148",
    chapter: "Chapter 1",
    text: "A negative hexadecimal integer has the MSB digit ≥:",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "4" },
      { id: "c", text: "8" },
      { id: "d", text: "F" },
    ],
    correctOptionId: "c",
    explanation: "Hex 8-F (binary 1xxx) have MSB=1, indicating negative.",
  },
  {
    id: "cpe301-149",
    chapter: "Chapter 1",
    text: "The hexadecimal 8A20 is:",
    options: [
      { id: "a", text: "Positive" },
      { id: "b", text: "Negative" },
      { id: "c", text: "Zero" },
      { id: "d", text: "Undefined" },
    ],
    correctOptionId: "b",
    explanation: "8A20 starts with 8 (≥8), so MSB=1, meaning negative.",
  },
  {
    id: "cpe301-150",
    chapter: "Chapter 1",
    text: "The hexadecimal 7FD9 is:",
    options: [
      { id: "a", text: "Negative" },
      { id: "b", text: "Zero" },
      { id: "c", text: "Positive" },
      { id: "d", text: "Undefined" },
    ],
    correctOptionId: "c",
    explanation: "7FD9 starts with 7 (<8), so MSB=0, meaning positive.",
  },
  {
    id: "cpe301-151",
    chapter: "Chapter 1",
    text: "The two's complement operation is:",
    options: [
      { id: "a", text: "Reversible" },
      { id: "b", text: "Irreversible" },
      { id: "c", text: "Ambiguous" },
      { id: "d", text: "Undefined" },
    ],
    correctOptionId: "a",
    explanation:
      "Two's complement is reversible: applying it twice returns the original.",
  },
  {
    id: "cpe301-152",
    chapter: "Chapter 1",
    text: "The two's complement of hexadecimal 6A3D is:",
    options: [
      { id: "a", text: "95C2" },
      { id: "b", text: "95C3" },
      { id: "c", text: "94C3" },
      { id: "d", text: "96C3" },
    ],
    correctOptionId: "b",
    explanation:
      "Subtract each digit from F, then add 1: F-6=9, F-A=5, F-3=C, F-D=2 → 95C2 + 1 = 95C3.",
  },
  {
    id: "cpe301-153",
    chapter: "Chapter 1",
    text: "When creating a hex two's complement, subtract from:",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "16" },
      { id: "c", text: "F" },
      { id: "d", text: "FF" },
    ],
    correctOptionId: "c",
    explanation:
      "Subtract each hex digit from F (15), then add 1 to the result.",
  },
  {
    id: "cpe301-154",
    chapter: "Chapter 1",
    text: "If the MSB = 1 in a signed binary number:",
    options: [
      { id: "a", text: "The number is already negative" },
      { id: "b", text: "Create two's complement first to find the magnitude" },
      { id: "c", text: "The number is positive" },
      { id: "d", text: "The number is zero" },
    ],
    correctOptionId: "a",
    explanation:
      "MSB = 1 means negative. Take two's complement to find magnitude.",
  },
  {
    id: "cpe301-155",
    chapter: "Chapter 1",
    text: "The decimal value of signed binary 11110000 is:",
    options: [
      { id: "a", text: "-240" },
      { id: "b", text: "-16" },
      { id: "c", text: "-15" },
      { id: "d", text: "240" },
    ],
    correctOptionId: "b",
    explanation:
      "MSB=1 → negative. Invert: 00001111, +1: 00010000 = 16. So original = -16.",
  },
  {
    id: "cpe301-156",
    chapter: "Chapter 1",
    text: "In an N-bit signed integer, only ___ bits represent magnitude:",
    options: [
      { id: "a", text: "N" },
      { id: "b", text: "N - 1" },
      { id: "c", text: "N / 2" },
      { id: "d", text: "N + 1" },
    ],
    correctOptionId: "b",
    explanation: "N-1 bits for magnitude, 1 bit for sign.",
  },
  {
    id: "cpe301-157",
    chapter: "Chapter 1",
    text: "The maximum positive value of a signed byte is:",
    options: [
      { id: "a", text: "128" },
      { id: "b", text: "127" },
      { id: "c", text: "255" },
      { id: "d", text: "256" },
    ],
    correctOptionId: "b",
    explanation: "Max positive signed byte = 2^7 - 1 = 127 (01111111).",
  },
  {
    id: "cpe301-158",
    chapter: "Chapter 1",
    text: "The minimum value of a signed byte is:",
    options: [
      { id: "a", text: "-127" },
      { id: "b", text: "-128" },
      { id: "c", text: "-255" },
      { id: "d", text: "-256" },
    ],
    correctOptionId: "b",
    explanation: "Min signed byte = -2^7 = -128 (10000000).",
  },
  {
    id: "cpe301-159",
    chapter: "Chapter 1",
    text: "The 8-bit two's complement of -1 is:",
    options: [
      { id: "a", text: "00000001" },
      { id: "b", text: "10000000" },
      { id: "c", text: "11111111" },
      { id: "d", text: "11111110" },
    ],
    correctOptionId: "c",
    explanation:
      "-1 in 8-bit = 11111111. Verify: +1 = 00000001, invert → 11111110, +1 → 11111111.",
  },
  {
    id: "cpe301-160",
    chapter: "Chapter 1",
    text: "Binary subtraction A - B is performed as:",
    options: [
      { id: "a", text: "A + B" },
      { id: "b", text: "A - B directly" },
      { id: "c", text: "A + two's complement of B" },
      { id: "d", text: "B - A" },
    ],
    correctOptionId: "c",
    explanation:
      "A - B = A + (two's complement of B). Uses same addition hardware.",
  },

  // SECTION 7: CHARACTER STORAGE (161-180)
  {
    id: "cpe301-161",
    chapter: "Chapter 1",
    text: "ASCII stands for:",
    options: [
      { id: "a", text: "American Standard Computer Information Exchange" },
      { id: "b", text: "American Standard Code for Information Interchange" },
      { id: "c", text: "Advanced System Code for Interface Integration" },
      { id: "d", text: "Alphanumeric Standard Character Information Exchange" },
    ],
    correctOptionId: "b",
    explanation: "ASCII = American Standard Code for Information Interchange.",
  },
  {
    id: "cpe301-162",
    chapter: "Chapter 1",
    text: "ASCII uses:",
    options: [
      { id: "a", text: "4 bits" },
      { id: "b", text: "7 bits" },
      { id: "c", text: "8 bits" },
      { id: "d", text: "16 bits" },
    ],
    correctOptionId: "b",
    explanation:
      "Standard ASCII uses 7 bits (128 characters). Extended ASCII uses 8 bits.",
  },
  {
    id: "cpe301-163",
    chapter: "Chapter 1",
    text: "ASCII maps characters to:",
    options: [
      { id: "a", text: "Text strings" },
      { id: "b", text: "Integers" },
      { id: "c", text: "Floating-point numbers" },
      { id: "d", text: "Memory addresses" },
    ],
    correctOptionId: "b",
    explanation:
      "ASCII maps characters to integers (numeric codes). 'A' = 65, 'a' = 97.",
  },
  {
    id: "cpe301-164",
    chapter: "Chapter 1",
    text: "ASCII codes 128-255 represent:",
    options: [
      { id: "a", text: "Extended English characters" },
      { id: "b", text: "Graphic symbols and Greek characters" },
      { id: "c", text: "Control codes" },
      { id: "d", text: "Unicode characters" },
    ],
    correctOptionId: "b",
    explanation:
      "Extended ASCII (128-255) includes graphic symbols, line-drawing, and international characters.",
  },
  {
    id: "cpe301-165",
    chapter: "Chapter 1",
    text: "ANSI stands for:",
    options: [
      { id: "a", text: "American National Standards Institute" },
      { id: "b", text: "Advanced Number System for Information" },
      { id: "c", text: "American Numeric Symbol Interface" },
      { id: "d", text: "Alliance of National Standards Index" },
    ],
    correctOptionId: "a",
    explanation: "ANSI = American National Standards Institute.",
  },
  {
    id: "cpe301-166",
    chapter: "Chapter 1",
    text: "The ANSI character set defines:",
    options: [
      { id: "a", text: "128 characters" },
      { id: "b", text: "192 characters" },
      { id: "c", text: "256 characters" },
      { id: "d", text: "512 characters" },
    ],
    correctOptionId: "c",
    explanation: "ANSI defines 256 characters (codes 0-255).",
  },
  {
    id: "cpe301-167",
    chapter: "Chapter 1",
    text: "Unicode was created to:",
    options: [
      { id: "a", text: "Simplify character encoding" },
      { id: "b", text: "Define characters for all major languages" },
      { id: "c", text: "Replace ASCII entirely" },
      { id: "d", text: "Speed up text processing" },
    ],
    correctOptionId: "b",
    explanation:
      "Unicode covers all major world languages with 100,000+ characters.",
  },
  {
    id: "cpe301-168",
    chapter: "Chapter 1",
    text: "UTF-8 has the same byte values as:",
    options: [
      { id: "a", text: "ANSI" },
      { id: "b", text: "Unicode" },
      { id: "c", text: "ASCII" },
      { id: "d", text: "EBCDIC" },
    ],
    correctOptionId: "c",
    explanation: "UTF-8 is backward compatible with ASCII for codes 0-127.",
  },
  {
    id: "cpe301-169",
    chapter: "Chapter 1",
    text: "UTF-16 encodes each character in:",
    options: [
      { id: "a", text: "8 bits" },
      { id: "b", text: "16 bits" },
      { id: "c", text: "24 bits" },
      { id: "d", text: "32 bits" },
    ],
    correctOptionId: "b",
    explanation:
      "UTF-16 uses 16 bits per character (some need surrogate pairs).",
  },
  {
    id: "cpe301-170",
    chapter: "Chapter 1",
    text: "UTF-32 encodes each character in:",
    options: [
      { id: "a", text: "16 bits" },
      { id: "b", text: "24 bits" },
      { id: "c", text: "32 bits" },
      { id: "d", text: "64 bits" },
    ],
    correctOptionId: "c",
    explanation:
      "UTF-32 uses fixed 32 bits per character—simple but space-inefficient.",
  },
  {
    id: "cpe301-171",
    chapter: "Chapter 1",
    text: "A null-terminated string ends with:",
    options: [
      { id: "a", text: "A null space" },
      { id: "b", text: "A single byte containing zero" },
      { id: "c", text: "A carriage return" },
      { id: "d", text: "A newline character" },
    ],
    correctOptionId: "b",
    explanation: "Null-terminated strings end with byte 0x00 to mark the end.",
  },
  {
    id: "cpe301-172",
    chapter: "Chapter 1",
    text: "Languages using null-terminated strings include:",
    options: [
      { id: "a", text: "Java and Python" },
      { id: "b", text: "C and C++" },
      { id: "c", text: "C# and Visual Basic" },
      { id: "d", text: "JavaScript and Ruby" },
    ],
    correctOptionId: "b",
    explanation: "C and C++ use null-terminated strings (null byte marks end).",
  },
  {
    id: "cpe301-173",
    chapter: "Chapter 1",
    text: "The ASCII code for 'A' (uppercase) is:",
    options: [
      { id: "a", text: "40h" },
      { id: "b", text: "41h" },
      { id: "c", text: "42h" },
      { id: "d", text: "61h" },
    ],
    correctOptionId: "b",
    explanation: "'A' = 41h (65 decimal). Uppercase A-Z are 65-90.",
  },
  {
    id: "cpe301-174",
    chapter: "Chapter 1",
    text: "The ASCII code for 'a' (lowercase) is:",
    options: [
      { id: "a", text: "51h" },
      { id: "b", text: "60h" },
      { id: "c", text: "61h" },
      { id: "d", text: "41h" },
    ],
    correctOptionId: "c",
    explanation:
      "'a' = 61h (97 decimal). Lowercase a-z are 97-122. Difference of 32 from uppercase.",
  },
  {
    id: "cpe301-175",
    chapter: "Chapter 1",
    text: "ASCII control characters range from:",
    options: [
      { id: "a", text: "0 through 15" },
      { id: "b", text: "0 through 31" },
      { id: "c", text: "32 through 63" },
      { id: "d", text: "128 through 159" },
    ],
    correctOptionId: "b",
    explanation: "Control characters are 0-31 (and 127 DEL). Non-printable.",
  },
  {
    id: "cpe301-176",
    chapter: "Chapter 1",
    text: "ASCII code 8 is:",
    options: [
      { id: "a", text: "Line feed" },
      { id: "b", text: "Carriage return" },
      { id: "c", text: "Backspace" },
      { id: "d", text: "Horizontal tab" },
    ],
    correctOptionId: "c",
    explanation: "ASCII 8 = Backspace (BS).",
  },
  {
    id: "cpe301-177",
    chapter: "Chapter 1",
    text: "ASCII code 10 is:",
    options: [
      { id: "a", text: "Backspace" },
      { id: "b", text: "Carriage return" },
      { id: "c", text: "Line feed" },
      { id: "d", text: "Horizontal tab" },
    ],
    correctOptionId: "c",
    explanation: "ASCII 10 = Line Feed (LF). Unix uses LF alone for newlines.",
  },
  {
    id: "cpe301-178",
    chapter: "Chapter 1",
    text: "ASCII code 13 is:",
    options: [
      { id: "a", text: "Backspace" },
      { id: "b", text: "Line feed" },
      { id: "c", text: "Carriage return" },
      { id: "d", text: "Horizontal tab" },
    ],
    correctOptionId: "c",
    explanation:
      "ASCII 13 = Carriage Return (CR). Windows uses CR+LF for newlines.",
  },
  {
    id: "cpe301-179",
    chapter: "Chapter 1",
    text: "ASCII code 9 is:",
    options: [
      { id: "a", text: "Backspace" },
      { id: "b", text: "Line feed" },
      { id: "c", text: "Carriage return" },
      { id: "d", text: "Horizontal tab" },
    ],
    correctOptionId: "d",
    explanation: "ASCII 9 = Horizontal Tab (HT).",
  },
  {
    id: "cpe301-180",
    chapter: "Chapter 1",
    text: "Windows uses which encoding for text?",
    options: [
      { id: "a", text: "UTF-8" },
      { id: "b", text: "UTF-32" },
      { id: "c", text: "UTF-16" },
      { id: "d", text: "ASCII" },
    ],
    correctOptionId: "c",
    explanation: "Windows uses UTF-16 internally for Unicode strings.",
  },

  // SECTION 8: BOOLEAN EXPRESSIONS (181-210)
  {
    id: "cpe301-181",
    chapter: "Chapter 1",
    text: "Boolean algebra was invented by:",
    options: [
      { id: "a", text: "Isaac Newton" },
      { id: "b", text: "George Boole" },
      { id: "c", text: "Albert Einstein" },
      { id: "d", text: "Bertrand Russell" },
    ],
    correctOptionId: "b",
    explanation:
      "George Boole invented Boolean algebra in the 1800s—foundation of digital computing.",
  },
  {
    id: "cpe301-182",
    chapter: "Chapter 1",
    text: "A Boolean expression implies:",
    options: [
      { id: "a", text: "Numerical calculation" },
      { id: "b", text: "True or false" },
      { id: "c", text: "Text processing" },
      { id: "d", text: "Memory allocation" },
    ],
    correctOptionId: "b",
    explanation: "Boolean expressions evaluate to true or false (1 or 0).",
  },
  {
    id: "cpe301-183",
    chapter: "Chapter 1",
    text: "The NOT operator is:",
    options: [
      { id: "a", text: "Binary" },
      { id: "b", text: "Ternary" },
      { id: "c", text: "Unary" },
      { id: "d", text: "Quaternary" },
    ],
    correctOptionId: "c",
    explanation:
      "NOT is unary (one operand). AND and OR are binary (two operands).",
  },
  {
    id: "cpe301-184",
    chapter: "Chapter 1",
    text: "The AND and OR operators are:",
    options: [
      { id: "a", text: "Unary" },
      { id: "b", text: "Binary" },
      { id: "c", text: "Ternary" },
      { id: "d", text: "Quaternary" },
    ],
    correctOptionId: "b",
    explanation: "AND and OR are binary operators requiring two operands.",
  },
  {
    id: "cpe301-185",
    chapter: "Chapter 1",
    text: "The NOT operation:",
    options: [
      { id: "a", text: "Combines two values" },
      { id: "b", text: "Reverses a boolean value" },
      { id: "c", text: "Checks equality" },
      { id: "d", text: "Compares values" },
    ],
    correctOptionId: "b",
    explanation: "NOT reverses/inverts: true→false, false→true.",
  },
  {
    id: "cpe301-186",
    chapter: "Chapter 1",
    text: "NOT TRUE equals:",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "NOT TRUE = FALSE.",
  },
  {
    id: "cpe301-187",
    chapter: "Chapter 1",
    text: "NOT FALSE equals:",
    options: [
      { id: "a", text: "FALSE" },
      { id: "b", text: "TRUE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "NOT FALSE = TRUE.",
  },
  {
    id: "cpe301-188",
    chapter: "Chapter 1",
    text: "The AND operation outputs true when:",
    options: [
      { id: "a", text: "Either input is true" },
      { id: "b", text: "At least one input is true" },
      { id: "c", text: "Both inputs are true" },
      { id: "d", text: "At least one input is false" },
    ],
    correctOptionId: "c",
    explanation: "AND outputs true only when BOTH inputs are true.",
  },
  {
    id: "cpe301-189",
    chapter: "Chapter 1",
    text: "TRUE AND TRUE equals:",
    options: [
      { id: "a", text: "FALSE" },
      { id: "b", text: "TRUE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "T AND T = T. Only case where AND returns true.",
  },
  {
    id: "cpe301-190",
    chapter: "Chapter 1",
    text: "TRUE AND FALSE equals:",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "T AND F = F. AND requires both inputs true.",
  },
  {
    id: "cpe301-191",
    chapter: "Chapter 1",
    text: "FALSE AND FALSE equals:",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "F AND F = F.",
  },
  {
    id: "cpe301-192",
    chapter: "Chapter 1",
    text: "The OR operation outputs false when:",
    options: [
      { id: "a", text: "At least one input is true" },
      { id: "b", text: "At least one input is false" },
      { id: "c", text: "Both inputs are false" },
      { id: "d", text: "Inputs are different" },
    ],
    correctOptionId: "c",
    explanation: "OR outputs false only when BOTH inputs are false.",
  },
  {
    id: "cpe301-193",
    chapter: "Chapter 1",
    text: "TRUE OR FALSE equals:",
    options: [
      { id: "a", text: "FALSE" },
      { id: "b", text: "TRUE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "T OR F = T. OR returns true if at least one input is true.",
  },
  {
    id: "cpe301-194",
    chapter: "Chapter 1",
    text: "FALSE OR FALSE equals:",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "F OR F = F. Only case where OR returns false.",
  },
  {
    id: "cpe301-195",
    chapter: "Chapter 1",
    text: "FALSE OR TRUE equals:",
    options: [
      { id: "a", text: "FALSE" },
      { id: "b", text: "TRUE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "F OR T = T. OR is commutative.",
  },
  {
    id: "cpe301-196",
    chapter: "Chapter 1",
    text: "The highest operator precedence belongs to:",
    options: [
      { id: "a", text: "AND" },
      { id: "b", text: "OR" },
      { id: "c", text: "NOT" },
      { id: "d", text: "XOR" },
    ],
    correctOptionId: "c",
    explanation: "NOT has highest precedence, then AND, then OR.",
  },
  {
    id: "cpe301-197",
    chapter: "Chapter 1",
    text: "The operator precedence order is:",
    options: [
      { id: "a", text: "AND, OR, NOT" },
      { id: "b", text: "OR, AND, NOT" },
      { id: "c", text: "NOT, AND, OR" },
      { id: "d", text: "NOT, OR, AND" },
    ],
    correctOptionId: "c",
    explanation: "Precedence: NOT (highest), AND, OR (lowest).",
  },
  {
    id: "cpe301-198",
    chapter: "Chapter 1",
    text: "In expression ¬X ∨ Y, the first operation is:",
    options: [
      { id: "a", text: "OR" },
      { id: "b", text: "NOT" },
      { id: "c", text: "Both simultaneously" },
      { id: "d", text: "Depends on context" },
    ],
    correctOptionId: "b",
    explanation: "NOT has higher precedence than OR, so ¬X is computed first.",
  },
  {
    id: "cpe301-199",
    chapter: "Chapter 1",
    text: "11111111 AND 00011100 equals:",
    options: [
      { id: "a", text: "00011100" },
      { id: "b", text: "11111111" },
      { id: "c", text: "11100011" },
      { id: "d", text: "00000000" },
    ],
    correctOptionId: "a",
    explanation: "Bitwise AND with all 1s preserves the original value.",
  },
  {
    id: "cpe301-200",
    chapter: "Chapter 1",
    text: "11101100 OR 00011100 equals:",
    options: [
      { id: "a", text: "11111100" },
      { id: "b", text: "11101100" },
      { id: "c", text: "00011100" },
      { id: "d", text: "00000000" },
    ],
    correctOptionId: "a",
    explanation: "Bitwise OR combines set bits from both operands.",
  },
  {
    id: "cpe301-201",
    chapter: "Chapter 1",
    text: "A truth table shows:",
    options: [
      { id: "a", text: "How to calculate truth values" },
      { id: "b", text: "All possible inputs and outputs" },
      { id: "c", text: "Common Boolean expressions" },
      { id: "d", text: "Logic gate designs" },
    ],
    correctOptionId: "b",
    explanation:
      "Truth table lists all input combinations and corresponding outputs.",
  },
  {
    id: "cpe301-202",
    chapter: "Chapter 1",
    text: "A Boolean function with 2 inputs has ___ rows in its truth table:",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "8" },
    ],
    correctOptionId: "c",
    explanation: "2 inputs → 2^2 = 4 rows (combinations).",
  },
  {
    id: "cpe301-203",
    chapter: "Chapter 1",
    text: "A Boolean function with 3 inputs has ___ rows in its truth table:",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "16" },
    ],
    correctOptionId: "c",
    explanation: "3 inputs → 2^3 = 8 rows.",
  },
  {
    id: "cpe301-204",
    chapter: "Chapter 1",
    text: "A Boolean function with 4 inputs has ___ rows in its truth table:",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "16" },
      { id: "c", text: "32" },
      { id: "d", text: "64" },
    ],
    correctOptionId: "b",
    explanation: "4 inputs → 2^4 = 16 rows.",
  },
  {
    id: "cpe301-205",
    chapter: "Chapter 1",
    text: "A multiplexer uses:",
    options: [
      { id: "a", text: "Multiple inputs to select one output" },
      { id: "b", text: "A selector bit to select output" },
      { id: "c", text: "Multiple outputs from one input" },
      { id: "d", text: "A truth table to generate output" },
    ],
    correctOptionId: "b",
    explanation:
      "A MUX uses selector bits to choose which input passes to output.",
  },
  {
    id: "cpe301-206",
    chapter: "Chapter 1",
    text: "(T ∧ F) ∨ T equals:",
    options: [
      { id: "a", text: "FALSE" },
      { id: "b", text: "TRUE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "(T AND F) = F, then F OR T = T.",
  },
  {
    id: "cpe301-207",
    chapter: "Chapter 1",
    text: "¬(F ∨ T) equals:",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "F OR T = T, then NOT T = F.",
  },
  {
    id: "cpe301-208",
    chapter: "Chapter 1",
    text: "¬F ∨ ¬T equals:",
    options: [
      { id: "a", text: "FALSE" },
      { id: "b", text: "TRUE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "NOT F = T, NOT T = F, then T OR F = T.",
  },
  {
    id: "cpe301-209",
    chapter: "Chapter 1",
    text: "Boolean algebra is used in:",
    options: [
      { id: "a", text: "Only digital circuit design" },
      { id: "b", text: "Only programming" },
      { id: "c", text: "Both digital circuit design and programs" },
      { id: "d", text: "Only mathematics" },
    ],
    correctOptionId: "c",
    explanation:
      "Boolean algebra is fundamental to both circuits and programming.",
  },
  {
    id: "cpe301-210",
    chapter: "Chapter 1",
    text: "The symbol ∧ represents:",
    options: [
      { id: "a", text: "OR operation" },
      { id: "b", text: "NOT operation" },
      { id: "c", text: "AND operation" },
      { id: "d", text: "XOR operation" },
    ],
    correctOptionId: "c",
    explanation: "∧ = AND. ∨ = OR. ¬ = NOT.",
  },

  // SECTION 9: DATA REPRESENTATION TERMINOLOGY (211-225)
  {
    id: "cpe301-211",
    chapter: "Chapter 1",
    text: "A binary integer is:",
    options: [
      { id: "a", text: "Stored in memory in raw format" },
      { id: "b", text: "Always encoded as ASCII" },
      { id: "c", text: "Stored as text" },
      { id: "d", text: "Compressed for storage" },
    ],
    correctOptionId: "a",
    explanation:
      "Binary integers are stored as raw binary—actual bits representing the value.",
  },
  {
    id: "cpe301-212",
    chapter: "Chapter 1",
    text: "Binary integers are stored in multiples of:",
    options: [
      { id: "a", text: "4 bits" },
      { id: "b", text: "8 bits" },
      { id: "c", text: "16 bits" },
      { id: "d", text: "32 bits" },
    ],
    correctOptionId: "b",
    explanation: "Integers are stored in byte multiples: 1, 2, 4, or 8 bytes.",
  },
  {
    id: "cpe301-213",
    chapter: "Chapter 1",
    text: "A digit string is:",
    options: [
      { id: "a", text: "A binary representation" },
      { id: "b", text: "A string of ASCII characters" },
      { id: "c", text: "A memory address" },
      { id: "d", text: "A hexadecimal code" },
    ],
    correctOptionId: "b",
    explanation:
      'Digit string = ASCII characters representing a number ("123" = three characters).',
  },
  {
    id: "cpe301-214",
    chapter: "Chapter 1",
    text: 'The digit string "65" represents ASCII characters:',
    options: [
      { id: "a", text: "'6' and '5'" },
      { id: "b", text: "'A'" },
      { id: "c", text: "The number 65" },
      { id: "d", text: "A binary value" },
    ],
    correctOptionId: "a",
    explanation:
      "\"65\" = two characters '6' and '5', different from binary integer 65.",
  },
  {
    id: "cpe301-215",
    chapter: "Chapter 1",
    text: "The decimal digit string for 65 is:",
    options: [
      { id: "a", text: "0x41" },
      { id: "b", text: "01000001" },
      { id: "c", text: '"65"' },
      { id: "d", text: '"A"' },
    ],
    correctOptionId: "c",
    explanation:
      'Decimal digit string for 65 is "65" (ASCII text representation).',
  },
  {
    id: "cpe301-216",
    chapter: "Chapter 1",
    text: "The hexadecimal digit string for decimal 65 is:",
    options: [
      { id: "a", text: '"41"' },
      { id: "b", text: '"65"' },
      { id: "c", text: '"A"' },
      { id: "d", text: '"40"' },
    ],
    correctOptionId: "a",
    explanation: '65 decimal = 41 hex, so hex digit string is "41".',
  },
  {
    id: "cpe301-217",
    chapter: "Chapter 1",
    text: "The binary digit string for decimal 65 is:",
    options: [
      { id: "a", text: '"01000000"' },
      { id: "b", text: '"01000001"' },
      { id: "c", text: '"01000010"' },
      { id: "d", text: '"01000011"' },
    ],
    correctOptionId: "b",
    explanation: '65 = 01000001 binary, so binary digit string is "01000001".',
  },
  {
    id: "cpe301-218",
    chapter: "Chapter 1",
    text: "The octal digit string for decimal 65 is:",
    options: [
      { id: "a", text: '"100"' },
      { id: "b", text: '"101"' },
      { id: "c", text: '"102"' },
      { id: "d", text: '"103"' },
    ],
    correctOptionId: "b",
    explanation: "65 = 1×64 + 0×8 + 1×1 = 101 octal.",
  },
  {
    id: "cpe301-219",
    chapter: "Chapter 1",
    text: "Octal numbers are base:",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "8" },
      { id: "c", text: "10" },
      { id: "d", text: "16" },
    ],
    correctOptionId: "b",
    explanation: "Octal is base 8, using digits 0-7.",
  },
  {
    id: "cpe301-220",
    chapter: "Chapter 1",
    text: "Octal uses digits:",
    options: [
      { id: "a", text: "0-9" },
      { id: "b", text: "0-7" },
      { id: "c", text: "0-F" },
      { id: "d", text: "1-8" },
    ],
    correctOptionId: "b",
    explanation: "Octal uses 0-7 (eight symbols for base 8).",
  },
  {
    id: "cpe301-221",
    chapter: "Chapter 1",
    text: "Decimal 65 stored in memory as binary is:",
    options: [
      { id: "a", text: "01000000" },
      { id: "b", text: "01000001" },
      { id: "c", text: "01000010" },
      { id: "d", text: "01000011" },
    ],
    correctOptionId: "b",
    explanation: "65 = 01000001 (raw binary value in memory).",
  },
  {
    id: "cpe301-222",
    chapter: "Chapter 1",
    text: "A debugger displays byte 01000001 as:",
    options: [
      { id: "a", text: "01000001" },
      { id: "b", text: "41" },
      { id: "c", text: "65" },
      { id: "d", text: '"A"' },
    ],
    correctOptionId: "b",
    explanation: "Debuggers typically show hex: 01000001 = 41h.",
  },
  {
    id: "cpe301-223",
    chapter: "Chapter 1",
    text: "Byte 01000001 displayed in video memory shows:",
    options: [
      { id: "a", text: "01000001" },
      { id: "b", text: "41" },
      { id: "c", text: "65" },
      { id: "d", text: 'Letter "A"' },
    ],
    correctOptionId: "d",
    explanation: "Video hardware interprets 65 as ASCII 'A' and displays it.",
  },
  {
    id: "cpe301-224",
    chapter: "Chapter 1",
    text: "Number interpretation depends on:",
    options: [
      { id: "a", text: "Its numeric value" },
      { id: "b", text: "The context in which it appears" },
      { id: "c", text: "Its size" },
      { id: "d", text: "The CPU used" },
    ],
    correctOptionId: "b",
    explanation:
      "Context determines meaning: same byte could be number, character, or opcode.",
  },
  {
    id: "cpe301-225",
    chapter: "Chapter 1",
    text: "01000001 is the ASCII code for:",
    options: [
      { id: "a", text: "Character '1'" },
      { id: "b", text: 'Letter "a"' },
      { id: "c", text: 'Letter "A"' },
      { id: "d", text: 'Digit "0"' },
    ],
    correctOptionId: "c",
    explanation: "01000001 = 65 = ASCII 'A'.",
  },

  // SECTION 10: BINARY SUBTRACTION (226-235)
  {
    id: "cpe301-226",
    chapter: "Chapter 1",
    text: "A simpler method of binary subtraction is:",
    options: [
      { id: "a", text: "Reverse the subtrahend and subtract" },
      { id: "b", text: "Reverse the subtrahend sign and add" },
      { id: "c", text: "Use only borrowing" },
      { id: "d", text: "Use a calculator" },
    ],
    correctOptionId: "b",
    explanation: "A - B = A + (-B). Negate B using two's complement and add.",
  },
  {
    id: "cpe301-227",
    chapter: "Chapter 1",
    text: "Binary 01101 - 00111 equals:",
    options: [
      { id: "a", text: "00100" },
      { id: "b", text: "00110" },
      { id: "c", text: "00111" },
      { id: "d", text: "01000" },
    ],
    correctOptionId: "b",
    explanation: "01101 (13) - 00111 (7) = 00110 (6).",
  },
  {
    id: "cpe301-228",
    chapter: "Chapter 1",
    text: "Binary 0 - 1 occurs when:",
    options: [
      { id: "a", text: "Adding one and zero" },
      { id: "b", text: "Subtracting one from zero" },
      { id: "c", text: "Borrowing from next position" },
      { id: "d", text: "The result is undefined" },
    ],
    correctOptionId: "c",
    explanation: "0 - 1 requires borrowing from the next higher bit position.",
  },
  {
    id: "cpe301-229",
    chapter: "Chapter 1",
    text: "Binary 13 - 7 equals:",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "7" },
    ],
    correctOptionId: "c",
    explanation: "13 - 7 = 6 (same in binary or decimal).",
  },
  {
    id: "cpe301-230",
    chapter: "Chapter 1",
    text: "Two's complement subtraction needs:",
    options: [
      { id: "a", text: "Extra adders" },
      { id: "b", text: "Extra bit for sign" },
      { id: "c", text: "Special logic" },
      { id: "d", text: "Additional memory" },
    ],
    correctOptionId: "b",
    explanation:
      "Need an extra bit for sign to handle signed arithmetic properly.",
  },
  {
    id: "cpe301-231",
    chapter: "Chapter 1",
    text: "In two's complement subtraction, ignore:",
    options: [
      { id: "a", text: "The sign bit" },
      { id: "b", text: "The lowest bits" },
      { id: "c", text: "Carry out of highest bit" },
      { id: "d", text: "Negative values" },
    ],
    correctOptionId: "c",
    explanation: "Ignore carry-out from the highest bit in two's complement.",
  },
  {
    id: "cpe301-232",
    chapter: "Chapter 1",
    text: "Binary 00001101 - 00000111 equals:",
    options: [
      { id: "a", text: "00000101" },
      { id: "b", text: "00000110" },
      { id: "c", text: "00000111" },
      { id: "d", text: "00001000" },
    ],
    correctOptionId: "b",
    explanation: "00001101 (13) - 00000111 (7) = 00000110 (6).",
  },
  {
    id: "cpe301-233",
    chapter: "Chapter 1",
    text: "Borrowing changes 10 (binary) to:",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2 (decimal)" },
      { id: "c", text: "10 (decimal)" },
      { id: "d", text: "100" },
    ],
    correctOptionId: "b",
    explanation:
      "Binary 10 = decimal 2. Borrowing from this gives value 2 to work with.",
  },
  {
    id: "cpe301-234",
    chapter: "Chapter 1",
    text: "Two's complement subtraction advantage:",
    options: [
      { id: "a", text: "Uses less memory" },
      { id: "b", text: "Uses same circuitry as addition" },
      { id: "c", text: "Is faster on all processors" },
      { id: "d", text: "Eliminates the need for CPU" },
    ],
    correctOptionId: "b",
    explanation: "Same adder hardware handles both addition and subtraction.",
  },
  {
    id: "cpe301-235",
    chapter: "Chapter 1",
    text: "A - B using two's complement is calculated as:",
    options: [
      { id: "a", text: "A - (-B)" },
      { id: "b", text: "A + B" },
      { id: "c", text: "A + (-B)" },
      { id: "d", text: "-A + (-B)" },
    ],
    correctOptionId: "c",
    explanation: "A - B = A + (two's complement of B) = A + (-B).",
  },

  // SECTION 11: ADDITIONAL PRACTICE QUESTIONS (236-260)
  {
    id: "cpe301-236",
    chapter: "Chapter 1",
    text: "2^5 equals:",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "32" },
      { id: "c", text: "64" },
      { id: "d", text: "128" },
    ],
    correctOptionId: "b",
    explanation: "2^5 = 32.",
  },
  {
    id: "cpe301-237",
    chapter: "Chapter 1",
    text: "2^6 equals:",
    options: [
      { id: "a", text: "32" },
      { id: "b", text: "64" },
      { id: "c", text: "128" },
      { id: "d", text: "256" },
    ],
    correctOptionId: "b",
    explanation: "2^6 = 64.",
  },
  {
    id: "cpe301-238",
    chapter: "Chapter 1",
    text: "2^7 equals:",
    options: [
      { id: "a", text: "64" },
      { id: "b", text: "128" },
      { id: "c", text: "256" },
      { id: "d", text: "512" },
    ],
    correctOptionId: "b",
    explanation: "2^7 = 128.",
  },
  {
    id: "cpe301-239",
    chapter: "Chapter 1",
    text: "The hexadecimal representation of decimal 100 is:",
    options: [
      { id: "a", text: "62" },
      { id: "b", text: "64" },
      { id: "c", text: "66" },
      { id: "d", text: "68" },
    ],
    correctOptionId: "b",
    explanation: "100 = 6×16 + 4 = 64h.",
  },
  {
    id: "cpe301-240",
    chapter: "Chapter 1",
    text: "The decimal representation of hexadecimal 64 is:",
    options: [
      { id: "a", text: "64" },
      { id: "b", text: "96" },
      { id: "c", text: "100" },
      { id: "d", text: "104" },
    ],
    correctOptionId: "c",
    explanation: "Hex 64 = 6×16 + 4 = 100 decimal.",
  },
  {
    id: "cpe301-241",
    chapter: "Chapter 1",
    text: "The binary representation of hexadecimal 3 is:",
    options: [
      { id: "a", text: "0010" },
      { id: "b", text: "0011" },
      { id: "c", text: "0100" },
      { id: "d", text: "0101" },
    ],
    correctOptionId: "b",
    explanation: "Hex 3 = binary 0011.",
  },
  {
    id: "cpe301-242",
    chapter: "Chapter 1",
    text: "The binary representation of hexadecimal 7 is:",
    options: [
      { id: "a", text: "0110" },
      { id: "b", text: "0111" },
      { id: "c", text: "1000" },
      { id: "d", text: "1001" },
    ],
    correctOptionId: "b",
    explanation: "Hex 7 = binary 0111.",
  },
  {
    id: "cpe301-243",
    chapter: "Chapter 1",
    text: "The binary representation of hexadecimal 9 is:",
    options: [
      { id: "a", text: "1001" },
      { id: "b", text: "1000" },
      { id: "c", text: "1010" },
      { id: "d", text: "1011" },
    ],
    correctOptionId: "a",
    explanation: "Hex 9 = binary 1001.",
  },
  {
    id: "cpe301-244",
    chapter: "Chapter 1",
    text: "A nibble consists of:",
    options: [
      { id: "a", text: "1 bit" },
      { id: "b", text: "2 bits" },
      { id: "c", text: "4 bits" },
      { id: "d", text: "8 bits" },
    ],
    correctOptionId: "c",
    explanation: "A nibble = 4 bits = half a byte = one hex digit.",
  },
  {
    id: "cpe301-245",
    chapter: "Chapter 1",
    text: "Number of nibbles in a byte:",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "8" },
    ],
    correctOptionId: "b",
    explanation: "1 byte = 8 bits = 2 nibbles (2 hex digits).",
  },
  {
    id: "cpe301-246",
    chapter: "Chapter 1",
    text: "The formula dec = (D₁ × B¹) + (D₀ × B⁰) converts:",
    options: [
      { id: "a", text: "Decimal to binary" },
      { id: "b", text: "Any base to decimal" },
      { id: "c", text: "Binary to hexadecimal" },
      { id: "d", text: "Decimal to any base" },
    ],
    correctOptionId: "b",
    explanation:
      "This positional notation formula converts any base B to decimal.",
  },
  {
    id: "cpe301-247",
    chapter: "Chapter 1",
    text: "The decimal value of binary 11001010 is:",
    options: [
      { id: "a", text: "196" },
      { id: "b", text: "200" },
      { id: "c", text: "202" },
      { id: "d", text: "204" },
    ],
    correctOptionId: "c",
    explanation: "11001010 = 128 + 64 + 8 + 2 = 202.",
  },
  {
    id: "cpe301-248",
    chapter: "Chapter 1",
    text: "The decimal value of binary 11110000 is:",
    options: [
      { id: "a", text: "225" },
      { id: "b", text: "230" },
      { id: "c", text: "235" },
      { id: "d", text: "240" },
    ],
    correctOptionId: "d",
    explanation: "11110000 = 128 + 64 + 32 + 16 = 240.",
  },
  {
    id: "cpe301-249",
    chapter: "Chapter 1",
    text: "The hexadecimal representation of binary 11001010 is:",
    options: [
      { id: "a", text: "CA" },
      { id: "b", text: "CC" },
      { id: "c", text: "CD" },
      { id: "d", text: "CE" },
    ],
    correctOptionId: "a",
    explanation: "1100 = C, 1010 = A → CA.",
  },
  {
    id: "cpe301-250",
    chapter: "Chapter 1",
    text: "The hexadecimal representation of binary 11110000 is:",
    options: [
      { id: "a", text: "EE" },
      { id: "b", text: "EF" },
      { id: "c", text: "F0" },
      { id: "d", text: "FF" },
    ],
    correctOptionId: "c",
    explanation: "1111 = F, 0000 = 0 → F0.",
  },
  {
    id: "cpe301-251",
    chapter: "Chapter 1",
    text: "One zettabyte equals 2 to the power of:",
    options: [
      { id: "a", text: "60" },
      { id: "b", text: "65" },
      { id: "c", text: "70" },
      { id: "d", text: "75" },
    ],
    correctOptionId: "c",
    explanation: "1 ZB = 2^70 bytes. Pattern: EB=60, ZB=70, YB=80.",
  },
  {
    id: "cpe301-252",
    chapter: "Chapter 1",
    text: "One yottabyte equals 2 to the power of:",
    options: [
      { id: "a", text: "70" },
      { id: "b", text: "75" },
      { id: "c", text: "80" },
      { id: "d", text: "85" },
    ],
    correctOptionId: "c",
    explanation: "1 YB = 2^80 bytes (largest standard unit).",
  },
  {
    id: "cpe301-253",
    chapter: "Chapter 1",
    text: "The ASCII code for space is:",
    options: [
      { id: "a", text: "1Fh" },
      { id: "b", text: "20h" },
      { id: "c", text: "21h" },
      { id: "d", text: "2Ah" },
    ],
    correctOptionId: "b",
    explanation: "Space = 20h (32 decimal). First printable character.",
  },
  {
    id: "cpe301-254",
    chapter: "Chapter 1",
    text: "The ASCII code for digit '0' is:",
    options: [
      { id: "a", text: "2Eh" },
      { id: "b", text: "30h" },
      { id: "c", text: "38h" },
      { id: "d", text: "39h" },
    ],
    correctOptionId: "b",
    explanation: "'0' = 30h (48 decimal). Digits 0-9 are 48-57.",
  },
  {
    id: "cpe301-255",
    chapter: "Chapter 1",
    text: "The ASCII code for digit '9' is:",
    options: [
      { id: "a", text: "38h" },
      { id: "b", text: "39h" },
      { id: "c", text: "3Ah" },
      { id: "d", text: "3Bh" },
    ],
    correctOptionId: "b",
    explanation: "'9' = 39h (57 decimal).",
  },
  {
    id: "cpe301-256",
    chapter: "Chapter 1",
    text: "The difference between ASCII 'A' and 'a' is:",
    options: [
      { id: "a", text: "10h" },
      { id: "b", text: "1Fh" },
      { id: "c", text: "20h" },
      { id: "d", text: "30h" },
    ],
    correctOptionId: "c",
    explanation: "'a' - 'A' = 97 - 65 = 32 = 20h.",
  },
  {
    id: "cpe301-257",
    chapter: "Chapter 1",
    text: "TRUE XOR FALSE equals:",
    options: [
      { id: "a", text: "FALSE" },
      { id: "b", text: "TRUE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "XOR = true when inputs differ. T XOR F = T.",
  },
  {
    id: "cpe301-258",
    chapter: "Chapter 1",
    text: "TRUE XOR TRUE equals:",
    options: [
      { id: "a", text: "TRUE" },
      { id: "b", text: "FALSE" },
      { id: "c", text: "UNDEFINED" },
      { id: "d", text: "NULL" },
    ],
    correctOptionId: "b",
    explanation: "XOR = false when inputs are same. T XOR T = F.",
  },
  {
    id: "cpe301-259",
    chapter: "Chapter 1",
    text: "XOR outputs TRUE when:",
    options: [
      { id: "a", text: "Both inputs are same" },
      { id: "b", text: "Both inputs are true" },
      { id: "c", text: "Inputs are different" },
      { id: "d", text: "Both inputs are false" },
    ],
    correctOptionId: "c",
    explanation: "XOR (exclusive OR) outputs true only when inputs differ.",
  },
  {
    id: "cpe301-260",
    chapter: "Chapter 1",
    text: "The symbol ∨ represents:",
    options: [
      { id: "a", text: "AND operation" },
      { id: "b", text: "NOT operation" },
      { id: "c", text: "OR operation" },
      { id: "d", text: "XOR operation" },
    ],
    correctOptionId: "c",
    explanation: "∨ = OR. (∧ = AND, ¬ = NOT, ⊕ = XOR).",
  },
];

// ============================================================
// ASSEMBLY - CHAPTERS 2-3 (200 QUESTIONS)
// ============================================================

const assemblyChapters23: Question[] = [
  // CHAPTER 2: x86 PROCESSOR ARCHITECTURE
  // Section 2.1: General Concepts (1-10)
  {
    id: "asm-1",
    chapter: "Chapter 2",
    text: "What are the three basic operations in the instruction execution cycle?",
    options: [
      { id: "a", text: "Load, Store, Execute" },
      { id: "b", text: "Fetch, Decode, Execute" },
      { id: "c", text: "Read, Write, Process" },
      { id: "d", text: "Input, Process, Output" },
    ],
    correctOptionId: "b",
    explanation:
      "The instruction execution cycle consists of three basic operations: Fetch (retrieve instruction from memory), Decode (interpret the instruction), and Execute (perform the operation).",
  },
  {
    id: "asm-2",
    chapter: "Chapter 2",
    text: "Which component of the CPU performs arithmetic operations such as addition and subtraction?",
    options: [
      { id: "a", text: "Control Unit (CU)" },
      { id: "b", text: "Instruction Pointer (IP)" },
      { id: "c", text: "Arithmetic Logic Unit (ALU)" },
      { id: "d", text: "Memory Management Unit (MMU)" },
    ],
    correctOptionId: "c",
    explanation:
      "The Arithmetic Logic Unit (ALU) is responsible for performing arithmetic and logical operations.",
  },
  {
    id: "asm-3",
    chapter: "Chapter 2",
    text: "What is the purpose of the clock in a CPU?",
    options: [
      { id: "a", text: "To display the current time" },
      { id: "b", text: "To synchronize internal operations of the CPU" },
      { id: "c", text: "To count the number of instructions executed" },
      { id: "d", text: "To manage power consumption" },
    ],
    correctOptionId: "b",
    explanation:
      "The clock generates timing signals that synchronize all internal CPU operations.",
  },
  {
    id: "asm-4",
    chapter: "Chapter 2",
    text: "How many clock cycles does reading a single value from memory typically require?",
    options: [
      { id: "a", text: "1 clock cycle" },
      { id: "b", text: "2 clock cycles" },
      { id: "c", text: "4 clock cycles" },
      { id: "d", text: "8 clock cycles" },
    ],
    correctOptionId: "c",
    explanation:
      "Memory access typically requires around 4 clock cycles due to the speed difference between CPU and memory.",
  },
  {
    id: "asm-5",
    chapter: "Chapter 2",
    text: "What is a bus in computer architecture?",
    options: [
      { id: "a", text: "A vehicle for transporting data" },
      { id: "b", text: "A group of parallel wires that transfer data" },
      { id: "c", text: "A type of memory storage" },
      { id: "d", text: "A processing unit" },
    ],
    correctOptionId: "b",
    explanation:
      "A bus is a group of parallel electrical conductors (wires) used to transfer data between computer components.",
  },
  {
    id: "asm-6",
    chapter: "Chapter 2",
    text: "Which bus holds the addresses of instructions and data?",
    options: [
      { id: "a", text: "Data bus" },
      { id: "b", text: "Control bus" },
      { id: "c", text: "Address bus" },
      { id: "d", text: "I/O bus" },
    ],
    correctOptionId: "c",
    explanation:
      "The address bus carries memory addresses from the processor to memory and I/O devices.",
  },
  {
    id: "asm-7",
    chapter: "Chapter 2",
    text: "What is a machine cycle also known as?",
    options: [
      { id: "a", text: "Instruction cycle" },
      { id: "b", text: "Clock cycle" },
      { id: "c", text: "Memory cycle" },
      { id: "d", text: "Bus cycle" },
    ],
    correctOptionId: "b",
    explanation:
      "A machine cycle is also called a clock cycle - the time between two pulses of the system clock.",
  },
  {
    id: "asm-8",
    chapter: "Chapter 2",
    text: "If a clock oscillates at 1 GHz, what is the duration of one clock cycle?",
    options: [
      { id: "a", text: "1 second" },
      { id: "b", text: "1 millisecond" },
      { id: "c", text: "1 microsecond" },
      { id: "d", text: "1 nanosecond" },
    ],
    correctOptionId: "d",
    explanation:
      "1 GHz = 1 billion cycles per second, so each cycle = 1/1,000,000,000 second = 1 nanosecond.",
  },
  {
    id: "asm-9",
    chapter: "Chapter 2",
    text: "What are wait states in the instruction execution cycle?",
    options: [
      { id: "a", text: "Pauses for user input" },
      {
        id: "b",
        text: "Empty clock cycles due to speed differences between CPU and memory",
      },
      { id: "c", text: "Periods of system hibernation" },
      { id: "d", text: "Interrupts from the operating system" },
    ],
    correctOptionId: "b",
    explanation:
      "Wait states are empty clock cycles inserted when the CPU must wait for slower memory or I/O devices.",
  },
  {
    id: "asm-10",
    chapter: "Chapter 2",
    text: "Which step in loading and executing a program involves the operating system searching for the program's filename?",
    options: [
      { id: "a", text: "Step 1" },
      { id: "b", text: "Step 2" },
      { id: "c", text: "Step 3" },
      { id: "d", text: "Step 4" },
    ],
    correctOptionId: "a",
    explanation:
      "Step 1 of loading a program is when the OS searches for the program filename in the directory.",
  },

  // Section 2.2: 32-Bit x86 Processors (11-20)
  {
    id: "asm-11",
    chapter: "Chapter 2",
    text: "What are the three primary modes of operation for x86 processors?",
    options: [
      { id: "a", text: "User, Kernel, Supervisor" },
      { id: "b", text: "Real, Virtual, Protected" },
      { id: "c", text: "Protected, Real-address, System management" },
      { id: "d", text: "Execution, Protected, Virtual" },
    ],
    correctOptionId: "c",
    explanation:
      "The three primary modes are Protected mode, Real-address mode, and System Management Mode (SMM).",
  },
  {
    id: "asm-12",
    chapter: "Chapter 2",
    text: "In which mode does the processor run MS-DOS programs?",
    options: [
      { id: "a", text: "Protected mode" },
      { id: "b", text: "Real-address mode" },
      { id: "c", text: "System management mode" },
      { id: "d", text: "Virtual-8086 mode" },
    ],
    correctOptionId: "b",
    explanation:
      "Real-address mode is used to run MS-DOS programs and provides direct access to system memory and hardware.",
  },
  {
    id: "asm-13",
    chapter: "Chapter 2",
    text: "What is the maximum amount of memory accessible in Real-address mode?",
    options: [
      { id: "a", text: "64 KB" },
      { id: "b", text: "640 KB" },
      { id: "c", text: "1 MB" },
      { id: "d", text: "4 GB" },
    ],
    correctOptionId: "c",
    explanation:
      "Real-address mode can access up to 1 MB of memory using 20-bit addresses.",
  },
  {
    id: "asm-14",
    chapter: "Chapter 2",
    text: "Which mode allows the processor to directly execute real-address mode software such as MS-DOS programs while in Protected mode?",
    options: [
      { id: "a", text: "System management mode" },
      { id: "b", text: "Virtual-8086 mode" },
      { id: "c", text: "Real-address mode" },
      { id: "d", text: "Compatibility mode" },
    ],
    correctOptionId: "b",
    explanation:
      "Virtual-8086 mode allows running real-mode programs within the protected mode environment.",
  },
  {
    id: "asm-15",
    chapter: "Chapter 2",
    text: "What is the primary purpose of System Management Mode (SMM)?",
    options: [
      { id: "a", text: "To run legacy DOS applications" },
      { id: "b", text: "To implement operating system functions" },
      { id: "c", text: "To implement power management and system security" },
      { id: "d", text: "To provide virtual memory support" },
    ],
    correctOptionId: "c",
    explanation:
      "SMM provides an operating system with mechanisms for power management and system security.",
  },
  {
    id: "asm-16",
    chapter: "Chapter 2",
    text: "How much linear address space can a program access in Protected mode?",
    options: [
      { id: "a", text: "1 MB" },
      { id: "b", text: "16 MB" },
      { id: "c", text: "4 GB" },
      { id: "d", text: "1 TB" },
    ],
    correctOptionId: "c",
    explanation:
      "Protected mode allows access to 4 GB of linear address space using 32-bit addresses.",
  },
  {
    id: "asm-17",
    chapter: "Chapter 2",
    text: "Which Intel processor was the first to support Protected mode?",
    options: [
      { id: "a", text: "Intel 8086" },
      { id: "b", text: "Intel 80286" },
      { id: "c", text: "Intel 80386" },
      { id: "d", text: "Intel 80486" },
    ],
    correctOptionId: "b",
    explanation:
      "The Intel 80286 introduced Protected mode with memory protection features.",
  },
  {
    id: "asm-18",
    chapter: "Chapter 2",
    text: "What does the term 'flat segmentation model' mean in Protected mode?",
    options: [
      { id: "a", text: "All segments are the same size" },
      {
        id: "b",
        text: "All segments are mapped to the entire 32-bit physical address space",
      },
      { id: "c", text: "Memory is divided into equal segments" },
      { id: "d", text: "Segments cannot overlap" },
    ],
    correctOptionId: "b",
    explanation:
      "In the flat model, all segments are mapped to the entire 32-bit address space, effectively eliminating segmentation.",
  },
  {
    id: "asm-19",
    chapter: "Chapter 2",
    text: "In Protected mode, which mechanism prevents application programs from accessing system data?",
    options: [
      { id: "a", text: "Encryption" },
      { id: "b", text: "Segment protection" },
      { id: "c", text: "Memory locks" },
      { id: "d", text: "Virtual addressing" },
    ],
    correctOptionId: "b",
    explanation:
      "Segment protection prevents programs from accessing data in other segments, protecting system resources.",
  },
  {
    id: "asm-20",
    chapter: "Chapter 2",
    text: "What is paging in the context of Protected mode?",
    options: [
      { id: "a", text: "A technique to print documents" },
      {
        id: "b",
        text: "A mechanism that allows a segment to be divided into 4096-byte blocks of memory",
      },
      { id: "c", text: "A method to organize disk storage" },
      { id: "d", text: "A way to number memory locations" },
    ],
    correctOptionId: "b",
    explanation:
      "Paging divides memory into 4 KB (4096-byte) pages for virtual memory management.",
  },

  // Section 2.3: 64-Bit x86-64 Processors (21-25)
  {
    id: "asm-21",
    chapter: "Chapter 2",
    text: "How much linear address space can a 64-bit processor theoretically access?",
    options: [
      { id: "a", text: "4 GB" },
      { id: "b", text: "16 GB" },
      { id: "c", text: "16 exabytes" },
      { id: "d", text: "Unlimited" },
    ],
    correctOptionId: "c",
    explanation:
      "64-bit processors can theoretically address 2^64 bytes = 16 exabytes of memory.",
  },
  {
    id: "asm-22",
    chapter: "Chapter 2",
    text: "What is the native mode called in 64-bit processors?",
    options: [
      { id: "a", text: "64-bit mode" },
      { id: "b", text: "Long mode" },
      { id: "c", text: "Extended mode" },
      { id: "d", text: "Hyper mode" },
    ],
    correctOptionId: "b",
    explanation: "Long mode is the native mode for 64-bit x86-64 processors.",
  },
  {
    id: "asm-23",
    chapter: "Chapter 2",
    text: "In 64-bit mode, what is the default operand size?",
    options: [
      { id: "a", text: "16 bits" },
      { id: "b", text: "32 bits" },
      { id: "c", text: "64 bits" },
      { id: "d", text: "128 bits" },
    ],
    correctOptionId: "b",
    explanation:
      "In 64-bit mode, the default operand size is 32 bits unless explicitly overridden.",
  },
  {
    id: "asm-24",
    chapter: "Chapter 2",
    text: "How many general-purpose registers are available in 64-bit mode?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "12" },
      { id: "c", text: "16" },
      { id: "d", text: "32" },
    ],
    correctOptionId: "c",
    explanation: "64-bit mode provides 16 general-purpose registers (RAX-R15).",
  },
  {
    id: "asm-25",
    chapter: "Chapter 2",
    text: "What is compatibility mode in x86-64 processors?",
    options: [
      { id: "a", text: "A mode that runs 16-bit programs" },
      {
        id: "b",
        text: "A sub-mode of Long mode that permits legacy 32-bit programs to run",
      },
      { id: "c", text: "A mode for backward compatibility with 8086" },
      { id: "d", text: "A mode that emulates other processor types" },
    ],
    correctOptionId: "b",
    explanation:
      "Compatibility mode is a sub-mode of Long mode that allows 32-bit applications to run on 64-bit systems.",
  },

  // Section 2.4: Components of an x86 Microcomputer (26-35)
  {
    id: "asm-26",
    chapter: "Chapter 2",
    text: "What is the motherboard?",
    options: [
      { id: "a", text: "The main processing chip" },
      { id: "b", text: "The main circuit board of the computer" },
      { id: "c", text: "The power supply unit" },
      { id: "d", text: "The graphics card" },
    ],
    correctOptionId: "b",
    explanation:
      "The motherboard is the main printed circuit board that connects all computer components.",
  },
  {
    id: "asm-27",
    chapter: "Chapter 2",
    text: "What does the chipset do in a microcomputer?",
    options: [
      { id: "a", text: "Provides power to the CPU" },
      { id: "b", text: "Contains the BIOS" },
      {
        id: "c",
        text: "Controls the flow of data between CPU, memory, and peripherals",
      },
      { id: "d", text: "Stores the operating system" },
    ],
    correctOptionId: "c",
    explanation:
      "The chipset manages data flow and communication between the processor, memory, and peripheral devices.",
  },
  {
    id: "asm-28",
    chapter: "Chapter 2",
    text: "What is PCI Express primarily used for?",
    options: [
      { id: "a", text: "Connecting keyboards and mice" },
      { id: "b", text: "Connecting high-speed video cards and hard drives" },
      { id: "c", text: "Connecting printers" },
      { id: "d", text: "Connecting monitors" },
    ],
    correctOptionId: "b",
    explanation:
      "PCI Express is a high-speed expansion bus used for graphics cards, SSDs, and other high-bandwidth devices.",
  },
  {
    id: "asm-29",
    chapter: "Chapter 2",
    text: "What type of memory is the CPU cache?",
    options: [
      { id: "a", text: "ROM" },
      { id: "b", text: "SRAM (Static RAM)" },
      { id: "c", text: "DRAM (Dynamic RAM)" },
      { id: "d", text: "Flash memory" },
    ],
    correctOptionId: "b",
    explanation:
      "CPU cache uses SRAM, which is faster but more expensive than DRAM.",
  },
  {
    id: "asm-30",
    chapter: "Chapter 2",
    text: "What is the difference between L1 and L2 cache?",
    options: [
      { id: "a", text: "L1 is faster but smaller than L2" },
      { id: "b", text: "L2 is faster but smaller than L1" },
      { id: "c", text: "L1 is for data, L2 is for instructions" },
      { id: "d", text: "There is no difference" },
    ],
    correctOptionId: "a",
    explanation:
      "L1 cache is the fastest and smallest, located closest to the CPU cores. L2 is larger but slightly slower.",
  },
  {
    id: "asm-31",
    chapter: "Chapter 2",
    text: "What does USB stand for?",
    options: [
      { id: "a", text: "Universal System Bus" },
      { id: "b", text: "Universal Serial Bus" },
      { id: "c", text: "Unified Storage Bus" },
      { id: "d", text: "Universal Synchronous Bus" },
    ],
    correctOptionId: "b",
    explanation:
      "USB stands for Universal Serial Bus, a standard for connecting peripherals.",
  },
  {
    id: "asm-32",
    chapter: "Chapter 2",
    text: "Which Intel chipset component handles I/O functions?",
    options: [
      { id: "a", text: "Northbridge" },
      { id: "b", text: "Memory Controller Hub" },
      { id: "c", text: "I/O Controller Hub (ICH)" },
      { id: "d", text: "Graphics Controller" },
    ],
    correctOptionId: "c",
    explanation:
      "The I/O Controller Hub (ICH), also called Southbridge, manages I/O functions and peripheral connections.",
  },
  {
    id: "asm-33",
    chapter: "Chapter 2",
    text: "What is the purpose of the system clock generator?",
    options: [
      { id: "a", text: "To keep track of time" },
      {
        id: "b",
        text: "To provide timing signals to synchronize system components",
      },
      { id: "c", text: "To generate random numbers" },
      { id: "d", text: "To control the power supply" },
    ],
    correctOptionId: "b",
    explanation:
      "The clock generator produces timing signals that synchronize all system operations.",
  },
  {
    id: "asm-34",
    chapter: "Chapter 2",
    text: "What does CMOS stand for in the context of BIOS?",
    options: [
      { id: "a", text: "Central Memory Operating System" },
      { id: "b", text: "Complementary Metal-Oxide Semiconductor" },
      { id: "c", text: "Computer Memory Output System" },
      { id: "d", text: "Central Motherboard Operating Sequence" },
    ],
    correctOptionId: "b",
    explanation:
      "CMOS refers to the low-power memory technology used to store BIOS settings.",
  },
  {
    id: "asm-35",
    chapter: "Chapter 2",
    text: "What information is typically stored in CMOS memory?",
    options: [
      { id: "a", text: "The operating system" },
      {
        id: "b",
        text: "System configuration information and hardware settings",
      },
      { id: "c", text: "User documents" },
      { id: "d", text: "Application programs" },
    ],
    correctOptionId: "b",
    explanation:
      "CMOS stores system configuration data like date/time, boot order, and hardware settings.",
  },

  // Section 2.5: Input-Output System (36-45)
  {
    id: "asm-36",
    chapter: "Chapter 2",
    text: "What are the three levels of I/O access in PC systems?",
    options: [
      { id: "a", text: "Hardware, Firmware, Software" },
      { id: "b", text: "High-level, Mid-level, Low-level" },
      { id: "c", text: "Application, Operating System, BIOS" },
      { id: "d", text: "User, Kernel, Driver" },
    ],
    correctOptionId: "c",
    explanation:
      "The three levels are: high-level language functions, OS functions, and BIOS functions.",
  },
  {
    id: "asm-37",
    chapter: "Chapter 2",
    text: "Which level of I/O provides the fastest access but requires detailed hardware knowledge?",
    options: [
      { id: "a", text: "High-level language functions" },
      { id: "b", text: "Operating system functions" },
      { id: "c", text: "BIOS functions" },
      { id: "d", text: "Hardware level" },
    ],
    correctOptionId: "d",
    explanation:
      "Direct hardware-level access is fastest but requires detailed knowledge of hardware ports and protocols.",
  },
  {
    id: "asm-38",
    chapter: "Chapter 2",
    text: "What does BIOS stand for?",
    options: [
      { id: "a", text: "Basic Integrated Operating System" },
      { id: "b", text: "Binary Input/Output System" },
      { id: "c", text: "Basic Input/Output System" },
      { id: "d", text: "Built-In Operating System" },
    ],
    correctOptionId: "c",
    explanation:
      "BIOS stands for Basic Input/Output System, firmware that initializes hardware during boot.",
  },
  {
    id: "asm-39",
    chapter: "Chapter 2",
    text: "How are BIOS functions typically called in assembly language?",
    options: [
      { id: "a", text: "Using CALL instructions" },
      { id: "b", text: "Using software interrupts (INT instruction)" },
      { id: "c", text: "Using jump instructions" },
      { id: "d", text: "Using procedure calls" },
    ],
    correctOptionId: "b",
    explanation:
      "BIOS functions are invoked using software interrupts (INT instruction) with specific interrupt numbers.",
  },
  {
    id: "asm-40",
    chapter: "Chapter 2",
    text: "Which BIOS interrupt is commonly used for video services?",
    options: [
      { id: "a", text: "INT 10h" },
      { id: "b", text: "INT 16h" },
      { id: "c", text: "INT 21h" },
      { id: "d", text: "INT 13h" },
    ],
    correctOptionId: "a",
    explanation:
      "INT 10h provides video services like setting video mode and displaying characters.",
  },
  {
    id: "asm-41",
    chapter: "Chapter 2",
    text: "Which BIOS interrupt handles keyboard services?",
    options: [
      { id: "a", text: "INT 10h" },
      { id: "b", text: "INT 16h" },
      { id: "c", text: "INT 21h" },
      { id: "d", text: "INT 13h" },
    ],
    correctOptionId: "b",
    explanation: "INT 16h provides keyboard services for reading keystrokes.",
  },
  {
    id: "asm-42",
    chapter: "Chapter 2",
    text: "In MS-DOS, which interrupt number is used for most DOS services?",
    options: [
      { id: "a", text: "INT 10h" },
      { id: "b", text: "INT 16h" },
      { id: "c", text: "INT 21h" },
      { id: "d", text: "INT 13h" },
    ],
    correctOptionId: "c",
    explanation:
      "INT 21h is the main DOS interrupt providing file I/O, console I/O, and system services.",
  },
  {
    id: "asm-43",
    chapter: "Chapter 2",
    text: "What is the primary advantage of using high-level language I/O functions?",
    options: [
      { id: "a", text: "Faster execution" },
      { id: "b", text: "Direct hardware control" },
      { id: "c", text: "Portability across platforms" },
      { id: "d", text: "Lower memory usage" },
    ],
    correctOptionId: "c",
    explanation:
      "High-level I/O functions are portable across different platforms and easier to use.",
  },
  {
    id: "asm-44",
    chapter: "Chapter 2",
    text: "What is the main disadvantage of using BIOS-level I/O?",
    options: [
      { id: "a", text: "It's too fast" },
      {
        id: "b",
        text: "It's slow and not suitable for graphical applications",
      },
      { id: "c", text: "It requires special permissions" },
      { id: "d", text: "It only works on specific processors" },
    ],
    correctOptionId: "b",
    explanation:
      "BIOS I/O is relatively slow and not designed for modern graphical user interfaces.",
  },
  {
    id: "asm-45",
    chapter: "Chapter 2",
    text: "In protected mode operating systems, which method is typically used for I/O operations?",
    options: [
      { id: "a", text: "Direct hardware access" },
      { id: "b", text: "BIOS interrupts" },
      { id: "c", text: "Operating system API calls" },
      { id: "d", text: "Assembly language only" },
    ],
    correctOptionId: "c",
    explanation:
      "Protected mode OSes use API calls to perform I/O through device drivers, not direct BIOS access.",
  },

  // Section 2.6: x86 Memory Management (46-55)
  {
    id: "asm-46",
    chapter: "Chapter 2",
    text: "In Real-address mode, how is a physical address calculated from a segment:offset pair?",
    options: [
      { id: "a", text: "Segment + offset" },
      { id: "b", text: "(Segment × 16) + offset" },
      { id: "c", text: "Segment × offset" },
      { id: "d", text: "Segment OR offset" },
    ],
    correctOptionId: "b",
    explanation:
      "Physical address = (Segment × 16) + offset. The segment is shifted left 4 bits (multiplied by 16).",
  },
  {
    id: "asm-47",
    chapter: "Chapter 2",
    text: "If a segment register contains 0300h and the offset is 0040h, what is the linear address?",
    options: [
      { id: "a", text: "0340h" },
      { id: "b", text: "3040h" },
      { id: "c", text: "3400h" },
      { id: "d", text: "3000h" },
    ],
    correctOptionId: "b",
    explanation: "Linear address = (0300h × 16) + 0040h = 3000h + 40h = 3040h",
  },
  {
    id: "asm-48",
    chapter: "Chapter 2",
    text: "What is the maximum value an offset can have in Real-address mode?",
    options: [
      { id: "a", text: "FFFFh (65,535)" },
      { id: "b", text: "FFh (255)" },
      { id: "c", text: "FFFh (4,095)" },
      { id: "d", text: "FFFFFFFFh (4,294,967,295)" },
    ],
    correctOptionId: "a",
    explanation:
      "Offsets in real-address mode are 16-bit values, with maximum value FFFFh (65,535).",
  },
  {
    id: "asm-49",
    chapter: "Chapter 2",
    text: "How large is a segment in Real-address mode?",
    options: [
      { id: "a", text: "64 KB" },
      { id: "b", text: "128 KB" },
      { id: "c", text: "256 KB" },
      { id: "d", text: "1 MB" },
    ],
    correctOptionId: "a",
    explanation:
      "A segment in real-address mode is 64 KB (65,536 bytes) due to 16-bit offsets.",
  },
  {
    id: "asm-50",
    chapter: "Chapter 2",
    text: "What is the maximum physical address accessible in Real-address mode?",
    options: [
      { id: "a", text: "FFFFh" },
      { id: "b", text: "FFFFFh (1 MB)" },
      { id: "c", text: "FFFFFFh (16 MB)" },
      { id: "d", text: "FFFFFFFFh (4 GB)" },
    ],
    correctOptionId: "b",
    explanation:
      "Real-address mode uses 20-bit addresses, allowing access to FFFFFh (1 MB) of memory.",
  },
  {
    id: "asm-51",
    chapter: "Chapter 2",
    text: "In Protected mode, what does a segment selector point to?",
    options: [
      { id: "a", text: "Physical memory address" },
      { id: "b", text: "A descriptor table entry" },
      { id: "c", text: "An offset value" },
      { id: "d", text: "A page table" },
    ],
    correctOptionId: "b",
    explanation:
      "A segment selector is an index into a descriptor table (GDT or LDT).",
  },
  {
    id: "asm-52",
    chapter: "Chapter 2",
    text: "What information does a segment descriptor contain?",
    options: [
      { id: "a", text: "Only the segment size" },
      { id: "b", text: "Base address, segment limit, and access rights" },
      { id: "c", text: "Just the starting address" },
      { id: "d", text: "Only permission bits" },
    ],
    correctOptionId: "b",
    explanation:
      "A segment descriptor contains the base address, limit (size), and access rights/attributes.",
  },
  {
    id: "asm-53",
    chapter: "Chapter 2",
    text: "What is a linear address in Protected mode?",
    options: [
      { id: "a", text: "The same as physical address" },
      { id: "b", text: "A 32-bit address before paging translation" },
      { id: "c", text: "The offset within a segment" },
      { id: "d", text: "A 16-bit address" },
    ],
    correctOptionId: "b",
    explanation:
      "A linear address is the result of segment translation, before paging translates it to physical address.",
  },
  {
    id: "asm-54",
    chapter: "Chapter 2",
    text: "When paging is enabled in Protected mode, what translates a linear address to a physical address?",
    options: [
      { id: "a", text: "Segment selector" },
      { id: "b", text: "Descriptor table" },
      { id: "c", text: "Page directory and page tables" },
      { id: "d", text: "CPU directly" },
    ],
    correctOptionId: "c",
    explanation:
      "The paging mechanism uses page directory and page tables to translate linear to physical addresses.",
  },
  {
    id: "asm-55",
    chapter: "Chapter 2",
    text: "What is the size of a page in x86 paging?",
    options: [
      { id: "a", text: "1 KB" },
      { id: "b", text: "2 KB" },
      { id: "c", text: "4 KB" },
      { id: "d", text: "8 KB" },
    ],
    correctOptionId: "c",
    explanation: "Standard x86 pages are 4 KB (4096 bytes) in size.",
  },

  // Section 2.7: x86 Registers (56-75)
  {
    id: "asm-56",
    chapter: "Chapter 2",
    text: "How many general-purpose registers are there in 32-bit x86 processors?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "16" },
    ],
    correctOptionId: "c",
    explanation:
      "32-bit x86 has 8 general-purpose registers: EAX, EBX, ECX, EDX, ESI, EDI, EBP, ESP.",
  },
  {
    id: "asm-57",
    chapter: "Chapter 2",
    text: "What are the 32-bit general-purpose registers?",
    options: [
      { id: "a", text: "AX, BX, CX, DX, SI, DI, BP, SP" },
      { id: "b", text: "EAX, EBX, ECX, EDX, ESI, EDI, EBP, ESP" },
      { id: "c", text: "RAX, RBX, RCX, RDX, RSI, RDI, RBP, RSP" },
      { id: "d", text: "AL, BL, CL, DL, AH, BH, CH, DH" },
    ],
    correctOptionId: "b",
    explanation:
      "The 'E' prefix denotes Extended (32-bit) registers in 32-bit x86 architecture.",
  },
  {
    id: "asm-58",
    chapter: "Chapter 2",
    text: "What is the traditional use of the EAX register?",
    options: [
      { id: "a", text: "Stack pointer" },
      { id: "b", text: "Accumulator for arithmetic operations" },
      { id: "c", text: "Base pointer" },
      { id: "d", text: "Counter for loops" },
    ],
    correctOptionId: "b",
    explanation:
      "EAX is the accumulator register, commonly used for arithmetic operations and function return values.",
  },
  {
    id: "asm-59",
    chapter: "Chapter 2",
    text: "Which register is commonly used as a loop counter?",
    options: [
      { id: "a", text: "EAX" },
      { id: "b", text: "EBX" },
      { id: "c", text: "ECX" },
      { id: "d", text: "EDX" },
    ],
    correctOptionId: "c",
    explanation:
      "ECX is the count register, traditionally used as a loop counter.",
  },
  {
    id: "asm-60",
    chapter: "Chapter 2",
    text: "What does the ESP register point to?",
    options: [
      { id: "a", text: "The beginning of the stack" },
      { id: "b", text: "The top of the stack" },
      { id: "c", text: "The base of the current stack frame" },
      { id: "d", text: "The end of memory" },
    ],
    correctOptionId: "b",
    explanation:
      "ESP (Extended Stack Pointer) always points to the top of the stack.",
  },
  {
    id: "asm-61",
    chapter: "Chapter 2",
    text: "Which register is used as the base pointer for stack frames?",
    options: [
      { id: "a", text: "ESP" },
      { id: "b", text: "EBP" },
      { id: "c", text: "ESI" },
      { id: "d", text: "EDI" },
    ],
    correctOptionId: "b",
    explanation:
      "EBP (Extended Base Pointer) is used to reference local variables and parameters in a stack frame.",
  },
  {
    id: "asm-62",
    chapter: "Chapter 2",
    text: "What are ESI and EDI commonly used for?",
    options: [
      { id: "a", text: "Arithmetic operations" },
      { id: "b", text: "String and array operations (source and destination)" },
      { id: "c", text: "Loop counters" },
      { id: "d", text: "Address calculations" },
    ],
    correctOptionId: "b",
    explanation:
      "ESI (Source Index) and EDI (Destination Index) are used in string and array operations.",
  },
  {
    id: "asm-63",
    chapter: "Chapter 2",
    text: "How can you access the lower 16 bits of EAX?",
    options: [
      { id: "a", text: "EAX" },
      { id: "b", text: "AX" },
      { id: "c", text: "AL" },
      { id: "d", text: "AH" },
    ],
    correctOptionId: "b",
    explanation: "AX refers to the lower 16 bits of the 32-bit EAX register.",
  },
  {
    id: "asm-64",
    chapter: "Chapter 2",
    text: "What does the AL register represent?",
    options: [
      { id: "a", text: "The entire EAX register" },
      { id: "b", text: "The lower 16 bits of EAX" },
      { id: "c", text: "The lower 8 bits of EAX" },
      { id: "d", text: "The upper 8 bits of AX" },
    ],
    correctOptionId: "c",
    explanation:
      "AL (Accumulator Low) is the lower 8 bits of the AX/EAX register.",
  },
  {
    id: "asm-65",
    chapter: "Chapter 2",
    text: "Which segment register traditionally holds the address of the current code segment?",
    options: [
      { id: "a", text: "DS" },
      { id: "b", text: "SS" },
      { id: "c", text: "CS" },
      { id: "d", text: "ES" },
    ],
    correctOptionId: "c",
    explanation:
      "CS (Code Segment) register holds the segment selector for the code segment.",
  },
  {
    id: "asm-66",
    chapter: "Chapter 2",
    text: "What does the SS segment register point to?",
    options: [
      { id: "a", text: "Code segment" },
      { id: "b", text: "Data segment" },
      { id: "c", text: "Stack segment" },
      { id: "d", text: "Extra segment" },
    ],
    correctOptionId: "c",
    explanation:
      "SS (Stack Segment) register points to the current stack segment.",
  },
  {
    id: "asm-67",
    chapter: "Chapter 2",
    text: "How many segment registers are there in x86 processors?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "16" },
    ],
    correctOptionId: "b",
    explanation: "There are 6 segment registers: CS, DS, SS, ES, FS, and GS.",
  },
  {
    id: "asm-68",
    chapter: "Chapter 2",
    text: "What does the EIP register contain?",
    options: [
      { id: "a", text: "The current instruction being executed" },
      { id: "b", text: "The address of the next instruction to execute" },
      { id: "c", text: "The address of the last instruction executed" },
      { id: "d", text: "The number of instructions executed" },
    ],
    correctOptionId: "b",
    explanation:
      "EIP (Extended Instruction Pointer) contains the offset of the next instruction to be executed.",
  },
  {
    id: "asm-69",
    chapter: "Chapter 2",
    text: "What is the EFLAGS register used for?",
    options: [
      { id: "a", text: "Storing arithmetic results" },
      { id: "b", text: "Containing status and control flags" },
      { id: "c", text: "Addressing memory" },
      { id: "d", text: "Counting iterations" },
    ],
    correctOptionId: "b",
    explanation:
      "EFLAGS contains status flags (like Zero, Carry) and control flags that affect processor behavior.",
  },
  {
    id: "asm-70",
    chapter: "Chapter 2",
    text: "Which flag is set when an arithmetic operation produces a carry out of the most significant bit?",
    options: [
      { id: "a", text: "Zero flag" },
      { id: "b", text: "Sign flag" },
      { id: "c", text: "Carry flag" },
      { id: "d", text: "Overflow flag" },
    ],
    correctOptionId: "c",
    explanation:
      "The Carry Flag (CF) is set when an operation produces a carry or borrow out of the MSB.",
  },
  {
    id: "asm-71",
    chapter: "Chapter 2",
    text: "When is the Zero flag (ZF) set?",
    options: [
      { id: "a", text: "When the result is negative" },
      { id: "b", text: "When the result is zero" },
      { id: "c", text: "When there's a carry" },
      { id: "d", text: "When there's an overflow" },
    ],
    correctOptionId: "b",
    explanation:
      "The Zero Flag (ZF) is set when the result of an operation is zero.",
  },
  {
    id: "asm-72",
    chapter: "Chapter 2",
    text: "What does the Sign flag (SF) indicate?",
    options: [
      { id: "a", text: "The carry state" },
      { id: "b", text: "Whether the result is zero" },
      { id: "c", text: "The sign of the result (1 = negative, 0 = positive)" },
      { id: "d", text: "Whether overflow occurred" },
    ],
    correctOptionId: "c",
    explanation:
      "The Sign Flag (SF) reflects the most significant bit of the result (sign bit in signed numbers).",
  },
  {
    id: "asm-73",
    chapter: "Chapter 2",
    text: "The Overflow flag (OF) is set when:",
    options: [
      { id: "a", text: "The result is zero" },
      { id: "b", text: "There's a carry" },
      {
        id: "c",
        text: "A signed arithmetic operation generates a result too large to fit in the destination",
      },
      { id: "d", text: "The result is negative" },
    ],
    correctOptionId: "c",
    explanation:
      "The Overflow Flag (OF) indicates signed arithmetic overflow when the result doesn't fit in the destination.",
  },
  {
    id: "asm-74",
    chapter: "Chapter 2",
    text: "What does the Parity flag (PF) reflect?",
    options: [
      { id: "a", text: "Whether the number is even or odd" },
      {
        id: "b",
        text: "Whether the lowest byte has an even or odd number of 1 bits",
      },
      { id: "c", text: "The sign of the result" },
      { id: "d", text: "Whether there's a carry" },
    ],
    correctOptionId: "b",
    explanation:
      "The Parity Flag (PF) is set if the lowest byte of the result has an even number of 1 bits.",
  },
  {
    id: "asm-75",
    chapter: "Chapter 2",
    text: "Which flag is used to control the direction of string operations?",
    options: [
      { id: "a", text: "Carry flag" },
      { id: "b", text: "Direction flag" },
      { id: "c", text: "Trap flag" },
      { id: "d", text: "Interrupt flag" },
    ],
    correctOptionId: "b",
    explanation:
      "The Direction Flag (DF) controls whether string operations increment (DF=0) or decrement (DF=1) index registers.",
  },

  // CHAPTER 3: ASSEMBLY LANGUAGE FUNDAMENTALS
  // Section 3.1: Basic Elements of Assembly Language (76-90)
  {
    id: "asm-76",
    chapter: "Chapter 3",
    text: "What are the three basic types of statements in assembly language?",
    options: [
      { id: "a", text: "Instructions, variables, constants" },
      { id: "b", text: "Instructions, directives, macros" },
      { id: "c", text: "Commands, functions, procedures" },
      { id: "d", text: "Operations, declarations, definitions" },
    ],
    correctOptionId: "b",
    explanation:
      "Assembly programs consist of instructions (executed by CPU), directives (commands to assembler), and macros.",
  },
  {
    id: "asm-77",
    chapter: "Chapter 3",
    text: "What is an instruction in assembly language?",
    options: [
      { id: "a", text: "A command to the assembler" },
      {
        id: "b",
        text: "A statement that is executed by the processor at runtime",
      },
      { id: "c", text: "A memory allocation command" },
      { id: "d", text: "A comment for documentation" },
    ],
    correctOptionId: "b",
    explanation:
      "An instruction is a statement that becomes machine code and is executed by the processor.",
  },
  {
    id: "asm-78",
    chapter: "Chapter 3",
    text: "What is a directive (or pseudo-operation)?",
    options: [
      { id: "a", text: "An instruction executed by the CPU" },
      { id: "b", text: "A command that is recognized by the assembler" },
      { id: "c", text: "A loop control structure" },
      { id: "d", text: "A conditional branch" },
    ],
    correctOptionId: "b",
    explanation:
      "A directive is processed by the assembler during assembly, not executed by the CPU at runtime.",
  },
  {
    id: "asm-79",
    chapter: "Chapter 3",
    text: "Which of the following is a valid identifier in assembly language?",
    options: [
      { id: "a", text: "123abc" },
      { id: "b", text: "my-variable" },
      { id: "c", text: "myVariable" },
      { id: "d", text: "for" },
    ],
    correctOptionId: "c",
    explanation:
      "Valid identifiers must start with a letter or underscore, and cannot be reserved words. Hyphens are not allowed.",
  },
  {
    id: "asm-80",
    chapter: "Chapter 3",
    text: "What character is typically used to start a comment in MASM?",
    options: [
      { id: "a", text: "//" },
      { id: "b", text: "/*" },
      { id: "c", text: ";" },
      { id: "d", text: "#" },
    ],
    correctOptionId: "c",
    explanation:
      "In MASM, a semicolon (;) begins a comment that extends to the end of the line.",
  },
  {
    id: "asm-81",
    chapter: "Chapter 3",
    text: "Which directive is used to define a byte variable in MASM?",
    options: [
      { id: "a", text: "BYTE" },
      { id: "b", text: "DB" },
      { id: "c", text: "DWORD" },
      { id: "d", text: "DEFINE_BYTE" },
    ],
    correctOptionId: "b",
    explanation:
      "DB (Define Byte) is used to allocate and initialize byte-sized variables.",
  },
  {
    id: "asm-82",
    chapter: "Chapter 3",
    text: "What does the DWORD directive define?",
    options: [
      { id: "a", text: "A double word (8 bytes)" },
      { id: "b", text: "A doubleword (4 bytes)" },
      { id: "c", text: "A word (2 bytes)" },
      { id: "d", text: "A byte (1 byte)" },
    ],
    correctOptionId: "b",
    explanation:
      "DWORD (or DD) defines a doubleword, which is 4 bytes (32 bits).",
  },
  {
    id: "asm-83",
    chapter: "Chapter 3",
    text: "In the instruction 'mov eax, ebx', what is 'mov'?",
    options: [
      { id: "a", text: "The destination operand" },
      { id: "b", text: "The source operand" },
      { id: "c", text: "The mnemonic (operation)" },
      { id: "d", text: "A register name" },
    ],
    correctOptionId: "c",
    explanation:
      "The mnemonic is the name of the instruction operation (MOV = move/copy data).",
  },
  {
    id: "asm-84",
    chapter: "Chapter 3",
    text: "How many operands does the MOV instruction typically have?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "3" },
    ],
    correctOptionId: "c",
    explanation:
      "MOV has two operands: destination and source (mov destination, source).",
  },
  {
    id: "asm-85",
    chapter: "Chapter 3",
    text: "In the instruction 'add eax, 5', what is '5'?",
    options: [
      { id: "a", text: "A register" },
      { id: "b", text: "An immediate operand (constant)" },
      { id: "c", text: "A memory address" },
      { id: "d", text: "A label" },
    ],
    correctOptionId: "b",
    explanation:
      "An immediate operand is a constant value specified directly in the instruction.",
  },
  {
    id: "asm-86",
    chapter: "Chapter 3",
    text: "Which of the following is NOT a valid assembly language statement?",
    options: [
      { id: "a", text: "mov eax, ebx" },
      { id: "b", text: "count DB 100" },
      { id: "c", text: "; This is a comment" },
      { id: "d", text: "5add eax, ebx" },
    ],
    correctOptionId: "d",
    explanation:
      "Identifiers cannot start with a digit, making '5add' invalid.",
  },
  {
    id: "asm-87",
    chapter: "Chapter 3",
    text: "What is the purpose of a label in assembly language?",
    options: [
      { id: "a", text: "To comment code" },
      { id: "b", text: "To mark a position in code or data" },
      { id: "c", text: "To define a variable" },
      { id: "d", text: "To import libraries" },
    ],
    correctOptionId: "b",
    explanation:
      "Labels mark memory locations and are used as jump targets or to reference data.",
  },
  {
    id: "asm-88",
    chapter: "Chapter 3",
    text: "Which directive marks the beginning of the code segment?",
    options: [
      { id: "a", text: ".CODE" },
      { id: "b", text: ".DATA" },
      { id: "c", text: ".STACK" },
      { id: "d", text: "BEGIN" },
    ],
    correctOptionId: "a",
    explanation:
      "The .CODE directive marks the start of the code segment containing executable instructions.",
  },
  {
    id: "asm-89",
    chapter: "Chapter 3",
    text: "What does the .DATA directive indicate?",
    options: [
      { id: "a", text: "The start of executable code" },
      { id: "b", text: "The start of the data segment for variables" },
      { id: "c", text: "The start of the stack" },
      { id: "d", text: "The end of the program" },
    ],
    correctOptionId: "b",
    explanation:
      "The .DATA directive begins the data segment where variables are defined.",
  },
  {
    id: "asm-90",
    chapter: "Chapter 3",
    text: "Which directive ends a procedure definition?",
    options: [
      { id: "a", text: "END" },
      { id: "b", text: "ENDP" },
      { id: "c", text: "RET" },
      { id: "d", text: "EXIT" },
    ],
    correctOptionId: "b",
    explanation:
      "ENDP (End Procedure) marks the end of a procedure definition.",
  },

  // Section 3.2: Example: Adding Three Integers (91-100)
  {
    id: "asm-91",
    chapter: "Chapter 3",
    text: "Which instruction is used to transfer data between registers or from memory to register?",
    options: [
      { id: "a", text: "ADD" },
      { id: "b", text: "SUB" },
      { id: "c", text: "MOV" },
      { id: "d", text: "XOR" },
    ],
    correctOptionId: "c",
    explanation:
      "MOV (move) instruction copies data from source to destination.",
  },
  {
    id: "asm-92",
    chapter: "Chapter 3",
    text: "In the instruction 'mov eax, 10', what happens?",
    options: [
      { id: "a", text: "10 is moved to memory at address EAX" },
      { id: "b", text: "The value 10 is loaded into register EAX" },
      { id: "c", text: "EAX is moved to location 10" },
      { id: "d", text: "EAX and 10 are added" },
    ],
    correctOptionId: "b",
    explanation: "MOV loads the immediate value 10 into the EAX register.",
  },
  {
    id: "asm-93",
    chapter: "Chapter 3",
    text: "What does the ADD instruction do?",
    options: [
      { id: "a", text: "Multiplies two operands" },
      { id: "b", text: "Adds the source operand to the destination operand" },
      { id: "c", text: "Subtracts the source from destination" },
      { id: "d", text: "Compares two operands" },
    ],
    correctOptionId: "b",
    explanation: "ADD performs: destination = destination + source.",
  },
  {
    id: "asm-94",
    chapter: "Chapter 3",
    text: "After executing 'mov eax, 5' followed by 'add eax, 3', what value is in EAX?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "3" },
      { id: "c", text: "8" },
      { id: "d", text: "15" },
    ],
    correctOptionId: "c",
    explanation: "EAX starts with 5, then 3 is added: 5 + 3 = 8.",
  },
  {
    id: "asm-95",
    chapter: "Chapter 3",
    text: "Can you move data directly from one memory location to another using a single MOV instruction?",
    options: [
      { id: "a", text: "Yes, always" },
      { id: "b", text: "No, you must use a register as an intermediary" },
      { id: "c", text: "Yes, but only in protected mode" },
      { id: "d", text: "Yes, but only for byte-sized data" },
    ],
    correctOptionId: "b",
    explanation:
      "x86 does not allow memory-to-memory moves; you must use a register as intermediate storage.",
  },
  {
    id: "asm-96",
    chapter: "Chapter 3",
    text: "Which of the following is a valid MOV instruction?",
    options: [
      { id: "a", text: "mov 5, eax" },
      { id: "b", text: "mov eax, ebx" },
      { id: "c", text: "mov cs, ds" },
      { id: "d", text: "mov mem1, mem2" },
    ],
    correctOptionId: "b",
    explanation:
      "Register-to-register moves are valid. You cannot move immediate to destination, segment to segment, or memory to memory directly.",
  },
  {
    id: "asm-97",
    chapter: "Chapter 3",
    text: "What happens when you execute 'add eax, eax'?",
    options: [
      { id: "a", text: "EAX is cleared to zero" },
      { id: "b", text: "EAX is doubled" },
      { id: "c", text: "EAX remains unchanged" },
      { id: "d", text: "An error occurs" },
    ],
    correctOptionId: "b",
    explanation:
      "ADD EAX, EAX performs EAX = EAX + EAX, which doubles the value.",
  },
  {
    id: "asm-98",
    chapter: "Chapter 3",
    text: "Which instruction subtracts the source operand from the destination?",
    options: [
      { id: "a", text: "ADD" },
      { id: "b", text: "SUB" },
      { id: "c", text: "DEC" },
      { id: "d", text: "NEG" },
    ],
    correctOptionId: "b",
    explanation: "SUB performs: destination = destination - source.",
  },
  {
    id: "asm-99",
    chapter: "Chapter 3",
    text: "After 'mov eax, 10' and 'sub eax, 3', what is in EAX?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "7" },
      { id: "c", text: "10" },
      { id: "d", text: "13" },
    ],
    correctOptionId: "b",
    explanation: "EAX starts with 10, then 3 is subtracted: 10 - 3 = 7.",
  },
  {
    id: "asm-100",
    chapter: "Chapter 3",
    text: "What does the INC instruction do?",
    options: [
      { id: "a", text: "Decreases the operand by 1" },
      { id: "b", text: "Increases the operand by 1" },
      { id: "c", text: "Inverts all bits" },
      { id: "d", text: "Initializes the operand" },
    ],
    correctOptionId: "b",
    explanation: "INC (increment) adds 1 to the operand.",
  },

  // Section 3.3: Assembling, Linking, and Running Programs (101-110)
  {
    id: "asm-101",
    chapter: "Chapter 3",
    text: "What is the file extension for an assembly source file in MASM?",
    options: [
      { id: "a", text: ".exe" },
      { id: "b", text: ".obj" },
      { id: "c", text: ".asm" },
      { id: "d", text: ".lst" },
    ],
    correctOptionId: "c",
    explanation: "Assembly source files typically have the .asm extension.",
  },
  {
    id: "asm-102",
    chapter: "Chapter 3",
    text: "What does an assembler produce from a source file?",
    options: [
      { id: "a", text: "An executable file" },
      { id: "b", text: "An object file" },
      { id: "c", text: "A library file" },
      { id: "d", text: "A header file" },
    ],
    correctOptionId: "b",
    explanation:
      "The assembler translates source code into an object file containing machine code.",
  },
  {
    id: "asm-103",
    chapter: "Chapter 3",
    text: "What is the typical extension of an object file?",
    options: [
      { id: "a", text: ".exe" },
      { id: "b", text: ".obj or .o" },
      { id: "c", text: ".asm" },
      { id: "d", text: ".dll" },
    ],
    correctOptionId: "b",
    explanation:
      "Object files use .obj (Windows) or .o (Unix/Linux) extensions.",
  },
  {
    id: "asm-104",
    chapter: "Chapter 3",
    text: "What does a linker do?",
    options: [
      { id: "a", text: "Assembles source code" },
      {
        id: "b",
        text: "Combines object files and libraries into an executable",
      },
      { id: "c", text: "Debugs the program" },
      { id: "d", text: "Optimizes machine code" },
    ],
    correctOptionId: "b",
    explanation:
      "The linker combines object files and resolves external references to create an executable.",
  },
  {
    id: "asm-105",
    chapter: "Chapter 3",
    text: "What is the typical extension of an executable file in Windows?",
    options: [
      { id: "a", text: ".obj" },
      { id: "b", text: ".asm" },
      { id: "c", text: ".exe" },
      { id: "d", text: ".com" },
    ],
    correctOptionId: "c",
    explanation: "Windows executables typically have the .exe extension.",
  },
  {
    id: "asm-106",
    chapter: "Chapter 3",
    text: "What is a listing file?",
    options: [
      { id: "a", text: "The executable program" },
      {
        id: "b",
        text: "A file showing source code, machine code, and addresses",
      },
      { id: "c", text: "A library of functions" },
      { id: "d", text: "A configuration file" },
    ],
    correctOptionId: "b",
    explanation:
      "A listing file shows the source code alongside generated machine code and memory addresses.",
  },
  {
    id: "asm-107",
    chapter: "Chapter 3",
    text: "What file extension is typically used for listing files?",
    options: [
      { id: "a", text: ".lst" },
      { id: "b", text: ".txt" },
      { id: "c", text: ".log" },
      { id: "d", text: ".out" },
    ],
    correctOptionId: "a",
    explanation: "Listing files commonly use the .lst extension.",
  },
  {
    id: "asm-108",
    chapter: "Chapter 3",
    text: "Which program would you use to step through assembly code line by line?",
    options: [
      { id: "a", text: "Assembler" },
      { id: "b", text: "Linker" },
      { id: "c", text: "Debugger" },
      { id: "d", text: "Editor" },
    ],
    correctOptionId: "c",
    explanation:
      "A debugger allows stepping through code, examining registers, and inspecting memory.",
  },
  {
    id: "asm-109",
    chapter: "Chapter 3",
    text: "What is the purpose of a make file or build script?",
    options: [
      { id: "a", text: "To write source code" },
      { id: "b", text: "To automate the assembly and linking process" },
      { id: "c", text: "To debug programs" },
      { id: "d", text: "To create documentation" },
    ],
    correctOptionId: "b",
    explanation:
      "Make files automate the build process, specifying how to compile and link the program.",
  },
  {
    id: "asm-110",
    chapter: "Chapter 3",
    text: "In a two-pass assembler, what is done in the first pass?",
    options: [
      { id: "a", text: "Generate machine code" },
      { id: "b", text: "Build a symbol table and determine addresses" },
      { id: "c", text: "Link object files" },
      { id: "d", text: "Optimize code" },
    ],
    correctOptionId: "b",
    explanation:
      "Pass 1 builds the symbol table by recording labels and their addresses. Pass 2 generates machine code.",
  },

  // Section 3.4: Defining Data (111-125)
  {
    id: "asm-111",
    chapter: "Chapter 3",
    text: "Which directive defines a byte (8-bit) variable?",
    options: [
      { id: "a", text: "DW" },
      { id: "b", text: "DD" },
      { id: "c", text: "DB" },
      { id: "d", text: "DQ" },
    ],
    correctOptionId: "c",
    explanation: "DB (Define Byte) allocates 1 byte of storage.",
  },
  {
    id: "asm-112",
    chapter: "Chapter 3",
    text: "What does DW stand for?",
    options: [
      { id: "a", text: "Define Word (16 bits)" },
      { id: "b", text: "Double Word" },
      { id: "c", text: "Data Write" },
      { id: "d", text: "Declare Word" },
    ],
    correctOptionId: "a",
    explanation: "DW (Define Word) allocates 2 bytes (16 bits).",
  },
  {
    id: "asm-113",
    chapter: "Chapter 3",
    text: "How many bytes does DD (Define Doubleword) allocate?",
    options: [
      { id: "a", text: "1 byte" },
      { id: "b", text: "2 bytes" },
      { id: "c", text: "4 bytes" },
      { id: "d", text: "8 bytes" },
    ],
    correctOptionId: "c",
    explanation: "DD (Define Doubleword) allocates 4 bytes (32 bits).",
  },
  {
    id: "asm-114",
    chapter: "Chapter 3",
    text: "Which directive would you use to define a 64-bit integer?",
    options: [
      { id: "a", text: "DB" },
      { id: "b", text: "DW" },
      { id: "c", text: "DD" },
      { id: "d", text: "DQ" },
    ],
    correctOptionId: "d",
    explanation: "DQ (Define Quadword) allocates 8 bytes (64 bits).",
  },
  {
    id: "asm-115",
    chapter: "Chapter 3",
    text: "What does the following define? 'value DB 25'",
    options: [
      { id: "a", text: "A word variable initialized to 25" },
      { id: "b", text: "A byte variable initialized to 25" },
      { id: "c", text: "A doubleword variable initialized to 25" },
      { id: "d", text: "An array of 25 bytes" },
    ],
    correctOptionId: "b",
    explanation: "DB defines a byte-sized variable with initial value 25.",
  },
  {
    id: "asm-116",
    chapter: "Chapter 3",
    text: "How do you define an array of bytes in MASM?",
    options: [
      { id: "a", text: "array DB 10 DUP(0)" },
      { id: "b", text: "array[10] DB 0" },
      { id: "c", text: "DB array[10]" },
      { id: "d", text: "ARRAY 10, 0" },
    ],
    correctOptionId: "a",
    explanation:
      "DUP operator repeats a value multiple times: 10 DUP(0) creates 10 bytes initialized to 0.",
  },
  {
    id: "asm-117",
    chapter: "Chapter 3",
    text: "What does 'DUP' do in a data definition?",
    options: [
      { id: "a", text: "Duplicates the variable name" },
      { id: "b", text: "Creates multiple copies of the initial value" },
      { id: "c", text: "Defines an unsigned pointer" },
      { id: "d", text: "Declares a user procedure" },
    ],
    correctOptionId: "b",
    explanation:
      "DUP (duplicate) operator repeats a value or pattern a specified number of times.",
  },
  {
    id: "asm-118",
    chapter: "Chapter 3",
    text: "What does 'buffer DB 100 DUP(?)' create?",
    options: [
      { id: "a", text: "An uninitialized buffer of 100 bytes" },
      { id: "b", text: "A buffer of 100 bytes all set to 0" },
      { id: "c", text: "A buffer of 100 bytes all set to ?" },
      { id: "d", text: "100 different variables" },
    ],
    correctOptionId: "a",
    explanation:
      "The ? indicates uninitialized memory. 100 DUP(?) allocates 100 bytes without initialization.",
  },
  {
    id: "asm-119",
    chapter: "Chapter 3",
    text: "How do you define a string in MASM?",
    options: [
      { id: "a", text: "Using DB with quoted text" },
      { id: "b", text: "Using STRING directive" },
      { id: "c", text: "Using DW with quoted text" },
      { id: "d", text: "Strings cannot be defined in assembly" },
    ],
    correctOptionId: "a",
    explanation: "Strings are defined using DB with text in quotes: DB 'Hello'",
  },
  {
    id: "asm-120",
    chapter: "Chapter 3",
    text: "What does 'message DB \"Hello\", 0' define?",
    options: [
      { id: "a", text: "A byte variable" },
      { id: "b", text: "A null-terminated string" },
      { id: "c", text: "An array of integers" },
      { id: "d", text: "A word variable" },
    ],
    correctOptionId: "b",
    explanation:
      "This defines a null-terminated string (C-style string) with a 0 byte at the end.",
  },
  {
    id: "asm-121",
    chapter: "Chapter 3",
    text: "What is the purpose of the EQU directive?",
    options: [
      { id: "a", text: "To allocate memory" },
      { id: "b", text: "To create a symbolic constant" },
      { id: "c", text: "To define a procedure" },
      { id: "d", text: "To end a program" },
    ],
    correctOptionId: "b",
    explanation:
      "EQU (equate) creates a symbolic constant that the assembler replaces with its value.",
  },
  {
    id: "asm-122",
    chapter: "Chapter 3",
    text: "In 'MAXVAL EQU 100', what is MAXVAL?",
    options: [
      { id: "a", text: "A variable" },
      { id: "b", text: "A label" },
      { id: "c", text: "A symbolic constant (equate)" },
      { id: "d", text: "A procedure name" },
    ],
    correctOptionId: "c",
    explanation:
      "MAXVAL is a symbolic constant that represents the value 100 throughout the program.",
  },
  {
    id: "asm-123",
    chapter: "Chapter 3",
    text: "What is the difference between EQU and = in MASM?",
    options: [
      { id: "a", text: "There is no difference" },
      { id: "b", text: "EQU cannot be redefined, = can be" },
      { id: "c", text: "= cannot be redefined, EQU can be" },
      { id: "d", text: "EQU is for numbers, = is for strings" },
    ],
    correctOptionId: "b",
    explanation:
      "EQU creates permanent constants. The = operator allows redefinition of symbols.",
  },
  {
    id: "asm-124",
    chapter: "Chapter 3",
    text: "Which directive creates a real number (floating-point) variable?",
    options: [
      { id: "a", text: "DB" },
      { id: "b", text: "DW" },
      { id: "c", text: "REAL4, REAL8, or REAL10" },
      { id: "d", text: "DF" },
    ],
    correctOptionId: "c",
    explanation:
      "REAL4 (4 bytes), REAL8 (8 bytes), and REAL10 (10 bytes) define floating-point numbers.",
  },
  {
    id: "asm-125",
    chapter: "Chapter 3",
    text: "What does REAL8 define?",
    options: [
      { id: "a", text: "An 8-bit real number" },
      { id: "b", text: "An 8-byte (64-bit) double-precision real number" },
      { id: "c", text: "An 8-element array" },
      { id: "d", text: "An 8-bit integer" },
    ],
    correctOptionId: "b",
    explanation:
      "REAL8 defines a double-precision floating-point number (8 bytes, 64 bits).",
  },

  // Section 3.5: Symbolic Constants (126-130)
  {
    id: "asm-126",
    chapter: "Chapter 3",
    text: "What is a symbolic constant?",
    options: [
      { id: "a", text: "A variable that can change" },
      { id: "b", text: "A named constant that represents a value" },
      { id: "c", text: "A memory address" },
      { id: "d", text: "A CPU register" },
    ],
    correctOptionId: "b",
    explanation:
      "A symbolic constant is a name that represents a fixed value throughout the program.",
  },
  {
    id: "asm-127",
    chapter: "Chapter 3",
    text: "Why use symbolic constants instead of literal values?",
    options: [
      { id: "a", text: "They execute faster" },
      { id: "b", text: "They make code more readable and easier to maintain" },
      { id: "c", text: "They use less memory" },
      { id: "d", text: "They are required by the assembler" },
    ],
    correctOptionId: "b",
    explanation:
      "Symbolic constants improve code readability and make it easier to change values in one place.",
  },
  {
    id: "asm-128",
    chapter: "Chapter 3",
    text: "Can you use a symbolic constant defined with EQU in an arithmetic expression?",
    options: [
      { id: "a", text: "No, never" },
      { id: "b", text: "Yes, the assembler will substitute its value" },
      { id: "c", text: "Only in data definitions" },
      { id: "d", text: "Only in conditional statements" },
    ],
    correctOptionId: "b",
    explanation:
      "The assembler replaces symbolic constants with their values, so they can be used in expressions.",
  },
  {
    id: "asm-129",
    chapter: "Chapter 3",
    text: "What happens if you try to redefine a symbol defined with EQU?",
    options: [
      { id: "a", text: "The assembler uses the new value" },
      { id: "b", text: "The assembler generates an error" },
      { id: "c", text: "The assembler ignores it" },
      { id: "d", text: "The assembler generates a warning" },
    ],
    correctOptionId: "b",
    explanation:
      "EQU symbols cannot be redefined; attempting to do so causes an assembly error.",
  },
  {
    id: "asm-130",
    chapter: "Chapter 3",
    text: "Which is better for defining the size of an array: a literal number or a symbolic constant?",
    options: [
      { id: "a", text: "Literal number, it's clearer" },
      { id: "b", text: "Symbolic constant, it's easier to modify" },
      { id: "c", text: "They are equivalent" },
      { id: "d", text: "Neither, use a variable" },
    ],
    correctOptionId: "b",
    explanation:
      "Symbolic constants make it easy to change array sizes by modifying one definition.",
  },

  // Section 3.6: Real-Address Mode Programming (131-140)
  {
    id: "asm-131",
    chapter: "Chapter 3",
    text: "What does INT stand for in assembly language?",
    options: [
      { id: "a", text: "Integer" },
      { id: "b", text: "Internal" },
      { id: "c", text: "Interrupt" },
      { id: "d", text: "Interface" },
    ],
    correctOptionId: "c",
    explanation:
      "INT is the interrupt instruction that calls BIOS or DOS services.",
  },
  {
    id: "asm-132",
    chapter: "Chapter 3",
    text: "Which interrupt is used to terminate a DOS program?",
    options: [
      { id: "a", text: "INT 10h" },
      { id: "b", text: "INT 16h" },
      { id: "c", text: "INT 21h, function 4Ch" },
      { id: "d", text: "INT 20h" },
    ],
    correctOptionId: "c",
    explanation:
      "INT 21h with AH=4Ch is the standard way to terminate a DOS program.",
  },
  {
    id: "asm-133",
    chapter: "Chapter 3",
    text: "In real-address mode, how do you typically specify which DOS function to call?",
    options: [
      {
        id: "a",
        text: "By setting a register value before the INT instruction",
      },
      { id: "b", text: "By using different interrupt numbers" },
      { id: "c", text: "By using different opcodes" },
      { id: "d", text: "By passing parameters on the stack" },
    ],
    correctOptionId: "a",
    explanation:
      "The AH register typically holds the function number for INT 21h DOS services.",
  },
  {
    id: "asm-134",
    chapter: "Chapter 3",
    text: "Which register typically holds the function number for INT 21h DOS services?",
    options: [
      { id: "a", text: "AL" },
      { id: "b", text: "AH" },
      { id: "c", text: "BX" },
      { id: "d", text: "CX" },
    ],
    correctOptionId: "b",
    explanation:
      "AH register contains the function number, while other registers hold parameters.",
  },
  {
    id: "asm-135",
    chapter: "Chapter 3",
    text: "What does INT 21h, function 2 do?",
    options: [
      { id: "a", text: "Read a character" },
      { id: "b", text: "Write a character to standard output" },
      { id: "c", text: "Terminate program" },
      { id: "d", text: "Get system time" },
    ],
    correctOptionId: "b",
    explanation:
      "INT 21h, function 2 displays the character in DL to standard output.",
  },
  {
    id: "asm-136",
    chapter: "Chapter 3",
    text: "To display a string using INT 21h, function 9, where should the string address be placed?",
    options: [
      { id: "a", text: "In AX" },
      { id: "b", text: "In DS:DX" },
      { id: "c", text: "In ES:DI" },
      { id: "d", text: "On the stack" },
    ],
    correctOptionId: "b",
    explanation:
      "Function 9 expects DS:DX to point to the string (DS=segment, DX=offset).",
  },
  {
    id: "asm-137",
    chapter: "Chapter 3",
    text: "What character should terminate a string for INT 21h, function 9?",
    options: [
      { id: "a", text: "Null (0)" },
      { id: "b", text: "Dollar sign ($)" },
      { id: "c", text: "Carriage return (13)" },
      { id: "d", text: "Line feed (10)" },
    ],
    correctOptionId: "b",
    explanation:
      "DOS function 9 expects strings to be terminated with a dollar sign ($) character.",
  },
  {
    id: "asm-138",
    chapter: "Chapter 3",
    text: "Which INT 10h function sets the video mode?",
    options: [
      { id: "a", text: "Function 00h" },
      { id: "b", text: "Function 01h" },
      { id: "c", text: "Function 02h" },
      { id: "d", text: "Function 06h" },
    ],
    correctOptionId: "a",
    explanation:
      "INT 10h, function 00h sets the video mode (text or graphics).",
  },
  {
    id: "asm-139",
    chapter: "Chapter 3",
    text: "What does INT 16h, function 0 do?",
    options: [
      { id: "a", text: "Display a character" },
      { id: "b", text: "Wait for and read a keyboard character" },
      { id: "c", text: "Check keyboard status" },
      { id: "d", text: "Clear the keyboard buffer" },
    ],
    correctOptionId: "b",
    explanation:
      "INT 16h, function 0 waits for a keystroke and returns the character.",
  },
  {
    id: "asm-140",
    chapter: "Chapter 3",
    text: "After INT 16h, function 0, where is the ASCII code of the key pressed?",
    options: [
      { id: "a", text: "In AH" },
      { id: "b", text: "In AL" },
      { id: "c", text: "In BL" },
      { id: "d", text: "In DL" },
    ],
    correctOptionId: "b",
    explanation: "AL contains the ASCII code, while AH contains the scan code.",
  },

  // Section 3.7: Protected Mode Programming (141-150)
  {
    id: "asm-141",
    chapter: "Chapter 3",
    text: "In protected mode, what replaces direct BIOS and DOS interrupt calls?",
    options: [
      { id: "a", text: "Hardware interrupts" },
      { id: "b", text: "Operating system API calls" },
      { id: "c", text: "Direct memory access" },
      { id: "d", text: "Nothing, they still work the same" },
    ],
    correctOptionId: "b",
    explanation:
      "Protected mode OSes provide APIs (like Win32 API) instead of BIOS/DOS interrupts.",
  },
  {
    id: "asm-142",
    chapter: "Chapter 3",
    text: "Which library does the textbook use for console I/O in protected mode examples?",
    options: [
      { id: "a", text: "Standard C library" },
      { id: "b", text: "Windows API" },
      { id: "c", text: "Irvine32 library" },
      { id: "d", text: "BIOS library" },
    ],
    correctOptionId: "c",
    explanation:
      "The Irvine32 library provides simplified I/O procedures for assembly programming.",
  },
  {
    id: "asm-143",
    chapter: "Chapter 3",
    text: "What does the WriteString procedure from Irvine32 do?",
    options: [
      { id: "a", text: "Writes a string to a file" },
      { id: "b", text: "Displays a null-terminated string on the console" },
      { id: "c", text: "Reads a string from the keyboard" },
      { id: "d", text: "Converts a string to uppercase" },
    ],
    correctOptionId: "b",
    explanation:
      "WriteString displays the null-terminated string pointed to by EDX.",
  },
  {
    id: "asm-144",
    chapter: "Chapter 3",
    text: "Which Irvine32 procedure reads an integer from the keyboard?",
    options: [
      { id: "a", text: "ReadInt" },
      { id: "b", text: "GetInt" },
      { id: "c", text: "InputInt" },
      { id: "d", text: "ScanInt" },
    ],
    correctOptionId: "a",
    explanation:
      "ReadInt reads a signed integer from the keyboard and returns it in EAX.",
  },
  {
    id: "asm-145",
    chapter: "Chapter 3",
    text: "What does the WriteDec procedure do?",
    options: [
      { id: "a", text: "Writes a decimal point" },
      { id: "b", text: "Displays an unsigned integer in decimal" },
      { id: "c", text: "Decrements and writes a value" },
      { id: "d", text: "Writes a hexadecimal number" },
    ],
    correctOptionId: "b",
    explanation:
      "WriteDec displays the unsigned integer in EAX as a decimal number.",
  },
  {
    id: "asm-146",
    chapter: "Chapter 3",
    text: "Which procedure displays a value in hexadecimal format?",
    options: [
      { id: "a", text: "WriteHex" },
      { id: "b", text: "WriteInt" },
      { id: "c", text: "WriteBin" },
      { id: "d", text: "WriteOct" },
    ],
    correctOptionId: "a",
    explanation: "WriteHex displays the value in EAX as a hexadecimal number.",
  },
  {
    id: "asm-147",
    chapter: "Chapter 3",
    text: "What does Crlf (from Irvine32) do?",
    options: [
      { id: "a", text: "Clears the screen" },
      { id: "b", text: "Writes a carriage return and line feed" },
      { id: "c", text: "Clears a register" },
      { id: "d", text: "Creates a new file" },
    ],
    correctOptionId: "b",
    explanation:
      "Crlf outputs a newline (carriage return + line feed) to the console.",
  },
  {
    id: "asm-148",
    chapter: "Chapter 3",
    text: "Which procedure would you use to generate a random number in Irvine32?",
    options: [
      { id: "a", text: "Random" },
      { id: "b", text: "Randomize followed by RandomRange" },
      { id: "c", text: "GenRandom" },
      { id: "d", text: "MakeRandom" },
    ],
    correctOptionId: "b",
    explanation:
      "Call Randomize once to seed, then use RandomRange to generate random numbers in a range.",
  },
  {
    id: "asm-149",
    chapter: "Chapter 3",
    text: "What does the Clrscr procedure do?",
    options: [
      { id: "a", text: "Clears a register" },
      { id: "b", text: "Clears the screen" },
      { id: "c", text: "Clears the stack" },
      { id: "d", text: "Clears a string" },
    ],
    correctOptionId: "b",
    explanation: "Clrscr (clear screen) clears the console window.",
  },
  {
    id: "asm-150",
    chapter: "Chapter 3",
    text: "Before using Irvine32 procedures, what must you include in your program?",
    options: [
      { id: "a", text: "include irvine32.inc" },
      { id: "b", text: "import irvine32.lib" },
      { id: "c", text: "using irvine32" },
      { id: "d", text: "link irvine32.dll" },
    ],
    correctOptionId: "a",
    explanation:
      "The include directive brings in the Irvine32 procedure declarations and definitions.",
  },

  // Additional Questions on Data Transfer and Arithmetic (151-160)
  {
    id: "asm-151",
    chapter: "Chapter 3",
    text: "Which instruction exchanges the values of two operands?",
    options: [
      { id: "a", text: "SWAP" },
      { id: "b", text: "XCHG" },
      { id: "c", text: "EXCHANGE" },
      { id: "d", text: "SWITCH" },
    ],
    correctOptionId: "b",
    explanation: "XCHG (exchange) swaps the contents of two operands.",
  },
  {
    id: "asm-152",
    chapter: "Chapter 3",
    text: "What does 'xchg eax, ebx' do?",
    options: [
      { id: "a", text: "Copies EAX to EBX" },
      { id: "b", text: "Adds EAX and EBX" },
      { id: "c", text: "Swaps the contents of EAX and EBX" },
      { id: "d", text: "Compares EAX and EBX" },
    ],
    correctOptionId: "c",
    explanation: "XCHG exchanges the values: temp=EAX, EAX=EBX, EBX=temp.",
  },
  {
    id: "asm-153",
    chapter: "Chapter 3",
    text: "Which instruction decrements a register by 1?",
    options: [
      { id: "a", text: "SUB register, 1" },
      { id: "b", text: "DEC register" },
      { id: "c", text: "DECREMENT register" },
      { id: "d", text: "Both a and b" },
    ],
    correctOptionId: "d",
    explanation:
      "Both SUB reg,1 and DEC reg decrease the value by 1, but DEC is more efficient.",
  },
  {
    id: "asm-154",
    chapter: "Chapter 3",
    text: "What is the advantage of using INC/DEC over ADD/SUB?",
    options: [
      { id: "a", text: "They are faster and use less code space" },
      { id: "b", text: "They can work with larger numbers" },
      { id: "c", text: "They affect different flags" },
      { id: "d", text: "There is no advantage" },
    ],
    correctOptionId: "a",
    explanation:
      "INC/DEC instructions are shorter (use fewer bytes) and execute faster than ADD/SUB.",
  },
  {
    id: "asm-155",
    chapter: "Chapter 3",
    text: "Which instruction performs two's complement negation?",
    options: [
      { id: "a", text: "NOT" },
      { id: "b", text: "NEG" },
      { id: "c", text: "NEGATE" },
      { id: "d", text: "COMP" },
    ],
    correctOptionId: "b",
    explanation:
      "NEG performs two's complement negation: operand = 0 - operand.",
  },
  {
    id: "asm-156",
    chapter: "Chapter 3",
    text: "After executing 'mov al, 5' followed by 'neg al', what value is in AL?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "-5 (FBh in hex)" },
      { id: "c", text: "0" },
      { id: "d", text: "255" },
    ],
    correctOptionId: "b",
    explanation:
      "NEG converts 5 to -5. In binary/hex representation: FBh (251 unsigned = -5 signed).",
  },
  {
    id: "asm-157",
    chapter: "Chapter 3",
    text: "What does the MOVZX instruction do?",
    options: [
      { id: "a", text: "Moves and zeros the destination" },
      { id: "b", text: "Moves with zero extension (fills upper bits with 0)" },
      { id: "c", text: "Moves only zero values" },
      { id: "d", text: "Moves and XORs" },
    ],
    correctOptionId: "b",
    explanation:
      "MOVZX (move with zero extend) copies a smaller value and fills upper bits with zeros.",
  },
  {
    id: "asm-158",
    chapter: "Chapter 3",
    text: "What is the purpose of MOVSX?",
    options: [
      { id: "a", text: "Moves with sign extension" },
      { id: "b", text: "Moves with XOR" },
      { id: "c", text: "Moves sixteen bits" },
      { id: "d", text: "Moves and swaps" },
    ],
    correctOptionId: "a",
    explanation:
      "MOVSX (move with sign extend) copies a value and extends the sign bit to fill upper bits.",
  },
  {
    id: "asm-159",
    chapter: "Chapter 3",
    text: "If AL = 80h (10000000 binary) and you execute 'movzx eax, al', what is in EAX?",
    options: [
      { id: "a", text: "00000080h" },
      { id: "b", text: "FFFFFF80h" },
      { id: "c", text: "80808080h" },
      { id: "d", text: "00000000h" },
    ],
    correctOptionId: "a",
    explanation: "MOVZX fills upper bits with 0, so 80h becomes 00000080h.",
  },
  {
    id: "asm-160",
    chapter: "Chapter 3",
    text: "If AL = 80h (signed = -128) and you execute 'movsx eax, al', what is in EAX?",
    options: [
      { id: "a", text: "00000080h" },
      { id: "b", text: "FFFFFF80h" },
      { id: "c", text: "80000000h" },
      { id: "d", text: "00000000h" },
    ],
    correctOptionId: "b",
    explanation:
      "MOVSX extends the sign bit (1), filling upper bits with 1s: FFFFFF80h (still -128).",
  },

  // Questions on Addressing Modes (161-170)
  {
    id: "asm-161",
    chapter: "Chapter 3",
    text: "In 'mov eax, 25', what addressing mode is used for the source operand?",
    options: [
      { id: "a", text: "Register" },
      { id: "b", text: "Immediate" },
      { id: "c", text: "Direct" },
      { id: "d", text: "Indirect" },
    ],
    correctOptionId: "b",
    explanation:
      "Immediate addressing: the value (25) is part of the instruction itself.",
  },
  {
    id: "asm-162",
    chapter: "Chapter 3",
    text: "In 'mov eax, ebx', what addressing mode is used?",
    options: [
      { id: "a", text: "Immediate" },
      { id: "b", text: "Register" },
      { id: "c", text: "Direct" },
      { id: "d", text: "Indirect" },
    ],
    correctOptionId: "b",
    explanation: "Register addressing: both operands are registers.",
  },
  {
    id: "asm-163",
    chapter: "Chapter 3",
    text: "In 'mov eax, [var1]', what addressing mode is used for the source?",
    options: [
      { id: "a", text: "Immediate" },
      { id: "b", text: "Register" },
      { id: "c", text: "Direct (or displacement)" },
      { id: "d", text: "Register indirect" },
    ],
    correctOptionId: "c",
    explanation:
      "Direct addressing: the memory address is specified directly in the instruction.",
  },
  {
    id: "asm-164",
    chapter: "Chapter 3",
    text: "What does 'mov eax, [ebx]' represent?",
    options: [
      { id: "a", text: "Move EBX into EAX" },
      {
        id: "b",
        text: "Move the value at the address contained in EBX into EAX",
      },
      { id: "c", text: "Move EAX to the address in EBX" },
      { id: "d", text: "Add EBX to EAX" },
    ],
    correctOptionId: "b",
    explanation:
      "Register indirect addressing: EBX contains the memory address, [EBX] is the value at that address.",
  },
  {
    id: "asm-165",
    chapter: "Chapter 3",
    text: "In register indirect addressing, what does the register contain?",
    options: [
      { id: "a", text: "The actual data" },
      { id: "b", text: "The address of the data" },
      { id: "c", text: "An offset value" },
      { id: "d", text: "A flag value" },
    ],
    correctOptionId: "b",
    explanation:
      "The register holds a memory address (pointer) to the actual data.",
  },
  {
    id: "asm-166",
    chapter: "Chapter 3",
    text: "What addressing mode does 'mov eax, [ebx+4]' use?",
    options: [
      { id: "a", text: "Register indirect" },
      { id: "b", text: "Indexed" },
      { id: "c", text: "Base-displacement (or base-plus-displacement)" },
      { id: "d", text: "Direct" },
    ],
    correctOptionId: "c",
    explanation:
      "Base-displacement: EBX is the base register, 4 is the displacement (offset).",
  },
  {
    id: "asm-167",
    chapter: "Chapter 3",
    text: "In 'mov eax, [ebx+esi]', what is this addressing mode called?",
    options: [
      { id: "a", text: "Direct" },
      { id: "b", text: "Base-indexed" },
      { id: "c", text: "Displacement" },
      { id: "d", text: "Immediate" },
    ],
    correctOptionId: "b",
    explanation:
      "Base-indexed addressing: EBX is the base, ESI is the index register.",
  },
  {
    id: "asm-168",
    chapter: "Chapter 3",
    text: "Which addressing mode allows you to access array elements efficiently?",
    options: [
      { id: "a", text: "Immediate" },
      { id: "b", text: "Register" },
      { id: "c", text: "Indexed or base-displacement" },
      { id: "d", text: "Direct only" },
    ],
    correctOptionId: "c",
    explanation:
      "Indexed addressing is ideal for arrays: base + index * element_size.",
  },
  {
    id: "asm-169",
    chapter: "Chapter 3",
    text: "Can you use ESP as an index register in indexed addressing?",
    options: [
      { id: "a", text: "Yes, always" },
      { id: "b", text: "No, ESP cannot be used as an index register" },
      { id: "c", text: "Yes, but only in 64-bit mode" },
      { id: "d", text: "Only with special prefixes" },
    ],
    correctOptionId: "b",
    explanation:
      "ESP cannot be used as an index register in x86 addressing modes.",
  },
  {
    id: "asm-170",
    chapter: "Chapter 3",
    text: "What does the LEA instruction do?",
    options: [
      { id: "a", text: "Loads the effective address into a register" },
      { id: "b", text: "Loads the actual value from memory" },
      { id: "c", text: "Leaves the accumulator" },
      { id: "d", text: "Links external addresses" },
    ],
    correctOptionId: "a",
    explanation:
      "LEA (Load Effective Address) calculates an address and loads it into a register, without accessing memory.",
  },

  // Questions on Procedures and the Stack (171-180)
  {
    id: "asm-171",
    chapter: "Chapter 3",
    text: "What instruction is used to call a procedure?",
    options: [
      { id: "a", text: "JMP" },
      { id: "b", text: "CALL" },
      { id: "c", text: "PROC" },
      { id: "d", text: "INVOKE" },
    ],
    correctOptionId: "b",
    explanation:
      "CALL instruction pushes the return address and jumps to the procedure.",
  },
  {
    id: "asm-172",
    chapter: "Chapter 3",
    text: "What does the CALL instruction do?",
    options: [
      { id: "a", text: "Jumps to a procedure" },
      { id: "b", text: "Pushes the return address and jumps to the procedure" },
      { id: "c", text: "Returns from a procedure" },
      { id: "d", text: "Calls an interrupt" },
    ],
    correctOptionId: "b",
    explanation:
      "CALL saves the return address on the stack and transfers control to the procedure.",
  },
  {
    id: "asm-173",
    chapter: "Chapter 3",
    text: "Which instruction returns from a procedure?",
    options: [
      { id: "a", text: "RETURN" },
      { id: "b", text: "RET" },
      { id: "c", text: "ENDP" },
      { id: "d", text: "EXIT" },
    ],
    correctOptionId: "b",
    explanation:
      "RET (return) pops the return address from the stack and jumps to it.",
  },
  {
    id: "asm-174",
    chapter: "Chapter 3",
    text: "What does the RET instruction do?",
    options: [
      { id: "a", text: "Jumps to a label" },
      {
        id: "b",
        text: "Pops the return address from the stack and jumps to it",
      },
      { id: "c", text: "Returns a value" },
      { id: "d", text: "Resets the program" },
    ],
    correctOptionId: "b",
    explanation:
      "RET retrieves the saved return address and continues execution after the CALL.",
  },
  {
    id: "asm-175",
    chapter: "Chapter 3",
    text: "What instruction pushes a value onto the stack?",
    options: [
      { id: "a", text: "STORE" },
      { id: "b", text: "PUT" },
      { id: "c", text: "PUSH" },
      { id: "d", text: "SAVE" },
    ],
    correctOptionId: "c",
    explanation:
      "PUSH decrements ESP and stores the value at the new top of stack.",
  },
  {
    id: "asm-176",
    chapter: "Chapter 3",
    text: "What instruction removes (pops) a value from the stack?",
    options: [
      { id: "a", text: "REMOVE" },
      { id: "b", text: "GET" },
      { id: "c", text: "POP" },
      { id: "d", text: "RESTORE" },
    ],
    correctOptionId: "c",
    explanation:
      "POP retrieves the value at the top of stack and increments ESP.",
  },
  {
    id: "asm-177",
    chapter: "Chapter 3",
    text: "What happens to ESP when you PUSH a value?",
    options: [
      { id: "a", text: "ESP increases" },
      { id: "b", text: "ESP decreases" },
      { id: "c", text: "ESP remains unchanged" },
      { id: "d", text: "ESP is cleared" },
    ],
    correctOptionId: "b",
    explanation:
      "The stack grows downward in memory, so PUSH decrements ESP (subtracts 4 for 32-bit).",
  },
  {
    id: "asm-178",
    chapter: "Chapter 3",
    text: "What happens to ESP when you POP a value?",
    options: [
      { id: "a", text: "ESP increases" },
      { id: "b", text: "ESP decreases" },
      { id: "c", text: "ESP remains unchanged" },
      { id: "d", text: "ESP is set to 0" },
    ],
    correctOptionId: "a",
    explanation:
      "POP increments ESP (adds 4 for 32-bit), moving up toward higher addresses.",
  },
  {
    id: "asm-179",
    chapter: "Chapter 3",
    text: "In a procedure, what is a stack frame?",
    options: [
      { id: "a", text: "The size of the stack" },
      {
        id: "b",
        text: "The area on the stack reserved for local variables and parameters",
      },
      { id: "c", text: "The first element on the stack" },
      { id: "d", text: "The last element on the stack" },
    ],
    correctOptionId: "b",
    explanation:
      "A stack frame contains local variables, parameters, and saved registers for a procedure.",
  },
  {
    id: "asm-180",
    chapter: "Chapter 3",
    text: "Which register is commonly used as a base pointer for accessing stack frames?",
    options: [
      { id: "a", text: "ESP" },
      { id: "b", text: "EBP" },
      { id: "c", text: "ESI" },
      { id: "d", text: "EDI" },
    ],
    correctOptionId: "b",
    explanation:
      "EBP (base pointer) provides a stable reference point for accessing stack frame contents.",
  },

  // Miscellaneous Questions (181-200)
  {
    id: "asm-181",
    chapter: "Chapter 3",
    text: "What does the NOP instruction do?",
    options: [
      { id: "a", text: "Stops the program" },
      { id: "b", text: "No operation (does nothing)" },
      { id: "c", text: "Negates the operand" },
      { id: "d", text: "Normalizes a value" },
    ],
    correctOptionId: "b",
    explanation:
      "NOP performs no operation, simply advancing to the next instruction.",
  },
  {
    id: "asm-182",
    chapter: "Chapter 3",
    text: "Why might you use NOP instructions?",
    options: [
      { id: "a", text: "For timing purposes or code alignment" },
      { id: "b", text: "To fill space" },
      { id: "c", text: "For debugging" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    explanation:
      "NOPs are used for timing delays, aligning code to memory boundaries, and as placeholders during development.",
  },
  {
    id: "asm-183",
    chapter: "Chapter 3",
    text: "What is the opcode for NOP?",
    options: [
      { id: "a", text: "00h" },
      { id: "b", text: "90h" },
      { id: "c", text: "FFh" },
      { id: "d", text: "C3h" },
    ],
    correctOptionId: "b",
    explanation: "The machine code for NOP is 90h.",
  },
  {
    id: "asm-184",
    chapter: "Chapter 3",
    text: "Which instruction compares two operands by subtracting them without storing the result?",
    options: [
      { id: "a", text: "SUB" },
      { id: "b", text: "TEST" },
      { id: "c", text: "CMP" },
      { id: "d", text: "AND" },
    ],
    correctOptionId: "c",
    explanation:
      "CMP performs subtraction and sets flags, but doesn't modify the operands.",
  },
  {
    id: "asm-185",
    chapter: "Chapter 3",
    text: "After a CMP instruction, which flags are typically affected?",
    options: [
      { id: "a", text: "Only Zero flag" },
      { id: "b", text: "Only Carry flag" },
      { id: "c", text: "Zero, Carry, Sign, Overflow, Parity" },
      { id: "d", text: "No flags are affected" },
    ],
    correctOptionId: "c",
    explanation: "CMP affects the same flags as SUB: ZF, CF, SF, OF, PF, AF.",
  },
  {
    id: "asm-186",
    chapter: "Chapter 3",
    text: "What does the TEST instruction do?",
    options: [
      { id: "a", text: "Tests if a register is zero" },
      {
        id: "b",
        text: "Performs a logical AND and sets flags without storing the result",
      },
      { id: "c", text: "Tests the condition codes" },
      { id: "d", text: "Runs a test suite" },
    ],
    correctOptionId: "b",
    explanation:
      "TEST performs bitwise AND and sets flags, useful for testing specific bits.",
  },
  {
    id: "asm-187",
    chapter: "Chapter 3",
    text: "Which instruction performs a logical AND operation?",
    options: [
      { id: "a", text: "AND" },
      { id: "b", text: "LAND" },
      { id: "c", text: "ANDB" },
      { id: "d", text: "LOGICAL_AND" },
    ],
    correctOptionId: "a",
    explanation:
      "AND performs bitwise AND: destination = destination AND source.",
  },
  {
    id: "asm-188",
    chapter: "Chapter 3",
    text: "What does 'and eax, 0FFh' do?",
    options: [
      { id: "a", text: "Sets EAX to 0FFh" },
      { id: "b", text: "Clears all bits in EAX except the lowest 8 bits" },
      { id: "c", text: "Inverts all bits in EAX" },
      { id: "d", text: "Adds 0FFh to EAX" },
    ],
    correctOptionId: "b",
    explanation:
      "ANDing with 0FFh masks off all but the lowest 8 bits (creates a bitmask).",
  },
  {
    id: "asm-189",
    chapter: "Chapter 3",
    text: "Which instruction performs a logical OR operation?",
    options: [
      { id: "a", text: "OR" },
      { id: "b", text: "LOR" },
      { id: "c", text: "ORB" },
      { id: "d", text: "LOGICAL_OR" },
    ],
    correctOptionId: "a",
    explanation: "OR performs bitwise OR: destination = destination OR source.",
  },
  {
    id: "asm-190",
    chapter: "Chapter 3",
    text: "What does 'xor eax, eax' do?",
    options: [
      { id: "a", text: "Doubles EAX" },
      { id: "b", text: "Clears EAX to zero" },
      { id: "c", text: "Inverts all bits in EAX" },
      { id: "d", text: "Does nothing" },
    ],
    correctOptionId: "b",
    explanation:
      "XORing a value with itself always produces zero. This is a common idiom for zeroing registers.",
  },
  {
    id: "asm-191",
    chapter: "Chapter 3",
    text: "Why is 'xor reg, reg' commonly used to zero a register?",
    options: [
      { id: "a", text: "It's the only way" },
      { id: "b", text: "It's faster and uses fewer bytes than 'mov reg, 0'" },
      { id: "c", text: "It sets special flags" },
      { id: "d", text: "It works on all processors" },
    ],
    correctOptionId: "b",
    explanation:
      "XOR reg,reg is 2 bytes vs MOV reg,0 which is 5 bytes for 32-bit registers. It's also faster.",
  },
  {
    id: "asm-192",
    chapter: "Chapter 3",
    text: "Which instruction performs a logical NOT (one's complement)?",
    options: [
      { id: "a", text: "NEG" },
      { id: "b", text: "NOT" },
      { id: "c", text: "INVERT" },
      { id: "d", text: "COMPLEMENT" },
    ],
    correctOptionId: "b",
    explanation: "NOT inverts all bits: 0→1, 1→0 (one's complement).",
  },
  {
    id: "asm-193",
    chapter: "Chapter 3",
    text: "What is the difference between NOT and NEG?",
    options: [
      {
        id: "a",
        text: "NOT is logical inversion, NEG is two's complement negation",
      },
      { id: "b", text: "NOT is for unsigned, NEG is for signed" },
      { id: "c", text: "There is no difference" },
      { id: "d", text: "NOT works on bytes, NEG on words" },
    ],
    correctOptionId: "a",
    explanation:
      "NOT inverts bits. NEG computes 0 - operand (two's complement: invert bits and add 1).",
  },
  {
    id: "asm-194",
    chapter: "Chapter 3",
    text: "Which instruction shifts bits to the left?",
    options: [
      { id: "a", text: "SHL or SAL" },
      { id: "b", text: "SHR" },
      { id: "c", text: "ROL" },
      { id: "d", text: "ROR" },
    ],
    correctOptionId: "a",
    explanation:
      "SHL (Shift Left) and SAL (Shift Arithmetic Left) are functionally identical.",
  },
  {
    id: "asm-195",
    chapter: "Chapter 3",
    text: "What happens to the rightmost bit when you execute SHL?",
    options: [
      { id: "a", text: "It's preserved" },
      { id: "b", text: "It's filled with 0" },
      { id: "c", text: "It's filled with 1" },
      { id: "d", text: "It's filled with the sign bit" },
    ],
    correctOptionId: "b",
    explanation:
      "SHL shifts bits left, with 0 filling in from the right. The leftmost bit goes to the carry flag.",
  },
  {
    id: "asm-196",
    chapter: "Chapter 3",
    text: "What is the effect of 'shl eax, 1' on the value in EAX?",
    options: [
      { id: "a", text: "Divides by 2" },
      { id: "b", text: "Multiplies by 2" },
      { id: "c", text: "Adds 1" },
      { id: "d", text: "No effect" },
    ],
    correctOptionId: "b",
    explanation: "Shifting left by 1 bit is equivalent to multiplying by 2.",
  },
  {
    id: "asm-197",
    chapter: "Chapter 3",
    text: "Which instruction shifts bits to the right, filling with zeros?",
    options: [
      { id: "a", text: "SHL" },
      { id: "b", text: "SHR (logical shift right)" },
      { id: "c", text: "SAR" },
      { id: "d", text: "ROR" },
    ],
    correctOptionId: "b",
    explanation:
      "SHR (Shift Right) shifts bits right with 0 filling from the left.",
  },
  {
    id: "asm-198",
    chapter: "Chapter 3",
    text: "What is SAR (Shift Arithmetic Right)?",
    options: [
      { id: "a", text: "A logical shift right" },
      { id: "b", text: "A shift right that preserves the sign bit" },
      { id: "c", text: "A rotation operation" },
      { id: "d", text: "A swap operation" },
    ],
    correctOptionId: "b",
    explanation:
      "SAR shifts right while copying the sign bit (MSB) into vacated positions, preserving the sign.",
  },
  {
    id: "asm-199",
    chapter: "Chapter 3",
    text: "Which instructions rotate bits without going through the carry flag?",
    options: [
      { id: "a", text: "RCL and RCR" },
      { id: "b", text: "SHL and SHR" },
      { id: "c", text: "ROL and ROR" },
      { id: "d", text: "SAL and SAR" },
    ],
    correctOptionId: "c",
    explanation:
      "ROL (Rotate Left) and ROR (Rotate Right) rotate bits in a circular fashion without involving CF.",
  },
  {
    id: "asm-200",
    chapter: "Chapter 3",
    text: "What is the difference between ROL and RCL?",
    options: [
      { id: "a", text: "ROL rotates through carry, RCL doesn't" },
      { id: "b", text: "RCL rotates through carry, ROL doesn't" },
      { id: "c", text: "They are the same" },
      { id: "d", text: "ROL is for bytes, RCL for words" },
    ],
    correctOptionId: "b",
    explanation:
      "RCL (Rotate through Carry Left) includes the carry flag in the rotation. ROL does not.",
  },
];

export default assemblyChapters23;

export const allQuestions = [...cpe301Chapter1, ...assemblyChapters23];
