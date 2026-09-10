import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter1: QuestionV2[] = [
  {
    id: "mth302_ch1_001",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What are the order and degree of $y'' = \\sqrt{1 + (y')^2}$?",
    options: [
      "Order $2$, degree $2$",
      "Order $2$, degree $1$",
      "Order $1$, degree $2$",
      "Order $2$, degree undefined"
    ],
    correctAnswer: 0,
    explanation: "Degree is read only after the equation is made polynomial in the derivatives. Squaring both sides gives $(y'')^2 = 1 + (y')^2$, so the highest derivative $y''$ is order $2$ and appears to the power $2$, giving degree $2$.\n\nOrder $2$, degree $1$ is what results if the radical is never cleared before reading the degree, which is the standard slip on this type of question.\n\nOrder $1$, degree $2$ mislabels the order, since $y''$ is the highest derivative present, not $y'$.\n\nOrder $2$, degree undefined would only apply if the equation could never be made polynomial in its derivatives, which is not the case once the radical is squared away."
  },
  {
    id: "mth302_ch1_002",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What are the order and degree of $(y')^5 + y'' + y = x$?",
    options: [
      "Order $5$, degree $2$",
      "Order $2$, degree $5$",
      "Order $2$, degree $1$",
      "Order $1$, degree $5$"
    ],
    correctAnswer: 2,
    explanation: "Degree refers to the power of the highest-order derivative present, which here is $y''$, and it appears linearly, giving degree $1$. The order is $2$ since $y''$ is the highest derivative in the equation.\n\nOrder $5$, degree $2$ and order $2$, degree $5$ both mistake the power on the lower-order derivative $y'$ for the degree; that fifth power is irrelevant to degree since it does not sit on the highest-order term.\n\nOrder $1$, degree $5$ reverses order and degree entirely."
  },
  {
    id: "mth302_ch1_003",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is the degree of $y' + \\sin(y') = x$?",
    options: [
      "$1$",
      "$2$",
      "$0$",
      "Not defined"
    ],
    correctAnswer: 3,
    explanation: "Degree is defined only for equations that are polynomial in the derivatives. Because of $\\sin(y')$, this equation cannot be made polynomial in $y'$ by any algebraic manipulation, so its degree is not defined.\n\n$1$ assumes the derivative appears to the first power the way it would in a polynomial equation, which does not apply here.\n\n$2$ has no basis in the equation as written.\n\n$0$ would imply no derivative is present at all, which is false since $y'$ appears explicitly."
  },
  {
    id: "mth302_ch1_004",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which of the following differential equations is nonlinear?",
    options: [
      "$y'' + xy' + y = x^2$",
      "$x^2 y'' + xy' + y = e^x$",
      "$y'' + yy' = 0$",
      "$y'' + 3y' + 2y = \\sin x$"
    ],
    correctAnswer: 2,
    explanation: "Linearity forbids products of the unknown function with its own derivatives, and $yy'$ is exactly such a product, making $y'' + yy' = 0$ nonlinear.\n\n$y'' + xy' + y = x^2$ and $x^2 y'' + xy' + y = e^x$ both have variable coefficients, which is fully compatible with linearity since linearity constrains how $y$ appears, not how $x$ appears.\n\n$y'' + 3y' + 2y = \\sin x$ has a nonzero forcing term, which likewise does not affect linearity."
  },
  {
    id: "mth302_ch1_005",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How should the first-order PDE $u_{x}^{2} + u_y = 0$ be classified?",
    options: [
      "Order $1$, degree $2$, nonlinear",
      "Order $2$, degree $1$, linear",
      "Order $1$, degree $1$, quasilinear",
      "Order $2$, degree $2$, nonlinear"
    ],
    correctAnswer: 0,
    explanation: "The highest partial derivative present is first order; it appears squared, giving degree $2$, and a squared derivative term makes the whole equation nonlinear.\n\nOrder $2$, degree $1$, linear misstates the order, since no second derivative appears at all.\n\nOrder $1$, degree $1$, quasilinear is wrong because a quasilinear equation requires the highest derivative to appear linearly, and here it is squared.\n\nOrder $2$, degree $2$, nonlinear again wrongly assigns order $2$."
  },
  {
    id: "mth302_ch1_006",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How many arbitrary constants does the general solution of a third-order ordinary differential equation contain?",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "An arbitrary function"
    ],
    correctAnswer: 2,
    explanation: "An $n$th-order ODE requires $n$ integrations to reach its general solution, so a third-order equation carries exactly $3$ arbitrary constants.\n\n$1$ and $2$ both undercount the number of integrations needed.\n\nAn arbitrary function belongs to the general solution of a partial differential equation, not an ordinary one, so it does not apply here."
  },
  {
    id: "mth302_ch1_007",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which of the following is a boundary value problem?",
    options: [
      "$y'' + y = 0$, $y(0) = 1$, $y'(0) = 2$",
      "$y' + y = x$, $y(1) = 0$",
      "$y'' + y = 0$, $y(0) = 0$, $y(\\pi/2) = 1$",
      "$y'' = x$, $y(2) = 1$, $y'(2) = 3$"
    ],
    correctAnswer: 2,
    explanation: "A boundary value problem prescribes conditions at two or more distinct points, and $y(0) = 0$, $y(\\pi/2) = 1$ does exactly that.\n\n$y'' + y = 0$, $y(0) = 1$, $y'(0) = 2$ and $y'' = x$, $y(2) = 1$, $y'(2) = 3$ both give all their data at a single point, making them initial value problems instead.\n\n$y' + y = x$, $y(1) = 0$ is a first-order initial value problem, since only one condition at one point is needed to fix its single arbitrary constant."
  },
  {
    id: "mth302_ch1_008",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How many solutions does the boundary value problem $y'' + y = 0$, $y(0) = 0$, $y(\\pi) = 0$ have?",
    options: [
      "No solution",
      "Exactly one solution",
      "Exactly two solutions",
      "Infinitely many solutions"
    ],
    correctAnswer: 3,
    explanation: "The general solution is $y = A\\cos x + B\\sin x$. The condition $y(0) = 0$ forces $A = 0$, and then $y(\\pi) = B\\sin(\\pi) = 0$ holds automatically for every value of $B$, so $y = B\\sin x$ satisfies the problem for infinitely many choices of $B$.\n\nNo solution is wrong since a whole family of solutions exists.\n\nExactly one solution and exactly two solutions both undercount the family, which is parametrized by the free constant $B$ and is therefore infinite."
  },
  {
    id: "mth302_ch1_009",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How is the PDE $uu_x + u_y = 0$ best described?",
    options: [
      "Linear",
      "Semilinear",
      "Quasilinear and nonlinear",
      "Fully nonlinear"
    ],
    correctAnswer: 2,
    explanation: "The highest derivatives $u_x$ and $u_y$ each appear to the first power, which satisfies the quasilinear condition, but the coefficient of $u_x$ is $u$ itself, a lower-order term, which makes the equation nonlinear as well.\n\nLinear is ruled out since the coefficient of $u_x$ depends on the unknown $u$, not only on the independent variables.\n\nSemilinear requires the highest-derivative coefficients to depend only on the independent variables, which fails here.\n\nFully nonlinear would require the highest derivatives themselves to appear nonlinearly, which is not the case since $u_x$ and $u_y$ each appear to the first power."
  },
  {
    id: "mth302_ch1_010",
    course: "MTH 302",
    chapter: "Chapter 1",
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
  {
    id: "mth302_ch1_011",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How should $y'' + 3y' + 2y = x^7 e^x \\sin x$ be classified?",
    options: [
      "Nonlinear",
      "Linear, homogeneous",
      "Linear, nonhomogeneous, constant coefficients",
      "Linear with variable coefficients"
    ],
    correctAnswer: 2,
    explanation: "The left-hand side has constant coefficients and $y$ enters linearly, so the equation is linear with constant coefficients, and the nonzero right-hand side makes it nonhomogeneous regardless of how complicated that forcing term looks.\n\nNonlinear is wrong since $y$ and its derivatives appear only to the first power and are never multiplied together.\n\nLinear, homogeneous is wrong because the right-hand side is not zero.\n\nLinear with variable coefficients is wrong since every coefficient on the left is a constant."
  },
  {
    id: "mth302_ch1_012",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Separating $\\dfrac{dy}{dx} = xy^2$ gives the family $y = \\dfrac{-2}{x^2 + C}$. Which function also solves the equation but does not appear in that family for any value of $C$?",
    options: [
      "$y = x$",
      "$y = e^x$",
      "$y = 1$",
      "$y = 0$"
    ],
    correctAnswer: 3,
    explanation: "Substituting $y = 0$ into the equation gives $0 = 0$, so it is a genuine solution, yet no finite value of $C$ in $\\dfrac{-2}{x^2 + C}$ ever produces the constant function $0$; it was lost precisely when the equation was divided by $y^2$ during separation, making it a singular solution.\n\n$y = x$, $y = e^x$, and $y = 1$ do not satisfy the original equation $\\dfrac{dy}{dx} = xy^2$ at all, so none of them are solutions in the first place."
  },
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
  {
    id: "mth302_ch1_014",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which of the following is a partial differential equation?",
    options: [
      "$y'' + 3y' + 2y = \\sin 2x$",
      "$u_t = \\kappa u_{xx}$",
      "$y' + 2y = e^x$",
      "$\\dfrac{dy}{dx} = xy^2$"
    ],
    correctAnswer: 1,
    explanation: "A PDE contains partial derivatives of a function of two or more independent variables, and $u_t = \\kappa u_{xx}$ involves $u$ as a function of both $x$ and $t$.\n\n$y'' + 3y' + 2y = \\sin 2x$ contains only derivatives with respect to the single variable $x$, making it an ODE.\n\n$y' + 2y = e^x$ likewise has one independent variable, so it is an ODE.\n\n$\\dfrac{dy}{dx} = xy^2$ is a first-order ODE, since $\\dfrac{dy}{dx}$ is an ordinary rather than a partial derivative."
  },
  {
    id: "mth302_ch1_015",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What are the order and degree of $(y'')^3 + y' = x$?",
    options: [
      "Order $2$, degree $3$",
      "Order $3$, degree $2$, taking the cube as the order",
      "Order $2$, degree $1$",
      "Order $3$, degree $3$, reading the exponent as the order"
    ],
    correctAnswer: 0,
    explanation: "The highest derivative present is $y''$, giving order $2$, and it is raised to the third power, giving degree $3$.\n\nOrder $3$, degree $2$ reverses the two quantities, reading the exponent as the order.\n\nOrder $2$, degree $1$ gets the order right but ignores the cube sitting on $y''$.\n\nOrder $3$, degree $3$ mistakes the exponent $3$ for the order, when no third derivative appears anywhere."
  },
  {
    id: "mth302_ch1_016",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What are the order and degree of $(u_{xx})^2 + u_y = 0$?",
    options: [
      "Order $1$, degree $2$",
      "Order $2$, degree $2$",
      "Order $2$, degree $1$",
      "Order $4$, degree $2$"
    ],
    correctAnswer: 1,
    explanation: "The highest partial derivative is $u_{xx}$, which is of order $2$, and it appears squared, so the degree is $2$.\n\nOrder $1$, degree $2$ misreads the order, since $u_y$ is first order but $u_{xx}$ is second order and it is the highest present.\n\nOrder $2$, degree $1$ overlooks the square on $u_{xx}$.\n\nOrder $4$, degree $2$ multiplies the order by the exponent, which is not how order is determined."
  },
  {
    id: "mth302_ch1_017",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What are the order and degree of the Laplace equation $u_{xx} + u_{yy} = 0$?",
    options: [
      "Order $1$, degree $2$",
      "Order $2$, degree $2$",
      "Order $2$, degree $1$",
      "Order $4$, degree $1$"
    ],
    correctAnswer: 2,
    explanation: "Both $u_{xx}$ and $u_{yy}$ are second-order partial derivatives appearing to the first power, so the equation is of order $2$ and degree $1$.\n\nOrder $1$, degree $2$ misreads both quantities for an equation that contains no first-order derivative at all.\n\nOrder $2$, degree $2$ wrongly assigns a square to derivatives that appear linearly.\n\nOrder $4$, degree $1$ adds the orders of the two terms, but order is the highest single derivative order, not a sum."
  },
  {
    id: "mth302_ch1_018",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is the order of the wave equation $u_{tt} = c^2u_{xx}$?",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctAnswer: 1,
    explanation: "The highest partial derivatives are $u_{tt}$ and $u_{xx}$, both of second order, so the equation is of order $2$.\n\n$1$ would require the highest derivative to be a first partial derivative, which is not the case here.\n\n$3$ has no basis, since no third derivative appears.\n\n$4$ would come from adding the orders of the two second derivatives, but order is the maximum, not the total."
  },
  {
    id: "mth302_ch1_019",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which of the following equations is nonlinear because it contains a product of the unknown function with its own derivative?",
    options: [
      "$x^2y'' + xy' + y = 0$",
      "$yy' + x = 0$",
      "$y'' + 3y' + 2y = \\sin x$",
      "$y' + 2y = e^x$"
    ],
    correctAnswer: 1,
    explanation: "In $yy' + x = 0$ the unknown $y$ multiplies its own derivative $y'$, and such a product is exactly what linearity forbids.\n\n$x^2y'' + xy' + y = 0$ has variable coefficients but $y$ and its derivatives still appear to the first power and are never multiplied together, so it is linear.\n\n$y'' + 3y' + 2y = \\sin x$ is linear with a nonzero forcing term.\n\n$y' + 2y = e^x$ is a linear first-order equation."
  },
  {
    id: "mth302_ch1_020",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Why is $(y')^2 + y = 0$ classified as nonlinear?",
    options: [
      "Because the derivative $y'$ is raised to a power greater than one",
      "Because it has no forcing term on the right-hand side",
      "Because its coefficients depend on $x$",
      "Because it is a first-order equation rather than a second-order equation, and the order is what controls linearity"
    ],
    correctAnswer: 0,
    explanation: "Linearity requires $y$ and every derivative to appear to the first power, and the square on $y'$ violates that immediately.\n\nHaving no forcing term makes an equation homogeneous, which is an entirely separate property from linearity.\n\nThe coefficients here are constants, and in any case coefficients depending on $x$ are fully compatible with linearity.\n\nThe order of an equation carries no information about whether it is linear."
  },
  {
    id: "mth302_ch1_021",
    course: "MTH 302",
    chapter: "Chapter 1",
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
  {
    id: "mth302_ch1_022",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "In the general linear form $a_n(x)y^{(n)} + \\cdots + a_1(x)y' + a_0(x)y = g(x)$, what must be true of the coefficients?",
    options: [
      "They must be constants",
      "They may depend on $x$ only",
      "They may depend on both $x$ and $y$",
      "They must all equal one"
    ],
    correctAnswer: 1,
    explanation: "Linearity permits the coefficients to depend on the independent variable $x$ alone, which is why $x^2y'' + xy' + y = e^x$ is still linear.\n\nRequiring constants describes only the constant-coefficient special case, which is narrower than linearity.\n\nAllowing dependence on $y$ would destroy linearity, since the unknown would then multiply its own derivatives.\n\nRequiring every coefficient to equal one describes no meaningful class of equations."
  },
  {
    id: "mth302_ch1_023",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is the general solution of $y' = 2x$?",
    options: [
      "$y = 2x^2$",
      "$y = x^2 + C$",
      "$y = 2 + C$",
      "$y = x^2$"
    ],
    correctAnswer: 1,
    explanation: "Integrating $y' = 2x$ once gives $y = x^2 + C$, and the single arbitrary constant is exactly what a first-order equation requires.\n\n$y = 2x^2$ differentiates to $4x$, not $2x$.\n\n$y = 2 + C$ is constant, so its derivative is zero rather than $2x$.\n\n$y = x^2$ does satisfy the equation but carries no arbitrary constant, making it a particular rather than a general solution."
  },
  {
    id: "mth302_ch1_024",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Given $y' = 2x$ with the condition $y(1) = 3$, what is the particular solution?",
    options: [
      "$y = x^2 + 1$",
      "$y = x^2 + 3$",
      "$y = x^2 + 2$",
      "$y = x^2 - 2$"
    ],
    correctAnswer: 2,
    explanation: "The general solution is $y = x^2 + C$, and imposing $y(1) = 3$ gives $1 + C = 3$, so $C = 2$ and $y = x^2 + 2$.\n\n$y = x^2 + 1$ would follow from $y(1) = 2$ rather than the stated condition.\n\n$y = x^2 + 3$ substitutes the value $3$ directly for $C$ without evaluating $x^2$ at $x = 1$ first.\n\n$y = x^2 - 2$ has the correct magnitude but the wrong sign for $C$."
  },
  {
    id: "mth302_ch1_025",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is a singular solution of a differential equation?",
    options: [
      "A solution that cannot be recovered from the general solution for any value of the constants",
      "A solution obtained by setting every arbitrary constant equal to zero",
      "A solution that satisfies the equation at exactly one point",
      "The unique solution guaranteed by an existence and uniqueness theorem when that theorem is applied at a point interior to the region of validity"
    ],
    correctAnswer: 0,
    explanation: "A singular solution genuinely satisfies the equation, yet no choice of the arbitrary constants in the general solution produces it, the classic case being $y = 0$ lost when dividing by $g(y)$ during separation.\n\nSetting every constant to zero simply yields one particular member of the general family, not something outside it.\n\nSatisfying the equation at a single point is not what solving means; a solution must satisfy the equation throughout an interval.\n\nThe solution produced by an existence and uniqueness theorem is a particular solution of an initial value problem, not a singular one."
  },
  {
    id: "mth302_ch1_026",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which of the following is an initial value problem?",
    options: [
      "$y'' + \\lambda y = 0$ together with the two conditions $y(0) = 0$ and $y(L) = 0$ imposed at opposite ends of the interval",
      "$y'' + 3y' + 2y = \\sin 2x$, $y(0) = 1$, $y'(0) = 0$",
      "$y'' + y = 0$, $y(0) = 0$, $y(\\pi/2) = 1$",
      "$y'' = x$, $y(1) = 0$, $y(3) = 4$"
    ],
    correctAnswer: 1,
    explanation: "An initial value problem prescribes all of its conditions at a single point, and here both $y(0)$ and $y'(0)$ are given at $x = 0$.\n\n$y'' + \\lambda y = 0$ with $y(0) = 0$ and $y(L) = 0$ imposes conditions at two distinct points, making it a boundary value problem.\n\nThe conditions $y(0) = 0$ and $y(\\pi/2) = 1$ are likewise at two different points.\n\nConditions at $x = 1$ and $x = 3$ are also separated, so that problem is a boundary value problem too."
  },
  {
    id: "mth302_ch1_027",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How many arbitrary constants does the general solution of a second-order ordinary differential equation contain?",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "An arbitrary function rather than constants"
    ],
    correctAnswer: 1,
    explanation: "An $n$th-order ODE requires $n$ integrations and therefore carries $n$ arbitrary constants, giving $2$ for a second-order equation.\n\n$1$ corresponds to a first-order equation.\n\n$3$ corresponds to a third-order equation.\n\nArbitrary functions arise in the general solutions of partial differential equations, not ordinary ones, and this is the standard cross-topic distractor."
  },
  {
    id: "mth302_ch1_028",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How is the PDE $u_{xx} + u_{yy} = u^3$ classified?",
    options: [
      "Linear",
      "Semilinear",
      "Fully nonlinear",
      "Of degree $3$"
    ],
    correctAnswer: 1,
    explanation: "A semilinear PDE is linear in its highest derivatives with coefficients depending only on the independent variables, but nonlinear in $u$ or lower derivatives, which is exactly the situation created by the $u^3$ term.\n\nIt is not linear, because $u^3$ is a nonlinear function of the unknown.\n\nFully nonlinear would require the highest derivatives themselves to appear nonlinearly, whereas $u_{xx}$ and $u_{yy}$ here appear to the first power.\n\nThe degree is read from the power on the highest derivative, which is $1$, not from the cube on $u$."
  },
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
  {
    id: "mth302_ch1_030",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How is the eikonal equation $u_{x}^{2} + u_{y}^{2} = 1$ classified?",
    options: [
      "Linear",
      "Semilinear",
      "Quasilinear but not nonlinear",
      "Fully nonlinear"
    ],
    correctAnswer: 3,
    explanation: "The highest derivatives $u_x$ and $u_y$ themselves appear squared, and that is precisely the condition defining a fully nonlinear PDE.\n\nLinear is impossible once the derivatives are squared.\n\nSemilinear would require the highest derivatives to appear linearly, which the squares rule out.\n\nQuasilinear also requires the highest derivatives to appear to the first power, so this equation is not quasilinear at all."
  },
  {
    id: "mth302_ch1_031",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How is the Monge-Ampere equation $u_{xx}u_{yy} - u_{xy}^2 = 0$ classified?",
    options: [
      "Linear",
      "Semilinear",
      "Fully nonlinear",
      "Quasilinear"
    ],
    correctAnswer: 2,
    explanation: "The second derivatives are multiplied by one another and squared, so the highest derivatives appear nonlinearly, making the equation fully nonlinear.\n\nLinear would require every derivative to appear to the first power and never multiplied together.\n\nSemilinear requires linearity in the highest derivatives, which the product $u_{xx}u_{yy}$ destroys.\n\nQuasilinear also demands that the highest derivatives appear linearly, so this equation falls outside that class as well."
  },
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
  {
    id: "mth302_ch1_033",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "A PDE described as being of the first degree in the unknown function and its partial derivatives, with those terms never multiplied together, is best called what?",
    options: [
      "Quasilinear",
      "Linear",
      "Semilinear",
      "Fully nonlinear"
    ],
    correctAnswer: 1,
    explanation: "First degree in the unknown and all of its partial derivatives, with no products among those terms, is precisely the definition of a linear PDE.\n\nQuasilinear is weaker, since it allows the coefficients of the highest derivatives to involve $u$ itself.\n\nSemilinear permits nonlinearity in $u$ and lower derivatives, which the stated condition explicitly rules out.\n\nFully nonlinear requires the highest derivatives to appear nonlinearly, contradicting the first-degree requirement."
  },
  {
    id: "mth302_ch1_034",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "For the general solution of a partial differential equation, what plays the role that arbitrary constants play for an ordinary differential equation?",
    options: [
      "Arbitrary constants, exactly as for an ODE",
      "Arbitrary functions, one for each order of the equation",
      "A single fixed constant whose value is determined completely by the equation itself",
      "No arbitrary element at all"
    ],
    correctAnswer: 1,
    explanation: "The general solution of a PDE contains arbitrary functions rather than arbitrary constants, with one such function per order of the equation, so a second-order PDE needs two.\n\nOffering arbitrary constants for a PDE is the standard cross-topic slip, and an option promising a plain constant of integration for a PDE should be treated with suspicion.\n\nA single fixed constant determined by the equation would leave no freedom at all in the solution family.\n\nHaving no arbitrary element would contradict the very idea of a general solution."
  },
  {
    id: "mth302_ch1_035",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What are the order and degree of $y'' + 3y' + 2y = 0$?",
    options: [
      "Order $2$, degree $1$",
      "Order $2$, degree $2$",
      "Order $1$, degree $3$",
      "Order $3$, degree $1$"
    ],
    correctAnswer: 0,
    explanation: "The highest derivative is $y''$, giving order $2$, and it appears to the first power, giving degree $1$.\n\nDegree $2$ would require $y''$ to be squared, which it is not.\n\nOrder $1$ ignores the presence of the second derivative altogether.\n\nOrder $3$ counts the three terms on the left rather than the highest derivative."
  },
  {
    id: "mth302_ch1_036",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What are the order and degree of $y' + y = 0$?",
    options: [
      "Order $1$, degree $1$",
      "Order $1$, degree $2$",
      "Order $2$, degree $1$",
      "Order $0$, degree $1$"
    ],
    correctAnswer: 0,
    explanation: "The only derivative present is $y'$, so the order is $1$, and it appears to the first power, so the degree is $1$.\n\nDegree $2$ would require the derivative to be squared.\n\nOrder $2$ would require a second derivative, which does not appear.\n\nOrder $0$ would mean no derivative appears at all, contradicting the term $y'$."
  },
  {
    id: "mth302_ch1_037",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Why is $u_{x}^{2} + u_y = 0$ not quasilinear?",
    options: [
      "Its highest derivative does not appear linearly",
      "Its coefficients depend on the independent variables",
      "It has no forcing term on the right-hand side",
      "It involves two independent variables rather than one"
    ],
    correctAnswer: 0,
    explanation: "Quasilinear requires the highest derivatives to enter to the first power, and the square on $u_x$ violates that, so the equation is fully nonlinear instead.\n\nCoefficients depending on the independent variables is permitted in every class down to linear, so it cannot be the obstruction.\n\nThe absence of a forcing term concerns homogeneity, which is unrelated to this classification.\n\nHaving two independent variables is what makes it a PDE at all and says nothing about quasilinearity."
  },
  {
    id: "mth302_ch1_038",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "A linear ODE written as $a_n(x)y^{(n)} + \\cdots + a_0(x)y = g(x)$ is called homogeneous under which condition?",
    options: [
      "$g(x) = 0$",
      "$a_0(x) = 0$",
      "All the coefficients are constant",
      "The equation has order at least two"
    ],
    correctAnswer: 0,
    explanation: "Homogeneity for a linear equation means the forcing term vanishes identically, that is $g(x) = 0$.\n\nRequiring $a_0(x) = 0$ removes the undifferentiated term but has nothing to do with homogeneity.\n\nConstant coefficients describe a separate special case that may hold for homogeneous and nonhomogeneous equations alike.\n\nThe order of the equation is irrelevant to whether the forcing term vanishes."
  },
  {
    id: "mth302_ch1_039",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "The equation $yy'' = 0$ has zero on the right-hand side. How is it classified?",
    options: [
      "Nonlinear, because $y$ multiplies its own second derivative",
      "Linear and homogeneous",
      "Linear with variable coefficients",
      "Linear, since the right-hand side vanishes"
    ],
    correctAnswer: 0,
    explanation: "The product $yy''$ pairs the unknown with its own derivative, which linearity forbids, so the equation is nonlinear despite looking homogeneous.\n\nCalling it linear and homogeneous mistakes a vanishing right-hand side for linearity.\n\nCalling it linear with variable coefficients treats $y$ as though it were a coefficient in $x$, which it is not.\n\nA vanishing right-hand side controls homogeneity only, never linearity."
  },
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
  }
];

export default mth302Chapter1;
