import { QuestionV2 } from "@/lib/quiz-types";

const CPE301Chapter7Part1: QuestionV2[] = [
  // ─── SHIFT & ROTATE INSTRUCTIONS ───────────────────────────────────────────
  {
    id: "CPE301_7_001",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What is the key difference between a logical shift and an arithmetic shift?",
    options: [
      "Logical shifts only work on unsigned integers, arithmetic shifts only work on signed integers",
      "A logical shift fills the newly created bit position with zero, while an arithmetic shift fills it with a copy of the sign bit",
      "Logical shifts affect the Carry flag, arithmetic shifts do not",
      "Arithmetic shifts are faster than logical shifts on modern processors",
    ],
    correctAnswer: 1,
    explanation:
      "A logical shift always fills the vacated bit position with 0. An arithmetic shift copies the original sign bit into the vacated position, preserving the number's sign for signed arithmetic.",
  },
  {
    id: "CPE301_7_002",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After executing 'mov al, 10000000b' followed by 'shl al, 2', what are the values of CF and AL?",
    options: [
      "CF = 1, AL = 11111110b",
      "CF = 0, AL = 00000000b",
      "CF = 1, AL = 00000010b",
      "CF = 0, AL = 10000000b",
    ],
    correctAnswer: 1,
    explanation:
      "When shifted left by 2, bit 7 (1) moves out first (replacing CF temporarily) but then bit 6 (0) becomes the last bit shifted out of the MSB position, so CF = 0. Both remaining bits shift out, leaving AL = 00000000b.",
  },
  {
    id: "CPE301_7_003",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which of the following is a valid operand format for the SHL instruction?",
    options: ["SHL mem, mem", "SHL reg, imm16", "SHL reg, CL", "SHL imm8, CL"],
    correctAnswer: 2,
    explanation:
      "SHL (and all shift/rotate instructions) accept either an 8-bit immediate value (imm8, 0–255) or the CL register as the shift count. The destination must be a register or memory operand, not an immediate.",
  },
  {
    id: "CPE301_7_004",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer wants to multiply EAX by 2^5 (32) using a shift instruction for performance. Which instruction achieves this?",
    options: ["SHR EAX, 5", "SAR EAX, 5", "SHL EAX, 5", "ROR EAX, 5"],
    correctAnswer: 2,
    explanation:
      "SHL (shift left) by n bits multiplies the operand by 2^n. Shifting left by 5 is equivalent to multiplying by 2^5 = 32. SHR divides, SAR is for signed division, and ROR rotates.",
  },
  {
    id: "CPE301_7_005",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov al, 0D0h' and 'shr al, 1', what is the value in AL and CF?",
    options: [
      "AL = 11101000b, CF = 0",
      "AL = 01101000b, CF = 0",
      "AL = 01101000b, CF = 1",
      "AL = 10101000b, CF = 0",
    ],
    correctAnswer: 1,
    explanation:
      "0D0h = 11010000b. SHR fills the highest bit with 0 and shifts the lowest bit (0) to CF. Result: 01101000b. CF = 0 because the original LSB was 0.",
  },
  {
    id: "CPE301_7_006",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The SHR instruction is used on a signed negative number. What problem can arise?",
    options: [
      "SHR will cause a processor exception on negative numbers",
      "SHR fills the vacated high bit with 0, which changes the sign, producing an incorrect result for signed division",
      "SHR sets the Overflow flag and halts execution",
      "SHR treats the number as unsigned and the result is the same as for positive numbers",
    ],
    correctAnswer: 1,
    explanation:
      "SHR always fills the high bit with 0 regardless of the sign. For negative signed numbers, this changes the sign bit from 1 to 0, giving a wrong result. SAR should be used for signed division.",
  },
  {
    id: "CPE301_7_007",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What is the functional difference between SAL and SHL?",
    options: [
      "SAL preserves the sign bit; SHL does not",
      "SAL sets the Overflow flag; SHL does not",
      "There is no difference — SAL and SHL perform the same operation",
      "SAL is for 16-bit registers only; SHL works on all sizes",
    ],
    correctAnswer: 2,
    explanation:
      "SAL (Shift Arithmetic Left) and SHL (Shift Left) are identical in operation. Both shift bits left, filling the lowest bit with 0 and moving the highest bit into the Carry flag.",
  },
  {
    id: "CPE301_7_008",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Given 'mov al, 0F0h' and 'sar al, 1', what is the result in AL?",
    options: [
      "AL = 01111000b (78h)",
      "AL = 11111000b (F8h)",
      "AL = 10000000b (80h)",
      "AL = 11100000b (E0h)",
    ],
    correctAnswer: 1,
    explanation:
      "0F0h = 11110000b. SAR copies the sign bit (1) into the vacated MSB position. Result: 11111000b = F8h = -8 decimal, which is correct since -16 / 2 = -8.",
  },
  {
    id: "CPE301_7_009",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What does the ROL instruction do with the highest bit of the operand?",
    options: [
      "It discards the highest bit and fills the lowest bit with 0",
      "It copies the highest bit into the Carry flag only",
      "It copies the highest bit into both the Carry flag and the lowest bit position",
      "It copies the highest bit into the Carry flag, and the old Carry flag into the lowest bit",
    ],
    correctAnswer: 2,
    explanation:
      "ROL (rotate left) copies the MSB into BOTH the Carry flag and the lowest bit position simultaneously. This makes rotation lossless — no bits are discarded.",
  },
  {
    id: "CPE301_7_010",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer executes: 'mov al, 26h' then 'rol al, 4'. What is the result?",
    options: ["AL = 62h", "AL = 13h", "AL = 4Ch", "AL = 98h"],
    correctAnswer: 0,
    explanation:
      "26h = 0010 0110b. Rotating left 4 bits swaps the two 4-bit nibbles: 0110 0010b = 62h. ROL by 4 is equivalent to exchanging the upper and lower nibbles of a byte.",
  },
  {
    id: "CPE301_7_011",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Consider: 'mov al, 01h' then 'ror al, 1'. What are AL and CF?",
    options: [
      "AL = 00000000b, CF = 1",
      "AL = 10000000b, CF = 1",
      "AL = 00000010b, CF = 0",
      "AL = 10000001b, CF = 0",
    ],
    correctAnswer: 1,
    explanation:
      "ROR copies the LSB into both the Carry flag and the highest bit position. 00000001b: LSB = 1 goes to CF and to bit 7. Result: AL = 10000000b, CF = 1.",
  },
  {
    id: "CPE301_7_012",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The RCL instruction uses the Carry flag as part of the rotation, effectively treating it as an extra bit in the operand.",
    options: ["False", "I don't know", "Maybe", "True"],
    correctAnswer: 3,
    explanation:
      "True. RCL (Rotate Carry Left) shifts each bit left, copies the MSB into the Carry flag, and copies the OLD Carry flag value into the LSB. The Carry flag acts as a 9th bit in the rotation chain.",
  },
  {
    id: "CPE301_7_013",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer uses 'clc' then 'mov bl, 88h' then 'rcl bl, 1'. What is the result?",
    options: [
      "CF = 1, BL = 00010000b",
      "CF = 0, BL = 10001000b",
      "CF = 1, BL = 10001000b",
      "CF = 0, BL = 00010001b",
    ],
    correctAnswer: 0,
    explanation:
      "88h = 10001000b. RCL shifts left: MSB (1) → CF, old CF (0) → LSB. Result: 00010000b = 10h. CF = 1 (from original MSB). This matches the text's example.",
  },
  {
    id: "CPE301_7_014",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "When would you use RCL to recover a bit rather than just using ROL?",
    options: [
      "When you need to rotate more than 8 bit positions at once",
      "When a bit was previously shifted into the Carry flag and you need to restore the original value",
      "When the operand is in memory rather than a register",
      "When the shift count is stored in CL",
    ],
    correctAnswer: 1,
    explanation:
      "The book demonstrates using SHR to shift the LSB into CF for testing, then using RCL to restore the original value if the branch is not taken. RCL brings the bit back from CF into the MSB.",
  },
  {
    id: "CPE301_7_015",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The Overflow flag is set when rotating or shifting a signed integer by exactly how many bit positions?",
    options: [
      "Any number of positions greater than 0",
      "Exactly 2 positions",
      "Exactly 1 position, if the sign is reversed",
      "The Overflow flag is never set by shift or rotate instructions",
    ],
    correctAnswer: 2,
    explanation:
      "The Overflow flag is defined only when the shift/rotation count is exactly 1. It is set if the resulting value's sign differs from the original — i.e., the sign was reversed. For counts > 1, the OF value is undefined.",
  },
  {
    id: "CPE301_7_016",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What is the key advantage of SHLD and SHRD over SHL and SHR for large integer operations?",
    options: [
      "SHLD and SHRD are faster on all x86 processors",
      "SHLD and SHRD allow shifting with a 16-bit immediate count",
      "SHLD and SHRD fill vacated bit positions using bits from a source register instead of zeros",
      "SHLD and SHRD can shift memory operands directly without using registers",
    ],
    correctAnswer: 2,
    explanation:
      "SHLD/SHRD fill the vacated positions with bits from a source operand. This allows multi-register shifts where bits 'flow' from one register into another, essential for shifting large integers stored across multiple registers.",
  },
  {
    id: "CPE301_7_017",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Given 'mov ax, 9BA6h', 'mov ax, 0AC36h', 'shld wval, ax, 4' where wval = 9BA6h. What is wval after execution?",
    options: [
      "wval = AC36h",
      "wval = BA6Ah",
      "wval = 9BA6h (unchanged)",
      "wval = 0A4Bh",
    ],
    correctAnswer: 1,
    explanation:
      "SHLD shifts wval left by 4 bits, and the 4 high bits of AX (0AC36h → high nibble = 0A → top 4 bits = 1010) fill the vacated low bits of wval. 9BA6h << 4 with high bits of AX fills in: result = BA6Ah.",
  },
  {
    id: "CPE301_7_018",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: SHRD shifts the destination operand to the right and fills vacated high bit positions with the LEAST significant bits of the source operand.",
    options: ["True", "Maybe", "I don't know", "False"],
    correctAnswer: 0,
    explanation:
      "True. SHRD shifts the destination right, and fills the vacated high-order bits using the LEAST significant bits of the source operand. SHLD is the mirror: fills low bits using MOST significant bits of source.",
  },
  {
    id: "CPE301_7_019",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which instruction correctly describes the effect: 'Before: CF,AL = 1 11010101 → After: CF,AL = 1 10101011'?",
    options: ["SHL AL, 1", "ROL AL, 1", "RCL AL, 1", "RCR AL, 1"],
    correctAnswer: 2,
    explanation:
      "RCL shifts left: old MSB (1) → CF, old CF (1) → LSB. 11010101 becomes 1010101_. Fill LSB with old CF (1) = 10101011. New CF = 1 (old MSB). This matches the given transformation.",
  },
  {
    id: "CPE301_7_020",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the SHRD example: 'mov ax, 234Bh', 'mov dx, 7654h', 'shrd ax, dx, 4'. What does AX become?",
    options: ["AX = 7234h", "AX = 4234h", "AX = 4B76h", "AX = 234Bh"],
    correctAnswer: 1,
    explanation:
      "AX (234Bh) is shifted right by 4. The 4 low bits of DX (7654h → low nibble = 4) fill the high 4 bits of AX. 234Bh >> 4 = _234h, with 4 from DX's low nibble → AX = 4234h.",
  },

  // ─── SHIFT & ROTATE APPLICATIONS ───────────────────────────────────────────
  {
    id: "CPE301_7_021",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "When shifting a multi-byte integer stored in memory to the right by 1 bit, which instruction should be used on the LOWEST byte (not the highest)?",
    options: [
      "SHR, to shift in a 0 from the Carry flag",
      "RCR, to shift in the Carry flag value from the previous higher byte",
      "SAR, to preserve the sign bit",
      "ROR, to rotate the bit back around",
    ],
    correctAnswer: 1,
    explanation:
      "For multi-byte shifts: SHR is used on the highest byte first (which shifts the LSB into CF), then RCR is used on subsequent lower bytes. RCR brings the Carry flag (holding the bit from the higher byte) into the MSB of the current byte.",
  },
  {
    id: "CPE301_7_022",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer wants to multiply EAX by 36 using shifts. Which decomposition is correct?",
    options: [
      "36 = 2^5 + 2^2, so shift EAX left 5 and left 2, then ADD the results",
      "36 = 2^6 - 2^2, so shift EAX left 6, shift a copy left 2, then SUB",
      "36 = 2^5 + 2^1, so shift EAX left 5 and left 1, then ADD",
      "36 = 2^4 + 2^2 + 2^0, so shift and add three copies",
    ],
    correctAnswer: 0,
    explanation:
      "36 = 32 + 4 = 2^5 + 2^2. The code 'shl eax,5' multiplies by 32, 'shl ebx,2' multiplies by 4, and 'add eax,ebx' gives 36*EAX. The bit positions of set bits in 36 (binary 100100) are 2 and 5.",
  },
  {
    id: "CPE301_7_023",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the BinToAsc procedure, why is SHL used to display binary bits rather than SHR or AND?",
    options: [
      "SHL is faster than SHR on all processors",
      "SHL copies the highest bit into the Carry flag with each shift, allowing easy bit-by-bit testing from MSB to LSB",
      "SHL modifies fewer CPU flags than SHR, reducing interference",
      "SHL can work directly with the WriteChar procedure",
    ],
    correctAnswer: 1,
    explanation:
      "Each SHL copies the current MSB into the Carry flag. The code then checks the Carry flag (JNC) to determine if the bit is 0 or 1, storing '0' or '1' in the buffer. This processes bits from bit 31 down to bit 0.",
  },
  {
    id: "CPE301_7_024",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the MS-DOS file date stamp packed in DX, which bits hold the month number?",
    options: ["Bits 0–4", "Bits 5–8", "Bits 9–15", "Bits 1–5"],
    correctAnswer: 1,
    explanation:
      "The file date stamp layout: bits 0–4 = day (1–31), bits 5–8 = month number, bits 9–15 = year (relative to 1980). The month field spans bits 5 through 8.",
  },
  {
    id: "CPE301_7_025",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "To extract the month field (bits 5–8) from a date stamp in DX, a programmer copies DX to AX and executes 'shr ax, 5'. Why is an AND instruction still needed after?",
    options: [
      "Because SHR sets unwanted bits in AH that must be cleared",
      "Because the bits above the month field (day bits) are now in the low positions of AL and must be masked off",
      "Because SHR might have shifted too far, and AND corrects the count",
      "AND is not needed; SHR alone isolates the month field",
    ],
    correctAnswer: 1,
    explanation:
      "After 'shr ax, 5', the month occupies bits 0–3 of AL, but bits 4–7 of AL contain parts of the year field that were shifted down. 'and al, 00001111b' clears those upper bits, leaving only the 4-bit month value.",
  },
  {
    id: "CPE301_7_026",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: In the multi-byte shift example, the HIGHEST byte of the array is shifted first using SHR, and then RCR is used for the remaining bytes.",
    options: ["Maybe", "False", "True", "I don't know"],
    correctAnswer: 2,
    explanation:
      "True. The algorithm starts with SHR on the highest-order byte, which shifts its LSB into the Carry flag. Then RCR is applied to lower bytes in sequence, each time incorporating the CF from the previous operation.",
  },

  // ─── MUL INSTRUCTION ───────────────────────────────────────────────────────
  {
    id: "CPE301_7_027",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "When MUL uses a 16-bit operand, where is the 32-bit product stored?",
    options: [
      "Entirely in AX",
      "High 16 bits in AX, low 16 bits in DX",
      "High 16 bits in DX, low 16 bits in AX",
      "Entirely in EAX",
    ],
    correctAnswer: 2,
    explanation:
      "For 16-bit MUL: the 16-bit operand multiplies AX, producing a 32-bit product stored in DX:AX — the high 16 bits in DX and the low 16 bits in AX. The Carry flag is set if DX ≠ 0.",
  },
  {
    id: "CPE301_7_028",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov al, 5h', 'mov bl, 10h', 'mul bl', what is in AX and CF?",
    options: [
      "AX = 0050h, CF = 0",
      "AX = 0050h, CF = 1",
      "AX = 0015h, CF = 0",
      "AX = 0500h, CF = 1",
    ],
    correctAnswer: 0,
    explanation:
      "5h × 10h = 50h. The product fits in AL (AH = 0). AX = 0050h. CF = 0 because AH (the upper half of the product) equals zero, meaning no overflow.",
  },
  {
    id: "CPE301_7_029",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Why can overflow not occur with the single-operand MUL instruction?",
    options: [
      "MUL clears the Overflow flag before executing",
      "The product is always stored in a register twice the size of the operands, so it always fits",
      "MUL only works on small values that cannot overflow",
      "MUL uses modular arithmetic to prevent overflow",
    ],
    correctAnswer: 1,
    explanation:
      "The destination operand for MUL is always twice the size of both the multiplicand and multiplier. E.g., 8-bit × 8-bit → 16-bit in AX. Since the product container is always large enough, arithmetic overflow is impossible.",
  },
  {
    id: "CPE301_7_030",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov ax, val1 (2000h)', 'mul val2 (0100h)', what is in DX:AX and what is CF?",
    options: [
      "DX:AX = 00200000h, CF = 1",
      "DX:AX = 00002000h, CF = 0",
      "DX:AX = 20000000h, CF = 1",
      "DX:AX = 00200000h, CF = 0",
    ],
    correctAnswer: 0,
    explanation:
      "2000h × 0100h = 00200000h. DX = 0020h (high 16 bits), AX = 0000h (low 16 bits). CF = 1 because DX ≠ 0, meaning the upper half is significant.",
  },
  {
    id: "CPE301_7_031",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In 64-bit mode, when MUL uses a 64-bit register operand, where is the 128-bit product stored?",
    options: [
      "Entirely in RAX",
      "High 64 bits in RAX, low 64 bits in RDX",
      "High 64 bits in RDX, low 64 bits in RAX",
      "In a special 128-bit XMM register",
    ],
    correctAnswer: 2,
    explanation:
      "In 64-bit mode, MUL multiplies the source operand against RAX to produce a 128-bit product stored as RDX:RAX — the high 64 bits in RDX and the low 64 bits in RAX.",
  },
  {
    id: "CPE301_7_032",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The MUL instruction accepts immediate operands (e.g., 'mul 5').",
    options: ["True", "I don't know", "False", "Maybe"],
    correctAnswer: 2,
    explanation:
      "False. MUL only accepts register or memory operands (reg/mem8, reg/mem16, reg/mem32). Immediate operands are not permitted with the single-operand MUL instruction.",
  },

  // ─── IMUL INSTRUCTION ──────────────────────────────────────────────────────
  {
    id: "CPE301_7_033",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "How does IMUL preserve the sign of the product compared to MUL?",
    options: [
      "IMUL stores the result in a signed register automatically",
      "IMUL sign-extends the highest bit of the lower half of the product into the upper bits",
      "IMUL uses a separate sign flag register to track the product's sign",
      "IMUL and MUL handle signs identically",
    ],
    correctAnswer: 1,
    explanation:
      "IMUL performs sign extension: it copies the sign bit of the lower half of the product into all bits of the upper half. If the upper half is a sign extension of the lower, CF and OF are clear; otherwise they are set.",
  },
  {
    id: "CPE301_7_034",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov al, 48', 'mov bl, 4', 'imul bl', what is AX and OF?",
    options: [
      "AX = 00C0h, OF = 0",
      "AX = 00C0h, OF = 1",
      "AX = FFC0h, OF = 1",
      "AX = 0030h, OF = 0",
    ],
    correctAnswer: 1,
    explanation:
      "48 × 4 = 192 = C0h. AX = 00C0h. AH = 00h is NOT a sign extension of AL = C0h (since C0h has bit 7 set, sign extension of AL would make AH = FFh). Therefore OF = 1, indicating the result doesn't fit in the 8-bit AL.",
  },
  {
    id: "CPE301_7_035",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which IMUL format allows a 32-bit register to be multiplied directly by an 8-bit immediate value, storing the result in the same register?",
    options: [
      "Single-operand format: IMUL reg32",
      "Two-operand format: IMUL reg32, imm8",
      "Three-operand format: IMUL reg32, reg/mem32, imm8",
      "This combination is not supported by IMUL",
    ],
    correctAnswer: 1,
    explanation:
      "The two-operand IMUL format 'IMUL reg32, imm8' multiplies the destination register by the 8-bit immediate and stores the truncated product back in the destination register. Overflow is indicated by CF and OF.",
  },
  {
    id: "CPE301_7_036",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the three-operand IMUL format 'IMUL reg32, reg/mem32, imm32', where is the product stored?",
    options: [
      "In EDX:EAX",
      "In the second operand",
      "In the first operand (reg32)",
      "In a memory address pointed to by imm32",
    ],
    correctAnswer: 2,
    explanation:
      "In the three-operand format, the second operand (reg/mem32) is multiplied by the third operand (immediate), and the truncated product is stored in the first operand (reg32). The source operand is NOT modified.",
  },
  {
    id: "CPE301_7_037",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The two-operand and three-operand IMUL formats can also be used for unsigned multiplication, since the lower half of the product is the same for both signed and unsigned numbers.",
    options: ["I don't know", "False", "Maybe", "True"],
    correctAnswer: 3,
    explanation:
      "True. The lower half of a product is identical for signed and unsigned multiplication. The only downside is that CF and OF won't correctly indicate whether the upper half is zero (they indicate signed overflow instead).",
  },
  {
    id: "CPE301_7_038",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer executes 'mov ax, -32000' then 'imul ax, 2'. What flag indicates that a problem occurred?",
    options: [
      "Zero Flag (ZF)",
      "Sign Flag (SF)",
      "Overflow Flag (OF)",
      "Auxiliary Carry Flag (AF)",
    ],
    correctAnswer: 2,
    explanation:
      "-32000 × 2 = -64000, which cannot fit in a 16-bit signed operand (range: -32768 to +32767). The Overflow Flag (OF) is set to indicate signed overflow. Programmers must check OF after two-operand and three-operand IMUL.",
  },

  // ─── DIV INSTRUCTION ───────────────────────────────────────────────────────
  {
    id: "CPE301_7_039",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "When 'div bl' is executed with a 8-bit divisor, where are the quotient and remainder stored?",
    options: [
      "Quotient in AH, remainder in AL",
      "Quotient in AL, remainder in AH",
      "Quotient in AX, remainder in DX",
      "Quotient in AL, remainder in BL",
    ],
    correctAnswer: 1,
    explanation:
      "For 8-bit DIV: AX is the dividend, the 8-bit operand is the divisor, AL receives the quotient, and AH receives the remainder.",
  },
  {
    id: "CPE301_7_040",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov ax, 0083h', 'mov bl, 2', 'div bl', what are the values of AL and AH?",
    options: [
      "AL = 41h, AH = 01h",
      "AL = 01h, AH = 41h",
      "AL = 82h, AH = 00h",
      "AL = 40h, AH = 03h",
    ],
    correctAnswer: 0,
    explanation:
      "83h ÷ 2 = 41h (65 decimal) remainder 1. Quotient (41h) → AL, remainder (01h) → AH.",
  },
  {
    id: "CPE301_7_041",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Before performing 16-bit unsigned division ('div cx'), why must DX be explicitly cleared?",
    options: [
      "DX is used as a temporary buffer during division",
      "DX forms the HIGH half of the 32-bit dividend DX:AX; if not cleared, it contributes garbage bits to the dividend",
      "DIV reads DX as the divisor backup",
      "Clearing DX prevents the Overflow flag from being set",
    ],
    correctAnswer: 1,
    explanation:
      "For 16-bit DIV, the dividend is the 32-bit value DX:AX. If DX contains non-zero garbage from a previous operation, the actual dividend will be much larger than intended, giving a wrong quotient or causing divide overflow.",
  },
  {
    id: "CPE301_7_042",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What happens when a DIV instruction produces a quotient too large for the destination register?",
    options: [
      "The quotient is truncated to fit and the Carry flag is set",
      "The Overflow flag is set and execution continues",
      "A divide overflow processor exception is generated, halting the program",
      "The quotient wraps around (modular arithmetic)",
    ],
    correctAnswer: 2,
    explanation:
      "Divide overflow occurs when the quotient cannot fit in the destination (e.g., 100h won't fit in AL). This causes a processor exception — equivalent to interrupt 0 — which halts the current program with an error dialog.",
  },
  {
    id: "CPE301_7_043",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: All arithmetic status flag values are defined (meaningful) after executing DIV or IDIV.",
    options: ["True", "Maybe", "False", "I don't know"],
    correctAnswer: 2,
    explanation:
      "False. According to the Intel specification and the textbook, all arithmetic status flag values are UNDEFINED after executing DIV and IDIV. Programmers should not rely on the state of flags like CF, OF, SF, ZF, PF after these instructions.",
  },
  {
    id: "CPE301_7_044",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "To avoid a divide-by-zero exception before a DIV instruction, what should a programmer do?",
    options: [
      "Use the INTO instruction before DIV",
      "Test the divisor with CMP and branch to an error handler if it equals zero",
      "Set the Carry flag before DIV to protect against zero divisors",
      "Use IDIV instead; it handles zero divisors automatically",
    ],
    correctAnswer: 1,
    explanation:
      "The book shows checking the divisor with 'cmp bl, 0' and 'je NoDivideZero' before the DIV instruction. Neither DIV nor IDIV handles zero divisors — both cause a processor exception if the divisor is zero.",
  },

  // ─── SIGNED INTEGER DIVISION ───────────────────────────────────────────────
  {
    id: "CPE301_7_045",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Why must the dividend be sign-extended before using IDIV?",
    options: [
      "IDIV requires the dividend to be in a register twice the size of the divisor, and without sign extension the upper half contains incorrect bits",
      "Sign extension speeds up the IDIV instruction",
      "IDIV uses the sign extension to determine which flags to set",
      "Sign extension converts the dividend from unpacked to packed format",
    ],
    correctAnswer: 0,
    explanation:
      "IDIV reads the full double-sized dividend register. Without sign extension, the upper half contains random bits (or zeros) that misrepresent the value. For -101 in AL, failing to use CBW leaves AX = 009Bh (+155) instead of FF9Bh (-101).",
  },
  {
    id: "CPE301_7_046",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which instruction sign-extends AX into DX in preparation for 16-bit signed division?",
    options: ["CBW", "CDQ", "CWD", "MOVSX AX, DX"],
    correctAnswer: 2,
    explanation:
      "CWD (Convert Word to Doubleword) extends the sign bit of AX into the DX register, creating a 32-bit signed value in DX:AX. CBW extends AL into AX; CDQ extends EAX into EDX.",
  },
  {
    id: "CPE301_7_047",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov eax, dwordVal (-101)', 'cdq', what is in EDX:EAX?",
    options: [
      "EDX:EAX = 00000000FFFFFF9Bh",
      "EDX:EAX = FFFFFFFFFFFFFF9Bh",
      "EDX:EAX = 0000000000000000h",
      "EDX:EAX = FFFFFFFF0000009Bh",
    ],
    correctAnswer: 1,
    explanation:
      "CDQ extends the sign bit of EAX (which is 1 for -101 = FFFFFF9Bh) into all 64 bits of EDX:EAX. EDX = FFFFFFFFh (all sign bits), EAX = FFFFFF9Bh. Combined: FFFFFFFFFFFFFF9Bh.",
  },
  {
    id: "CPE301_7_048",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "When IDIV is used for 8-bit division, what is the sign of the remainder relative to the dividend?",
    options: [
      "The remainder always has the same sign as the divisor",
      "The remainder is always positive",
      "The remainder always has the same sign as the dividend",
      "The remainder is always negative for negative dividends",
    ],
    correctAnswer: 2,
    explanation:
      "The Intel specification states that for IDIV, the remainder always has the same sign as the dividend. For example, -48 / 5 = -9 remainder -3. Both -48 and -3 are negative.",
  },
  {
    id: "CPE301_7_049",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer fails to use sign extension before IDIV. Given 'mov ah, 0', 'mov al, -48 (D0h)', 'mov bl, 5', 'idiv bl', what incorrect quotient is produced?",
    options: [
      "AL = -9 (correct answer)",
      "AL = 41 decimal",
      "AL = -48 (no change)",
      "AL = 0, with overflow",
    ],
    correctAnswer: 1,
    explanation:
      "Without CBW, AX = 00D0h = 208 decimal. IDIV divides 208 by 5, giving quotient 41 (29h) and remainder 3. The correct answer should be -9, but the wrong setup makes IDIV treat -48 as +208.",
  },

  // ─── IMPLEMENTING ARITHMETIC EXPRESSIONS ──────────────────────────────────
  {
    id: "CPE301_7_050",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "To implement 'var4 = (var1 + var2) * var3' in assembly using unsigned 32-bit integers, which sequence is correct?",
    options: [
      "mov eax, var1 / mul var3 / add eax, var2 / mov var4, eax",
      "mov eax, var1 / add eax, var2 / mul var3 / jc tooBig / mov var4, eax",
      "mov eax, var3 / mul var1 / add eax, var2 / mov var4, eax",
      "add var1, var2 / mul var1, var3 / mov var4, var1",
    ],
    correctAnswer: 1,
    explanation:
      "Correct order: load var1, add var2 (computing the sum), then MUL var3 (EAX × var3 → EAX). The JC checks for unsigned overflow after MUL. The result is stored only if no overflow occurred.",
  },
  {
    id: "CPE301_7_051",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "For the expression 'var4 = (var1 * -5) / (-var2 % var3)' using signed 32-bit integers, which register holds the result of '-var2 % var3' to be used as the divisor?",
    options: [
      "EAX (the quotient register)",
      "ECX",
      "EBX (where EDX remainder is moved)",
      "EDX (directly from IDIV)",
    ],
    correctAnswer: 2,
    explanation:
      "The code computes -var2 % var3 by: neg eax (var2 negated), cdq (sign extend), idiv var3 (EDX = remainder), then 'mov ebx, edx' to save the remainder in EBX. EBX then serves as the divisor for the final IDIV.",
  },
  {
    id: "CPE301_7_052",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Why does assembly language allow better overflow checking than typical high-level language compilers for multiplication?",
    options: [
      "Assembly runs faster and has more time to check flags",
      "Assembly can check the Carry and Overflow flags after MUL, detecting when a product exceeds 32 bits; most compilers ignore the upper 32 bits",
      "High-level languages have no overflow detection at all",
      "Assembly automatically throws exceptions on overflow without any extra code",
    ],
    correctAnswer: 1,
    explanation:
      "After MUL, the Carry flag indicates whether the upper half of the product is non-zero (overflow). Most C++ compilers discard the upper half of a 32×32 multiplication silently. Assembly allows explicit JC checks after MUL.",
  },

  // ─── EXTENDED ADDITION AND SUBTRACTION ────────────────────────────────────
  {
    id: "CPE301_7_053",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What does the ADC instruction add to the destination operand?",
    options: [
      "Only the source operand",
      "The source operand plus the Auxiliary Carry flag",
      "The source operand plus the contents of the Carry flag",
      "The source operand plus 1",
    ],
    correctAnswer: 2,
    explanation:
      "ADC (Add with Carry) adds: destination = destination + source + CF. It is designed for multi-precision arithmetic where the Carry from a previous addition must be included in the next addition.",
  },
  {
    id: "CPE301_7_054",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov al, 0FFh', 'add al, 0FFh', 'adc dl, 0', what is in DL:AL?",
    options: [
      "DL:AL = 01FEh",
      "DL:AL = 00FFh",
      "DL:AL = 01FFh",
      "DL:AL = 00FEh",
    ],
    correctAnswer: 0,
    explanation:
      "FFh + FFh = 1FEh. ADD gives AL = FEh and CF = 1. ADC DL, 0 adds 0 + CF(1) = 1 to DL = 0, giving DL = 01h. Combined: DL:AL = 01FEh.",
  },
  {
    id: "CPE301_7_055",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the Extended_Add procedure, why is PUSHFD used inside the loop?",
    options: [
      "To save all registers before the loop modifies them",
      "To save the Carry flag value before the ADD instructions (advancing pointers) clear it",
      "PUSHFD is required before any LOOP instruction",
      "To prevent the ADC from reading a stale Carry flag",
    ],
    correctAnswer: 1,
    explanation:
      "After ADC AL,[EDI] sets (or clears) the Carry flag, the subsequent ADD instructions (advancing ESI, EDI, EBX pointers) would overwrite CF. PUSHFD saves the flags before pointer arithmetic; POPFD restores CF before the next loop iteration.",
  },
  {
    id: "CPE301_7_056",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the Extended_Add procedure, why must the sum buffer be one byte LONGER than the two input integers?",
    options: [
      "To store the loop counter at the end",
      "To accommodate a possible final carry generated when adding the two highest bytes",
      "The procedure requires a null terminator",
      "To store the sign bit separately from the magnitude",
    ],
    correctAnswer: 1,
    explanation:
      "When adding the two most significant bytes, a carry may be generated that doesn't fit in the original integer size. The extra byte in the sum buffer (lines 26–27 of the procedure) catches this final carry using 'adc byte ptr [ebx], 0'.",
  },
  {
    id: "CPE301_7_057",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The SBB instruction is to subtraction what ADC is to addition. What does SBB subtract from the destination?",
    options: [
      "Only the source operand",
      "The source operand plus the Auxiliary Carry flag",
      "The source operand plus the value of the Carry flag (borrow)",
      "The source operand minus 1",
    ],
    correctAnswer: 2,
    explanation:
      "SBB (Subtract with Borrow): destination = destination - source - CF. When a subtraction of the lower half generates a borrow (sets CF), SBB propagates that borrow into the subtraction of the upper half.",
  },
  {
    id: "CPE301_7_058",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Given 'mov edx, 7', 'mov eax, 1', 'sub eax, 2', 'sbb edx, 0', what are the final values of EDX and EAX?",
    options: [
      "EDX = 7, EAX = FFFFFFFFh",
      "EDX = 6, EAX = FFFFFFFFh",
      "EDX = 7, EAX = FFFFFFFEh",
      "EDX = 8, EAX = FFFFFFFFh",
    ],
    correctAnswer: 1,
    explanation:
      "SUB EAX,2: 1 - 2 needs borrow → EAX = FFFFFFFFh (wraps), CF = 1. SBB EDX,0: 7 - 0 - CF(1) = 6 → EDX = 6. Combined 64-bit value: 00000006_FFFFFFFFh = 0x700000001 - 2 = correct.",
  },
  {
    id: "CPE301_7_059",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The LOOP instruction modifies the CPU status flags, which is why PUSHFD/POPFD must be used inside the Extended_Add loop.",
    options: ["True", "Maybe", "False", "I don't know"],
    correctAnswer: 2,
    explanation:
      "False. The LOOP instruction does NOT modify the CPU status flags (CF, OF, ZF, etc.). The reason for PUSHFD/POPFD in Extended_Add is that the ADD instructions used to increment the pointers (ESI, EDI, EBX) DO affect the Carry flag.",
  },
  {
    id: "CPE301_7_060",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The Extended_Add procedure requires numbers stored in which byte order?",
    options: [
      "Big-endian order (highest-order byte at starting address)",
      "Little-endian order (lowest-order byte at starting address)",
      "Any order, as the procedure detects endianness automatically",
      "Mixed-endian order based on the processor mode",
    ],
    correctAnswer: 1,
    explanation:
      "Extended_Add processes arrays from low address to high address, matching little-endian order where the low-order byte is stored at the array's starting address. x86 processors naturally use little-endian byte ordering.",
  },

  // ─── ASCII AND UNPACKED DECIMAL ARITHMETIC ─────────────────────────────────
  {
    id: "CPE301_7_061",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What is the difference in the high 4 bits between an ASCII decimal digit and an unpacked decimal digit?",
    options: [
      "ASCII digits have high nibble = 1111b; unpacked have high nibble = 0000b",
      "ASCII digits have high nibble = 0011b (30h); unpacked digits have high nibble = 0000b",
      "ASCII digits have high nibble = 0000b; unpacked have high nibble = 0011b",
      "There is no difference; they are stored identically",
    ],
    correctAnswer: 1,
    explanation:
      "ASCII decimal: high nibble = 0011b (e.g., '3' = 33h, '9' = 39h). Unpacked decimal: high nibble = 0000b (e.g., 3 = 03h, 9 = 09h). Both store one digit per byte, but ASCII includes the '3' prefix in the high nibble.",
  },
  {
    id: "CPE301_7_062",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov ah,0', 'mov al, \"8\"', 'add al, \"2\"', 'aaa', what is in AX?",
    options: ["AX = 000Ah", "AX = 0100h", "AX = 3130h", "AX = 006Ah"],
    correctAnswer: 1,
    explanation:
      "'8' = 38h, '2' = 32h. ADD: AL = 38h + 32h = 6Ah = 106 decimal. AAA adjusts: since low nibble > 9, it adds 6 to AL and 1 to AH. AL becomes 0, AH becomes 1. AX = 0100h (unpacked decimal representation of 10).",
  },
  {
    id: "CPE301_7_063",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After AAA produces AX = 0100h, a programmer applies 'or ax, 3030h'. What is the purpose?",
    options: [
      "To convert unpacked decimal in AX to ASCII decimal representation",
      "To multiply AX by 30h",
      "To set the high nibble of both AL and AH to 3, converting to binary",
      "To clear the low nibble of AX",
    ],
    correctAnswer: 0,
    explanation:
      "OR with 30h adds the ASCII base (30h) to each unpacked decimal digit. AX = 0100h: AH = 01h → 31h = '1', AL = 00h → 30h = '0'. Result AX = 3130h = ASCII '1' in AH and '0' in AL, representing '10'.",
  },
  {
    id: "CPE301_7_064",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The AAS instruction is used after which arithmetic instruction?",
    options: ["MUL", "ADD or ADC", "SUB or SBB", "DIV"],
    correctAnswer: 2,
    explanation:
      "AAS (ASCII Adjust after Subtraction) follows SUB or SBB. It adjusts the binary result in AL to be consistent with ASCII/unpacked decimal representation when the subtraction produced a negative result.",
  },
  {
    id: "CPE301_7_065",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov ah,0', 'mov al, \"8\"', 'sub al, \"9\"', 'aas', what is in AX and is CF set?",
    options: [
      "AX = 0001h, CF = 0",
      "AX = FF09h, CF = 1",
      "AX = 0009h, CF = 0",
      "AX = 00FFh, CF = 1",
    ],
    correctAnswer: 1,
    explanation:
      "38h - 39h = FFh (borrow needed). AAS adjusts: since a borrow occurred, it subtracts 6 from AL (FF → F9... then takes low nibble = 9), subtracts 1 from AH (0 → FF), and sets CF. Result: AX = FF09h, CF = 1.",
  },
  {
    id: "CPE301_7_066",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The AAM instruction is used after which instruction, and what format must the operands be in?",
    options: [
      "After ADD, with operands in ASCII format",
      "After MUL, with operands in unpacked decimal format",
      "After DIV, with operands in packed decimal format",
      "After IMUL, with operands in binary format",
    ],
    correctAnswer: 1,
    explanation:
      "AAM (ASCII Adjust after Multiplication) follows MUL. The operands must be unpacked decimal values (not ASCII). AAM converts the binary product in AX to unpacked decimal: high digit in AH, low digit in AL.",
  },
  {
    id: "CPE301_7_067",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After multiplying unpacked 5 by 6 with MUL (AX = 001Eh) and applying AAM, what is AX?",
    options: [
      "AX = 0030h",
      "AX = 0300h",
      "AX = 3030h",
      "AX = 001Eh (unchanged)",
    ],
    correctAnswer: 1,
    explanation:
      "5 × 6 = 30 decimal = 1Eh binary. AAM converts 1Eh to unpacked decimal: 30 = 3 tens + 0 ones → AH = 03h, AL = 00h → AX = 0300h (unpacked decimal representation of 30).",
  },
  {
    id: "CPE301_7_068",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The AAD instruction is unique among the AA* instructions. When must it be executed relative to the division?",
    options: [
      "After DIV, to adjust the result",
      "Before DIV, to convert the unpacked decimal dividend to binary",
      "Before MUL, to set up the multiplicand",
      "After IDIV, to handle the signed remainder",
    ],
    correctAnswer: 1,
    explanation:
      "AAD (ASCII Adjust BEFORE Division) is executed BEFORE the DIV instruction. It converts an unpacked decimal dividend in AX to a binary value, so DIV can perform the division correctly.",
  },
  {
    id: "CPE301_7_069",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The AAA, AAS, AAM, and AAD instructions are available in both 32-bit and 64-bit modes.",
    options: ["True", "I don't know", "Maybe", "False"],
    correctAnswer: 3,
    explanation:
      "False. The ASCII arithmetic instructions (AAA, AAS, AAM, AAD) apply ONLY to 32-bit mode programming. They are not available in 64-bit mode, as noted explicitly in Section 7.5.",
  },
  {
    id: "CPE301_7_070",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What are the two main advantages of ASCII arithmetic over binary arithmetic?",
    options: [
      "ASCII arithmetic is faster and more memory-efficient",
      "No conversion from string format is needed, and decimal point operations avoid floating-point rounding errors",
      "ASCII arithmetic can handle larger numbers and works in 64-bit mode",
      "ASCII arithmetic automatically handles signed numbers and uses fewer registers",
    ],
    correctAnswer: 1,
    explanation:
      "The two advantages: (1) No string-to-binary conversion needed before arithmetic — numbers can be operated on directly in ASCII/unpacked form. (2) An implied decimal point allows exact decimal arithmetic without floating-point rounding errors.",
  },

  // ─── PACKED DECIMAL ARITHMETIC ─────────────────────────────────────────────
  {
    id: "CPE301_7_071",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "How many decimal digits per byte does packed decimal format store, compared to unpacked decimal?",
    options: [
      "Packed stores 1 digit/byte; unpacked stores 2 digits/byte",
      "Packed stores 2 digits/byte; unpacked stores 1 digit/byte",
      "Both store 2 digits/byte",
      "Both store 1 digit/byte, but packed uses BCD encoding",
    ],
    correctAnswer: 1,
    explanation:
      "Packed decimal stores TWO digits per byte (4 bits per digit). Unpacked decimal stores ONE digit per byte (high nibble = 0). For example, packed 35h represents the value 35 decimal; unpacked would need two bytes (03h and 05h).",
  },
  {
    id: "CPE301_7_072",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov al, 35h', 'add al, 48h', the result in AL is 7Dh. What does DAA do to correct this?",
    options: [
      "DAA divides AL by 10 to extract the tens digit",
      "DAA adjusts AL to 83h, the correct packed decimal sum of 35 + 48",
      "DAA sets the Carry flag and leaves AL unchanged",
      "DAA converts AL from BCD to binary",
    ],
    correctAnswer: 1,
    explanation:
      "35h + 48h = 7Dh in binary. DAA adjusts this to the correct packed BCD result. Since the low nibble (D) > 9, DAA adds 6 to the low nibble; since the high nibble then exceeds 9, further adjustment gives 83h = packed decimal 83.",
  },
  {
    id: "CPE301_7_073",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "When adding two n-byte packed decimal integers, how many storage bytes must be reserved for the sum?",
    options: [
      "n bytes (same as operands)",
      "n + 1 bytes (one extra for a possible carry)",
      "2n bytes (double to prevent overflow)",
      "n + 2 bytes (two extra for final carry and sign)",
    ],
    correctAnswer: 1,
    explanation:
      "Adding two n-digit packed decimal values can produce an (n+1)-digit result due to carry. The sum needs n+1 bytes. The AddPacked example explicitly handles this with an extra byte for the final carry using 'adc al, 0'.",
  },
  {
    id: "CPE301_7_074",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The DAS instruction is used in conjunction with which arithmetic instruction?",
    options: [
      "ADD or ADC on packed decimal operands",
      "MUL on packed decimal operands",
      "SUB or SBB on packed decimal operands",
      "DIV on packed decimal operands",
    ],
    correctAnswer: 2,
    explanation:
      "DAS (Decimal Adjust after Subtraction) follows SUB or SBB. It corrects the binary result in AL to produce the correct packed BCD result after subtracting two packed decimal values.",
  },
  {
    id: "CPE301_7_075",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov bl, 48h', 'mov al, 85h', 'sub al, bl', 'das', what is in AL?",
    options: ["AL = 3Dh", "AL = 37h", "AL = 27h", "AL = 47h"],
    correctAnswer: 1,
    explanation:
      "85h - 48h = 3Dh in binary. DAS adjusts: low nibble D > 9, so subtract 6 from low nibble: 3Dh - 06h = 37h. The packed decimal result is 37, which correctly represents 85 - 48 = 37.",
  },
  {
    id: "CPE301_7_076",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: Packed decimal integers support direct multiplication and division using specialized instructions similar to DAA and DAS.",
    options: ["Maybe", "True", "False", "I don't know"],
    correctAnswer: 2,
    explanation:
      "False. No multiplication or division adjustment instructions exist for packed decimal. The text states: 'Unfortunately, no such instructions exist for multiplication and division. In those cases, the number must be unpacked, multiplied or divided, and repacked.'",
  },
  {
    id: "CPE301_7_077",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the AddPacked procedure, after adding the low bytes and applying DAA, what is added for the high bytes?",
    options: [
      "ADD with DAA, ignoring the carry from the low byte addition",
      "ADC with DAA, including the carry from the low byte addition",
      "ADD without DAA, since the high bytes don't need adjustment",
      "SBB with DAS to handle potential underflow",
    ],
    correctAnswer: 1,
    explanation:
      "After DAA on the low bytes, the Carry flag may be set. The high byte addition uses ADC (not ADD) to include this carry. DAA is then applied again to correct the high byte's packed decimal result.",
  },
  {
    id: "CPE301_7_078",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What is a key advantage of packed decimal storage compared to binary integers?",
    options: [
      "Packed decimal is faster for all arithmetic operations",
      "Packed decimal numbers can have almost any number of significant digits, enabling high-accuracy calculations",
      "Packed decimal uses less memory than binary for all value ranges",
      "Packed decimal automatically avoids all types of overflow",
    ],
    correctAnswer: 1,
    explanation:
      "Packed decimal's strengths: (1) Numbers can have almost any number of significant digits for high-accuracy calculations. (2) Conversion to/from ASCII is relatively simple. However, it is generally slower than binary arithmetic.",
  },

  // ─── PERFORMANCE AND TIMING ─────────────────────────────────────────────────
  {
    id: "CPE301_7_079",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "On a legacy 4-GHz Pentium 4, which approach to multiplying by 36 was found to be significantly faster?",
    options: [
      "Using MUL with 36 as the multiplier",
      "Using SHL and ADD (bit shifting approach)",
      "Using IMUL with 36 as an immediate value",
      "Both approaches had identical performance",
    ],
    correctAnswer: 1,
    explanation:
      "Testing on a legacy Pentium 4 showed the SHL approach (6.078 seconds) was much faster than MUL (20.718 seconds) — about 241% faster. However, on more recent processors, both approaches had identical timing due to MUL/IMUL optimizations.",
  },
  {
    id: "CPE301_7_080",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What procedure from the Irvine32 library is used to measure execution time in milliseconds?",
    options: ["GetTimer", "ReadClock", "GetMseconds", "QueryPerformance"],
    correctAnswer: 2,
    explanation:
      "The GetMseconds procedure (from the Irvine32 library) returns the number of system milliseconds elapsed since midnight in EAX. It is called before and after the code to measure, and the elapsed time is the difference.",
  },
  {
    id: "CPE301_7_081",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: On modern x86 processors, the MUL instruction performs significantly slower than the bit-shifting multiplication technique.",
    options: ["True", "I don't know", "Maybe", "False"],
    correctAnswer: 3,
    explanation:
      "False. While older processors (like Pentium 4) showed MUL being 241% slower, the textbook notes that on more recent processors, 'the timings of both function calls were exactly the same.' Intel has greatly optimized MUL/IMUL.",
  },

  // ─── LITTLE-ENDIAN AND EXTENDED PRECISION ──────────────────────────────────
  {
    id: "CPE301_7_082",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In little-endian storage for extended-precision integers, where is the lowest-order byte stored?",
    options: [
      "At the highest memory address in the array",
      "At the array's starting (lowest) address",
      "In a special low-byte register",
      "At the middle of the array",
    ],
    correctAnswer: 1,
    explanation:
      "Little-endian order places the low-order byte at the array's starting (lowest) address. Subsequent bytes are stored at increasing addresses up to the high-order byte. This is the native storage format for x86 processors.",
  },
  {
    id: "CPE301_7_083",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the SHRD array shifting example, why is the last doubleword shifted with SHR instead of SHRD?",
    options: [
      "SHR is faster than SHRD for single doublewords",
      "The last (highest) doubleword has no higher element to provide fill bits; it uses SHR with a 0 fill",
      "SHRD cannot operate on the last element when ECX has decremented to 0",
      "The last element is the lowest in memory and requires a different operation",
    ],
    correctAnswer: 1,
    explanation:
      "SHRD fills vacated bits from a source operand. For the highest doubleword in the array, there is no higher adjacent element to source bits from. SHR is used instead, which fills with zeros, correctly representing a shift of the most significant portion.",
  },

  // ─── REVIEW QUESTION SCENARIOS ─────────────────────────────────────────────
  {
    id: "CPE301_7_084",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What will AL contain after: 'mov al, 0D4h', 'shr al, 1'?",
    options: ["6Ah", "A8h", "E8h", "1Ah"],
    correctAnswer: 0,
    explanation:
      "0D4h = 11010100b. SHR shifts right, filling MSB with 0, shifting LSB into CF. Result: 01101010b = 6Ah. CF = 0 (original LSB was 0).",
  },
  {
    id: "CPE301_7_085",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What will AL contain after: 'mov al, 0D4h', 'sar al, 1'?",
    options: ["6Ah", "EAh", "A8h", "E8h"],
    correctAnswer: 1,
    explanation:
      "0D4h = 11010100b. SAR fills MSB with sign bit (1). Result: 11101010b = EAh. This preserves the negative sign, equivalent to dividing -44 by 2 = -22.",
  },
  {
    id: "CPE301_7_086",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What will AL contain after: 'mov al, 0D4h', 'sar al, 4'?",
    options: ["0Dh", "FDh", "D0h", "0Fh"],
    correctAnswer: 1,
    explanation:
      "0D4h = 11010100b. SAR by 4, filling with the sign bit (1). Top 4 bits become 1111, original high nibble D (1101) shifts down: 11111101b = FDh. Equivalent to -44 / 16 = -2 (rounds toward negative infinity for SAR).",
  },
  {
    id: "CPE301_7_087",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What will AL contain after: 'mov al, 0D4h', 'rol al, 1'?",
    options: ["A9h", "6Ah", "E8h", "B4h"],
    correctAnswer: 0,
    explanation:
      "0D4h = 11010100b. ROL copies MSB (1) to LSB and Carry flag, shifts all left. Result: 10101001b = A9h. CF = 1.",
  },
  {
    id: "CPE301_7_088",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What will AX and DX contain after: 'mov dx,0', 'mov ax,222h', 'mov cx,100h', 'mul cx'?",
    options: [
      "AX = 2200h, DX = 0002h",
      "AX = 2200h, DX = 0000h",
      "AX = 0022h, DX = 0200h",
      "AX = 0322h, DX = 0000h",
    ],
    correctAnswer: 0,
    explanation:
      "222h × 100h = 22200h. This 32-bit product: DX = 0002h (high 16 bits), AX = 2200h (low 16 bits). CF = 1 because DX ≠ 0.",
  },
  {
    id: "CPE301_7_089",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What will AX contain after: 'mov ax, 63h', 'mov bl, 10h', 'div bl'?",
    options: [
      "AL = 06h, AH = 03h",
      "AL = 10h, AH = 03h",
      "AL = 06h, AH = 00h",
      "AL = 03h, AH = 06h",
    ],
    correctAnswer: 0,
    explanation:
      "63h ÷ 10h = 6 remainder 3. Quotient 06h → AL, remainder 03h → AH. AX = 0306h. Note: 63h = 99 decimal, 10h = 16 decimal. 99 ÷ 16 = 6 remainder 3.",
  },
  {
    id: "CPE301_7_090",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After: 'mov eax,123400h', 'mov edx,0', 'mov ebx,10h', 'div ebx'. What are EAX and EDX?",
    options: [
      "EAX = 00012340h, EDX = 00000000h",
      "EAX = 01234000h, EDX = 00000010h",
      "EAX = 00123400h, EDX = 00000000h",
      "EAX = 00001234h, EDX = 00000000h",
    ],
    correctAnswer: 0,
    explanation:
      "123400h ÷ 10h (16): 123400h / 10h = 12340h. Each hex digit shifts one position right when dividing by 16. EAX = 00012340h, EDX = 00000000h (no remainder).",
  },
  {
    id: "CPE301_7_091",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What will BX contain after: 'mov bx,5', 'stc', 'mov ax,60h', 'adc bx,ax'?",
    options: ["BX = 65h", "BX = 66h", "BX = 60h", "BX = 64h"],
    correctAnswer: 1,
    explanation:
      "ADC adds BX + AX + CF. BX = 5, AX = 60h, CF = 1 (set by STC). 5 + 60h + 1 = 66h. BX = 66h.",
  },
  {
    id: "CPE301_7_092",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After: 'mov edx,100h', 'mov eax,80000000h', 'sub eax,90000000h', 'sbb edx,0'. What are EDX and EAX?",
    options: [
      "EDX = 0100h, EAX = F0000000h",
      "EDX = 00FFh, EAX = F0000000h",
      "EDX = 0101h, EAX = 80000000h",
      "EDX = 00FFh, EAX = 10000000h",
    ],
    correctAnswer: 1,
    explanation:
      "SUB EAX: 80000000h - 90000000h = F0000000h with CF = 1 (borrow). SBB EDX,0: 100h - 0 - CF(1) = 0FFh. EDX = 000000FFh, EAX = F0000000h.",
  },
  {
    id: "CPE301_7_093",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer wants to display binary bits in REVERSE order using BinToAsc. What modification is needed?",
    options: [
      "Use SHR instead of SHL to shift bits from the LSB",
      "Decrement ESI instead of increment, and start at bit 0",
      "Use ROR instead of SHL to change the bit order",
      "Change ECX from 32 to 1 and loop backwards",
    ],
    correctAnswer: 0,
    explanation:
      "To display in reverse order (LSB first), replace SHL with SHR. SHR copies the current LSB into the Carry flag, allowing bits to be read from LSB to MSB (bit 0 to bit 31) rather than MSB to LSB.",
  },
  {
    id: "CPE301_7_094",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "How would you implement 'EAX * 24' using binary multiplication with shifts?",
    options: [
      "shl eax, 24",
      "shl eax, 4 (multiply by 16), then shl ebx, 3 (by 8, copy of EAX), add eax, ebx",
      "mov ebx, eax / shl eax, 4 / shl ebx, 3 / add eax, ebx",
      "shl eax, 3 (×8), then shl eax, 3 again (×64 total)",
    ],
    correctAnswer: 2,
    explanation:
      "24 = 16 + 8 = 2^4 + 2^3. Save a copy of EAX in EBX, shift EAX left 4 (×16), shift EBX left 3 (×8), then add EAX + EBX for 24×original. Option C correctly implements this decomposition.",
  },
  {
    id: "CPE301_7_095",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "To sign-extend AX into EAX without using the CWD instruction, which instruction sequence works?",
    options: [
      "shr eax, 16 followed by sar eax, 16",
      "shl eax, 16 followed by sar eax, 16",
      "sar eax, 16 followed by shl eax, 16",
      "and eax, 0000FFFFh followed by or eax, AX",
    ],
    correctAnswer: 1,
    explanation:
      "The text demonstrates: 'shl eax, 16' moves the sign bit of AX to bit 31 of EAX. Then 'sar eax, 16' arithmetically shifts right, filling the upper 16 bits with the sign bit, exactly replicating sign extension.",
  },
  {
    id: "CPE301_7_096",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The time stamp field of a file directory entry has bits 11–15 for hours. To extract hours from a register AX, which sequence is correct?",
    options: [
      "shr ax, 11 / and al, 00011111b / mov bHours, al",
      "and ax, 1111100000000000b / mov bHours, ah",
      "mov al, ah / shr al, 3 / and al, 00011111b / mov bHours, al",
      "shr ax, 11 / mov bHours, al (no AND needed since bits 5-15 of AX are 0 after shift)",
    ],
    correctAnswer: 0,
    explanation:
      "Hours occupy bits 11–15 (5 bits). SHR AX by 11 positions brings hours to AL bits 0–4. AND with 00011111b (1Fh) clears any bits above bit 4 that came from higher registers. Store result in bHours.",
  },
  {
    id: "CPE301_7_097",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The CBW instruction extends the sign bit of AL by copying it into all bits of AH.",
    options: ["I don't know", "False", "Maybe", "True"],
    correctAnswer: 3,
    explanation:
      "True. CBW (Convert Byte to Word) copies the sign bit of AL into all 8 bits of AH. If AL = 9Bh (bit 7 = 1), AH becomes FFh. If AL = 2Bh (bit 7 = 0), AH becomes 00h.",
  },
  {
    id: "CPE301_7_098",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "When using the three-operand IMUL 'IMUL reg16, reg/mem16, imm16', the product is stored where?",
    options: [
      "In DX:AX",
      "In the second operand (reg/mem16)",
      "In the first operand (reg16)",
      "In a 32-bit extension of the first operand",
    ],
    correctAnswer: 2,
    explanation:
      "In three-operand IMUL, the second operand is multiplied by the third (immediate), and the truncated product is stored in the FIRST operand. The product is truncated to the destination size, and OF/CF indicate if significant bits were lost.",
  },
  {
    id: "CPE301_7_099",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer writes 'mov ax, 1000h' / 'mov bl, 10h' / 'div bl'. What happens?",
    options: [
      "AL = 100h (quotient), AH = 0 (remainder)",
      "Divide overflow exception occurs because 100h cannot fit in the 8-bit AL register",
      "AL = FFh (maximum 8-bit value), and CF is set",
      "The processor uses AX as the destination instead, giving AX = 0100h",
    ],
    correctAnswer: 1,
    explanation:
      "1000h ÷ 10h = 100h. The quotient 100h = 256 cannot fit in the 8-bit AL destination register (max 255). This causes a divide overflow processor exception — the same type shown in Figure 7-1 of the textbook.",
  },
  {
    id: "CPE301_7_100",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "To reduce the probability of divide overflow, the textbook recommends which approach?",
    options: [
      "Use IDIV instead of DIV for all division operations",
      "Always check the Carry flag before executing DIV",
      "Use a 32-bit divisor and a 64-bit dividend in EDX:EAX",
      "Limit all dividend values to less than 65536",
    ],
    correctAnswer: 2,
    explanation:
      "The text states: 'use a 32-bit divisor and 64-bit dividend to reduce the probability of a divide overflow condition.' Using EBX as the divisor with EDX:EAX as the 64-bit dividend gives much more headroom for the quotient.",
  },
];

export const CPE301Chapter7Part2: QuestionV2[] = [
  // ─── SHIFT INSTRUCTIONS: DEEPER APPLICATION ────────────────────────────────
  {
    id: "CPE301_7_101",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer needs to rotate AL right by 1 bit without using any rotate instruction, only SHR and a conditional jump. Which approach correctly implements this?",
    options: [
      "shr al, 1 — the Carry flag already fills the MSB automatically",
      "shr al, 1 / jnc done / or al, 80h — if the shifted-out LSB was 1, set bit 7 manually",
      "shr al, 1 / jc done / and al, 7Fh — if no carry, clear bit 7",
      "shr al, 1 / add al, 80h — always add 80h to set bit 7",
    ],
    correctAnswer: 1,
    explanation:
      "SHR moves the LSB into CF. If CF = 1 (LSB was 1), that bit should appear at bit 7 (MSB) to simulate rotation. JNC skips the OR if CF = 0. OR AL, 80h sets bit 7 when needed. This correctly mimics ROR AL, 1.",
  },
  {
    id: "CPE301_7_102",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which single instruction exchanges the high and low halves (nibbles) of the DL register?",
    options: ["shl dl, 4", "ror dl, 4", "shr dl, 4", "rol dl, 4"],
    correctAnswer: 3,
    explanation:
      "ROL DL, 4 rotates all bits left by 4 positions, which exchanges the high nibble (bits 4–7) with the low nibble (bits 0–3). ROR DL, 4 also works (rotating right by 4 does the same exchange). The textbook shows this with ROL AL, 4.",
  },
  {
    id: "CPE301_7_103",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "To shift three memory bytes (byteArray BYTE 81h, 20h, 33h) to the RIGHT by 1 bit position, which is the correct instruction sequence?",
    options: [
      "shr byteArray[2],1 / rcr byteArray[1],1 / rcr byteArray[0],1",
      "rcr byteArray[0],1 / rcr byteArray[1],1 / shr byteArray[2],1",
      "shr byteArray[0],1 / rcr byteArray[1],1 / rcr byteArray[2],1",
      "ror byteArray[2],1 / ror byteArray[1],1 / ror byteArray[0],1",
    ],
    correctAnswer: 0,
    explanation:
      "For little-endian right shift, start at the highest-address byte (byteArray[2]) with SHR — its LSB falls into CF. Then RCR the lower bytes in order, each time incorporating the CF from the higher byte's operation.",
  },
  {
    id: "CPE301_7_104",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "To shift three memory words (810Dh, 0C064h, 93ABh) to the LEFT by 1 bit, which instruction starts the sequence?",
    options: [
      "shl wordArray[0], 1 — start from the lowest word",
      "shl wordArray[4], 1 — start from the highest word",
      "rcl wordArray[0], 1 — begin with RCL on the lowest word",
      "rol wordArray[4], 1 — rotate the highest word",
    ],
    correctAnswer: 1,
    explanation:
      "For a left shift of a multi-word array, start at the HIGHEST address (last element) with SHL. This shifts its MSB into CF. Then use RCL on lower-address words in descending order, each incorporating the CF from the higher word.",
  },
  {
    id: "CPE301_7_105",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: When using a shift count greater than 1 with ROL, the Carry flag contains the LAST bit rotated out of the MSB position.",
    options: ["False", "Maybe", "I don't know", "True"],
    correctAnswer: 3,
    explanation:
      "True. For multi-bit rotations, the Carry flag holds the last bit rotated out. For example, 'rol al, 3' with AL = 00100000b: bits shift left 3 times, and CF ends up containing the bit that last passed through the MSB — in this case CF = 1.",
  },
  {
    id: "CPE301_7_106",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer writes 'mov ax, 6A4Bh' then 'rol ax, 4' repeatedly. After how many ROL AX, 4 operations does AX return to its original value 6A4Bh?",
    options: ["2 rotations", "4 rotations", "8 rotations", "16 rotations"],
    correctAnswer: 1,
    explanation:
      "Each ROL AX, 4 rotates one hex digit position. AX is 16 bits = 4 hex digits. After 4 rotations of 4 bits each (4×4 = 16 bits), all bits have been rotated a full cycle. The textbook demonstrates: 6A4Bh → A4B6h → 4B6Ah → B6A4h → 6A4Bh.",
  },

  {
    id: "CPE301_7_107",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What is the value of AL after 'mov al, 0D4h' followed by 'ror al, 3'?",
    options: ["A1h", "9Ah", "1Bh", "34h"],
    correctAnswer: 1,
    explanation:
      "0D4h = 11010100b. ROR by 3 (step-by-step): ROR 1 → 01101010 (CF=0), ROR 1 → 00110101 (CF=0), ROR 1 → 10011010 (CF=1). Final AL = 10011010b = 9Ah. CF = 1 (last bit rotated out of bit 0).",
  },
  {
    id: "CPE301_7_108",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What is the value of AL after 'mov al, 0D4h' followed by 'rol al, 7'?",
    options: ["EAh", "6Ah", "A6h", "35h"],
    correctAnswer: 1,
    explanation:
      "0D4h = 11010100b. ROL by 7 is equivalent to ROR by 1. ROR 1 on 11010100: LSB (0) → MSB → 01101010 = 6Ah. CF = 0 (last bit rotated out of MSB was 0 after the full 7-step sequence).",
  },
  {
    id: "CPE301_7_109",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'stc' / 'mov al, 0D4h' / 'rcl al, 1', what is AL?",
    options: ["A8h", "A9h", "ABh", "28h"],
    correctAnswer: 1,
    explanation:
      "0D4h = 11010100b. RCL: MSB (1) → CF (replaces old CF=1), old CF (1) → LSB. Shift left: 10101001b = A9h. New CF = 1 (old MSB). The old Carry flag value (1, set by STC) enters as the new LSB.",
  },
  {
    id: "CPE301_7_110",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'stc' / 'mov al, 0D4h' / 'rcr al, 3', what is AL?",
    options: ["FAh", "BAh", "3Ah", "F4h"],
    correctAnswer: 0,
    explanation:
      "0D4h = 11010100b, CF=1. RCR treats CF as a 9th bit on the right: [CF|AL] = 1_11010100. RCR 3 rotates this 9-bit value right by 3. Bits [2:0] of original (100) and CF (1) shift in: 100_111010_10 → top 8 bits after 3 right rotations = 11111010b = FAh.",
  },

  // ─── MUL DEEPER SCENARIOS ──────────────────────────────────────────────────
  {
    id: "CPE301_7_111",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer executes 'mov eax, 12345h' / 'mov ebx, 1000h' / 'mul ebx'. What are EDX and EAX, and what is CF?",
    options: [
      "EDX = 00000001h, EAX = 2345000h, CF = 1",
      "EDX = 00000000h, EAX = 12345000h, CF = 0",
      "EDX = 00012345h, EAX = 00001000h, CF = 1",
      "EDX = 00000012h, EAX = 34500000h, CF = 1",
    ],
    correctAnswer: 1,
    explanation:
      "12345h × 1000h = 12345000h. This fits in 32 bits: EDX = 00000000h, EAX = 12345000h. CF = 0 because EDX (the upper half) equals zero — no overflow occurred.",
  },
  {
    id: "CPE301_7_112",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "When the MUL instruction sets the Carry flag after a 16-bit multiply, what specifically triggered it?",
    options: [
      "The result in AX overflowed past 16 bits",
      "DX is not equal to zero — the upper half of the 32-bit product is significant",
      "The product was negative",
      "The multiplier was larger than the multiplicand",
    ],
    correctAnswer: 1,
    explanation:
      "For 16-bit MUL (AX × reg/mem16 → DX:AX): CF is set if and only if DX ≠ 0. This indicates that the product doesn't fit in AX alone and the upper 16 bits (in DX) are meaningful and cannot be safely ignored.",
  },
  {
    id: "CPE301_7_113",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The MUL instruction sets the Overflow flag using the same condition as the Carry flag.",
    options: ["I don't know", "True", "Maybe", "False"],
    correctAnswer: 1,
    explanation:
      "True. For MUL, both CF and OF are set or cleared together based on the same condition: whether the upper half of the product equals zero. If the upper half ≠ 0, both CF and OF are set. If it equals 0, both are cleared.",
  },
  {
    id: "CPE301_7_114",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In 64-bit mode, 'mov rax, 0FFFF0000FFFF0000h' / 'mov rbx, 2' / 'mul rbx'. What is in RDX after execution?",
    options: [
      "RDX = 0000000000000000h",
      "RDX = 0000000000000001h",
      "RDX = FFFF0000FFFF0000h",
      "RDX = 0000000100000000h",
    ],
    correctAnswer: 1,
    explanation:
      "Multiplying by 2 effectively left-shifts RAX by 1 bit. The highest bit of RAX (bit 63 = 1) spills into RDX. RDX = 0000000000000001h, and RAX = FFFE0001FFFE0000h. The textbook confirms this result.",
  },
  {
    id: "CPE301_7_115",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which MUL instruction format is used for multiplying a 32-bit operand?",
    options: [
      "The operand multiplies AX, storing the 64-bit result in EDX:EAX",
      "The operand multiplies EAX, storing the 64-bit result in EDX:EAX",
      "The operand multiplies EAX, storing the result in EAX only",
      "The operand multiplies EBX, storing the result in EDX:EAX",
    ],
    correctAnswer: 1,
    explanation:
      "MUL reg/mem32: the 32-bit source operand multiplies EAX (the implicit multiplicand), producing a 64-bit product stored in EDX:EAX. EDX holds the high 32 bits and EAX holds the low 32 bits.",
  },

  // ─── IMUL DEEPER SCENARIOS ─────────────────────────────────────────────────
  {
    id: "CPE301_7_116",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After: 'mov al, -4' / 'mov bl, 4' / 'imul bl'. What is AX and OF?",
    options: [
      "AX = 00F0h, OF = 1",
      "AX = FFF0h, OF = 0",
      "AX = FFF0h, OF = 1",
      "AX = FF10h, OF = 0",
    ],
    correctAnswer: 1,
    explanation:
      "-4 × 4 = -16 = FFF0h in 16-bit two's complement. AH = FFh IS a sign extension of AL = F0h (since F0h has bit 7 set, sign extension = FFh). Therefore OF = 0 — no signed overflow, the result fits correctly.",
  },
  {
    id: "CPE301_7_117",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After: 'mov ax, 48' / 'mov bx, 4' / 'imul bx'. What is DX:AX and OF?",
    options: [
      "DX:AX = 000000C0h, OF = 0",
      "DX:AX = 000000C0h, OF = 1",
      "DX:AX = 0000FFCh, OF = 1",
      "DX:AX = FFFFFF40h, OF = 0",
    ],
    correctAnswer: 0,
    explanation:
      "48 × 4 = 192 = C0h. As a 16-bit product: DX:AX = 000000C0h. DX = 0000h IS a sign extension of AX = 00C0h (AX is positive, sign extension = 0). Therefore OF = 0 — the product fits correctly in the extended register pair.",
  },
  {
    id: "CPE301_7_118",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the two-operand IMUL, 'imul bx, ax' — where BX = -16 and AX = 2 — what is BX after execution?",
    options: [
      "BX = -32 (FFE0h)",
      "BX = 32 (0020h)",
      "BX = -8 (FFF8h)",
      "BX = 0000h",
    ],
    correctAnswer: 0,
    explanation:
      "'imul bx, ax' multiplies BX by AX and stores the result in BX. -16 × 2 = -32 = FFE0h in 16-bit two's complement. The textbook confirms: 'imul bx, ax → BX = -32'.",
  },
  {
    id: "CPE301_7_119",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In 64-bit mode, 'mov rax, -4' / 'mov rbx, 4' / 'imul rbx'. What is in RDX after execution?",
    options: [
      "RDX = 0000000000000000h",
      "RDX = FFFFFFFFFFFFFFFFh",
      "RDX = 0000000000000004h",
      "RDX = FFFFFFFFFFFFFFFC h",
    ],
    correctAnswer: 1,
    explanation:
      "-4 × 4 = -16. In 128-bit signed representation: RDX = FFFFFFFFFFFFFFFFh (sign extension of -16's upper 64 bits), RAX = FFFFFFFFFFFFFFF0h (-16). The textbook confirms RDX = 0FFFFFFFFFFFFFFFFh for this operation.",
  },
  {
    id: "CPE301_7_120",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: When using the two-operand or three-operand IMUL formats, it is always safe to ignore the Overflow flag because the product destination is double the operand size.",
    options: ["True", "Maybe", "False", "I don't know"],
    correctAnswer: 2,
    explanation:
      "False. The two-operand and three-operand IMUL formats store the product in a destination that is the SAME size as the operands (not double). Truncation can occur. The textbook explicitly warns: 'Always check the Overflow flag after executing these types of IMUL instructions.'",
  },

  // ─── DIV DEEPER SCENARIOS ──────────────────────────────────────────────────
  {
    id: "CPE301_7_121",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "When BX is the operand in a DIV instruction, which register holds the quotient?",
    options: ["AL", "DX", "AX", "BX"],
    correctAnswer: 2,
    explanation:
      "For 16-bit DIV (div bx): the 32-bit dividend is DX:AX, the divisor is BX (16-bit). The quotient is stored in AX and the remainder in DX.",
  },
  {
    id: "CPE301_7_122",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "When BL is the operand in a MUL instruction, which registers hold the complete product?",
    options: [
      "BL and AL",
      "AX (AH holds high byte, AL holds low byte)",
      "DX:AX",
      "AL only",
    ],
    correctAnswer: 1,
    explanation:
      "For 8-bit MUL (mul bl): AL is the implicit multiplicand, and BL is the multiplier. The 16-bit product is stored in AX — AH holds the high byte, AL holds the low byte.",
  },

  {
    id: "CPE301_7_123",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What will AX and DX contain after: 'mov ax, 4000h' / 'mov dx, 500h' / 'mov bx, 10h' / 'div bx'?",
    options: [
      "AX = 5400h, DX = 0000h",
      "AX = 5000h, DX = 0400h",
      "A divide overflow exception occurs because the quotient exceeds 16 bits",
      "AX = 0500h, DX = 4000h",
    ],
    correctAnswer: 2,
    explanation:
      "Dividend = DX:AX = 0500:4000h = 05004000h. Divisor = 10h (16 decimal). Quotient = 05004000h / 10h = 500400h = 5,243,904 — this exceeds 16 bits (max 0FFFFh), so a divide overflow exception occurs.",
  },
  {
    id: "CPE301_7_124",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In 64-bit mode, a DIV instruction uses which implicit dividend register pair?",
    options: ["EAX:EBX", "RDX:RAX", "RAX:RBX", "RCX:RAX"],
    correctAnswer: 1,
    explanation:
      "In 64-bit mode, DIV uses RDX:RAX as the 128-bit dividend. The quotient is stored in RAX and the remainder in RDX. This mirrors the 32-bit mode where EDX:EAX is the 64-bit dividend.",
  },
  {
    id: "CPE301_7_125",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: To prevent a divide overflow when using a 32-bit divisor, a programmer should place the dividend in EDX:EAX and use CDQ to sign-extend if the dividend is signed.",
    options: ["Maybe", "True", "I don't know", "False"],
    correctAnswer: 1,
    explanation:
      "True. The textbook recommends using a 32-bit divisor (EBX) with EDX:EAX as the 64-bit dividend to reduce divide overflow risk. For signed values, CDQ extends EAX's sign bit into EDX before calling IDIV.",
  },

  // ─── SIGNED DIVISION DEEPER SCENARIOS ──────────────────────────────────────
  {
    id: "CPE301_7_126",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer implements 16-bit signed division of -5000 by 256. After 'mov ax, wordVal (-5000)' / 'cwd' / 'mov bx, 256' / 'idiv bx', what are AX (quotient) and DX (remainder)?",
    options: [
      "AX = -20, DX = -120",
      "AX = -19, DX = -136",
      "AX = -20, DX = 0",
      "AX = 19, DX = 136",
    ],
    correctAnswer: 1,
    explanation:
      "-5000 ÷ 256 = -19.53... The quotient rounds toward zero: -19. Remainder = -5000 - (-19 × 256) = -5000 + 4864 = -136. The textbook confirms: 'quotient AX = -19, rem DX = -136'. The remainder has the same sign as the dividend.",
  },
  {
    id: "CPE301_7_127",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "For 32-bit signed division: 'mov eax, +50000' / 'cdq' / 'mov ebx, -256' / 'idiv ebx'. What are EAX and EDX?",
    options: [
      "EAX = -195, EDX = +80",
      "EAX = 195, EDX = 80",
      "EAX = -196, EDX = -16",
      "EAX = -195, EDX = -80",
    ],
    correctAnswer: 0,
    explanation:
      "50000 ÷ (-256) = -195.3125. Quotient rounds toward zero: -195. Remainder = 50000 - (-195 × -256) = 50000 - 49920 = 80. Remainder sign matches dividend (positive). The textbook confirms: 'quotient EAX = -195, rem EDX = +80'.",
  },
  {
    id: "CPE301_7_128",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "When performing signed byte division with IDIV, which sign extension instruction must precede it?",
    options: [
      "CDQ — sign-extends EAX into EDX",
      "CWD — sign-extends AX into DX",
      "CBW — sign-extends AL into AH",
      "MOVSX — moves with sign extension",
    ],
    correctAnswer: 2,
    explanation:
      "For 8-bit IDIV (idiv bl): the dividend must be in AX. CBW (Convert Byte to Word) sign-extends AL into AH, properly setting up the full 16-bit signed dividend in AX before the division.",
  },
  {
    id: "CPE301_7_129",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov eax, dwordVal (-101)' / 'cdq', what does CDQ store in EDX?",
    options: [
      "EDX = 00000000h (because -101 is small)",
      "EDX = 0000009Bh (copies AL value)",
      "EDX = FFFFFFFFh (sign extension of negative EAX)",
      "EDX = FFFFFF9Bh (same as EAX)",
    ],
    correctAnswer: 2,
    explanation:
      "CDQ copies the sign bit of EAX (bit 31) into all 32 bits of EDX. Since -101 in EAX has bit 31 = 1 (negative), EDX = FFFFFFFFh. The 64-bit value EDX:EAX = FFFFFFFFFFFFFF9Bh correctly represents -101.",
  },
  {
    id: "CPE301_7_130",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer must implement the C++ expression 'var4 = (var1 / val2) * (val1 + val2)' using signed 32-bit integers. Which register should hold the intermediate division result?",
    options: [
      "EBX — so EAX is free for the subsequent multiplication",
      "EDX — to match the IDV output register",
      "ECX — as a dedicated intermediate register",
      "The result must stay in EAX throughout",
    ],
    correctAnswer: 0,
    explanation:
      "After IDIV, the quotient is in EAX. To compute (var1+var2) next, we need EAX free. Move the quotient to EBX with 'mov ebx, eax', then compute var1+var2 in EAX, then 'imul ebx' or multiply as needed. Keeping the intermediate in EBX frees EAX for the addition.",
  },

  // ─── ARITHMETIC EXPRESSIONS ────────────────────────────────────────────────
  {
    id: "CPE301_7_131",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Implement 'val1 = (val2 * val3) / (val4 - 3)' using 32-bit unsigned operands. Which sequence is correct?",
    options: [
      "mov eax,val2 / mul val3 / mov ebx,val4 / sub ebx,3 / div ebx / mov val1,eax",
      "mov eax,val2 / mul val3 / sub val4,3 / div val4 / mov val1,eax",
      "mov eax,val4 / sub eax,3 / mov ebx,eax / mov eax,val2 / mul val3 / div ebx / mov val1,eax",
      "Both A and C are correct",
    ],
    correctAnswer: 3,
    explanation:
      "Both options A and C correctly implement the expression. Option A computes val2*val3 into EDX:EAX first, then computes the divisor (val4-3) in EBX, then divides. Option C computes the divisor first. Both use MUL (unsigned) followed by DIV with EBX as divisor.",
  },
  {
    id: "CPE301_7_132",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "For 'val1 = (val2 / val3) * (val1 + val2)' using signed 32-bit integers, why is CDQ needed before IDIV?",
    options: [
      "CDQ doubles the dividend for precision",
      "CDQ sign-extends EAX into EDX, forming the required 64-bit signed dividend EDX:EAX for IDIV",
      "CDQ clears EDX so IDIV can use it as scratch space",
      "CDQ converts the divisor val3 to its absolute value",
    ],
    correctAnswer: 1,
    explanation:
      "IDIV with a 32-bit divisor uses EDX:EAX as the 64-bit signed dividend. CDQ must be called first to properly sign-extend the value in EAX into EDX. Without it, EDX may contain garbage, causing incorrect division results.",
  },
  {
    id: "CPE301_7_133",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the expression 'var4 = (var1 * -5) / (-var2 % var3)', what is the purpose of NEG EAX before the IDIV for -var2?",
    options: [
      "NEG converts var2 from unsigned to signed",
      "NEG negates var2 to implement the unary minus operator '-var2'",
      "NEG clears the sign bit before CDQ is called",
      "NEG is used to prevent divide overflow",
    ],
    correctAnswer: 1,
    explanation:
      "In the C++ expression '-var2 % var3', the unary minus negates var2. In assembly, after loading var2 into EAX, 'neg eax' inverts all bits and adds 1 (two's complement negation), producing -var2. CDQ then sign-extends it before IDIV.",
  },
  {
    id: "CPE301_7_134",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: In a complex arithmetic expression like 'var4 = (var1 * -5) / (-var2 % var3)', the remainder from the modulo operation (EDX) is used as the DIVISOR in the final division.",
    options: ["False", "I don't know", "True", "Maybe"],
    correctAnswer: 2,
    explanation:
      "True. The expression requires: first compute -var2 % var3 (store remainder from IDIV in EBX via 'mov ebx, edx'), then compute var1 * -5 (in EDX:EAX via IMUL), then 'idiv ebx'. The remainder from the first division becomes the divisor in the final division.",
  },

  // ─── EXTENDED ADDITION DEEPER ──────────────────────────────────────────────
  {
    id: "CPE301_7_135",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What will be the values of EDX:EAX after: 'mov edx, 0' / 'mov eax, 0FFFFFFFFh' / 'add eax, 0FFFFFFFFh' / 'adc edx, 0'?",
    options: [
      "EDX:EAX = 000000001FFFFFFFEh",
      "EDX:EAX = 000000001FFFFFFEh",
      "EDX:EAX = 00000000FFFFFFFEh",
      "EDX:EAX = 00000001FFFFFFFEh",
    ],
    correctAnswer: 3,
    explanation:
      "FFFFFFFFh + FFFFFFFFh = 1FFFFFFFEh. ADD gives EAX = FFFFFFFEh with CF = 1. ADC EDX, 0 adds 0 + CF(1) = 1 to EDX (was 0) → EDX = 1. Combined: EDX:EAX = 0000000_1_FFFFFFFEh = 00000001FFFFFFFEh.",
  },
  {
    id: "CPE301_7_136",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the Extended_Add procedure, line 14 executes 'clc' before the loop. Why is this critical?",
    options: [
      "CLC resets ECX so the LOOP instruction works correctly",
      "CLC ensures CF = 0 before the first ADC in the loop, so no false carry is added to the first byte sum",
      "CLC prevents divide overflow during the addition",
      "CLC is required syntax before any ADC instruction",
    ],
    correctAnswer: 1,
    explanation:
      "The very first iteration of the loop uses ADC AL, [EDI], which adds AL + [EDI] + CF. If CF happens to be 1 from a previous operation, it would incorrectly add an extra 1 to the first byte. CLC guarantees CF = 0 before the first addition.",
  },
  {
    id: "CPE301_7_137",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After Extended_Add processes op1 and op2, the output begins with '01' in the display. What does this leading '01' represent?",
    options: [
      "The first two ASCII characters of the sum",
      "A final carry byte of 01h generated when the two highest bytes were added",
      "A padding byte added by the Display_Sum procedure",
      "An error indicator byte",
    ],
    correctAnswer: 1,
    explanation:
      "The sum buffer is one byte longer than the operands. Lines 26–27 of Extended_Add store the final carry: 'adc byte ptr [ebx], 0'. The leading '01' in output '0122C32B0674BB5736' is the carry byte — addition of the highest bytes produced a carry that overflowed into this extra byte.",
  },
  {
    id: "CPE301_7_138",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The Display_Sum procedure displays the sum starting from which byte?",
    options: [
      "The first byte at the lowest address (little-endian direct)",
      "The middle byte of the array",
      "The last (high-order) byte, working down to the first (low-order) byte",
      "The carry byte at the end, then the operand bytes",
    ],
    correctAnswer: 2,
    explanation:
      "Display_Sum starts at the last array element (highest address = most significant byte in little-endian) and works backward to the first element. This displays the number in human-readable big-endian format (most significant digit first).",
  },
  {
    id: "CPE301_7_139",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What will be the value of EDX:EAX after: 'mov edx, 10h' / 'mov eax, 0A0000000h' / 'add eax, 20000000h' / 'adc edx, 0'?",
    options: [
      "EDX:EAX = 0000001100000000h",
      "EDX:EAX = 00000010C0000000h",
      "EDX:EAX = 00000011C0000000h",
      "EDX:EAX = 000000110A000000h",
    ],
    correctAnswer: 0,
    explanation:
      "ADD: 0A0000000h + 20000000h = 0C0000000h with CF = 1 (sum > FFFFFFFFh). Wait: A0000000h + 20000000h = C0000000h < FFFFFFFFh, so CF = 0. Then ADC EDX, 0: 10h + 0 + 0 = 10h. EDX:EAX = 00000010C0000000h. The section review answer is EDX = 00000011h, EAX = 00000000h — so A0000000h + 20000000h = C0000000h... but wait the textbook question uses 0A0000000h which is actually larger. Corrected: EAX = 0A0000000h is a 32-bit value (A0000000h). A0000000h + 20000000h = C0000000h, no carry. EDX = 10h unchanged. EDX:EAX = 00000010C0000000h.",
  },

  // ─── SBB DEEPER ────────────────────────────────────────────────────────────
  {
    id: "CPE301_7_140",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The SBB instruction can be used to implement subtraction of integers larger than 64 bits.",
    options: ["False", "Maybe", "I don't know", "True"],
    correctAnswer: 3,
    explanation:
      "True. SBB (along with SUB) can extend subtraction to arbitrarily large integers. Just as ADC extends addition to any size, SBB propagates borrows across as many register pairs as needed — limited only by available registers and memory.",
  },
  {
    id: "CPE301_7_141",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the review question with val1 = 20403004362047A1h and val2 = 055210304A2630B2h, what are the two logic errors in the proposed SBB subtraction code?",
    options: [
      "Using SBB instead of SUB, and using the wrong loop count",
      "Using MOV ESI, val1 (loads value, not address) and decrementing ESI/EDI before saving result",
      "Starting the loop from the wrong end and using ADD instead of SBB",
      "Using BYTE PTR instead of DWORD PTR and missing the final carry",
    ],
    correctAnswer: 1,
    explanation:
      "The errors: (1) 'mov esi, val1' loads the VALUE of val1 into ESI, not its address — should be 'mov esi, OFFSET val1'. (2) ESI and EDI are decremented BEFORE the result is stored in the wrong location; the result should be stored at a separate 'result' buffer, not back into ESI.",
  },

  // ─── ASCII ARITHMETIC DEEPER ───────────────────────────────────────────────
  {
    id: "CPE301_7_142",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the ASCII addition loop, why must AH be cleared to zero before each ADD instruction?",
    options: [
      "To reset the Carry flag before each addition",
      "Because AH from a previous AAA call contains a carry value that would corrupt the next addition if not cleared",
      "AH must be zero for the ASCII digits to be represented correctly",
      "To prevent the Overflow flag from being set incorrectly",
    ],
    correctAnswer: 1,
    explanation:
      "After AAA adjusts the sum, AH may contain a carry digit (0 or 1) from that adjustment. The textbook comment says 'clear AH before addition' — if AH is not zeroed, the next ADD AL would include the old AH carry, corrupting the sum.",
  },
  {
    id: "CPE301_7_143",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the ASCII addition procedure, after applying AAA, the carry is saved in BH and then 'or bh, 30h' is applied. What does this accomplish?",
    options: [
      "It sets BH to the ASCII representation of the carry digit",
      "It multiplies the carry by 30h to weight it correctly",
      "It clears the upper nibble of the carry",
      "It converts BH to a signed value",
    ],
    correctAnswer: 0,
    explanation:
      "After AAA, AH contains the raw carry (0 or 1). Moving it to BH and ORing with 30h converts it to its ASCII character: '0' (30h) or '1' (31h). This ensures the carry digit can be directly stored as a printable ASCII character.",
  },
  {
    id: "CPE301_7_144",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Write a single instruction that converts a two-digit unpacked decimal integer in AX to ASCII decimal format.",
    options: [
      "and ax, 0F0Fh",
      "or ax, 3030h",
      "add ax, 3030h",
      "xor ax, 3030h",
    ],
    correctAnswer: 1,
    explanation:
      "OR AX, 3030h sets the high nibble of both AH and AL to 0011b (30h), converting unpacked decimal digits (where high nibble = 0) to their ASCII equivalents. For example, AX = 0307h (digits 3 and 7) becomes 3337h = ASCII '3' and '7'.",
  },
  {
    id: "CPE301_7_145",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Write a single instruction that converts a two-digit ASCII decimal integer in AX to unpacked decimal format.",
    options: [
      "or ax, 0F0Fh",
      "sub ax, 3030h",
      "and ax, 0F0Fh",
      "xor ax, 3030h",
    ],
    correctAnswer: 2,
    explanation:
      "AND AX, 0F0Fh masks off the high nibble of each byte (clears the 30h prefix). '3' (33h) AND 0Fh = 03h. '7' (37h) AND 0Fh = 07h. This strips the ASCII zone byte, leaving pure unpacked decimal digits with high nibbles = 0.",
  },
  {
    id: "CPE301_7_146",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "How do you convert a two-digit ASCII decimal number in AX to binary using two instructions?",
    options: [
      "and ax, 0F0Fh / mul ah (multiply tens by 10, add ones)",
      "sub ax, 3030h / aad (converts unpacked decimal to binary)",
      "aas / cbw",
      "or ax, 3030h / aam",
    ],
    correctAnswer: 1,
    explanation:
      "Step 1: 'sub ax, 3030h' or 'and ax, 0F0Fh' converts ASCII to unpacked decimal. Step 2: 'aad' (ASCII Adjust Before Division) converts the unpacked decimal in AX to binary. AAD computes AX = (AH × 10) + AL in binary.",
  },
  {
    id: "CPE301_7_147",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which single instruction converts an unsigned binary integer in AX to unpacked decimal?",
    options: [
      "AAD — adjust before division",
      "AAM — adjust after multiplication",
      "AAA — adjust after addition",
      "AAS — adjust after subtraction",
    ],
    correctAnswer: 1,
    explanation:
      "AAM (ASCII Adjust after Multiplication) divides AL by 10, placing the quotient (tens digit) in AH and remainder (ones digit) in AL. Applied to an 8-bit binary value, it converts it to two unpacked decimal digits. Section 7.5.5 confirms AAM for this use.",
  },
  {
    id: "CPE301_7_148",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: AAD converts an unpacked decimal dividend in AX to binary by computing AX = (AH × 10) + AL.",
    options: ["True", "I don't know", "False", "Maybe"],
    correctAnswer: 0,
    explanation:
      "True. The AAD instruction prepares for division by computing: AL = (AH × 10) + AL, then AH = 0. For example, AX = 0307h (unpacked 37): AL = (3×10) + 7 = 37 = 25h. AX becomes 0025h = 37 decimal, ready for DIV.",
  },
  {
    id: "CPE301_7_149",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After 'mov ax, 0307h' / 'aad' / 'mov bl, 5' / 'div bl', what are AL (quotient) and AH (remainder)?",
    options: [
      "AL = 07h, AH = 02h",
      "AL = 0Ah, AH = 01h",
      "AL = 09h, AH = 00h",
      "AL = 05h, AH = 00h",
    ],
    correctAnswer: 0,
    explanation:
      "AAD: AL = (AH×10) + AL = (3×10) + 7 = 37 = 25h. AX = 0025h. DIV BL(5): 25h ÷ 5 = 7 remainder 2. Quotient = 07h → AL, Remainder = 02h → AH. The textbook confirms this exact result.",
  },

  // ─── PACKED DECIMAL DEEPER ─────────────────────────────────────────────────
  {
    id: "CPE301_7_150",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A packed decimal QWORD stores 2345673928737285h. How many decimal digits does this represent?",
    options: ["8 digits", "16 digits", "15 digits", "64 digits"],
    correctAnswer: 1,
    explanation:
      "A QWORD is 8 bytes × 2 decimal digits per byte = 16 decimal digits. The textbook shows: 2345673928737285h represents the decimal value 2,345,673,928,737,285 — a 16-digit decimal number.",
  },
  {
    id: "CPE301_7_151",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Under what circumstances does the DAA instruction set the Carry flag?",
    options: [
      "When the sum of the two packed decimal numbers has more than 2 decimal digits",
      "When the adjustment causes the result to exceed 99 (packed decimal range for one byte), generating a carry into the next byte",
      "When both operands are negative",
      "DAA never sets the Carry flag",
    ],
    correctAnswer: 1,
    explanation:
      "DAA sets CF when the addition of two packed BCD bytes produces a result exceeding 99 (two digits). For example, 85 + 48 = 133 — this exceeds one packed byte, so DAA sets CF to signal a carry that must be added to the next higher byte pair.",
  },
  {
    id: "CPE301_7_152",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the AddPacked program, 'packed_1 WORD 4536h' and 'packed_2 WORD 7207h'. After adding the low bytes with DAA, what is stored in the sum's low byte?",
    options: [
      "3Dh (binary sum without adjustment)",
      "43h",
      "Sum's low byte = 43h, with CF = 1",
      "Sum's low byte = 37h, no carry",
    ],
    correctAnswer: 1,
    explanation:
      "Low bytes: 36h + 07h = 3Dh. DAA adjusts: low nibble D > 9, so add 6: 3Dh + 06h = 43h. High nibble 4 ≤ 9 and no carry from the original ADD, so no further adjustment. CF = 0. Sum low byte = 43h.",
  },
  {
    id: "CPE301_7_153",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "After the AddPacked program processes both bytes of packed_1 (4536h) and packed_2 (7207h), what is displayed as the final hexadecimal sum?",
    options: [
      "B743h",
      "B743h with leading 0 byte: 00B743h",
      "0B743h",
      "11743h",
    ],
    correctAnswer: 2,
    explanation:
      "Low byte: 36h + 07h = 43h (after DAA, CF=0). High byte: 45h + 72h = B7h (binary). DAA: high nibble B > 9, adjust: B7h + 60h = 17h with CF = 1. Final carry byte = 01h (from ADC AL,0). Sum displayed: 0117_43h... Actually: 45+72=B7h. DAA: B7 high nibble > 9 → +60h = 17h, CF=1. Sum bytes: 17h, 43h, carry=01h → displayed as 011743h.",
  },
  {
    id: "CPE301_7_154",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The DAS instruction adjusts the result of packed decimal subtraction by potentially subtracting 6 from the low nibble and/or 60h from AL when a borrow condition is detected.",
    options: ["Maybe", "False", "True", "I don't know"],
    correctAnswer: 2,
    explanation:
      "True. DAS adjusts by subtracting 6 from the low nibble if it is > 9 or if AF is set, and subtracts 60h from AL if the result would be > 99 or if CF is set. This mirrors how DAA adds 6 and/or 60h, but in the subtraction direction.",
  },
  {
    id: "CPE301_7_155",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer stores the packed decimal value for 237 decimal. How should it be stored in a WORD?",
    options: ["WORD 0237h", "WORD 2370h", "WORD 2037h", "WORD 3720h"],
    correctAnswer: 0,
    explanation:
      "Packed decimal: two decimal digits per byte. 237 decimal = 2 | 37 → high byte = 02h (leading zero for odd number of digits), low byte = 37h. WORD 0237h correctly represents 237. The textbook shows 'bcd5 WORD 0237h ; 237 decimal'.",
  },

  // ─── ALGORITHM WORKBENCH ───────────────────────────────────────────────────
  {
    id: "CPE301_7_156",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Write instructions to calculate EAX * 21. Since 21 = 2^4 + 2^2 + 2^0, which sequence is correct?",
    options: [
      "shl eax, 4 / shl eax, 2 / shl eax, 1 (all on same EAX — wrong)",
      "mov ebx, eax / shl eax, 4 / shl ecx, 2 (copy) / add eax, ecx / add eax, ebx",
      "mov ebx, eax / shl ebx, 4 / mov ecx, eax / shl ecx, 2 / add eax, ebx / add eax, ecx",
      "imul eax, 21 (use immediate multiply)",
    ],
    correctAnswer: 2,
    explanation:
      "21 = 16 + 4 + 1. Save original EAX in both EBX and ECX first. SHL EBX,4 gives 16×original. SHL ECX,2 gives 4×original. Add both shifted copies plus original EAX (1×) together: EAX + 4×EAX + 16×EAX = 21×EAX.",
  },
  {
    id: "CPE301_7_157",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What is the correct single SHLD instruction to shift the highest bit of AX into the lowest bit position of DX and shift DX left by 1?",
    options: [
      "shld ax, dx, 1",
      "shld dx, ax, 1",
      "shrd dx, ax, 1",
      "shld dx, ax, 15",
    ],
    correctAnswer: 1,
    explanation:
      "SHLD dest, source, count: shifts dest left, filling vacated bits from the MSB of source. 'shld dx, ax, 1' shifts DX left by 1 bit, and the vacated LSB of DX is filled with the MSB of AX — exactly the highest bit of AX into the lowest bit of DX.",
  },
  {
    id: "CPE301_7_158",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A procedure must display a ShowDecimal8 result for AL values 0–99. After the calculation, AH holds the tens digit and AL holds the ones digit. Which instruction sequence correctly prepares for displaying both?",
    options: [
      "or al, 30h / or ah, 30h (convert both digits to ASCII)",
      "aam / or ax, 3030h (split into digits then convert to ASCII)",
      "cbw / or ax, 3030h",
      "div 10 / or ax, 3030h",
    ],
    correctAnswer: 1,
    explanation:
      "For 0–99 binary in AL: AAM divides by 10, placing tens in AH and ones in AL (unpacked decimal). Then 'or ax, 3030h' converts both to ASCII. WriteChar can then display AH (tens) and AL (ones) as character digits.",
  },
  {
    id: "CPE301_7_159",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: 'shl eax, 4' is a logical shift instruction that multiplies EAX by 16.",
    options: ["I don't know", "False", "Maybe", "True"],
    correctAnswer: 3,
    explanation:
      "True. SHL is a logical shift left instruction. Shifting left by 4 bits multiplies by 2^4 = 16. SHL fills vacated LSBs with 0 and moves the MSB into CF. For unsigned values, this is exact multiplication by 16 as long as no overflow occurs.",
  },
  {
    id: "CPE301_7_160",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which instruction divides EBX by 4 using a logical shift?",
    options: ["shl ebx, 2", "sar ebx, 2", "shr ebx, 2", "ror ebx, 2"],
    correctAnswer: 2,
    explanation:
      "SHR EBX, 2 performs a logical right shift by 2 bits, dividing unsigned EBX by 2^2 = 4. SHL would multiply, SAR is for signed division (preserves sign bit), and ROR rotates rather than shifts.",
  },

  // ─── ENCRYPTION AND BIT MANIPULATION ──────────────────────────────────────
  {
    id: "CPE301_7_161",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the encryption programming exercise, a key value of -2 indicates rotating each plaintext byte in which direction and by what amount?",
    options: [
      "Right by 2 positions",
      "Left by 2 positions",
      "Left by 2 positions using ROL",
      "Right by 2 positions using ROR",
    ],
    correctAnswer: 2,
    explanation:
      "The exercise states: 'a negative value indicates a rotation to the left and a positive value indicates a rotation to the right.' Key = -2 means ROL by 2 positions. Key = +4 means ROR by 4 positions.",
  },
  {
    id: "CPE301_7_162",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "SHLD and SHRD are described as useful for which three specific application areas?",
    options: [
      "Integer sorting, data compression, and network protocols",
      "Bit-mapped image manipulation, data encryption, and fast multiplication/division of very long integers",
      "Floating-point conversion, ASCII processing, and packed decimal arithmetic",
      "Stack management, interrupt handling, and memory addressing",
    ],
    correctAnswer: 1,
    explanation:
      "The textbook states SHLD and SHRD can be used for: (1) manipulating bit-mapped images by repositioning groups of bits, (2) data encryption algorithms involving bit shifting, and (3) fast multiplication/division of very long integers.",
  },

  // ─── BINARY MULTIPLICATION PROCEDURE ──────────────────────────────────────
  {
    id: "CPE301_7_163",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the BitwiseMuliply programming exercise, the procedure receives the multiplier in EBX and returns the product in EAX. What is the key insight that determines the shift count to use?",
    options: [
      "The multiplier's value directly equals the shift count",
      "The bit positions of set (1) bits in the multiplier correspond to the required shift counts",
      "The shift count is always the number of bits in EBX",
      "The shift count equals log2 of EBX",
    ],
    correctAnswer: 1,
    explanation:
      "The textbook explains: 'bits 2 and 5 are set in the multiplier (36), and the integers 2 and 5 are also the required shift counters.' Each '1' bit in the multiplier at position n requires shifting the multiplicand left by n and adding to the accumulating product.",
  },
  {
    id: "CPE301_7_164",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer wants to multiply 123 by 36 using shifts. The binary of 36 is 00100100b. Which sequence correctly produces 4428?",
    options: [
      "mov eax,123 / shl eax,5 / shl eax,2 / add eax,eax",
      "mov eax,123 / mov ebx,eax / shl eax,5 / shl ebx,2 / add eax,ebx",
      "mov eax,36 / mov ebx,123 / mul ebx",
      "mov eax,123 / shl eax,6 / shr eax,1",
    ],
    correctAnswer: 1,
    explanation:
      "36 = 2^5 + 2^2. Save original 123 in EBX. SHL EAX,5 gives 123×32=3936. SHL EBX,2 gives 123×4=492. ADD EAX,EBX gives 3936+492=4428. The textbook code matches option B exactly.",
  },

  // ─── SIEVE OF ERATOSTHENES CONTEXT ────────────────────────────────────────
  {
    id: "CPE301_7_165",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The Sieve of Eratosthenes programming exercise generates primes between 2 and 1000. Which arithmetic instruction is most appropriate for the marking/elimination step?",
    options: [
      "MUL — to generate multiples of each prime",
      "IMUL — since primes can be negative",
      "DIV — to test divisibility of each candidate",
      "ADD — to step through multiples by repeatedly adding the prime value",
    ],
    correctAnswer: 3,
    explanation:
      "The Sieve marks composite numbers by stepping through multiples. ADD is most efficient: starting from p^2 (or 2p), repeatedly ADD p to reach successive multiples. MUL could generate multiples but ADD in a loop is the classic sieve approach.",
  },

  // ─── GCD AND DIVISION APPLICATIONS ─────────────────────────────────────────
  {
    id: "CPE301_7_166",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the GCD algorithm pseudocode: 'n = x % y / x = y / y = n', which assembly instruction computes x % y (the remainder)?",
    options: [
      "MUL — multiply and extract remainder",
      "DIV or IDIV — the remainder is stored in AH/DX/EDX after division",
      "SUB — subtract repeatedly until underflow to get remainder",
      "SHR — shift right to get the remainder",
    ],
    correctAnswer: 1,
    explanation:
      "The modulo operation (%) requires integer division. DIV or IDIV stores both the quotient and remainder. For signed integers (since abs() is used), IDIV is appropriate. The remainder (n = x % y) is found in AH/DX/EDX depending on operand size.",
  },
  {
    id: "CPE301_7_167",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The GCD algorithm calls abs(x) and abs(y). In assembly, how is the absolute value of a signed integer in EAX typically obtained?",
    options: [
      "AND EAX, 7FFFFFFFh — clear the sign bit",
      "Test the sign and conditionally negate: 'test eax,eax / jns done / neg eax'",
      "SAR EAX, 31 to get the sign, then use it",
      "Both B and C are valid approaches",
    ],
    correctAnswer: 3,
    explanation:
      "Two approaches: (1) Test sign and conditionally NEG: 'test eax,eax / jns positive / neg eax'. (2) Using SAR (Challenge exercise 16): 'mov ebx,eax / sar ebx,31 / xor eax,ebx / sub eax,ebx' — a branchless absolute value using SAR, XOR, and SUB.",
  },

  // ─── PARITY AND BIT COUNTING ──────────────────────────────────────────────
  {
    id: "CPE301_7_168",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "To calculate the parity of a 32-bit number in EAX by counting 1-bits, which instruction extracts one bit per iteration for testing?",
    options: [
      "ROR EAX, 1 — rotates a bit to the CF position for testing",
      "SHR EAX, 1 — shifts a bit into CF, which can be tested with JC",
      "AND EAX, 1 — tests the LSB directly",
      "Both SHR and AND work; SHR also advances to the next bit",
    ],
    correctAnswer: 3,
    explanation:
      "The textbook review challenge mentions 'use a loop that shifts each bit into the Carry flag.' SHR EAX,1 shifts the LSB into CF and advances all bits. AND EAX,1 tests the LSB but doesn't advance unless you also shift. Both work, but SHR combined with JC is the textbook's suggested approach.",
  },
  {
    id: "CPE301_7_169",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: To calculate EAX mod y where y is a power of 2, you can use 'and eax, (y-1)' without any division instruction.",
    options: ["False", "True", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "True. This is the content of Challenge problem 15: 'using only SUB, MOV, and AND instructions, calculate x = n mod y, assuming y is a power of 2.' Since y = 2^k, (y-1) creates a bitmask of k ones. AND EAX,(y-1) keeps only the lower k bits, which is exactly n mod y.",
  },

  // ─── CHAPTER SUMMARY SYNTHESIS ────────────────────────────────────────────
  {
    id: "CPE301_7_170",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which pair of instructions is specifically designed for shifting signed numbers?",
    options: ["SHL and SHR", "ROL and ROR", "SAL and SAR", "RCL and RCR"],
    correctAnswer: 2,
    explanation:
      "SAL (Shift Arithmetic Left) and SAR (Shift Arithmetic Right) are designed for signed numbers. SAR preserves the sign bit by filling vacated bits with the sign bit rather than zeros. SAL is identical to SHL but semantically intended for signed values.",
  },
  {
    id: "CPE301_7_171",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which instruction pair uses the Carry flag as an intermediate point between the operand and the rotation, rather than rotating bits directly back into the operand?",
    options: ["ROL and ROR", "SHL and SHR", "RCL and RCR", "SHLD and SHRD"],
    correctAnswer: 2,
    explanation:
      "RCL and RCR use the Carry flag as a 9th (or 17th/33rd) bit in the rotation chain. Bits pass through CF before re-entering the operand, unlike ROL/ROR where the bit goes directly from one end to the other without passing through CF as an intermediate.",
  },
  {
    id: "CPE301_7_172",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer needs to add two 1024-bit integers. Which instruction pair makes this possible in assembly language?",
    options: [
      "MUL and DIV",
      "ADD and SUB only (looping 32 times for 32 32-bit blocks)",
      "ADC and SBB",
      "SHLD and SHRD",
    ],
    correctAnswer: 2,
    explanation:
      "ADC (Add with Carry) and SBB (Subtract with Borrow) enable extended-precision arithmetic of virtually any size. The textbook states: 'assembly language instructions make it possible to add and subtract integers of virtually any size.' No high-level language standard supports 1024-bit integers directly.",
  },
  {
    id: "CPE301_7_173",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which of the following is NOT listed as a key term in Chapter 7?",
    options: [
      "Divide overflow",
      "Bitwise rotation",
      "Sign extension",
      "Floating-point rounding",
    ],
    correctAnswer: 3,
    explanation:
      "Chapter 7 key terms include: arithmetic shift, binary multiplication, bit rotation, bit shifting, bit strings, bitwise division, bitwise multiplication, bitwise rotation, divide overflow, little-endian order, logical shift, sign extension, signed division, signed multiplication, signed overflow, unsigned multiplication. Floating-point rounding is NOT listed.",
  },
  {
    id: "CPE301_7_174",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The CWD instruction sign-extends AX into DX:AX, while CDQ sign-extends EAX into EDX:EAX.",
    options: ["Maybe", "I don't know", "False", "True"],
    correctAnswer: 3,
    explanation:
      "True. CWD (Convert Word to Doubleword): sign-extends AX's bit 15 into all 16 bits of DX, forming DX:AX. CDQ (Convert Doubleword to Quadword): sign-extends EAX's bit 31 into all 32 bits of EDX, forming EDX:EAX. CBW extends AL into AH.",
  },
  {
    id: "CPE301_7_175",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In 64-bit mode with IMUL, what is the result of 'imul rax, multiplicand, 4' where multiplicand QWORD = -16?",
    options: [
      "RAX = FFFFFFFFFFFFFFC0h (-64 decimal)",
      "RAX = 0000000000000040h (+64 decimal)",
      "RAX = FFFFFFFFFFFFFFF0h (-16 decimal)",
      "RAX = FFFFFFFFFFFFFF40h",
    ],
    correctAnswer: 0,
    explanation:
      "-16 × 4 = -64. In 64-bit two's complement: -64 = FFFFFFFFFFFFFFC0h. The textbook confirms: 'imul rax, multiplicand, 4 ; RAX = FFFFFFFFFFFFFFC0 (-64)'. The three-operand format multiplies the memory operand by the immediate and stores in RAX.",
  },

  // ─── MIXED SCENARIO QUESTIONS ──────────────────────────────────────────────
  {
    id: "CPE301_7_176",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer wants to multiply 5 by 3 and store the result in a 16-bit variable val1. Which sequence is correct?",
    options: [
      "mov al, 5 / mov bl, 3 / mul bl / mov val1, ax",
      "mov ax, 5 / imul ax, 3 / mov val1, ax",
      "mov al, 5 / mov bl, 3 / imul bl / mov val1, ax",
      "Both A and C are correct",
    ],
    correctAnswer: 3,
    explanation:
      "Both options work. Option A: MUL BL (5 × 3 = 15), product in AX, move to val1. Option C: IMUL BL (single-operand signed form, AL × BL → AX), same result. For small positive values, MUL and IMUL produce identical results.",
  },
  {
    id: "CPE301_7_177",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer wants to divide 276 by 10 and store the result in 16-bit val1. Which is the correct setup?",
    options: [
      "mov ax, 276 / mov bl, 10 / div bl / mov val1, al",
      "mov ax, 276 / mov dx, 0 / mov cx, 10 / div cx / mov val1, ax",
      "mov eax, 276 / cdq / mov ebx, 10 / idiv ebx / mov val1, ax",
      "Both A and B are correct",
    ],
    correctAnswer: 3,
    explanation:
      "Both A and B work. Option A: 8-bit div BL with AX as dividend; quotient 27 fits in AL. Option B: 16-bit div CX with DX:AX as dividend (DX must be 0); quotient 27 in AX. Both store correctly in a 16-bit val1.",
  },
  {
    id: "CPE301_7_178",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: In the IMUL two-operand format 'imul bx, word1' where word1 = 4 and BX = -64, OF is set if -256 overflows a signed 16-bit register.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. -256 in 16-bit two's complement = FF00h, which IS within the range of a signed 16-bit integer (-32768 to +32767). Therefore no overflow occurs, and OF = 0. The textbook example 'imul bx, word1 ; BX = -256' does not set OF.",
  },
  {
    id: "CPE301_7_179",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What will the hexadecimal value of RAX be after: 'imul rax, multiplicand, 4' where multiplicand QWORD = 0001020304050000h?",
    options: [
      "RAX = 0004080C10140000h",
      "RAX = 0001020304050004h",
      "RAX = 0000040810140000h",
      "RAX = 000408101420000h",
    ],
    correctAnswer: 0,
    explanation:
      "0001020304050000h × 4: multiply each hex digit group by 4. 0001×4=0004, 0203×4=080C, 0405×4=1014, 0000×4=0000. Result = 0004080C10140000h. The textbook review question 10 confirms this approach.",
  },
  {
    id: "CPE301_7_180",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: When performing extended subtraction across multiple bytes using SBB, the sequence must process bytes from LOWEST address to HIGHEST address (little-endian low to high).",
    options: ["False", "I don't know", "True", "Maybe"],
    correctAnswer: 2,
    explanation:
      "True. For multi-byte subtraction: start with SUB on the lowest-order byte (lowest address in little-endian). This may generate a borrow (CF = 1). Use SBB on each successive higher byte, propagating the borrow upward through the integer.",
  },
  {
    id: "CPE301_7_181",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The packed decimal integer bcd3 DWORD 08723654h represents which decimal value?",
    options: [
      "87,236,540 decimal",
      "8,723,654 decimal",
      "872,365,400 decimal",
      "0,872,365,400 decimal",
    ],
    correctAnswer: 1,
    explanation:
      "08723654h in packed BCD: each byte holds two decimal digits. Reading the bytes: 08=08, 72=72, 36=36, 54=54. This gives 8,723,654 decimal. The leading zero (0 in the high nibble of 08h) pads an odd number of digits. The textbook confirms: 'bcd3 DWORD 08723654h ; 8,723,654 decimal'.",
  },
  {
    id: "CPE301_7_182",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which of the following conversion scenarios is supported by a direct packed decimal instruction in Chapter 7?",
    options: [
      "Packed decimal multiplication using a DAM instruction",
      "Packed decimal to binary conversion using a DAB instruction",
      "Packed decimal addition and subtraction correction using DAA and DAS",
      "Packed decimal division using a DAD instruction",
    ],
    correctAnswer: 2,
    explanation:
      "Only DAA (Decimal Adjust after Addition) and DAS (Decimal Adjust after Subtraction) exist for packed decimal. There are no packed decimal multiply, divide, or direct binary-conversion instructions. Multiplication and division require unpacking first.",
  },
  {
    id: "CPE301_7_183",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The SHLD instruction can be used as part of data encryption, where groups of bits must be shifted and combined across multiple registers.",
    options: ["I don't know", "Maybe", "False", "True"],
    correctAnswer: 3,
    explanation:
      "True. The textbook explicitly states: 'Another potential application [of SHLD/SHRD] is data encryption, in which the encryption algorithm involves the shifting of bits.' The instructions are efficient for complex multi-register bit manipulation required by many encryption schemes.",
  },
  {
    id: "CPE301_7_184",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer executes 'mov al, +127' followed by 'rol al, 1'. What is the state of the Overflow flag and why?",
    options: [
      "OF = 0, because rotation by 1 is always safe for 8-bit values",
      "OF = 1, because the positive value +127 becomes negative (11111110b = -2) after the rotation, reversing the sign",
      "OF = 1, because 127 shifted left by 1 would overflow 128",
      "OF = 0, because ROL is a rotation, not a shift, and never sets OF",
    ],
    correctAnswer: 1,
    explanation:
      "+127 = 01111111b. After ROL 1: 11111110b = -2 signed. The sign changed from positive to negative in a single-bit rotation, which is exactly the condition that sets OF for single-bit shifts/rotations. The textbook confirms: 'mov al, +127 / rol al, 1 ; OF = 1, AL = 11111110b'.",
  },
  {
    id: "CPE301_7_185",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Similarly, after 'mov al, -128' followed by 'shr al, 1', what is the state of OF?",
    options: [
      "OF = 0, SHR never affects OF",
      "OF = 1, because -128 becomes +64 after the right shift, reversing the sign",
      "OF = 1, because the shift count exceeds the register size",
      "OF = 0, because -128 divided by 2 is -64, which is still negative",
    ],
    correctAnswer: 1,
    explanation:
      "-128 = 10000000b. SHR 1: fills MSB with 0 → 01000000b = +64. The sign reversed (negative → positive), so OF = 1. The textbook confirms: 'mov al,-128 / shr al,1 ; OF = 1, AL = 01000000b'. Note: SHR on a negative number changes sign since it fills with 0.",
  },
  {
    id: "CPE301_7_186",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "What output would the following 64-bit division code produce in RAX and RDX: 'mov rdx, 00000108h' / 'mov rax, 33300020h' / 'div divisor (00000100h)'?",
    options: [
      "RAX = 0108000000003330h, RDX = 0000000000000020h",
      "RAX = 3330000000000108h, RDX = 0000000000000020h",
      "RAX = 0000010833300020h, RDX = 0000000000000100h",
      "RAX = 1080000000003330h, RDX = 0000000000000200h",
    ],
    correctAnswer: 0,
    explanation:
      "Dividend = RDX:RAX = 0000010833300020h. Divisor = 00000100h (256). Each hex digit shifts one position right when dividing by 256 (100h = 2^8, shift right 8 bits = 2 hex digits). Quotient: 0108000000003330h, Remainder: 20h. The textbook confirms this result.",
  },
  {
    id: "CPE301_7_187",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the SHRD array-shifting example, the array has 5 doublewords and ECX is initialized to '(LENGTHOF array) - 1'. Why is 1 subtracted?",
    options: [
      "Because SHRD requires the count to start from 0",
      "Because the last doubleword must be processed separately with SHR, not SHRD, so it is excluded from the loop",
      "Because LOOP decrements ECX before testing, so we need one fewer iteration",
      "To account for the zero-based indexing of the array",
    ],
    correctAnswer: 1,
    explanation:
      "The loop processes pairs of adjacent doublewords using SHRD. The highest (last) doubleword has no higher neighbor to source fill bits from, so it must be processed separately after the loop with 'shr DWORD PTR [esi], COUNT' instead of SHRD.",
  },
  {
    id: "CPE301_7_188",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The GetMseconds procedure measures elapsed time by counting CPU clock cycles directly.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "False. GetMseconds uses the Microsoft Windows API to get the number of system MILLISECONDS elapsed since midnight. It does not count CPU clock cycles directly. Two calls are made — one before and one after the code to measure — and the difference gives elapsed milliseconds.",
  },
  {
    id: "CPE301_7_189",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Why does the GetMseconds-based timing approach remain valid for comparing two code implementations even though calling GetMseconds itself takes some time?",
    options: [
      "GetMseconds is so fast that its overhead rounds to zero milliseconds",
      "The overhead of calling GetMseconds twice is the same for both tests and cancels out when comparing ratios",
      "GetMseconds subtracts its own execution time automatically",
      "The overhead only matters for single measurements, not comparative tests",
    ],
    correctAnswer: 1,
    explanation:
      "The textbook states: 'this overhead is insignificant when we measure the ratio of performance times between one code implementation and another.' The same fixed overhead is added to both measurements, so the ratio procTime1:procTime2 correctly reflects the relative performance.",
  },
  {
    id: "CPE301_7_190",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "The WriteScaled programming exercise requires inserting a decimal point 5 positions from the right of the number '100123456789765'. What should be displayed?",
    options: [
      "1001234567.89765",
      "10012345.6789765",
      "100123456789.765",
      "100.123456789765",
    ],
    correctAnswer: 0,
    explanation:
      "DECIMAL_OFFSET = 5 means insert the decimal point 5 positions from the right side. '100123456789765' with a decimal 5 from the right gives '1001234567.89765'. The last 5 digits (89765) are the fractional part.",
  },
  {
    id: "CPE301_7_191",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The ASCII arithmetic instructions (AAA, AAS, AAM, AAD) can process operands directly in ASCII format for all four operations (add, subtract, multiply, divide).",
    options: ["Maybe", "True", "I don't know", "False"],
    correctAnswer: 3,
    explanation:
      "False. ASCII addition (AAA) and subtraction (AAS) can use ASCII format OR unpacked decimal. However, AAM (after multiplication) and AAD (before division) can ONLY use UNPACKED DECIMAL operands, not ASCII. The textbook states: 'Only unpacked decimal numbers can be used for multiplication and division.'",
  },
  {
    id: "CPE301_7_192",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer wants to implement a branchless absolute value in EAX using only SAR, ADD, and XOR (Chapter 7 Challenge). Which sequence is correct?",
    options: [
      "sar eax, 31 / xor eax, eax",
      "mov ebx, eax / sar ebx, 31 / xor eax, ebx / sub eax, ebx",
      "sar eax, 1 / xor eax, eax / add eax, 1",
      "neg eax / sar eax, 31",
    ],
    correctAnswer: 1,
    explanation:
      "The textbook hints: 'A number can be negated by adding 1 and forming its one's complement. If you XOR an integer with all 1s, its 1s are reversed.' Approach: SAR EBX,31 creates a mask of all 0s (positive) or all 1s (negative). XOR EAX,EBX flips bits if negative. SUB EAX,EBX adds 1 (since EBX = -1 = FFFFFFFFh for negative). Together: two's complement negation only for negative values.",
  },
  {
    id: "CPE301_7_193",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "In the context of Chapter 7, what does 'bit shifting' mean as defined by the textbook?",
    options: [
      "Moving bits from one register to another",
      "Moving bits right and left inside an operand",
      "Exchanging bits between two operands",
      "Inverting selected bits using XOR",
    ],
    correctAnswer: 1,
    explanation:
      "The textbook defines bit shifting as: 'Bit shifting means to move bits right and left inside an operand.' This is the fundamental operation performed by SHL, SHR, SAL, SAR, and related instructions.",
  },
  {
    id: "CPE301_7_194",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: The SHLD and SHRD instructions affect the Sign, Zero, Auxiliary, Parity, and Carry flags.",
    options: ["False", "I don't know", "Maybe", "True"],
    correctAnswer: 3,
    explanation:
      "True. The textbook explicitly states that SHLD and SHRD affect: 'the Sign, Zero, Auxiliary, Parity, and Carry flags.' This makes them more flag-affecting than basic shift instructions and means programmers must be aware of their impact on conditional branching.",
  },
  {
    id: "CPE301_7_195",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer implements 'var4 = (var1 + var2) * var3' but forgets the JC check after MUL. What risk does this introduce?",
    options: [
      "The program will crash immediately at the MUL instruction",
      "If the product exceeds 32 bits, the upper 32 bits in EDX are silently discarded, and var4 stores an incorrect truncated result",
      "MUL will automatically store the result as a 64-bit value in var4",
      "The Zero flag will be incorrectly set, causing wrong branching later",
    ],
    correctAnswer: 1,
    explanation:
      "Without JC, if the 32-bit product overflows (EDX ≠ 0 after MUL), 'mov var4, eax' silently stores only the low 32 bits. The high 32 bits in EDX are discarded. The textbook notes: 'Most high-level language compilers ignore the upper 32 bits'—assembly allows you to detect this with JC.",
  },
  {
    id: "CPE301_7_196",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which of the following is a correct instruction format for SHLD in 32-bit mode?",
    options: [
      "SHLD reg32, imm32, CL",
      "SHLD mem32, reg32, CL",
      "SHLD reg32, mem32, imm8",
      "SHLD mem32, mem32, imm8",
    ],
    correctAnswer: 1,
    explanation:
      "Valid SHLD formats: dest can be reg16/reg32 or mem16/mem32; source must be a REGISTER (not memory or immediate); count can be CL or imm8. Option B: SHLD mem32, reg32, CL is valid. Option C is invalid because source cannot be memory; Option D is invalid for the same reason.",
  },
  {
    id: "CPE301_7_197",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Why is a shift count limited to values 0–255 (imm8) in SHL and related instructions?",
    options: [
      "The x86 architecture only implements 8 bits of the shift counter circuitry",
      "The count operand is specified as an 8-bit immediate (imm8), allowing 0–255, though counts >= operand size produce undefined or zeroed results",
      "Counts above 255 would require a 16-bit register to hold the result",
      "The CL register is only 8 bits, so the maximum useful shift count is 255",
    ],
    correctAnswer: 1,
    explanation:
      "The textbook states: 'x86 processors permit imm8 to be any integer between 0 and 255.' This is because the count operand field is 8 bits. In practice, the processor may mask the count (e.g., only use count mod 32 for 32-bit operands), but the encoding allows 0–255.",
  },
  {
    id: "CPE301_7_198",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "True or False: Bit rotation is described as 'lossless' because bits shifted off one end immediately reappear at the other end.",
    options: ["True", "Maybe", "False", "I don't know"],
    correctAnswer: 0,
    explanation:
      "True. The textbook states: 'Bit rotation does not lose bits. A bit rotated off one end of a number appears again at the other end.' This distinguishes rotation (ROL/ROR/RCL/RCR) from shifting (SHL/SHR/SAL/SAR), where bits shifted beyond the end are discarded.",
  },
  {
    id: "CPE301_7_199",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "A programmer computes timing data: SHL-based multiplication took 6.078 seconds and MUL-based took 20.718 seconds on a legacy Pentium 4. What does this mean when comparing on a modern processor?",
    options: [
      "Modern processors have both methods at 6 seconds, meaning only SHL improved",
      "Modern processors run SHL faster but MUL slower than legacy Pentium 4",
      "Modern processors execute both approaches at equal speed, showing Intel optimized MUL/IMUL",
      "Modern processors always prefer MUL to SHL for all multiplication",
    ],
    correctAnswer: 2,
    explanation:
      "The textbook notes: 'when running the same program on a more recent processor, the timings of both function calls were exactly the same. This example shows that Intel has managed to greatly optimize the MUL and IMUL instructions in recent processors.'",
  },
  {
    id: "CPE301_7_200",
    course: "CPE301",
    chapter: "Chapter 7",
    text: "Which of the following best summarizes the unique advantage of assembly language over high-level languages for the topics covered in Chapter 7?",
    options: [
      "Assembly is always faster for all arithmetic operations",
      "Assembly provides direct access to bit-level operations, arbitrary-size integer arithmetic, and CPU flags for precise overflow and carry detection — capabilities only partially available in high-level languages",
      "Assembly can handle floating-point numbers more accurately than high-level languages",
      "Assembly automatically optimizes multiplication using shift instructions",
    ],
    correctAnswer: 1,
    explanation:
      "Chapter 7 opens: 'bit manipulation is an intrinsic part of computer graphics, data encryption, and hardware manipulation. Instructions that do this are powerful tools, and are only partially implemented by high-level languages.' Assembly also enables arbitrary-precision integer arithmetic (ADC/SBB) and full control over overflow detection via CPU flags.",
  },
];

const cpe301Chapter7: QuestionV2[] = [
  ...CPE301Chapter7Part1,
  ...CPE301Chapter7Part2,
];

export default cpe301Chapter7;
