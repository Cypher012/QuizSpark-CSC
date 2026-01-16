// ==================== CSC 307: NUMERICAL COMPUTATIONS I ====================
// Progressive Mastery System for Definition-Type Theory Questions
// Includes Yorùbá terminology as required by the lecturer
//
// MASTERY LEVELS:
// Level 1: Few key terms blanked (easiest)
// Level 2: More phrases blanked
// Level 3: Most content blanked
// Level 4: Full recall - only Yoruba/formulas shown as anchors

export interface CSC307Question {
  id: string;
  term: string;
  yoruba: string | null;
  question: string;
  fullAnswer: string;
  keyPoints: string[];
  tokens: Token[];
}

export interface Token {
  text: string;
  type: "anchor" | "content";
  // anchor = Yoruba terms/formulas - ALWAYS visible, never blanked
  // content = regular text - can be blanked based on level
  blankAtLevel?: 1 | 2 | 3 | 4;
  // Level at which this token becomes a blank:
  // 1 = blanked from level 1 onwards (key terms - first to learn)
  // 2 = blanked from level 2 onwards
  // 3 = blanked from level 3 onwards
  // 4 = blanked only at level 4 (connectors/minor words)
  // undefined = never blanked (for anchors or always-visible content)
}

// Helper type for the question bank
export type CSC307QuestionBank = CSC307Question[];

// ============================================================================
// QUESTION DATA WITH PROGRESSIVE MASTERY TOKENS
// ============================================================================

export const csc307Chapter1Questions: CSC307QuestionBank = [
  // -------------------------------------------------------------------------
  // COMPUTING (Ìṣirò)
  // -------------------------------------------------------------------------
  // {
  //   id: "computing",
  //   term: "Computing",
  //   yoruba: "Ìṣirò",
  //   question: "Define Computing (Ìṣirò)",
  //   fullAnswer:
  //     "Ìṣirò (Computing) is a mental activity inextricable from its human agency. The substance of computing is situated in Ìṣẹ̀lẹ̀ (a happening), which is spontaneous, irreversible, and unrepeatable. Ìṣirò (Computing), Ìronú (Thinking), and Ìrorí (Reasoning) are the different aspects of human Èrò (Mental activity). Faculty of language distinguishes an Ìṣẹ́mí (organism) from an Ìṣẹ̀rò (mechanism). Faculty of language is NOT inherent in a mechanism; therefore, irrespective of the sophistication of technology used to create a mechanism, it can neither apprehend nor effect mental state and/or activity.",
  //   keyPoints: [
  //     "Mental activity inextricable from human agency",
  //     "Situated in Ìṣẹ̀lẹ̀ (happening) - spontaneous, irreversible, unrepeatable",
  //     "Ìṣirò, Ìronú (Thinking), Ìrorí (Reasoning) are aspects of Èrò (Mental activity)",
  //     "Faculty of language distinguishes Ìṣẹ́mí (organism) from Ìṣẹ̀rò (mechanism)",
  //     "Faculty of language NOT inherent in mechanism",
  //   ],
  //   tokens: [
  //     { text: "Ìṣirò", type: "anchor" },
  //     { text: " (Computing) is a ", type: "content", blankAtLevel: 4 },
  //     { text: "mental activity", type: "content", blankAtLevel: 1 },
  //     { text: " inextricable from its ", type: "content", blankAtLevel: 3 },
  //     { text: "human agency", type: "content", blankAtLevel: 1 },
  //     {
  //       text: ". The substance of computing is situated in ",
  //       type: "content",
  //       blankAtLevel: 4,
  //     },
  //     { text: "Ìṣẹ̀lẹ̀", type: "anchor" },
  //     { text: " (a happening), which is ", type: "content", blankAtLevel: 4 },
  //     {
  //       text: "spontaneous, irreversible, and unrepeatable",
  //       type: "content",
  //       blankAtLevel: 2,
  //     },
  //     { text: ". ", type: "content", blankAtLevel: 4 },
  //     { text: "Ìṣirò", type: "anchor" },
  //     { text: " (Computing), ", type: "content", blankAtLevel: 4 },
  //     { text: "Ìronú", type: "anchor" },
  //     { text: " (Thinking), and ", type: "content", blankAtLevel: 4 },
  //     { text: "Ìrorí", type: "anchor" },
  //     {
  //       text: " (Reasoning) are the different aspects of human ",
  //       type: "content",
  //       blankAtLevel: 3,
  //     },
  //     { text: "Èrò", type: "anchor" },
  //     { text: " (Mental activity). ", type: "content", blankAtLevel: 4 },
  //     { text: "Faculty of language", type: "content", blankAtLevel: 2 },
  //     { text: " distinguishes an ", type: "content", blankAtLevel: 4 },
  //     { text: "Ìṣẹ́mí", type: "anchor" },
  //     { text: " (organism) from an ", type: "content", blankAtLevel: 4 },
  //     { text: "Ìṣẹ̀rò", type: "anchor" },
  //     {
  //       text: " (mechanism). Faculty of language is ",
  //       type: "content",
  //       blankAtLevel: 3,
  //     },
  //     { text: "NOT inherent in a mechanism", type: "content", blankAtLevel: 2 },
  //     {
  //       text: "; therefore, irrespective of the sophistication of technology used to create a mechanism, it can ",
  //       type: "content",
  //       blankAtLevel: 3,
  //     },
  //     {
  //       text: "neither apprehend nor effect mental state and/or activity",
  //       type: "content",
  //       blankAtLevel: 2,
  //     },
  //     { text: ".", type: "content", blankAtLevel: 4 },
  //   ],
  // },

  // -------------------------------------------------------------------------
  // COMPUTATION
  // -------------------------------------------------------------------------
  {
    id: "computation",
    term: "Computation",
    yoruba: null,
    question: "Define Computation",
    fullAnswer:
      "Computation is the reduction and simplification of the mental activity of Ìṣirò (Computing) into Ìlànọ̀n (a Process) through an instrument of language. Unlike Ìṣẹ̀lẹ̀ (a happening), a process is deliberate, interruptible, reversible, and repeatable. Computation involves the creation and manipulation of temporal and/or spatial instances to construe output for a valid input. The aspect rendered through digits is the focus of Numerical Computation.",
    keyPoints: [
      "Reduction and simplification of Ìṣirò (Computing)",
      "Into Ìlànọ̀n (a Process) through instrument of language",
      "Process is deliberate, interruptible, reversible, repeatable",
      "Creation and manipulation of temporal/spatial instances",
      "Aspect rendered through digits = focus of Numerical Computation",
    ],
    tokens: [
      { text: "Computation is the ", type: "content", blankAtLevel: 4 },
      {
        text: "reduction and simplification",
        type: "content",
        blankAtLevel: 1,
      },
      { text: " of the mental activity of ", type: "content", blankAtLevel: 3 },
      { text: "Ìṣirò", type: "anchor" },
      { text: " (Computing) into ", type: "content", blankAtLevel: 4 },
      { text: "Ìlànọ̀n", type: "anchor" },
      { text: " (a Process) through an ", type: "content", blankAtLevel: 4 },
      { text: "instrument of language", type: "content", blankAtLevel: 1 },
      { text: ". Unlike ", type: "content", blankAtLevel: 4 },
      { text: "Ìṣẹ̀lẹ̀", type: "anchor" },
      {
        text: " (a happening), a process is ",
        type: "content",
        blankAtLevel: 4,
      },
      {
        text: "deliberate, interruptible, reversible, and repeatable",
        type: "content",
        blankAtLevel: 2,
      },
      { text: ". Computation involves the ", type: "content", blankAtLevel: 3 },
      {
        text: "creation and manipulation of temporal and/or spatial instances",
        type: "content",
        blankAtLevel: 2,
      },
      { text: " to ", type: "content", blankAtLevel: 4 },
      {
        text: "construe output for a valid input",
        type: "content",
        blankAtLevel: 2,
      },
      {
        text: ". The aspect rendered through ",
        type: "content",
        blankAtLevel: 3,
      },
      { text: "digits", type: "content", blankAtLevel: 1 },
      { text: " is the focus of ", type: "content", blankAtLevel: 4 },
      { text: "Numerical Computation", type: "content", blankAtLevel: 1 },
      { text: ".", type: "content", blankAtLevel: 4 },
    ],
  },

  // -------------------------------------------------------------------------
  // NUMERICAL-TERM (Ọ̀nkà)
  // -------------------------------------------------------------------------
  {
    id: "numerical-term",
    term: "Numerical-term",
    yoruba: "Ọ̀nkà",
    question: "Define Numerical-term (Ọ̀nkà)",
    fullAnswer:
      "Ọ̀nkà (A Numerical-term or Number) is used to cue the logical content of Ẹyọ (a Constant). A numerical-term is constructed through the concatenation of finite instances of Ìka (Digit) drawn from the alphabet of a numbering scheme. The substance of a number is the logic ascribed to its string of digits through a numbering scheme. Precision and Constancy make numbers indispensable in Scientific and Engineering problem-solving.",
    keyPoints: [
      "Cues the logical content of Ẹyọ (a Constant)",
      "Constructed through concatenation of finite instances of Ìka (Digit)",
      "Drawn from alphabet of a numbering scheme",
      "Substance = logic ascribed to string of digits",
      "Precision and Constancy make numbers indispensable",
    ],
    tokens: [
      { text: "Ọ̀nkà", type: "anchor" },
      {
        text: " (A Numerical-term or Number) is used to ",
        type: "content",
        blankAtLevel: 4,
      },
      { text: "cue the logical content", type: "content", blankAtLevel: 1 },
      { text: " of ", type: "content", blankAtLevel: 4 },
      { text: "Ẹyọ", type: "anchor" },
      {
        text: " (a Constant). A numerical-term is constructed through the ",
        type: "content",
        blankAtLevel: 3,
      },
      { text: "concatenation", type: "content", blankAtLevel: 1 },
      { text: " of finite instances of ", type: "content", blankAtLevel: 3 },
      { text: "Ìka", type: "anchor" },
      { text: " (Digit) drawn from the ", type: "content", blankAtLevel: 4 },
      {
        text: "alphabet of a numbering scheme",
        type: "content",
        blankAtLevel: 2,
      },
      {
        text: ". The substance of a number is the ",
        type: "content",
        blankAtLevel: 3,
      },
      {
        text: "logic ascribed to its string of digits",
        type: "content",
        blankAtLevel: 2,
      },
      {
        text: " through a numbering scheme. ",
        type: "content",
        blankAtLevel: 4,
      },
      { text: "Precision and Constancy", type: "content", blankAtLevel: 2 },
      {
        text: " make numbers indispensable in ",
        type: "content",
        blankAtLevel: 3,
      },
      {
        text: "Scientific and Engineering problem-solving",
        type: "content",
        blankAtLevel: 2,
      },
      { text: ".", type: "content", blankAtLevel: 4 },
    ],
  },

  // -------------------------------------------------------------------------
  // CONSTANT (Ẹyọ)
  // -------------------------------------------------------------------------
  {
    id: "constant",
    term: "Constant",
    yoruba: "Ẹyọ",
    question: "Define Constant (Ẹyọ)",
    fullAnswer:
      "Ẹyọ (Constant): A temporal state ascribed through first-order logic formulated with an instrument of regular language. The regular universe is binary opposite-neutral. Every constant has one, and only one, logical content expressed through one-dimensional structure. The simplest constant is a Unit (One), and every constant can be reduced to instances of Unit.",
    keyPoints: [
      "Temporal state ascribed through first-order logic",
      "Instrument of regular language",
      "Regular universe is binary opposite-neutral",
      "One, and only one, logical content",
      "One-dimensional structure",
      "Simplest constant is Unit (One)",
      "Every constant can be reduced to instances of Unit",
    ],
    tokens: [
      { text: "Ẹyọ", type: "anchor" },
      { text: " (Constant): A ", type: "content", blankAtLevel: 4 },
      { text: "temporal state", type: "content", blankAtLevel: 1 },
      { text: " ascribed through ", type: "content", blankAtLevel: 4 },
      { text: "first-order logic", type: "content", blankAtLevel: 1 },
      { text: " formulated with an ", type: "content", blankAtLevel: 4 },
      {
        text: "instrument of regular language",
        type: "content",
        blankAtLevel: 2,
      },
      { text: ". The regular universe is ", type: "content", blankAtLevel: 3 },
      { text: "binary opposite-neutral", type: "content", blankAtLevel: 2 },
      { text: ". Every constant has ", type: "content", blankAtLevel: 3 },
      {
        text: "one, and only one, logical content",
        type: "content",
        blankAtLevel: 2,
      },
      { text: " expressed through ", type: "content", blankAtLevel: 4 },
      { text: "one-dimensional structure", type: "content", blankAtLevel: 2 },
      {
        text: ". The simplest constant is a ",
        type: "content",
        blankAtLevel: 3,
      },
      { text: "Unit (One)", type: "content", blankAtLevel: 1 },
      {
        text: ", and every constant can be ",
        type: "content",
        blankAtLevel: 3,
      },
      {
        text: "reduced to instances of Unit",
        type: "content",
        blankAtLevel: 2,
      },
      { text: ".", type: "content", blankAtLevel: 4 },
    ],
  },

  // -------------------------------------------------------------------------
  // FRACTION (Àabọ̀)
  // -------------------------------------------------------------------------
  {
    id: "fraction",
    term: "Fraction",
    yoruba: "Àabọ̀",
    question: "Define Fraction (Àabọ̀)",
    fullAnswer:
      "Àabọ̀ (Fraction): A numerical-term with logical content less than a Unit (One). Gbogbo ohun tío tó Nǹkan ni à ń pé ní àabọ̀. Binary opposite is inherent in fraction computation; therefore, fraction is neither a regular instance nor constant state. Ìlàjí (Half, ½) is the default and largest rational àabọ̀. Zero (0) demarcates Constant from Fraction.",
    keyPoints: [
      "Numerical-term with logical content less than Unit (One)",
      "Binary opposite is inherent in fraction computation",
      "Neither regular instance nor constant state",
      "Ìlàjí (Half, ½) is default and largest rational fraction",
      "Zero (0) demarcates Constant from Fraction",
    ],
    tokens: [
      { text: "Àabọ̀", type: "anchor" },
      {
        text: " (Fraction): A numerical-term with logical content ",
        type: "content",
        blankAtLevel: 4,
      },
      { text: "less than a Unit (One)", type: "content", blankAtLevel: 1 },
      { text: ". ", type: "content", blankAtLevel: 4 },
      { text: "Gbogbo ohun tío tó Nǹkan ni à ń pé ní àabọ̀.", type: "anchor" },
      { text: " ", type: "content", blankAtLevel: 4 },
      { text: "Binary opposite", type: "content", blankAtLevel: 1 },
      {
        text: " is inherent in fraction computation; therefore, fraction is ",
        type: "content",
        blankAtLevel: 3,
      },
      {
        text: "neither a regular instance nor constant state",
        type: "content",
        blankAtLevel: 2,
      },
      { text: ". ", type: "content", blankAtLevel: 4 },
      { text: "Ìlàjí", type: "anchor" },
      { text: " (Half, ½) is the ", type: "content", blankAtLevel: 4 },
      {
        text: "default and largest rational",
        type: "content",
        blankAtLevel: 2,
      },
      { text: " àabọ̀. ", type: "content", blankAtLevel: 4 },
      {
        text: "Zero (0) demarcates Constant from Fraction",
        type: "content",
        blankAtLevel: 2,
      },
      { text: ".", type: "content", blankAtLevel: 4 },
    ],
  },

  // -------------------------------------------------------------------------
  // PROCESS (Ìlànọ̀n)
  // -------------------------------------------------------------------------
  {
    id: "process",
    term: "Process",
    yoruba: "Ìlànọ̀n",
    question: "Define Process (Ìlànọ̀n)",
    fullAnswer:
      "Ìlànọ̀n (A Process) comprises two aspects: (i) Temporal (Àkókó) and (ii) Spatial (Ara), connected through Ìdarí (Orientation). A process is prescribed and formulated with an instrument of language. Temporal Process = State + Transition (differentiated by Ìṣí — Interval). Spatial Process = Location + Displacement (differentiated by Àlàfò — Gap). Numerical Computation is concerned primarily with temporal processes, where numerical-terms express states and transitions.",
    keyPoints: [
      "Two aspects: Temporal (Àkókó) and Spatial (Ara)",
      "Connected through Ìdarí (Orientation)",
      "Prescribed with instrument of language",
      "Temporal: State + Transition (Ìṣí — Interval)",
      "Spatial: Location + Displacement (Àlàfò — Gap)",
      "Numerical Computation concerned primarily with temporal processes",
    ],
    tokens: [
      { text: "Ìlànọ̀n", type: "anchor" },
      {
        text: " (A Process) comprises two aspects: (i) ",
        type: "content",
        blankAtLevel: 4,
      },
      { text: "Temporal", type: "content", blankAtLevel: 1 },
      { text: " (", type: "content", blankAtLevel: 4 },
      { text: "Àkókó", type: "anchor" },
      { text: ") and (ii) ", type: "content", blankAtLevel: 4 },
      { text: "Spatial", type: "content", blankAtLevel: 1 },
      { text: " (", type: "content", blankAtLevel: 4 },
      { text: "Ara", type: "anchor" },
      { text: "), connected through ", type: "content", blankAtLevel: 4 },
      { text: "Ìdarí", type: "anchor" },
      {
        text: " (Orientation). A process is prescribed and formulated with an ",
        type: "content",
        blankAtLevel: 3,
      },
      { text: "instrument of language", type: "content", blankAtLevel: 2 },
      { text: ". Temporal Process = ", type: "content", blankAtLevel: 4 },
      { text: "State + Transition", type: "content", blankAtLevel: 1 },
      { text: " (differentiated by ", type: "content", blankAtLevel: 4 },
      { text: "Ìṣí", type: "anchor" },
      {
        text: " — Interval). Spatial Process = ",
        type: "content",
        blankAtLevel: 4,
      },
      { text: "Location + Displacement", type: "content", blankAtLevel: 1 },
      { text: " (differentiated by ", type: "content", blankAtLevel: 4 },
      { text: "Àlàfò", type: "anchor" },
      { text: " — Gap). ", type: "content", blankAtLevel: 4 },
      {
        text: "Numerical Computation is concerned primarily with temporal processes",
        type: "content",
        blankAtLevel: 2,
      },
      { text: ", where ", type: "content", blankAtLevel: 4 },
      {
        text: "numerical-terms express states and transitions",
        type: "content",
        blankAtLevel: 2,
      },
      { text: ".", type: "content", blankAtLevel: 4 },
    ],
  },

  // -------------------------------------------------------------------------
  // POLYNOMIAL
  // -------------------------------------------------------------------------
  {
    id: "polynomial",
    term: "Polynomial",
    yoruba: null,
    question: "Define Polynomial",
    fullAnswer:
      "Polynomial (from Greek: 'Many terms') is the Algebraic formulation of the relationship between variables, formulated with an instrument of context-neutral language. A polynomial of degree n is expressed as: Pₙ(x) = Σ aᵢ × xⁱ (where i = 0 to n). It comprises finite, totally countable instances of terms with unique 'Begin' (a₀x⁰) and 'End' (aₙxⁿ). Polynomial computation requires only Addition (+) and Multiplication (×) operations.",
    keyPoints: [
      "Greek: 'Many terms'",
      "Algebraic formulation of relationship between variables",
      "Instrument of context-neutral language",
      "Finite, totally countable instances of terms",
      "Unique Begin (a₀x⁰) and End (aₙxⁿ)",
      "Requires only Addition (+) and Multiplication (×)",
    ],
    tokens: [
      { text: "Polynomial (from Greek: ", type: "content", blankAtLevel: 4 },
      { text: "'Many terms'", type: "content", blankAtLevel: 1 },
      { text: ") is the ", type: "content", blankAtLevel: 4 },
      { text: "Algebraic formulation", type: "content", blankAtLevel: 1 },
      {
        text: " of the relationship between variables, formulated with an ",
        type: "content",
        blankAtLevel: 3,
      },
      {
        text: "instrument of context-neutral language",
        type: "content",
        blankAtLevel: 2,
      },
      {
        text: ". A polynomial of degree n is expressed as: ",
        type: "content",
        blankAtLevel: 4,
      },
      { text: "Pₙ(x) = Σ aᵢ × xⁱ (where i = 0 to n)", type: "anchor" },
      { text: ". It comprises ", type: "content", blankAtLevel: 4 },
      {
        text: "finite, totally countable instances of terms",
        type: "content",
        blankAtLevel: 2,
      },
      { text: " with unique ", type: "content", blankAtLevel: 4 },
      { text: "Begin", type: "content", blankAtLevel: 1 },
      { text: " (", type: "content", blankAtLevel: 4 },
      { text: "a₀x⁰", type: "anchor" },
      { text: ") and ", type: "content", blankAtLevel: 4 },
      { text: "End", type: "content", blankAtLevel: 1 },
      { text: " (", type: "content", blankAtLevel: 4 },
      { text: "aₙxⁿ", type: "anchor" },
      {
        text: "). Polynomial computation requires only ",
        type: "content",
        blankAtLevel: 3,
      },
      {
        text: "Addition (+) and Multiplication (×)",
        type: "content",
        blankAtLevel: 2,
      },
      { text: " operations.", type: "content", blankAtLevel: 4 },
    ],
  },

  // -------------------------------------------------------------------------
  // ALGORITHM
  // -------------------------------------------------------------------------
  {
    id: "algorithm",
    term: "Algorithm",
    yoruba: null,
    question: "Define Algorithm",
    fullAnswer:
      "An Algorithm is a prescribed, finite, and stepwise formulation for reducing the mental activity of computing into computation through a deductive process. Ìwọ̀n (Quantity) is simplified and reduced into expression through an Algorithmic and Deductive process. An algorithm is characterised by: finiteness (totally countable steps with unique Begin and End), definiteness (each step precisely prescribed), valid input, desired output, and effectiveness.",
    keyPoints: [
      "Prescribed, finite, and stepwise formulation",
      "Reduces computing into computation",
      "Deductive process",
      "Finiteness: totally countable steps with unique Begin and End",
      "Definiteness: each step precisely prescribed",
      "Valid input, desired output, effectiveness",
    ],
    tokens: [
      { text: "An Algorithm is a ", type: "content", blankAtLevel: 4 },
      {
        text: "prescribed, finite, and stepwise formulation",
        type: "content",
        blankAtLevel: 1,
      },
      {
        text: " for reducing the mental activity of computing into computation through a ",
        type: "content",
        blankAtLevel: 3,
      },
      { text: "deductive process", type: "content", blankAtLevel: 1 },
      { text: ". ", type: "content", blankAtLevel: 4 },
      { text: "Ìwọ̀n", type: "anchor" },
      {
        text: " (Quantity) is simplified and reduced into expression through an Algorithmic and Deductive process. An algorithm is characterised by: ",
        type: "content",
        blankAtLevel: 3,
      },
      { text: "finiteness", type: "content", blankAtLevel: 1 },
      {
        text: " (totally countable steps with unique Begin and End), ",
        type: "content",
        blankAtLevel: 3,
      },
      { text: "definiteness", type: "content", blankAtLevel: 1 },
      {
        text: " (each step precisely prescribed), ",
        type: "content",
        blankAtLevel: 3,
      },
      { text: "valid input", type: "content", blankAtLevel: 2 },
      { text: ", ", type: "content", blankAtLevel: 4 },
      { text: "desired output", type: "content", blankAtLevel: 2 },
      { text: ", and ", type: "content", blankAtLevel: 4 },
      { text: "effectiveness", type: "content", blankAtLevel: 2 },
      { text: ".", type: "content", blankAtLevel: 4 },
    ],
  },
];

export default csc307Chapter1Questions;
