import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter4: QuestionV2[] = [
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
  {
    id: "mth302_ch4_002",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Using Abel's theorem, what is the Wronskian of any two solutions of $x^4y'' - 2x^3y' - x^8y = 0$ for $x \\neq 0$?",
    options: [
      "$Cx^{-2}$",
      "$Cx^2$",
      "$Ce^{-2x}$",
      "$Cx^4$"
    ],
    correctAnswer: 1,
    explanation: "Standardizing by dividing through by $x^4$ gives $y'' - \\dfrac{2}{x}y' - x^4y = 0$, so $P = -2/x$, and Abel's formula gives $W = Ce^{-\\int P\\,dx} = Ce^{2\\ln|x|} = Cx^2$. The term $-x^8y$ never enters the calculation since Abel's theorem depends only on $P$.\n\n$Cx^{-2}$ results from the sign error of using $+\\int P$ instead of $-\\int P$.\n\n$Ce^{-2x}$ comes from using the unstandardized leading coefficient $x^4$ instead of dividing through first.\n\n$Cx^4$ does not follow from correctly integrating $P = -2/x$."
  },
  {
    id: "mth302_ch4_003",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For $y'' - \\dfrac{4}{x}y' + \\dfrac{6}{x^2}y = 0$ with $x > 0$, what is the Wronskian of two independent solutions?",
    options: [
      "$Ce^{4x}$",
      "$Cx^{-4}$",
      "$Cx^6$",
      "$Cx^4$"
    ],
    correctAnswer: 3,
    explanation: "Here $P = -4/x$, so $W = Ce^{-\\int(-4/x)\\,dx} = Ce^{4\\ln x} = Cx^4$. The coefficient $6/x^2$ in front of $y$ plays no role in Abel's theorem, which is exactly the point of using it instead of solving the equation directly.\n\n$Ce^{4x}$ wrongly treats $P$ as a constant rather than $-4/x$.\n\n$Cx^{-4}$ has the sign of the exponent reversed.\n\n$Cx^6$ confuses the coefficient of $y$ with the coefficient of $y'$ that Abel's theorem actually uses."
  },
  {
    id: "mth302_ch4_004",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For $x^2y'' + xy' + (x^2 - 4)y = 0$ with $x > 0$, what does Abel's theorem give for the Wronskian?",
    options: [
      "$W = C/x$",
      "$W = Cx$",
      "$W = Cx^2$",
      "$W = Ce^{-x}$"
    ],
    correctAnswer: 0,
    explanation: "Dividing through by $x^2$ gives $y'' + \\dfrac{1}{x}y' + \\left(1 - \\dfrac{4}{x^2}\\right)y = 0$, so $P = 1/x$, and $W = Ce^{-\\ln x} = C/x$. This is Bessel's equation of order $2$, so the two independent solutions are $J_2$ and $Y_2$.\n\n$W = Cx$ has the sign of the exponent reversed.\n\n$W = Cx^2$ and $W = Ce^{-x}$ do not follow from correctly integrating $P = 1/x$."
  },
  {
    id: "mth302_ch4_005",
    course: "MTH 302",
    chapter: "Chapter 4",
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
  {
    id: "mth302_ch4_006",
    course: "MTH 302",
    chapter: "Chapter 4",
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
  {
    id: "mth302_ch4_007",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Given that $y_1 = x$ solves $x^2y'' - xy' + y = 0$ for $x > 0$, what is a second independent solution?",
    options: [
      "$x^2$",
      "$1/x$",
      "$\\ln x$",
      "$x\\ln x$"
    ],
    correctAnswer: 3,
    explanation: "Standard form $y'' - \\dfrac{1}{x}y' + \\dfrac{1}{x^2}y = 0$ gives $P = -1/x$, so the reduction of order formula gives $y_2 = x\\int \\dfrac{e^{\\ln x}}{x^2}\\,dx = x\\int \\dfrac{dx}{x} = x\\ln x$. The factor of $y_1 = x$ must be kept; $\\ln x$ alone does not satisfy the equation on its own.\n\n$x^2$ and $1/x$ do not satisfy the reduction of order construction for this equation.\n\n$\\ln x$ alone omits the essential multiplication by $y_1 = x$."
  },
  {
    id: "mth302_ch4_008",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "If $y_1$ and $y_2$ are solutions of $y'' + P(x)y' + Q(x)y = 0$ on an interval $I$, and the Wronskian $W(x_0) = 0$ at one point $x_0$ in $I$, what follows?",
    options: [
      "$W$ may be nonzero elsewhere on $I$",
      "No conclusion is possible",
      "$y_1$ and $y_2$ are independent",
      "$W$ is identically zero on $I$, and $y_1$, $y_2$ are dependent"
    ],
    correctAnswer: 3,
    explanation: "Abel's formula $W = Ce^{-\\int P}$ has an exponential factor that is never zero, so the Wronskian can vanish at one point only if $C = 0$, meaning $W$ is identically zero throughout $I$; for two solutions of the same linear equation, this forces linear dependence.\n\n$W$ may be nonzero elsewhere on $I$ contradicts the all-or-nothing behavior forced by Abel's formula.\n\nNo conclusion is possible understates what Abel's theorem actually guarantees.\n\n$y_1$ and $y_2$ are independent is the opposite of the correct conclusion."
  },
  {
    id: "mth302_ch4_009",
    course: "MTH 302",
    chapter: "Chapter 4",
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
  {
    id: "mth302_ch4_010",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "In Abel's theorem, $W = Ce^{-\\int P\\,dx}$, what does $P$ represent?",
    options: [
      "The coefficient of $y''$",
      "The forcing term",
      "The coefficient of $y$",
      "The coefficient of $y'$ once the coefficient of $y''$ has been made $1$"
    ],
    correctAnswer: 3,
    explanation: "Abel's theorem applies to the standard form $y'' + Py' + Qy = 0$, where the leading coefficient has already been divided out to equal $1$, and $P$ is the coefficient of $y'$ in that standardized equation. Forgetting to divide through by the leading coefficient of $y''$ before reading off $P$ is the most common way to lose marks on this topic, and $Q$ never enters Abel's formula at all.\n\nThe coefficient of $y''$ is wrong since that coefficient must already be normalized to $1$ before $P$ is read off.\n\nThe forcing term is irrelevant to Abel's theorem, which applies to homogeneous equations.\n\nThe coefficient of $y$ is $Q$, which plays no role in the Wronskian formula."
  },
  {
    id: "mth302_ch4_011",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the reduction-of-order formula for a second solution of $y'' + Py' + Qy = 0$, given one solution $y_1$?",
    options: [
      "$y_2 = y_1\\displaystyle\\int \\dfrac{e^{-\\int P\\,dx}}{y_{1}^{2}}\\,dx$",
      "$y_2 = y_1\\displaystyle\\int \\dfrac{e^{\\int P\\,dx}}{y_{1}^{2}}\\,dx$",
      "$y_2 = \\displaystyle\\int \\dfrac{e^{-\\int P\\,dx}}{y_1}\\,dx$",
      "$y_2 = y_1\\displaystyle\\int \\dfrac{e^{-\\int Q\\,dx}}{y_{1}^{2}}\\,dx$"
    ],
    correctAnswer: 0,
    explanation: "Substituting $y = vy_1$ and $z = v'$ into the equation produces $z' + \\left(\\dfrac{2y_1'}{y_1} + P\\right)z = 0$, whose solution is $z = e^{-\\int P\\,dx}/y_{1}^{2}$; integrating $z$ to recover $v$ and multiplying back by $y_1$ gives $y_2 = y_1\\int \\dfrac{e^{-\\int P\\,dx}}{y_{1}^{2}}\\,dx$. The exponent carries a minus sign and the denominator is $y_1$ squared.\n\n$y_2 = y_1\\int \\dfrac{e^{\\int P\\,dx}}{y_{1}^{2}}\\,dx$ has the wrong sign on the exponent.\n\n$y_2 = \\int \\dfrac{e^{-\\int P\\,dx}}{y_1}\\,dx$ omits the multiplication by $y_1$ in front and uses only $y_1$ to the first power inside the integral.\n\n$y_2 = y_1\\int \\dfrac{e^{-\\int Q\\,dx}}{y_{1}^{2}}\\,dx$ wrongly uses $Q$ in place of $P$."
  },
  {
    id: "mth302_ch4_012",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "If $y_1$ and $y_2$ both solve $y'' + y = \\sin x$, what equation does $y_1 - y_2$ solve?",
    options: [
      "$y'' + y = \\sin x$",
      "$y'' + y = 2\\sin x$",
      "$y'' + y = 0$",
      "$y'' - y = 0$"
    ],
    correctAnswer: 2,
    explanation: "Subtracting the two equations satisfied by $y_1$ and $y_2$ cancels the common forcing term $\\sin x$, leaving $y'' + y = 0$ as the equation solved by their difference. This is the correct form of superposition for nonhomogeneous problems: differences of solutions solve the homogeneous equation, while sums do not solve the original nonhomogeneous equation.\n\n$y'' + y = \\sin x$ wrongly assumes the difference still carries the forcing term.\n\n$y'' + y = 2\\sin x$ is actually the equation solved by the sum $y_1 + y_2$, not the difference.\n\n$y'' - y = 0$ changes the sign of $y$ incorrectly; only the forcing term is affected by the subtraction."
  },
  {
    id: "mth302_ch4_013",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "How is $p(x)y'' + q(x)y' + r(x)y = g(x)$ put into standard form?",
    options: [
      "Divide every term by $p(x)$ so the coefficient of $y''$ becomes $1$",
      "Divide through by $r(x)$",
      "Multiply through by $p(x)$",
      "Move $g(x)$ to the left"
    ],
    correctAnswer: 0,
    explanation: "Standard form requires a leading coefficient of $1$, so dividing by $p(x)$ produces $y'' + P(x)y' + Q(x)y = G(x)$, which is what Abel's theorem and the reduction formula assume.\n\nDividing by $r(x)$ normalises the wrong term and leaves $y''$ with a coefficient.\n\nMultiplying by $p(x)$ moves further from the required form.\n\nMoving $g(x)$ across changes nothing about the leading coefficient."
  },
  {
    id: "mth302_ch4_014",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "If $y_1$ and $y_2$ solve a homogeneous linear equation, what does the superposition principle assert?",
    options: [
      "$C_1y_1 + C_2y_2$ is also a solution",
      "Only the sum $y_1 + y_2$ is a solution, with no other combination admitted",
      "The product $y_1y_2$ is also a solution",
      "The quotient $y_1/y_2$ is constant"
    ],
    correctAnswer: 0,
    explanation: "Linearity and homogeneity together mean any linear combination $C_1y_1 + C_2y_2$ again satisfies the equation.\n\nRestricting to the plain sum understates the principle, which admits arbitrary constants.\n\nProducts of solutions are not solutions of a linear equation in general.\n\nThe quotient being constant would say the two solutions are dependent, which superposition does not claim."
  },
  {
    id: "mth302_ch4_015",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "If $y_1$ and $y_2$ both solve $y'' + y = \\sin x$, what equation does $y_1 + y_2$ satisfy?",
    options: [
      "$y'' + y = 2\\sin x$",
      "$y'' + y = \\sin x$",
      "$y'' + y = 0$",
      "$y'' + 2y = \\sin x$"
    ],
    correctAnswer: 0,
    explanation: "Adding the two equations doubles the right-hand side, so the sum satisfies $y'' + y = 2\\sin x$ rather than the original equation.\n\nReproducing the original forcing term would require superposition to hold for nonhomogeneous equations, which it does not.\n\nThe homogeneous equation is satisfied by the difference $y_1 - y_2$, not the sum.\n\nDoubling the coefficient of $y$ misreads which side of the equation the addition affects."
  },
  {
    id: "mth302_ch4_016",
    course: "MTH 302",
    chapter: "Chapter 4",
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
  {
    id: "mth302_ch4_017",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What does $W(x_0) \\neq 0$ at some point $x_0$ of an interval tell you about $y_1$ and $y_2$?",
    options: [
      "They are linearly independent on that interval and so form a fundamental set",
      "They are linearly dependent",
      "They both vanish at $x_0$",
      "They solve different equations"
    ],
    correctAnswer: 0,
    explanation: "A nonvanishing Wronskian at a single point of the interval certifies linear independence, so the pair forms a fundamental set and the general solution is their linear combination.\n\nLinear dependence corresponds to a Wronskian that is identically zero.\n\nNothing about $W(x_0) \\neq 0$ forces either function to vanish anywhere.\n\nThe Wronskian is computed for two solutions of the same equation, so it says nothing about different equations."
  },
  {
    id: "mth302_ch4_018",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Abel's theorem implies the Wronskian of two solutions on an interval behaves how?",
    options: [
      "It is either identically zero or never zero there",
      "It always vanishes at exactly one point of the interval",
      "It changes sign at each zero of $y_1$",
      "It equals $Q(x)$ up to a constant multiple"
    ],
    correctAnswer: 0,
    explanation: "Since $W = Ce^{-\\int P\\,dx}$ and the exponential never vanishes, $W$ is zero everywhere when $C = 0$ and nowhere otherwise.\n\nVanishing at exactly one point is impossible for a constant times a nonvanishing exponential.\n\nThe zeros of $y_1$ do not enter the formula for $W$ at all.\n\nAbel's formula involves $P$ only, so $Q$ cannot determine $W$."
  },
  {
    id: "mth302_ch4_019",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Which coefficient does Abel's theorem require, and which plays no part?",
    options: [
      "$P$ is required and $Q$ plays no part",
      "$Q$ is required and $P$ plays no part in the computation",
      "Both $P$ and $Q$ are required in equal measure",
      "Neither is required, since $W$ depends only on $C$"
    ],
    correctAnswer: 0,
    explanation: "The formula $W = Ce^{-\\int P\\,dx}$ is built entirely from the coefficient of $y'$, so $Q$ never enters the computation.\n\nSwapping the roles of $P$ and $Q$ inverts the formula.\n\nRequiring both misstates a result that involves only one coefficient.\n\nThe constant $C$ alone cannot determine $W$, since the exponential factor varies with $x$."
  },
  {
    id: "mth302_ch4_020",
    course: "MTH 302",
    chapter: "Chapter 4",
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
  {
    id: "mth302_ch4_021",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For $x^4y'' - 2x^3y' - x^8y = 0$ with $x \\neq 0$, what is $P(x)$ after standardising?",
    options: [
      "$-\\dfrac{2}{x}$",
      "$-2x^3$ taken from the unstandardised equation",
      "$-x^4$ which becomes part of $Q$ after division",
      "$2x^3$"
    ],
    correctAnswer: 0,
    explanation: "Dividing every term by $x^4$ gives $y'' - \\dfrac{2}{x}y' - x^4y = 0$, so $P(x) = -\\dfrac{2}{x}$.\n\nReading $-2x^3$ takes the coefficient from the unstandardised equation, which is the standard way to lose this mark.\n\nThe term $-x^4$ becomes part of $Q$ after division, not $P$.\n\nReversing the sign contradicts the negative coefficient in the original equation."
  },
  {
    id: "mth302_ch4_022",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Substituting $y = e^{rx}$ into $ay'' + by' + cy = 0$ produces which equation?",
    options: [
      "$ar^2 + br + c = 0$",
      "$ar^2 + br + c = e^{rx}$",
      "$ar + b = 0$",
      "$r^2 + r + 1 = 0$"
    ],
    correctAnswer: 0,
    explanation: "Differentiating and cancelling the never-zero factor $e^{rx}$ leaves the characteristic equation $ar^2 + br + c = 0$.\n\nRetaining $e^{rx}$ on the right ignores that it cancels from every term.\n\nA first-degree equation would correspond to a first-order differential equation.\n\nDiscarding the coefficients $a$, $b$, and $c$ loses all information about the equation."
  },
  {
    id: "mth302_ch4_023",
    course: "MTH 302",
    chapter: "Chapter 4",
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
  {
    id: "mth302_ch4_024",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For a repeated characteristic root $r$, what is the general solution?",
    options: [
      "$(C_1 + C_2x)e^{rx}$",
      "$C_1e^{rx} + C_2e^{rx}$ with two separate constants",
      "$C_1e^{rx} + C_2e^{-rx}$",
      "$C_1e^{rx} + C_2xe^{2rx}$"
    ],
    correctAnswer: 0,
    explanation: "A repeated root supplies only one exponential, and multiplying by $x$ produces the required second independent solution, giving $(C_1 + C_2x)e^{rx}$.\n\nWriting $C_1e^{rx} + C_2e^{rx}$ adds two copies of the same function, so it collapses to a single constant times $e^{rx}$ and is not a general solution.\n\nIntroducing $e^{-rx}$ invents a second root that the characteristic equation does not have.\n\nDoubling the exponent in the second term does not solve the equation."
  },
  {
    id: "mth302_ch4_025",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Why is $C_1e^{rx} + C_2e^{rx}$ not a general solution for a repeated root?",
    options: [
      "The two terms are the same function, so they are not independent",
      "The constants must be equal in that expression",
      "It fails to satisfy the differential equation at all",
      "It contains only one arbitrary constant"
    ],
    correctAnswer: 0,
    explanation: "Both terms are multiples of the identical function $e^{rx}$, so together they span only a one-dimensional space and cannot form a fundamental set.\n\nNothing forces the constants to be equal; the problem is that their combination collapses to a single constant.\n\nThe expression does satisfy the equation, which is exactly why the error is tempting.\n\nIt is written with two constants, but they are not independent, which is the real defect."
  },
  {
    id: "mth302_ch4_026",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For complex roots $r = \\alpha \\pm i\\beta$, what is the general solution?",
    options: [
      "$e^{\\alpha x}(C_1\\cos \\beta x + C_2\\sin \\beta x)$",
      "$e^{\\beta x}(C_1\\cos \\alpha x + C_2\\sin \\alpha x)$",
      "$e^{\\alpha x}(C_1\\cos \\alpha x + C_2\\sin \\beta x)$",
      "$C_1e^{\\alpha x} + C_2e^{\\beta x}$"
    ],
    correctAnswer: 0,
    explanation: "The real part $\\alpha$ supplies the exponential factor and the imaginary part $\\beta$ supplies the frequency, giving $e^{\\alpha x}(C_1\\cos \\beta x + C_2\\sin \\beta x)$.\n\nSwapping the roles so that $\\beta$ sits in the exponential is the classic distractor for this form.\n\nMixing $\\alpha$ into one trigonometric argument and $\\beta$ into the other is inconsistent.\n\nTwo separate real exponentials correspond to distinct real roots, not to a complex pair."
  },
  {
    id: "mth302_ch4_027",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For $y'' + 2y' + 5y = 0$ the roots are $-1 \\pm 2i$. Which factor governs the decay?",
    options: [
      "$e^{-x}$",
      "$e^{2x}$ built from the imaginary part",
      "$e^{-2x}$ using the imaginary part with a sign",
      "$e^{5x}$"
    ],
    correctAnswer: 0,
    explanation: "The decaying factor is $e^{\\alpha x}$ with $\\alpha$ the real part of the root, and here $\\alpha = -1$, giving $e^{-x}$.\n\nUsing $2$ takes the imaginary part, which sets the oscillation frequency rather than the decay.\n\nThe form $e^{-2x}$ also misuses the imaginary part, merely with a sign attached.\n\nThe constant $5$ is the coefficient of $y$ and is not a root of the characteristic equation."
  },
  {
    id: "mth302_ch4_028",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "In reduction of order, which substitution is made when one solution $y_1$ is already known?",
    options: [
      "$y = v(x)y_1$",
      "$y = v(x) + y_1$",
      "$y = v(x)/y_1$",
      "$y = e^{v(x)}y_1$"
    ],
    correctAnswer: 0,
    explanation: "Writing $y = v(x)y_1$ and setting $z = v'$ reduces the second-order equation to a first-order equation in $z$.\n\nAdding $v$ to $y_1$ does not produce the cancellation that makes the method work.\n\nDividing by $y_1$ is not the standard substitution and fails wherever $y_1$ vanishes.\n\nPlacing $v$ in an exponent is not the form that leads to the reduction."
  },
  {
    id: "mth302_ch4_029",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the reduction-of-order formula for the second solution?",
    options: [
      "$y_2 = y_1\\displaystyle\\int \\dfrac{e^{-\\int P\\,dx}}{y_{1}^{2}}\\,dx$",
      "$y_2 = y_1\\displaystyle\\int \\dfrac{e^{+\\int P\\,dx}}{y_{1}^{2}}\\,dx$",
      "$y_2 = y_1\\displaystyle\\int \\dfrac{e^{-\\int P\\,dx}}{y_1}\\,dx$",
      "$y_2 = \\displaystyle\\int \\dfrac{e^{-\\int P\\,dx}}{y_{1}^{2}}\\,dx$"
    ],
    correctAnswer: 0,
    explanation: "The derivation gives $y_2 = y_1\\int \\dfrac{e^{-\\int P\\,dx}}{y_{1}^{2}}\\,dx$, with the known solution both multiplying the integral and squared inside it.\n\nA positive exponent reverses the sign that the integrating factor supplies.\n\nUsing $y_1$ rather than $y_{1}^{2}$ in the denominator drops a factor from the derivation.\n\nOmitting the outer factor $y_1$ leaves an expression that does not solve the equation."
  },
  {
    id: "mth302_ch4_030",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Given $y_1 = x$ for $x^2y'' - xy' + y = 0$ with $x > 0$, what is $P(x)$ in standard form?",
    options: [
      "$-\\dfrac{1}{x}$",
      "$-x$ read before dividing by $x^2$",
      "$\\dfrac{1}{x}$",
      "$\\dfrac{1}{x^2}$"
    ],
    correctAnswer: 0,
    explanation: "Dividing by $x^2$ gives $y'' - \\dfrac{1}{x}y' + \\dfrac{1}{x^2}y = 0$, so $P(x) = -\\dfrac{1}{x}$.\n\nTaking $-x$ reads the coefficient before dividing by the leading term.\n\nReversing the sign contradicts the negative coefficient of $y'$.\n\nThe expression $\\dfrac{1}{x^2}$ is $Q(x)$, the coefficient of $y$."
  },
  {
    id: "mth302_ch4_031",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the general solution of $x^2y'' - xy' + y = 0$ for $x > 0$?",
    options: [
      "$y = C_1x + C_2x\\ln x$",
      "$y = C_1x + C_2x^2$",
      "$y = C_1 + C_2\\ln x$",
      "$y = C_1x + C_2x^{-1}$"
    ],
    correctAnswer: 0,
    explanation: "Reduction of order from $y_1 = x$ produces $y_2 = x\\ln x$, so the general solution is $y = C_1x + C_2x\\ln x$.\n\nThe function $x^2$ does not satisfy this equation on substitution.\n\nDropping the factor $x$ from both terms gives functions that fail the equation.\n\nThe reciprocal power $x^{-1}$ is not a solution here."
  },
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
  {
    id: "mth302_ch4_033",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Two solutions form a fundamental set precisely when which condition holds?",
    options: [
      "They are linearly independent",
      "They both vanish somewhere",
      "Their sum is zero",
      "They have the same derivative"
    ],
    correctAnswer: 0,
    explanation: "A fundamental set is a linearly independent pair, which is what allows every solution to be written as a linear combination of the two.\n\nVanishing somewhere is irrelevant to independence.\n\nA vanishing sum would make the two solutions dependent.\n\nEqual derivatives would force the solutions to differ by a constant, which does not give independence for this purpose."
  },
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
  {
    id: "mth302_ch4_035",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "If $y_1$ and $y_2$ both solve the nonhomogeneous equation $y'' + Py' + Qy = G$, what does $y_1 - y_2$ solve?",
    options: [
      "The homogeneous equation $y'' + Py' + Qy = 0$",
      "The same nonhomogeneous equation",
      "The equation with forcing term $2G$",
      "No differential equation in general"
    ],
    correctAnswer: 0,
    explanation: "Subtracting the two equations cancels the common forcing term, leaving the homogeneous equation for the difference.\n\nThe difference cannot satisfy the original equation, since the forcing term cancels rather than persisting.\n\nDoubling the forcing term describes the sum, not the difference.\n\nThe difference certainly satisfies an equation, namely the homogeneous one."
  },
  {
    id: "mth302_ch4_036",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the Wronskian of $y_1 = \\cos x$ and $y_2 = \\sin x$?",
    options: [
      "$1$",
      "$0$",
      "$-1$",
      "$\\sin x\\cos x$"
    ],
    correctAnswer: 0,
    explanation: "Computing $y_1y_2' - y_1'y_2 = \\cos x\\cos x - (-\\sin x)\\sin x = \\cos^2 x + \\sin^2 x = 1$.\n\nA zero value would indicate dependence, but sine and cosine are independent.\n\nThe negative value reverses the order of the two products.\n\nThe product $\\sin x\\cos x$ results from multiplying the functions rather than forming the determinant."
  },
  {
    id: "mth302_ch4_037",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For $y'' + \\dfrac{3}{x}y' + Qy = 0$ with $x > 0$, what does Abel's theorem give for $W$?",
    options: [
      "$W = Cx^{-3}$",
      "$W = Cx^{3}$",
      "$W = Ce^{-3x}$",
      "$W = C\\ln x$"
    ],
    correctAnswer: 0,
    explanation: "With $P = \\dfrac{3}{x}$ we get $\\int P\\,dx = 3\\ln x$, so $W = Ce^{-3\\ln x} = Cx^{-3}$.\n\nThe positive power results from dropping the minus sign in the exponent.\n\nAn exponential in $x$ would follow from a constant $P$, not from $3/x$.\n\nA logarithm appears in the exponent before exponentiating, not in the final answer."
  },
  {
    id: "mth302_ch4_038",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the characteristic equation of $2y'' + 5y' - 3y = 0$?",
    options: [
      "$2r^2 + 5r - 3 = 0$",
      "$r^2 + 5r - 3 = 0$",
      "$2r^2 + 5r + 3 = 0$",
      "$2r + 5 = 0$"
    ],
    correctAnswer: 0,
    explanation: "Each derivative contributes the corresponding power of $r$ while the coefficients are carried across unchanged, giving $2r^2 + 5r - 3 = 0$.\n\nDropping the leading coefficient $2$ discards information the equation carries.\n\nReversing the sign of the constant term contradicts the $-3y$ in the equation.\n\nA linear equation in $r$ would correspond to a first-order differential equation."
  },
  {
    id: "mth302_ch4_039",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "In the reduction-of-order derivation, what substitution is made after setting $y = vy_1$?",
    options: [
      "$z = v'$",
      "$z = v$ without differentiating first",
      "$z = vy_1$",
      "$z = y_1'$"
    ],
    correctAnswer: 0,
    explanation: "Putting $z = v'$ converts the equation for $v$ into a first-order linear equation in $z$, which is the whole point of the reduction.\n\nTaking $z = v$ leaves the equation second order in $z$.\n\nSetting $z = vy_1$ merely renames $y$ and achieves no reduction.\n\nThe derivative of the known solution is not the new unknown."
  },
  {
    id: "mth302_ch4_040",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Two solutions of a second-order homogeneous linear equation have $W \\equiv 0$ on an interval. What follows?",
    options: [
      "They are linearly dependent there",
      "They are linearly independent there",
      "They form a fundamental set",
      "One of them must be identically zero"
    ],
    correctAnswer: 0,
    explanation: "By Abel's theorem the Wronskian is either identically zero or never zero, and the vanishing case corresponds to linear dependence.\n\nIndependence is certified by a nonzero Wronskian, not a vanishing one.\n\nA fundamental set requires independence, which fails here.\n\nDependence means one is a constant multiple of the other, which does not force either to vanish identically."
  }
];

export default mth302Chapter4;
