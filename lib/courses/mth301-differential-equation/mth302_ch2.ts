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
    text: "Consider the equation $y^2\\,dx + xy\\,dy = 0$, which is not exact since $M_y = 2y$ and $N_x = y$. What is the integrating factor that depends on $x$ alone?",
    options: [
      "$x^{-1}$",
      "$e^{xy}$",
      "$x$",
      "$y^{-1}$"
    ],
    correctAnswer: 2,
    explanation: "Since $M = y^2$ and $N = xy$, we get $M_y = 2y$ and $N_x = y$, so the equation is not exact. Computing $\\dfrac{M_y - N_x}{N} = \\dfrac{2y - y}{xy} = \\dfrac{1}{x}$ shows the quotient depends on $x$ alone, so $\\mu(x) = e^{\\int \\frac{1}{x}\\,dx} = e^{\\ln|x|} = x$.\n\n$x^{-1}$ comes from using $\\dfrac{N_x - M_y}{N}$ instead of $\\dfrac{M_y - N_x}{N}$, which flips the sign of the exponent to $e^{-\\ln|x|}$.\n\n$e^{xy}$ comes from skipping the division by $N$ and instead exponentiating $\\int (M_y - N_x)\\,dx = \\int y\\,dx = xy$ directly.\n\n$y^{-1}$ comes from applying the $y$-alone construction $\\dfrac{N_x - M_y}{M}$ instead, which is the wrong formula since the quotient here is a function of $x$, not $y$."
  },
  {
    id: "mth302_ch2_012",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $\\dfrac{dy}{dx} = (x^2+1)e^{-y}$?",
    options: [
      "$y = \\ln\\left(\\dfrac{x^3}{3} + x + C\\right)$",
      "$y = \\ln\\left(\\dfrac{x^3}{3} + x\\right) + C$",
      "$y = -\\ln\\left(\\dfrac{x^3}{3} + x + C\\right)$",
      "$\\dfrac{x^3}{3} + x + C$"
    ],
    correctAnswer: 0,
    explanation: "Separating gives $e^{y}\\,dy = (x^2+1)\\,dx$, so integrating both sides gives $e^{y} = \\dfrac{x^3}{3} + x + C$, and solving for $y$ gives $y = \\ln\\left(\\dfrac{x^3}{3} + x + C\\right)$.\n\n$y = \\ln\\left(\\dfrac{x^3}{3}+x\\right)+C$ places the constant of integration outside the logarithm instead of inside it, which changes the solution family since a constant added after taking the log is not the same as a constant added before it.\n\n$y = -\\ln\\left(\\dfrac{x^3}{3}+x+C\\right)$ carries an extra minus sign, as if the original equation had been $e^{-y}\\,dy = (x^2+1)\\,dx$ instead of $e^{y}\\,dy = (x^2+1)\\,dx$.\n\n$\\dfrac{x^3}{3}+x+C$ stops at the integrated form $e^y = \\dfrac{x^3}{3}+x+C$ and forgets to take the logarithm to solve for $y$."
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
    text: "Separating the equation $\\dfrac{dy}{dx} = x(y-3)^2$ by dividing both sides by $(y-3)^2$ gives $-\\dfrac{1}{y-3} = \\dfrac{x^2}{2} + C$. Which solution of the original equation does this division step fail to capture?",
    options: [
      "$y = 0$",
      "$y = -3$",
      "$y = 3$",
      "$y = x$"
    ],
    correctAnswer: 2,
    explanation: "Dividing by $(y-3)^2$ is only valid where $(y-3)^2 \\neq 0$, and the root of that factor is $y=3$. Substituting $y=3$ into the original equation gives $\\dfrac{dy}{dx}=0$ on the left and $x(3-3)^2=0$ on the right, so $y=3$ is a genuine constant solution that the division step discards.\n\n$y=0$ is not a root of $(y-3)^2$, and substituting it into the original equation gives $0 = 9x$, which fails except at $x=0$, so it is not a solution at all.\n\n$y=-3$ mistakes the root of $(y-3)^2$ for the negative of $3$ rather than $3$ itself.\n\n$y=x$ does not satisfy the original equation either, since substituting it gives $1 = x(x-3)^2$, which is not an identity in $x$."
  },
  {
    id: "mth302_ch2_015",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "For $F(x,y) = x^4 - 3x^2y^2 + y^4$, evaluating $F(2x,2y)$ and comparing it to $F(x,y)$ determines the degree of homogeneity. Which degree is confirmed by this computation?",
    options: [
      "Degree 2, since the middle term $x^2y^2$ is read as contributing degree 2 by counting only the exponent on $x$",
      "Degree 4, since $F(2x,2y) = 16x^4 - 48x^2y^2 + 16y^4 = 16F(x,y)$ and $2^4=16$",
      "Degree 16, since the scale factor $16$ obtained for $F(2x,2y)$ is mistaken for the degree itself instead of being solved as $2^n=16$",
      "Not homogeneous, since the minus sign in front of the middle term is mistaken for evidence that the terms scale inconsistently"
    ],
    correctAnswer: 1,
    explanation: "Substituting $2x$ and $2y$ gives $F(2x,2y)=16x^4-48x^2y^2+16y^4=16F(x,y)$, and since $2^4=16$, matching $\\lambda^n F(x,y)$ with $\\lambda=2$ confirms $n=4$, so $F$ is homogeneous of degree $4$.\n\nDegree $2$ undercounts the total degree of the mixed term $x^2y^2$, whose exponents on $x$ and $y$ together add to $4$, not $2$.\n\nDegree $16$ confuses the scale factor $16$ that $F$ picks up with the exponent $n$ itself, when in fact $16$ must be written as $2^n$ and solved for $n=4$.\n\nNot homogeneous is incorrect, since the identity $F(2x,2y)=16F(x,y)$ does hold exactly, confirming homogeneity of degree $4$ despite the minus sign in the middle term."
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
    text: "For the homogeneous equation $\\dfrac{dy}{dx} = \\dfrac{x^2+y^2}{xy}$, substituting $y=vx$ together with $y' = v + x\\dfrac{dv}{dx}$ and simplifying reduces it to which separable equation in $v$ and $x$?",
    options: [
      "$\\dfrac{v\\,dv}{1+v^2} = \\dfrac{dx}{x}$",
      "$v\\,dv = \\dfrac{dx}{x}$",
      "$v\\,dv = -\\dfrac{dx}{x}$",
      "$x\\,dv = \\dfrac{dx}{v}$"
    ],
    correctAnswer: 1,
    explanation: "Substituting $y=vx$ turns the right side into $\\dfrac{x^2+v^2x^2}{x \\cdot vx} = \\dfrac{1+v^2}{v}$, so the equation becomes $v + x\\dfrac{dv}{dx} = \\dfrac{1+v^2}{v}$. Subtracting $v$ gives $x\\dfrac{dv}{dx} = \\dfrac{1+v^2-v^2}{v} = \\dfrac{1}{v}$, which separates as $v\\,dv = \\dfrac{dx}{x}$.\n\n$\\dfrac{v\\,dv}{1+v^2} = \\dfrac{dx}{x}$ comes from treating $y'$ as $x\\dfrac{dv}{dx}$ alone and skipping the $+v$ term that the product rule contributes, so the $v^2$ terms never cancel.\n\n$v\\,dv = -\\dfrac{dx}{x}$ comes from a sign slip when combining $v$ and $\\dfrac{1+v^2}{v}$ over the common denominator $v$.\n\n$x\\,dv = \\dfrac{dx}{v}$ mixes up which variable is held fixed under the substitution, putting $x$ where $v$ belongs and $v$ where $x$ belongs."
  },
  {
    id: "mth302_ch2_018",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "For $\\dfrac{dy}{dx} + \\dfrac{2}{x+1}y = (x+1)^2$, valid for $x > -1$, what is the integrating factor?",
    options: [
      "$e^{2x}$",
      "$(x+1)^{-2}$",
      "$(x+1)^2$",
      "$2\\ln(x+1)$"
    ],
    correctAnswer: 2,
    explanation: "Here $P(x) = \\dfrac{2}{x+1}$, so $\\int P\\,dx = 2\\ln(x+1)$ and the integrating factor is $\\mu = e^{2\\ln(x+1)} = (x+1)^2$.\n\n$e^{2x}$ comes from reading the coefficient as the constant $2$ rather than $\\dfrac{2}{x+1}$, ignoring the shift by $1$.\n\n$(x+1)^{-2}$ carries the wrong sign in the exponent, as if $\\mu = e^{-\\int P\\,dx}$ rather than $e^{\\int P\\,dx}$.\n\n$2\\ln(x+1)$ stops at the integral $\\int P\\,dx$ without exponentiating to recover $\\mu$."
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
    text: "For $M\\,dx + N\\,dy = 0$ to admit a potential function $\\psi$ with $\\psi_x = M$ and $\\psi_y = N$, equality of the mixed partial derivatives $\\psi_{xy} = \\psi_{yx}$ forces a specific relation between $M$ and $N$. For $M = 2xy + y^2$ and $N = x^2 + 2xy$, which relation is confirmed by direct computation of the partial derivatives?",
    options: [
      "$M_x = N_y$, since both equal $2y$ after differentiating $2xy$ with respect to the wrong variable",
      "$M = N$, since setting $x=y$ makes the two coefficient functions identical",
      "$M_y + N_x = 0$, since the mixed partial contributions are required to cancel rather than match",
      "$M_y = N_x$, since both equal $2x+2y$ when computed directly"
    ],
    correctAnswer: 3,
    explanation: "Differentiating gives $M_y = 2x+2y$ and $N_x = 2x+2y$, which are equal, confirming that $\\psi_{xy}=\\psi_{yx}$ forces $M_y=N_x$ in general, and this pair satisfies it.\n\n$M_x = N_y$ pairs the wrong derivatives: $M_x = 2y$ but $N_y = 2x$, which are not equal here, so that relation does not hold, and it is not the exactness condition to begin with.\n\n$M=N$ is far too strong a requirement and is not implied by equality of mixed partials; $2xy+y^2$ and $x^2+2xy$ are not identical functions.\n\n$M_y+N_x=0$ would require $2(2x+2y)=0$ for this pair, which is false except along the line $x=-y$, and it is not what equality of mixed partials produces in any case."
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
    text: "Consider $2xy\\,dx + (y^2-x^2)\\,dy = 0$, which is not exact since $M_y = 2x$ and $N_x = -2x$. What is the integrating factor that depends on $y$ alone?",
    options: [
      "$y^{2}$",
      "$x^{-2}$",
      "$y^{-2}$",
      "$e^{-4xy}$"
    ],
    correctAnswer: 2,
    explanation: "Since $M=2xy$ and $N=y^2-x^2$, we get $M_y=2x$ and $N_x=-2x$, so the equation is not exact. Computing $\\dfrac{N_x-M_y}{M} = \\dfrac{-2x-2x}{2xy} = \\dfrac{-4x}{2xy} = -\\dfrac{2}{y}$ shows the quotient depends on $y$ alone, so $\\mu(y) = e^{\\int -\\frac{2}{y}\\,dy} = e^{-2\\ln|y|} = y^{-2}$.\n\n$y^{2}$ comes from dropping the minus sign in the exponent, as if $\\mu = e^{\\int \\frac{2}{y}\\,dy}$ instead of $e^{\\int -\\frac{2}{y}\\,dy}$.\n\n$x^{-2}$ mistakenly builds a factor depending on $x$, even though the quotient $\\dfrac{N_x-M_y}{M}$ simplifies to a function of $y$ alone here, which is exactly the condition that calls for a $y$-only factor.\n\n$e^{-4xy}$ comes from skipping the division by $M$ and instead exponentiating $\\int (N_x-M_y)\\,dy = \\int -4x\\,dy = -4xy$ directly."
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
    text: "For $\\dfrac{dy}{dx} + \\dfrac{3}{x}y = x^4$, using the integrating factor $\\mu = x^3$ gives the solution $y = \\dfrac{x^5}{8} + Cx^{-3}$. If a constant of integration were included when forming $\\mu$, say $\\mu = 2x^3$ instead of $x^3$, what happens to the final solution for $y$?",
    options: [
      "The solution is unchanged, because the extra factor of $2$ combines with the arbitrary constant of integration into a new arbitrary constant, leaving the same family $y = \\dfrac{x^5}{8} + Cx^{-3}$",
      "The particular part becomes $\\dfrac{x^5}{4}$ while the complementary part stays $Cx^{-3}$, since the factor of $2$ only affects the term coming from $Q(x)$",
      "The whole solution scales by $2$, giving $y = \\dfrac{x^5}{4} + 2Cx^{-3}$, since multiplying $\\mu$ by a constant multiplies $y$ by the same constant",
      "The equation becomes inconsistent, since two different integrating factors cannot both make the same linear equation exact"
    ],
    correctAnswer: 0,
    explanation: "Using $\\mu = 2x^3$, the equation becomes $(2x^3y)' = 2x^3 \\cdot x^4 = 2x^7$, so integrating gives $2x^3y = \\dfrac{x^8}{4} + K$, and dividing by $2x^3$ gives $y = \\dfrac{x^5}{8} + \\dfrac{K}{2x^3}$. Since $K$ is an arbitrary constant, relabeling $C = K/2$ gives exactly $y = \\dfrac{x^5}{8} + Cx^{-3}$, the same family obtained with $\\mu = x^3$, which is why no constant of integration is ever needed when forming $\\mu$.\n\nThe particular part does not become $\\dfrac{x^5}{4}$, since dividing $\\dfrac{x^8}{4}$ by $2x^3$ (not just $x^3$) gives back $\\dfrac{x^5}{8}$, unchanged.\n\nThe whole solution does not scale by $2$, since the factor of $2$ introduced in $\\mu$ is divided back out on both terms when solving for $y$, not carried through unchanged.\n\nThe equation does not become inconsistent, since $\\mu = 2x^3$ and $\\mu = x^3$ both make the same equation exact; any nonzero constant multiple of a valid integrating factor is itself a valid integrating factor."
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
    text: "Applying the substitution $y=vx$ to the homogeneous equation $\\dfrac{dy}{dx}=\\dfrac{x^2+3y^2}{2xy}$ and simplifying reduces it to which separable equation in $v$ and $x$?",
    options: [
      "$\\dfrac{2v}{1+3v^2}\\,dv = \\dfrac{dx}{x}$",
      "$\\dfrac{2v}{1+v^2}\\,dv = \\dfrac{dx}{x}$",
      "$\\dfrac{2v}{1+v^2}\\,dv = -\\dfrac{dx}{x}$",
      "$v\\,dv = \\dfrac{dx}{2x}$"
    ],
    correctAnswer: 1,
    explanation: "Substituting $y=vx$ turns the right side into $\\dfrac{x^2+3v^2x^2}{2x\\cdot vx} = \\dfrac{1+3v^2}{2v}$, so the equation becomes $v+x\\dfrac{dv}{dx} = \\dfrac{1+3v^2}{2v}$. Subtracting $v$ over the common denominator $2v$ gives $x\\dfrac{dv}{dx} = \\dfrac{1+3v^2-2v^2}{2v} = \\dfrac{1+v^2}{2v}$, which separates as $\\dfrac{2v}{1+v^2}\\,dv = \\dfrac{dx}{x}$.\n\n$\\dfrac{2v}{1+3v^2}\\,dv=\\dfrac{dx}{x}$ comes from dropping the $+v$ term contributed by the product rule and using $\\dfrac{1+3v^2}{2v}$ directly for $x\\dfrac{dv}{dx}$, so the $v^2$ terms never combine.\n\n$\\dfrac{2v}{1+v^2}\\,dv = -\\dfrac{dx}{x}$ comes from a sign slip when combining $v$ and $\\dfrac{1+3v^2}{2v}$ over the common denominator.\n\n$v\\,dv = \\dfrac{dx}{2x}$ comes from incorrectly simplifying $\\dfrac{1+v^2}{2v}$ down to $\\dfrac{v}{2}$, dropping the constant term $1$ inside the numerator."
  },
  {
    id: "mth302_ch2_034",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Consider $(2y-3x)\\,dx + x\\,dy = 0$, which is not exact since $M_y=2$ and $N_x=1$. After finding the integrating factor that depends on $x$ alone and multiplying through, what is the general solution?",
    options: [
      "$x^2y + x^3 = C$",
      "$2xy - \\dfrac{3}{2}x^2 = C$",
      "$x^2y - x^3 = C$",
      "$x^2y - \\dfrac{3}{2}x^2 = C$"
    ],
    correctAnswer: 2,
    explanation: "Computing $\\dfrac{M_y-N_x}{N} = \\dfrac{2-1}{x} = \\dfrac{1}{x}$ shows the quotient depends on $x$ alone, so $\\mu(x) = e^{\\int \\frac{1}{x}\\,dx} = x$. Multiplying through gives $(2xy-3x^2)\\,dx + x^2\\,dy = 0$, which is exact since both partials equal $2x$. Integrating $\\psi_x = 2xy-3x^2$ gives $\\psi = x^2y - x^3 + h(y)$, and matching $\\psi_y = x^2+h'(y)$ against $x^2$ forces $h'(y)=0$, so the solution is $x^2y-x^3=C$.\n\n$x^2y+x^3=C$ carries a sign error integrating $-3x^2$, as if its antiderivative were $+x^3$ rather than $-x^3$.\n\n$2xy-\\dfrac{3}{2}x^2=C$ comes from trying to integrate the original $M=2y-3x$ directly without first multiplying through by the integrating factor $x$.\n\n$x^2y-\\dfrac{3}{2}x^2=C$ comes from multiplying only the $2y$ term of $M$ by the integrating factor and forgetting to also multiply the $-3x$ term by $x$, leaving it as $-3x$ and integrating that to $-\\dfrac{3}{2}x^2$ instead of $-3x^2$ integrating to $-x^3$."
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
    text: "The equation $(3x^2+2xy)\\,dx + (x^2+4y^3)\\,dy = 0$ is exact. Using the potential function method with $\\psi_x=M$ and $\\psi_y=N$, what is the solution written as $\\psi(x,y)=C$?",
    options: [
      "$x^3+x^2y+4y^4=C$",
      "$3x^3+x^2y+y^4=C$",
      "$x^3+x^2y+y^4=C$",
      "$x^3+2xy+y^4=C$"
    ],
    correctAnswer: 2,
    explanation: "Integrating $\\psi_x=3x^2+2xy$ with respect to $x$ gives $\\psi = x^3+x^2y+h(y)$, and matching $\\psi_y = x^2+h'(y)$ against $N=x^2+4y^3$ forces $h'(y)=4y^3$, so $h(y)=y^4$ and the solution is $x^3+x^2y+y^4=C$.\n\n$x^3+x^2y+4y^4=C$ forgets to integrate $4y^3$ down to $y^4$, keeping the original coefficient $4$ instead.\n\n$3x^3+x^2y+y^4=C$ forgets to reduce the coefficient when integrating $3x^2$, keeping it as $3$ instead of correctly obtaining $x^3$.\n\n$x^3+2xy+y^4=C$ never actually integrates the $2xy$ term with respect to $x$, leaving it in its original unintegrated form instead of the correct $x^2y$."
  }
];

export default mth302Chapter2;
