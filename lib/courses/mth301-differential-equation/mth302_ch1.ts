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
    text: "What is the degree of $(y'')^2 = \\sin(y') + x$?",
    options: [
      "Not defined, because $\\sin(y')$ prevents the equation from being written as a polynomial in the derivatives, even though $y''$ itself is squared",
      "$2$, since the highest derivative $y''$ is squared and the sine term is treated as if it did not affect the degree at all",
      "$1$, obtained by moving $\\sin(y')$ to the other side and reading $y''$ as if it then appeared to the first power",
      "$0$, since sine functions are bounded and so are treated as contributing no degree to the equation"
    ],
    correctAnswer: 0,
    explanation: "Degree is defined only when the whole equation can be written as a polynomial in all the derivatives present, not just the highest one. Here $y''$ is squared, which is fine on its own, but $\\sin(y')$ can never be rewritten as a polynomial in $y'$ no matter how the equation is rearranged, so the degree of the entire equation is not defined.\n\n$2$ only looks at the power on $y''$ and ignores that $\\sin(y')$ still blocks the polynomial form; a lower-order derivative sitting inside a transcendental function is just as fatal to degree as the highest one would be.\n\n$1$ pretends that moving $\\sin(y')$ across the equals sign removes it from consideration, but relocating a term does not clear it algebraically the way squaring a radical does.\n\n$0$ confuses the boundedness of $\\sin(y')$ as a function with the algebraic notion of degree, which has nothing to do with whether a function is bounded."
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
    text: "For the equation $y''' - 6y'' + 11y' - 6y = 0$, what is its order, and how many arbitrary constants does its general solution contain?",
    options: [
      "Order $3$, so the general solution contains $3$ arbitrary constants",
      "Order $3$, so the general solution contains $2$ arbitrary constants, one fewer than the order because the undifferentiated term $y$ needs no constant of its own",
      "Order $2$, so the general solution contains $2$ arbitrary constants, having mistaken $y''$ for the highest derivative present",
      "Order $3$, so the general solution contains $6$ arbitrary constants, one for each coefficient appearing in the equation"
    ],
    correctAnswer: 0,
    explanation: "The highest derivative present is $y'''$, so the equation is of order $3$, and an $n$th-order ODE requires $n$ integrations to reach its general solution, giving exactly $3$ arbitrary constants.\n\nSubtracting one constant for the undifferentiated term $y$ has no basis; every order of the equation contributes one constant regardless of which terms are present.\n\nOrder $2$ overlooks the term $y'''$, which is the actual highest derivative in the equation.\n\nCounting one constant per coefficient conflates the number of terms in the equation with the number of integrations needed, which is fixed by the order alone."
  },
  {
    id: "mth302_ch1_007",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Consider $y'' + 4y = 0$ with the two conditions $y(0) = 0$ and $y(\\pi/4) = 3$ imposed at two different points, making this a boundary value problem. What is the particular solution?",
    options: [
      "$y = 3\\sin 2x$",
      "$y = 3\\cos 2x$, obtained by fixing the coefficient from the condition at $x=0$ instead of eliminating it there",
      "$y = 3\\sin x$",
      "$y = \\dfrac{3}{2}\\sin 2x$"
    ],
    correctAnswer: 0,
    explanation: "The general solution of $y'' + 4y = 0$ is $y = A\\cos 2x + B\\sin 2x$. Imposing $y(0) = 0$ gives $A = 0$, and imposing $y(\\pi/4) = 3$ gives $B\\sin(\\pi/2) = B = 3$, so the particular solution is $y = 3\\sin 2x$.\n\n$y = 3\\cos 2x$ swaps the roles of the two coefficients, using the condition at $x = 0$ to fix the cosine term instead of eliminating it.\n\n$y = 3\\sin x$ drops the factor of $2$ that arises from $\\sqrt{4} = 2$ inside the trigonometric argument, so it fails $y(\\pi/4) = 3$.\n\n$y = \\dfrac{3}{2}\\sin 2x$ mistakenly divides the amplitude by the coefficient $4$ appearing in the original equation, confusing that constant with a scaling factor on the solution."
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
    text: "Consider these four relations: $3xy'' - 5y' + 7y = \\sin x$, $x^3 + y^3 = 27$, $x^2 + 2xy + y^2 = 0$, and $\\sqrt{x} + \\sqrt{y} = 4$. Exactly one of them relates a dependent variable to its derivatives and therefore qualifies as a differential equation; the rest are purely algebraic relations containing no derivative at all. Which relation is the differential equation, and what is its order?",
    options: [
      "$3xy'' - 5y' + 7y = \\sin x$ is the differential equation, and it has order $2$ since $y''$ is the highest derivative present",
      "$x^3 + y^3 = 27$ is the differential equation, and it has order $3$ because the highest power of $x$ or $y$ appearing in the equation is $3$",
      "$3xy'' - 5y' + 7y = \\sin x$ is the differential equation, but it has order $1$ since only $y'$ is described as being differentiated with respect to $x$",
      "$\\sqrt{x} + \\sqrt{y} = 4$ is the differential equation, and it has order $2$ because each variable appears under a square root"
    ],
    correctAnswer: 0,
    explanation: "A differential equation must relate a dependent variable to one or more of its derivatives; only $3xy'' - 5y' + 7y = \\sin x$ does this, and since $y''$ is the highest derivative present, its order is $2$.\n\n$x^3 + y^3 = 27$ contains no derivative at all, so it is a purely algebraic equation, and treating the exponent $3$ as an order confuses an algebraic power with a derivative order.\n\nCorrectly spotting $3xy'' - 5y' + 7y = \\sin x$ as the differential equation but then claiming order $1$ ignores the second derivative $y''$ that is actually present, undercounting the order.\n\n$\\sqrt{x} + \\sqrt{y} = 4$ also has no derivative anywhere in it; a square root on a variable is an algebraic radical, not a derivative."
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
    text: "How should $x^2y'' + (y')^2 + 3y = \\sin x$ be classified, and which term is responsible for that classification?",
    options: [
      "Nonlinear, because $(y')^2$ raises $y'$ to a power greater than one, breaking the required first-power form",
      "Nonlinear, because the coefficient $x^2$ on $y''$ depends on $x$, treating any coefficient that varies with the independent variable as automatically disqualifying the equation",
      "Linear, because $y''$ still appears to the first power, and the square on the lower-order derivative $y'$ does not affect linearity",
      "Nonlinear, because the forcing term $\\sin x$ is a nonlinear function of $x$"
    ],
    correctAnswer: 0,
    explanation: "Linearity requires $y$ and every one of its derivatives, not merely the highest one, to appear to the first power with coefficients depending only on $x$; the term $(y')^2$ squares the first derivative and immediately breaks that requirement, so the equation is nonlinear.\n\nThe coefficient $x^2$ on $y''$ depending on $x$ is exactly what linearity permits, since coefficients may be any function of the independent variable alone.\n\nTreating linearity as a condition on only the highest derivative is the real trap here: the rule applies to every derivative present, so the squared $y'$ term still disqualifies the equation even though $y''$ itself is fine.\n\nA forcing term such as $\\sin x$ being a nonlinear function of $x$ has no bearing on linearity, which is a statement about how $y$ and its derivatives appear, not about the right-hand side's dependence on $x$."
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
    text: "Is $x^2y'' + \\sin(x)\\,y' + 4y = e^x$ linear? Check the coefficient attached to each of $y''$, $y'$, and $y$.",
    options: [
      "Linear, because $x^2$, $\\sin x$, and $4$ depend only on $x$, and $y$, $y'$, $y''$ appear to the first power",
      "Nonlinear, because $\\sin x$ is itself a nonlinear, transcendental function, so the coefficient on $y'$ disqualifies the equation from being linear",
      "Nonlinear, because the coefficient $x^2$ on $y''$ is not constant",
      "Linear only if $\\sin x$ is replaced by a constant, since a linear equation cannot have a derivative multiplied by anything other than a plain number"
    ],
    correctAnswer: 0,
    explanation: "Linearity is checked by confirming that $y$ and every derivative appear to the first power, are never multiplied together, and that every coefficient depends only on $x$; here $x^2$, $\\sin x$, and $4$ all depend on $x$ alone, so the equation is linear.\n\nA coefficient being a transcendental function of $x$, such as $\\sin x$, is still a function of $x$ alone, and linearity places no restriction on how complicated that function of $x$ is allowed to be.\n\nA coefficient failing to be constant, such as $x^2$, describes a variable-coefficient linear equation, which is still linear; only dependence on $y$ itself would break linearity.\n\nRequiring coefficients to be plain numbers describes the narrower constant-coefficient case, not the general requirement for linearity, which only restricts coefficients to depend on $x$ alone."
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
    text: "The differential equation $(y')^2 = 4y$ has general solution $y = (x + C)^2$ for arbitrary constant $C$. Which function also satisfies the equation but cannot be written as $(x + C)^2$ for any choice of $C$?",
    options: [
      "$y = 0$",
      "$y = x^2$, which already appears in the family at $C = 0$",
      "$y = x$",
      "$y = 4$"
    ],
    correctAnswer: 0,
    explanation: "Substituting $y = 0$ gives $y' = 0$ and $(y')^2 = 0 = 4(0)$, so it genuinely solves the equation, yet $(x+C)^2$ is never identically zero for any fixed $C$, since it vanishes only at the single point $x = -C$; the constant function $0$ is therefore a singular solution, lost when the equation was divided by a power of $y$ during separation.\n\n$y = x^2$ does solve the equation, since $y' = 2x$ gives $(y')^2 = 4x^2 = 4y$, but it is already a member of the family at $C = 0$, so it can in fact be written as $(x+C)^2$ and does not answer the question asked.\n\n$y = x$ gives $(y')^2 = 1$ while $4y = 4x$, which are not equal for all $x$, so this function does not solve the equation at all.\n\n$y = 4$ gives $(y')^2 = 0$ while $4y = 16$, which are unequal, so this constant is not a solution either."
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
    text: "For the equation $y'' + 5y' + 6y = 0$, what is its order, and how many arbitrary constants does its general solution contain?",
    options: [
      "Order $2$, so the general solution contains $2$ arbitrary constants",
      "Order $2$, so the general solution contains $3$ arbitrary constants, one for each term in the equation",
      "Order $3$, so the general solution contains $3$ arbitrary constants, having counted $y''$, $y'$, and $y$ as three separate orders added together",
      "Order $2$, so the general solution contains $1$ arbitrary constant, since only one integration is needed to remove the highest derivative"
    ],
    correctAnswer: 0,
    explanation: "The highest derivative present is $y''$, so the equation is of order $2$, and an $n$th-order ODE requires $n$ integrations to reach its general solution, giving exactly $2$ arbitrary constants.\n\nCounting one constant per term confuses the number of terms in the equation with the number of integrations needed, which is fixed by the order alone.\n\nAdding the orders of $y''$, $y'$, and $y$ together as if order were a sum rather than a maximum wrongly inflates the order to $3$; the order is the single highest derivative present, which is $2$.\n\nA second-order equation requires two successive integrations to eliminate $y''$ entirely, not one, so a single integration leaves one arbitrary constant unaccounted for."
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
    text: "For the PDE $u\\,u_{xy} + u_{xx} = u^2$, how should it be classified?",
    options: [
      "Quasilinear, since $u_{xx}$ and $u_{xy}$ both appear to the first power",
      "Not quasilinear, because the equation is nonlinear, and a nonlinear equation can never also be quasilinear",
      "Linear, because $u_{xx}$ and $u_{xy}$ each appear to the first power throughout the equation",
      "Fully nonlinear, because the term $u^2$ makes the highest derivatives appear nonlinearly"
    ],
    correctAnswer: 0,
    explanation: "Quasilinear requires the highest-order derivatives, here $u_{xx}$ and $u_{xy}$, to enter to the first power without being multiplied together, while their coefficients are allowed to depend on $u$ itself; that holds here even though the coefficient $u$ on $u_{xy}$ also makes the whole equation nonlinear.\n\nTreating nonlinear and quasilinear as mutually exclusive is the real trap: a PDE can be nonlinear because of how a lower-order factor like $u$ enters as a coefficient, while still being quasilinear because the highest derivatives themselves appear linearly.\n\nCalling the equation linear ignores that the coefficient $u$ multiplying $u_{xy}$ depends on the unknown function itself, which linearity forbids.\n\nThe term $u^2$ is a lower-order term, not one of the highest derivatives $u_{xx}$ or $u_{xy}$, so it does not make the equation fully nonlinear."
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
    text: "How should the PDE $3u_{xx} + xy\\,u_{yy} = u^2 + x$ be classified?",
    options: [
      "Semilinear, since $u_{xx}$ and $u_{yy}$ appear linearly with coefficients depending only on $x$ and $y$",
      "Linear, because $u_{xx}$ and $u_{yy}$ each appear to the first power and are never multiplied together",
      "Quasilinear but not semilinear, because the coefficient $xy$ on $u_{yy}$ depends on more than one independent variable",
      "Fully nonlinear, because $u^2$ appears on the right-hand side"
    ],
    correctAnswer: 0,
    explanation: "Semilinear means the highest-order derivatives appear to the first power with coefficients depending only on the independent variables, while the equation may still be nonlinear in $u$ or lower derivatives; here $u_{xx}$ and $u_{yy}$ have coefficients $3$ and $xy$, both functions of $x$ and $y$ alone, but the $u^2$ term makes the equation nonlinear in $u$, which is exactly the semilinear pattern.\n\nCalling the equation linear ignores the $u^2$ term entirely, which is a nonlinear function of the unknown and rules out full linearity.\n\nA coefficient depending on more than one independent variable, such as $xy$ depending on both $x$ and $y$, is still perfectly compatible with the semilinear requirement, which only restricts coefficients from depending on $u$, not on how many independent variables they involve.\n\nThe term $u^2$ is a lower-order term rather than one of the highest derivatives $u_{xx}$ or $u_{yy}$, so it does not make the equation fully nonlinear."
  },
  {
    id: "mth302_ch1_034",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "A certain second-order PDE has general solution $u(x,y) = f(x + 2y) + g(x - 2y)$, where $f$ and $g$ are arbitrary differentiable functions of a single variable. What plays the role for this PDE that arbitrary constants play in the general solution of an ordinary differential equation, and how many such elements appear here?",
    options: [
      "Arbitrary functions, one for each order of the equation; here there are two, $f$ and $g$, matching the second order",
      "Arbitrary constants, exactly as for an ODE; here there are two, since $f$ and $g$ are each treated as a constant of integration",
      "Arbitrary functions, but only one is ever needed regardless of order, so $g$ is redundant here",
      "Arbitrary functions, one for each independent variable; here there are two because the solution depends on $x$ and $y$"
    ],
    correctAnswer: 0,
    explanation: "The general solution of a PDE contains arbitrary functions rather than arbitrary constants, with one such function appearing per order of the equation; a second-order PDE needs two, which is exactly why both $f$ and $g$ appear here.\n\nTreating $f$ and $g$ as constants of integration is the standard cross-topic slip carried over from ODEs, where the free elements really are numbers rather than whole functions.\n\nClaiming that only one arbitrary function is ever needed contradicts the order-matching rule directly, since a second-order equation like this one requires two independent arbitrary functions to be fully general.\n\nThe count of arbitrary functions tracks the order of the equation, not the number of independent variables; that these two happen to match here, at two apiece, is a coincidence of this particular example rather than the actual rule."
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
    text: "How should the PDE $u_{xy}^2 + u_x = 0$ be classified in terms of order, degree, and linearity type?",
    options: [
      "Order $2$, degree $2$, fully nonlinear, since the highest derivative $u_{xy}$ is squared",
      "Order $1$, degree $2$, fully nonlinear, having taken $u_x$ as the highest derivative since it is the only term appearing to the first power",
      "Order $2$, degree $1$, quasilinear, since $u_x$ appears linearly elsewhere in the equation",
      "Order $2$, degree $2$, quasilinear, since quasilinear only requires the equation to be of second order"
    ],
    correctAnswer: 0,
    explanation: "The mixed partial derivative $u_{xy}$ is of order $2$ and is the highest derivative present, and since it appears squared, the degree is $2$; because the highest derivative itself appears nonlinearly, the equation is fully nonlinear rather than quasilinear.\n\nTaking $u_x$ as the highest derivative overlooks that $u_{xy}$, a mixed second partial derivative, is present and outranks the first partial derivative $u_x$.\n\nDegree $1$ ignores the square sitting on $u_{xy}$, and classifying the equation as quasilinear on the basis of a lower-order term like $u_x$ misapplies the rule, since quasilinearity is decided by how the highest derivative appears, not by a different, lower-order term.\n\nQuasilinearity is not simply a statement about order; it specifically requires the highest-order derivatives to appear to the first power, which fails here because $u_{xy}$ is squared."
  },
  {
    id: "mth302_ch1_038",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How should $x^2y'' + 3xy' + y = 4x^3$ be classified?",
    options: [
      "Linear, nonhomogeneous, with variable coefficients, since $4x^3$ is nonzero and the coefficients $x^2$ and $3x$ depend on $x$",
      "Linear, homogeneous, since $y$ and its derivatives all appear to the first power, which is a statement about linearity and does not by itself decide whether the forcing term vanishes",
      "Nonlinear, because the coefficients $x^2$ and $3x$ are not constants",
      "Linear, nonhomogeneous, with constant coefficients, since the equation only has one dependent variable $y$"
    ],
    correctAnswer: 0,
    explanation: "The equation is linear, since $y$, $y'$, and $y''$ each appear to the first power without being multiplied together; it is nonhomogeneous because the forcing term $4x^3$ is not identically zero, and it has variable coefficients since $x^2$ and $3x$ both depend on $x$.\n\nHaving $y$ and its derivatives appear to the first power establishes linearity, but homogeneity is decided separately by whether the right-hand side vanishes, and here it does not.\n\nCoefficients depending on $x$, such as $x^2$ and $3x$, are fully compatible with linearity; only dependence on $y$ itself would make the equation nonlinear.\n\nHaving a single dependent variable $y$ says nothing about whether the coefficients are constant, and $x^2$ and $3x$ plainly vary with $x$, so the coefficients are variable, not constant."
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
    text: "What are the order and degree of $y''' = \\sqrt{1 + (y'')^2}$?",
    options: [
      "Order $3$, degree $2$",
      "Order $3$, degree $1$",
      "Order $2$, degree $2$, mistaking $y''$ under the radical for the highest derivative present",
      "Order $2$, degree $1$"
    ],
    correctAnswer: 0,
    explanation: "Degree is read only after the equation is made polynomial in the derivatives. Squaring both sides gives $(y''')^2 = 1 + (y'')^2$, so the highest derivative $y'''$ is order $3$ and appears to the power $2$, giving degree $2$.\n\nOrder $3$, degree $1$ is what results if the radical is never cleared before reading the degree, which is the standard slip on this type of question.\n\nOrder $2$, degree $2$ mistakes $y''$, sitting under the radical, for the highest derivative present, when $y'''$ outside the radical is actually one order higher.\n\nOrder $2$, degree $1$ compounds both errors, misreading the order and never squaring away the radical."
  }
];

export default mth302Chapter1;
