import { QuestionV2 } from "@/lib/quiz-types";

// Mock Exam A - 25-question timed practice set (60 minutes)
// Curated from the validated 480-question bank: in-scope chapters only
// (heat/wave equation, canonical/normal form, Bernoulli, linear operators,
// directional derivative, complex Fourier, and half-range series excluded
// per confirmation that these were never taught).
const mth302ExamPrepA: QuestionV2[] = [
  // originally mth302_ch1_032, Chapter 1
  {
    id: "mth302_ch1_032",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which PDE is linear?",
    options: [
      "$4u_x + 2u_y + u = 0$",
      "$u_xu_y + u = 0$",
      "$uu_x + u_y = 0$",
      "$u_{xx} + u^2 = 0$"
    ],
    correctAnswer: 0,
    explanation: "In $4u_x + 2u_y + u = 0$ the unknown and its derivatives all appear to the first power, are never multiplied together, and the coefficients are constants, so the equation is linear.\n\n$u_xu_y + u = 0$ multiplies two derivatives together, which is not permitted.\n\n$uu_x + u_y = 0$ has the unknown multiplying its own derivative.\n\n$u_{xx} + u^2 = 0$ is semilinear rather than linear, because of the square on $u$."
  },
  // originally mth302_ch1_013, Chapter 1
  {
    id: "mth302_ch1_013",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is a differential equation?",
    options: [
      "An equation relating an unknown function to one or more of its derivatives",
      "An equation containing only algebraic powers of an unknown variable",
      "An equation whose solution is always a single numerical value",
      "An equation relating two or more independent variables in which no unknown function appears"
    ],
    correctAnswer: 0,
    explanation: "A differential equation relates an unknown function to one or more of its derivatives, as in $y' + 2y = e^x$ or $u_t = \\kappa u_{xx}$.\n\nAn equation containing only algebraic powers of an unknown variable is an ordinary algebraic equation, since no derivative appears in it.\n\nA solution of a differential equation is a function, not a single numerical value, so requiring a numerical solution misdescribes the whole subject.\n\nAn equation with no unknown function present cannot be a differential equation, because there is nothing to differentiate."
  },
  // originally mth302_ch2_010, Chapter 2
  {
    id: "mth302_ch2_010",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which of the following equations is not exact?",
    options: [
      "$(2xy + 3)\\,dx + (x^2 + 4y)\\,dy = 0$",
      "$(y^2 + 2x)\\,dx + 2xy\\,dy = 0$",
      "$(3xy + y^2)\\,dx + (x^2 + xy)\\,dy = 0$",
      "$(y + x)\\,dx + (x - y^2)\\,dy = 0$"
    ],
    correctAnswer: 2,
    explanation: "Applying $M_y = N_x$ to $(3xy + y^2)\\,dx + (x^2 + xy)\\,dy = 0$ gives $M_y = 3x + 2y$ against $N_x = 2x + y$, which are unequal, so this equation fails to be exact, even though it does admit an integrating factor.\n\n$(2xy + 3)\\,dx + (x^2 + 4y)\\,dy = 0$ gives $M_y = 2x = N_x$, so it is exact.\n\n$(y^2 + 2x)\\,dx + 2xy\\,dy = 0$ gives $M_y = 2y = N_x$, so it is exact.\n\n$(y + x)\\,dx + (x - y^2)\\,dy = 0$ gives $M_y = 1 = N_x$, so it is exact."
  },
  // originally mth302_ch2_028, Chapter 2
  {
    id: "mth302_ch2_028",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which of the following equations is separable?",
    options: [
      "$\\dfrac{dy}{dx} = x^2y$",
      "$\\dfrac{dy}{dx} = x + y$",
      "$\\dfrac{dy}{dx} = \\dfrac{x + y}{x - y}$",
      "$\\dfrac{dy}{dx} = \\sin(x + y)$"
    ],
    correctAnswer: 0,
    explanation: "The right-hand side $x^2y$ factors as a function of $x$ times a function of $y$, so the variables separate as $\\dfrac{dy}{y} = x^2\\,dx$.\n\nA sum $x + y$ cannot be written as such a product, so that equation is not separable.\n\nThe quotient $\\dfrac{x + y}{x - y}$ is homogeneous of degree zero rather than separable.\n\nA sum trapped inside a sine cannot be factored into a product of single-variable functions."
  },
  // originally mth302_ch3_013, Chapter 3
  {
    id: "mth302_ch3_013",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which chain of implications is correct?",
    options: [
      "Continuously differentiable implies Lipschitz implies continuous",
      "Continuous implies Lipschitz implies continuously differentiable, in that order",
      "Lipschitz implies continuously differentiable implies continuous",
      "Continuous implies continuously differentiable implies Lipschitz"
    ],
    correctAnswer: 0,
    explanation: "The correct ordering runs from the strongest condition to the weakest: continuous differentiability implies a Lipschitz condition, which in turn implies continuity, and no arrow reverses.\n\nStarting from continuity would claim every continuous function is Lipschitz, contradicted by $y^{1/3}$ near $0$.\n\nClaiming Lipschitz implies continuous differentiability is contradicted by $|y|$, which is Lipschitz but not differentiable at $0$.\n\nClaiming continuity implies continuous differentiability is false for the same reason."
  },
  // originally mth302_ch3_025, Chapter 3
  {
    id: "mth302_ch3_025",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "For $f(x, y) = 3y + \\sin x$, what is $f_y$?",
    options: [
      "$3$",
      "$\\cos x$",
      "$3 + \\cos x$",
      "$3y$"
    ],
    correctAnswer: 0,
    explanation: "Differentiating with respect to $y$ treats $\\sin x$ as a constant, leaving $f_y = 3$.\n\n$\\cos x$ is the derivative with respect to $x$, not $y$.\n\nAdding the two derivatives mixes partial derivatives in different variables.\n\nThe expression $3y$ is part of $f$ itself rather than its derivative in $y$."
  },
  // originally mth302_ch4_020, Chapter 4
  {
    id: "mth302_ch4_020",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "In Abel's formula the exponent carries which sign?",
    options: [
      "Negative, giving $e^{-\\int P\\,dx}$",
      "Positive, giving $e^{+\\int P\\,dx}$",
      "Negative only when $P$ is positive",
      "Whichever sign makes $W$ increasing"
    ],
    correctAnswer: 0,
    explanation: "The theorem gives $W = Ce^{-\\int P\\,dx}$ with a minus sign fixed in the exponent, which is why $P = -2/x$ produces $W = Cx^2$ rather than $Cx^{-2}$.\n\nA positive exponent is precisely the dropped-minus-sign slip that generates the reciprocal distractor.\n\nThe sign is fixed by the derivation and does not depend on the sign of $P$.\n\nThe behaviour of $W$ is a consequence of the formula, not a choice made to obtain it."
  },
  // originally mth302_ch4_005, Chapter 4
  {
    id: "mth302_ch4_005",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is the general solution of $y'' + 4y' + 4y = 0$?",
    options: [
      "$C_1e^{-2x} + C_2e^{2x}$",
      "$(C_1 + C_2x)e^{-2x}$",
      "$e^{-2x}(C_1\\cos 2x + C_2\\sin 2x)$",
      "$C_1e^{-2x} + C_2e^{-2x}$"
    ],
    correctAnswer: 1,
    explanation: "The characteristic equation $r^2 + 4r + 4 = (r + 2)^2 = 0$ has the repeated root $r = -2$, and a repeated root always requires the extra factor of $x$ on the second term, giving $(C_1 + C_2x)e^{-2x}$.\n\n$C_1e^{-2x} + C_2e^{2x}$ uses two distinct real roots, which does not match this repeated-root case.\n\n$e^{-2x}(C_1\\cos 2x + C_2\\sin 2x)$ is the form for complex conjugate roots, not a repeated real root.\n\n$C_1e^{-2x} + C_2e^{-2x}$ is not even a valid general solution, since both terms are the same function and collapse into a single constant times $e^{-2x}$."
  },
  // originally mth302_ch4_006, Chapter 4
  {
    id: "mth302_ch4_006",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is the general solution of $y'' + 2y' + 5y = 0$?",
    options: [
      "$e^{2x}(C_1\\cos x + C_2\\sin x)$",
      "$e^{-x}(C_1\\cos 2x + C_2\\sin 2x)$",
      "$e^{-2x}(C_1\\cos x + C_2\\sin x)$",
      "$C_1e^{-x} + C_2e^{5x}$"
    ],
    correctAnswer: 1,
    explanation: "The characteristic roots are $r = \\dfrac{-2 \\pm \\sqrt{4 - 20}}{2} = -1 \\pm 2i$, so the real part $-1$ gives the exponential decay factor $e^{-x}$ and the imaginary part $2$ gives the oscillation frequency, producing $e^{-x}(C_1\\cos 2x + C_2\\sin 2x)$.\n\n$e^{2x}(C_1\\cos x + C_2\\sin x)$ and $e^{-2x}(C_1\\cos x + C_2\\sin x)$ both swap the roles of the real part and imaginary part, a very common error.\n\n$C_1e^{-x} + C_2e^{5x}$ wrongly assumes two distinct real roots, but the roots here are complex."
  },
  // originally mth302_ch5_027, Chapter 5
  {
    id: "mth302_ch5_027",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is the general solution of $y'' - y = x^2$?",
    options: [
      "$y = Ae^{x} + Be^{-x} - x^2 - 2$",
      "$y = Ae^{x} + Be^{-x} + x^2 + 2$",
      "$y = A\\cos x + B\\sin x - x^2 - 2$",
      "$y = Ae^{x} + Be^{-x} - x^2$"
    ],
    correctAnswer: 0,
    explanation: "The complementary function is $Ae^{x} + Be^{-x}$ and the particular solution is $-x^2 - 2$, giving the stated sum.\n\nPositive signs on the polynomial part contradict the computed coefficients.\n\nTrigonometric terms would arise from $y'' + y = 0$, not $y'' - y = 0$.\n\nDropping the constant $-2$ leaves the constant terms unmatched."
  },
  // originally mth302_ch5_003, Chapter 5
  {
    id: "mth302_ch5_003",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is a particular solution of $y'' - y = x^2$?",
    options: [
      "$x^2$",
      "$-x^2 + 2$",
      "$-x^2 - 2$",
      "$x^2 + 2$"
    ],
    correctAnswer: 2,
    explanation: "Trying $y_p = ax^2 + bx + c$ gives $y_p'' - y_p = 2a - ax^2 - bx - c = x^2$, which requires $-a = 1$, $-b = 0$, and $2a - c = 0$, giving $a = -1$, $b = 0$, and $c = -2$, so $y_p = -x^2 - 2$. The constant term is forced by the second derivative $2a$, which is exactly why the full polynomial, not just the $ax^2$ term, must be tried.\n\n$x^2$ omits the required constant term entirely.\n\n$-x^2 + 2$ gets the sign of the constant term wrong.\n\n$x^2 + 2$ gets the sign of the leading term wrong."
  },
  // originally mth302_ch6_033, Chapter 6
  {
    id: "mth302_ch6_033",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Why must the Jacobian be nonzero on the domain?",
    options: [
      "So the change of variables is one-to-one there and can therefore be inverted",
      "So the transformed equation becomes homogeneous rather than nonhomogeneous",
      "So the characteristic curves intersect at exactly one point of the region",
      "So the coefficients of the original equation remain bounded everywhere"
    ],
    correctAnswer: 0,
    explanation: "A nonvanishing Jacobian is what guarantees the map from $(x,y)$ to $(\\xi,\\eta)$ is invertible, so the transformation can be undone.\n\nHomogeneity is unaffected by a change of variables.\n\nCharacteristics of the same family do not intersect, and the Jacobian is not about intersections.\n\nBoundedness of the coefficients is a separate continuity assumption."
  },
  // originally mth302_ch6_004, Chapter 6
  {
    id: "mth302_ch6_004",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is the general solution of $2u_x - 5u_y = 0$?",
    options: [
      "$u = F(5x + 2y)$",
      "$u = F(2x + 5y)$",
      "$u = F(5x - 2y)$",
      "$u = F(2x - 5y)$"
    ],
    correctAnswer: 0,
    explanation: "Here $\\dfrac{dy}{dx} = -\\dfrac{5}{2}$, so $2y = -5x + c$, which rearranges to $5x + 2y = $ constant, giving $u = F(5x + 2y)$. Verification: $u_x = 5F'$, $u_y = 2F'$, so $2(5F') - 5(2F') = 0$ as required. In general, for $au_x + bu_y = 0$ the solution is $u = F(bx - ay)$.\n\n$F(2x + 5y)$ swaps the coefficients incorrectly.\n\n$F(5x - 2y)$ and $F(2x - 5y)$ have the wrong sign between the terms."
  },
  // originally mth302_ch7_005, Chapter 7
  {
    id: "mth302_ch7_005",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How is $u_{xx} - 2u_{xy} = 0$ classified?",
    options: [
      "Parabolic",
      "Elliptic",
      "Hyperbolic",
      "Not classifiable"
    ],
    correctAnswer: 2,
    explanation: "With $A = 1$, $B = -2$, $C = 0$, the discriminant is $B^2 - 4AC = 4$, which is positive, so the equation is hyperbolic. Whenever $C$ equals $0$ with $B$ nonzero, the discriminant reduces to $B^2$, which is automatically positive, giving a hyperbolic classification.\n\nParabolic would require the discriminant to equal zero, which it does not here.\n\nElliptic would require a negative discriminant, the opposite of what is found.\n\nNot classifiable is wrong since $A$, $B$, and $C$ are well defined constants here, giving a definite discriminant value."
  },
  // originally mth302_ch7_036, Chapter 7
  {
    id: "mth302_ch7_036",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How is $u_{xx} - 2u_{xy} + u_{yy} = 0$ classified?",
    options: [
      "Parabolic",
      "Hyperbolic",
      "Elliptic",
      "Parabolic only along the line $y = x$"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = (-2)^2 - 4(1)(1) = 0$, so the equation is parabolic at every point.\n\nThe sign of $B$ is irrelevant because $B$ is squared.\n\nPositive outer coefficients do not by themselves force the elliptic case.\n\nThe coefficients are constants, so the type cannot vary."
  },
  // originally mth302_ch9_015, Chapter 8
  {
    id: "mth302_ch8_015",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How can the eigenvalues be arranged?",
    options: [
      "As a strictly increasing sequence tending to infinity",
      "As a decreasing sequence tending to zero from above",
      "As a finite list with a largest member",
      "In no particular order, since they are unordered"
    ],
    correctAnswer: 0,
    explanation: "They form a strictly increasing infinite sequence $0 \\leq \\lambda_0 < \\lambda_1 < \\lambda_2 < \\cdots$ with $\\lambda_n \\to \\infty$.\n\nA decreasing sequence would contradict the growth to infinity.\n\nA largest eigenvalue cannot exist for an unbounded increasing sequence.\n\nThe eigenvalues are genuinely ordered by size."
  },
  // originally mth302_ch9_012, Chapter 8
  {
    id: "mth302_ch8_012",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "For $y'' + \\lambda y = 0$, what are $p$, $q$ and $r$?",
    options: [
      "$p = 1$, $q = 0$, $r = 1$",
      "$p = 0$, $q = 1$, $r = \\lambda$, reading the parameter as the weight",
      "$p = 1$, $q = \\lambda$, $r = 0$, placing the eigenvalue in $q$",
      "$p = \\lambda$, $q = 0$, $r = 1$, taking the parameter as the leading coefficient"
    ],
    correctAnswer: 0,
    explanation: "Matching against the expanded form gives $p = 1$, hence $p' = 0$, with $q = 0$ and weight $r = 1$.\n\nThe eigenvalue $\\lambda$ is the parameter and never plays the role of the weight.\n\nPlacing $\\lambda$ inside $q$ confuses the potential with the eigenvalue term.\n\nThe leading coefficient is $1$, not $\\lambda$."
  },
  // originally mth302_ch10_030, Chapter 9
  {
    id: "mth302_ch9_030",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is $B(2, 3)$?",
    options: [
      "$\\dfrac{1}{12}$",
      "$\\dfrac{1}{60}$",
      "$\\dfrac{1}{20}$, from an incorrect factorial reduction",
      "$\\dfrac{1}{6}$, doubling the correct value"
    ],
    correctAnswer: 0,
    explanation: "Computing $B(2, 3) = \\dfrac{\\Gamma(2)\\Gamma(3)}{\\Gamma(5)} = \\dfrac{1!\\cdot 2!}{4!} = \\dfrac{2}{24} = \\dfrac{1}{12}$.\n\nThe value $1/60$ belongs to $B(4, 3)$.\n\nA value of $1/20$ does not follow from these factorials.\n\nDoubling the result misplaces a factor of two."
  },
  // originally mth302_ch10_016, Chapter 9
  {
    id: "mth302_ch9_016",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is $\\Gamma(1)$?",
    options: [
      "$1$",
      "$0$, since the integrand vanishes at the lower limit",
      "Undefined, as at the non-positive integers",
      "$\\sqrt{\\pi}$, which is the half-integer value instead"
    ],
    correctAnswer: 0,
    explanation: "Evaluating $\\int_0^\\infty e^{-t}\\,dt = 1$ gives $\\Gamma(1) = 1$, which anchors the factorial chain.\n\nThe integral is strictly positive, so zero is impossible.\n\nThe Gamma function is undefined at zero and the negative integers, not at one.\n\nThe value $\\sqrt{\\pi}$ belongs to $\\Gamma(1/2)$."
  },
  // originally mth302_ch10_033, Chapter 9
  {
    id: "mth302_ch9_033",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is $\\Gamma(6)$?",
    options: [
      "$120$",
      "$720$",
      "$24$",
      "$6$, taking the argument itself"
    ],
    correctAnswer: 0,
    explanation: "Since $\\Gamma(n) = (n - 1)!$, we get $\\Gamma(6) = 5! = 120$.\n\nThe value $720$ is $6! = \\Gamma(7)$.\n\nThe value $24$ is $4! = \\Gamma(5)$.\n\nThe argument itself is not a factorial value."
  },
  // originally mth302_ch11_016, Chapter 10
  {
    id: "mth302_ch10_016",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is $P_1(x)$?",
    options: [
      "$x$",
      "$1$, which is $P_0(x)$ instead",
      "$\\tfrac{1}{2}(3x^2 - 1)$, which is $P_2(x)$",
      "$2x$, doubling the correct polynomial"
    ],
    correctAnswer: 0,
    explanation: "Rodrigues' formula with $n = 1$ gives $P_1(x) = x$, which indeed satisfies $P_1(1) = 1$.\n\nThe constant $1$ is $P_0$.\n\nThe quadratic is $P_2$.\n\nDoubling would give $P_1(1) = 2$, breaking the normalisation."
  },
  // originally mth302_ch11_017, Chapter 10
  {
    id: "mth302_ch10_017",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is $P_4(x)$?",
    options: [
      "$\\dfrac{35x^4 - 30x^2 + 3}{8}$",
      "$\\dfrac{35x^4 - 30x^2 + 3}{16}$, halving the correct denominator",
      "$\\dfrac{35x^3 - 30x}{8}$",
      "$\\dfrac{5x^4 - 3x^2}{2}$, from an incorrect recurrence step"
    ],
    correctAnswer: 0,
    explanation: "Rodrigues' formula gives $P_4(x) = \\dfrac{35x^4 - 30x^2 + 3}{8}$, and substituting $x = 1$ gives $\\dfrac{35 - 30 + 3}{8} = 1$ as required.\n\nDoubling the denominator would give $P_4(1) = 1/2$.\n\nA cubic cannot be $P_4$, since $P_n$ has degree exactly $n$.\n\nThe last expression fails the check $P_4(1) = 1$."
  },
  // originally mth302_ch12_013, Chapter 11
  {
    id: "mth302_ch11_013",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is the period of $y = A\\sin nx$?",
    options: [
      "$\\dfrac{2\\pi}{n}$",
      "$2\\pi n$, multiplying rather than dividing by $n$",
      "$\\dfrac{\\pi}{n}$, which is half the correct period",
      "$\\dfrac{n}{2\\pi}$, inverting the whole expression"
    ],
    correctAnswer: 0,
    explanation: "The sine completes one cycle when $nx$ increases by $2\\pi$, so the period is $2\\pi/n$.\n\nMultiplying by $n$ reverses the effect of the frequency.\n\nHalving gives the period of $\\sin 2nx$ instead.\n\nInverting the expression has the wrong dimensions."
  },
  // originally mth302_ch12_006, Chapter 11
  {
    id: "mth302_ch11_006",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is the period of $y = 3\\sin(5x)$?",
    options: [
      "$2\\pi/5$",
      "$5\\pi$",
      "$2\\pi$",
      "$\\pi/5$"
    ],
    correctAnswer: 0,
    explanation: "The period of $A\\sin(nx)$ is $2\\pi/n$ regardless of the amplitude $A$, so with $n = 5$ the period is $2\\pi/5$. The amplitude $3$ has no effect on the period whatsoever.\n\n$5\\pi$ and $\\pi/5$ do not follow from the formula $2\\pi/n$ with $n = 5$.\n\n$2\\pi$ is the period of $\\sin x$ itself, ignoring the factor of $5$ multiplying $x$."
  },
  // originally mth302_ch12_023, Chapter 11
  {
    id: "mth302_ch11_023",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "If $f$ is odd, which coefficients vanish?",
    options: [
      "$a_0$ and all the $a_n$",
      "All the $b_n$",
      "Only $a_0$, while the cosines survive unchanged",
      "Only the odd-index coefficients throughout"
    ],
    correctAnswer: 0,
    explanation: "An odd function is orthogonal to the constant and to every cosine, so only sine terms remain.\n\nKilling the sines describes the even case.\n\nThe cosines vanish as well, not only the constant.\n\nThe distinction is by family, not by index parity."
  },
];

export default mth302ExamPrepA;
