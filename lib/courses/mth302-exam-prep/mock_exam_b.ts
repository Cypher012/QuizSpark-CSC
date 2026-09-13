import { QuestionV2 } from "@/lib/quiz-types";

// Mock Exam B - 25-question timed practice set (60 minutes)
// Curated from the validated 480-question bank: in-scope chapters only
// (heat/wave equation, canonical/normal form, Bernoulli, linear operators,
// directional derivative, complex Fourier, and half-range series excluded
// per confirmation that these were never taught).
const mth302ExamPrepB: QuestionV2[] = [
  // originally mth302_ch1_010, Chapter 1
  {
    id: "mth302_ch1_010",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Which of the following PDEs is linear?",
    options: [
      "$uu_x + u_y = 0$, in which the unknown multiplies its own derivative",
      "$u_x u_y + u = 0$",
      "$xu_x + yu_y + u = e^x$",
      "$u_{xx} + u^2 = 0$"
    ],
    correctAnswer: 2,
    explanation: "In $xu_x + yu_y + u = e^x$, the unknown and its derivatives all appear to the first power, are never multiplied together, and the coefficients $x$ and $y$ involve only the independent variables, satisfying every condition for linearity; the forcing term $e^x$ does not disturb this.\n\n$uu_x + u_y = 0$ fails because $u_x$ is multiplied by $u$.\n\n$u_x u_y + u = 0$ fails because two first derivatives are multiplied together.\n\n$u_{xx} + u^2 = 0$ is semilinear rather than linear because of the $u^2$ term."
  },
  // originally mth302_ch1_021, Chapter 1
  {
    id: "mth302_ch1_021",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "How is $y'' + \\sin y = 0$ classified?",
    options: [
      "Linear, because the highest derivative $y''$ appears to the first power throughout the equation",
      "Nonlinear, because $\\sin y$ is a nonlinear function of $y$",
      "Linear, because there is no forcing term",
      "Linear with variable coefficients"
    ],
    correctAnswer: 1,
    explanation: "Linearity requires the unknown $y$ itself to enter only through a first-power term with coefficients in $x$, and $\\sin y$ is a nonlinear function of the unknown, so the equation is nonlinear.\n\nThe fact that $y''$ appears to the first power is not sufficient, since linearity constrains how $y$ appears in every term, not just the highest one.\n\nHaving no forcing term makes the equation homogeneous, which is independent of linearity.\n\nThere are no variable coefficients here; the offending term is a nonlinear function of $y$."
  },
  // originally mth302_ch2_009, Chapter 2
  {
    id: "mth302_ch2_009",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $y' = y\\tan x$?",
    options: [
      "$y = C\\cos x$",
      "$y = C\\sec x$",
      "$y = C\\sin x$",
      "$y = C\\tan x$"
    ],
    correctAnswer: 1,
    explanation: "Separating gives $\\dfrac{dy}{y} = \\tan x\\,dx$, so $\\ln|y| = -\\ln|\\cos x| + C$, and exponentiating gives $y = C/\\cos x = C\\sec x$.\n\n$y = C\\cos x$ results from dropping the minus sign that arises from the integral of $\\tan x$, which equals $-\\ln|\\cos x|$.\n\n$y = C\\sin x$ and $y = C\\tan x$ do not follow from integrating $\\tan x$ correctly."
  },
  // originally mth302_ch2_020, Chapter 2
  {
    id: "mth302_ch2_020",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the integrating factor of $y' + 3y = x$?",
    options: [
      "$e^{3x}$",
      "$e^{x^2/2}$",
      "$3e^{x}$",
      "$e^{-3x}$"
    ],
    correctAnswer: 0,
    explanation: "Here $P(x) = 3$, so $\\int P\\,dx = 3x$ and $\\mu = e^{3x}$.\n\nIntegrating the right-hand side confuses $Q$ with $P$; the forcing term never enters the integrating factor.\n\nMultiplying the coefficient by an exponential is not the construction, since $P$ belongs inside the exponent.\n\nThe negative exponent would fail the defining relation $\\mu' = \\mu P$."
  },
  // originally mth302_ch3_022, Chapter 3
  {
    id: "mth302_ch3_022",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Why is $f(y) = y^{1/3}$ not Lipschitz near $y = 0$?",
    options: [
      "Its derivative is unbounded as $y$ approaches $0$",
      "It is discontinuous at $y = 0$",
      "It fails to be defined at $y = 0$",
      "It is bounded but changes sign at $0$"
    ],
    correctAnswer: 0,
    explanation: "The derivative $\\tfrac{1}{3}y^{-2/3}$ grows without bound as $y$ approaches $0$, so no single constant $L$ can dominate the difference quotient near the origin.\n\nThe cube root is continuous at $0$, so discontinuity is not the obstruction.\n\nIt is defined at $0$, taking the value $0$.\n\nChanging sign is irrelevant to whether a Lipschitz bound exists."
  },
  // originally mth302_ch3_014, Chapter 3
  {
    id: "mth302_ch3_014",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "The function $f(y) = |y|$ illustrates which situation?",
    options: [
      "Lipschitz but not differentiable at $0$",
      "Differentiable but not Lipschitz at the origin $0$",
      "Continuous but not Lipschitz in any neighbourhood of $0$",
      "Neither continuous nor Lipschitz at $0$"
    ],
    correctAnswer: 0,
    explanation: "The absolute value satisfies $||y_2| - |y_1|| \\leq |y_2 - y_1|$, so it is Lipschitz with $L = 1$, yet it has a corner at $0$ and so fails to be differentiable there.\n\nIt is not differentiable at $0$, so calling it differentiable there is wrong.\n\nIt is Lipschitz, so describing it as merely continuous understates what it satisfies.\n\nIt is certainly continuous everywhere, so denying continuity is false."
  },
  // originally mth302_ch4_023, Chapter 4
  {
    id: "mth302_ch4_023",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $y'' - 3y' + 2y = 0$?",
    options: [
      "$y = C_1e^{x} + C_2e^{2x}$",
      "$y = C_1e^{-x} + C_2e^{-2x}$",
      "$y = (C_1 + C_2x)e^{x}$",
      "$y = e^{x}(C_1\\cos 2x + C_2\\sin 2x)$"
    ],
    correctAnswer: 0,
    explanation: "The characteristic equation $(r - 1)(r - 2) = 0$ has distinct real roots $1$ and $2$, giving $y = C_1e^{x} + C_2e^{2x}$.\n\nNegative exponents would follow from roots $-1$ and $-2$, which factorising does not produce.\n\nThe repeated-root form applies only when the two roots coincide.\n\nTrigonometric factors arise only for complex roots, and these roots are real."
  },
  // originally mth302_ch4_009, Chapter 4
  {
    id: "mth302_ch4_009",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the Wronskian of $y_1 = x$ and $y_2 = x\\ln x$?",
    options: [
      "$x\\ln x$",
      "$\\ln x$",
      "$1$",
      "$x$"
    ],
    correctAnswer: 3,
    explanation: "Direct computation gives $W = x(\\ln x + 1) - 1 \\cdot x\\ln x = x$. This is consistent with applying Abel's theorem to $y'' - \\dfrac{1}{x}y' + \\dfrac{1}{x^2}y = 0$, which gives $W = Ce^{\\ln x} = Cx$.\n\n$x\\ln x$ and $\\ln x$ do not match either the direct computation or the Abel's theorem result.\n\n$1$ omits the factor of $x$ that both methods produce."
  },
  // originally mth302_ch4_016, Chapter 4
  {
    id: "mth302_ch4_016",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "The Wronskian $W(y_1, y_2)$ is given by which expression?",
    options: [
      "$y_1y_2' - y_1'y_2$",
      "$y_1y_2' + y_1'y_2$, the sum of the two cross products",
      "$y_1'y_2' - y_1y_2$, formed from the derivatives first",
      "$y_1y_2 - y_1'y_2'$, subtracting the product of derivatives"
    ],
    correctAnswer: 0,
    explanation: "The Wronskian is the determinant of the matrix whose rows are the functions and their derivatives, giving $y_1y_2' - y_1'y_2$.\n\nUsing a sum rather than a difference discards the determinant's alternating sign.\n\nPairing the two derivatives against the two functions is not the determinant of that matrix.\n\nSubtracting the product of derivatives from the product of functions inverts the roles entirely."
  },
  // originally mth302_ch5_005, Chapter 5
  {
    id: "mth302_ch5_005",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $y'' - y' = e^{2x}$?",
    options: [
      "$C_1 + C_2e^x + \\dfrac{1}{2}e^{2x}$",
      "$C_1 + C_2e^x + e^{2x}$ without the factor one half",
      "$C_1e^x + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$ with the wrong complementary function",
      "$C_1 + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$"
    ],
    correctAnswer: 0,
    explanation: "The characteristic equation $r^2 - r = 0$ gives roots $r = 0$ and $r = 1$, so $y_c = C_1 + C_2e^x$. Trying $y_p = Ae^{2x}$ gives $4A - 2A = 1$, so $A = 1/2$, and since $r = 2$ is not a characteristic root there is no resonance to worry about.\n\n$C_1 + C_2e^x + e^{2x}$ omits the coefficient $1/2$ found from substitution.\n\n$C_1e^x + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$ uses the wrong pair of roots for the complementary function.\n\n$C_1 + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$ uses the wrong sign on the second exponent in the complementary function."
  },
  // originally mth302_ch5_004, Chapter 5
  {
    id: "mth302_ch5_004",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Which method is appropriate for solving $y'' + y = \\tan x$ on the interval $0 < x < \\pi/2$?",
    options: [
      "Undetermined coefficients, which needs a closed family",
      "The characteristic equation alone",
      "Separation of variables",
      "Variation of parameters"
    ],
    correctAnswer: 3,
    explanation: "$\\tan x$ is not an exponential, polynomial, sine, cosine, or a finite combination of these, so it has no finite trial family and undetermined coefficients cannot be applied. Variation of parameters works for any continuous forcing term, making it the appropriate method here.\n\nUndetermined coefficients fails precisely because $\\tan x$ falls outside the finite set of forcing functions that method can handle.\n\nThe characteristic equation alone only produces the complementary solution, not a particular solution for a nonhomogeneous equation.\n\nSeparation of variables applies to certain first-order equations, not to this linear second-order nonhomogeneous equation."
  },
  // originally mth302_ch6_006, Chapter 6
  {
    id: "mth302_ch6_006",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $u_{xy} + u_x = 0$?",
    options: [
      "$u = e^{-y}A(x) + B(y)$",
      "$u = e^{-x}A(y) + B(x)$",
      "$u = e^{-y}A(x)$",
      "$u = A(x) + B(y)$"
    ],
    correctAnswer: 0,
    explanation: "Setting $p = u_x$ turns the equation into $p_y + p = 0$, giving $p = F(x)e^{-y}$; integrating in $x$ then gives $u = e^{-y}A(x) + B(y)$, where $A' = F$. Every second-order PDE requires two arbitrary functions in its general solution.\n\n$e^{-x}A(y) + B(x)$ mismatches which variable the exponential decay applies to.\n\n$e^{-y}A(x)$ contains only one arbitrary function, which is insufficient for a second-order PDE.\n\n$A(x) + B(y)$ omits the exponential factor entirely, ignoring the $u_x$ term in the original equation."
  },
  // originally mth302_ch6_032, Chapter 6
  {
    id: "mth302_ch6_032",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "The transformed equation takes which general shape?",
    options: [
      "$w_\\xi + h(\\xi,\\eta)w = F(\\xi,\\eta)$",
      "$w_\\eta + h(\\xi,\\eta)w = F(\\xi,\\eta)$",
      "$w_{\\xi\\eta} + h(\\xi,\\eta)w = F(\\xi,\\eta)$",
      "$w_\\xi + w_\\eta = F(\\xi,\\eta)$, keeping both first derivatives present"
    ],
    correctAnswer: 0,
    explanation: "Eliminating the $w_\\eta$ term leaves a first-order equation in $\\xi$ alone, namely $w_\\xi + h w = F$.\n\nDifferentiating in $\\eta$ contradicts the choice that removed that term.\n\nA mixed second derivative cannot appear, since the original equation is first order.\n\nRetaining both derivatives defeats the purpose of the transformation."
  },
  // originally mth302_ch7_001, Chapter 7
  {
    id: "mth302_ch7_001",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "How is $u_{xx} + 6u_{xy} + 9u_{yy} = 0$ classified?",
    options: [
      "Elliptic",
      "Parabolic",
      "Hyperbolic",
      "Its type depends on $x$"
    ],
    correctAnswer: 1,
    explanation: "With $A = 1$, $B = 6$, $C = 9$, the discriminant $B^2 - 4AC = 36 - 36 = 0$, so the equation is parabolic. A perfect square in the second-order terms, since the operator is $(\\partial_x + 3\\partial_y)^2$ applied to $u$, is always parabolic.\n\nElliptic would require a negative discriminant, which is not the case here.\n\nHyperbolic would require a positive discriminant.\n\nIts type depends on $x$ is wrong since the coefficients here are constants, so the discriminant is the same at every point."
  },
  // originally mth302_ch7_020, Chapter 7
  {
    id: "mth302_ch7_020",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "How is $4u_{xx} - 4u_{xy} + u_{yy} = 0$ classified?",
    options: [
      "Parabolic",
      "Hyperbolic, because the mixed coefficient exceeds the other two in magnitude",
      "Elliptic",
      "Hyperbolic except along a single line where it is parabolic"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = (-4)^2 - 4(4)(1) = 16 - 16 = 0$, so the equation is parabolic.\n\nA positive discriminant would be required for the hyperbolic case.\n\nThe discriminant is zero rather than negative.\n\nWith constant coefficients the type is the same at every point."
  },
  // originally mth302_ch9_010, Chapter 8
  {
    id: "mth302_ch8_010",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What condition is imposed on the weight function $r(x)$?",
    options: [
      "$r(x) > 0$ on the interval",
      "$r(x) = 1$ throughout the interval considered",
      "$r(x) \\geq 0$, allowing it to vanish at interior points",
      "$r(x)$ is a polynomial of degree at most two"
    ],
    correctAnswer: 0,
    explanation: "The weight must be strictly positive on $[a, b]$, which is what makes the orthogonality relation meaningful.\n\nRequiring $r = 1$ describes only the unweighted special case.\n\nAllowing the weight to vanish would break the inner product it defines.\n\nNothing restricts the weight to polynomials."
  },
  // originally mth302_ch9_031, Chapter 8
  {
    id: "mth302_ch8_031",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "For the Neumann example, applying $y'(0) = 0$ forces what?",
    options: [
      "$A = 0$",
      "$B = 0$, removing the cosine rather than the sine",
      "$\\lambda = 1$, fixing the eigenvalue immediately",
      "$A = -B$, relating the two constants"
    ],
    correctAnswer: 0,
    explanation: "Differentiating gives $y'(0) = A\\sqrt{\\lambda}$, so a vanishing derivative at the left end forces $A = 0$ and leaves the cosine.\n\nRemoving the cosine would follow from a Dirichlet condition at that end.\n\nThe eigenvalue is not pinned down by this condition alone.\n\nNo relation between the constants is produced."
  },
  // originally mth302_ch10_018, Chapter 9
  {
    id: "mth302_ch9_018",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is $\\Gamma(3/2)$?",
    options: [
      "$\\dfrac{\\sqrt{\\pi}}{2}$",
      "$\\sqrt{\\pi}$",
      "$\\dfrac{3\\sqrt{\\pi}}{4}$, which is the value of $\\Gamma(5/2)$",
      "$\\dfrac{\\sqrt{\\pi}}{4}$, halving the correct value once too often"
    ],
    correctAnswer: 0,
    explanation: "Applying the recurrence, $\\Gamma(3/2) = \\tfrac{1}{2}\\Gamma(1/2) = \\dfrac{\\sqrt{\\pi}}{2}$.\n\nThe bare $\\sqrt{\\pi}$ is $\\Gamma(1/2)$, one step earlier.\n\nThe value $3\\sqrt{\\pi}/4$ is $\\Gamma(5/2)$, one step later.\n\nHalving again overshoots the recurrence."
  },
  // originally mth302_ch10_019, Chapter 9
  {
    id: "mth302_ch9_019",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is $\\Gamma(5/2)$?",
    options: [
      "$\\dfrac{3\\sqrt{\\pi}}{4}$",
      "$\\dfrac{\\sqrt{\\pi}}{2}$, which is the value of $\\Gamma(3/2)$ instead",
      "$\\dfrac{15\\sqrt{\\pi}}{8}$, which is the value of $\\Gamma(7/2)$",
      "$\\dfrac{5\\sqrt{\\pi}}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Using the recurrence twice, $\\Gamma(5/2) = \\tfrac{3}{2}\\cdot\\tfrac{1}{2}\\sqrt{\\pi} = \\dfrac{3\\sqrt{\\pi}}{4}$.\n\nThe value $\\sqrt{\\pi}/2$ is one step earlier.\n\nThe value $15\\sqrt{\\pi}/8$ is one step later.\n\nMultiplying by $5/2$ misapplies the recurrence, which uses the argument minus one."
  },
  // originally mth302_ch10_020, Chapter 9
  {
    id: "mth302_ch9_020",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is $\\Gamma(-1/2)$?",
    options: [
      "$-2\\sqrt{\\pi}$",
      "$2\\sqrt{\\pi}$",
      "$\\dfrac{4\\sqrt{\\pi}}{3}$, which is the value of $\\Gamma(-3/2)$",
      "Undefined, as at the negative integers"
    ],
    correctAnswer: 0,
    explanation: "Using $\\Gamma(x) = \\dfrac{\\Gamma(x + 1)}{x}$ with $x = -1/2$ gives $\\dfrac{\\Gamma(1/2)}{-1/2} = -2\\sqrt{\\pi}$.\n\nDropping the minus sign ignores the negative denominator.\n\nThe value $4\\sqrt{\\pi}/3$ belongs to $\\Gamma(-3/2)$.\n\nNegative half-integers are defined; only zero and the negative integers are not."
  },
  // originally mth302_ch11_037, Chapter 10
  {
    id: "mth302_ch10_037",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is $P_0(x)$?",
    options: [
      "$1$",
      "$x$",
      "$0$",
      "$\\tfrac{1}{2}$, halving the correct constant"
    ],
    correctAnswer: 0,
    explanation: "Rodrigues' formula with $n = 0$ gives the constant polynomial $1$, consistent with $P_0(1) = 1$.\n\nThe linear polynomial is $P_1$.\n\nThe zero polynomial would fail the normalisation.\n\nHalving would give $P_0(1) = 1/2$."
  },
  // originally mth302_ch11_039, Chapter 10
  {
    id: "mth302_ch10_039",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is $P_2(x)$?",
    options: [
      "$\\dfrac{3x^2 - 1}{2}$",
      "$\\dfrac{3x^2 + 1}{2}$",
      "$\\dfrac{5x^2 - 3}{2}$, from an incorrect recurrence step",
      "$3x^2 - 1$"
    ],
    correctAnswer: 0,
    explanation: "Rodrigues' formula gives $P_2(x) = \\dfrac{3x^2 - 1}{2}$, and substituting $x = 1$ gives $1$ as required.\n\nA plus sign would give $P_2(1) = 2$.\n\nThe third expression fails the check at $x = 1$.\n\nOmitting the division gives $P_2(1) = 2$."
  },
  // originally mth302_ch12_022, Chapter 11
  {
    id: "mth302_ch11_022",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "If $f$ is even, which coefficients vanish?",
    options: [
      "All the $b_n$",
      "All the $a_n$",
      "Only $a_0$, while the rest survive unchanged",
      "None of them, since parity does not affect the coefficients"
    ],
    correctAnswer: 0,
    explanation: "An even function is orthogonal to every sine on a symmetric interval, so $b_n = 0$ and the series is a pure cosine series plus the constant.\n\nKilling the cosines describes the odd case.\n\nThe constant term generally survives for an even function.\n\nParity is precisely what determines which family survives."
  },
  // originally mth302_ch12_021, Chapter 11
  {
    id: "mth302_ch11_021",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the Fourier series of that square wave?",
    options: [
      "$\\dfrac{4k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$",
      "$\\dfrac{4k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 2x}{2} + \\dfrac{\\sin 3x}{3} + \\cdots\\right)$, keeping every index",
      "$\\dfrac{4k}{\\pi}\\left(\\cos x + \\dfrac{\\cos 3x}{3} + \\cdots\\right)$, using cosines instead",
      "$\\dfrac{2k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\cdots\\right)$, halving the prefactor"
    ],
    correctAnswer: 0,
    explanation: "Only the odd sine harmonics survive, each with coefficient $\\dfrac{4k}{n\\pi}$.\n\nKeeping every index contradicts the vanishing even coefficients.\n\nCosines vanish because the function is odd.\n\nHalving the prefactor misstates the coefficients."
  },
  // originally mth302_ch12_003, Chapter 11
  {
    id: "mth302_ch11_003",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "For the square wave $f = -k$ on $(-\\pi, 0)$ and $f = k$ on $(0, \\pi)$, what is the coefficient $b_4$?",
    options: [
      "$4k/(4\\pi)$",
      "$k/\\pi$",
      "$0$",
      "$2k/\\pi$"
    ],
    correctAnswer: 2,
    explanation: "The formula $b_n$ is proportional to $(1 - \\cos n\\pi)$, which equals $1 - (-1)^n$, giving $0$ for every even $n$ and $2$ for every odd $n$. Since $n = 4$ is even, $b_4 = 0$, a direct consequence of the half-wave symmetry this square wave possesses.\n\n$4k/(4\\pi)$ and $k/\\pi$ both wrongly assign a nonzero value to an even-indexed coefficient.\n\n$2k/\\pi$ is the value that would apply to an odd-indexed coefficient, not the even $n = 4$ case."
  },
];

export default mth302ExamPrepB;
