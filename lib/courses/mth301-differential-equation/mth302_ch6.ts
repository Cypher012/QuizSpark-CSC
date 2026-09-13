import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter6: QuestionV2[] = [
  {
    id: "mth302_ch6_001",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the linear PDE $5u_x + 3u_y + 2u = 4x$, matching it against $a(x,y)u_x + b(x,y)u_y + cu = f(x,y)$ and then forming the characteristic equation $dy/dx = b/a$, what is the resulting characteristic equation?",
    options: [
      "$\\dfrac{dy}{dx} = \\dfrac{3}{5}$",
      "$\\dfrac{dy}{dx} = \\dfrac{5}{3}$",
      "$\\dfrac{dy}{dx} = -\\dfrac{3}{5}$",
      "$\\dfrac{dy}{dx} = \\dfrac{2}{5}$"
    ],
    correctAnswer: 0,
    explanation: "Matching the equation against $au_x+bu_y+cu=f$ gives $a=5$ and $b=3$ (the term $4x$ plays the role of $f$ and does not enter the ratio), so the characteristic equation is $dy/dx = b/a = 3/5$.\n\n$dy/dx = 5/3$ inverts the ratio, using $a/b$ instead of $b/a$, which is the most common error in this topic.\n\n$dy/dx = -3/5$ introduces a sign that does not belong in the standard characteristic equation.\n\n$dy/dx = 2/5$ mistakenly uses the coefficient $c=2$ in place of $b$."
  },
  {
    id: "mth302_ch6_002",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What are the characteristic curves of $4u_x + 2u_y + u = 0$?",
    options: [
      "$2x - y = $ constant",
      "$x - 2y = $ constant",
      "$x + 2y = $ constant",
      "$4x - 2y = $ constant"
    ],
    correctAnswer: 1,
    explanation: "Using $\\dfrac{dy}{dx} = \\dfrac{b}{a} = \\dfrac{2}{4} = \\dfrac{1}{2}$ gives $y = x/2 + c$, which rearranges to $x - 2y = $ constant.\n\n$2x - y = $ constant results from using $a/b$ instead of the correct ratio $b/a$.\n\n$x + 2y = $ constant and $4x - 2y = $ constant do not follow from correctly solving $\\dfrac{dy}{dx} = \\dfrac{1}{2}$."
  },
  {
    id: "mth302_ch6_003",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What is the general solution of $4u_x + 2u_y + u = 0$?",
    options: [
      "$u = e^{-x/4}F(x - 2y)$",
      "$u = e^{-x/2}F(x - 2y)$",
      "$u = e^{-x/4}F(2x - y)$",
      "$u = e^{-x/4} + F(x - 2y)$"
    ],
    correctAnswer: 0,
    explanation: "Along the characteristics $x - 2y = $ constant, the equation reduces to $\\dfrac{du}{dx} = -\\dfrac{u}{4}$, giving $u = e^{-x/4}F(x - 2y)$ with $F$ an arbitrary function, which can be checked directly by substitution since the $F'$ terms cancel exactly.\n\n$e^{-x/2}F(x - 2y)$ has the wrong constant in the exponent.\n\n$e^{-x/4}F(2x - y)$ has the correct exponential factor but the wrong characteristic variable.\n\n$e^{-x/4} + F(x - 2y)$ is structurally wrong: since the equation is homogeneous and linear, the arbitrary function must multiply the exponential factor, not be added to it."
  },
  {
    id: "mth302_ch6_004",
    course: "MTH 302",
    chapter: "Chapter 6",
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
  {
    id: "mth302_ch6_005",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What is the general solution of $3u_x + u_y + 2u = 0$?",
    options: [
      "$u = e^{-2x/3}F(x - 3y)$",
      "$u = e^{-2x}F(x - 3y)$",
      "$u = e^{-2x/3}F(3x - y)$",
      "$u = e^{-2y}F(x + 3y)$"
    ],
    correctAnswer: 0,
    explanation: "The characteristics satisfy $\\dfrac{dy}{dx} = \\dfrac{1}{3}$, so $x - 3y = $ constant. Along them, $3\\dfrac{du}{dx} = -2u$, giving $u = e^{-2x/3}F(x - 3y)$.\n\n$e^{-2x}F(x - 3y)$ forgets to divide the exponent by the coefficient $a = 3$ when integrating along the characteristic.\n\n$e^{-2x/3}F(3x - y)$ has the correct exponential factor but the wrong characteristic variable.\n\n$e^{-2y}F(x + 3y)$ uses the wrong variable in the exponential decay and the wrong sign in the characteristic argument."
  },
  {
    id: "mth302_ch6_006",
    course: "MTH 302",
    chapter: "Chapter 6",
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
  {
    id: "mth302_ch6_007",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What is the general solution of $u_{xx} - 4u = 0$, treating $u$ as a function of $x$ and $y$?",
    options: [
      "$P(y)e^{2x} + Q(y)e^{-2x}$",
      "$P(x)e^{2y} + Q(x)e^{-2y}$",
      "$C_1e^{2x} + C_2e^{-2x}$",
      "$P(y)\\cos 2x + Q(y)\\sin 2x$"
    ],
    correctAnswer: 0,
    explanation: "Since only $x$-derivatives appear, $y$ acts as a parameter, and the auxiliary equation $r^2 - 4 = 0$ gives $r = \\pm 2$. The constants of integration then become arbitrary functions of the parameter $y$, giving $P(y)e^{2x} + Q(y)e^{-2x}$.\n\n$P(x)e^{2y} + Q(x)e^{-2y}$ mismatches which variable carries the arbitrary function.\n\n$C_1e^{2x} + C_2e^{-2x}$ is the correct form for an ODE but misses the necessary dependence on $y$.\n\n$P(y)\\cos 2x + Q(y)\\sin 2x$ would be correct only for the equation $u_{xx} + 4u = 0$, since the roots here are real, not imaginary."
  },
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
  {
    id: "mth302_ch6_009",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "A student proposes the change of variables $\\xi = x + y$, $\\eta = x - y$ to simplify a first-order linear PDE. Computing $\\xi_x = 1$, $\\xi_y = 1$, $\\eta_x = 1$, $\\eta_y = -1$, what is the Jacobian $J = \\xi_x\\eta_y - \\xi_y\\eta_x$, and is the transformation admissible?",
    options: [
      "$J = -2$, so the transformation is admissible since $J \\neq 0$",
      "$J = 0$, so the transformation is admissible since $\\xi$ and $\\eta$ are linearly independent",
      "$J = 2$, so the transformation fails because a positive Jacobian is not allowed",
      "$J = -1$, so the transformation is admissible only where $x \\neq y$"
    ],
    correctAnswer: 0,
    explanation: "$J = \\xi_x\\eta_y - \\xi_y\\eta_x = (1)(-1) - (1)(1) = -2$, which is nonzero everywhere, so the transformation is admissible: a nonvanishing Jacobian is exactly the condition for the map to be locally one-to-one and invertible.\n\n$J=0$ misstates the arithmetic and also draws the wrong conclusion, since a vanishing Jacobian would make the transformation fail rather than succeed.\n\n$J=2$ drops the minus sign in the subtraction, and there is no rule that forbids a positive Jacobian; only a zero Jacobian is disallowed.\n\n$J=-1$ miscomputes the product $\\xi_y\\eta_x$ and wrongly restricts admissibility to a subset of the plane, when in fact $J=-2$ holds everywhere."
  },
  {
    id: "mth302_ch6_010",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "How many arbitrary functions appear in the general solution of a first-order PDE in two independent variables?",
    options: [
      "One arbitrary constant",
      "Two arbitrary constants",
      "One arbitrary function, one for each order of the equation",
      "Two arbitrary functions"
    ],
    correctAnswer: 2,
    explanation: "Integrating along the characteristics replaces the constant of integration familiar from ODEs with a function that is constant along each characteristic curve, so a first-order PDE carries one arbitrary function in its general solution; a second-order PDE would require two.\n\nOne arbitrary constant and two arbitrary constants both wrongly apply the ODE pattern of constants rather than functions.\n\nTwo arbitrary functions is the count that applies to a second-order PDE, not a first-order one."
  },
  {
    id: "mth302_ch6_011",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the quasilinear equation $(2x+u)u_x + (y-3u)u_y = u+1$, what system of ordinary differential equations determines its characteristics?",
    options: [
      "$\\dfrac{dx}{dt} = 2x+u$, $\\dfrac{dy}{dt} = y-3u$, $\\dfrac{du}{dt} = u+1$",
      "$\\dfrac{dx}{dt} = u+1$, $\\dfrac{dy}{dt} = y-3u$, $\\dfrac{du}{dt} = 2x+u$",
      "$\\dfrac{dy}{dx} = \\dfrac{2x+u}{y-3u}$ only, with no equation for $u$ along the curve",
      "$\\dfrac{dx}{dt} = 2x+u$, $\\dfrac{dy}{dt} = u+1$, $\\dfrac{du}{dt} = y-3u$"
    ],
    correctAnswer: 0,
    explanation: "For a quasilinear equation $f u_x + g u_y = h$, the characteristics are curves in $(x,y,u)$ space satisfying $dx/dt = f$, $dy/dt = g$, $du/dt = h$. Here $f = 2x+u$, $g = y-3u$, $h = u+1$, giving exactly $dx/dt = 2x+u$, $dy/dt = y-3u$, $du/dt = u+1$.\n\nAssigning $dx/dt = u+1$ and $du/dt = 2x+u$ swaps which expression drives $dx/dt$ and which drives $du/dt$, mismatching the coefficients with their derivatives.\n\nWriting only $dy/dx = (2x+u)/(y-3u)$ collapses the problem back to a planar curve and drops the equation tracking how $u$ changes along the characteristic, which matters because the coefficients depend on $u$.\n\nAssigning $dy/dt = u+1$ and $du/dt = y-3u$ swaps $h$ and $g$ between the last two derivatives, again mismatching the coefficients."
  },
  {
    id: "mth302_ch6_012",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "Under what condition does the Cauchy problem for a first-order PDE have a unique solution?",
    options: [
      "When data are prescribed along a characteristic curve",
      "When data are prescribed nowhere",
      "When data are prescribed at a single point",
      "When data are prescribed along a non-characteristic curve"
    ],
    correctAnswer: 3,
    explanation: "Along a characteristic curve the PDE reduces to an ordinary differential equation, so data prescribed there are either inconsistent with that ODE, giving no solution, or already fully determined by it, giving infinitely many extensions. Data given on a curve that crosses the characteristics transversally propagate uniquely along them, giving a unique solution.\n\nWhen data are prescribed along a characteristic curve is exactly the problematic case that produces either no solution or infinitely many.\n\nWhen data are prescribed nowhere gives no information from which to construct a solution at all.\n\nWhen data are prescribed at a single point is insufficient information for a first-order PDE, which needs data along an entire curve."
  },
  {
    id: "mth302_ch6_013",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the linear PDE $(x-1)u_x + (y+2)u_y + u = 0$, at which point $(x,y)$ do the coefficients of $u_x$ and $u_y$ both vanish simultaneously, which would violate the standing assumption that $a$ and $b$ are never both zero at once?",
    options: [
      "$(1, -2)$",
      "$(-1, 2)$, obtained by flipping the sign of both roots found for $x-1=0$ and $y+2=0$",
      "$(1, 2)$, obtained by solving $x-1=0$ correctly but flipping the sign of the root of $y+2=0$",
      "$(0, 0)$"
    ],
    correctAnswer: 0,
    explanation: "Here $a(x,y) = x-1$ and $b(x,y) = y+2$. Setting both to zero gives $x-1=0$ and $y+2=0$, that is $x=1$ and $y=-2$, so the point is $(1,-2)$; at this point the equation would have no surviving first-order derivative, which is exactly the degeneracy the assumption on $a$ and $b$ rules out.\n\nFlipping the sign of both coordinates misreads the roots of $x-1=0$ and $y+2=0$.\n\nSolving $x-1=0$ correctly but flipping the sign of the root of $y+2=0$ mixes a correct step with an incorrect one.\n\n$(0, 0)$ does not make either coefficient vanish, since $a(0,0) = -1$ and $b(0,0)=2$."
  },
  {
    id: "mth302_ch6_014",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $\\xi = x^2 - y$ and $\\eta = 2x + y$, what is the Jacobian $J = \\xi_x\\eta_y - \\xi_y\\eta_x$ evaluated at $x = 3$?",
    options: [
      "$8$",
      "$6$",
      "$4$",
      "$-8$"
    ],
    correctAnswer: 0,
    explanation: "Here $\\xi_x = 2x$, $\\xi_y = -1$, $\\eta_x = 2$, $\\eta_y = 1$, so $J = \\xi_x\\eta_y - \\xi_y\\eta_x = 2x - (-1)(2) = 2x + 2$. At $x=3$ this gives $J = 6+2 = 8$.\n\n$6$ keeps only $\\xi_x\\eta_y = 2x = 6$ and drops the term $-\\xi_y\\eta_x$ entirely.\n\n$4$ adds the two products instead of subtracting them, computing $\\xi_x\\eta_y + \\xi_y\\eta_x = 6 + (-2) = 4$.\n\n$-8$ flips the overall sign of the correct determinant."
  },
  {
    id: "mth302_ch6_015",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "In the change-of-variables derivation, $\\eta$ is chosen so that which coefficient vanishes?",
    options: [
      "The coefficient of $w_\\eta$",
      "The coefficient of $w_\\xi$",
      "The coefficient of $w$ itself, removing the undifferentiated term",
      "The forcing term $F(\\xi,\\eta)$ on the right-hand side"
    ],
    correctAnswer: 0,
    explanation: "Imposing $a\\eta_x + b\\eta_y = 0$ kills the $w_\\eta$ term, leaving an equation involving only $w_\\xi$ and $w$, which is the desired simplified shape.\n\nRemoving the $w_\\xi$ term instead would destroy the derivative that carries the equation.\n\nThe coefficient of $w$ is not what the choice of $\\eta$ targets.\n\nThe forcing term cannot be removed by a change of variables."
  },
  {
    id: "mth302_ch6_016",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the PDE $7u_x + 4u_y + u = 0$, the requirement $a\\eta_x + b\\eta_y = 0$ determines $\\eta$. What ratio does $\\eta_x/\\eta_y$ equal in this case?",
    options: [
      "$-\\dfrac{4}{7}$",
      "$-\\dfrac{7}{4}$, inverting the ratio of coefficients instead of using $-b/a$",
      "$\\dfrac{4}{7}$",
      "$\\dfrac{7}{4}$, both inverting the ratio of coefficients and dropping the minus sign"
    ],
    correctAnswer: 0,
    explanation: "Here $a=7$ and $b=4$. Rearranging $a\\eta_x+b\\eta_y=0$ gives $\\eta_x/\\eta_y = -b/a = -4/7$.\n\nInverting the ratio of coefficients gives $-7/4$, using $-a/b$ instead of $-b/a$.\n\n$4/7$ has the correct magnitude but drops the minus sign that comes from rearranging the equation.\n\nCombining both errors gives $7/4$: the inverted ratio with the sign also dropped."
  },
  {
    id: "mth302_ch6_017",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the PDE $6u_x + 9u_y = 0$, which differential form is equivalent to its characteristic equation $dy/dx = b/a$?",
    options: [
      "$\\dfrac{dx}{6} = \\dfrac{dy}{9}$",
      "$\\dfrac{dx}{9} = \\dfrac{dy}{6}$, swapping which coefficient sits under which differential",
      "$9\\,dx = 6\\,dy$",
      "$\\dfrac{dx}{dy} = \\dfrac{9}{6}$, keeping the same ratio but on the wrong side of the equation"
    ],
    correctAnswer: 0,
    explanation: "Here $a=6$ and $b=9$, so $dy/dx = 9/6$. Cross-multiplying gives $6\\,dy = 9\\,dx$, which is the same as $dx/6 = dy/9$, so the coefficient of $u_x$ sits under $dx$.\n\nSwapping which coefficient sits under which differential gives $dx/9=dy/6$, exactly the reversal this topic warns against.\n\n$9\\,dx = 6\\,dy$ cross-multiplies with the coefficients on the wrong sides, which corresponds to $dy/dx = 6/9$ rather than $9/6$.\n\nKeeping the same ratio but on the wrong side of the equation gives $dx/dy = 9/6$, which is equivalent to $dy/dx = 6/9$, the reversed ratio."
  },
  {
    id: "mth302_ch6_018",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $4u_x + 2u_y + u = 0$, what is $\\dfrac{dy}{dx}$ along a characteristic?",
    options: [
      "$\\dfrac{1}{2}$",
      "$2$",
      "$4$, using only the coefficient of the first derivative term",
      "$-\\dfrac{1}{2}$, with a sign introduced from the relation"
    ],
    correctAnswer: 0,
    explanation: "Here $a = 4$ and $b = 2$, so $dy/dx = b/a = 2/4 = 1/2$.\n\nTaking $a/b$ gives $2$ and reverses the ratio, which is the most common error in this topic.\n\nUsing $a$ alone ignores the coefficient of $u_y$ entirely.\n\nThe characteristic slope carries no extra minus sign here."
  },
  {
    id: "mth302_ch6_019",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the PDE $3u_x + 2u_y + u = 5$, taking $\\xi = x$ so that $\\eta$ stays constant along each characteristic, the equation reduces along that characteristic to an ordinary differential equation in $x$. What is that ODE?",
    options: [
      "$\\dfrac{du}{dx} + \\dfrac{1}{3}u = \\dfrac{5}{3}$",
      "$\\dfrac{du}{dx} + 3u = 5$, forgetting to divide the coefficient of $u$ by $a=3$ before rearranging",
      "$\\dfrac{du}{dx} - \\dfrac{1}{3}u = \\dfrac{5}{3}$, introducing a sign error on the $u$ term not present in the original equation",
      "$3\\dfrac{du}{dx} - u = 5$, both keeping the undivided coefficient $3$ on the derivative and flipping the sign of $u$"
    ],
    correctAnswer: 0,
    explanation: "Along the characteristic, only differentiation with respect to $\\xi = x$ survives, so the PDE becomes $3\\,du/dx + u = 5$; dividing through by the coefficient $a=3$ gives $du/dx + u/3 = 5/3$.\n\nForgetting to divide the coefficient of $u$ by $a=3$ before rearranging leaves $du/dx + 3u = 5$.\n\nIntroducing a sign error on the $u$ term gives $du/dx - u/3 = 5/3$, which does not come from the original equation.\n\nKeeping the undivided coefficient $3$ on the derivative and flipping the sign of $u$ gives $3\\,du/dx - u = 5$."
  },
  {
    id: "mth302_ch6_020",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $x^2u_x + yu_y + xyu = 1$, what are $a$, $b$, $c$ and $f$?",
    options: [
      "$a = x^2$, $b = y$, $c = xy$, $f = 1$",
      "$a = y$, $b = x^2$, $c = xy$, $f = 1$",
      "$a = x^2$, $b = y$, $c = 1$, $f = xy$",
      "$a = x^2$, $b = xy$, $c = y$, $f = 1$"
    ],
    correctAnswer: 0,
    explanation: "Matching against $au_x + bu_y + cu = f$ reads $a$ from the coefficient of $u_x$, $b$ from that of $u_y$, $c$ from that of $u$, and $f$ from the right-hand side.\n\nSwapping $a$ and $b$ misassigns the two first-order coefficients.\n\nExchanging $c$ and $f$ confuses the undifferentiated coefficient with the forcing term.\n\nAssigning $xy$ to $b$ misreads which term multiplies $u_y$."
  },
  {
    id: "mth302_ch6_021",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $x^2u_x + yu_y + xyu = 1$, what is the characteristic relation obtained by integration?",
    options: [
      "$\\ln y + \\dfrac{1}{x} = K$",
      "$\\ln y - \\dfrac{1}{x} = K$",
      "$\\ln x + \\dfrac{1}{y} = K$, interchanging the roles of the two variables",
      "$\\ln y + \\ln x = K$, integrating both sides as logarithms"
    ],
    correctAnswer: 0,
    explanation: "From $dy/dx = y/x^2$ we get $dy/y = dx/x^2$, so $\\ln y = -1/x + K$, that is $\\ln y + 1/x = K$.\n\nReversing the sign of the reciprocal contradicts the integral of $x^{-2}$.\n\nInterchanging $x$ and $y$ misreads which variable is separated.\n\nIntegrating $dx/x^2$ as a logarithm ignores the square in the denominator."
  },
  {
    id: "mth302_ch6_022",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "With $\\xi = x$ and $\\eta = \\ln y + \\dfrac{1}{x}$, what is the Jacobian?",
    options: [
      "$\\dfrac{1}{y}$",
      "$y$",
      "$-\\dfrac{1}{x^2}$, taken from the derivative of the reciprocal term",
      "$1$, since $\\xi$ equals $x$ exactly"
    ],
    correctAnswer: 0,
    explanation: "With $\\xi_x = 1$, $\\xi_y = 0$, $\\eta_y = 1/y$, the determinant is $\\xi_x\\eta_y - \\xi_y\\eta_x = 1\\cdot\\dfrac{1}{y} - 0 = \\dfrac{1}{y}$.\n\nTaking $y$ inverts the computed value.\n\nThe quantity $-1/x^2$ is $\\eta_x$, which is multiplied by the vanishing $\\xi_y$.\n\nThe value $1$ ignores the factor $\\eta_y$ altogether."
  },
  {
    id: "mth302_ch6_023",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "By the chain rule, what does $u_x$ become under $\\xi = \\phi(x,y)$, $\\eta = \\psi(x,y)$?",
    options: [
      "$w_\\xi\\xi_x + w_\\eta\\eta_x$",
      "$w_\\xi\\xi_y + w_\\eta\\eta_y$",
      "$w_\\xi + w_\\eta$, omitting the derivatives of the new variables",
      "$w_\\xi\\eta_x + w_\\eta\\xi_x$, pairing each derivative with the other variable"
    ],
    correctAnswer: 0,
    explanation: "Differentiating $w(\\xi,\\eta)$ with respect to $x$ gives $w_\\xi\\xi_x + w_\\eta\\eta_x$.\n\nUsing the $y$ derivatives produces the expression for $u_y$, not $u_x$.\n\nDropping the factors $\\xi_x$ and $\\eta_x$ discards the chain rule entirely.\n\nPairing $w_\\xi$ with $\\eta_x$ crosses the two contributions."
  },
  {
    id: "mth302_ch6_024",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "After substituting the chain-rule expressions, the coefficient of $w_\\xi$ in the transformed equation is which combination?",
    options: [
      "$a\\xi_x + b\\xi_y$",
      "$a\\eta_x + b\\eta_y$",
      "$a\\xi_x - b\\xi_y$, with the two contributions subtracted",
      "$\\xi_x + \\xi_y$, omitting the coefficients of the equation"
    ],
    correctAnswer: 0,
    explanation: "Collecting terms gives $(a\\xi_x + b\\xi_y)w_\\xi + (a\\eta_x + b\\eta_y)w_\\eta + cw = f$, so the coefficient of $w_\\xi$ is $a\\xi_x + b\\xi_y$.\n\nThe combination in $\\eta$ is the one deliberately made to vanish.\n\nSubtracting the two contributions misreads the collection of terms.\n\nDropping $a$ and $b$ loses the coefficients of the original equation."
  },
  {
    id: "mth302_ch6_025",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the PDE $4u_x + 6u_y = 0$, a student proposes $\\eta = 3x - 2y$ as the variable that stays constant along characteristics. Computing $a\\eta_x + b\\eta_y$ with $a=4$, $b=6$, $\\eta_x = 3$, $\\eta_y = -2$, does this choice of $\\eta$ make the coefficient of $w_\\eta$ vanish?",
    options: [
      "Yes, since $a\\eta_x + b\\eta_y = 4(3) + 6(-2) = 0$",
      "No, since $a\\eta_x + b\\eta_y = 4(3) + 6(2) = 24$, forgetting the sign of $\\eta_y$",
      "No, since only $a\\eta_x = 12$ should be compared to zero, and $12 \\neq 0$",
      "Yes, but only because the Jacobian of this transformation happens to equal one"
    ],
    correctAnswer: 0,
    explanation: "Substituting the given partial derivatives, $a\\eta_x + b\\eta_y = 4(3) + 6(-2) = 12 - 12 = 0$, so this choice of $\\eta$ does make the $w_\\eta$ term vanish exactly, which is the whole point of choosing $\\eta$ to be constant along characteristics.\n\nClaiming the sum equals $24$ drops the minus sign on $\\eta_y=-2$, treating it as $+2$, and so miscomputes the total as $24$ instead of $0$.\n\nComparing only $a\\eta_x=12$ against zero ignores $b\\eta_y$ altogether, which is not what the vanishing condition asks for.\n\nThe claim about the Jacobian is right about the vanishing but for an irrelevant reason; the vanishing of $a\\eta_x+b\\eta_y$ has nothing to do with the Jacobian equaling one, only with the Jacobian being nonzero elsewhere in the argument."
  },
  {
    id: "mth302_ch6_026",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What are the characteristic curves of $u_x + 3u_y = 0$?",
    options: [
      "$3x - y = \\text{const}$",
      "$x - 3y = \\text{const}$",
      "$x + 3y = \\text{const}$",
      "$3x + y = \\text{const}$, combining the coefficients additively"
    ],
    correctAnswer: 0,
    explanation: "With $a = 1$ and $b = 3$ we get $dy/dx = 3$, so $y = 3x + c$ and the characteristics are $3x - y = \\text{const}$.\n\nThe form $x - 3y$ arises from taking $dy/dx = 1/3$, which reverses the ratio.\n\nA plus sign contradicts integrating $dy = 3\\,dx$.\n\nThe combination $3x + y$ likewise carries the wrong sign."
  },
  {
    id: "mth302_ch6_027",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the quasilinear equation $u\\,u_x + x\\,u_y = y + u^2$, in which space are the characteristics determined, and why?",
    options: [
      "$(x,y,u)$ space, because the coefficient $u$ multiplying $u_x$ depends on the unknown itself",
      "The $(x,y)$ plane alone, because the coefficient $x$ multiplying $u_y$ does not depend on $u$",
      "The $(\\xi,\\eta)$ plane, since these become the natural coordinates once the standard linear change of variables is applied",
      "A four-dimensional space that includes $u_x$ and $u_y$ as additional coordinates alongside $x$, $y$, and $u$"
    ],
    correctAnswer: 0,
    explanation: "Because the coefficient of $u_x$ is $u$ itself, the equation is genuinely quasilinear, and its characteristics are curves in $(x,y,u)$ space determined by $dx/dt=u$, $dy/dt=x$, $du/dt=y+u^2$.\n\nRestricting to the $(x,y)$ plane notices correctly that $x$ does not depend on $u$, but a single coefficient depending on $u$ is enough to require the full $(x,y,u)$ space; it is not necessary for every coefficient to depend on $u$.\n\nInvoking the $(\\xi,\\eta)$ plane confuses the characteristic space with the transformed coordinates used for linear equations whose coefficients are independent of $u$, which does not apply here.\n\nClaiming a four-dimensional space overcounts the dimensions needed; the derivatives $u_x$ and $u_y$ are not themselves coordinates of the characteristic curves."
  },
  {
    id: "mth302_ch6_028",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the quasilinear equation $y\\,u_x + (x+u)u_y = xu$, what system of ordinary differential equations determines its characteristics?",
    options: [
      "$\\dfrac{dx}{y} = \\dfrac{dy}{x+u} = \\dfrac{du}{xu}$",
      "$\\dfrac{dx}{x+u} = \\dfrac{dy}{y} = \\dfrac{du}{xu}$, swapping which expression sits under $dx$ and which sits under $dy$",
      "$\\dfrac{dx}{y} = \\dfrac{dy}{x+u}$ only",
      "$\\dfrac{dx}{xu} = \\dfrac{dy}{x+u} = \\dfrac{du}{y}$, exchanging the outer denominators so that $h$ sits under $dx$ and $f$ sits under $du$"
    ],
    correctAnswer: 0,
    explanation: "Matching against $f u_x + g u_y = h$ gives $f=y$, $g=x+u$, $h=xu$, and the coefficient of each derivative sits under the corresponding differential, giving $dx/y = dy/(x+u) = du/(xu)$.\n\nSwapping which expression sits under $dx$ and which sits under $dy$ reverses the roles of $f$ and $g$.\n\nWriting only $dx/y=dy/(x+u)$ omits the ratio involving $du$, which is needed because $h=xu$ is not identically zero.\n\nExchanging the outer denominators puts $h$ under $dx$ and $f$ under $du$, mismatching both."
  },
  {
    id: "mth302_ch6_029",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the PDE $3u_x + 4u_y = 0$, whose characteristic curves are $4x - 3y = \\text{constant}$, initial data for the Cauchy problem are prescribed along the line $4x - 3y = 7$. What does this imply?",
    options: [
      "The data curve is itself a characteristic, so the data are either inconsistent with the equation or fail to determine $u$ uniquely off that line",
      "The data curve is non-characteristic, so the data determine a unique solution everywhere in the plane",
      "The data curve crosses every characteristic transversally, which guarantees the Cauchy problem is well-posed",
      "Since $4x-3y=7$ is a straight line, the Cauchy problem is automatically well-posed regardless of the characteristics"
    ],
    correctAnswer: 0,
    explanation: "The characteristic family for this equation is $4x-3y=\\text{constant}$, and the data curve $4x-3y=7$ is exactly one member of that family, so it is a characteristic curve; along it the PDE reduces to an ODE that either already fixes the prescribed data or contradicts it, leaving no unique solution off that line.\n\nCalling the curve non-characteristic misidentifies it, when it is in fact one of the characteristics.\n\nClaiming transversal crossing is false here because a curve from the characteristic family runs parallel to, and coincides with, the characteristics rather than crossing them transversally.\n\nAppealing to the line being straight ignores the characteristic structure entirely; straightness of the data curve has no bearing on well-posedness, only its relationship to the characteristics does."
  },
  {
    id: "mth302_ch6_030",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "The general solution of a first-order PDE in two variables contains what?",
    options: [
      "One arbitrary function",
      "One arbitrary constant",
      "Two arbitrary functions, one for each independent variable present",
      "No arbitrary element once the coefficients are specified"
    ],
    correctAnswer: 0,
    explanation: "A PDE carries one arbitrary function per order, so a first-order equation has exactly one.\n\nOffering a constant of integration for a PDE is the standard cross-topic distractor.\n\nTwo arbitrary functions would correspond to a second-order equation.\n\nA general solution must retain an arbitrary element."
  },
  {
    id: "mth302_ch6_031",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What are the characteristic curves of $u_x - u_y = 0$?",
    options: [
      "$x + y = \\text{const}$",
      "$x - y = \\text{const}$",
      "$xy = \\text{const}$",
      "$x^2 + y^2 = \\text{const}$, treating the curves as circles"
    ],
    correctAnswer: 0,
    explanation: "With $a = 1$ and $b = -1$ we get $dy/dx = -1$, so $y = -x + c$ and the characteristics are $x + y = \\text{const}$.\n\nThe combination $x - y$ would follow from a slope of $+1$.\n\nA product of the variables does not arise from a constant slope.\n\nCircles would require a slope depending on position."
  },
  {
    id: "mth302_ch6_032",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the PDE $2u_x + 7u_y + 3u = x$, the change of variables reduces it to the form $w_\\xi + h(\\xi,\\eta)w = F(\\xi,\\eta)$ with $\\xi = x$. What are $h$ and $F$?",
    options: [
      "$h = \\dfrac{3}{2}$ and $F = \\dfrac{\\xi}{2}$",
      "$h = \\dfrac{2}{3}$ and $F = 2\\xi$, inverting the roles of $a$ and $c$ when forming $h=c/a$ and $F=f/a$",
      "$h = 3$ and $F = \\xi$",
      "$h = \\dfrac{3}{2}$ and $F = \\dfrac{\\xi}{3}$, dividing the forcing term by the wrong coefficient when forming $F=f/a$"
    ],
    correctAnswer: 0,
    explanation: "Dividing the equation through by the coefficient $a=2$ of $u_x$ gives $w_\\xi + (3/2)w = x/2$, and since $\\xi = x$, this is $w_\\xi + (3/2)w = \\xi/2$, so $h=3/2$ and $F=\\xi/2$.\n\nInverting the roles of $a$ and $c$ when forming $h=c/a$, and similarly mishandling $F=f/a$, gives $h=2/3$ and $F=2\\xi$.\n\n$h=3$ and $F=\\xi$ forgets to divide either coefficient by $a=2$ at all.\n\nDividing the forcing term by the wrong coefficient when forming $F=f/a$ gets $h$ right but gives $F=\\xi/3$ instead of $\\xi/2$."
  },
  {
    id: "mth302_ch6_033",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $\\xi = x^2 + y$ and $\\eta = x - y^2$, what is the Jacobian $J = \\xi_x\\eta_y - \\xi_y\\eta_x$ at the point $(x,y) = (1,1)$, and what does it imply about invertibility there?",
    options: [
      "$J = -5$, so the transformation is locally invertible at that point",
      "$J = -4$, so the transformation is locally invertible at that point",
      "$J = -3$, so the transformation is locally invertible at that point",
      "$J = 0$, so the transformation fails to be invertible at that point"
    ],
    correctAnswer: 0,
    explanation: "Here $\\xi_x = 2x$, $\\xi_y=1$, $\\eta_x=1$, $\\eta_y=-2y$. At $(1,1)$ these are $\\xi_x=2$, $\\xi_y=1$, $\\eta_x=1$, $\\eta_y=-2$, so $J = (2)(-2) - (1)(1) = -4-1 = -5$, which is nonzero, so the transformation is locally invertible there.\n\n$J=-4$ keeps only the term $\\xi_x\\eta_y=-4$ and drops the term $-\\xi_y\\eta_x$ entirely.\n\n$J=-3$ adds the two products instead of subtracting them, computing $\\xi_x\\eta_y+\\xi_y\\eta_x=-4+1=-3$.\n\n$J=0$ misreads the partial derivatives so badly that the two terms appear to cancel, when in fact $-4$ and $-1$ combine to $-5$, not zero."
  },
  {
    id: "mth302_ch6_034",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $2u_x - 5u_y = 0$, what is $\\dfrac{dy}{dx}$ along a characteristic?",
    options: [
      "$-\\dfrac{5}{2}$",
      "$-\\dfrac{2}{5}$",
      "$\\dfrac{5}{2}$",
      "$\\dfrac{2}{5}$, both inverting the ratio and dropping the sign"
    ],
    correctAnswer: 0,
    explanation: "With $a = 2$ and $b = -5$ the characteristic equation gives $dy/dx = b/a = -5/2$.\n\nInverting the ratio produces $-2/5$ and reverses the roles of the coefficients.\n\nDropping the minus sign contradicts the negative coefficient of $u_y$.\n\nCombining both errors gives $2/5$."
  },
  {
    id: "mth302_ch6_035",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "In the derivation, what does $w(\\xi,\\eta)$ denote?",
    options: [
      "The unknown $u$ expressed in the new variables",
      "The Jacobian of the transformation between the two coordinate systems",
      "The forcing term rewritten in the new coordinates",
      "The characteristic curve itself, parametrised by $\\xi$"
    ],
    correctAnswer: 0,
    explanation: "By definition $w(\\xi,\\eta) = u(x(\\xi,\\eta), y(\\xi,\\eta))$, so $w$ is simply $u$ seen in the new coordinates.\n\nThe Jacobian is a determinant of derivatives, not the unknown function.\n\nThe forcing term is written as $F(\\xi,\\eta)$, a separate object.\n\nA characteristic curve is a locus in the plane, not the dependent variable."
  },
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
  {
    id: "mth302_ch6_037",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the linear PDE $4xu_x - 3yu_y + 7u = 2x+5$, identify $a$, $b$, $c$, and $f$, and determine which of them is responsible for the equation being nonhomogeneous.",
    options: [
      "$f = 2x+5$, which is nonzero, so the equation is nonhomogeneous",
      "$c = 7$, which is nonzero, so the equation is nonhomogeneous",
      "$a = 4x$, which is not constant, so the equation is nonhomogeneous",
      "$b = -3y$, which is negative, so the equation is nonhomogeneous"
    ],
    correctAnswer: 0,
    explanation: "Matching against $au_x+bu_y+cu=f$ gives $a=4x$, $b=-3y$, $c=7$, $f=2x+5$. Homogeneity is decided by the term free of $u$: since $f=2x+5$ is not identically zero, the equation is nonhomogeneous.\n\n$c=7$ multiplies $u$ itself and so belongs to the homogeneous part of the equation regardless of its value; a nonzero $c$ does not make an equation nonhomogeneous.\n\n$a=4x$ being a variable rather than constant coefficient affects neither linearity nor homogeneity, only how the characteristic equation is integrated.\n\n$b=-3y$ being negative is likewise irrelevant to homogeneity, which depends only on whether $f$ vanishes identically."
  },
  {
    id: "mth302_ch6_038",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What are the characteristic curves of $yu_x + xu_y = 0$?",
    options: [
      "$x^2 - y^2 = \\text{const}$",
      "$x^2 + y^2 = \\text{const}$, which would follow from a sign change in the relation",
      "$xy = \\text{const}$, obtained by inverting the ratio of the coefficients",
      "$x - y = \\text{const}$, treating the coefficients as constants"
    ],
    correctAnswer: 0,
    explanation: "Here $dy/dx = x/y$, so $y\\,dy = x\\,dx$ and integrating gives $y^2/2 = x^2/2 + c$, that is $x^2 - y^2 = \\text{const}$.\n\nA sum of squares would require $y\\,dy = -x\\,dx$.\n\nThe product $xy$ arises from $dy/dx = -y/x$, which reverses the coefficients.\n\nA linear combination would require constant coefficients."
  },
  {
    id: "mth302_ch6_039",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "In the worked transformation of $x^2u_x + yu_y + xyu = 1$, what happens to the two $w_\\eta$ terms?",
    options: [
      "They cancel exactly",
      "They combine into a single term with a doubled coefficient",
      "They are discarded as negligible compared with the other terms",
      "They are absorbed into the forcing term on the right-hand side"
    ],
    correctAnswer: 0,
    explanation: "Choosing $\\eta$ along the characteristics guarantees $a\\eta_x + b\\eta_y = 0$, so the two contributions cancel exactly, which is the whole point of the choice.\n\nA doubled coefficient would mean they reinforced rather than cancelled.\n\nNothing is discarded as negligible; the cancellation is exact.\n\nThe forcing term is untouched by this cancellation."
  },
  {
    id: "mth302_ch6_040",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "The method of characteristics converts a first-order PDE into what, along each characteristic?",
    options: [
      "An ordinary differential equation, integrable along that curve",
      "A system of two coupled partial differential equations in the new variables",
      "An algebraic identity involving no derivatives whatsoever",
      "A second-order equation in the transformed coordinates"
    ],
    correctAnswer: 0,
    explanation: "Along a characteristic only differentiation in $\\xi$ survives, so the PDE reduces to an ODE that can be integrated directly.\n\nThe method reduces the problem rather than producing a coupled system.\n\nOne derivative remains, so the result is not purely algebraic.\n\nThe order is preserved, so no second derivative appears."
  }
];

export default mth302Chapter6;
