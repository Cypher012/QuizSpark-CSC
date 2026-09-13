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
    text: "For solutions of $y'' + \\dfrac{2}{x}y' + q(x)y = 0$ on $x > 0$, the Wronskian of two solutions satisfies $W(2) = 6$. Using Abel's theorem, what is $W(5)$?",
    options: [
      "$\\dfrac{24}{25}$, found by first solving $C(1/4)=6$ to get $C=24$",
      "$37.5$, obtained by using $e^{+\\int P\\,dx}$ instead of $e^{-\\int P\\,dx}$",
      "$\\dfrac{12}{5}$, obtained by leaving the coefficient $2$ out of $\\int P\\,dx$",
      "$6$, treating the Wronskian as constant in $x$"
    ],
    correctAnswer: 0,
    explanation: "Here $P(x) = 2/x$, so $\\int P\\,dx = 2\\ln x$ and Abel's theorem gives $W(x) = Ce^{-2\\ln x} = Cx^{-2}$. Using $W(2) = 6$: $C(1/4) = 6$, so $C = 24$, and $W(5) = 24/25$.\n\n$37.5$ comes from dropping the minus sign in the exponent, which turns the formula into $W = Cx^{2}$ instead of $Cx^{-2}$; that gives $C(4) = 6$, so $C = 1.5$ and $W(5) = 1.5(25) = 37.5$.\n\n$12/5$ comes from losing the coefficient $2$ while integrating $P$, using $W = Cx^{-1}$ instead of $Cx^{-2}$; that gives $C/2 = 6$, so $C=12$ and $W(5) = 12/5$.\n\n$6$ assumes the Wronskian does not depend on $x$ at all, ignoring that Abel's theorem produces an exponential factor in $x$ whenever $P(x)$ is not identically zero."
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
    text: "For $y'' + 5y' + 6y = 0$, the fundamental-set theorem says to take $y_1(x)$ to be the solution with $y_1(0) = 1$ and $y_1'(0) = 0$. What is $y_1(x)$?",
    options: [
      "$e^{-2x} - e^{-3x}$, obtained by mixing up which initial condition belongs to $y_1$ versus $y_2$",
      "$3e^{-2x} - 2e^{-3x}$, obtained by solving $A+B=1$ and $-2A-3B=0$ for the two roots $r=-2$ and $r=-3$",
      "$-3e^{-2x} + 2e^{-3x}$, obtained by an overall sign slip while solving the two equations for the coefficients",
      "$3e^{-3x} - 2e^{-2x}$, obtained by swapping which coefficient attaches to which root"
    ],
    correctAnswer: 1,
    explanation: "The characteristic equation $r^2+5r+6=(r+2)(r+3)=0$ gives roots $r=-2,-3$, so $y=Ae^{-2x}+Be^{-3x}$. Imposing $y_1(0)=1$ gives $A+B=1$, and imposing $y_1'(0)=0$ gives $-2A-3B=0$. Solving this system gives $A=3$, $B=-2$, so $y_1(x) = 3e^{-2x}-2e^{-3x}$.\n\n$e^{-2x}-e^{-3x}$ is actually the theorem's formula for $y_2$, which instead satisfies $y_2(0)=0$ and $y_2'(0)=1$; the two initial-condition roles have been swapped.\n\n$-3e^{-2x}+2e^{-3x}$ carries the correct coefficients with every sign reversed, the result of an overall sign error while solving the $2\\times2$ system.\n\n$3e^{-3x}-2e^{-2x}$ keeps the correct coefficients $3$ and $-2$ but attaches each one to the wrong root."
  },
  {
    id: "mth302_ch4_011",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Given that $y_1 = x^2$ solves $x^2y'' - 3xy' + 4y = 0$ for $x > 0$, what is a second independent solution obtained by reduction of order?",
    options: [
      "$\\ln x$, omitting the required multiplication by $y_1 = x^2$",
      "$x^{-2}\\ln x$, obtained by dropping the minus sign when forming $e^{-\\int P\\,dx}$",
      "$x^2\\ln x$, since integrating gives $y_2 = x^2\\int (1/x)\\,dx$",
      "$x^2$, which merely repeats the known solution $y_1$"
    ],
    correctAnswer: 2,
    explanation: "Standardizing by dividing through by $x^2$ gives $y'' - \\dfrac{3}{x}y' + \\dfrac{4}{x^2}y = 0$, so $P = -3/x$ and $e^{-\\int P\\,dx} = e^{3\\ln x} = x^3$. The reduction of order formula then gives $y_2 = y_1\\displaystyle\\int \\dfrac{x^3}{y_1^2}\\,dx = x^2\\displaystyle\\int \\dfrac{x^3}{x^4}\\,dx = x^2\\displaystyle\\int \\dfrac{dx}{x} = x^2\\ln x$.\n\n$\\ln x$ alone omits the required multiplication by $y_1 = x^2$ that reduction of order always keeps.\n\n$x^{-2}\\ln x$ comes from dropping the minus sign when forming $e^{-\\int P\\,dx}$, which flips $x^3$ into $x^{-3}$ and changes the sign of the power of $x$ in the final answer.\n\n$x^2$ is just the known solution $y_1$ repeated, which is not independent of itself and so cannot serve as $y_2$."
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
    text: "What is the standard form (leading coefficient equal to $1$) of $2xy'' - 6y' + 8xy = 0$ for $x > 0$?",
    options: [
      "$y'' + \\dfrac{3}{x}y' + 4y = 0$, obtained with the sign of the middle coefficient flipped",
      "$y'' - \\dfrac{3}{x}y' + \\dfrac{4}{x}y = 0$, obtained by dividing the constant term by an extra unwanted factor of $x$",
      "$y'' - 6y' + 8xy = 0$, obtained without actually carrying out the division by $x$",
      "$y'' - \\dfrac{3}{x}y' + 4y = 0$"
    ],
    correctAnswer: 3,
    explanation: "Dividing every term of $2xy'' - 6y' + 8xy = 0$ by the leading coefficient $2x$ gives $y'' - \\dfrac{6}{2x}y' + \\dfrac{8xy}{2x} = y'' - \\dfrac{3}{x}y' + 4y = 0$, which is standard form since the coefficient of $y''$ is now $1$.\n\n$y'' + \\dfrac{3}{x}y' + 4y = 0$ flips the sign of the middle coefficient during the division.\n\n$y'' - \\dfrac{3}{x}y' + \\dfrac{4}{x}y = 0$ divides the constant term by an extra unwanted factor of $x$ that disappears once $8xy$ is divided by $2x$.\n\n$y'' - 6y' + 8xy = 0$ never actually carries out the division by $x$, so its leading coefficient is still $2x$, not $1$; this is exactly the trap of reading coefficients before standardizing."
  },
  {
    id: "mth302_ch4_014",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Given that $y_1 = e^{x}$ and $y_2 = e^{3x}$ both solve $y'' - 4y' + 3y = 0$, what is the value of $y'' - 4y' + 3y$ when $y = 5e^{x} - 2e^{3x}$?",
    options: [
      "$0$",
      "$15e^{x} - 18e^{3x}$, obtained by forgetting to multiply the $-4y'$ term through by the coefficient $4$",
      "$-30e^{x} + 12e^{3x}$, obtained by using $-3y$ in place of $+3y$",
      "$12e^{3x}$, obtained by reusing $y'$ in place of $y''$"
    ],
    correctAnswer: 0,
    explanation: "For $y = 5e^{x} - 2e^{3x}$: $y' = 5e^{x} - 6e^{3x}$ and $y'' = 5e^{x} - 18e^{3x}$. Then $y'' - 4y' + 3y = (5e^{x}-18e^{3x}) - 4(5e^{x}-6e^{3x}) + 3(5e^{x}-2e^{3x})$. Collecting the $e^{x}$ terms gives $5-20+15=0$ and the $e^{3x}$ terms give $-18+24-6=0$, so the whole expression is $0$. This is the superposition principle at work: since $y_1=e^x$ and $y_2=e^{3x}$ each solve the homogeneous equation, every linear combination of them does too, so plugging one into the operator always gives zero.\n\n$15e^{x} - 18e^{3x}$ comes from forgetting to multiply the $-4y'$ term through by $4$, effectively using $-y'$ instead.\n\n$-30e^{x} + 12e^{3x}$ comes from using $-3y$ in place of $+3y$, a sign error on the last term.\n\n$12e^{3x}$ comes from reusing $y'$ in place of $y''$, effectively differentiating only once instead of twice."
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
    text: "What is the Wronskian of $y_1 = x^3$ and $y_2 = x^4$?",
    options: [
      "$7x^6$, obtained by adding the two cross products instead of subtracting them",
      "$x^6$, since $y_1y_2' - y_1'y_2 = x^3(4x^3) - (3x^2)(x^4) = 4x^6 - 3x^6 = x^6$",
      "$-x^6$, obtained by reversing the order of the subtraction",
      "$x^7$, obtained by multiplying $y_1$ and $y_2$ directly instead of forming the determinant"
    ],
    correctAnswer: 1,
    explanation: "The Wronskian is $W = y_1y_2' - y_1'y_2 = x^3(4x^3) - (3x^2)(x^4) = 4x^6 - 3x^6 = x^6$.\n\n$7x^6$ comes from adding the two cross products instead of subtracting them.\n\n$-x^6$ reverses the order of the subtraction, computing $y_1'y_2 - y_1y_2'$ instead.\n\n$x^7$ comes from multiplying $y_1$ and $y_2$ directly rather than forming the determinant of functions and derivatives."
  },
  {
    id: "mth302_ch4_017",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For $y_1 = e^{2x}$ and $y_2 = e^{-3x}$, both solutions of $y'' + y' - 6y = 0$, what is $W(0)$, and what does it imply about whether $y_1$ and $y_2$ form a fundamental set?",
    options: [
      "$W(0) = 5$, which is nonzero, so $y_1$ and $y_2$ form a fundamental set",
      "$W(0) = -4$, which is nonzero, so $y_1$ and $y_2$ form a fundamental set",
      "$W(0) = -5$, which is nonzero, so $y_1$ and $y_2$ form a fundamental set",
      "$W(0) = 0$, so $y_1$ and $y_2$ are linearly dependent"
    ],
    correctAnswer: 2,
    explanation: "With $y_1' = 2e^{2x}$ and $y_2' = -3e^{-3x}$: $W = y_1y_2' - y_1'y_2 = e^{2x}(-3e^{-3x}) - 2e^{2x}(e^{-3x}) = -3e^{-x} - 2e^{-x} = -5e^{-x}$, so $W(0) = -5$. Since this is nonzero, $y_1$ and $y_2$ are linearly independent and form a fundamental set.\n\n$W(0) = 5$ comes from a sign error while combining the two cross products.\n\n$W(0) = -4$ comes from forgetting the coefficient $2$ when differentiating $y_1 = e^{2x}$, using $e^{2x}$ instead of $2e^{2x}$ for $y_1'$.\n\n$W(0) = 0$ would follow from omitting the derivatives in the second row of the determinant, which trivially makes every entry cancel and wrongly suggests dependence."
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
    text: "What is the general solution of $y'' - 6y' + 9y = 0$?",
    options: [
      "$C_1e^{3x} + C_2e^{3x}$, adding two copies of the same exponential without the factor of $x$",
      "$C_1e^{3x} + C_2e^{-3x}$, invented from a second root $-3$",
      "$C_1e^{3x} + C_2xe^{6x}$, doubling the exponent in the second term",
      "$(C_1 + C_2x)e^{3x}$, since the repeated root $r=3$ requires the extra factor of $x$"
    ],
    correctAnswer: 3,
    explanation: "The characteristic equation $r^2 - 6r + 9 = (r-3)^2 = 0$ has the repeated root $r=3$, and a repeated root requires the extra factor of $x$ on the second term, giving $(C_1+C_2x)e^{3x}$.\n\n$C_1e^{3x}+C_2e^{3x}$ adds two copies of the identical function, which collapses to a single constant times $e^{3x}$ rather than supplying a second independent solution.\n\n$C_1e^{3x}+C_2e^{-3x}$ invents a second root $-3$ that this repeated-root characteristic equation does not have.\n\n$C_1e^{3x}+C_2xe^{6x}$ doubles the exponent in the second term instead of reusing the repeated root $3$."
  },
  {
    id: "mth302_ch4_025",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For $y'' - 8y' + 16y = 0$, why does $y = C_1e^{4x} + C_2e^{4x}$ fail to be the general solution, even though it does satisfy the differential equation?",
    options: [
      "The two terms are the same function $e^{4x}$, so $C_1e^{4x}+C_2e^{4x}$ collapses to one arbitrary constant times $e^{4x}$ and cannot span a two-dimensional solution space",
      "It does not actually satisfy $y'' - 8y' + 16y = 0$ for any choice of $C_1$ and $C_2$",
      "The constants $C_1$ and $C_2$ are forced to be equal to each other",
      "It is written with only one arbitrary constant, when a second-order equation needs two"
    ],
    correctAnswer: 0,
    explanation: "Substituting $y=e^{4x}$ confirms it solves $y''-8y'+16y=0$, since $16e^{4x}-8(4e^{4x})+16e^{4x}=16e^{4x}-32e^{4x}+16e^{4x}=0$; this matches the double root of the characteristic equation $r^2-8r+16=(r-4)^2=0$. But $C_1e^{4x}+C_2e^{4x}=(C_1+C_2)e^{4x}$ is just a single effective constant times $e^{4x}$, spanning only a one-dimensional family, so it cannot be the two-parameter general solution; the correct second term needs the extra factor of $x$, giving $(C_1+C_2x)e^{4x}$.\n\nThe expression does satisfy the differential equation for every choice of $C_1$ and $C_2$, which is exactly why the error is tempting; the defect is independence, not whether it solves the equation.\n\nNothing forces $C_1$ and $C_2$ to be equal; any pair of values simply combines into the single effective constant $C_1+C_2$.\n\nIt is written with two constant symbols, not one; the real defect is that those two symbols are not independent of each other, not that there is only one of them."
  },
  {
    id: "mth302_ch4_026",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the general solution of $y'' - 2y' + 10y = 0$?",
    options: [
      "$e^{3x}(C_1\\cos x + C_2\\sin x)$, swapping the real and imaginary parts",
      "$e^{x}(C_1\\cos 3x + C_2\\sin 3x)$, from the roots $1 \\pm 3i$",
      "$e^{x}(C_1\\cos x + C_2\\sin 3x)$, mixing the real part into one trig argument and the imaginary part into the other",
      "$C_1e^{x} + C_2e^{3x}$, treating the roots as two distinct real roots"
    ],
    correctAnswer: 1,
    explanation: "The quadratic formula gives $r = \\dfrac{2 \\pm \\sqrt{4-40}}{2} = 1 \\pm 3i$, so the real part $1$ supplies the exponential factor $e^{x}$ and the imaginary part $3$ supplies the oscillation frequency, giving $e^{x}(C_1\\cos 3x + C_2\\sin 3x)$.\n\n$e^{3x}(C_1\\cos x + C_2\\sin x)$ swaps the roles of the real part and the imaginary part, a very common error.\n\n$e^{x}(C_1\\cos x + C_2\\sin 3x)$ mixes the real part into one trig argument and the imaginary part into the other, when both trig arguments must use the same imaginary part.\n\n$C_1e^{x} + C_2e^{3x}$ wrongly assumes two distinct real roots, but the roots here are complex."
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
    text: "Given that $y_1 = e^{-x}$ solves $y'' + 2y' + y = 0$, reduction of order sets $y = v(x)e^{-x}$ and $z = v'(x)$. After substituting $y=ve^{-x}$ into the equation and simplifying, what first-order equation does $z$ satisfy?",
    options: [
      "$z' + 2z = 0$, keeping only the coefficient of $y'$ from the equation and forgetting the contribution from $y_1$",
      "$z' - 2z = 0$, keeping only the contribution from $y_1$ and dropping the coefficient of $y'$ entirely",
      "$z' = 0$",
      "$z' - 4z = 0$, combining the two contributions with the wrong sign on the coefficient of $y'$"
    ],
    correctAnswer: 2,
    explanation: "With $y = ve^{-x}$: $y' = v'e^{-x} - ve^{-x}$ and $y'' = v''e^{-x} - 2v'e^{-x} + ve^{-x}$. Substituting into $y''+2y'+y=0$: $(v''e^{-x}-2v'e^{-x}+ve^{-x}) + 2(v'e^{-x}-ve^{-x}) + ve^{-x} = v''e^{-x} + 0\\cdot v'e^{-x} + 0\\cdot ve^{-x} = 0$, so $v''e^{-x}=0$ and, since $e^{-x}\\neq 0$, $v''=0$. With $z=v'$, this is $z'=0$, which is exactly why the repeated root $r=-1$ of $y''+2y'+y=0$ leads to a second solution of the form $xe^{-x}$: $z'=0$ gives $z=$ constant, so $v$ is linear in $x$.\n\n$z' + 2z = 0$ keeps only the coefficient $2$ from the original equation's $y'$ term and forgets the contribution $2y_1'/y_1 = -2$ coming from $y_1$, which exactly cancels it here.\n\n$z' - 2z = 0$ keeps only the contribution from $y_1$ and drops the equation's coefficient of $y'$ entirely, missing the cancellation.\n\n$z' - 4z = 0$ combines the two contributions with the wrong sign, adding their magnitudes instead of letting them cancel."
  },
  {
    id: "mth302_ch4_029",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Given that $y_1 = x^{-2}$ solves $x^2y'' + 5xy' + 4y = 0$ for $x > 0$, what is a second independent solution obtained by reduction of order?",
    options: [
      "$x^{-2}$, which merely repeats the known solution $y_1$",
      "$x^2\\ln x$, obtained by dropping the minus sign when forming $e^{-\\int P\\,dx}$",
      "$\\ln x$, omitting the required multiplication by $y_1 = x^{-2}$",
      "$x^{-2}\\ln x$, since integrating gives $y_2 = x^{-2}\\int (1/x)\\,dx$"
    ],
    correctAnswer: 3,
    explanation: "Standardizing by dividing through by $x^2$ gives $y'' + \\dfrac{5}{x}y' + \\dfrac{4}{x^2}y = 0$, so $P = 5/x$ and $e^{-\\int P\\,dx} = e^{-5\\ln x} = x^{-5}$. The reduction of order formula gives $y_2 = y_1\\displaystyle\\int \\dfrac{x^{-5}}{y_1^2}\\,dx = x^{-2}\\displaystyle\\int \\dfrac{x^{-5}}{x^{-4}}\\,dx = x^{-2}\\displaystyle\\int \\dfrac{dx}{x} = x^{-2}\\ln x$. This is the Euler-equation analogue of a repeated root: the characteristic-type equation $m(m-1)+5m+4=(m+2)^2=0$ has the double root $m=-2$, and just as a repeated root $r$ picks up an extra factor of $x$ in the constant-coefficient case, a repeated Euler root $m$ picks up an extra factor of $\\ln x$.\n\n$x^{-2}$ is just the known solution $y_1$ repeated and is not independent of itself.\n\n$x^2\\ln x$ comes from dropping the minus sign when forming $e^{-\\int P\\,dx}$, which flips $x^{-5}$ into $x^{5}$ and changes the sign of the power of $x$ in the final answer.\n\n$\\ln x$ alone omits the required multiplication by $y_1 = x^{-2}$."
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
    text: "For $y'' - y = 0$, which of the following pairs is a fundamental set of solutions?",
    options: [
      "$e^{x}$ and $e^{-x}$",
      "$e^{x}$ and $5e^{x}$, scalar multiples of the same function",
      "$\\sinh x$ and $2\\sinh x$, scalar multiples of the same function",
      "$e^{x}$ and $xe^{x}$, using the repeated-root pattern for an equation with distinct roots"
    ],
    correctAnswer: 0,
    explanation: "The equation $y''-y=0$ has characteristic roots $r=\\pm 1$, so $e^x$ and $e^{-x}$ solve it. Computing $W(e^x,e^{-x}) = e^x(-e^{-x}) - e^x(e^{-x}) = -1-1=-2$, which is never zero, confirms they form a fundamental set.\n\n$e^x$ and $5e^x$ are scalar multiples of the same function, so their Wronskian is identically zero and they are linearly dependent, not a fundamental set.\n\n$\\sinh x$ and $2\\sinh x$ are likewise scalar multiples of each other, even though $\\sinh x$ itself solves the equation.\n\n$e^x$ and $xe^x$ fails for a different reason: substituting $xe^x$ into $y''-y$ gives $2e^x$, not zero, so $xe^x$ is not even a solution here; the extra factor of $x$ only arises for a repeated root, and this equation has two distinct real roots $\\pm 1$."
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
    text: "For solutions of $y'' + \\dfrac{1}{x}y' + q(x)y = 0$ on $x > 0$, the Wronskian satisfies $W(3) = 0$. Using Abel's theorem, what is $W(10)$, and what does this imply about the two solutions?",
    options: [
      "$W(10)$ cannot be determined without knowing $q(x)$, so no relationship between $W(3)$ and $W(10)$ exists",
      "$W(10) = 0$, so the two solutions are linearly dependent on the interval",
      "$W(10) = 0$, so the two solutions are linearly independent on the interval",
      "$W(10) = 0$, but a Wronskian vanishing at a single point permits no conclusion about independence"
    ],
    correctAnswer: 1,
    explanation: "Abel's theorem gives $W(x) = Ce^{-\\int (1/x)\\,dx} = Ce^{-\\ln x} = C/x$. Since $1/x$ is never zero for $x>0$, the only way $W(3)=C/3$ can equal zero is if $C=0$, which forces $W(x)=0$ for every $x$ in the domain, including $W(10)=0$; two solutions of the same linear equation with an identically zero Wronskian are linearly dependent.\n\nClaiming $W(10)$ needs $q(x)$ ignores that Abel's theorem is built entirely from $p(x)$, the coefficient of $y'$; $q(x)$ never enters the formula.\n\n$W(10)=0$ paired with a claim of independence reverses the correct conclusion: a vanishing Wronskian signals dependence, not independence.\n\nClaiming that a single vanishing point permits no conclusion ignores exactly what Abel's theorem guarantees: because $W$ is a constant multiple of a nonvanishing exponential, it is either identically zero everywhere or nowhere zero, so one zero forces all zeros."
  }
];

export default mth302Chapter4;
