import { QuestionV2 } from "@/lib/quiz-types";

// Mock Exam C - 25-question timed practice set (60 minutes)
// Curated from the validated 480-question bank: in-scope chapters only
// (heat/wave equation, canonical/normal form, Bernoulli, linear operators,
// directional derivative, complex Fourier, and half-range series excluded
// per confirmation that these were never taught).
const mth302ExamPrepC: QuestionV2[] = [
  // originally mth302_ch1_029, Chapter 1
  {
    id: "mth302_ch1_029",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which description fits a quasilinear PDE?",
    options: [
      "The highest derivatives appear linearly, but their coefficients may depend on $x$, $y$, and $u$",
      "The highest derivatives themselves appear raised to powers greater than one, or multiplied by one another",
      "Every coefficient depends only on the independent variables",
      "The unknown function is absent from the equation entirely"
    ],
    correctAnswer: 0,
    explanation: "In a quasilinear PDE the highest derivatives enter linearly while their coefficients are allowed to involve $x$, $y$, $u$ and lower derivatives, as in $uu_x + u_y = 0$.\n\nHighest derivatives raised to powers greater than one describes a fully nonlinear equation instead.\n\nCoefficients depending only on the independent variables is the stricter requirement that characterises linear and semilinear equations.\n\nThe unknown function being absent would leave no PDE to classify."
  },
  // originally mth302_ch1_040, Chapter 1
  {
    id: "mth302_ch1_040",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is the degree of $y'' + e^{y'} = 0$?",
    options: [
      "Not defined",
      "$1$",
      "$2$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "Degree is defined only when the equation is polynomial in its derivatives, and $e^{y'}$ can never be reduced to a polynomial in $y'$, so the degree is not defined.\n\n$1$ assumes the highest derivative sits in a polynomial expression, which the exponential prevents.\n\n$2$ has no basis in the equation as written.\n\n$0$ would indicate no derivative at all, contradicting the presence of $y''$."
  },
  // originally mth302_ch2_022, Chapter 2
  {
    id: "mth302_ch2_022",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Is $(2xy + 3)\\,dx + (x^2 + 4y)\\,dy = 0$ exact?",
    options: [
      "Yes, since $M_y = 2x = N_x$",
      "No, because $M$ contains a constant term while $N$ does not contain one",
      "Yes, but only after multiplying the whole equation by a suitable factor $\\mu(x)$",
      "No, because the two coefficient functions have different total degrees"
    ],
    correctAnswer: 0,
    explanation: "With $M = 2xy + 3$ and $N = x^2 + 4y$ we get $M_y = 2x$ and $N_x = 2x$, so the test $M_y = N_x$ is satisfied and the equation is exact as it stands.\n\nThe presence of a constant term in $M$ has no bearing on the exactness test, which compares partial derivatives.\n\nNo integrating factor is needed, precisely because the equation already passes the test.\n\nComparing total degrees is not the exactness criterion at all."
  },
  // originally mth302_ch2_001, Chapter 2
  {
    id: "mth302_ch2_001",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the integrating factor of $xy' + 2y = x^3$?",
    options: [
      "$e^{2x}$",
      "$x^2$",
      "$x^{-2}$",
      "$e^{x^2}$"
    ],
    correctAnswer: 1,
    explanation: "Standardizing first gives $y' + \\dfrac{2}{x}y = x^2$, so $P = \\dfrac{2}{x}$ and the integrating factor is $e^{\\int 2\\,dx/x} = e^{2\\ln x} = x^2$.\n\n$e^{2x}$ comes from using $P = 2$ straight from the unstandardized equation instead of dividing through by $x$ first, which is the most common error in this topic.\n\n$x^{-2}$ and $e^{x^2}$ do not follow from correctly integrating $P = 2/x$."
  },
  // originally mth302_ch3_024, Chapter 3
  {
    id: "mth302_ch3_024",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Continuity of $f$ on $R$ guarantees which of the following?",
    options: [
      "Existence but not uniqueness",
      "Uniqueness but not existence in general",
      "Both existence and uniqueness of the solution",
      "Neither existence nor uniqueness of the solution"
    ],
    correctAnswer: 0,
    explanation: "Continuity is exactly the hypothesis of the existence theorem, and the example $y' = \\tfrac{3}{2}y^{1/3}$ with $y(0) = 0$ shows it cannot deliver uniqueness.\n\nUniqueness without existence is impossible, since a unique solution is in particular a solution.\n\nBoth conclusions require the additional condition on $f_y$.\n\nDenying existence contradicts the existence theorem itself."
  },
  // originally mth302_ch3_027, Chapter 3
  {
    id: "mth302_ch3_027",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which statement about the converse implications is correct?",
    options: [
      "None of the arrows in the chain reverses",
      "Lipschitz always implies differentiability",
      "Continuity always implies a Lipschitz bound",
      "All of the arrows reverse whenever the functions involved are bounded"
    ],
    correctAnswer: 0,
    explanation: "Each implication in the chain is strict, with $|y|$ blocking the reverse of one arrow and $y^{1/3}$ blocking the other.\n\nThe absolute value is Lipschitz yet not differentiable at the origin.\n\nThe cube root is continuous yet not Lipschitz near the origin.\n\nBoundedness does not repair either counterexample, since both functions are bounded on suitable intervals."
  },
  // originally mth302_ch4_032, Chapter 4
  {
    id: "mth302_ch4_032",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the Wronskian of $y_1 = e^{x}$ and $y_2 = e^{3x}$?",
    options: [
      "$2e^{4x}$",
      "$e^{4x}$ keeping only the first product",
      "$3e^{4x}$ discarding the second product entirely",
      "$-2e^{4x}$ with the determinant order reversed"
    ],
    correctAnswer: 0,
    explanation: "Computing $y_1y_2' - y_1'y_2 = e^{x}\\cdot 3e^{3x} - e^{x}e^{3x} = 3e^{4x} - e^{4x} = 2e^{4x}$.\n\nOmitting the subtraction of the second product leaves only $e^{4x}$.\n\nTaking $3e^{4x}$ keeps the first product and discards the second entirely.\n\nThe negative value reverses the order of the two terms in the determinant."
  },
  // originally mth302_ch4_001, Chapter 4
  {
    id: "mth302_ch4_001",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the Wronskian of $y_1 = e^{-x}$ and $y_2 = e^{-2x}$?",
    options: [
      "$e^{-3x}$",
      "$-e^{-3x}$",
      "$-3e^{-3x}$",
      "$0$"
    ],
    correctAnswer: 1,
    explanation: "$W = y_1y_2' - y_1'y_2 = e^{-x}(-2e^{-2x}) - (-e^{-x})(e^{-2x}) = -2e^{-3x} + e^{-3x} = -e^{-3x}$. Since this is never zero, $y_1$ and $y_2$ are linearly independent.\n\n$e^{-3x}$ has the correct magnitude but the wrong sign, a common slip when combining the two terms.\n\n$-3e^{-3x}$ results from mishandling the coefficients during combination.\n\n$0$ would only occur if $y_1$ and $y_2$ were linearly dependent, which they are not."
  },
  // originally mth302_ch4_034, Chapter 4
  {
    id: "mth302_ch4_034",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For $y'' + 4y' + 4y = 0$, what are the characteristic roots?",
    options: [
      "$r = -2$ repeated",
      "$r = 2$ repeated",
      "$r = -2$ and $r = 2$",
      "$r = -4$ and $r = -1$"
    ],
    correctAnswer: 0,
    explanation: "The characteristic equation $r^2 + 4r + 4 = (r + 2)^2 = 0$ has the single root $-2$ occurring twice.\n\nA positive repeated root would come from $r^2 - 4r + 4 = 0$.\n\nA pair of opposite roots would require the coefficient of $r$ to vanish.\n\nThe values $-4$ and $-1$ multiply to $4$ but sum to $-5$, not $-4$."
  },
  // originally mth302_ch5_037, Chapter 5
  {
    id: "mth302_ch5_037",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Which method should be used for $y'' + y = \\sec x$?",
    options: [
      "Variation of parameters",
      "Undetermined coefficients",
      "Separation of variables",
      "An integrating factor"
    ],
    correctAnswer: 0,
    explanation: "The secant lies outside the exponential, polynomial and trigonometric family, so only variation of parameters applies.\n\nUndetermined coefficients cannot handle a forcing term whose derivatives never close into a finite family.\n\nSeparation of variables is a first-order technique.\n\nIntegrating factors belong to first-order linear equations."
  },
  // originally mth302_ch5_006, Chapter 5
  {
    id: "mth302_ch5_006",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the general solution of $y'' = e^x + \\sin x$?",
    options: [
      "$e^x - \\sin x + C_1x + C_2$",
      "$e^x + \\sin x + C_1x + C_2$",
      "$e^x - \\cos x + C_1x + C_2$",
      "$e^x - \\sin x + C_1$"
    ],
    correctAnswer: 0,
    explanation: "Setting $p = y'$ gives $p' = e^x + \\sin x$, so $p = e^x - \\cos x + C_1$, and integrating once more gives $y = e^x - \\sin x + C_1x + C_2$, since the integral of $-\\cos x$ is $-\\sin x$.\n\n$e^x + \\sin x + C_1x + C_2$ uses the wrong sign on the sine term.\n\n$e^x - \\cos x + C_1x + C_2$ stops one integration too early, leaving $p$ rather than the fully integrated $y$.\n\n$e^x - \\sin x + C_1$ has only one arbitrary constant, which is impossible for a second-order equation that requires two."
  },
  // originally mth302_ch6_036, Chapter 6
  {
    id: "mth302_ch6_036",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $u_x + 2u_y = 0$, what is the general solution?",
    options: [
      "$u = F(2x - y)$",
      "$u = F(x - 2y)$",
      "$u = F(2x + y)$",
      "$u = Ce^{2x - y}$, offering a constant rather than an arbitrary function"
    ],
    correctAnswer: 0,
    explanation: "The characteristics satisfy $dy/dx = 2$, giving $2x - y = \\text{const}$, and since $c = 0$ the solution is constant along them, so $u = F(2x - y)$.\n\nThe combination $x - 2y$ comes from inverting the ratio.\n\nA plus sign contradicts integrating $dy = 2\\,dx$.\n\nA PDE requires an arbitrary function, not an arbitrary constant."
  },
  // originally mth302_ch6_008, Chapter 6
  {
    id: "mth302_ch6_008",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What is the general solution of $u_{xy} - 2u_x = 0$?",
    options: [
      "$u = e^{2y}A(x) + B(y)$",
      "$u = e^{-2y}A(x) + B(y)$",
      "$u = e^{2x}A(y) + B(x)$",
      "$u = 2yA(x) + B(y)$"
    ],
    correctAnswer: 0,
    explanation: "With $p = u_x$, the equation $p_y - 2p = 0$ gives $p = F(x)e^{2y}$, so $u = e^{2y}A(x) + B(y)$. The sign of the exponent follows the sign in the equation: $p_y = 2p$ means growth in $y$, not decay.\n\n$e^{-2y}A(x) + B(y)$ has the wrong sign in the exponent.\n\n$e^{2x}A(y) + B(x)$ mismatches which variable the exponential applies to.\n\n$2yA(x) + B(y)$ fails to exponentiate at all, treating the equation as if it were linear in $y$ rather than exponential."
  },
  // originally mth302_ch7_019, Chapter 7
  {
    id: "mth302_ch7_019",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $2u_{xx} - 2u_{xy} + 5u_{yy} = 0$ classified?",
    options: [
      "Elliptic",
      "Hyperbolic",
      "Parabolic, because the discriminant vanishes for these coefficients",
      "Elliptic only where $y > 0$ and hyperbolic elsewhere"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = (-2)^2 - 4(2)(5) = 4 - 40 = -36 < 0$, so the equation is elliptic.\n\nA positive discriminant would be needed for the hyperbolic case.\n\nA vanishing discriminant would be needed for the parabolic case.\n\nThe coefficients are constants, so the type cannot vary with position."
  },
  // originally mth302_ch7_014, Chapter 7
  {
    id: "mth302_ch7_014",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "A second-order PDE with $\\Delta < 0$ is of which type?",
    options: [
      "Elliptic",
      "Hyperbolic",
      "Parabolic, which occurs only when the discriminant vanishes exactly",
      "Undetermined without knowing the lower-order coefficients as well"
    ],
    correctAnswer: 0,
    explanation: "A negative discriminant corresponds to the elliptic case, modelled by the Laplace equation.\n\nA positive discriminant gives the hyperbolic case.\n\nA vanishing discriminant gives the parabolic case.\n\nThe lower-order coefficients play no part in classification."
  },
  // originally mth302_ch9_014, Chapter 9
  {
    id: "mth302_ch9_014",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is true of the eigenvalues of a Sturm-Liouville system?",
    options: [
      "They are real, and non-negative under the usual sign conditions",
      "They are complex in general, since the auxiliary roots are imaginary",
      "They form a finite set determined by the interval length",
      "They may repeat, with several eigenfunctions sharing one value"
    ],
    correctAnswer: 0,
    explanation: "The eigenvalues are real and, under the usual sign conditions, non-negative, even though the auxiliary equation produces roots $m = \\pm i\\sqrt{\\lambda}$.\n\nThe imaginary auxiliary roots do not make the eigenvalues complex.\n\nThe eigenvalues form an infinite sequence tending to infinity.\n\nEach eigenvalue is simple, so repetition does not occur."
  },
  // originally mth302_ch9_026, Chapter 9
  {
    id: "mth302_ch9_026",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "When may the weight be omitted from the orthogonality integral?",
    options: [
      "Only when $r \\equiv 1$",
      "Whenever the eigenvalues are distinct from one another",
      "Whenever the interval is symmetric about the origin",
      "Always"
    ],
    correctAnswer: 0,
    explanation: "The weight can be dropped only in the special case where it is identically one; otherwise it must be carried.\n\nDistinct eigenvalues are what make the integral vanish, not what removes the weight.\n\nSymmetry of the interval has no bearing on the weight.\n\nThe weight does not cancel and omitting it is a standard error."
  },
  // originally mth302_ch10_007, Chapter 10
  {
    id: "mth302_ch10_007",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the value of $B(4, 3)$?",
    options: [
      "$1/60$",
      "$1/12$",
      "$1/120$",
      "$1/30$"
    ],
    correctAnswer: 0,
    explanation: "Using $B(4,3) = \\dfrac{\\Gamma(4)\\Gamma(3)}{\\Gamma(7)} = \\dfrac{3! \\cdot 2!}{6!} = \\dfrac{6 \\times 2}{720} = \\dfrac{1}{60}$, which agrees with computing the reduction formula step by step down to $2B(2,1) = 1/2$.\n\n$1/12$, $1/120$, and $1/30$ do not match the correct factorial computation $3! \\cdot 2!/6!$."
  },
  // originally mth302_ch10_001, Chapter 10
  {
    id: "mth302_ch10_001",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the value of $\\Gamma(1/2)$?",
    options: [
      "$\\pi$",
      "$\\sqrt{\\pi}$",
      "$\\sqrt{\\pi}/2$",
      "$2\\sqrt{\\pi}$"
    ],
    correctAnswer: 1,
    explanation: "Substituting $t = u^2$ gives $\\Gamma(1/2) = 2\\displaystyle\\int_0^\\infty e^{-u^2}\\,du$, which equals $2 \\cdot \\sqrt{\\pi}/2$, using the polar-coordinate evaluation of that Gaussian integral, giving $\\Gamma(1/2) = \\sqrt{\\pi}$.\n\n$\\pi$ omits the square root, mistaking the squared value for the answer itself.\n\n$\\sqrt{\\pi}/2$ is actually the value of $\\int_0^\\infty e^{-u^2}\\,du$ on its own, before the factor of $2$ supplied by the substitution is applied.\n\n$2\\sqrt{\\pi}$ applies the factor of $2$ twice instead of once."
  },
  // originally mth302_ch10_002, Chapter 10
  {
    id: "mth302_ch10_002",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the value of $\\Gamma(7/2)$?",
    options: [
      "$15\\sqrt{\\pi}/8$",
      "$3\\sqrt{\\pi}/4$",
      "$5\\sqrt{\\pi}/2$",
      "$105\\sqrt{\\pi}/16$"
    ],
    correctAnswer: 0,
    explanation: "Applying the recurrence $\\Gamma(x+1) = x\\Gamma(x)$ repeatedly gives $\\Gamma(7/2) = \\dfrac{5}{2}\\cdot\\dfrac{3}{2}\\cdot\\dfrac{1}{2}\\Gamma(1/2) = \\dfrac{15}{8}\\sqrt{\\pi}$.\n\n$3\\sqrt{\\pi}/4$ is actually the value of $\\Gamma(3/2)$, one recurrence step short of the target.\n\n$5\\sqrt{\\pi}/2$ does not match any correct step in the recurrence chain from $\\Gamma(1/2)$.\n\n$105\\sqrt{\\pi}/16$ is actually the value of $\\Gamma(9/2)$, one recurrence step too far."
  },
  // originally mth302_ch11_025, Chapter 11
  {
    id: "mth302_ch11_025",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is $P_n(-1)$?",
    options: [
      "$(-1)^n$",
      "$1$ for every $n$, as at the other endpoint",
      "$-1$ for every $n$, regardless of parity",
      "$0$ for odd $n$ and $1$ for even $n$"
    ],
    correctAnswer: 0,
    explanation: "At $x = -1$ the generating function becomes $\\dfrac{1}{1 + t} = \\sum(-1)^nt^n$, giving $P_n(-1) = (-1)^n$.\n\nA constant value of one holds at $x = +1$, not at $x = -1$.\n\nA constant value of $-1$ fails for even $n$.\n\nThe polynomials do not vanish at the endpoint for odd $n$; they equal $-1$."
  },
  // originally mth302_ch11_001, Chapter 11
  {
    id: "mth302_ch11_001",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the Legendre polynomial $P_2(x)$?",
    options: [
      "$(3x^2 - 1)/2$",
      "$(3x^2 + 1)/2$",
      "$(5x^2 - 3)/2$",
      "$3x^2 - 1$"
    ],
    correctAnswer: 0,
    explanation: "By Rodrigues' formula, $P_2 = \\dfrac{1}{8}\\dfrac{d^2}{dx^2}(x^2-1)^2$, which works out to $\\dfrac{12x^2-4}{8} = \\dfrac{3x^2-1}{2}$. An instant check is that $P_2(1)$ must equal $1$, and $\\dfrac{3-1}{2} = 1$ confirms this while immediately ruling out the options with a plus sign or a different leading coefficient.\n\n$(3x^2+1)/2$ has the wrong sign on the constant term and fails the check $P_2(1) = 1$.\n\n$(5x^2-3)/2$ uses coefficients that belong to $P_3$ rather than $P_2$.\n\n$3x^2 - 1$ omits the necessary division by $2$, so it fails the normalization check $P_2(1) = 1$."
  },
  // originally mth302_ch12_036, Chapter 12
  {
    id: "mth302_ch12_036",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "What is the fundamental period of a periodic function?",
    options: [
      "The smallest positive period",
      "The largest period the function possesses",
      "The average spacing between successive maxima",
      "Any interval over which the function repeats"
    ],
    correctAnswer: 0,
    explanation: "Every integer multiple of a period is again a period, so the fundamental period is defined as the smallest positive one.\n\nNo largest period exists, since multiples grow without bound.\n\nSpacing between maxima can differ from the period for a general profile.\n\nAny repeating interval is a period, but not necessarily the fundamental one."
  },
  // originally mth302_ch12_028, Chapter 12
  {
    id: "mth302_ch12_028",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "What is the formula for $b_n$ for a function of period $2L$?",
    options: [
      "$\\dfrac{1}{L}\\displaystyle\\int_{-L}^{L}f\\sin\\dfrac{n\\pi x}{L}\\,dx$",
      "$\\dfrac{1}{2L}\\displaystyle\\int_{-L}^{L}f\\sin\\dfrac{n\\pi x}{L}\\,dx$, halving the prefactor",
      "$\\dfrac{1}{L}\\displaystyle\\int_{-L}^{L}f\\cos\\dfrac{n\\pi x}{L}\\,dx$",
      "$\\dfrac{1}{\\pi}\\displaystyle\\int_{-L}^{L}f\\sin\\dfrac{n\\pi x}{L}\\,dx$"
    ],
    correctAnswer: 0,
    explanation: "Rescaling the period-$2\\pi$ formulas by $v = \\pi x/L$ replaces the prefactor $1/\\pi$ by $1/L$ and the harmonic $\\sin nx$ by $\\sin(n\\pi x/L)$.\n\nHalving the prefactor belongs to a different normalisation.\n\nUsing the cosine gives $a_n$.\n\nRetaining $\\pi$ in the prefactor fails to rescale consistently."
  },
  // originally mth302_ch12_014, Chapter 12
  {
    id: "mth302_ch12_014",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "For $y = 6\\sin\\tfrac{2}{3}x$, what are the amplitude and period?",
    options: [
      "Amplitude $6$, period $3\\pi$",
      "Amplitude $6$, period $\\dfrac{2\\pi}{3}$, dividing by the reciprocal",
      "Amplitude $\\tfrac{2}{3}$, period $6$, exchanging the two quantities",
      "Amplitude $3$, period $2\\pi$, halving the amplitude"
    ],
    correctAnswer: 0,
    explanation: "The amplitude is the multiplier $6$, and the period is $\\dfrac{2\\pi}{2/3} = 3\\pi$.\n\nDividing by $3/2$ rather than by $2/3$ inverts the frequency.\n\nThe amplitude and frequency cannot be exchanged.\n\nHalving the amplitude misreads the multiplier."
  },
];

export default mth302ExamPrepC;
