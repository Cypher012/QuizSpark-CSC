import { QuestionV2 } from "@/lib/quiz-types";

const cpe301Chapter2Part1: QuestionV2[] = [
  // ─── SECTION 2.1 – General Concepts / Basic Microcomputer Design ───

  {
    id: "cpe301_001",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which component inside the CPU is responsible for coordinating the sequencing of steps involved in executing machine instructions?",
    options: [
      "Arithmetic Logic Unit (ALU)",
      "Clock",
      "Control Unit (CU)",
      "Instruction Pointer",
    ],
    correctAnswer: 2,
    explanation:
      "The Control Unit (CU) coordinates the sequencing of steps involved in executing machine instructions, while the ALU handles arithmetic/logical operations and the clock synchronizes operations.",
  },
  {
    id: "cpe301_002",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A CPU operates at 2 GHz. What is the duration of a single clock cycle?",
    options: [
      "0.5 microseconds",
      "0.5 nanoseconds",
      "2 nanoseconds",
      "1 millisecond",
    ],
    correctAnswer: 1,
    explanation:
      "Clock cycle duration = 1 / frequency. 1 / 2,000,000,000 = 0.5 × 10⁻⁹ seconds = 0.5 nanoseconds.",
  },
  {
    id: "cpe301_003",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which bus holds the addresses of instructions and data when the currently executing instruction transfers data between the CPU and memory?",
    options: ["Data bus", "Control bus", "I/O bus", "Address bus"],
    correctAnswer: 3,
    explanation:
      "The address bus holds the addresses of instructions and data when the currently executing instruction transfers data between the CPU and memory.",
  },
  {
    id: "cpe301_004",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which bus uses binary signals to synchronize the actions of all devices attached to the system bus?",
    options: ["Address bus", "Data bus", "Control bus", "I/O bus"],
    correctAnswer: 2,
    explanation:
      "The control bus uses binary signals to synchronize actions of all devices attached to the system bus.",
  },
  {
    id: "cpe301_005",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "What term describes empty clock cycles that occur during memory access due to speed differences between the CPU and memory circuits?",
    options: ["Cache misses", "Wait states", "Bus stalls", "Pipeline flushes"],
    correctAnswer: 1,
    explanation:
      "Instructions requiring memory access often have empty clock cycles called wait states because of the differences in speeds between the CPU, the system bus, and memory circuits.",
  },
  {
    id: "cpe301_006",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In the correct order, what are the three simplified steps of the instruction execution cycle?",
    options: [
      "Execute, Fetch, Decode",
      "Decode, Fetch, Execute",
      "Fetch, Decode, Execute",
      "Fetch, Execute, Decode",
    ],
    correctAnswer: 2,
    explanation:
      "The three primary operations of the instruction execution cycle are Fetch, Decode, and Execute — in that order.",
  },
  {
    id: "cpe301_007",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "How many distinct steps does reading a single value from memory typically involve at the hardware level?",
    options: ["2", "3", "4", "6"],
    correctAnswer: 2,
    explanation:
      "Reading from memory involves four steps: (1) place the address on the address bus, (2) assert the RD pin, (3) wait one clock cycle for the memory chips to respond, (4) copy data from the data bus into the destination operand.",
  },
  {
    id: "cpe301_008",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A programmer states: 'Asserting the processor's RD pin is the first step in reading from memory.' Is this correct?",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. The first step is placing the address of the value on the address bus. Asserting the RD (read) pin is the second step.",
  },
  {
    id: "cpe301_009",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "What type of memory chip is cache memory constructed from, making it faster than conventional RAM?",
    options: ["Dynamic RAM (DRAM)", "EPROM", "Static RAM (SRAM)", "CMOS RAM"],
    correctAnswer: 2,
    explanation:
      "Cache memory is constructed from static RAM (SRAM). Unlike DRAM, SRAM does not need to be constantly refreshed, making it faster though more expensive.",
  },
  {
    id: "cpe301_010",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "When the CPU successfully finds its required data in cache memory, this is called a:",
    options: ["Cache flush", "Cache miss", "Cache hit", "Cache prefetch"],
    correctAnswer: 2,
    explanation:
      "When the processor is able to find its data in cache memory, it is called a cache hit. If the data is not found, it is called a cache miss.",
  },
  {
    id: "cpe301_011",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Level-1 (primary) cache differs from Level-2 (secondary) cache primarily in that Level-1 cache is:",
    options: [
      "Larger and slower",
      "Stored directly on the CPU chip",
      "Connected via a standard PCI bus",
      "Made of dynamic RAM",
    ],
    correctAnswer: 1,
    explanation:
      "Level-1 cache is stored right on the CPU itself. Level-2 cache is a little bit slower and attached to the CPU by a high-speed data bus.",
  },
  {
    id: "cpe301_012",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "After the CPU fetches an instruction from the instruction queue, what does it do to the instruction pointer?",
    options: [
      "Decrements it",
      "Resets it to zero",
      "Increments it",
      "Stores it in a segment register",
    ],
    correctAnswer: 2,
    explanation:
      "Right after fetching an instruction from the instruction queue, the CPU increments the instruction pointer so it points to the next instruction.",
  },
  {
    id: "cpe301_013",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "During the instruction execution cycle, which step involves the CPU examining the binary bit pattern of an instruction to determine what operation to perform?",
    options: ["Fetch", "Decode", "Execute", "Store"],
    correctAnswer: 1,
    explanation:
      "During the Decode step, the CPU decodes the instruction by looking at its binary bit pattern. This bit pattern might reveal that the instruction has operands.",
  },
  {
    id: "cpe301_014",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In the expression Z = X + Y executed by the CPU, X and Y are best described as:",
    options: [
      "Output operands",
      "Status flags",
      "Input operands",
      "Segment descriptors",
    ],
    correctAnswer: 2,
    explanation:
      "An operand is a value that is either an input or an output to an operation. In Z = X + Y, X and Y are the two input operands and Z is the output operand.",
  },
  {
    id: "cpe301_015",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Static RAM (SRAM) is more expensive than dynamic RAM (DRAM) because:",
    options: [
      "It stores more data per chip",
      "It requires ultraviolet light to erase",
      "It does not need to be constantly refreshed to retain its contents",
      "It operates at lower voltages",
    ],
    correctAnswer: 2,
    explanation:
      "SRAM does not have to be constantly refreshed in order to keep its contents, unlike DRAM which must be refreshed constantly. This makes SRAM faster and more expensive.",
  },
  {
    id: "cpe301_016",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which component is responsible for loading a program into memory before execution?",
    options: [
      "The BIOS subroutine",
      "The ALU",
      "A program loader utility",
      "The instruction decoder",
    ],
    correctAnswer: 2,
    explanation:
      "Before a program can run, it must be loaded into memory by a utility known as a program loader. After loading, the OS points the CPU to the program's entry point.",
  },
  {
    id: "cpe301_017",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A running program instance managed by the operating system is called a:",
    options: ["Thread", "Module", "Process", "Subroutine"],
    correctAnswer: 2,
    explanation:
      "As soon as a program begins running, it is called a process. The OS assigns the process an identification number (process ID) to keep track of it while running.",
  },
  {
    id: "cpe301_018",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The data bus transfers data between which two components?",
    options: [
      "The CPU and I/O devices only",
      "The CPU and memory",
      "Memory and I/O devices",
      "The ALU and the control unit",
    ],
    correctAnswer: 1,
    explanation:
      "The data bus transfers instructions and data between the CPU and memory. The I/O bus (not the data bus) transfers data between the CPU and system I/O devices.",
  },
  {
    id: "cpe301_019",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The instruction execution cycle step that may involve address calculations occurs when:",
    options: [
      "The CPU updates the status flags",
      "The CPU fetches operands from registers and memory",
      "The CPU increments the instruction pointer",
      "The CPU stores the result in the output operand",
    ],
    correctAnswer: 1,
    explanation:
      "If operands are involved, the CPU fetches the operands from registers and memory. Sometimes, this involves address calculations.",
  },
  {
    id: "cpe301_020",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The multiply instruction on the 8088 processor can require in excess of how many clock cycles to execute?",
    options: ["10", "25", "50", "100"],
    correctAnswer: 2,
    explanation:
      "A machine instruction requires at least one clock cycle. A few instructions require in excess of 50 clocks — for example, the multiply instruction on the 8088 processor.",
  },
  {
    id: "cpe301_021",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: All processing of data takes place within memory, and programs within the CPU must be copied into memory before they can execute.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. It is the reverse: all processing takes place within the CPU, and programs residing in memory must be copied into the CPU before they can execute.",
  },
  {
    id: "cpe301_022",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "When loading a program, after the OS locates and loads the program file into memory, what does it create to track the program?",
    options: [
      "A cache entry",
      "A segment register value",
      "A process with a process ID",
      "A BIOS interrupt handler",
    ],
    correctAnswer: 2,
    explanation:
      "The OS begins execution of the program's first machine instruction. As soon as it runs, it is called a process, and the OS assigns it a process ID to keep track of it.",
  },
  {
    id: "cpe301_023",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which block inside the CPU shown in Figure 2-2 determines which instruction will be executed next?",
    options: [
      "The data cache",
      "The floating-point unit",
      "The instruction pointer",
      "The ALU",
    ],
    correctAnswer: 2,
    explanation:
      "The instruction pointer's value determines which instruction will be executed next. The instruction is then analyzed by the instruction decoder.",
  },
  {
    id: "cpe301_024",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The code cache stores the most recently fetched program instructions so the CPU can access them quickly without re-reading memory.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. In order to read program instructions from memory, an address is placed on the address bus, and the memory controller places requested code on the data bus, making it available inside the code cache.",
  },

  // ─── SECTION 2.2 – 32-Bit x86 Processors ───

  {
    id: "cpe301_025",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which mode is considered the native state of the x86 processor in which all instructions and features are available?",
    options: [
      "Real-address mode",
      "Virtual-8086 mode",
      "System management mode",
      "Protected mode",
    ],
    correctAnswer: 3,
    explanation:
      "Protected mode is the native state of the processor, in which all instructions and features are available. Programs are given separate memory areas named segments.",
  },
  {
    id: "cpe301_026",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In 32-bit protected mode, a task or program can address a linear address space of up to:",
    options: ["1 MByte", "64 MBytes", "4 GBytes", "64 GBytes"],
    correctAnswer: 2,
    explanation:
      "In 32-bit protected mode, a task or program can address a linear address space of up to 4 GBytes. Extended physical addressing (P6+) allows up to 64 GBytes of physical memory.",
  },
  {
    id: "cpe301_027",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Real-address mode programs can only address a range of:",
    options: ["4 GBytes", "64 KBytes", "1 MByte", "256 MBytes"],
    correctAnswer: 2,
    explanation:
      "Real-address mode programs can only address a range of 1 MByte (hexadecimal 00000 to FFFFF).",
  },
  {
    id: "cpe301_028",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which x86 operating mode allows existing real-address mode software like MS-DOS programs to run safely within protected mode?",
    options: [
      "System management mode",
      "Virtual-8086 mode",
      "Compatibility mode",
      "64-bit mode",
    ],
    correctAnswer: 1,
    explanation:
      "Virtual-8086 mode allows the processor (while in protected mode) to directly execute real-address mode software such as MS-DOS programs in a safe environment.",
  },
  {
    id: "cpe301_029",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "System Management Mode (SMM) is primarily used to implement which types of functions?",
    options: [
      "Floating-point arithmetic and MMX processing",
      "Power management and system security",
      "Virtual memory paging and segmentation",
      "High-speed network communication",
    ],
    correctAnswer: 1,
    explanation:
      "SMM provides an operating system with a mechanism for implementing functions such as power management and system security, usually implemented by computer manufacturers.",
  },
  {
    id: "cpe301_030",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "How many general-purpose registers does a 32-bit x86 processor have?",
    options: ["4", "6", "8", "16"],
    correctAnswer: 2,
    explanation:
      "There are eight general-purpose registers in the 32-bit x86 execution environment: EAX, EBX, ECX, EDX, ESI, EDI, EBP, and ESP.",
  },
  {
    id: "cpe301_031",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A programmer needs to access only the lower 8 bits of the EBX register. Which register name should they use?",
    options: ["BH", "BX", "BL", "EBL"],
    correctAnswer: 2,
    explanation:
      "BL refers to the lower 8 bits of BX (the lower 16 bits of EBX). BH refers to the upper 8 bits of BX. There is no 'EBL' register.",
  },
  {
    id: "cpe301_032",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which register does the CPU automatically use as a loop counter?",
    options: ["EAX", "EBX", "ECX", "EDX"],
    correctAnswer: 2,
    explanation:
      "The CPU automatically uses ECX as a loop counter. EAX is the extended accumulator (used in multiply/divide), and ESP is the stack pointer.",
  },
  {
    id: "cpe301_033",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which register is automatically used by multiplication and division instructions and is often called the extended accumulator register?",
    options: ["EBX", "ECX", "EAX", "EDX"],
    correctAnswer: 2,
    explanation:
      "EAX is automatically used by multiplication and division instructions. It is often called the extended accumulator register.",
  },
  {
    id: "cpe301_034",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A developer is writing a high-speed memory transfer routine. Which two registers are specifically designed for this purpose?",
    options: ["EAX and EBX", "EBP and ESP", "ESI and EDI", "ECX and EDX"],
    correctAnswer: 2,
    explanation:
      "ESI (extended source index) and EDI (extended destination index) are used by high-speed memory transfer instructions.",
  },
  {
    id: "cpe301_035",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The EBP register is safe to use for ordinary arithmetic or data transfer without any restrictions.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. EBP is used by high-level languages to reference function parameters and local variables on the stack. It should NOT be used for ordinary arithmetic or data transfer except at an advanced level.",
  },
  {
    id: "cpe301_036",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which register contains the address of the next instruction to be executed?",
    options: ["EFLAGS", "ESP", "EBP", "EIP"],
    correctAnswer: 3,
    explanation:
      "EIP (instruction pointer) contains the address of the next instruction to be executed. Certain machine instructions manipulate EIP, causing the program to branch to a new location.",
  },
  {
    id: "cpe301_037",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The EFLAGS register is best described as:",
    options: [
      "A 32-bit register holding the address of the next instruction",
      "A register consisting of individual binary bits that control CPU operation or reflect the outcome of CPU operations",
      "A register that holds pointers to segment descriptor tables",
      "A floating-point accumulator register",
    ],
    correctAnswer: 1,
    explanation:
      "The EFLAGS register consists of individual binary bits that control the operation of the CPU or reflect the outcome of some CPU operation.",
  },
  {
    id: "cpe301_038",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The Carry flag (CF) is set when:",
    options: [
      "The result of a signed arithmetic operation is too large to fit into the destination",
      "The result of an arithmetic operation generates a value of zero",
      "The result of an unsigned arithmetic operation is too large to fit into the destination",
      "An arithmetic operation causes a carry from bit 3 to bit 4",
    ],
    correctAnswer: 2,
    explanation:
      "The Carry flag (CF) is set when the result of an unsigned arithmetic operation is too large to fit into the destination. The Overflow flag handles signed overflow.",
  },
  {
    id: "cpe301_039",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which status flag is set when the result of a signed arithmetic operation is too large or too small to fit into the destination?",
    options: [
      "Carry flag (CF)",
      "Zero flag (ZF)",
      "Overflow flag (OF)",
      "Auxiliary Carry flag (AC)",
    ],
    correctAnswer: 2,
    explanation:
      "The Overflow flag (OF) is set when the result of a signed arithmetic operation is too large or too small to fit into the destination.",
  },
  {
    id: "cpe301_040",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A subtraction operation produces a result of 0. Which flag will be set?",
    options: ["Overflow flag", "Sign flag", "Zero flag", "Carry flag"],
    correctAnswer: 2,
    explanation:
      "The Zero flag (ZF) is set when the result of an arithmetic or logical operation generates a result of zero.",
  },
  {
    id: "cpe301_041",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "An arithmetic operation produces a negative result. Which flag is set to reflect this?",
    options: [
      "Overflow flag (OF)",
      "Sign flag (SF)",
      "Parity flag (PF)",
      "Carry flag (CF)",
    ],
    correctAnswer: 1,
    explanation:
      "The Sign flag (SF) is set when the result of an arithmetic or logical operation generates a negative result.",
  },
  {
    id: "cpe301_042",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The Auxiliary Carry flag (AC) is specifically set when:",
    options: [
      "An unsigned operation overflows a 32-bit boundary",
      "An arithmetic operation causes a carry from bit 3 to bit 4 in an 8-bit operand",
      "The least-significant byte has an even number of 1 bits",
      "A signed operation exceeds the maximum 16-bit value",
    ],
    correctAnswer: 1,
    explanation:
      "The Auxiliary Carry flag (AC) is set when an arithmetic operation causes a carry from bit 3 to bit 4 in an 8-bit operand.",
  },
  {
    id: "cpe301_043",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The Parity flag (PF) is used for:",
    options: [
      "Detecting signed overflow conditions",
      "Indicating that the result is zero",
      "Error checking when data might be altered or corrupted",
      "Controlling the direction of string operations",
    ],
    correctAnswer: 2,
    explanation:
      "The Parity flag (PF) is set if the least-significant byte in the result contains an even number of 1 bits. It is generally used for error checking when there is a possibility that data might be altered or corrupted.",
  },
  {
    id: "cpe301_044",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A flag is considered 'set' when its value equals:",
    options: ["0", "1", "-1", "Any non-zero value"],
    correctAnswer: 1,
    explanation:
      "A flag is set when it equals 1; it is clear (or reset) when it equals 0.",
  },
  {
    id: "cpe301_045",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The Carry flag and the Overflow flag both serve the same purpose and can be used interchangeably for arithmetic overflow detection.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. The Carry flag detects overflow in unsigned arithmetic operations, while the Overflow flag detects overflow in signed arithmetic operations. They are distinct and serve different purposes.",
  },
  {
    id: "cpe301_046",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "How many 64-bit MMX registers does a 32-bit x86 processor have?",
    options: ["4", "6", "8", "16"],
    correctAnswer: 2,
    explanation:
      "The x86 processor has eight 64-bit MMX registers that support SIMD (Single-Instruction, Multiple-Data) operations.",
  },
  {
    id: "cpe301_047",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "MMX registers in the x86 processor are actually aliases for which other registers?",
    options: [
      "The XMM registers",
      "The segment registers",
      "The floating-point unit registers",
      "The general-purpose registers EAX through EDX",
    ],
    correctAnswer: 2,
    explanation:
      "Although they appear to be separate registers, the MMX register names are in fact aliases to the same registers used by the floating-point unit (FPU).",
  },
  {
    id: "cpe301_048",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "XMM registers in the x86 architecture are how wide, and how many exist in a 32-bit processor?",
    options: [
      "64-bit, 8 registers",
      "128-bit, 8 registers",
      "128-bit, 16 registers",
      "256-bit, 8 registers",
    ],
    correctAnswer: 1,
    explanation:
      "The x86 architecture contains eight 128-bit registers called XMM registers. They are used by streaming SIMD extensions to the instruction set.",
  },
  {
    id: "cpe301_049",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "How many 80-bit floating-point data registers does the x86 FPU contain?",
    options: ["4", "6", "8", "10"],
    correctAnswer: 2,
    explanation:
      "There are eight floating-point data registers in the FPU, named ST(0) through ST(7), each 80 bits wide.",
  },
  {
    id: "cpe301_050",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "From which Intel processor generation was the Floating-Point Unit (FPU) integrated directly into the main processor chip, rather than requiring a separate coprocessor?",
    options: ["Intel 8086", "Intel 80286", "Intel 80386", "Intel 80486"],
    correctAnswer: 3,
    explanation:
      "From the Intel486 (80486) onward, the FPU has been integrated into the main processor chip. Previously it required a separate coprocessor chip.",
  },
  {
    id: "cpe301_051",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In protected mode, segment registers hold:",
    options: [
      "The base addresses of preassigned memory segments directly",
      "Pointers to segment descriptor tables",
      "The current instruction being executed",
      "The stack pointer value",
    ],
    correctAnswer: 1,
    explanation:
      "In protected mode, segment registers hold pointers to segment descriptor tables. In real-address mode (by contrast), they indicate base addresses of preassigned memory areas named segments.",
  },
  {
    id: "cpe301_052",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which operating system(s) run in real-address mode?",
    options: [
      "MS-Windows and Linux",
      "MS-DOS (and Windows 95/98 can be booted into this mode)",
      "Windows NT and Windows 2000",
      "Only embedded operating systems",
    ],
    correctAnswer: 1,
    explanation:
      "The MS-DOS operating system runs in real-address mode, and Windows 95 and 98 can be booted into this mode. MS-Windows and Linux run in protected mode.",
  },
  {
    id: "cpe301_053",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: In protected mode, programs are prevented from accidentally accessing each other's code and data.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. In protected mode, each program can be assigned its own reserved memory area, and programs are prevented from accidentally accessing each other's code and data.",
  },
  {
    id: "cpe301_054",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A developer accesses register 'CH'. What portion of the 32-bit ECX register does CH represent?",
    options: [
      "The lower 8 bits of ECX",
      "The upper 8 bits of the lower 16 bits (bits 8–15) of ECX",
      "Bits 16–23 of ECX",
      "The full upper 16 bits of ECX",
    ],
    correctAnswer: 1,
    explanation:
      "CH represents the upper 8-bit half of the CX register (which is the lower 16 bits of ECX). Specifically, CH maps to bits 8–15 of ECX.",
  },
  {
    id: "cpe301_055",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which of the following registers CANNOT be directly accessed in an 8-bit form on a 32-bit x86 processor?",
    options: ["EAX", "EDX", "ESI", "ECX"],
    correctAnswer: 2,
    explanation:
      "ESI (and EDI, EBP, ESP) can only be accessed using 32-bit or 16-bit names (ESI or SI). There are no 8-bit aliases for ESI, unlike EAX/EBX/ECX/EDX which have AH/AL, BH/BL, CH/CL, DH/DL.",
  },
  {
    id: "cpe301_056",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The x86 has how many segment registers, and name the correct set:",
    options: [
      "4 registers: CS, DS, SS, ES",
      "6 registers: CS, SS, DS, ES, FS, GS",
      "8 registers: CS, SS, DS, ES, FS, GS, IP, FLAGS",
      "6 registers: EAX, EBX, ECX, EDX, ESI, EDI",
    ],
    correctAnswer: 1,
    explanation:
      "There are six segment registers: CS, SS, DS, ES, FS, and GS. Some hold program instructions (code), others hold variables (data), and one holds local variables and parameters (stack).",
  },
  {
    id: "cpe301_057",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Beginning with which Intel processor did extended physical addressing allow up to 64 GBytes of physical memory to be addressed in protected mode?",
    options: ["Intel 486", "Pentium", "P6 (Pentium Pro and later)", "Core Duo"],
    correctAnswer: 2,
    explanation:
      "Beginning with the P6 processor, a technique called extended physical addressing allows a total of 64 GBytes of physical memory to be addressed.",
  },
  {
    id: "cpe301_058",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: In real-address mode, application programs are restricted from accessing system hardware memory locations.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. In real-address mode, application programs ARE permitted to access any memory location, including addresses that are linked directly to system hardware.",
  },
  {
    id: "cpe301_059",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which SIMD technology uses the XMM registers introduced with the x86 architecture?",
    options: [
      "MMX instructions",
      "Streaming SIMD Extensions (SSE)",
      "FPU scalar operations",
      "AVX-512 instructions",
    ],
    correctAnswer: 1,
    explanation:
      "The eight 128-bit XMM registers are used by streaming SIMD extensions (SSE) to the x86 instruction set.",
  },
  {
    id: "cpe301_060",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A developer wants to read the current value of the instruction pointer on a 32-bit x86 processor. By which register name do they reference it?",
    options: ["IP", "RIP", "EIP", "PC"],
    correctAnswer: 2,
    explanation:
      "On a 32-bit x86 processor, the instruction pointer is named EIP (Extended Instruction Pointer). RIP is the 64-bit version used in 64-bit mode.",
  },

  // ─── SECTION 2.3 – 64-Bit x86-64 Processors ───

  {
    id: "cpe301_061",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "How many general-purpose registers are available in 64-bit mode with the REX prefix enabled?",
    options: ["8", "12", "16", "32"],
    correctAnswer: 2,
    explanation:
      "In 64-bit mode with the REX prefix, a total of 16 general-purpose registers become available: the original eight plus eight numbered registers R8 through R15.",
  },
  {
    id: "cpe301_062",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The x86-64 architecture theoretically supports 64-bit addresses, but current chip implementations use only how many bits for addresses?",
    options: ["32 bits", "40 bits", "48 bits", "56 bits"],
    correctAnswer: 2,
    explanation:
      "Although addresses can theoretically be as large as 64-bits, processors currently only support 48 bits for addresses, supporting up to 256 terabytes of RAM.",
  },
  {
    id: "cpe301_063",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "What is the name of the new operation mode introduced by the Intel 64 architecture that technically contains compatibility mode and 64-bit mode as sub-modes?",
    options: ["IA-32e", "IA-64", "Virtual-8086", "Extended protected mode"],
    correctAnswer: 0,
    explanation:
      "The Intel 64 architecture introduces a new mode named IA-32e. Technically it contains two sub-modes: compatibility mode and 64-bit mode.",
  },
  {
    id: "cpe301_064",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The x86-64 instruction set is fully backward-compatible with the x86 instruction set.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. The x86-64 instruction set is backward-compatible with the x86 instruction set, meaning existing 32-bit code can run without modification.",
  },
  {
    id: "cpe301_065",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which mode of the Intel 64 architecture is the native mode for 64-bit Microsoft Windows and enables 64-bit instruction operands?",
    options: [
      "Compatibility mode",
      "Real-address mode",
      "64-bit mode",
      "System management mode",
    ],
    correctAnswer: 2,
    explanation:
      "In 64-bit mode, the processor runs applications using the 64-bit linear address space. This is the native mode for 64-bit Microsoft Windows and enables 64-bit instruction operands.",
  },
  {
    id: "cpe301_066",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "How many XMM registers does a 64-bit x86-64 processor have, compared to 8 in 32-bit mode?",
    options: ["8", "12", "16", "32"],
    correctAnswer: 2,
    explanation:
      "In 64-bit mode, there are sixteen 128-bit XMM registers, compared to only eight in 32-bit mode.",
  },
  {
    id: "cpe301_067",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "What is the name of the 64-bit flags register used in x86-64 processors, and how many of its bits are actually used?",
    options: [
      "EFLAGS – all 64 bits are used",
      "RFLAGS – only the lower 32 bits are used",
      "RFLAGS – only the lower 16 bits are used",
      "FLAGS64 – all 64 bits are used",
    ],
    correctAnswer: 1,
    explanation:
      "In 64-bit mode, the 32-bit EFLAGS register is replaced by the 64-bit RFLAGS register. The two registers share the same lower 32 bits, and the upper 32 bits of RFLAGS are not used.",
  },
  {
    id: "cpe301_068",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: In native 64-bit mode, x86-64 processors support 16-bit real mode and virtual-8086 mode.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. When running in native 64-bit mode, these processors do NOT support 16-bit real mode or virtual-8086 mode.",
  },
  {
    id: "cpe301_069",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In 64-bit mode with the REX prefix, which operand size is the 8-bit register R9L associated with?",
    options: [
      "It is a 16-bit register",
      "It is an 8-bit register",
      "It is a 32-bit register",
      "R9L does not exist in x86-64",
    ],
    correctAnswer: 1,
    explanation:
      "R9L is one of the 8-bit forms of the R9 register available when the REX prefix is enabled in 64-bit mode. Other 8-bit forms include R8L, R10L through R15L.",
  },
  {
    id: "cpe301_070",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "What is the name of the Intel architecture that uses a completely different instruction set from x86 and x86-64, often used for high-performance database and network servers?",
    options: ["IA-32", "AMD64", "IA-64 (Itanium)", "ARM64"],
    correctAnswer: 2,
    explanation:
      "IA-64 (later renamed Itanium) uses a completely different instruction set from x86 and x86-64. Itanium processors are often used for high-performance database and network servers.",
  },
  {
    id: "cpe301_071",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In 64-bit mode with REX prefix enabled, what is the 32-bit form of the R10 register called?",
    options: ["R10W", "R10L", "R10D", "ER10"],
    correctAnswer: 2,
    explanation:
      "The 32-bit form of R10 is R10D. The 16-bit form is R10W, and the 8-bit form is R10L, following the naming convention of the extended registers.",
  },
  {
    id: "cpe301_072",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: In 64-bit mode, a single instruction CAN access both a high-byte register (such as AH) and the low byte of one of the new byte registers (such as DIL) simultaneously.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. In 64-bit mode, a single instruction CANNOT access both a high-byte register (such as AH, BH, CH, or DH) and at the same time the low byte of one of the new byte registers (such as DIL).",
  },
  {
    id: "cpe301_073",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which was the first Intel processor to use the x86-64 instruction set?",
    options: ["Core i5", "Pentium 4", "Xeon", "Itanium"],
    correctAnswer: 2,
    explanation:
      "The first Intel processor to use x86-64 was the Xeon, followed by others including Core i5 and Core i7 processors.",
  },
  {
    id: "cpe301_074",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The 64-bit instruction pointer register is named:",
    options: ["EIP", "IP64", "RIP", "IPX"],
    correctAnswer: 2,
    explanation:
      "In 64-bit mode, the instruction pointer is named RIP (a 64-bit register), replacing the 32-bit EIP used in 32-bit mode.",
  },
  {
    id: "cpe301_075",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "How many more general-purpose registers does an x86-64 processor have compared to a standard 32-bit x86 processor?",
    options: ["4 more", "6 more", "8 more", "16 more"],
    correctAnswer: 2,
    explanation:
      "x86-64 uses eight more general-purpose registers than the x86 (R8 through R15), for a total of 16 vs. 8.",
  },

  // ─── MIXED / HARDER CONCEPTUAL QUESTIONS ───

  {
    id: "cpe301_076",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "An unsigned addition operation produces a result larger than what fits in a 32-bit register. Which flag combination would you expect to be set?",
    options: [
      "Overflow flag (OF) only",
      "Carry flag (CF) only",
      "Both Carry flag (CF) and Zero flag (ZF)",
      "Sign flag (SF) and Overflow flag (OF)",
    ],
    correctAnswer: 1,
    explanation:
      "The Carry flag (CF) is set when the result of an unsigned arithmetic operation is too large to fit into the destination. The Overflow flag handles signed overflow, not unsigned.",
  },
  {
    id: "cpe301_077",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A program running on a 32-bit x86 system in protected mode crashes. What happens to other programs running simultaneously?",
    options: [
      "All programs crash immediately",
      "The system reboots automatically",
      "Other programs are unaffected because the processor prevents programs from referencing memory outside their assigned segments",
      "Other programs slow down significantly but keep running",
    ],
    correctAnswer: 2,
    explanation:
      "In protected mode, programs are given separate memory areas (segments) and the processor prevents programs from referencing memory outside their assigned segments, protecting other programs.",
  },
  {
    id: "cpe301_078",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A developer writes a loop in assembly and notices ECX is being decremented automatically. This behavior is because:",
    options: [
      "ECX is read-only and cannot be modified by the developer",
      "The CPU automatically uses ECX as a loop counter in specific loop instructions",
      "ECX is the stack pointer and automatically tracks loop depth",
      "The assembler redefines ECX to count instruction cycles",
    ],
    correctAnswer: 1,
    explanation:
      "The CPU automatically uses ECX as a loop counter. Certain loop instructions in x86 assembly (like LOOP) automatically decrement ECX and branch accordingly.",
  },
  {
    id: "cpe301_079",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: Cache memory improves performance because programs are more likely to access the same memory locations and instructions repeatedly.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. The idea behind cache is that a program is more likely to want to access the same memory and instructions repeatedly, so cache keeps these values where they can be accessed quickly.",
  },
  {
    id: "cpe301_080",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "If a 1 GHz processor requires 4 clock cycles to read a value from memory, how long does a complete memory read take?",
    options: [
      "1 nanosecond",
      "2 nanoseconds",
      "4 nanoseconds",
      "1 microsecond",
    ],
    correctAnswer: 2,
    explanation:
      "At 1 GHz, each clock cycle = 1 nanosecond. Reading from memory involves 4 clock cycles, so it takes 4 nanoseconds total.",
  },
  {
    id: "cpe301_081",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A programmer needs to perform high-speed integer SIMD operations on a 32-bit x86 processor. Which register set should they use?",
    options: [
      "Segment registers",
      "ST(0)–ST(7) floating-point registers",
      "MMX registers (which alias the FPU registers)",
      "The general-purpose registers EAX–EDX",
    ],
    correctAnswer: 2,
    explanation:
      "MMX technology uses eight 64-bit MMX registers and supports SIMD (Single-Instruction, Multiple-Data) instructions. These registers are aliases for the FPU registers.",
  },
  {
    id: "cpe301_082",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "When the OS loads a program and adjusts 'values of pointers within the program so they contain addresses of program data,' this process is called:",
    options: [
      "Segmentation",
      "Relocation / address fixup",
      "Paging",
      "Context switching",
    ],
    correctAnswer: 1,
    explanation:
      "The OS may adjust the values of pointers within the program so they contain addresses of program data — this is a relocation/address fixup process performed during loading.",
  },
  {
    id: "cpe301_083",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which of the following correctly describes the relationship between AX, AH, AL, and EAX?",
    options: [
      "EAX is 16 bits, AX is 32 bits, AH and AL are 8 bits each",
      "EAX is 32 bits, AX is the lower 16 bits of EAX, AH is bits 8–15 of EAX, AL is bits 0–7 of EAX",
      "EAX is 32 bits, AX is the upper 16 bits of EAX, AH is the lower 8 bits, AL is bits 8–15",
      "AH and AL together make up EAX directly, bypassing AX",
    ],
    correctAnswer: 1,
    explanation:
      "EAX is 32 bits. AX is the lower 16 bits of EAX. AH (high) is bits 8–15 of EAX. AL (low) is bits 0–7 of EAX. AH and AL together form AX.",
  },
  {
    id: "cpe301_084",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Why is it incorrect to say ESP is suitable for 'ordinary arithmetic or data transfer'?",
    options: [
      "ESP is a read-only register and cannot be written to",
      "ESP is reserved for addressing data on the stack (a system memory structure) and misusing it breaks the program's call stack",
      "ESP only supports 16-bit operations",
      "ESP is automatically cleared after each instruction",
    ],
    correctAnswer: 1,
    explanation:
      "ESP (extended stack pointer) addresses data on the stack. It is rarely used for ordinary arithmetic or data transfer because misusing it would corrupt the call stack, causing crashes.",
  },
  {
    id: "cpe301_085",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: Virtual-8086 mode can be used to run multiple separate MS-DOS sessions simultaneously, each protected from the others.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. A modern operating system can execute multiple separate virtual-8086 sessions at the same time, and each session is protected from the actions of the others.",
  },
  {
    id: "cpe301_086",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A student claims that in 64-bit mode, the status flags are completely different from those in 32-bit mode. Is this correct?",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. The status flags are the same in 32-bit mode and 64-bit mode. RFLAGS shares the same lower 32 bits as EFLAGS; the upper 32 bits are simply not used.",
  },
  {
    id: "cpe301_087",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "If the CPU looks ahead and preloads the next thousand instructions into cache, and a loop is encountered in that block, what is the likely performance benefit?",
    options: [
      "The loop executes on the FPU instead of the ALU",
      "The same instructions will be in cache, allowing repeated execution without memory fetches (cache hits)",
      "The loop counter is automatically set by the cache controller",
      "The instructions are compressed in cache to save space",
    ],
    correctAnswer: 1,
    explanation:
      "When a loop exists in the prefetched block, the same instructions will be in cache. Each iteration results in cache hits, avoiding slow memory accesses and significantly improving performance.",
  },
  {
    id: "cpe301_088",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which x86-64 register is the 64-bit extension of the 32-bit EDX register?",
    options: ["RBX", "RDX", "R4", "R13"],
    correctAnswer: 1,
    explanation:
      "RDX is the 64-bit extension of EDX. The naming convention extends existing registers with an 'R' prefix: EAX→RAX, EBX→RBX, ECX→RCX, EDX→RDX, etc.",
  },
  {
    id: "cpe301_089",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In the x86-64 instruction set, by default (without the REX prefix) in 64-bit mode, what is the default operand size?",
    options: ["16 bits", "32 bits", "64 bits", "128 bits"],
    correctAnswer: 1,
    explanation:
      "In 64-bit mode, the default operand size is 32 bits. By adding the REX prefix to each instruction, the operands can be 64 bits long and 16 general-purpose registers become available.",
  },
  {
    id: "cpe301_090",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which component of the CPU sends digital signals to the control unit after analyzing an instruction, according to the CPU block diagram?",
    options: [
      "The data cache",
      "The ALU",
      "The instruction decoder",
      "The floating-point unit",
    ],
    correctAnswer: 2,
    explanation:
      "The instruction is analyzed by the instruction decoder, causing the appropriate digital signals to be sent to the control unit, which then coordinates the ALU and floating-point unit.",
  },
  {
    id: "cpe301_091",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The x86-64 processors have exactly 4 more general-purpose registers than the 32-bit x86 processors.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. x86-64 processors have 8 more general-purpose registers (R8–R15) than the 32-bit x86, for a total of 16 vs. 8.",
  },
  {
    id: "cpe301_092",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A developer's program is in real-address mode and attempts to write data directly into the system memory area. What happens?",
    options: [
      "The processor raises a protection fault and stops the write",
      "The write succeeds because real-address mode permits programs to access any memory location",
      "The OS intercepts and logs the write, then blocks it",
      "The write is redirected to CMOS RAM",
    ],
    correctAnswer: 1,
    explanation:
      "In real-address mode, application programs ARE permitted to access any memory location, including addresses linked directly to system hardware — there is no memory protection.",
  },
  {
    id: "cpe301_093",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The 16-bit form of the R14 register in 64-bit mode with REX prefix is:",
    options: ["R14L", "R14W", "R14D", "R14X"],
    correctAnswer: 1,
    explanation:
      "The naming convention for the extended registers is: R14 (64-bit), R14D (32-bit), R14W (16-bit), R14L (8-bit). So the 16-bit form is R14W.",
  },
  {
    id: "cpe301_094",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "An arithmetic operation on an 8-bit operand causes a carry from bit position 3 to bit position 4. Which flag is specifically designed to record this event?",
    options: [
      "Carry flag (CF)",
      "Overflow flag (OF)",
      "Auxiliary Carry flag (AC)",
      "Parity flag (PF)",
    ],
    correctAnswer: 2,
    explanation:
      "The Auxiliary Carry flag (AC) is set when an arithmetic operation causes a carry from bit 3 to bit 4 in an 8-bit operand. This is distinct from the regular Carry flag.",
  },
  {
    id: "cpe301_095",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: AMD64 processors (such as Opteron and Athlon 64) support the x86-64 instruction set.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. Examples of AMD processors that use x86-64 are Opteron and Athlon 64. Intel's equivalents include the Xeon, Core i5, and Core i7.",
  },
  {
    id: "cpe301_096",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Compatibility mode in the Intel 64 architecture allows existing 16-bit and 32-bit applications to run usually without recompilation. However, which specific type of application will NOT run in 64-bit Microsoft Windows even in compatibility mode?",
    options: [
      "32-bit Windows (Win32) applications",
      "16-bit Windows (Win16) and DOS applications",
      "Java applications compiled for 32-bit JVM",
      "32-bit Linux ELF binaries",
    ],
    correctAnswer: 1,
    explanation:
      "16-bit Windows (Win16) and DOS applications will not run in 64-bit Microsoft Windows, because 64-bit Windows does not have a virtual DOS machine subsystem.",
  },
  {
    id: "cpe301_097",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "How does the control bus relate to the system clock?",
    options: [
      "The control bus generates the clock signal",
      "The control bus carries signals that use the system clock to coordinate data transfer between different CPU components",
      "The clock bus is a sub-section of the control bus reserved for timing",
      "The control bus runs independently of the system clock",
    ],
    correctAnswer: 1,
    explanation:
      "Although the control bus is not shown in the CPU block diagram, it carries signals that use the system clock to coordinate the transfer of data between the different CPU components.",
  },
  {
    id: "cpe301_098",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A programmer writes assembly code using the ESI register to point to a source string. This is appropriate because ESI is specifically designed as the:",
    options: [
      "Extended Stack Pointer",
      "Extended Segment Indicator",
      "Extended Source Index register",
      "Extended Status Indicator",
    ],
    correctAnswer: 2,
    explanation:
      "ESI stands for Extended Source Index. It (along with EDI, the Extended Destination Index) is used by high-speed memory transfer instructions.",
  },
  {
    id: "cpe301_099",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The Parity flag (PF) is set when the least-significant byte of the result contains an ODD number of 1 bits.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. The Parity flag (PF) is set if the least-significant byte in the result contains an EVEN number of 1 bits. Otherwise, PF is clear.",
  },
  {
    id: "cpe301_100",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A 32-bit x86 processor is running multiple programs simultaneously. Which operating mode makes this possible by assigning each process 4 GBytes of memory and preventing programs from accessing each other's code and data?",
    options: [
      "Real-address mode",
      "System management mode",
      "Virtual-8086 mode",
      "Protected mode",
    ],
    correctAnswer: 3,
    explanation:
      "Protected mode allows the processor to run multiple programs simultaneously. It assigns each process up to 4 GBytes of memory and prevents programs from accidentally accessing each other's code and data. MS-Windows and Linux run in protected mode.",
  },
];

const cpe301Chapter2Part2: QuestionV2[] = [
  // ─── SECTION 2.4 – Components of a Typical x86 Computer ───

  {
    id: "cpe301_101",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "What is a motherboard?",
    options: [
      "A high-speed memory chip embedded in the CPU",
      "A flat circuit board onto which the CPU, supporting processors, main memory, I/O connectors, power connectors, and expansion slots are placed",
      "A specialized coprocessor that handles floating-point arithmetic",
      "The primary storage device for the operating system",
    ],
    correctAnswer: 1,
    explanation:
      "The heart of a microcomputer is its motherboard — a flat circuit board onto which are placed the CPU, supporting processors (chipset), main memory, I/O connectors, power supply connectors, and expansion slots.",
  },
  {
    id: "cpe301_102",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "What connects the various components of a motherboard to each other?",
    options: [
      "Ribbon cables running between chips",
      "A bus — a set of wires etched directly on the motherboard",
      "Optical fiber links between processors",
      "Wireless radio frequency connections",
    ],
    correctAnswer: 1,
    explanation:
      "The various components of a motherboard are connected to each other by a bus — a set of wires etched directly on the motherboard.",
  },
  {
    id: "cpe301_103",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which component on a motherboard holds system software and is installed by the computer manufacturer?",
    options: [
      "CMOS RAM",
      "DRAM memory slots",
      "BIOS chips",
      "The PCI Express bus connector",
    ],
    correctAnswer: 2,
    explanation:
      "BIOS (basic input–output system) computer chips hold system software and are installed by the computer's manufacturer, tailored to fit the computer's hardware.",
  },
  {
    id: "cpe301_104",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Why does CMOS RAM on the motherboard retain its contents when the computer's power is off?",
    options: [
      "It uses static RAM that never loses its data",
      "It is refreshed by a small circular battery",
      "It stores data in magnetic form like a hard disk",
      "It uses flash memory that requires no power",
    ],
    correctAnswer: 1,
    explanation:
      "CMOS RAM on the system motherboard stores system setup information. It is refreshed by a battery, so its contents are retained when the computer's power is off.",
  },
  {
    id: "cpe301_105",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The 8284/82C284 Clock Generator component on the motherboard is responsible for handling external interrupts from hardware devices like the keyboard.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. The 8284/82C284 Clock Generator oscillates at a constant speed and synchronizes the CPU and the rest of the computer. It is the 8259A Programmable Interrupt Controller (PIC) that handles external interrupts from hardware devices.",
  },
  {
    id: "cpe301_106",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The 8259A Programmable Interrupt Controller (PIC) handles external interrupts from which types of hardware devices?",
    options: [
      "Only USB devices and network cards",
      "Keyboard, system clock, and disk drives",
      "Graphics cards and sound cards only",
      "Power supply and thermal sensors",
    ],
    correctAnswer: 1,
    explanation:
      "The 8259A PIC handles external interrupts from hardware devices such as the keyboard, system clock, and disk drives. These devices interrupt the CPU and make it process their requests immediately.",
  },
  {
    id: "cpe301_107",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The 8253 Programmable Interval Timer/Counter performs all of the following EXCEPT:",
    options: [
      "Interrupting the system 18.2 times per second",
      "Updating the system date and clock",
      "Handling external keyboard interrupts",
      "Constantly refreshing memory (RAM)",
    ],
    correctAnswer: 2,
    explanation:
      "The 8253 Programmable Interval Timer/Counter interrupts the system 18.2 times per second, updates the system date and clock, controls the speaker, and refreshes memory. Handling keyboard interrupts is the job of the 8259A PIC.",
  },
  {
    id: "cpe301_108",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Why must RAM (DRAM) memory chips be constantly refreshed by the 8253 timer?",
    options: [
      "To keep the data bus synchronized with the CPU clock",
      "Because RAM memory chips can only remember their data for a few milliseconds without refresh",
      "To prevent memory addresses from being reassigned by the OS",
      "Because refresh cycles write error-correction data to prevent bit rot",
    ],
    correctAnswer: 1,
    explanation:
      "The 8253 timer is responsible for constantly refreshing memory because RAM memory chips can remember their data for only a few milliseconds without being refreshed.",
  },
  {
    id: "cpe301_109",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The 8255 Programmable Parallel Port transfers data using which interface standard?",
    options: ["USB 2.0", "PCI Express", "IEEE Parallel Port", "Serial ATA"],
    correctAnswer: 2,
    explanation:
      "The 8255 Programmable Parallel Port transfers data to and from the computer using the IEEE Parallel Port interface. It is commonly used for printers but can be used with other I/O devices.",
  },
  {
    id: "cpe301_110",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which bus architecture carries data in packets similar to a network, in separate 'lanes,' providing two-way serial connections between devices?",
    options: ["ISA bus", "PCI bus", "AGP bus", "PCI Express bus"],
    correctAnswer: 3,
    explanation:
      "The PCI Express bus provides two-way serial connections between devices, memory, and the processor. It carries data in packets (similar to networks) in separate 'lanes' and is widely supported by graphics controllers.",
  },
  {
    id: "cpe301_111",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The PCI (Peripheral Component Interconnect) bus and PCI Express bus use the same data transfer mechanism.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. The PCI bus provides a connecting bridge between the CPU and system devices. PCI Express is fundamentally different — it provides two-way serial connections and carries data in packets in separate 'lanes,' unlike the parallel PCI bus.",
  },
  {
    id: "cpe301_112",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "What is a motherboard chipset?",
    options: [
      "A single large processor that replaces the CPU on embedded systems",
      "A collection of processor chips designed to work together on a specific type of motherboard",
      "The set of BIOS routines stored in ROM on the motherboard",
      "The combination of all RAM modules installed on a motherboard",
    ],
    correctAnswer: 1,
    explanation:
      "A motherboard chipset is a collection of processor chips designed to work together on a specific type of motherboard. Various chipsets have features that increase processing power, multimedia capabilities, or reduce power consumption.",
  },
  {
    id: "cpe301_113",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In the Intel P965 Express Chipset, the Memory Controller Hub (MCH) supports which type of memory at what clock speed?",
    options: [
      "Single-channel DDR at 400 MHz",
      "Dual-channel DDR2 at 800 MHz",
      "Quad-channel DDR3 at 1600 MHz",
      "Single-channel SRAM at 1 GHz",
    ],
    correctAnswer: 1,
    explanation:
      "Intel Fast Memory Access in the P965 chipset uses an updated MCH that can access dual-channel DDR2 memory at an 800 MHz clock speed.",
  },
  {
    id: "cpe301_114",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which component of the Intel P965 Express Chipset handles support for multiple Serial ATA disk drives?",
    options: [
      "Memory Controller Hub (MCH)",
      "I/O Controller Hub (ICH8) using Intel Matrix Storage Technology",
      "The integrated sound processor",
      "The PCI Express x16 graphics slot",
    ],
    correctAnswer: 1,
    explanation:
      "The I/O Controller Hub (Intel ICH8/R/DH) uses Intel Matrix Storage Technology (MST) to support multiple Serial ATA devices (disk drives).",
  },
  {
    id: "cpe301_115",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A computer's chipset largely determines:",
    options: [
      "The physical size and weight of the motherboard",
      "The capabilities of the computer",
      "The maximum screen resolution supported",
      "The number of cores in the CPU",
    ],
    correctAnswer: 1,
    explanation:
      "The chipset largely determines the capabilities of the computer. Motherboard manufacturers build products around specific chipsets to leverage their particular features.",
  },
  {
    id: "cpe301_116",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which type of memory is permanently burned into a chip and cannot be erased?",
    options: ["DRAM", "SRAM", "EPROM", "ROM"],
    correctAnswer: 3,
    explanation:
      "ROM (Read-Only Memory) is permanently burned into a chip and cannot be erased. EPROM can be erased with ultraviolet light, and DRAM/SRAM are both read-write volatile memories.",
  },
  {
    id: "cpe301_117",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "EPROM differs from ROM in that EPROM:",
    options: [
      "Can never be erased once programmed",
      "Can be erased slowly with ultraviolet light and reprogrammed",
      "Is erased electrically and can be reprogrammed in-circuit",
      "Loses its data when the power is removed",
    ],
    correctAnswer: 1,
    explanation:
      "EPROM (Erasable Programmable Read-Only Memory) can be erased slowly with ultraviolet light and reprogrammed. This distinguishes it from ROM, which cannot be erased.",
  },
  {
    id: "cpe301_118",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "DRAM is commonly known as 'main memory.' What is its primary disadvantage compared to SRAM?",
    options: [
      "DRAM cannot store program instructions, only data",
      "DRAM must be refreshed every millisecond or it loses its contents",
      "DRAM runs at a lower voltage and damages the CPU",
      "DRAM can only be accessed sequentially, not randomly",
    ],
    correctAnswer: 1,
    explanation:
      "DRAM is inexpensive but must be refreshed every millisecond to avoid losing its contents. SRAM, by contrast, does not need refreshing but is much more expensive.",
  },
  {
    id: "cpe301_119",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "What is ECC memory and why might some systems use it?",
    options: [
      "Extended Cache Controller — it manages L1 and L2 cache hierarchies",
      "Error Checking and Correcting — it detects and corrects memory errors to improve reliability",
      "Extended Clock Cycle — it slows memory to match slower CPU speeds",
      "Embedded Cache Chip — it is cache built directly into DRAM modules",
    ],
    correctAnswer: 1,
    explanation:
      "ECC stands for Error Checking and Correcting. Some DRAM systems use ECC memory to detect and correct single-bit memory errors, improving reliability for critical applications.",
  },
  {
    id: "cpe301_120",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "VRAM (Video RAM) is described as 'dual ported.' What does this mean in practice?",
    options: [
      "It has two separate power supply connections for redundancy",
      "One port continuously refreshes the display while another port writes data to the display simultaneously",
      "It can be accessed by both the CPU and the chipset at the same time",
      "It supports both analog and digital video output simultaneously",
    ],
    correctAnswer: 1,
    explanation:
      "VRAM is dual ported, allowing one port to continuously refresh the display while another port writes data to the display. This eliminates contention between display refresh and new data writes.",
  },
  {
    id: "cpe301_121",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: SRAM is used for CPU cache memory because it is cheaper than DRAM and holds its contents without refreshing.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. SRAM is used for cache because it is FASTER and does not need refreshing — but it is more EXPENSIVE than DRAM, not cheaper.",
  },
  {
    id: "cpe301_122",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A server administrator needs memory that can detect and correct single-bit errors to prevent data corruption. Which type of memory should they specify?",
    options: ["Standard DRAM", "VRAM", "ECC DRAM", "CMOS RAM"],
    correctAnswer: 2,
    explanation:
      "ECC (Error Checking and Correcting) memory is DRAM that can detect and correct single-bit memory errors. It is commonly used in servers and workstations where data integrity is critical.",
  },
  {
    id: "cpe301_123",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which of the following memory types is specifically designed to hold video data and is 'dual ported'?",
    options: ["CMOS RAM", "SRAM", "EPROM", "VRAM"],
    correctAnswer: 3,
    explanation:
      "VRAM (Video RAM) holds video data and is dual ported, allowing simultaneous display refresh and data writes.",
  },
  {
    id: "cpe301_124",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: CMOS RAM is the same as Static RAM in that it holds its value without any extra power or refresh cycles.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. CMOS RAM requires a battery to maintain its contents when the computer is off. It is not the same as SRAM, which retains data as long as power is supplied but does not require a battery.",
  },
  {
    id: "cpe301_125",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A motherboard has memory slots labeled SIMM and DIMM. What do these slots hold?",
    options: [
      "Sound cards and network adapters",
      "Small plug-in memory boards",
      "CPU socket adapters for different processor generations",
      "PCI Express graphics cards",
    ],
    correctAnswer: 1,
    explanation:
      "Memory slots (SIMM or DIMM) on a motherboard hold small plug-in memory boards (RAM sticks).",
  },
  {
    id: "cpe301_126",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which of the following is listed as an OPTIONAL component on a typical PC motherboard?",
    options: [
      "CPU socket",
      "BIOS chips",
      "Memory slots",
      "Integrated network adapter",
    ],
    correctAnswer: 3,
    explanation:
      "An integrated network adapter is listed as an optional component. Mandatory components include the CPU socket, BIOS chips, and memory slots.",
  },
  {
    id: "cpe301_127",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The Intel P965 Express Chipset is designed for use with which processor(s)?",
    options: [
      "Intel Pentium III or Pentium 4",
      "Intel Core 2 Duo or Pentium D",
      "Intel Xeon or Itanium",
      "Intel Core i7 or Core i9 only",
    ],
    correctAnswer: 1,
    explanation:
      "The Intel P965 Express Chipset is used in desktop PCs with either an Intel Core 2 Duo or a Pentium D processor.",
  },
  {
    id: "cpe301_128",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The PCI bus is used for connecting sound cards, graphics cards, and other I/O devices, while PCI Express is only used for graphics cards.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. PCI Express is widely supported by graphics controllers but is not limited to them — it can be used for various devices. Also, while PCI is traditionally used for sound and graphics cards, PCI Express has largely replaced PCI for high-speed devices.",
  },
  {
    id: "cpe301_129",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A technician notices that a computer loses its BIOS settings (date, time, hardware configuration) whenever unplugged from the wall. The most likely cause is:",
    options: [
      "Corrupted EPROM chips holding the BIOS firmware",
      "A dead or missing CMOS battery",
      "Faulty SRAM cache modules",
      "A damaged PCI Express slot",
    ],
    correctAnswer: 1,
    explanation:
      "CMOS RAM retains system setup information (like date, time, and hardware configuration) via a battery. If the CMOS battery is dead or missing, these settings are lost when main power is removed.",
  },
  {
    id: "cpe301_130",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In terms of memory hierarchy for x86 systems, from fastest to slowest, which order is correct?",
    options: [
      "DRAM → SRAM (cache) → CPU Registers",
      "CPU Registers → SRAM (cache) → DRAM",
      "SRAM (cache) → CPU Registers → DRAM",
      "CPU Registers → DRAM → SRAM (cache)",
    ],
    correctAnswer: 1,
    explanation:
      "CPU Registers are the fastest (single clock cycle access), followed by SRAM cache (very fast but off-chip), and then DRAM (main memory, slowest — requires multiple clock cycles and refreshes).",
  },

  // ─── SECTION 2.5 – Input/Output System ───

  {
    id: "cpe301_131",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which level of I/O access is the most universal and portable because it works on a variety of different computer systems independent of any one operating system?",
    options: [
      "BIOS-level access",
      "Hardware port access",
      "High-level language library functions",
      "Operating system API functions",
    ],
    correctAnswer: 2,
    explanation:
      "High-level language (HLL) functions are portable because they work on a variety of different computer systems and are not dependent on any one operating system.",
  },
  {
    id: "cpe301_132",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The Application Programming Interface (API) is best described as:",
    options: [
      "A hardware chip that manages interrupt requests",
      "A library of operating system functions that programmers can call to perform high-level I/O and memory operations",
      "A collection of BIOS subroutines for direct hardware access",
      "A bus architecture for high-speed peripheral connections",
    ],
    correctAnswer: 1,
    explanation:
      "Programmers can call operating system functions from a library known as the API (application programming interface). The OS provides high-level operations such as writing strings to files, reading from the keyboard, and allocating memory.",
  },
  {
    id: "cpe301_133",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "BIOS (Basic Input/Output System) subroutines are characterized by the fact that they:",
    options: [
      "Are written in high-level languages and compiled for each OS",
      "Communicate directly with hardware devices and are tailored to fit the computer's hardware",
      "Provide portable I/O that works identically on all hardware",
      "Only run in protected mode and require OS privileges",
    ],
    correctAnswer: 1,
    explanation:
      "The BIOS is a collection of low-level subroutines that communicate directly with hardware devices. It is installed by the computer's manufacturer and is tailored to fit the computer's hardware.",
  },
  {
    id: "cpe301_134",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Device drivers are necessary even though the BIOS has hardware communication code because:",
    options: [
      "Device drivers replace the BIOS entirely in modern systems",
      "Device drivers permit the OS to communicate directly with hardware and firmware in a way tailored to specific devices",
      "BIOS can only handle input devices, not output devices",
      "Device drivers add security encryption to all I/O transactions",
    ],
    correctAnswer: 1,
    explanation:
      "Device drivers are programs that permit the operating system to communicate directly with hardware devices and the system BIOS. They satisfy requests by executing code in the device firmware in a way unique to each device.",
  },
  {
    id: "cpe301_135",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "When an application program displays a string of characters on screen, what is the FIRST step in the I/O chain?",
    options: [
      "The BIOS receives the ASCII code and maps it to a system font",
      "The video controller generates hardware signals to the display",
      "A statement in the application calls an HLL library function that writes the string to standard output",
      "The OS function uses a loop to call a BIOS subroutine",
    ],
    correctAnswer: 2,
    explanation:
      "Step 1: A statement in the application program calls an HLL library function that writes the string to standard output. This then calls the OS, which calls the BIOS, which talks to the video controller.",
  },
  {
    id: "cpe301_136",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In the display string example, what does the BIOS subroutine (Level 1) do with each character?",
    options: [
      "Sends the character directly to the application's output buffer",
      "Converts the character to Unicode format",
      "Receives the character, maps it to a system font, and sends it to a hardware port on the video controller card",
      "Writes the character to the disk for later retrieval",
    ],
    correctAnswer: 2,
    explanation:
      "The BIOS subroutine (Level 1) receives a character, maps it to a particular system font, and sends the character to a hardware port attached to the video controller card.",
  },
  {
    id: "cpe301_137",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The video controller card (Level 0) in the display chain generates:",
    options: [
      "ASCII codes for the operating system to interpret",
      "Font bitmaps stored in BIOS ROM",
      "Timed hardware signals to the video display that control raster scanning and displaying of pixels",
      "Interrupt signals to notify the CPU when each frame is complete",
    ],
    correctAnswer: 2,
    explanation:
      "The video controller card (Level 0) generates timed hardware signals to the video display that control the raster scanning and displaying of pixels.",
  },
  {
    id: "cpe301_138",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: Level 0 (direct hardware port access) is the most portable I/O level because it works with any device.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. Level 0 is the LEAST portable. Different devices often use different hardware ports, so the program code must be customized for each specific type of device. Level 2 (OS) is the most portable.",
  },
  {
    id: "cpe301_139",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "An assembly language program wants maximum control over specific hardware devices, including features unique to a particular sound card model. Which I/O level should it use?",
    options: [
      "Level 3 (HLL library functions)",
      "Level 2 (OS API functions)",
      "Level 1 (BIOS functions)",
      "Level 0 (hardware port access)",
    ],
    correctAnswer: 3,
    explanation:
      "Level 0 (hardware port access) gives absolute control over specific devices. Programs can fine-tune for specific hardware models and take advantage of each card's special features, though this approach is not portable.",
  },
  {
    id: "cpe301_140",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "At which I/O level does an assembly language program sit when it calls the book's provided I/O library functions?",
    options: ["Level 0", "Level 1", "Level 2", "Level 3"],
    correctAnswer: 3,
    explanation:
      "Level 3 consists of calling library functions to perform generic text I/O and file-based I/O. The textbook supplies such a library for assembly language programs to use.",
  },
  {
    id: "cpe301_141",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Why does Level 2 (OS API) I/O run more slowly than Level 1 (BIOS) I/O?",
    options: [
      "The OS compresses all data before sending it to the BIOS",
      "Each I/O call must go through several layers before it executes",
      "The OS uses a slower clock speed than the BIOS",
      "Level 2 requires network authentication for each I/O operation",
    ],
    correctAnswer: 1,
    explanation:
      "Level 2 is not particularly fast because each I/O call must go through several layers before it executes. Level 1 (BIOS) is only one level above the hardware, so it is faster.",
  },
  {
    id: "cpe301_142",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: Level 1 (BIOS) I/O will produce identical output on all computer systems with a standard BIOS.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. BIOS-level I/O works on all systems with a standard BIOS, but will NOT produce the same result on all systems. For example, different video displays may have different resolution capabilities, requiring BIOS-level code to detect and adapt.",
  },
  {
    id: "cpe301_143",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which I/O level does Level 2 (OS API) provide advantages over Level 1 (BIOS) in terms of compatibility?",
    options: [
      "Level 2 works on any computer running the same OS, even if an I/O device lacks certain capabilities",
      "Level 2 runs faster because it bypasses the BIOS",
      "Level 2 gives direct access to hardware registers",
      "Level 2 requires no operating system and works on bare hardware",
    ],
    correctAnswer: 0,
    explanation:
      "Level 2 (OS) works on any computer running the same operating system. If an I/O device lacks certain capabilities, the OS will do its best to approximate the intended result.",
  },
  {
    id: "cpe301_144",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In the I/O hierarchy for displaying a string, what exists between the operating system function and the video controller card?",
    options: [
      "The HLL library function",
      "The BIOS subroutine",
      "The device driver only, with no BIOS involvement",
      "The PCI Express bus controller",
    ],
    correctAnswer: 1,
    explanation:
      "In the display string example, the BIOS function (Level 1) sits between the OS function (Level 2) and the hardware video controller card (Level 0).",
  },
  {
    id: "cpe301_145",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Why do general-purpose operating systems rarely permit application programs to directly access system hardware?",
    options: [
      "Because direct hardware access is technically impossible in protected mode",
      "Because doing so would make it nearly impossible for multiple programs to run simultaneously",
      "Because all hardware access requires cryptographic authentication",
      "Because the BIOS would conflict with direct application hardware access",
    ],
    correctAnswer: 1,
    explanation:
      "General-purpose operating systems rarely permit application programs to directly access system hardware because to do so would make it nearly impossible for multiple programs to run simultaneously. Hardware is accessed only by device drivers in a carefully controlled manner.",
  },
  {
    id: "cpe301_146",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "What was the last Microsoft operating system to allow programs to directly access hardware?",
    options: ["Windows 95", "Windows XP", "MS-DOS", "Windows NT"],
    correctAnswer: 2,
    explanation:
      "The last Microsoft operating system to allow programs to directly access hardware was MS-DOS, and it was only able to run one program at a time.",
  },
  {
    id: "cpe301_147",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Device drivers can be installed in which two ways?",
    options: [
      "Only before hardware is attached, or only after the OS is reinstalled",
      "Before a specific hardware device is attached, or after a device has been attached and identified",
      "Only from a CD-ROM, or only by downloading from the internet",
      "By the BIOS during POST, or by the user manually copying DLL files",
    ],
    correctAnswer: 1,
    explanation:
      "Device drivers are usually installed in one of two ways: (1) before a specific hardware device is attached to a computer, or (2) after a device has been attached and identified, at which point the OS locates and installs the driver software.",
  },
  {
    id: "cpe301_148",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: Assembly language programs are restricted to using only one level of I/O access.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. Assembly language programs have power and flexibility in I/O programming — they can choose from any of the access levels (Level 0 through Level 3), making them more flexible than most high-level language programs.",
  },
  {
    id: "cpe301_149",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Why do game programs often send their sound output directly to the sound card's hardware ports (Level 0) rather than using OS functions?",
    options: [
      "The OS does not support audio output in most operating systems",
      "Direct hardware access allows programs to execute as quickly as the hardware will permit and exploit special features of specific audio cards",
      "Level 0 audio produces higher quality sound than OS-level audio",
      "Game programs are not allowed to use OS APIs due to licensing restrictions",
    ],
    correctAnswer: 1,
    explanation:
      "Programs at Level 0 execute as quickly as the hardware will permit. Game programmers often use hardware-level access to fine-tune for specific audio card models, taking advantage of special features and achieving maximum performance.",
  },
  {
    id: "cpe301_150",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A programmer at the BIOS level wants to play a WAV file. According to the textbook, what would they do first?",
    options: [
      "Call an OS API function to identify the sound card driver",
      "Query the sound card using its installed device driver software to find if it belongs to a known class of sound cards",
      "Directly write sample data to the audio hardware port",
      "Load the WAV file format header into the EAX register",
    ],
    correctAnswer: 1,
    explanation:
      "At the BIOS level, you would query the sound card (using its installed device driver software) and find out whether it belonged to a certain class of sound cards having known features.",
  },

  // ─── CROSS-TOPIC INTEGRATION & HARDER QUESTIONS ───

  {
    id: "cpe301_151",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A program reads data from a keyboard. Tracing the I/O hierarchy from hardware upward, what is the correct sequence of layers involved?",
    options: [
      "Hardware → BIOS → OS → Library → Application",
      "Application → Library → BIOS → OS → Hardware",
      "Hardware → OS → BIOS → Library → Application",
      "Application → OS → BIOS → Hardware → Library",
    ],
    correctAnswer: 0,
    explanation:
      "Data flows from hardware (Level 0) → BIOS (Level 1) → OS (Level 2) → Library (Level 3) → Application. When reading, the flow is bottom-up through the I/O hierarchy.",
  },
  {
    id: "cpe301_152",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A developer's code performs an unsigned addition: 0xFFFFFFFF + 0x00000001 on a 32-bit register. After execution, which flags would be set?",
    options: [
      "Overflow flag (OF) and Sign flag (SF)",
      "Carry flag (CF) and Zero flag (ZF)",
      "Zero flag (ZF) and Parity flag (PF) only",
      "Only the Carry flag (CF)",
    ],
    correctAnswer: 1,
    explanation:
      "0xFFFFFFFF + 1 = 0x100000000, which doesn't fit in 32 bits — setting the Carry flag (CF). The result stored in the register is 0x00000000, which sets the Zero flag (ZF). Parity flag would also be set (00000000 has 0 '1' bits = even), but CF and ZF are the primary expected flags here.",
  },
  {
    id: "cpe301_153",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The BIOS for a computer running MS-Windows would be different from that used by a computer running Linux, because BIOS is tied to the operating system.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. The BIOS is tied to the hardware (installed by the computer's manufacturer), not to the operating system. Both Windows and Linux on the same machine use the same BIOS. The OS communicates with the BIOS regardless of which OS is installed.",
  },
  {
    id: "cpe301_154",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which memory type would be the WORST choice for storing the processor's L1 cache?",
    options: ["SRAM", "DRAM", "Static RAM", "On-chip register memory"],
    correctAnswer: 1,
    explanation:
      "DRAM would be the worst choice for L1 cache because it must be refreshed constantly and is much slower than SRAM. CPU L1 cache is comprised of SRAM, which is fast and requires no refresh.",
  },
  {
    id: "cpe301_155",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A system has the Intel P965 chipset. A developer wants to add a high-speed graphics card. Which slot/bus should they use for best performance?",
    options: ["PCI slot", "ISA slot", "PCI Express x16 slot", "AGP slot"],
    correctAnswer: 2,
    explanation:
      "The Intel P965 Express Chipset supports PCI Express x16 for graphics. PCI Express provides high-speed two-way serial connections and is widely supported by graphics controllers, offering significantly better performance than PCI or AGP.",
  },
  {
    id: "cpe301_156",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Considering I/O access levels, which trade-off does a programmer face when choosing Level 0 over Level 2?",
    options: [
      "Speed for portability — Level 0 is faster but not portable across different hardware",
      "Portability for speed — Level 0 is more portable but slower",
      "Memory usage for speed — Level 0 uses more RAM but is faster",
      "Security for simplicity — Level 0 is more secure but harder to program",
    ],
    correctAnswer: 0,
    explanation:
      "The primary trade-off is control versus portability. Level 0 runs as fast as the hardware permits but requires custom code for each specific device type (not portable). Level 2 is portable but slower.",
  },
  {
    id: "cpe301_157",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: A bus in computer hardware is a plastic cable that is attached to the motherboard at both ends, but does not sit directly on the motherboard.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. A bus is a group of parallel wires (a set of wires etched directly on the motherboard). It is not a separate plastic cable — it is integral to the motherboard itself.",
  },
  {
    id: "cpe301_158",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which of the following correctly pairs a memory type with its defining characteristic?",
    options: [
      "ROM — can be erased with ultraviolet light",
      "DRAM — does not require refreshing and is used for CPU cache",
      "VRAM — dual-ported to allow simultaneous display refresh and data writes",
      "SRAM — must be refreshed every millisecond",
    ],
    correctAnswer: 2,
    explanation:
      "VRAM is dual ported, allowing one port to continuously refresh the display while another port writes data. ROM cannot be erased, SRAM doesn't need refresh (not DRAM), and DRAM (not SRAM) requires refresh.",
  },
  {
    id: "cpe301_159",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "An OS is running in virtual-8086 mode and a program within it crashes and tries to write to system memory. What happens?",
    options: [
      "The entire system crashes and requires a reboot",
      "All other virtual-8086 sessions also crash simultaneously",
      "The crash will not affect other programs — virtual-8086 mode prevents it from corrupting system memory or other sessions",
      "The BIOS automatically saves all program state and performs a cold restart",
    ],
    correctAnswer: 2,
    explanation:
      "In virtual-8086 mode, if a program crashes or attempts to write data into the system memory area, it will not affect other programs running at the same time. Each virtual-8086 session is protected from the others.",
  },
  {
    id: "cpe301_160",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The acronym PCI stands for:",
    options: [
      "Programmable Component Interface",
      "Peripheral Component Interconnect",
      "Processor Control Interface",
      "Parallel Communication Interface",
    ],
    correctAnswer: 1,
    explanation:
      "PCI stands for Peripheral Component Interconnect. It provides a connecting bridge between the CPU and other system devices. (Note: 'Programmable Component Interface' is incorrect.)",
  },
  {
    id: "cpe301_161",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: DRAM can only be erased using ultraviolet light.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. It is EPROM that can be erased using ultraviolet light. DRAM (Dynamic Random-Access Memory) is a volatile read-write memory that simply loses its data when power is removed or when it is not refreshed.",
  },
  {
    id: "cpe301_162",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: VRAM stands for Virtual Random Access Memory.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. VRAM stands for Video RAM, not Virtual Random Access Memory. VRAM holds video data and is dual-ported to allow simultaneous display refresh and data writes.",
  },
  {
    id: "cpe301_163",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The 8259A is a controller that handles external interrupts from hardware devices.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. The 8259A Programmable Interrupt Controller (PIC) handles external interrupts from hardware devices such as the keyboard, system clock, and disk drives.",
  },
  {
    id: "cpe301_164",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: PCI connectors are used for sound cards and graphics cards.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. PCI bus connectors are used for sound cards, graphics cards, data acquisition boards, and other input–output devices.",
  },
  {
    id: "cpe301_165",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A developer wants to write code that controls device-specific features such as color, graphics, and low-level disk I/O. Which I/O level should they use?",
    options: [
      "Level 3 — HLL library functions",
      "Level 2 — OS API functions",
      "Level 1 — BIOS functions",
      "Level 0 — hardware ports",
    ],
    correctAnswer: 2,
    explanation:
      "Level 1 (BIOS functions) allows control of device-specific features such as color, graphics, sound, keyboard input, and low-level disk I/O — all without going all the way down to raw hardware ports.",
  },
  {
    id: "cpe301_166",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: Static RAM (SRAM) is usually less expensive than dynamic RAM (DRAM).",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. SRAM is more expensive than DRAM. SRAM is faster and doesn't require refresh, making it expensive. DRAM is cheaper and used for main memory, while SRAM is used for expensive high-speed cache.",
  },
  {
    id: "cpe301_167",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In 64-bit mode, what happens to the upper 32 bits of the RFLAGS register?",
    options: [
      "They store extended status information unique to 64-bit mode",
      "They are used for memory protection flags",
      "They are not used — only the lower 32 bits are used (shared with EFLAGS)",
      "They store the high 32 bits of the instruction pointer",
    ],
    correctAnswer: 2,
    explanation:
      "The 64-bit RFLAGS register shares the same lower 32 bits as EFLAGS, and the upper 32 bits of RFLAGS are not used.",
  },
  {
    id: "cpe301_168",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which scenario correctly describes a cache miss?",
    options: [
      "The CPU successfully finds its required data in the cache and retrieves it without a memory access",
      "The CPU tries to find data in cache but it is not there, requiring a slower main memory access",
      "The cache becomes full and must flush its oldest entries to disk",
      "The CPU skips the cache entirely and reads directly from the address bus",
    ],
    correctAnswer: 1,
    explanation:
      "A cache miss occurs when the CPU tries to find something in cache and it's not there, requiring the slower process of reading from main memory (DRAM).",
  },
  {
    id: "cpe301_169",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In 64-bit mode with REX prefix enabled, which registers are available at the 8-bit operand size that were NOT available in 32-bit mode?",
    options: [
      "AH, BH, CH, DH",
      "AL, BL, CL, DL",
      "DIL, SIL, BPL, SPL, R8L through R15L",
      "R8D through R15D",
    ],
    correctAnswer: 2,
    explanation:
      "With REX prefix in 64-bit mode, the new 8-bit registers include DIL, SIL, BPL, SPL (low bytes of DI, SI, BP, SP) and R8L through R15L. These were not available as 8-bit registers in 32-bit mode.",
  },
  {
    id: "cpe301_170",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: In 64-bit mode, you can use up to eight floating-point registers.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. In 64-bit mode, there are eight 80-bit floating-point registers (ST(0) through ST(7)), the same as in 32-bit mode. The FPU register count does not increase with the transition to 64-bit mode.",
  },
  {
    id: "cpe301_171",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A program stores the value 300 (which exceeds a signed 8-bit range of -128 to +127) into an 8-bit signed register. Which flag would indicate this problem?",
    options: [
      "Carry flag (CF)",
      "Zero flag (ZF)",
      "Overflow flag (OF)",
      "Auxiliary Carry flag (AC)",
    ],
    correctAnswer: 2,
    explanation:
      "The Overflow flag (OF) is set when the result of a SIGNED arithmetic operation is too large or too small to fit into the destination. 300 exceeds the signed 8-bit maximum of 127, so OF would be set.",
  },
  {
    id: "cpe301_172",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which section of the textbook promises to explain more details of both real-address mode and protected mode?",
    options: ["Chapter 5", "Chapter 8", "Chapter 11", "Chapter 14"],
    correctAnswer: 2,
    explanation:
      "The textbook states: 'Chapter 11 explains many more details of both real-address mode and protected mode.'",
  },
  {
    id: "cpe301_173",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In 32-bit protected mode, which register (aside from ESP) also points to variables on the stack?",
    options: ["EAX", "EDX", "EBP", "ESI"],
    correctAnswer: 2,
    explanation:
      "EBP (extended frame pointer) is used by high-level languages to reference function parameters and local variables on the stack. It is the second stack-related register besides ESP.",
  },
  {
    id: "cpe301_174",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: A bus is a group of parallel wires that transfer data from one part of the computer to another.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. A bus is a group of parallel wires that transfer data from one part of the computer to another. A computer system usually contains four bus types: data, I/O, control, and address.",
  },
  {
    id: "cpe301_175",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The OS calls which component to advance the cursor to the next position on screen after printing a character?",
    options: [
      "A different HLL library function",
      "Another BIOS subroutine",
      "The video controller's DMA engine directly",
      "The device driver's cursor management module",
    ],
    correctAnswer: 1,
    explanation:
      "The operating system calls another BIOS subroutine to advance the cursor to the next position on the screen, after using a loop to pass each character to the BIOS.",
  },
  {
    id: "cpe301_176",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which of the following is NOT listed as a type of RAM discussed in Chapter 2?",
    options: ["DRAM", "SRAM", "SDRAM", "VRAM"],
    correctAnswer: 2,
    explanation:
      "SDRAM (Synchronous DRAM) is not specifically listed among the memory types discussed in Chapter 2. The chapter covers ROM, EPROM, DRAM, SRAM, VRAM, and CMOS RAM.",
  },
  {
    id: "cpe301_177",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A developer discovers their embedded system only needs to run a single program and must minimize OS memory overhead. According to the textbook, how does this relate to hardware access?",
    options: [
      "Embedded systems must always use OS API calls for safety",
      "Smaller operating systems for specialized devices often connect directly to hardware to reduce OS memory footprint and since they run just one program at a time",
      "Embedded systems use virtual-8086 mode exclusively for hardware access",
      "Embedded systems cannot access hardware below Level 2",
    ],
    correctAnswer: 1,
    explanation:
      "Smaller operating systems for specialized devices often connect directly to hardware to reduce the amount of memory taken up by OS code, and they almost always run just a single program at one time.",
  },
  {
    id: "cpe301_178",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "How many levels of I/O access are available to an assembly language program, and what are they in order from highest to lowest?",
    options: [
      "2 levels: OS functions and BIOS functions",
      "3 levels: Library, OS, BIOS",
      "4 levels: Library (Level 3), OS (Level 2), BIOS (Level 1), Hardware ports (Level 0)",
      "5 levels: Application, Library, OS, BIOS, Hardware",
    ],
    correctAnswer: 2,
    explanation:
      "Assembly language programs can choose from four I/O access levels: Level 3 (library functions), Level 2 (OS functions), Level 1 (BIOS functions), and Level 0 (direct hardware port access).",
  },
  {
    id: "cpe301_179",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The 64-bit RDI register is available when the REX prefix is used in 64-bit mode.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. RDI (the 64-bit version of EDI/DI) is among the 16 general-purpose registers available in 64-bit mode with the REX prefix. The full 64-bit set includes RAX, RBX, RCX, RDX, RDI, RSI, RBP, RSP, and R8–R15.",
  },
  {
    id: "cpe301_180",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A system uses an Intel P965 chipset. A developer adds multiple hard drives. Which storage technology does the ICH8 controller use to manage them?",
    options: [
      "SCSI with dual-bus redundancy",
      "IDE/PATA with hardware RAID",
      "Intel Matrix Storage Technology (MST) supporting multiple Serial ATA devices",
      "NVMe over PCI Express lanes",
    ],
    correctAnswer: 2,
    explanation:
      "The I/O Controller Hub (Intel ICH8/R/DH) uses Intel Matrix Storage Technology (MST) to support multiple Serial ATA devices (disk drives).",
  },
  {
    id: "cpe301_181",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "At which I/O level would a C++ program's `printf()` function call be classified?",
    options: [
      "Level 0 — hardware port access",
      "Level 1 — BIOS function",
      "Level 2 — OS function",
      "Level 3 — high-level language library function",
    ],
    correctAnswer: 3,
    explanation:
      "High-level language functions like C++'s `printf()` are at Level 3. These functions are portable across different computer systems and operating systems.",
  },
  {
    id: "cpe301_182",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: In 64-bit mode with REX prefix, you can access the upper byte of the DI register as 'DH'.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. In 64-bit mode, you cannot access a high-byte register (like DH) and a low byte of a new byte register (like DIL) simultaneously. Moreover, DH corresponds to DX/EDX/RDX — not DI. The 8-bit form of the low byte of DI is DIL (available with REX prefix), not DH.",
  },
  {
    id: "cpe301_183",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A computer program produces the following byte result: 10110110. The Parity flag (PF) will be:",
    options: [
      "Set, because there are 5 ones (odd)",
      "Clear, because there are 5 ones (odd)",
      "Set, because there are 5 ones (even count)",
      "Clear, regardless of the bit pattern",
    ],
    correctAnswer: 1,
    explanation:
      "10110110 has five 1-bits: positions 1, 2, 4, 5, 7 (counting from 0). Five is an odd number, so the Parity flag (PF) is CLEAR (PF is set only when there is an EVEN number of 1 bits).",
  },
  {
    id: "cpe301_184",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which of the following best explains why assembly language gives programmers more I/O flexibility than most high-level languages?",
    options: [
      "Assembly language compilers automatically optimize I/O for each target OS",
      "Assembly language programs can choose from Level 0 through Level 3 I/O access, including direct hardware port manipulation",
      "Assembly language programs bypass the CPU and communicate directly with RAM",
      "Assembly language is interpreted, allowing dynamic I/O level switching at runtime",
    ],
    correctAnswer: 1,
    explanation:
      "Assembly language programs have power and flexibility in I/O programming. They can choose from Level 0 (hardware ports) through Level 3 (library functions), giving them access to I/O options that high-level languages typically restrict.",
  },
  {
    id: "cpe301_185",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: When a process ends in a modern OS, it remains in memory in a suspended state for reuse.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. When the process ends, it is removed from memory. The OS does not leave it in memory in a suspended state; its resources are reclaimed.",
  },
  {
    id: "cpe301_186",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The Intel P965 Express Chipset includes a high-definition audio chip. At which I/O level would a BIOS routine controlling this audio chip operate?",
    options: ["Level 3", "Level 2", "Level 1", "Level 0"],
    correctAnswer: 2,
    explanation:
      "BIOS subroutines operate at Level 1 of the I/O hierarchy, communicating directly with hardware devices. The audio chip is hardware that BIOS-level code can interact with.",
  },
  {
    id: "cpe301_187",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which of the following statements about x86 modes of operation is INCORRECT?",
    options: [
      "Protected mode is the native state of the x86 processor",
      "Virtual-8086 is a sub-mode of protected mode",
      "Real-address mode can run multiple programs simultaneously with full memory protection",
      "System management mode provides power management capabilities",
    ],
    correctAnswer: 2,
    explanation:
      "Real-address mode can only run one program at a time and has NO memory protection — application programs can access any memory location. Multiple protected programs simultaneously is a feature of protected mode.",
  },
  {
    id: "cpe301_188",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A motherboard has USB connectors. Based on the chapter content, USB connectors are classified as:",
    options: [
      "An optional component that may or may not be present",
      "A standard connector for external devices, listed among the traditionally found components",
      "Found only on server-grade motherboards",
      "A replacement for BIOS chips in modern systems",
    ],
    correctAnswer: 1,
    explanation:
      "USB connectors for external devices are listed among the components traditionally found on PC motherboards (not optional). Optional components include integrated sound processor, parallel/serial connectors, integrated network adapter, and AGP bus connector.",
  },
  {
    id: "cpe301_189",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: When running in compatibility mode on an Intel 64 processor, existing 32-bit applications can usually run without being recompiled.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. When running in compatibility mode, existing 16-bit and 32-bit applications can usually run without being recompiled (except 16-bit Windows and DOS apps, which won't run in 64-bit Windows).",
  },
  {
    id: "cpe301_190",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which x86 instruction set feature enables a single instruction to operate in parallel on multiple data values contained in MMX registers?",
    options: [
      "Extended physical addressing",
      "SIMD (Single-Instruction, Multiple-Data)",
      "Virtual-8086 emulation",
      "Floating-point scalar operations",
    ],
    correctAnswer: 1,
    explanation:
      "MMX instructions operate in parallel on the data values contained in MMX registers. This is called SIMD — Single-Instruction, Multiple-Data — where one instruction acts on multiple values simultaneously.",
  },
  {
    id: "cpe301_191",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A team of programmers debates whether to use OS API calls or direct hardware port access for their cross-platform audio application. What is the strongest argument for using the OS API (Level 2)?",
    options: [
      "Level 2 will be faster because it skips unnecessary BIOS layers",
      "Level 2 works on any computer running the same OS and abstracts device-specific details",
      "Level 2 gives the most fine-grained control over audio card features",
      "Level 2 programs run in real-address mode for better hardware access",
    ],
    correctAnswer: 1,
    explanation:
      "Level 2 (OS API) works on any computer running the same operating system. If an I/O device lacks certain capabilities, the OS approximates the intended result — making it the most portable choice for cross-platform development.",
  },
  {
    id: "cpe301_192",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: In native 64-bit mode, you can use 16-bit real mode programming but not virtual-8086 mode.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. In native 64-bit mode, these processors support NEITHER 16-bit real mode NOR virtual-8086 mode. There is a legacy mode that still supports 16-bit programming, but it is not available in 64-bit versions of Microsoft Windows.",
  },
  {
    id: "cpe301_193",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Which of the following memory types is described as being used primarily for 'expensive, high-speed cache memory' and does not have to be refreshed?",
    options: ["DRAM", "VRAM", "CMOS RAM", "SRAM"],
    correctAnswer: 3,
    explanation:
      "SRAM (Static RAM) is used primarily for expensive, high-speed cache memory. It does not have to be refreshed, unlike DRAM. CPU cache memory is comprised of SRAM.",
  },
  {
    id: "cpe301_194",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "If an assembly language program needs to display graphics in a device-independent way on a system with a graphical user interface, which I/O level is most appropriate?",
    options: [
      "Level 0 — hardware ports for maximum speed",
      "Level 1 — BIOS for device-specific control",
      "Level 2 — OS functions which have graphical display capabilities in GUI systems",
      "Level 3 — library functions for portability",
    ],
    correctAnswer: 2,
    explanation:
      "Level 2 (OS functions) — if the OS uses a graphical user interface, it has functions to display graphics in a device-independent way. This is the appropriate level for GUI-based graphical output.",
  },
  {
    id: "cpe301_195",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The Intel P965 Express Chipset supports Intel Quiet System technology.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. Among the features of the Intel P965 Express Chipset is support for multiple USB ports, multiple PCI Express slots, networking, and Intel Quiet System technology.",
  },
  {
    id: "cpe301_196",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "A programmer writes assembly code that executes the fastest possible way by bypassing all OS and BIOS layers and interacting directly with an audio card's ports. However, the program only works on that specific audio card model. This is an example of choosing:",
    options: [
      "Maximum portability at the cost of speed",
      "Level 2 OS API access for platform independence",
      "Level 0 hardware access — maximum speed but zero portability across different hardware",
      "BIOS-level device queries for universal compatibility",
    ],
    correctAnswer: 2,
    explanation:
      "Level 0 (hardware port) access allows programs to execute as quickly as the hardware permits, but this approach cannot be used with a wide variety of hardware devices — it is not portable. Programs must be customized for each specific type of device.",
  },
  {
    id: "cpe301_197",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "The chapter states that 'assembly language is the ideal software tool for communicating directly with a machine.' Which of the following best supports this claim?",
    options: [
      "Assembly language has automatic garbage collection and memory management",
      "Assembly language abstracts all hardware details behind a portable API",
      "Assembly programmers can access all I/O levels (0–3), manipulate individual registers and flags, and directly control hardware",
      "Assembly language programs compile to Java bytecode for platform independence",
    ],
    correctAnswer: 2,
    explanation:
      "Assembly language gives programmers direct access to CPU registers, status flags, all I/O levels (0–3 including direct hardware), and machine instructions — making it the ideal tool for direct machine communication.",
  },
  {
    id: "cpe301_198",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "True or False: The acronym PCI stands for 'Programmable Component Interface.'",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. PCI stands for Peripheral Component Interconnect, not 'Programmable Component Interface.'",
  },
  {
    id: "cpe301_199",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "In the context of chapter 2, which of the following best describes the role of the FPU (Floating-Point Unit) on modern x86 processors from the 486 onwards?",
    options: [
      "It is a separate coprocessor chip that must be purchased and installed alongside the CPU",
      "It is integrated into the main processor chip and performs high-speed floating-point arithmetic",
      "It is implemented in software by the OS to emulate floating-point instructions",
      "It is a BIOS-level module that handles floating-point exceptions",
    ],
    correctAnswer: 1,
    explanation:
      "From the Intel 486 onward, the FPU has been integrated into the main processor chip. At one time a separate coprocessor chip was required, but this is no longer the case for modern x86 processors.",
  },
  {
    id: "cpe301_200",
    course: "CPE 301",
    chapter: "Chapter 2",
    text: "Combining knowledge from the entire chapter: a developer writes a real-time game that needs maximum I/O speed, uses a specific known GPU for rendering, accesses a custom joystick via serial port, and must run only on their specific hardware configuration. Which combination of approaches would best fit their needs?",
    options: [
      "Level 3 library functions for all I/O to ensure code maintainability",
      "Level 2 OS API for graphics and Level 3 library functions for joystick input",
      "Level 0 hardware port access for graphics and joystick, exploiting SIMD (MMX/XMM) registers for data parallelism",
      "Level 1 BIOS calls for all I/O operations on all devices",
    ],
    correctAnswer: 2,
    explanation:
      "For maximum performance on known specific hardware, Level 0 (direct hardware ports) gives the fastest execution. Combining this with SIMD capabilities (MMX/XMM registers) for parallel data processing maximizes performance in real-time games targeting specific hardware.",
  },
];

const cpe301Chapter2 = [...cpe301Chapter2Part1, ...cpe301Chapter2Part2];

export default cpe301Chapter2;
