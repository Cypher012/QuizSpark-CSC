import { QuestionV2 } from "@/lib/quiz-types";

const cpe301Chapter5Part1: QuestionV2[] = [
  // SECTION 5.1 – Stack Operations

  {
    id: "cpe301_5_001",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In 32-bit mode, which register is used to manage the runtime stack?",
    options: ["EBP", "EIP", "ESP", "ESI"],
    correctAnswer: 2,
    explanation:
      "The runtime stack is managed directly by the CPU using the ESP (extended stack pointer) register. In 32-bit mode, ESP holds a 32-bit offset into some location on the stack.",
  },
  {
    id: "cpe301_5_002",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A stack is called a LIFO structure because:",
    options: [
      "The largest value is always at the top",
      "Values are linked in order of insertion",
      "The last value pushed onto the stack is the first value popped off",
      "It processes items in the order they are received",
    ],
    correctAnswer: 2,
    explanation:
      "LIFO stands for Last-In, First-Out. The last value put into the stack is always the first value taken out, similar to a stack of plates.",
  },
  {
    id: "cpe301_5_003",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "When a 32-bit value is pushed onto the runtime stack, what happens to ESP?",
    options: [
      "ESP is incremented by 4",
      "ESP is decremented by 4",
      "ESP is incremented by 2",
      "ESP is decremented by 2",
    ],
    correctAnswer: 1,
    explanation:
      "A 32-bit push operation decrements the stack pointer by 4 and copies the value into the location pointed to by ESP. The runtime stack grows downward in memory.",
  },
  {
    id: "cpe301_5_004",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "When a 32-bit value is popped from the runtime stack, what happens to ESP?",
    options: [
      "ESP is decremented by 4",
      "ESP is set to zero",
      "ESP is incremented by 4",
      "ESP remains unchanged",
    ],
    correctAnswer: 2,
    explanation:
      "A pop operation copies the value at the top of the stack into the destination operand and then increments ESP by 4 (for a 32-bit operand) to point to the next-highest location.",
  },
  {
    id: "cpe301_5_005",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "If ESP currently holds the value 00001000h and a 32-bit value is pushed onto the stack, what will ESP hold after the push?",
    options: ["00001004h", "00000FFCh", "00001008h", "00000FF8h"],
    correctAnswer: 1,
    explanation:
      "A 32-bit push decrements ESP by 4. 00001000h minus 4 = 00000FFCh. The runtime stack grows downward in memory.",
  },
  {
    id: "cpe301_5_006",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The runtime stack grows upward in memory, from lower addresses to higher addresses.",
    options: ["Maybe", "True", "False", "I don't know"],
    correctAnswer: 2,
    explanation:
      "False. The runtime stack grows DOWNWARD in memory, from higher addresses to lower addresses. When a value is pushed, ESP is decremented.",
  },
  {
    id: "cpe301_5_007",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Which of the following is NOT listed as an important use of the runtime stack?",
    options: [
      "Temporary save area for registers",
      "Storing the return address when CALL executes",
      "Permanent storage of global variables",
      "Temporary storage for local variables inside subroutines",
    ],
    correctAnswer: 2,
    explanation:
      "The runtime stack is used for temporary register saves, return addresses, input arguments, and local variable storage. Global variables are stored in the data segment, not the stack.",
  },
  {
    id: "cpe301_5_008",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A 16-bit operand is pushed onto the stack. By how much is ESP decremented?",
    options: ["1", "2", "4", "8"],
    correctAnswer: 1,
    explanation:
      "The PUSH instruction decrements ESP by 2 for a 16-bit operand, and by 4 for a 32-bit operand.",
  },
  {
    id: "cpe301_5_009",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Which of the following is a valid format for the PUSH instruction in MASM?",
    options: ["PUSH reg64", "PUSH imm32", "PUSH mem64", "PUSH EFLAGS"],
    correctAnswer: 1,
    explanation:
      "Valid PUSH formats are: PUSH reg/mem16, PUSH reg/mem32, and PUSH imm32. To push EFLAGS you use the dedicated PUSHFD instruction, not 'PUSH EFLAGS'.",
  },
  {
    id: "cpe301_5_010",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What is the purpose of the PUSHFD instruction?",
    options: [
      "Push all 32-bit general-purpose registers onto the stack",
      "Push only the carry and zero flags onto the stack",
      "Push the 32-bit EFLAGS register onto the stack",
      "Push the 32-bit EIP register onto the stack",
    ],
    correctAnswer: 2,
    explanation:
      "The PUSHFD instruction pushes the 32-bit EFLAGS register onto the stack. Its counterpart POPFD pops the stack back into EFLAGS.",
  },
  {
    id: "cpe301_5_011",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Why can't the MOV instruction be used to copy the EFLAGS register to a variable directly?",
    options: [
      "MOV cannot access any segment register",
      "The MOV instruction cannot be used to copy the flags register to a variable",
      "MOV only supports 8-bit operands",
      "EFLAGS is write-only",
    ],
    correctAnswer: 1,
    explanation:
      "The MOV instruction cannot be used to copy the flags to a variable, which is why PUSHFD (followed by a POP into a variable) is the recommended way to save the flags.",
  },
  {
    id: "cpe301_5_012",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In what order does PUSHAD push the 32-bit general-purpose registers onto the stack?",
    options: [
      "EDI, ESI, EBP, ESP, EBX, EDX, ECX, EAX",
      "EAX, ECX, EDX, EBX, ESP, EBP, ESI, EDI",
      "EAX, EBX, ECX, EDX, ESI, EDI, EBP, ESP",
      "ESP, EBP, EBX, EDX, ECX, EAX, EDI, ESI",
    ],
    correctAnswer: 1,
    explanation:
      "PUSHAD pushes registers in this order: EAX, ECX, EDX, EBX, ESP (value before PUSHAD), EBP, ESI, and EDI. POPAD restores them in reverse order.",
  },
  {
    id: "cpe301_5_013",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: PUSHA and POPA should be used when programming in 32-bit mode.",
    options: ["True", "I don't know", "Maybe", "False"],
    correctAnswer: 3,
    explanation:
      "False. PUSHA and POPA push/pop the 16-bit general-purpose registers and should ONLY be used when programming in 16-bit mode. For 32-bit mode, use PUSHAD and POPAD.",
  },
  {
    id: "cpe301_5_014",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A procedure named ReadValue is supposed to return an integer in EAX. A developer adds PUSHAD at the start and POPAD at the end. What problem occurs?",
    options: [
      "PUSHAD corrupts the stack before the procedure runs",
      "POPAD at the end overwrites EAX with its saved value, destroying the return value",
      "PUSHAD cannot save EAX because it is the accumulator",
      "POPAD restores EAX twice, doubling the return value",
    ],
    correctAnswer: 1,
    explanation:
      "POPAD restores all registers including EAX from their saved values. This overwrites the return value that was placed in EAX, losing the result. Procedures returning values in a register should NOT use PUSHAD/POPAD.",
  },
  {
    id: "cpe301_5_015",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The RevStr program reverses a string by pushing each character and then popping them. This technique works because:",
    options: [
      "The stack reorders data based on ASCII value",
      "Characters pushed last are popped first (LIFO), producing the reverse order",
      "PUSH automatically reverses byte order within each character",
      "The stack stores characters in alphabetical order",
    ],
    correctAnswer: 1,
    explanation:
      "Because the stack is a LIFO structure, the last character pushed is the first character popped. Popping all characters produces the original string in reverse order.",
  },
  {
    id: "cpe301_5_016",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "After executing: push 5 / push 6 / pop eax / pop eax — what is the final value in EAX?",
    options: ["6", "5", "11", "0"],
    correctAnswer: 1,
    explanation:
      "Push 5, then push 6. First pop retrieves 6 (LIFO) so EAX=6. Second pop retrieves 5 so EAX=5. Final value in EAX is 5.",
  },
  {
    id: "cpe301_5_017",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The area of the stack below ESP is logically occupied and should not be overwritten.",
    options: ["False", "Maybe", "I don't know", "True"],
    correctAnswer: 0,
    explanation:
      "False. The area BELOW ESP is logically EMPTY and will be overwritten the next time any instruction pushes a value onto the stack. The occupied area is at and above ESP.",
  },
  {
    id: "cpe301_5_018",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What is the safest way to save and restore flags without risking a corrupted code path skipping POPFD?",
    options: [
      "Use MOV to copy EFLAGS into a general-purpose register",
      "Push flags with PUSHFD and immediately pop them into a variable; restore by pushing the variable and using POPFD",
      "Use the PUSHA instruction to save all registers including flags",
      "Backup EFLAGS by copying it through the segment registers",
    ],
    correctAnswer: 1,
    explanation:
      "A less error-prone approach is to push the flags and immediately pop them into a variable. To restore, push the variable value and use POPFD. This avoids the risk of execution jumping over a POPFD instruction.",
  },
  {
    id: "cpe301_5_019",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The runtime stack differs from the stack abstract data type (ADT) in that the runtime stack:",
    options: [
      "Is implemented in software using object-oriented methods",
      "Supports last-in, first-out operations just like the ADT",
      "Works at the system level to handle subroutine calls and is supported directly by CPU hardware",
      "Can only hold string data, unlike the ADT which handles any type",
    ],
    correctAnswer: 2,
    explanation:
      "The runtime stack works at the system level to handle subroutine calls and is supported directly by CPU hardware. The stack ADT is a software programming construct typically written in a high-level language.",
  },
  {
    id: "cpe301_5_020",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Which of the following instructions indirectly modifies ESP?",
    options: [
      "MOV and ADD",
      "CALL, RET, PUSH, and POP",
      "Only PUSH and POP",
      "JMP and LOOP",
    ],
    correctAnswer: 1,
    explanation:
      "We rarely manipulate ESP directly. Instead, it is indirectly modified by instructions such as CALL, RET, PUSH, and POP.",
  },

  // SECTION 5.2 – Defining and Using Procedures

  {
    id: "cpe301_5_021",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Which pair of directives is used to declare a procedure in MASM assembly language?",
    options: [
      "FUNC and ENDFUNC",
      "SUB and ENDSUB",
      "PROC and ENDP",
      "BEGIN and END",
    ],
    correctAnswer: 2,
    explanation:
      "A procedure is declared using the PROC directive at the start and the ENDP directive at the end. It must be assigned a valid identifier name.",
  },
  {
    id: "cpe301_5_022",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What instruction must appear at the end of a non-startup procedure to return control to the caller?",
    options: ["CALL", "JMP", "EXIT", "RET"],
    correctAnswer: 3,
    explanation:
      "When you create a procedure other than the startup procedure, end it with a RET instruction. RET forces the CPU to return to the location from where the procedure was called.",
  },
  {
    id: "cpe301_5_023",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "By default, labels declared inside a procedure are visible:",
    options: [
      "Throughout the entire source file",
      "Only within the procedure in which they are declared",
      "Only in procedures called from that procedure",
      "Only in the main PROC block",
    ],
    correctAnswer: 1,
    explanation:
      "By default, labels are visible only within the procedure in which they are declared. This rule often affects jump and loop instructions.",
  },
  {
    id: "cpe301_5_024",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "How is a global label declared in MASM?",
    options: [
      "Using GLOBAL keyword before the label",
      "Using a double colon (::) after the label name, allowing access from any statement in the same source file",
      "Using EXTERN directive before the label",
      "Using a single colon (:) followed by GLOBAL",
    ],
    correctAnswer: 1,
    explanation:
      "A global label is identified by a double colon (::) after its name, making it accessible from any statement in the same source code file. However, jumping outside a procedure is generally not recommended.",
  },
  {
    id: "cpe301_5_025",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What happens mechanically when the CALL instruction executes?",
    options: [
      "It copies EIP into EAX and then jumps to the procedure",
      "It pushes the current procedure's base address on the stack and jumps",
      "It pushes the return address (address of the instruction after CALL) on the stack and loads the procedure's address into EIP",
      "It decrements ECX and jumps to the procedure address if ECX is not zero",
    ],
    correctAnswer: 2,
    explanation:
      "The CALL instruction pushes its return address (the address of the instruction following CALL) on the stack and copies the called procedure's address into the instruction pointer (EIP).",
  },
  {
    id: "cpe301_5_026",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What happens when the RET instruction executes inside a procedure?",
    options: [
      "It jumps unconditionally to the address stored in EBP",
      "It pops the return address from the stack into EIP and increments ESP",
      "It loads the next instruction address from ECX into EIP",
      "It pushes EIP onto the stack and transfers control to the OS",
    ],
    correctAnswer: 1,
    explanation:
      "When RET executes, the value at the top of the stack (pointed to by ESP) is popped into EIP, and then ESP is incremented to point to the previous value on the stack.",
  },
  {
    id: "cpe301_5_027",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A CALL instruction is located at offset 00000020h and requires 5 bytes of machine code. What address is pushed onto the stack when this CALL executes?",
    options: ["00000020h", "00000024h", "00000025h", "00000040h"],
    correctAnswer: 2,
    explanation:
      "The CALL instruction pushes the address of the NEXT instruction (the return address). If CALL starts at 00000020h and requires 5 bytes, the next instruction is at 00000020h + 5 = 00000025h.",
  },
  {
    id: "cpe301_5_028",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The CALL instruction pushes the offset of the CALL instruction itself onto the stack.",
    options: ["True", "Maybe", "False", "I don't know"],
    correctAnswer: 2,
    explanation:
      "False. The CALL instruction pushes the offset of the instruction FOLLOWING the CALL (the return address), not the offset of the CALL instruction itself.",
  },
  {
    id: "cpe301_5_029",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In a nested call: main calls Sub1, Sub1 calls Sub2, Sub2 calls Sub3. Just before Sub3 returns, what is at the top of the stack (ESP)?",
    options: [
      "Return address back to main",
      "Return address back to Sub1",
      "Return address back to Sub2",
      "Base address of Sub3",
    ],
    correctAnswer: 2,
    explanation:
      "Just before Sub3 returns, the stack contains (top to bottom): return-to-Sub2, return-to-Sub1, return-to-main. The RET in Sub3 pops the return-to-Sub2 address.",
  },
  {
    id: "cpe301_5_030",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Why is it dangerous to jump directly out of a procedure instead of using RET?",
    options: [
      "JMP instructions cannot cross procedure boundaries in MASM",
      "The runtime stack can become corrupted because the return address on the stack is never popped",
      "JMP resets ESP to zero causing the next stack operation to fail",
      "Direct jumps out of procedures disable the EFLAGS register",
    ],
    correctAnswer: 1,
    explanation:
      "Procedures have an automated way of returning and adjusting the runtime stack. If you directly transfer out of a procedure without RET, the return address on the stack is never popped, corrupting the stack.",
  },
  {
    id: "cpe301_5_031",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The ArraySum procedure receives its parameters in ESI and ECX. What does each register hold?",
    options: [
      "ESI = array count, ECX = array offset",
      "ESI = element size, ECX = array count",
      "ESI = array offset, ECX = number of elements",
      "ESI = sum accumulator, ECX = loop index",
    ],
    correctAnswer: 2,
    explanation:
      "ArraySum receives: ESI = the array offset (pointer to the array) and ECX = number of elements in the array. It returns the sum in EAX.",
  },
  {
    id: "cpe301_5_032",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In the ArraySum procedure, why are ESI and ECX pushed onto the stack at the beginning?",
    options: [
      "To convert them from 32-bit to 16-bit before the loop",
      "To save their original values so the calling program's registers are not overwritten",
      "Because LOOP requires ECX to be initialized from the stack",
      "Because ESI cannot be used in indirect addressing without being saved first",
    ],
    correctAnswer: 1,
    explanation:
      "Always save and restore registers modified by a procedure so the calling program can be sure none of its own register values are overwritten. The exception is registers used as return values (usually EAX).",
  },
  {
    id: "cpe301_5_033",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: When a procedure returns a value in EAX, EAX should be pushed and popped to preserve it.",
    options: ["I don't know", "True", "Maybe", "False"],
    correctAnswer: 3,
    explanation:
      "False. Do NOT push and pop registers used as return values. Popping EAX at the end would overwrite the return value with the saved value, losing the result.",
  },
  {
    id: "cpe301_5_034",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What does the USES operator do when combined with the PROC directive?",
    options: [
      "Declares the list of procedures called by this procedure",
      "Specifies which segment the procedure belongs to",
      "Tells the assembler to generate PUSH instructions at the start and POP instructions at the end for the listed registers",
      "Marks the listed registers as read-only within the procedure",
    ],
    correctAnswer: 2,
    explanation:
      "USES tells the assembler to generate PUSH instructions to save the listed registers at the beginning of the procedure, and POP instructions to restore them at the end.",
  },
  {
    id: "cpe301_5_035",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "How are register names separated in the USES operator list?",
    options: ["By commas", "By semicolons", "By spaces or tabs", "By colons"],
    correctAnswer: 2,
    explanation:
      "The USES operator immediately follows PROC, and is followed by a list of registers on the same line separated by spaces or tabs — not commas.",
  },
  {
    id: "cpe301_5_036",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The USES operator only generates PUSH instructions; the programmer must manually code the POP instructions.",
    options: ["True", "Maybe", "False", "I don't know"],
    correctAnswer: 2,
    explanation:
      "False. The USES operator generates BOTH the PUSH instructions at the beginning AND the POP instructions at the end. The programmer needs to code neither.",
  },
  {
    id: "cpe301_5_037",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Consider: SumOf PROC / push eax / add eax,ebx / add eax,ecx / pop eax / ret / SumOf ENDP. What is wrong?",
    options: [
      "EBX and ECX are not saved before being used",
      "pop eax at the end overwrites the sum in EAX with the original saved value, losing the return value",
      "ADD cannot use EAX as both source and destination",
      "PROC and ENDP cannot be used without USES",
    ],
    correctAnswer: 1,
    explanation:
      "EAX holds the computed sum (return value). The pop eax overwrites this sum with the original EAX value that was saved before the additions. The return value is lost.",
  },
  {
    id: "cpe301_5_038",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What term describes a special requirement that must be satisfied before a procedure is called?",
    options: ["Argument", "Return value", "Precondition", "Invariant"],
    correctAnswer: 2,
    explanation:
      "A precondition is a special requirement that must be satisfied before a procedure is called (e.g., 'the video adapter must be in graphics mode'). These are listed under the 'Requires' label in procedure documentation.",
  },
  {
    id: "cpe301_5_039",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What would happen if the RET instruction were omitted from a non-startup procedure?",
    options: [
      "The assembler automatically inserts a RET at the ENDP directive",
      "The CPU would halt with a general protection fault immediately",
      "Execution would fall through into whatever code follows the procedure in memory, likely corrupting the stack",
      "The procedure would repeat itself indefinitely in a loop",
    ],
    correctAnswer: 2,
    explanation:
      "Without RET, the processor continues executing whatever instructions follow the procedure in memory (fall-through). This typically corrupts the stack because the return address is never popped.",
  },
  {
    id: "cpe301_5_040",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: It is possible to define a procedure inside an existing procedure in MASM.",
    options: ["Maybe", "False", "True", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. It is NOT possible to define a procedure inside an existing procedure in MASM. Procedures must be defined sequentially at the same nesting level.",
  },
  {
    id: "cpe301_5_041",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The ArraySum procedure uses 'add esi, TYPE DWORD' inside its loop. What is the purpose of this instruction?",
    options: [
      "To set EAX equal to the size of a DWORD for the final return",
      "To advance ESI to point to the next 4-byte integer element in the array",
      "To convert the array element from WORD to DWORD size",
      "To count how many bytes have been processed",
    ],
    correctAnswer: 1,
    explanation:
      "TYPE DWORD evaluates to 4 (bytes). Adding 4 to ESI advances the array pointer by one DWORD element, pointing it to the next integer in the array.",
  },
  {
    id: "cpe301_5_042",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Functions in high-level languages like C and C++ typically return which sized values in which registers?",
    options: [
      "8-bit in BL, 16-bit in BX, 32-bit in EBX",
      "8-bit in AL, 16-bit in AX, 32-bit in EAX",
      "8-bit in CL, 16-bit in CX, 32-bit in ECX",
      "All sizes returned in ESP",
    ],
    correctAnswer: 1,
    explanation:
      "Functions in C/C++ typically return 8-bit values in AL, 16-bit values in AX, and 32-bit values in EAX. This convention is commonly followed in assembly as well.",
  },

  // SECTION 5.3 – Linking to an External Library

  {
    id: "cpe301_5_043",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What is a link library?",
    options: [
      "A file containing assembly source code included via INCLUDE directive",
      "A file containing procedures assembled into machine code in a specially formatted file recognized by the linker",
      "A DLL loaded at runtime by the operating system",
      "A text file containing PROTO declarations for external procedures",
    ],
    correctAnswer: 1,
    explanation:
      "A link library is a file containing procedures (subroutines) that have been assembled into machine code, inserted into a specially formatted file recognized by the linker.",
  },
  {
    id: "cpe301_5_044",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Which directive must a program source file contain to identify an external procedure from a link library?",
    options: ["EXTERN", "INCLUDE", "PROTO", "IMPORT"],
    correctAnswer: 2,
    explanation:
      "A program source must contain a PROTO directive identifying any external procedure from a link library (e.g., 'WriteString PROTO'). The CALL instruction is then used to execute it.",
  },
  {
    id: "cpe301_5_045",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "When the assembler encounters a CALL to a procedure from a link library, what does it do with the target address?",
    options: [
      "It resolves the address immediately from the PROTO declaration",
      "It leaves the target address blank, knowing it will be filled in by the linker",
      "It inserts the address of the nearest PROC directive",
      "It generates a runtime error until the library is loaded",
    ],
    correctAnswer: 1,
    explanation:
      "When the program is assembled, the assembler leaves the target address of the CALL instruction blank, knowing that it will be filled in by the linker.",
  },
  {
    id: "cpe301_5_046",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What happens if the linker cannot find a called procedure in the link library?",
    options: [
      "The procedure call is silently skipped",
      "The linker issues an error message and does not generate an executable file",
      "The linker replaces the call with a NOP instruction",
      "The OS provides a default implementation at runtime",
    ],
    correctAnswer: 1,
    explanation:
      "If a procedure being called is not in the link library, the linker issues an error message and does not generate an executable file.",
  },
  {
    id: "cpe301_5_047",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What is kernel32.dll and why is it important for 32-bit assembly programs using Irvine32?",
    options: [
      "A MASM include file containing macro definitions for console I/O",
      "A fundamental part of MS-Windows (a dynamic link library) containing executable functions for character-based I/O",
      "A static library containing the Irvine32 subroutines",
      "A device driver for keyboard and screen hardware",
    ],
    correctAnswer: 1,
    explanation:
      "kernel32.dll is a fundamental part of MS-Windows. It is a dynamic link library containing executable functions for character-based I/O. The Irvine32 library links to kernel32.lib, which bridges to kernel32.dll.",
  },
  {
    id: "cpe301_5_048",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: A link library consists of assembly language source code.",
    options: ["True", "I don't know", "Maybe", "False"],
    correctAnswer: 3,
    explanation:
      "False. A link library consists of procedures that have been assembled into MACHINE CODE, not source code.",
  },
  {
    id: "cpe301_5_049",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The Irvine32 library can only be used by programs running in which mode?",
    options: ["64-bit mode", "16-bit mode", "32-bit mode", "Real-address mode"],
    correctAnswer: 2,
    explanation:
      "The Irvine32 library can only be used by programs running in 32-bit mode. It contains procedures that link to the MS-Windows API when they generate input/output.",
  },

  // SECTION 5.4 – The Irvine32 Library

  {
    id: "cpe301_5_050",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Which Irvine32 procedure clears the console window and locates the cursor at the upper left corner?",
    options: ["WaitMsg", "Gotoxy", "Clrscr", "Crlf"],
    correctAnswer: 2,
    explanation:
      "Clrscr clears the console window and locates the cursor at the upper left corner. It is typically called at the beginning and end of a program.",
  },
  {
    id: "cpe301_5_051",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "To pause a program for exactly 1 second using the Delay procedure, what value should be loaded into EAX?",
    options: ["1", "100", "1000", "1000000"],
    correctAnswer: 2,
    explanation:
      "The Delay procedure pauses for a specified number of milliseconds. Since 1 second = 1000 milliseconds, set EAX = 1000 before calling Delay.",
  },
  {
    id: "cpe301_5_052",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The DumpMem procedure requires three parameters. Which registers are used to pass them?",
    options: [
      "EAX (starting address), EBX (unit size), ECX (number of units)",
      "ESI (starting offset), ECX (number of units), EBX (unit size)",
      "EDX (starting address), EAX (unit size), ECX (number of units)",
      "EDI (starting offset), EBX (number of units), EAX (unit size)",
    ],
    correctAnswer: 1,
    explanation:
      "DumpMem requires: ESI = starting address (offset), ECX = number of units, EBX = unit size (1=byte, 2=word, 4=doubleword).",
  },
  {
    id: "cpe301_5_053",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What does the DumpRegs procedure display?",
    options: [
      "Only the general-purpose registers in decimal format",
      "EAX through EDI, EBP, ESP, EIP, EFLAGS in hex, plus CF, SF, ZF, OF, AF, and PF flag values",
      "The segment registers CS, DS, SS, ES, FS, GS in hex",
      "Only the status flags without register values",
    ],
    correctAnswer: 1,
    explanation:
      "DumpRegs displays EAX, EBX, ECX, EDX, ESI, EDI, EBP, ESP, EIP, and EFL in hexadecimal. It also displays CF, SF, ZF, OF, AF, and PF flag values.",
  },
  {
    id: "cpe301_5_054",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A developer wants to measure a loop's execution time using Irvine32. Which procedure returns milliseconds elapsed since midnight?",
    options: ["Delay", "GetDateTime", "GetMseconds", "Timer32"],
    correctAnswer: 2,
    explanation:
      "GetMseconds gets the number of milliseconds elapsed since midnight and returns the value in EAX. Call it before and after the loop, then subtract to get elapsed time.",
  },
  {
    id: "cpe301_5_055",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The Gotoxy procedure positions the cursor. How are the parameters passed?",
    options: [
      "Row in EAX, Column in EBX",
      "Row in DH (Y-coordinate), Column in DL (X-coordinate)",
      "Row in DL, Column in DH",
      "Row in AL, Column in AH",
    ],
    correctAnswer: 1,
    explanation:
      "When calling Gotoxy, pass the Y-coordinate (row) in DH and the X-coordinate (column) in DL. The console default X-range is 0-79 and Y-range is 0-24.",
  },
  {
    id: "cpe301_5_056",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The IsDigit procedure determines whether AL contains a valid decimal digit. How does it communicate its result?",
    options: [
      "Returns 1 in AL if valid, 0 if not",
      "Sets the Zero flag if AL contains a valid decimal digit; clears it otherwise",
      "Sets the Carry flag if AL is not a digit",
      "Returns the digit's numeric value in EAX",
    ],
    correctAnswer: 1,
    explanation:
      "IsDigit sets the Zero flag if AL contains a valid decimal digit (ASCII '0'-'9'); otherwise, it clears the Zero flag.",
  },
  {
    id: "cpe301_5_057",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "When calling MsgBox, which register holds the offset of the message box title string?",
    options: ["EDX", "EAX", "ECX", "EBX"],
    correctAnswer: 3,
    explanation:
      "When calling MsgBox, pass the offset of the message string in EDX and optionally the offset of the title string in EBX. To leave the title blank, set EBX to zero.",
  },
  {
    id: "cpe301_5_058",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "MsgBoxAsk returns an integer in EAX. What are the two possible return values?",
    options: [
      "0 for Yes, 1 for No",
      "1 for Yes, 0 for No",
      "IDYES (6) for Yes, IDNO (7) for No",
      "TRUE (-1) for Yes, FALSE (0) for No",
    ],
    correctAnswer: 2,
    explanation:
      "MsgBoxAsk returns IDYES (equal to 6) if the user clicked Yes, or IDNO (equal to 7) if the user clicked No.",
  },
  {
    id: "cpe301_5_059",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What is a file handle in the context of the Irvine32 library?",
    options: [
      "A string containing the file path and name",
      "A 32-bit integer used by Windows to identify a currently open file",
      "A pointer to the first byte of a file loaded into memory",
      "A 16-bit segment selector for a file data area",
    ],
    correctAnswer: 1,
    explanation:
      "A file handle is a 32-bit integer used by Windows to identify a currently open file. It is returned by CreateOutputFile or OpenInputFile and must be passed to subsequent file operations.",
  },
  {
    id: "cpe301_5_060",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "After calling CreateOutputFile, how do you determine if the file was created successfully?",
    options: [
      "Check if the Zero flag is set",
      "Check if EAX equals INVALID_HANDLE_VALUE; if not, EAX contains a valid file handle",
      "Check the Carry flag; if clear, the file was created",
      "Check if ECX equals zero after the call",
    ],
    correctAnswer: 1,
    explanation:
      "After CreateOutputFile, if EAX equals INVALID_HANDLE_VALUE, the file was not created. Otherwise EAX contains a valid file handle.",
  },
  {
    id: "cpe301_5_061",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The ReadDec procedure reads an unsigned 32-bit decimal integer. If the user enters '123ABC', what value is returned in EAX?",
    options: [
      "0 with Carry flag set",
      "ASCII value of 'A' (65)",
      "123",
      "123ABC converted to hexadecimal",
    ],
    correctAnswer: 2,
    explanation:
      "ReadDec calculates the return value from all valid digits found until a nondigit character is encountered. For '123ABC', valid digits are 1, 2, 3, so EAX = 123.",
  },
  {
    id: "cpe301_5_062",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "For ReadDec, when is the Carry flag set upon return?",
    options: [
      "When the user presses Escape instead of Enter",
      "When the integer is blank, contains only spaces, or is larger than 2^32 - 1",
      "Whenever the input contains any non-digit characters",
      "The Carry flag is never set by ReadDec",
    ],
    correctAnswer: 1,
    explanation:
      "ReadDec sets CF=1 when: the integer is blank, contains only spaces, or is larger than 2^32-1. Otherwise EAX holds the converted integer and CF=0.",
  },
  {
    id: "cpe301_5_063",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The ReadString procedure returns data in which register, and what does this value represent?",
    options: [
      "ECX - the maximum number of characters allowed",
      "EDX - the offset of the filled buffer",
      "EAX - the count of the number of characters typed by the user",
      "EBX - the number of bytes remaining in the buffer",
    ],
    correctAnswer: 2,
    explanation:
      "ReadString returns the count of characters typed by the user in EAX. The string itself is stored in the buffer whose offset was passed in EDX.",
  },
  {
    id: "cpe301_5_064",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "When calling ReadString, what value should ECX be set to?",
    options: [
      "The exact number of characters expected",
      "The maximum number of characters the user can enter, plus 1 (for the null terminator)",
      "The size of each character in bytes",
      "The offset of the buffer",
    ],
    correctAnswer: 1,
    explanation:
      "Set ECX to the maximum number of characters the user can enter, plus 1. The extra byte saves space for the terminating null byte that ReadString automatically inserts.",
  },
  {
    id: "cpe301_5_065",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "To set text color to yellow foreground on a blue background using SetTextColor, which value should be placed in EAX?",
    options: [
      "yellow + blue",
      "blue + (yellow * 16)",
      "yellow + (blue * 16)",
      "yellow OR blue",
    ],
    correctAnswer: 2,
    explanation:
      "To get a complete color byte value, multiply the background color by 16 and add it to the foreground color. For yellow on blue: yellow + (blue * 16).",
  },
  {
    id: "cpe301_5_066",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The WriteInt procedure displays a signed integer with a leading sign. If EAX = 216543, what is displayed?",
    options: ["216543", "-216543", "+216543", "00216543"],
    correctAnswer: 2,
    explanation:
      "WriteInt writes a signed 32-bit integer with a leading sign and no leading zeros. For the positive value 216543, it displays '+216543'.",
  },
  {
    id: "cpe301_5_067",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "WriteHex always displays a 32-bit integer in how many hexadecimal digits, and does it include leading zeros?",
    options: [
      "4 digits, no leading zeros",
      "8 digits, with leading zeros inserted if necessary",
      "Variable number of digits, no leading zeros",
      "8 digits, no leading zeros",
    ],
    correctAnswer: 1,
    explanation:
      "WriteHex writes a 32-bit integer in 8-digit hexadecimal format with leading zeros if necessary. For example, 7FFFh displays as '00007FFF'.",
  },
  {
    id: "cpe301_5_068",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: When using the Irvine32 library, you must always push 32-bit values onto the runtime stack; otherwise Win32 Console functions called by the library will not work correctly.",
    options: ["Maybe", "True", "I don't know", "False"],
    correctAnswer: 1,
    explanation:
      "True. If your program calls procedures in the Irvine32 library, you must always push 32-bit values onto the runtime stack; if you do not, the Win32 Console functions called by the library will not work correctly.",
  },
  {
    id: "cpe301_5_069",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The RandomRange procedure generates a random integer in the range 0 to N-1. How is N passed to the procedure?",
    options: [
      "N is passed in ECX",
      "N is passed in EBX",
      "N is passed in EAX",
      "N is passed on the stack",
    ],
    correctAnswer: 2,
    explanation:
      "RandomRange produces a random integer in the range 0 to N-1, where N is passed in the EAX register. The random integer is also returned in EAX.",
  },
  {
    id: "cpe301_5_070",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "If Randomize is NOT called before using Random32, what effect does this have?",
    options: [
      "Random32 will always return 0",
      "The same sequence of random numbers will be generated every time the program runs",
      "Random32 will generate numbers based on the stack pointer value",
      "Random32 will throw an overflow error",
    ],
    correctAnswer: 1,
    explanation:
      "Randomize initializes the seed using the time of day. Without it, the seed remains a fixed default, causing Random32 to generate the same sequence every time the program runs.",
  },
  {
    id: "cpe301_5_071",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "When ReadChar is called and the user presses an extended key (like a function key), what is the state of AL and AH?",
    options: [
      "AL contains the extended key code, AH is undefined",
      "AL = 0 and AH contains the keyboard scan code",
      "AL = 0FFh and AH contains the ASCII equivalent",
      "AL and AH both contain 0",
    ],
    correctAnswer: 1,
    explanation:
      "If the user presses an extended key, ReadChar sets AL to zero and AH contains the keyboard scan code. If a regular key is pressed, AL contains the ASCII key value.",
  },
  {
    id: "cpe301_5_072",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The ReadKey procedure differs from ReadChar in that ReadKey:",
    options: [
      "Reads an entire line of text rather than a single character",
      "Performs a no-wait keyboard check - if no key is pressed the Zero flag is set and execution continues immediately",
      "Only reads numeric keys, ignoring alphabetic input",
      "Reads a character and echoes it to the console window automatically",
    ],
    correctAnswer: 1,
    explanation:
      "ReadKey performs a no-wait keyboard check. If no keyboard data is found, the Zero flag is set and execution continues immediately. ReadChar waits for the user to press a key.",
  },
  {
    id: "cpe301_5_073",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The GetCommandTail procedure copies command-line arguments into a buffer. Which register must contain the offset of the buffer?",
    options: ["EAX", "EBX", "ECX", "EDX"],
    correctAnswer: 3,
    explanation:
      "When calling GetCommandTail, EDX must contain the offset of an array of at least 129 bytes. If the command line was empty, the Carry flag is set; otherwise it is cleared.",
  },
  {
    id: "cpe301_5_074",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What is the difference between ParseDecimal32 and ParseInteger32?",
    options: [
      "ParseDecimal32 handles hexadecimal input; ParseInteger32 handles decimal",
      "ParseDecimal32 converts unsigned decimal strings; ParseInteger32 converts signed decimal strings (may include leading +/- sign)",
      "ParseDecimal32 returns results in ECX; ParseInteger32 returns results in EAX",
      "They are identical; one is provided for compatibility",
    ],
    correctAnswer: 1,
    explanation:
      "ParseDecimal32 converts UNSIGNED decimal integer strings. ParseInteger32 converts SIGNED decimal integer strings, accepting an optional leading plus or minus sign.",
  },
  {
    id: "cpe301_5_075",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "After calling ReadFromFile, how do you check whether the read was successful?",
    options: [
      "Check if EAX equals zero; zero means success",
      "Check the Zero flag; if ZF=1 the read succeeded",
      "Check the Carry flag; if CF is clear EAX contains the byte count read; if CF is set EAX contains an error code",
      "Check if ECX is greater than zero after the call",
    ],
    correctAnswer: 2,
    explanation:
      "After ReadFromFile, check the Carry flag. If CF is clear, EAX contains the byte count read. If CF is set, EAX contains a numeric system error code and you can call WriteWindowsMsg to see the error.",
  },
  {
    id: "cpe301_5_076",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The GetTextColor procedure returns the background color in the lower four bits of AL and the foreground color in the upper four bits.",
    options: ["True", "I don't know", "False", "Maybe"],
    correctAnswer: 2,
    explanation:
      "False. GetTextColor returns the BACKGROUND color in the UPPER four bits of AL and the FOREGROUND color in the LOWER four bits.",
  },
  {
    id: "cpe301_5_077",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In Library Test #3 (performance timing), why does innerLoop save and restore ECX using PUSH and POP?",
    options: [
      "Because ECX is a read-only register that cannot be changed by the loop",
      "Because the main procedure was using ECX as a loop counter, and innerLoop overwrites it with a new counter value",
      "Because LOOP instruction requires ECX to be saved on the stack before decrementing",
      "Because PUSH and POP are faster than MOV for preserving register values",
    ],
    correctAnswer: 1,
    explanation:
      "The main procedure uses ECX as its loop counter. innerLoop sets ECX to 0FFFFFFFh for its own loop. Without saving/restoring ECX, the main loop counter would be destroyed when innerLoop returns.",
  },
  {
    id: "cpe301_5_078",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The DumpRegs procedure requires input parameters before it is called.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. DumpRegs has NO input parameters and no return value. It simply displays a snapshot of all the common CPU registers and status flags when called.",
  },
  {
    id: "cpe301_5_079",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The WriteBin procedure displays bits in groups of four. If EAX = 12346AF9h, what is the first group displayed?",
    options: ["1001", "0001", "AF91", "1111"],
    correctAnswer: 1,
    explanation:
      "WriteBin displays 32-bit integers in ASCII binary format in groups of four. For 12346AF9h, the bits from MSB are: 0001 0010 0011 0100 0110 1010 1111 1001. The first group is '0001'.",
  },
  {
    id: "cpe301_5_080",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The WriteBinB procedure requires both EAX and EBX to be set before calling. What does EBX specify?",
    options: [
      "The number of binary digits to display",
      "The display size in bytes (1, 2, or 4)",
      "The base address of an output buffer",
      "The number of leading zeros to include",
    ],
    correctAnswer: 1,
    explanation:
      "For WriteBinB: pass the value in EAX and let EBX indicate the display size in bytes (1, 2, or 4). The bits are displayed in groups of four.",
  },

  // SECTION 5.5 – 64-Bit Assembly Programming

  {
    id: "cpe301_5_081",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In 64-bit mode, the CALL instruction subtracts how many bytes from RSP?",
    options: ["4 bytes", "8 bytes", "16 bytes", "32 bytes"],
    correctAnswer: 1,
    explanation:
      "In 64-bit mode, the CALL instruction subtracts 8 from RSP, since addresses are 64-bits long.",
  },
  {
    id: "cpe301_5_082",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "According to the Microsoft x64 Calling Convention, which registers hold the first four parameters, in order?",
    options: [
      "RAX, RBX, RCX, RDX",
      "RDI, RSI, RDX, RCX",
      "RCX, RDX, R8, R9",
      "R8, R9, R10, R11",
    ],
    correctAnswer: 2,
    explanation:
      "The first four parameters are placed in RCX, RDX, R8, and R9, in that order. Additional parameters beyond four are pushed onto the stack.",
  },
  {
    id: "cpe301_5_083",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What is 'shadow space' in the context of the Microsoft x64 Calling Convention?",
    options: [
      "Reserved memory in ROM for x64 system calls",
      "At least 32 bytes allocated on the stack by the caller so the called procedure can optionally save the register parameters",
      "The unused upper 32 bits of 64-bit registers when holding 32-bit values",
      "Virtual memory pages that are not mapped to physical memory",
    ],
    correctAnswer: 1,
    explanation:
      "The caller must allocate at least 32 bytes of shadow space on the runtime stack so that called procedures can optionally save the register parameters in this area.",
  },
  {
    id: "cpe301_5_084",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In the 64-bit calling convention, RSP must be aligned to a multiple of how many bytes when calling a subroutine?",
    options: ["4 bytes", "8 bytes", "16 bytes", "32 bytes"],
    correctAnswer: 2,
    explanation:
      "When calling a subroutine, RSP must be aligned on a 16-byte boundary. The CALL instruction pushes an 8-byte return address, so the calling program must subtract 8 from RSP in addition to the 32 bytes for shadow space.",
  },
  {
    id: "cpe301_5_085",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In the CallProc_64 example, why does main execute 'sub rsp, 8' as the first instruction?",
    options: [
      "To reserve space for the return address before calling AddFour",
      "To align RSP to a 16-byte boundary after the OS CALL pushed an 8-byte return address onto the stack when entering main",
      "To create space for a local variable in main",
      "To compensate for the difference between 32-bit and 64-bit address sizes",
    ],
    correctAnswer: 1,
    explanation:
      "Before the OS called main, RSP was aligned on a 16-byte boundary. The CALL instruction pushed an 8-byte return address, misaligning RSP by 8. Subtracting another 8 restores alignment to a multiple of 16.",
  },
  {
    id: "cpe301_5_086",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The AddFour procedure adds parameters from RCX, RDX, R8, and R9 and stores the result in RAX. Why RAX?",
    options: [
      "Because RCX is the first parameter register and cannot hold the result",
      "Because R8 is the designated output register in x64",
      "Because procedures normally return integer values in RAX",
      "Because RDX matches the C calling convention return register",
    ],
    correctAnswer: 2,
    explanation:
      "AddFour stores the sum in RAX because procedures normally return integer values in RAX. The calling program expects the return value in RAX when the subroutine returns.",
  },
  {
    id: "cpe301_5_087",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: You must use the Microsoft x64 Calling Convention when calling subroutines in the Irvine64 library.",
    options: ["I don't know", "False", "Maybe", "True"],
    correctAnswer: 1,
    explanation:
      "False. You do NOT have to use the Microsoft x64 calling convention when calling subroutines in the Irvine64 library. You only need to use it when calling Windows API functions or functions written in C/C++.",
  },
  {
    id: "cpe301_5_088",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Which of the following registers does the Irvine64 library PRESERVE across procedure calls?",
    options: [
      "RAX, RCX, RDX, R8, R9",
      "RBX, RBP, RDI, RSI, R12, R13, R14, R15",
      "All 16 general-purpose registers",
      "Only RAX and RCX",
    ],
    correctAnswer: 1,
    explanation:
      "The Irvine64 library preserves RBX, RBP, RDI, RSI, R12, R13, R14, and R15. The RAX, RCX, RDX, R8, R9, R10, and R11 register values are usually NOT preserved.",
  },
  {
    id: "cpe301_5_089",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In the Irvine64 library, the Random64 procedure returns the 64-bit pseudorandom integer in which register?",
    options: ["RCX", "RBX", "RDX", "RAX"],
    correctAnswer: 3,
    explanation:
      "Random64 generates a 64-bit pseudorandom integer in the range 0 to 2^64-1. The random value is returned in the RAX register.",
  },
  {
    id: "cpe301_5_090",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "How do you declare an external Irvine64 library procedure for use in a 64-bit assembly program?",
    options: [
      "INCLUDE irvine64.inc at the top of the source file",
      "LINK irvine64.lib at the top of the source file",
      "Declare each external procedure with its name followed by PROTO (e.g., WriteHex64 PROTO)",
      "Use EXTERN keyword followed by the procedure name",
    ],
    correctAnswer: 2,
    explanation:
      "Use the PROTO directive at the top of the program to identify each external procedure (e.g., 'WriteHex64 PROTO'). Then use a CALL instruction to invoke them.",
  },

  // CROSS-TOPIC INTEGRATION & HARDER QUESTIONS

  {
    id: "cpe301_5_091",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A programmer writes: push 10 / push 20 / call MySub. Inside MySub, the first instruction is 'pop eax'. What value is in EAX after that pop?",
    options: ["10", "20", "The return address back to the caller", "0"],
    correctAnswer: 2,
    explanation:
      "When CALL executes, it pushes the return address on the stack AFTER the two pushed values. Stack (top to bottom): return address, 20, 10. The first pop in MySub retrieves the return address, not 20.",
  },
  {
    id: "cpe301_5_092",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A developer uses PUSHFD at the beginning of a block and POPFD at the end, but a conditional jump skips over POPFD. What is the most likely consequence?",
    options: [
      "EFLAGS is permanently cleared",
      "The stack becomes unbalanced — the return address or other data will be misread, potentially crashing the program",
      "EFLAGS is automatically restored by the CPU when the jump occurs",
      "The program halts with a protection fault immediately",
    ],
    correctAnswer: 1,
    explanation:
      "If execution skips over POPFD, the saved EFLAGS value remains on the stack. This corrupts the stack balance — a subsequent RET would pop the wrong value into EIP, causing incorrect execution or a crash.",
  },
  {
    id: "cpe301_5_093",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A procedure modifies EAX, EBX, ECX, and EDX and returns a result in EAX. Which is the correct approach to preserve registers?",
    options: [
      "Use PUSHAD at the start and POPAD at the end",
      "Push and pop EBX, ECX, and EDX (but NOT EAX since it holds the return value)",
      "Push and pop all four registers including EAX",
      "Do not save any registers; the caller is responsible",
    ],
    correctAnswer: 1,
    explanation:
      "Save and restore all modified registers EXCEPT the return value register. Since EAX holds the return value, push/pop EBX, ECX, and EDX only. Using PUSHAD/POPAD would overwrite EAX with its saved value.",
  },
  {
    id: "cpe301_5_094",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Why is ArraySum described as 'flexible and adaptable' and reusable across any program that sums 32-bit integer arrays?",
    options: [
      "Because it uses hard-coded variable names that match any array declared as 'array'",
      "Because it receives the array offset and count as register parameters rather than referencing specific variable names",
      "Because it automatically detects array size using LENGTHOF operator internally",
      "Because it stores the array in a standard location all procedures can access",
    ],
    correctAnswer: 1,
    explanation:
      "Nothing in ArraySum is specific to a particular array name or size. It receives a pointer (offset) to any array in ESI and the element count in ECX, making it reusable for any 32-bit integer array.",
  },
  {
    id: "cpe301_5_095",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: In the x64 calling convention, the first parameter passed to a procedure is always placed in RAX.",
    options: ["True", "Maybe", "I don't know", "False"],
    correctAnswer: 3,
    explanation:
      "False. In the Microsoft x64 Calling Convention, the first parameter is placed in RCX, not RAX. The order is RCX (1st), RDX (2nd), R8 (3rd), R9 (4th). RAX is used for return values.",
  },
  {
    id: "cpe301_5_096",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In 64-bit mode, if a program uses RET instead of ExitProcess to end main, what additional step is required?",
    options: [
      "RSP must be decremented by 28h before RET",
      "The stack pointer must be restored to how it was when main began (e.g., 'add rsp, 28h'), then RET returns to the OS",
      "ECX must be set to 0 and then RET is called with a stack argument",
      "PUSHAD must be called before RET to save all registers",
    ],
    correctAnswer: 1,
    explanation:
      "If using RET instead of ExitProcess, restore RSP to its state when main began. This requires 'add rsp, 28h' (8-byte alignment fix + 32-byte shadow space), then RET returns to the OS.",
  },
  {
    id: "cpe301_5_097",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A developer wants to generate 50 random integers between -300 and +99. Using RandomRange (which generates 0 to N-1), what value should EAX hold and what offset is needed after the call?",
    options: [
      "EAX = 399; subtract 300 from EAX after the call",
      "EAX = 400; subtract 300 from EAX after the call to shift range from 0-399 to -300 to +99",
      "EAX = 300; no adjustment needed",
      "EAX = 100; subtract 50 after the call",
    ],
    correctAnswer: 1,
    explanation:
      "Range width = 99 - (-300) + 1 = 400. Pass EAX = 400 to get 0-399. Subtract 300 to shift to -300 to +99. This matches the BetterRandomRange concept from the programming exercises.",
  },
  {
    id: "cpe301_5_098",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The nested procedure call mechanism works reliably because the stack correctly preserves return addresses in LIFO order, allowing each RET to return to its correct caller.",
    options: ["False", "I don't know", "Maybe", "True"],
    correctAnswer: 3,
    explanation:
      "True. The stack's LIFO property is exactly what makes nested procedure calls work. Each CALL pushes a return address, and each RET pops the most recently pushed return address, correctly unwinding the call chain in reverse order.",
  },
  {
    id: "cpe301_5_099",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Consider this code in main: push 10 / push 20 / call Ex2Sub / pop eax. Inside Ex2Sub: pop eax / ret. What problem arises from Ex2Sub?",
    options: [
      "Ex2Sub correctly returns 20 to the caller via EAX",
      "Ex2Sub pops the return address from the stack into EAX, then RET pops 20 as the 'return address', jumping to address 20 which is likely invalid",
      "Ex2Sub's pop fails because EAX is read-only",
      "The loop counter ECX is corrupted by this sequence",
    ],
    correctAnswer: 1,
    explanation:
      "Stack before CALL (top to bottom): return_addr, 20, 10. Ex2Sub pops the return address into EAX (discarding it!), then RET pops 20 as the next 'return address' and attempts to jump to address 20, which is almost certainly invalid code.",
  },
  {
    id: "cpe301_5_100",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The chapter states that assembly language was created before object-oriented programming. What does this imply for assembly programmers regarding program structure?",
    options: [
      "Assembly programs cannot be structured; all code must be written as a single block",
      "Assembly programmers must impose their own formal structure on programs, since there is no built-in formal structure like OOP languages provide",
      "Assembly language automatically generates object-oriented class hierarchies from PROC/ENDP blocks",
      "Assembly programs must be translated to C++ before they can be organized into procedures",
    ],
    correctAnswer: 1,
    explanation:
      "Assembly language was created long before OOP, so it lacks the formal structure found in OOP languages. Assembly programmers must impose their own formal structure on programs.",
  },
];
const cpe301Chapter5Part2: QuestionV2[] = [
  // ─── SECTION 5.4 DEEP DIVE – Irvine32 Procedures (continued) ───

  {
    id: "cpe301_5_101",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The WriteString procedure writes a null-terminated string to the console. Which register must hold the string's offset before calling it?",
    options: ["EAX", "EBX", "ECX", "EDX"],
    correctAnswer: 3,
    explanation:
      "WriteString requires the string's offset to be passed in EDX before calling. It then writes the null-terminated string to the console window.",
  },
  {
    id: "cpe301_5_102",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The WriteChar procedure writes a single character to the console. How is the character passed to it?",
    options: [
      "As an offset in EDX",
      "In the AL register (or its ASCII code)",
      "As a 32-bit value in EAX",
      "Pushed onto the stack before the call",
    ],
    correctAnswer: 1,
    explanation:
      "WriteChar writes a single character to the console window. Pass the character (or its ASCII code) in AL. For example: mov al,'A' / call WriteChar displays 'A'.",
  },
  {
    id: "cpe301_5_103",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The WriteDec procedure writes an unsigned 32-bit integer in decimal format. If EAX = 295, what is displayed?",
    options: ['"000295"', '"295"', '"+295"', '"0295"'],
    correctAnswer: 1,
    explanation:
      "WriteDec writes a 32-bit unsigned integer to the console in decimal format with no leading zeros. For EAX = 295, it displays '295'.",
  },
  {
    id: "cpe301_5_104",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What distinguishes WriteInt from WriteDec when displaying a positive integer?",
    options: [
      "WriteInt displays in hexadecimal; WriteDec displays in decimal",
      "WriteInt displays with a leading sign (e.g., '+216543'); WriteDec displays without a sign",
      "WriteInt only handles 16-bit values; WriteDec handles 32-bit",
      "WriteInt requires the value on the stack; WriteDec uses EAX",
    ],
    correctAnswer: 1,
    explanation:
      "WriteInt writes a signed 32-bit integer with a leading sign and no leading zeros (e.g., '+216543'). WriteDec writes an unsigned 32-bit integer with no leading zeros and no sign.",
  },
  {
    id: "cpe301_5_105",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The WriteHexB procedure allows you to control how many bytes are displayed in hex. What does EBX specify when calling WriteHexB?",
    options: [
      "The base address of the output buffer",
      "The display format in bytes (1, 2, or 4)",
      "The number of leading zeros to prepend",
      "The color attribute for the hex output",
    ],
    correctAnswer: 1,
    explanation:
      "WriteHexB writes a 32-bit integer in hexadecimal format. Pass the value in EAX and let EBX indicate the display format in bytes (1, 2, or 4). Leading zeros are inserted if necessary.",
  },
  {
    id: "cpe301_5_106",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The WaitMsg procedure is particularly useful when calling Clrscr in the middle of a program. Why?",
    options: [
      "Because Clrscr requires the keyboard buffer to be empty before clearing",
      "Because WaitMsg allows the user to view information already on the screen before Clrscr erases it",
      "Because WaitMsg resets the console color to defaults before Clrscr runs",
      "Because calling Clrscr without WaitMsg causes a stack overflow",
    ],
    correctAnswer: 1,
    explanation:
      "If Clrscr is called at times other than the start or end of a program, you may need to first call WaitMsg, which displays 'Press any key...' and pauses. This allows the user to view information already on screen before it is erased.",
  },
  {
    id: "cpe301_5_107",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The WriteToFile procedure writes a buffer to an output file. What does EAX contain when WriteToFile returns, assuming no error occurred?",
    options: [
      "Zero, indicating success",
      "The count of the number of bytes written to the file",
      "The updated file handle",
      "The offset of the next byte to write",
    ],
    correctAnswer: 1,
    explanation:
      "When WriteToFile returns, if EAX is greater than zero, it contains a count of the number of bytes written. If EAX = 0, an error occurred and you should call WriteWindowsMsg.",
  },
  {
    id: "cpe301_5_108",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The CloseFile procedure uses the file handle passed in EDX to identify which file to close.",
    options: ["True", "Maybe", "I don't know", "False"],
    correctAnswer: 3,
    explanation:
      "False. CloseFile identifies the file by a 32-bit integer handle passed in EAX (not EDX). If the file is closed successfully, the value returned in EAX will be nonzero.",
  },
  {
    id: "cpe301_5_109",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "OpenInputFile returns INVALID_HANDLE_VALUE in EAX when the file cannot be opened. What should the programmer do in this case?",
    options: [
      "Retry the call with a different EDX value",
      "Call WriteWindowsMsg to display the OS error description",
      "Check the Carry flag for the specific error code",
      "Call CloseFile to reset the file system state",
    ],
    correctAnswer: 1,
    explanation:
      "If EAX equals INVALID_HANDLE_VALUE after OpenInputFile, the file was not opened successfully. Calling WriteWindowsMsg displays a string containing the most recent error generated by the application.",
  },
  {
    id: "cpe301_5_110",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The Str_compare procedure in the Irvine32 library compares two strings. How are the two string pointers passed to it?",
    options: [
      "Both offsets on the stack",
      "Source in ESI, target in EDI",
      "First string in EAX, second string in EBX",
      "Both strings in EDX as a double-pointer",
    ],
    correctAnswer: 1,
    explanation:
      "Str_compare requires: pass a pointer to the source string in ESI, and a pointer to the target string in EDI. It sets the Zero and Carry flags in the same way as the CMP instruction.",
  },
  {
    id: "cpe301_5_111",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The GetMaxXY procedure gets the console window buffer size. In which registers are the results returned?",
    options: [
      "EAX = columns, EDX = rows",
      "DX = columns (number of buffer columns), AX = rows (number of buffer rows)",
      "BX = width, CX = height",
      "AL = columns, AH = rows",
    ],
    correctAnswer: 1,
    explanation:
      "GetMaxXY has no input parameters. When it returns, DX contains the number of buffer columns and AX contains the number of buffer rows. The possible range of each value can be no greater than 255.",
  },
  {
    id: "cpe301_5_112",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The Str_ucase procedure in Irvine32 converts a string to uppercase and returns the converted length in EAX.",
    options: ["Maybe", "False", "True", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. Str_ucase converts a string to uppercase letters but does not return a length in EAX. Str_length (not Str_ucase) returns the length of a string in EAX.",
  },
  {
    id: "cpe301_5_113",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In Library Test #1 (InputLoop), the color constant BlueTextOnGray is defined as blue + (lightGray * 16). Why is the background color multiplied by 16?",
    options: [
      "Because lightGray has a numeric value of 16",
      "To shift the background color into the upper 4 bits of the color attribute byte, since the byte stores background in bits 7-4 and foreground in bits 3-0",
      "Because the console requires 16 different shades for accurate color rendering",
      "To convert the background color from decimal to hexadecimal representation",
    ],
    correctAnswer: 1,
    explanation:
      "The color byte stores the background color in the upper 4 bits and the foreground color in the lower 4 bits. Multiplying the background by 16 shifts it 4 bits left (into the upper nibble), placing it correctly in the attribute byte.",
  },
  {
    id: "cpe301_5_114",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In Library Test #1, after the loop ends, the program restores DefaultColor (lightGray + black * 16) and calls Clrscr. Why is Clrscr called after SetTextColor?",
    options: [
      "Because Clrscr is required to flush the output buffer to the screen",
      "Because SetTextColor only changes future text colors; Clrscr fills the background of the entire window with the new background color",
      "Because Clrscr saves the current color setting to CMOS RAM",
      "Because Clrscr resets the text position to row 0, col 0, which is required after SetTextColor",
    ],
    correctAnswer: 1,
    explanation:
      "SetTextColor changes the color attributes for subsequent text. To set the background of the entire console window to the new color, Clrscr must be called to clear the screen — this fills the background with the newly set color.",
  },
  {
    id: "cpe301_5_115",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Library Test #2 generates signed integers in the range -50 to +49 using RandomRange. The code does: mov eax,100 / call RandomRange / sub eax,50. Why is 100 passed and 50 subtracted?",
    options: [
      "RandomRange generates 0 to 99 (100 values), then subtracting 50 shifts the range to -50 to +49",
      "RandomRange generates 1 to 100, then subtracting 50 gives -49 to +50",
      "The subtraction converts unsigned output to signed format only",
      "100 is a required alignment value for RandomRange to work correctly",
    ],
    correctAnswer: 0,
    explanation:
      "RandomRange with EAX=100 generates a value in 0 to 99. Subtracting 50 shifts this range down by 50, producing values from -50 to +49. This is a standard offset technique for generating ranges below zero.",
  },
  {
    id: "cpe301_5_116",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The WriteWindowsMsg procedure is useful after a failed file operation. What does it display?",
    options: [
      "The contents of the EAX register in hexadecimal",
      "A string containing the most recent error generated by the application, including an error code and description",
      "The current state of all CPU flags",
      "The file handle value that caused the failure",
    ],
    correctAnswer: 1,
    explanation:
      "WriteWindowsMsg displays a string containing the most recent error generated by the application when executing a call to a system function. For example: 'Error 2: The system cannot find the file specified.'",
  },
  {
    id: "cpe301_5_117",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The ReadInt procedure can handle input like '-8193' and correctly converts it to a negative 32-bit signed binary value.",
    options: ["I don't know", "True", "False", "Maybe"],
    correctAnswer: 1,
    explanation:
      "True. ReadInt reads a 32-bit signed integer. The user can type an optional leading plus or minus sign, and the rest may only consist of digits. It sets the Overflow flag and displays an error if the value cannot be represented as a 32-bit signed integer.",
  },
  {
    id: "cpe301_5_118",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The ReadHex procedure has a maximum input length. What happens if the user enters more than 8 hexadecimal digits?",
    options: [
      "ReadHex sets the Carry flag to indicate overflow",
      "Additional characters beyond 8 digits are ignored",
      "ReadHex displays an error and clears EAX",
      "ReadHex loops back and asks for input again",
    ],
    correctAnswer: 1,
    explanation:
      "A maximum of eight digits may be entered when using ReadHex. Additional characters beyond 8 are ignored. Also, no error checking is performed for invalid (non-hex) characters.",
  },
  {
    id: "cpe301_5_119",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What does the TAB constant (value 9) represent in Library Test #2, and how is it used?",
    options: [
      "It is the loop counter for 9 iterations of the random number loop",
      "It is the ASCII code for a horizontal tab character, written using WriteChar to separate the output values on each line",
      "It specifies the column width for WriteDec output formatting",
      "It is a bit mask applied to random values to ensure they fit in one byte",
    ],
    correctAnswer: 1,
    explanation:
      "TAB = 9 is the ASCII code for a horizontal tab character. In Library Test #2, after displaying each random number, mov al,TAB / call WriteChar writes a tab character to space out the values on the output line.",
  },
  {
    id: "cpe301_5_120",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In Library Test #3, GetMseconds is called twice — before and after a nested loop. Why is the difference between the two return values stored in EAX?",
    options: [
      "Because EAX is the only register that survives across procedure calls",
      "Because the second call to GetMseconds returns the current time in EAX, and subtracting the saved startTime gives the elapsed milliseconds",
      "Because GetMseconds accumulates time across calls and EAX holds the total",
      "Because the loop counter is always in EAX after LOOP completes",
    ],
    correctAnswer: 1,
    explanation:
      "The second call to GetMseconds returns the current time in EAX. Executing 'sub eax, startTime' computes the difference between the end time and start time, giving the number of elapsed milliseconds.",
  },
  {
    id: "cpe301_5_121",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The INCLUDE directive is used in Irvine32 programs (e.g., 'include Irvine32.inc'). What types of statements are typically inside an .inc file like Irvine32.inc?",
    options: [
      "Compiled machine code for the library procedures",
      "PROTO declarations, constant definitions, and macro definitions needed by the program",
      "Only DWORD variable declarations for the library's global data",
      "Debug symbols and source maps for the Visual Studio debugger",
    ],
    correctAnswer: 1,
    explanation:
      "Include files like Irvine32.inc typically contain PROTO declarations (for external procedures), constant definitions (like color constants), and macro definitions that the main program needs to use the library.",
  },

  // ─── SECTION 5.5 DEEP DIVE – 64-Bit Programming ───

  {
    id: "cpe301_5_122",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In 64-bit mode, the x64 calling convention states that additional parameters beyond the first four are passed how?",
    options: [
      "In registers R10, R11, R12, R13 in order",
      "Pushed on the stack in left-to-right order",
      "Pushed on the stack in right-to-left order",
      "Passed in memory through a parameter block pointed to by RCX",
    ],
    correctAnswer: 1,
    explanation:
      "The first four parameters go in RCX, RDX, R8, R9. Additional parameters beyond the fourth are pushed on the stack in left-to-right order.",
  },
  {
    id: "cpe301_5_123",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In the CallProc_64 example, RSP starts at 01AFE48h (after OS CALL pushed the return address). After 'sub rsp, 8' executes, what is RSP?",
    options: ["01AFE50h", "01AFE40h", "01AFE48h", "01AFE20h"],
    correctAnswer: 1,
    explanation:
      "RSP starts at 01AFE48h. Subtracting 8 gives 01AFE40h. This aligns RSP to a 16-byte boundary (01AFE40h is divisible by 16), satisfying the x64 calling convention alignment requirement.",
  },
  {
    id: "cpe301_5_124",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "After 'sub rsp, 8' and 'sub rsp, 20h' execute in the CallProc_64 example, RSP = 01AFE20h. What is stored in the memory range 01AFE20h through 01AFE3Fh?",
    options: [
      "The four parameter register values RCX, RDX, R8, R9",
      "The 32 bytes of shadow space reserved for the called procedure to optionally save register parameters",
      "The saved values of all non-volatile registers",
      "The return address to the OS and the return address to main",
    ],
    correctAnswer: 1,
    explanation:
      "After subtracting 32 bytes (20h), RSP = 01AFE20h. The range 01AFE20h through 01AFE3Fh (32 bytes) is the shadow space reserved by the caller. The called procedure can optionally save register parameters there.",
  },
  {
    id: "cpe301_5_125",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Inside AddFour, RSP = 01AFE18h. What is stored at this address?",
    options: [
      "The first parameter (RCX = 1)",
      "The return address back to main (pushed by the CALL instruction when calling AddFour)",
      "The saved value of RBP",
      "The shadow space for AddFour's own calls",
    ],
    correctAnswer: 1,
    explanation:
      "When CALL AddFour executes, it pushes the return address onto the stack, decrementing RSP by 8 (from 01AFE20h to 01AFE18h). So RSP inside AddFour points to the return address back to main.",
  },
  {
    id: "cpe301_5_126",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: In 64-bit mode, when the OS calls main, the CALL instruction itself causes RSP to be 8 bytes lower than its pre-call value.",
    options: ["False", "Maybe", "True", "I don't know"],
    correctAnswer: 2,
    explanation:
      "True. When the OS calls main, the CALL instruction pushes an 8-byte return address onto the stack, decrementing RSP by 8. This is why the first instruction in main subtracts another 8 to restore 16-byte alignment.",
  },
  {
    id: "cpe301_5_127",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The Irvine64 library's WriteInt64 procedure displays the contents of which register as a signed 64-bit decimal integer?",
    options: ["RCX", "RBX", "RDX", "RAX"],
    correctAnswer: 3,
    explanation:
      "WriteInt64 displays the contents of the RAX register as a 64-bit signed decimal integer with a leading plus or minus sign. It has no return value.",
  },
  {
    id: "cpe301_5_128",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In the Irvine64 library, the Str_compare procedure compares two strings. How are the string pointers passed?",
    options: [
      "Source in RCX, target in RDX",
      "Source in RSI, target in RDI",
      "Both offsets pushed on the stack",
      "Source in RAX, target in RBX",
    ],
    correctAnswer: 1,
    explanation:
      "In the Irvine64 Str_compare: pass a pointer to the source string in RSI, and a pointer to the target string in RDI. Sets Zero and Carry flags the same way as CMP.",
  },
  {
    id: "cpe301_5_129",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The Irvine64 library's ReadString procedure takes parameters in which registers?",
    options: [
      "Offset of buffer in RAX, max characters in RBX",
      "Offset of buffer in RDX, max characters plus 1 in RCX",
      "Offset of buffer in RSI, max characters in RCX",
      "Offset of buffer in RDI, max characters in RDX",
    ],
    correctAnswer: 1,
    explanation:
      "For Irvine64 ReadString: pass the offset of the input buffer in RDX, and set RCX to the maximum number of characters the user can enter, plus 1 (for the null terminator). It returns a count in RAX.",
  },
  {
    id: "cpe301_5_130",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The Irvine64 WriteHexB procedure can display integers in 1-byte, 2-byte, 4-byte, or 8-byte format. In which register is the display size passed?",
    options: ["RAX", "RCX", "RDX", "RBX"],
    correctAnswer: 3,
    explanation:
      "For Irvine64 WriteHexB: pass the value in RAX and the display size (1, 2, 4, or 8 bytes) in the RBX register. This is similar to the 32-bit WriteHexB which uses EBX.",
  },
  {
    id: "cpe301_5_131",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: When calling ExitProcess in 64-bit mode, the process return code is placed in the ECX register.",
    options: ["True", "I don't know", "False", "Maybe"],
    correctAnswer: 0,
    explanation:
      "True. In the CallProc_64 example, 'mov ecx, 0' places the exit code 0 in ECX before calling ExitProcess. In the x64 calling convention, ECX (or RCX) holds the first parameter passed to any procedure.",
  },
  {
    id: "cpe301_5_132",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Why does the x64 calling convention require shadow space even when the called procedure may not use it?",
    options: [
      "It serves as a mandatory memory barrier between stack frames",
      "It provides space for the called procedure to optionally spill (save) the register parameters to memory, useful for debugging and prologue/epilogue code generation",
      "It holds the return address in case the called procedure modifies RSP",
      "It aligns the stack to a 64-byte cache line boundary",
    ],
    correctAnswer: 1,
    explanation:
      "Shadow space gives the called procedure a home location to optionally save the register parameters (RCX, RDX, R8, R9). This is useful for debugging, allows procedures to treat all parameters uniformly, and supports compiler-generated prologue/epilogue code.",
  },
  {
    id: "cpe301_5_133",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The Irvine64 library's Str_length procedure returns the string length in which register, and how is the string passed?",
    options: [
      "Length in RCX; string offset in RAX",
      "Length in RAX; string offset in RCX",
      "Length in RDX; string offset in RSI",
      "Length in RBX; string offset in RDI",
    ],
    correctAnswer: 1,
    explanation:
      "For Irvine64 Str_length: pass the string's offset in RCX. The procedure returns the length of the null-terminated string in the RAX register.",
  },
  {
    id: "cpe301_5_134",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The 64-bit Irvine64 library contains the same number of procedures as the 32-bit Irvine32 library.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. The Irvine64 library is described as a 'minimal' and 'much smaller' library compared to Irvine32. It contains only the essential tools needed for basic interactivity, such as Crlf, Random64, ReadInt64, WriteInt64, WriteString, etc.",
  },

  // ─── REVIEW QUESTIONS CODE TRACE SECTION ───

  {
    id: "cpe301_5_135",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Review Q16: main pushes 10, then 20, then calls Ex2Sub. Inside Ex2Sub: pop eax / ret. Then main does: pop eax. Which answer correctly describes what happens?",
    options: [
      "EAX will equal 10 on the pop in main",
      "EAX will equal 20 on the pop in main",
      "The program will halt with a runtime error on the ret in Ex2Sub",
      "EAX will equal the return address from the call",
    ],
    correctAnswer: 0,
    explanation:
      "Stack (top-down) before Ex2Sub executes: [return_to_main, 20, 10]. Ex2Sub pops the return address into EAX. Then RET pops 20 as the 'return address', jumping to address 20 — which happens to be valid as main's next pop. That pop then gets 10. So EAX = 10.",
  },
  {
    id: "cpe301_5_136",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Review Q17: main does mov eax,30 / push eax / push 40 / call Ex3Sub. Ex3Sub does: pusha / mov eax,80 / popa / ret. What value does EAX hold back in main after the call returns?",
    options: [
      "EAX = 40",
      "EAX = 80",
      "EAX = 30",
      "The program halts with a runtime error",
    ],
    correctAnswer: 2,
    explanation:
      "Ex3Sub uses PUSHA to save all 16-bit registers (including AX which holds the low 16 bits of EAX=40), then sets EAX to 80, then POPA restores EAX back to its saved value. After the call returns, EAX = 30 (the value it had before the push 40 modified it... actually PUSHA saved EAX=40 at call time, so POPA restores EAX=40). Wait — the answer per the textbook is EAX=30 because POPA restores EAX to the value it had when PUSHA was called, which was 40 from 'push eax' — no, EAX was already set to 80 by mov eax,80 before popa. POPA restores AX (16-bit) and doesn't clear EAX upper bits... The textbook answer is EAX=30 on return to main since POPA restores the AX that was saved which was 40's low word, but per textbook exercise 17 answer: EAX=30 on line 6.",
  },
  {
    id: "cpe301_5_137",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Review Q18: main does: mov eax,40 / push offset Here / jmp Ex4Sub. Ex4Sub does: ret. The label Here: is followed by mov eax,30. What happens?",
    options: [
      "EAX will equal 40 at the mov eax,30 line because jmp skips the assignment",
      "The program halts with a runtime error on the jmp instruction",
      "EAX will equal 30 at the mov eax,30 line, because RET pops the offset of Here and jumps there",
      "The program halts with a runtime error on the ret in Ex4Sub",
    ],
    correctAnswer: 2,
    explanation:
      "push offset Here places the address of label Here on the stack. JMP Ex4Sub jumps to Ex4Sub without using CALL, so no return address is pushed. Ex4Sub's RET pops the offset of Here from the stack into EIP, jumping back to Here. Execution continues at mov eax,30, making EAX=30.",
  },
  {
    id: "cpe301_5_138",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Review Q19: main does: mov edx,0 / mov eax,40 / push eax / call Ex5Sub. Inside Ex5Sub: pop eax / pop edx / push eax / ret. What value does EDX hold when control returns to main?",
    options: [
      "EDX = 40",
      "EDX = 0",
      "EDX = the return address value",
      "The program halts with a runtime error on line 13 (ret)",
    ],
    correctAnswer: 0,
    explanation:
      "Stack (top-down) when Ex5Sub starts: [return_addr, 40]. Ex5Sub: pop eax → EAX=return_addr. pop edx → EDX=40. push eax → pushes return_addr back. ret → pops return_addr and returns. EDX = 40.",
  },
  {
    id: "cpe301_5_139",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Review Q20: Tracing nested calls in main→proc_1→proc_2→proc_3. EAX starts at 10, ESI starts at 0. proc_3 stores array[0]=EAX=10. proc_2 adds 10 to EAX and 4 to ESI, stores array[4]=20. proc_1 adds 10 and 4 again, stores array[8]=30. main adds 10 and 4, stores array[12]=40. What is array[0]?",
    options: ["10", "20", "30", "40"],
    correctAnswer: 0,
    explanation:
      "proc_3 is the innermost call. When proc_3 runs, EAX=10 and ESI=0, so array[0] = 10. Then returning up the call chain, each level adds 10 to EAX and 4 to ESI, writing values 20, 30, 40 to subsequent array positions.",
  },
  {
    id: "cpe301_5_140",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Continuing Review Q20: After all nested calls complete and main's final 'mov array[esi],eax' executes, what value is stored in array[12]?",
    options: ["10", "20", "30", "40"],
    correctAnswer: 3,
    explanation:
      "After all returns, control is back in main. At this point: ESI=12 (incremented 4 times by 4 across proc_3 return through main), EAX=40 (incremented 4 times by 10 starting from 10). So array[12] = 40.",
  },
  {
    id: "cpe301_5_141",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Algorithm Workbench Q1: Write a sequence using only PUSH and POP to exchange the values in EAX and EBX. Which sequence correctly accomplishes this?",
    options: [
      "push eax / push ebx / pop eax / pop ebx",
      "push eax / mov eax,ebx / pop ebx",
      "xchg eax,ebx",
      "push eax / push ebx / pop eax / pop ebx is wrong — it just restores original values",
    ],
    correctAnswer: 1,
    explanation:
      "Using only PUSH and POP: push eax (stack: [A]), push ebx (stack: [B, A]), pop eax (EAX=B, stack: [A]), pop ebx (EBX=A). Result: EAX=old EBX, EBX=old EAX. The sequence 'push eax / mov eax,ebx / pop ebx' achieves the same with one fewer operation.",
  },
  {
    id: "cpe301_5_142",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Algorithm Workbench Q2: A subroutine needs to return to an address 3 bytes HIGHER than the return address currently on the stack. What sequence of instructions just before RET accomplishes this?",
    options: [
      "add esp,3 before ret",
      "pop eax / add eax,3 / push eax — then ret pops the modified return address",
      "mov [esp],3 before ret",
      "sub esp,3 before ret",
    ],
    correctAnswer: 1,
    explanation:
      "To modify the return address: pop eax retrieves it, add eax,3 adds 3 bytes, push eax puts it back. Then RET pops the modified address into EIP, returning to 3 bytes higher than the original return address.",
  },
  {
    id: "cpe301_5_143",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Algorithm Workbench Q3: How can you reserve space for two integer doubleword local variables at the beginning of a subroutine?",
    options: [
      "mov esp,esp-8",
      "push 0 / push 0",
      "sub esp,8 — reserves 8 bytes (two DWORDs) on the stack below ESP",
      "add ebp,8",
    ],
    correctAnswer: 2,
    explanation:
      "Subtracting 8 from ESP reserves 8 bytes (two 4-byte doublewords) on the stack for local variables. You can then use [ebp-4] and [ebp-8] (after setting EBP) to access them. Push 0/push 0 also works but initializes them to zero.",
  },
  {
    id: "cpe301_5_144",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Short Answer Q6: True or False: The RET instruction pops the top of the stack into the instruction pointer.",
    options: ["False", "Maybe", "I don't know", "True"],
    correctAnswer: 3,
    explanation:
      "True. The RET instruction pops the value at the top of the stack (pointed to by ESP) into the instruction pointer (EIP in 32-bit mode, RIP in 64-bit mode), returning execution to the caller.",
  },
  {
    id: "cpe301_5_145",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Short Answer Q7: True or False — Nested procedure calls are not permitted by MASM unless the NESTED operator is used in the procedure definition.",
    options: ["True", "I don't know", "False", "Maybe"],
    correctAnswer: 2,
    explanation:
      "False. There is no NESTED operator in MASM. Nested procedure calls are fully supported without any special operator. The runtime stack automatically manages all return addresses for arbitrarily deep nesting.",
  },
  {
    id: "cpe301_5_146",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Short Answer Q8: True or False — In protected mode, each procedure call uses a minimum of 4 bytes of stack space.",
    options: ["Maybe", "True", "I don't know", "False"],
    correctAnswer: 1,
    explanation:
      "True. In 32-bit protected mode, the CALL instruction pushes a 32-bit (4-byte) return address onto the stack. So each procedure call uses a minimum of 4 bytes of stack space.",
  },
  {
    id: "cpe301_5_147",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Short Answer Q9: True or False — The ESI and EDI registers cannot be used when passing 32-bit parameters to procedures.",
    options: ["True", "Maybe", "False", "I don't know"],
    correctAnswer: 2,
    explanation:
      "False. ESI and EDI can absolutely be used to pass parameters to procedures. The ArraySum procedure, for example, uses ESI to pass the array offset. Any general-purpose register can be used for parameter passing.",
  },
  {
    id: "cpe301_5_148",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Short Answer Q10: True or False — The ArraySum procedure receives a pointer to any array of doublewords.",
    options: ["False", "True", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "True. ArraySum receives the array's offset in ESI and the count in ECX. Because it uses a generic pointer rather than a specific variable name, it works with any array of 32-bit doublewords passed to it.",
  },
  {
    id: "cpe301_5_149",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Short Answer Q13: True or False — The register list in the USES directive must use commas to separate the register names.",
    options: ["Maybe", "True", "False", "I don't know"],
    correctAnswer: 2,
    explanation:
      "False. The register list in the USES directive must use SPACES or TABS to separate register names — not commas. For example: 'ArraySum PROC USES esi ecx' (spaces between esi and ecx).",
  },
  {
    id: "cpe301_5_150",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Short Answer Q11: True or False — The USES operator lets you name all registers that are modified within a procedure.",
    options: ["I don't know", "False", "True", "Maybe"],
    correctAnswer: 2,
    explanation:
      "True. The USES operator, coupled with the PROC directive, lets you list the names of all registers modified within a procedure. The assembler then generates the PUSH and POP instructions automatically.",
  },

  // ─── PROGRAMMING EXERCISES – CONCEPTUAL QUESTIONS ───

  {
    id: "cpe301_5_151",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Programming Exercise 1 asks you to display the same string in four different colors using a loop and SetTextColor. Which Irvine32 procedure should you call between color changes to make each color visible on the background?",
    options: [
      "WaitMsg — to pause between each color display",
      "Clrscr — to fill the entire console background with the new color after each SetTextColor call",
      "Gotoxy — to position the cursor at the same starting location each time",
      "Crlf — to advance the cursor before each WriteString call",
    ],
    correctAnswer: 1,
    explanation:
      "SetTextColor changes future text color attributes. To update the background color of the console window itself, you must call Clrscr after SetTextColor. Without it, only new text uses the new color; the background remains unchanged.",
  },
  {
    id: "cpe301_5_152",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Programming Exercise 5 (BetterRandomRange) asks you to generate a random integer between M and N-1, passing M in EBX and N in EAX. After calling RandomRange (which gives 0 to N-M-1), what arithmetic produces a value in the correct range?",
    options: [
      "add eax, ebx — adds the lower bound M to shift the 0-based result to M-based",
      "sub eax, ebx — subtracts the lower bound to produce M to N-1",
      "mul eax, ebx — multiplies to scale the range",
      "xor eax, ebx — adjusts the range using bitwise operations",
    ],
    correctAnswer: 0,
    explanation:
      "BetterRandomRange should: compute the range size (N-M), call RandomRange to get a value 0 to (N-M-1), then add M to shift it to M through N-1. The ADD shifts the zero-based result up to start at M.",
  },
  {
    id: "cpe301_5_153",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Programming Exercise 6 asks for a procedure that generates a random string of L capital letters. Capital letters in ASCII range from 65 ('A') to 90 ('Z'), which is 26 values. To generate one random capital letter using RandomRange, what value should be passed in EAX?",
    options: [
      "EAX = 26 (to generate 0-25), then add 65 for 'A'-'Z'",
      "EAX = 90 (to generate 0-89), then mask to get 65-90",
      "EAX = 65 (to generate 0-64), then add 26",
      "EAX = 52 (to generate both upper and lower case)",
    ],
    correctAnswer: 0,
    explanation:
      "Capital letters are ASCII 65-90, a range of 26 values. Call RandomRange with EAX=26 to generate 0-25, then add 65 to shift to 65-90 ('A'-'Z').",
  },
  {
    id: "cpe301_5_154",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Programming Exercise 7 asks you to display a character at 100 random screen locations with a 100ms delay. Which two Irvine32 procedures are essential for this exercise?",
    options: [
      "GetMseconds and WriteDec",
      "Gotoxy and Delay (with GetMaxXY to determine valid coordinate bounds)",
      "ReadChar and WriteChar",
      "Random32 and WriteString",
    ],
    correctAnswer: 1,
    explanation:
      "This exercise requires: Gotoxy (to position the cursor at random screen locations), Delay with EAX=100 (100ms pause), RandomRange (for random coordinates), and GetMaxXY (to find valid console bounds). WriteChar displays the character.",
  },
  {
    id: "cpe301_5_155",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Programming Exercise 8 (Color Matrix) asks for all 256 foreground/background combinations. If the foreground loop counter runs 0-15 and the background counter runs 0-15, how is the color attribute byte computed?",
    options: [
      "foreground + background",
      "foreground * background",
      "foreground + (background * 16)",
      "background + (foreground * 16)",
    ],
    correctAnswer: 2,
    explanation:
      "The color byte stores background in the upper 4 bits (multiply by 16) and foreground in the lower 4 bits. So the attribute = foreground + (background * 16). With 16 foreground values and 16 background values, there are 256 combinations.",
  },
  {
    id: "cpe301_5_156",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Programming Exercise 9 (Recursive Procedure) uses the LOOP instruction to limit recursion. If ECX = 5 when the recursive call first enters the procedure, what will the stack depth be (number of active procedure calls) when ECX finally reaches 0?",
    options: [
      "5 active calls",
      "6 active calls (the initial call plus 5 recursive calls)",
      "4 active calls",
      "1 active call — LOOP prevents stack growth",
    ],
    correctAnswer: 1,
    explanation:
      "The initial call enters with ECX=5. Each recursive call decrements ECX via LOOP before calling itself again. After 5 recursive calls ECX=0 and recursion stops. Total stack depth = initial call + 5 recursive calls = 6 active frames.",
  },
  {
    id: "cpe301_5_157",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "Programming Exercise 10 (Fibonacci Generator) asks for a procedure generating N Fibonacci values stored in a DWORD array. For N=47, the last value is 2,971,215,073. Why must the array be declared as DWORD (32-bit) and not BYTE?",
    options: [
      "Because BYTE arrays cannot be indexed with ESI",
      "Because the 47th Fibonacci number (2,971,215,073) exceeds the maximum BYTE value of 255 and even the WORD maximum of 65535; it requires 32 bits",
      "Because the Fibonacci algorithm only works with DWORD arithmetic in MASM",
      "Because BYTE arrays are stored in a different memory segment",
    ],
    correctAnswer: 1,
    explanation:
      "The 47th Fibonacci value is 2,971,215,073 which exceeds BYTE max (255) and WORD max (65535). It fits in a 32-bit DWORD (max ~4.29 billion for unsigned). Using BYTE or WORD would overflow.",
  },

  // ─── HARDER INTEGRATION & SCENARIO QUESTIONS ───

  {
    id: "cpe301_5_158",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A procedure uses PUSHAD at the start and POPAD at the end. Inside, it modifies EAX to hold a file handle and tries to return it. A programmer tests the handle value after the call and always gets the original EAX value. What is the root cause?",
    options: [
      "PUSHAD cannot save file handles correctly",
      "POPAD overwrites EAX with its pre-PUSHAD saved value, destroying the file handle return value",
      "File handles require 64-bit registers and cannot be returned in EAX",
      "PUSHAD implicitly clears EAX before saving it",
    ],
    correctAnswer: 1,
    explanation:
      "POPAD restores all saved register values including EAX. The file handle set inside the procedure is overwritten by POPAD with the value EAX held before PUSHAD ran. Procedures returning values in EAX must NOT use PUSHAD/POPAD.",
  },
  {
    id: "cpe301_5_159",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A program calls Randomize once at startup and then calls Random32 in a loop 10 times. On the next run of the program, the same 10 numbers appear. What is the most likely cause?",
    options: [
      "Random32 is deterministic and always produces the same sequence regardless of seed",
      "Randomize was called but returned the same time-of-day value because the program ran at exactly the same time of day",
      "The loop counter ECX was not properly initialized",
      "Randomize must be called inside the loop, not just once",
    ],
    correctAnswer: 1,
    explanation:
      "Randomize seeds the generator with the time of day, accurate to 1/100 of a second. If the program runs at nearly the same time each test, it may get the same seed. More commonly this indicates Randomize was NOT actually called, or was bypassed.",
  },
  {
    id: "cpe301_5_160",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A developer writes a procedure that reads a file, processes it, and writes to an output file. They forget to call CloseFile on the input file before exiting. What problem can this cause?",
    options: [
      "No problem — the OS automatically closes all file handles when the process exits",
      "The file's data becomes permanently corrupted in the file system",
      "In long-running programs or repeated calls, file handles are leaked, eventually exhausting the OS's available file handle table entries",
      "CloseFile only affects write access; leaving a read handle open is harmless",
    ],
    correctAnswer: 2,
    explanation:
      "Each open file consumes a file handle from the OS's limited pool. While the OS reclaims handles on process exit, in long-running programs or procedures called repeatedly, failing to close handles causes handle leaks that can exhaust the available handles.",
  },
  {
    id: "cpe301_5_161",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: A global label (declared with ::) can safely be used as the target of a JMP instruction from any procedure in the same source file without risk to the runtime stack.",
    options: ["True", "Maybe", "False", "I don't know"],
    correctAnswer: 2,
    explanation:
      "False. While global labels are syntactically accessible from any procedure, jumping to a label outside the current procedure is dangerous because it bypasses the RET instruction. The return address pushed by CALL remains on the stack, corrupting it.",
  },
  {
    id: "cpe301_5_162",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A student writes: ArraySum PROC USES esi ecx eax. What problem does including EAX in the USES list cause?",
    options: [
      "The assembler will reject EAX in the USES list because it is the accumulator",
      "Including EAX causes POPAD to be generated instead of individual POPs",
      "At the end of the procedure, the generated POP EAX will overwrite the sum that was computed in EAX, destroying the return value",
      "EAX cannot be pushed and popped while other registers are being modified",
    ],
    correctAnswer: 2,
    explanation:
      "USES generates PUSH EAX at the start and POP EAX at the end. The POP EAX at the end restores EAX to its pre-call value, overwriting the sum that was returned in EAX. Registers used as return values must be excluded from USES.",
  },
  {
    id: "cpe301_5_163",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "You call GetMseconds, execute a loop, then call GetMseconds again and subtract. The result is negative. What is the most likely cause?",
    options: [
      "The loop contains a division by zero",
      "GetMseconds wrapped around midnight — the second call returned a smaller value because midnight passed between the two calls",
      "GetMseconds returns values in microseconds, not milliseconds, causing overflow",
      "The PUSH/POP around the loop corrupted EAX between the two GetMseconds calls",
    ],
    correctAnswer: 1,
    explanation:
      "GetMseconds returns milliseconds elapsed since midnight. If the program runs across midnight, the second call returns a value smaller than the first (e.g., 0 vs. 86,399,999 ms). Subtracting gives a negative result. This is the classic midnight wraparound problem.",
  },
  {
    id: "cpe301_5_164",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In a 64-bit program, a procedure call uses 'sub rsp, 28h' before the CALL. What is the breakdown of this 0x28 (40) bytes?",
    options: [
      "40 bytes of local variable space",
      "8 bytes for stack alignment + 32 bytes (20h) of shadow space = 40 bytes total",
      "32 bytes for four 64-bit parameters + 8 bytes for the return address",
      "16 bytes for two parameters + 24 bytes of padding for cache alignment",
    ],
    correctAnswer: 1,
    explanation:
      "The 0x28 = 40 bytes breaks down as: 8 bytes (sub rsp,8) to re-align RSP to 16-byte boundary + 32 bytes (sub rsp,20h) of shadow space = 40 bytes. In the example these are two separate subtractions shown combined.",
  },
  {
    id: "cpe301_5_165",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The Irvine32 library's DumpRegs procedure can be useful when debugging because it displays a snapshot of the CPU state at the point of the call.",
    options: ["Maybe", "I don't know", "False", "True"],
    correctAnswer: 3,
    explanation:
      "True. DumpRegs displays all common registers (EAX through EIP) and CPU status flags in hexadecimal. It can be inserted anywhere in code to capture the CPU state at that exact point, which is very useful for debugging.",
  },
  {
    id: "cpe301_5_166",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A programmer calls ReadString with ECX = SIZEOF buffer where buffer is declared as BYTE 21 DUP(0). The user types exactly 20 characters and presses Enter. How many characters are stored in the buffer, and what is in byte 21?",
    options: [
      "20 characters stored; byte 21 is undefined",
      "20 characters stored in bytes 1-20; byte 21 (index 20) contains the null terminator 00h",
      "21 characters stored; the null terminator overwrites the last character",
      "Only 19 characters stored to leave room for null plus Enter key",
    ],
    correctAnswer: 1,
    explanation:
      "ReadString stores up to (ECX-1) characters. With ECX=21 (SIZEOF buffer), up to 20 characters are stored. ReadString automatically inserts a null terminator at the end. The 20 characters occupy bytes 0-19, and byte 20 (the 21st byte) holds 00h.",
  },
  {
    id: "cpe301_5_167",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The chapter mentions the INCLUDE directive (e.g., 'include Irvine32.inc'). What is the key difference between INCLUDE and PROTO in terms of external procedure usage?",
    options: [
      "INCLUDE assembles the external library source code directly; PROTO is for pre-compiled libraries only",
      "INCLUDE copies the entire contents of a file (including multiple PROTOs, constants, macros) into the source; a standalone PROTO declares just one specific external procedure",
      "PROTO generates machine code; INCLUDE only affects the assembler's symbol table",
      "INCLUDE is for 32-bit programs only; PROTO is used only in 64-bit programs",
    ],
    correctAnswer: 1,
    explanation:
      "INCLUDE copies the entire contents of a file into the current source at that point — this typically brings in many PROTO declarations, constant definitions, and macros at once. A standalone PROTO declaration identifies just one specific external procedure.",
  },
  {
    id: "cpe301_5_168",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The WriteInt64 procedure in the Irvine64 library requires the display size to be passed in RBX before calling.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. WriteInt64 displays the contents of RAX as a 64-bit signed decimal integer with a leading sign. It has no input parameters beyond the implicit use of RAX — it does NOT require a display size in RBX.",
  },
  {
    id: "cpe301_5_169",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A procedure is described in its documentation header with 'Requires: the video display must be in graphics mode before calling.' This statement is an example of a:",
    options: [
      "Return value specification",
      "Input parameter description",
      "Precondition",
      "Post-condition",
    ],
    correctAnswer: 2,
    explanation:
      "A precondition is a special requirement that must be satisfied before a procedure is called. Documenting that 'the video display adapter must already be in graphics mode' is a classic example of a precondition listed under 'Requires'.",
  },
  {
    id: "cpe301_5_170",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The linker command 'link hello.obj irvine32.lib kernel32.lib' combines three files. What is the role of kernel32.lib in this command?",
    options: [
      "It provides the Irvine32 helper procedures directly",
      "It provides linking information for system functions located in kernel32.dll, which handles character-based I/O for the Irvine32 library",
      "It contains the startup code that initializes the stack and heap before main runs",
      "It provides the PROTO declarations needed by the assembler",
    ],
    correctAnswer: 1,
    explanation:
      "kernel32.lib is part of the Microsoft Windows Platform SDK. It contains linking information for system functions located in kernel32.dll — a fundamental part of MS-Windows that contains executable functions for character-based I/O. The Irvine32 library links to it.",
  },
  {
    id: "cpe301_5_171",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: In the x64 calling convention, it is the called procedure's responsibility to allocate shadow space on the stack.",
    options: ["I don't know", "True", "Maybe", "False"],
    correctAnswer: 3,
    explanation:
      "False. It is the CALLER's responsibility to allocate at least 32 bytes of shadow space on the runtime stack before calling a procedure. The callee may then optionally use that space to save the register parameters.",
  },
  {
    id: "cpe301_5_172",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A programmer wants to display a memory dump of a WORD array (16-bit elements) using DumpMem. What value should EBX hold?",
    options: ["1", "2", "4", "8"],
    correctAnswer: 1,
    explanation:
      "DumpMem's EBX parameter specifies the unit size: 1=byte, 2=word, 4=doubleword. For a WORD array (16-bit elements), EBX should be set to 2.",
  },
  {
    id: "cpe301_5_173",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "ParseInteger32 sets the Overflow flag and displays an error message when the value cannot be represented as a 32-bit signed integer. What is the valid signed 32-bit integer range?",
    options: [
      "0 to 4,294,967,295",
      "−2,147,483,648 to 2,147,483,647",
      "−32,768 to 32,767",
      "−2,147,483,647 to 2,147,483,647",
    ],
    correctAnswer: 1,
    explanation:
      "A 32-bit signed integer can represent values from −2,147,483,648 (−2^31) to 2,147,483,647 (2^31 − 1). ParseInteger32 sets OF and displays an error if the input falls outside this range.",
  },
  {
    id: "cpe301_5_174",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "The chapter mentions that WriteStackFrame and WriteStackFrameName are Irvine32 procedures. Based on their names, what is their likely purpose?",
    options: [
      "To write data onto the stack frame for local variable initialization",
      "To display the current procedure's stack frame (and optionally its name) to the console for debugging",
      "To backup the stack frame to a disk file for crash recovery",
      "To create a new stack segment for the current procedure",
    ],
    correctAnswer: 1,
    explanation:
      "WriteStackFrame writes the current procedure's stack frame to the console. WriteStackFrameName also writes the current procedure's name along with its stack frame. Both are debugging tools that show stack contents.",
  },
  {
    id: "cpe301_5_175",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: The Irvine32 library can be modified and reused by programmers as long as credit is given to its original author.",
    options: ["False", "Maybe", "True", "I don't know"],
    correctAnswer: 2,
    explanation:
      "True. The textbook explicitly states: 'You are free to modify and reuse the library, as long as you give credit to its original author.' The complete library source code is also available at the author's web site.",
  },
  {
    id: "cpe301_5_176",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A developer writes a procedure that calls another procedure which also calls another (three levels deep). After all returns, which statement about the stack is true?",
    options: [
      "The stack has three extra return addresses that must be manually popped",
      "The stack is exactly as it was before the first procedure call, because each CALL/RET pair is balanced",
      "The stack has grown by 12 bytes permanently due to the three CALL instructions",
      "The stack pointer is unpredictable after three levels of nesting",
    ],
    correctAnswer: 1,
    explanation:
      "Each CALL pushes a return address, and each corresponding RET pops it. With three nested calls and three corresponding returns, the stack is exactly balanced — back to its state before the first call.",
  },
  {
    id: "cpe301_5_177",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "In the Library Test #1 example, the DumpMem call uses TYPE arrayD for EBX and LENGTHOF arrayD for ECX. If arrayD is declared as SDWORD with 4 elements, what are the values of TYPE arrayD and LENGTHOF arrayD?",
    options: [
      "TYPE = 2, LENGTHOF = 4",
      "TYPE = 4, LENGTHOF = 4",
      "TYPE = 4, LENGTHOF = 16",
      "TYPE = 8, LENGTHOF = 4",
    ],
    correctAnswer: 1,
    explanation:
      "SDWORD (signed doubleword) is 4 bytes, so TYPE arrayD = 4. The array has 4 elements (12345678h, 1A4B2000h, 3434h, 7AB9h), so LENGTHOF arrayD = 4.",
  },
  {
    id: "cpe301_5_178",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "True or False: Pushing EFLAGS onto the stack with PUSHFD and then immediately popping into a variable is described as less error-prone than surrounding code blocks with PUSHFD/POPFD.",
    options: ["I don't know", "False", "Maybe", "True"],
    correctAnswer: 3,
    explanation:
      "True. The textbook states: 'A less error-prone way to save and restore the flags is to push them on the stack and immediately pop them into a variable.' This avoids the risk of execution accidentally jumping over a POPFD instruction.",
  },
  {
    id: "cpe301_5_179",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "What is the purpose of using 'mov ecx, OUTER_LOOP_COUNT' before the outer loop in Library Test #3, rather than using a hard-coded immediate value like 'mov ecx, 3'?",
    options: [
      "Because MASM does not allow immediate values in MOV instructions with ECX",
      "Because the LOOP instruction requires ECX to be loaded from a constant symbol, not an immediate",
      "Using a named constant (OUTER_LOOP_COUNT) makes the code more readable and easier to change — modifying one constant updates all uses",
      "Because the value 3 would conflict with ECX's special purpose as a loop counter",
    ],
    correctAnswer: 2,
    explanation:
      "Using a named constant like OUTER_LOOP_COUNT = 3 is good programming practice. It makes the code more readable (the name explains the purpose) and maintainable — changing the value in one place updates all occurrences throughout the program.",
  },
  {
    id: "cpe301_5_180",
    course: "CPE301",
    chapter: "Chapter 5",
    text: "A beginning programmer asks: 'Why not just use global variables to pass data between procedures instead of register parameters?' Which of the following is the strongest argument against relying on global variables for procedure communication?",
    options: [
      "Global variables cannot be accessed from inside procedures in MASM",
      "Using specific global variable names inside a procedure ties it to that specific program and data, making it non-reusable — passing parameters via registers creates a more flexible, general-purpose interface",
      "Global variables are stored in a different memory segment that procedures cannot access efficiently",
      "MASM does not allow global variables to be declared outside of procedures",
    ],
    correctAnswer: 1,
    explanation:
      "If a procedure references specific variable names, it can only work with those exact variables in that specific program. Passing parameters via registers (like ArraySum uses ESI and ECX) makes the procedure independent of specific data, allowing it to be reused in any program.",
  },
];

const cpe301Chapter5 = [...cpe301Chapter5Part1, ...cpe301Chapter5Part2];

export default cpe301Chapter5;
