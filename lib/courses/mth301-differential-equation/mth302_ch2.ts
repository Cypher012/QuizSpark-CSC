import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter2: QuestionV2[] = [
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
  {
    id: "mth302_ch2_002",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $y' + 2y = e^{-x}$?",
    options: [
      "$y = e^{-x} + Ce^{-2x}$",
      "$y = e^x + Ce^{2x}$",
      "$y = e^{-x} + Ce^{2x}$",
      "$y = Ce^{-2x}$"
    ],
    correctAnswer: 0,
    explanation: "With integrating factor $e^{2x}$, the equation becomes $(e^{2x}y)' = e^x$, so $e^{2x}y = e^x + C$, giving $y = e^{-x} + Ce^{-2x}$.\n\n$y = e^x + Ce^{2x}$ reverses the signs throughout.\n\n$y = e^{-x} + Ce^{2x}$ gets the particular part right but the complementary part wrong.\n\n$y = Ce^{-2x}$ is only the complementary solution; a nonzero right-hand side must contribute a particular part as well."
  },
  {
    id: "mth302_ch2_003",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Which substitution reduces $\\dfrac{dy}{dx} = \\dfrac{x + y}{x}$ to a separable equation?",
    options: [
      "$v = x + y$",
      "$v = y'$",
      "$y = vx$",
      "$v = 1/y$"
    ],
    correctAnswer: 2,
    explanation: "The right-hand side equals $1 + y/x$, a function of $y/x$ alone, so the equation is homogeneous, and the standard substitution for a homogeneous equation is $y = vx$ together with $y' = v + xv'$, which turns it into a separable equation in $v$ and $x$.\n\n$v = x + y$ and $v = 1/y$ are substitutions used for other equation types, not for homogeneous first-order equations.\n\n$v = y'$ does not reduce the equation to separable form at all."
  },
  {
    id: "mth302_ch2_004",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the solution of $\\dfrac{dy}{dx} = \\dfrac{x}{y}$ with $y(0) = 2$?",
    options: [
      "$y^2 = x^2 + 2$",
      "$y^2 = x^2 + 4$",
      "$y = x^2 + 4$",
      "$y^2 = 2x^2 + 4$"
    ],
    correctAnswer: 1,
    explanation: "Separating gives $y\\,dy = x\\,dx$, so $\\dfrac{y^2}{2} = \\dfrac{x^2}{2} + C$, i.e. $y^2 = x^2 + 2C$. Applying $y(0) = 2$ gives $4 = 0 + 2C$, so $y^2 = x^2 + 4$.\n\n$y^2 = x^2 + 2$ comes from substituting the initial condition into $y$ rather than into $y^2$.\n\n$y = x^2 + 4$ forgets that the relation is quadratic in $y$, not linear.\n\n$y^2 = 2x^2 + 4$ has an extra factor of $2$ on the $x^2$ term that does not follow from the separation."
  },
  {
    id: "mth302_ch2_005",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "The equation $(2xy + 1)\\,dx + (x^2 + 6y)\\,dy = 0$ is exact. What is its solution?",
    options: [
      "$x^2y + x + 3y^2 = C$",
      "$x^2y + x + 6y^2 = C$",
      "$2xy + x + 3y^2 = C$",
      "$x^2y + y + 3y^2 = C$"
    ],
    correctAnswer: 0,
    explanation: "Checking $M_y = 2x = N_x$ confirms exactness. Integrating $M$ with respect to $x$ gives $\\psi = x^2y + x + h(y)$, and matching $\\psi_y = x^2 + h'(y)$ against $N = x^2 + 6y$ forces $h'(y) = 6y$, so $h = 3y^2$, giving $x^2y + x + 3y^2 = C$.\n\n$x^2y + x + 6y^2 = C$ forgets to integrate $6y$ down to $3y^2$.\n\n$2xy + x + 3y^2 = C$ fails to integrate the $2xy$ term with respect to $x$ into $x^2y$.\n\n$x^2y + y + 3y^2 = C$ drops the $x$ term that comes from integrating the constant part of $M$."
  },
  {
    id: "mth302_ch2_006",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the solution of $y' - \\dfrac{2}{x}y = x^2$ for $x > 0$?",
    options: [
      "$y = x^2 + Cx^3$",
      "$y = x^3 + Cx^{-2}$",
      "$y = \\dfrac{x^3}{3} + Cx^2$",
      "$y = x^3 + Cx^2$"
    ],
    correctAnswer: 3,
    explanation: "Here $P = -2/x$, so the integrating factor is $\\mu = e^{-2\\ln x} = x^{-2}$. Then $(x^{-2}y)' = x^{-2}x^2 = 1$, so $x^{-2}y = x + C$, giving $y = x^3 + Cx^2$.\n\n$y = x^2 + Cx^3$ and $y = \\dfrac{x^3}{3} + Cx^2$ do not follow from correctly multiplying through by $1/\\mu = x^2$.\n\n$y = x^3 + Cx^{-2}$ uses the wrong sign in the exponent when converting back from $\\mu$."
  },
  {
    id: "mth302_ch2_007",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What degree of homogeneity does $F(x, y) = x^3 + x^2 y$ have?",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "Not homogeneous"
    ],
    correctAnswer: 2,
    explanation: "$F(\\lambda x, \\lambda y) = \\lambda^3 x^3 + \\lambda^3 x^2 y = \\lambda^3 F(x, y)$, so the function is homogeneous of degree $3$. A quick check is that every term of a homogeneous function carries the same total degree, and here both $x^3$ and $x^2y$ are degree $3$.\n\n$1$ and $2$ undercount the total degree of each term.\n\nNot homogeneous is wrong since the defining scaling relation does hold, with degree exactly $3$."
  },
  {
    id: "mth302_ch2_008",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $\\dfrac{dy}{dx} = 1 + \\dfrac{y}{x}$?",
    options: [
      "$y = x\\ln|x| + C$",
      "$y = x(\\ln|x| + C)$",
      "$y = Cx + \\ln|x|$",
      "$y = \\ln|x| + C$"
    ],
    correctAnswer: 1,
    explanation: "With $y = vx$, the equation becomes $v + xv' = 1 + v$, so $xv' = 1$, giving $v = \\ln|x| + C$, and therefore $y = vx = x(\\ln|x| + C)$.\n\n$y = x\\ln|x| + C$ drops the $x$ that should multiply the constant $C$, which produces a genuinely different family of functions since $Cx$ and $C$ are not the same function.\n\n$y = Cx + \\ln|x|$ and $y = \\ln|x| + C$ do not correctly distribute $x$ across both terms of $v$."
  },
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
  {
    id: "mth302_ch2_010",
    course: "MTH 302",
    chapter: "Chapter 2",
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
  {
    id: "mth302_ch2_011",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "An integrating factor depending on $x$ alone exists for $M\\,dx + N\\,dy = 0$ under which condition?",
    options: [
      "$M_y$ equals $N_x$",
      "$\\dfrac{M_y - N_x}{N}$ is a function of $x$ only",
      "$\\dfrac{M_y - N_x}{M}$ is a function of $x$ only",
      "$M$ and $N$ are both homogeneous"
    ],
    correctAnswer: 1,
    explanation: "When $\\dfrac{M_y - N_x}{N}$ depends on $x$ alone, the integrating factor $\\mu(x) = \\exp\\left(\\int \\dfrac{M_y - N_x}{N}\\,dx\\right)$ makes the equation exact.\n\n$M_y$ equals $N_x$ is the condition for the equation to already be exact, meaning no integrating factor is needed at all.\n\n$\\dfrac{M_y - N_x}{M}$ is a function of $x$ only is close in form but is actually the condition used to build the $y$-only integrating factor via $\\dfrac{N_x - M_y}{M}$ as a function of $y$.\n\n$M$ and $N$ are both homogeneous does not by itself guarantee an integrating factor depending on $x$ alone."
  },
  {
    id: "mth302_ch2_012",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "An equation of the form $\\dfrac{dy}{dx} = f(x)g(y)$ is solved by which method?",
    options: [
      "Separation of variables",
      "The integrating factor method",
      "The exactness test and a potential function",
      "Reduction of order"
    ],
    correctAnswer: 0,
    explanation: "Because the right-hand side factors into a function of $x$ times a function of $y$, the variables can be separated to give $\\int \\dfrac{dy}{g(y)} = \\int f(x)\\,dx + C$.\n\nBuilding an integrating factor is the method for a linear equation $y' + P(x)y = Q(x)$, which is a different standard form.\n\nTesting $M_y = N_x$ and constructing $\\psi$ is the procedure for an exact equation written as $M\\,dx + N\\,dy = 0$.\n\nReduction of order builds a second solution from an already-known one for a second-order equation, which has no bearing on this first-order separable equation."
  },
  {
    id: "mth302_ch2_013",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Separating $\\dfrac{dy}{dx} = xy^2$ and integrating gives which family?",
    options: [
      "$y = \\dfrac{-2}{x^2 + C}$",
      "$y = \\dfrac{2}{x^2} + C$",
      "$y = Cx^2$",
      "$y = e^{x^2/2} + C$"
    ],
    correctAnswer: 0,
    explanation: "Separating gives $y^{-2}\\,dy = x\\,dx$, so $-y^{-1} = \\dfrac{x^2}{2} + C$, and solving for $y$ produces $y = \\dfrac{-2}{x^2 + C}$ after absorbing the factor of two into the constant.\n\nIntegrating each side independently without first isolating $y^{-2}\\,dy$ misapplies the separation step.\n\nTreating the equation as homogeneous is inappropriate, since the right-hand side is not a function of $y/x$ alone.\n\nExponentiating both sides has no justification here, because the integration produces a reciprocal rather than a logarithm."
  },
  {
    id: "mth302_ch2_014",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "When separating variables, dividing by $g(y)$ risks losing which solutions?",
    options: [
      "The constant solutions where $g(y) = 0$",
      "The solutions that grow without bound as $x$ increases",
      "The solutions passing through the origin of the plane",
      "The solutions that fail to be differentiable at isolated points"
    ],
    correctAnswer: 0,
    explanation: "Division by $g(y)$ is invalid wherever $g(y) = 0$, and each root of $g$ supplies a constant solution that the resulting family cannot reproduce, as with $y \\equiv 0$ for $y' = xy^2$.\n\nUnbounded growth is a feature some solutions in the family already have, so nothing is lost there.\n\nPassing through the origin is not what the division step excludes; the obstruction is the vanishing of $g$, wherever that occurs.\n\nDifferentiability failures are not created or removed by dividing through by $g(y)$."
  },
  {
    id: "mth302_ch2_015",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "The function $F$ is homogeneous of degree $n$ when which identity holds?",
    options: [
      "$F(\\lambda x, \\lambda y) = \\lambda^n F(x, y)$",
      "$F$ depends only on the ratio $y/x$",
      "$F(x + \\lambda, y + \\lambda) = F(x, y)$",
      "$F$ has $n$ continuous partial derivatives"
    ],
    correctAnswer: 0,
    explanation: "Homogeneity of degree $n$ means scaling both arguments by $\\lambda$ scales the value by $\\lambda^n$, which is exactly $F(\\lambda x, \\lambda y) = \\lambda^n F(x, y)$.\n\nBeing a function of $y/x$ alone corresponds to homogeneity of degree zero, a special case rather than the general definition.\n\nAdding $\\lambda$ to each argument describes a translation property, which is unrelated to homogeneity under scaling.\n\nThe existence of partial derivatives up to order $n$ is a smoothness condition and says nothing about scaling behaviour."
  },
  {
    id: "mth302_ch2_016",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Of what degree is $F(x, y) = x^2 + xy + y^2$ homogeneous?",
    options: [
      "Degree $2$",
      "Degree $3$",
      "Degree $1$",
      "It is not homogeneous of any degree"
    ],
    correctAnswer: 0,
    explanation: "Replacing $x$ by $\\lambda x$ and $y$ by $\\lambda y$ gives $\\lambda^2x^2 + \\lambda^2xy + \\lambda^2y^2 = \\lambda^2F(x, y)$, so the degree is $2$.\n\nDegree $3$ would require every term to be cubic, whereas each term here is quadratic.\n\nDegree $1$ would require the terms to be linear in $x$ and $y$.\n\nThe function is homogeneous, since all three terms share the same total degree of two."
  },
  {
    id: "mth302_ch2_017",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Under the substitution $y = vx$, what does $\\dfrac{dy}{dx}$ become?",
    options: [
      "$v + x\\dfrac{dv}{dx}$",
      "$x\\dfrac{dv}{dx}$ alone, since $v$ is treated as a constant during differentiation",
      "$\\dfrac{dv}{dx}$ alone, because the factor $x$ cancels against the substitution",
      "$v\\dfrac{dv}{dx}$, obtained by applying the chain rule to the product"
    ],
    correctAnswer: 0,
    explanation: "Differentiating the product $y = vx$ with respect to $x$ gives $\\dfrac{dy}{dx} = v + x\\dfrac{dv}{dx}$, and it is this expression that converts a homogeneous equation into a separable one.\n\nTreating $v$ as constant drops the $v$ term and ignores that $v$ depends on $x$.\n\nClaiming the factor $x$ cancels misapplies the product rule entirely.\n\nThe form $v\\dfrac{dv}{dx}$ would arise from differentiating something like $v^2/2$, not from the product $vx$."
  },
  {
    id: "mth302_ch2_018",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "For the linear equation $y' + P(x)y = Q(x)$, what is the integrating factor?",
    options: [
      "$\\mu = e^{\\int P\\,dx}$",
      "$\\mu = e^{\\int Q\\,dx}$",
      "$\\mu = e^{-\\int P\\,dx}$",
      "$\\mu = \\int P\\,dx$"
    ],
    correctAnswer: 0,
    explanation: "The factor $\\mu = e^{\\int P\\,dx}$ satisfies $\\mu' = \\mu P$, which is precisely what makes the left-hand side collapse into the derivative $(\\mu y)'$.\n\nBuilding the factor from $Q$ ignores that the forcing term plays no part in producing an exact derivative.\n\nThe negative exponent would give $\\mu' = -\\mu P$ and would fail to produce $(\\mu y)'$.\n\nOmitting the exponential leaves a function that does not satisfy the required differential relation."
  },
  {
    id: "mth302_ch2_019",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Before computing an integrating factor, what must first be done to $xy' + 2y = x^3$?",
    options: [
      "Divide through by $x$ so the coefficient of $y'$ becomes $1$",
      "Multiply through by $x$ so that every term becomes a polynomial in $x$",
      "Move the term $2y$ to the right-hand side before identifying $P$",
      "Differentiate both sides once to remove the variable coefficient"
    ],
    correctAnswer: 0,
    explanation: "The formula $\\mu = e^{\\int P\\,dx}$ reads $P$ off the standard form $y' + P(x)y = Q(x)$, so dividing by $x$ to get $y' + \\dfrac{2}{x}y = x^2$ is required, yielding $\\mu = x^2$ rather than $e^{2x}$.\n\nMultiplying by $x$ moves further away from the standard form instead of towards it.\n\nMoving $2y$ across destroys the structure that the integrating factor is designed to exploit.\n\nDifferentiating both sides raises the order of the equation and does not help identify $P$."
  },
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
  {
    id: "mth302_ch2_021",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "The equation $M\\,dx + N\\,dy = 0$ is exact precisely when which condition holds?",
    options: [
      "$M_y = N_x$",
      "$M_x = N_y$",
      "$M = N$ identically",
      "$M_y + N_x = 0$"
    ],
    correctAnswer: 0,
    explanation: "Exactness on a simply connected region is equivalent to $M_y = N_x$, which is the consistency condition for a potential $\\psi$ with $\\psi_x = M$ and $\\psi_y = N$ to exist.\n\nComparing $M_x$ with $N_y$ pairs the wrong derivatives and does not test the equality of mixed partials of $\\psi$.\n\nRequiring $M = N$ is far too strong and holds for almost no exact equation.\n\nRequiring the sum to vanish describes a different relation altogether and does not follow from equality of mixed partials."
  },
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
  {
    id: "mth302_ch2_023",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the solution of the exact equation $(2xy + 3)\\,dx + (x^2 + 4y)\\,dy = 0$?",
    options: [
      "$x^2y + 3x + 2y^2 = C$",
      "$x^2y + 3x + 4y^2 = C$",
      "$2xy + 3x + x^2 + 4y = C$",
      "$x^2y + 3x = C$"
    ],
    correctAnswer: 0,
    explanation: "Integrating $\\psi_x = 2xy + 3$ gives $\\psi = x^2y + 3x + h(y)$, and matching $\\psi_y = x^2 + h'(y)$ against $N = x^2 + 4y$ gives $h'(y) = 4y$, hence $h = 2y^2$ and the solution $x^2y + 3x + 2y^2 = C$.\n\nWriting $4y^2$ forgets that integrating $4y$ produces $2y^2$.\n\nAdding $M$ and $N$ directly is not how a potential function is recovered.\n\nDiscarding the $y$-only terms drops the entire contribution of $h(y)$."
  },
  {
    id: "mth302_ch2_024",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "If $\\dfrac{N_x - M_y}{M}$ depends on $y$ alone, an integrating factor is given by which expression?",
    options: [
      "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M}\\,dy}$",
      "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N}\\,dx}$, which is the companion case for $x$",
      "$\\mu(y) = \\dfrac{N_x - M_y}{M}$, used directly without any integration",
      "$\\mu(y) = e^{\\int M\\,dy}$, built from the first coefficient function alone"
    ],
    correctAnswer: 0,
    explanation: "When the combination $\\dfrac{N_x - M_y}{M}$ is a function of $y$ only, integrating it with respect to $y$ and exponentiating produces a factor that makes the equation exact.\n\nThe expression with $\\dfrac{M_y - N_x}{N}$ integrated in $x$ is the companion test, which applies when that quotient depends on $x$ alone.\n\nUsing the quotient directly omits the integration and exponentiation that the derivation requires.\n\nBuilding the factor from $M$ alone ignores the mismatch between the mixed partial derivatives, which is what must be corrected."
  },
  {
    id: "mth302_ch2_025",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $\\dfrac{dy}{dx} = ky$, where $k$ is constant?",
    options: [
      "$y = Ce^{kx}$",
      "$y = e^{kx} + C$",
      "$y = kx + C$",
      "$y = C e^{kx^2/2}$"
    ],
    correctAnswer: 0,
    explanation: "Separating gives $\\dfrac{dy}{y} = k\\,dx$, so $\\ln|y| = kx + c$ and $y = Ce^{kx}$, with the constant appearing multiplicatively.\n\nAdding the constant outside the exponential does not satisfy the equation, since differentiating gives $ke^{kx}$ rather than $k(e^{kx} + C)$.\n\nIntegrating the right-hand side as if $y$ were absent ignores that $y$ depends on $x$.\n\nThe squared exponent would arise if the coefficient were $kx$ rather than the constant $k$."
  },
  {
    id: "mth302_ch2_026",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Separating $\\dfrac{dy}{dx} = \\dfrac{x}{y}$ leads to which relation between $x$ and $y$?",
    options: [
      "$y^2 - x^2 = C$",
      "$y^2 + x^2 = C$",
      "$y = x + C$",
      "$\\ln|y| = \\ln|x| + C$"
    ],
    correctAnswer: 0,
    explanation: "Separating gives $y\\,dy = x\\,dx$, and integrating both sides yields $\\dfrac{y^2}{2} = \\dfrac{x^2}{2} + c$, which rearranges to $y^2 - x^2 = C$.\n\nA sum of squares would require the two terms to move to the same side with the same sign, which the integration does not produce.\n\nCancelling the variables in the fraction is not a legitimate operation on a differential equation.\n\nThe logarithmic form would arise from $\\dfrac{dy}{y} = \\dfrac{dx}{x}$, which is a different equation."
  },
  {
    id: "mth302_ch2_027",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the integrating factor of $y' + \\dfrac{1}{x}y = 1$?",
    options: [
      "$x$",
      "$\\ln|x|$",
      "$e^{x}$",
      "$\\dfrac{1}{x}$"
    ],
    correctAnswer: 0,
    explanation: "With $P(x) = \\dfrac{1}{x}$ we get $\\int P\\,dx = \\ln|x|$, so $\\mu = e^{\\ln|x|} = x$.\n\nStopping at $\\ln|x|$ omits the exponentiation that the formula requires.\n\nExponentiating $x$ itself ignores that the exponent must be $\\int P\\,dx$.\n\nUsing the coefficient unchanged skips both the integration and the exponentiation."
  },
  {
    id: "mth302_ch2_028",
    course: "MTH 302",
    chapter: "Chapter 2",
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
  {
    id: "mth302_ch2_029",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Applying $y = vx$ to $\\dfrac{dy}{dx} = 1 + \\dfrac{y}{x}$ reduces it to which equation?",
    options: [
      "$x\\dfrac{dv}{dx} = 1$",
      "$x\\dfrac{dv}{dx} = 1 + 2v$, keeping the substituted ratio on the right as well",
      "$\\dfrac{dv}{dx} = v$, after the factor of $x$ has been divided out of both sides",
      "$v\\dfrac{dv}{dx} = 1 + v$, applying the product rule to the left-hand side"
    ],
    correctAnswer: 0,
    explanation: "Substituting $y = vx$ gives $v + x\\dfrac{dv}{dx} = 1 + v$, and the terms in $v$ cancel to leave $x\\dfrac{dv}{dx} = 1$.\n\nRetaining $2v$ on the right fails to cancel the $v$ contributed by the product rule against the $v$ from $y/x$.\n\nDividing out $x$ prematurely loses the very factor that makes the equation separable in $v$ and $x$.\n\nThe form with $v\\dfrac{dv}{dx}$ misapplies the product rule, which yields $v + x\\dfrac{dv}{dx}$."
  },
  {
    id: "mth302_ch2_030",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Integrating $x\\dfrac{dv}{dx} = 1$ and returning to $y$ through $y = vx$ gives which solution?",
    options: [
      "$y = x(\\ln|x| + C)$",
      "$y = x\\ln|x| + C$, adding the constant only after multiplying back by $x$",
      "$y = \\ln|x| + C$, leaving the result in terms of $v$ without restoring $y$",
      "$y = Cx$, obtained by treating $\\dfrac{dv}{dx}$ as identically zero"
    ],
    correctAnswer: 0,
    explanation: "Separating gives $dv = \\dfrac{dx}{x}$, so $v = \\ln|x| + C$, and since $y = vx$ the solution is $y = x(\\ln|x| + C)$ with the constant inside the bracket.\n\nPlacing the constant outside the product changes the family, because the substitution multiplies the whole of $v$ by $x$.\n\nLeaving the answer as $v$ omits the final step of returning to the original unknown.\n\nTreating the derivative as zero contradicts the equation, which states that it equals $1/x$."
  },
  {
    id: "mth302_ch2_031",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "In the solution formula $y = \\dfrac{1}{\\mu}\\left(\\int \\mu Q\\,dx + C\\right)$, why is no constant of integration needed inside $\\mu$ itself?",
    options: [
      "Because it cancels between the numerator and the denominator",
      "Because the constant is always zero for every choice of the coefficient $P(x)$",
      "Because the integral defining $\\mu$ is a definite integral with fixed limits",
      "Because $\\mu$ is required by definition to take the value $1$ at the origin"
    ],
    correctAnswer: 0,
    explanation: "Including a constant would multiply $\\mu$ by a fixed nonzero factor, and that factor appears in both the numerator and the denominator of the solution formula, so it cancels and changes nothing.\n\nThe constant is not forced to be zero; it is simply irrelevant to the final answer.\n\nThe integral defining $\\mu$ is indefinite, so appealing to fixed limits misdescribes the construction.\n\nThere is no normalisation requiring $\\mu$ to equal $1$ at the origin."
  },
  {
    id: "mth302_ch2_032",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the integrating factor of $y' + \\dfrac{2}{x}y = x^2$?",
    options: [
      "$x^2$",
      "$e^{2x}$",
      "$2\\ln|x|$",
      "$x^{-2}$"
    ],
    correctAnswer: 0,
    explanation: "With $P(x) = \\dfrac{2}{x}$ we get $\\int P\\,dx = 2\\ln|x| = \\ln x^2$, so $\\mu = e^{\\ln x^2} = x^2$.\n\n$e^{2x}$ results from reading the coefficient as the constant $2$ rather than $\\dfrac{2}{x}$.\n\n$2\\ln|x|$ stops at the integral without exponentiating.\n\n$x^{-2}$ carries the wrong sign in the exponent."
  },
  {
    id: "mth302_ch2_033",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Which substitution converts a homogeneous first-order equation $y' = F(y/x)$ into a separable one?",
    options: [
      "$y = vx$",
      "$v = x^2y$",
      "$\\mu = e^{\\int P\\,dx}$",
      "$x = vy^2$"
    ],
    correctAnswer: 0,
    explanation: "Setting $y = vx$ gives $y' = v + xv'$, and substituting turns the equation into one separable in $v$ and $x$.\n\nThe substitution $v = x^2y$ does not arise from the homogeneous $y\'=F(y/x)$ form at all.\n\nThe expression $\\mu = e^{\\int P\\,dx}$ is an integrating factor, not a substitution.\n\nThe form $x = vy^2$ is not a standard substitution for this class."
  },
  {
    id: "mth302_ch2_034",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "If $\\dfrac{M_y - N_x}{N}$ depends on $x$ alone, which integrating factor makes $M\\,dx + N\\,dy = 0$ exact?",
    options: [
      "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N}\\,dx}$",
      "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M}\\,dy}$",
      "$\\mu(x) = \\dfrac{M_y - N_x}{N}$",
      "$\\mu(x) = e^{\\int N\\,dx}$"
    ],
    correctAnswer: 0,
    explanation: "When that quotient is a function of $x$ only, integrating it in $x$ and exponentiating produces a factor depending on $x$ that restores exactness.\n\nThe factor built from $\\dfrac{N_x - M_y}{M}$ integrated in $y$ is the companion case, used when that quotient depends on $y$ alone.\n\nUsing the quotient directly omits the integration and exponentiation.\n\nBuilding the factor from $N$ alone ignores the mismatch between the mixed partial derivatives."
  },
  {
    id: "mth302_ch2_035",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $\\dfrac{dy}{dx} = \\dfrac{y}{x}$?",
    options: [
      "$y = Cx$",
      "$y = x + C$",
      "$y = Ce^{x}$",
      "$y = C\\ln|x|$"
    ],
    correctAnswer: 0,
    explanation: "Separating gives $\\dfrac{dy}{y} = \\dfrac{dx}{x}$, so $\\ln|y| = \\ln|x| + c$ and therefore $y = Cx$.\n\n$y = x + C$ would follow from $\\dfrac{dy}{dx} = 1$.\n\n$y = Ce^{x}$ solves $\\dfrac{dy}{dx} = y$ instead.\n\n$y = C\\ln|x|$ does not satisfy the equation on substitution."
  },
  {
    id: "mth302_ch2_036",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "For an exact equation with potential $\\psi$ satisfying $\\psi_x = M$ and $\\psi_y = N$, the solution is written how?",
    options: [
      "$\\psi(x, y) = C$",
      "$\\psi(x, y) = 0$",
      "$\\psi_x + \\psi_y = C$",
      "$\\psi(x, y) = Mx + Ny$"
    ],
    correctAnswer: 0,
    explanation: "Because $d\\psi = M\\,dx + N\\,dy = 0$ along solutions, the potential is constant, giving the implicit solution $\\psi(x, y) = C$.\n\nSetting the potential to zero picks out one particular level curve rather than the general family.\n\nAdding the two partial derivatives does not reconstruct the potential.\n\nThe expression $Mx + Ny$ is not how the potential is recovered from $M$ and $N$."
  }
];

export default mth302Chapter2;
