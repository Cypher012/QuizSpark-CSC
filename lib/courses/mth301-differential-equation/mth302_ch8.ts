import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter8: QuestionV2[] = [
  {
    id: "mth302_ch8_001",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What are the eigenvalues of $X'' + \\lambda X = 0$ with $X(0) = X(L) = 0$?",
    options: [
      "$\\lambda_n = n\\pi/L$",
      "$\\lambda_n = n^2\\pi^2/L$",
      "$\\lambda_n = n^2\\pi^2/L^2$",
      "$\\lambda_n = n\\pi/L^2$"
    ],
    correctAnswer: 2,
    explanation: "With $X = A\\sin(\\sqrt{\\lambda}\\,x)$ after applying $X(0) = 0$, the condition $\\sin(\\sqrt{\\lambda}\\,L) = 0$ requires $\\sqrt{\\lambda}\\,L = n\\pi$, so $\\sqrt{\\lambda} = n\\pi/L$. Squaring both the numerator and the denominator gives $\\lambda_n = n^2\\pi^2/L^2$.\n\n$\\lambda_n = n\\pi/L$ fails to square the expression at all.\n\n$\\lambda_n = n^2\\pi^2/L$ squares only the numerator, leaving the denominator unsquared.\n\n$\\lambda_n = n\\pi/L^2$ squares only the denominator, leaving the numerator unsquared."
  },
  {
    id: "mth302_ch8_002",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For $y'' + \\lambda y = 0$ on $0 \\leq x \\leq 5$ with $y(0) = y(5) = 0$, what are the eigenvalues?",
    options: [
      "$n^2\\pi^2/5$",
      "$n^2\\pi/25$",
      "$n\\pi/5$",
      "$n^2\\pi^2/25$"
    ],
    correctAnswer: 3,
    explanation: "The Dirichlet boundary condition at $x = 5$ requires $5\\sqrt{\\lambda_n} = n\\pi$, so $\\lambda_n = n^2\\pi^2/25$, with eigenfunctions $y_n = \\sin(n\\pi x/5)$ for $n = 1, 2, 3, \\dots$. The value $n = 0$ is excluded, since it produces only the trivial solution, which is never counted as an eigenfunction.\n\n$n^2\\pi^2/5$ fails to square the denominator $L = 5$ to match the squared numerator.\n\n$n^2\\pi/25$ fails to square the numerator $n\\pi$ while squaring the denominator.\n\n$n\\pi/5$ fails to square either the numerator or the denominator at all."
  },
  {
    id: "mth302_ch8_003",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For $y'' + \\lambda y = 0$ on $0 < x < \\pi/2$ with $y'(0) = y'(\\pi/2) = 0$, what are the eigenvalues?",
    options: [
      "$\\lambda_n = 4n^2$",
      "$\\lambda_n = 2n$",
      "$\\lambda_n = n^2$",
      "$\\lambda_n = n^2\\pi^2/4$"
    ],
    correctAnswer: 0,
    explanation: "The condition $y'(0) = 0$ eliminates the sine term, leaving $y = B\\cos(\\sqrt{\\lambda}\\,x)$; then $y'(\\pi/2) = -B\\sqrt{\\lambda}\\sin(\\sqrt{\\lambda}\\,\\pi/2) = 0$ requires $\\sqrt{\\lambda}\\,\\pi/2 = n\\pi$, giving $\\sqrt{\\lambda} = 2n$ and therefore $\\lambda_n = 4n^2$, with eigenfunctions $y_n = \\cos(2nx)$. Unlike the Dirichlet case, $n = 0$ is admissible here, giving the constant eigenfunction.\n\n$\\lambda_n = 2n$ fails to square $\\sqrt{\\lambda} = 2n$ to obtain $\\lambda$ itself.\n\n$\\lambda_n = n^2$ confuses the coefficient with the value that should be squared.\n\n$\\lambda_n = n^2\\pi^2/4$ wrongly applies the Dirichlet-style formula to this Neumann boundary condition problem."
  },
  {
    id: "mth302_ch8_004",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "The Cauchy-Euler equation $x^2y'' + xy' + \\lambda y = 0$ is rewritten in self-adjoint Sturm-Liouville form by dividing through by $x$, giving $(xy')' + (\\lambda/x)y = 0$ for $1 \\le x \\le e$. For eigenfunctions $y_m$ and $y_n$ belonging to different eigenvalues of this system, which orthogonality relation holds?",
    options: [
      "$\\displaystyle\\int_1^e y_m(x)y_n(x)\\dfrac{1}{x}\\,dx = 0$, carrying the weight $r(x) = 1/x$ read off the standard form",
      "$\\displaystyle\\int_1^e y_m(x)y_n(x)\\,dx = 0$, dropping the weight entirely",
      "$\\displaystyle\\int_1^e y_m(x)y_n(x)\\,x\\,dx = 0$, mistaking the coefficient $p(x) = x$ for the weight",
      "$\\displaystyle\\int_1^e y_m(x)y_n(x)\\dfrac{1}{x}\\,dx = 1$, normalizing to one instead of zero"
    ],
    correctAnswer: 0,
    explanation: "Dividing $x^2y'' + xy' + \\lambda y = 0$ by $x$ gives $xy'' + y' + (\\lambda/x)y = 0$, and since $(xy')' = xy'' + y'$, this is $(xy')' + (\\lambda/x)y = 0$. Matching against $(py')' + [q + \\lambda r]y = 0$ shows $r(x) = 1/x$, so orthogonality of eigenfunctions for different eigenvalues requires $\\int_1^e y_my_n\\dfrac{1}{x}\\,dx = 0$.\n\nDropping the weight and integrating $y_my_n$ alone is the standard slip of treating $r$ as $1$ when it is not.\n\nUsing $x$ instead of $1/x$ confuses the leading coefficient $p(x) = x$, which multiplies $y'$ before differentiation, with the weight $r(x)$, which multiplies $\\lambda$.\n\nOrthogonality means the integral vanishes, not that it equals one; a value of one would describe a normalization condition instead."
  },
  {
    id: "mth302_ch8_005",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For the mixed boundary value problem $y'' + \\lambda y = 0$ on $0 \\le x \\le 4$ with $y(0) = 0$ and $y'(4) = 0$, solving gives eigenvalues $\\lambda_n = \\dfrac{(2n-1)^2\\pi^2}{64}$ and eigenfunctions $y_n = \\sin\\!\\left(\\dfrac{(2n-1)\\pi x}{8}\\right)$ for $n = 1, 2, 3, \\ldots$. Which statement about this system is false?",
    options: [
      "The smallest eigenvalue is $\\lambda_0 = 0$, attained by a nonzero constant satisfying both conditions",
      "Every eigenvalue $\\lambda_n$ is real and strictly positive",
      "The eigenfunctions have the form $y_n = \\sin(\\sqrt{\\lambda_n}\\,x)$, since $y(0) = 0$ eliminates the cosine term",
      "The eigenvalues increase without bound as $n$ increases"
    ],
    correctAnswer: 0,
    explanation: "Applying $y(0) = 0$ to $y = A\\sin(\\sqrt{\\lambda}\\,x) + B\\cos(\\sqrt{\\lambda}\\,x)$ forces $B = 0$, and applying $y'(4) = 0$ to $y = A\\sin(\\sqrt{\\lambda}\\,x)$ forces $\\cos(4\\sqrt{\\lambda}) = 0$ for nontrivial $A$, which has no solution at $\\lambda = 0$ since $\\cos(0) = 1 \\neq 0$. A constant function satisfying $y(0) = 0$ must itself be zero, so $\\lambda_0 = 0$ is not an eigenvalue here, making this statement false.\n\nEvery eigenvalue $\\lambda_n$ is real and strictly positive is true, since $(2n-1)^2\\pi^2/64 > 0$ for every $n \\geq 1$.\n\nThe eigenfunctions having the form $\\sin(\\sqrt{\\lambda_n}\\,x)$ is true, since $B = 0$ was forced by the left boundary condition.\n\nThe eigenvalues increasing without bound is true, since $(2n-1)^2$ grows without bound as $n$ increases."
  },
  {
    id: "mth302_ch8_006",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Writing the equation as $(p(x)y')' + [q(x) + \\lambda r(x)]y = 0$, what are $p$, $q$, and $r$ for $y'' + \\lambda y = 0$?",
    options: [
      "$p = x$, $q = 0$, $r = 1$",
      "$p = 0$, $q = 1$, $r = 1$",
      "$p = 1$, $q = \\lambda$, $r = 0$",
      "$p = 1$, $q = 0$, $r = 1$, so that $p\' = 0$ as required"
    ],
    correctAnswer: 3,
    explanation: "Expanding the standard form gives $py'' + p'y' + (q + \\lambda r)y = 0$. Matching this term by term with $y'' + \\lambda y = 0$ forces $p = 1$, so $p' = 0$, consistent with the absent $y'$ term, $q = 0$, and $r = 1$.\n\n$p = x$, $q = 0$, $r = 1$ wrongly assigns a nonconstant value to $p$ for this simple equation.\n\n$p = 0$, $q = 1$, $r = 1$ would eliminate the $y''$ term entirely, which is not the case here.\n\n$p = 1$, $q = \\lambda$, $r = 0$ confuses $\\lambda$, the eigenvalue parameter itself, with $q$, and wrongly sets the weight $r$ to zero."
  },
  {
    id: "mth302_ch8_007",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Bessel's equation in Sturm-Liouville form is $(xy')' + [-\\nu^2/x + \\lambda x]y = 0$. What is its weight function?",
    options: [
      "$r = 1$",
      "$r = \\nu^2$",
      "$r = 1/x$",
      "$r = x$"
    ],
    correctAnswer: 3,
    explanation: "The weight function is the coefficient multiplying $\\lambda$ in the standard Sturm-Liouville form, which here is $r(x) = x$. This is why Bessel functions of different orders satisfy an orthogonality integral that includes an extra factor of $x$ inside the integrand.\n\n$r = 1$ would apply only if $\\lambda$ were multiplied by $1$, which is not the case in this equation.\n\n$r = \\nu^2$ confuses the parameter $\\nu$ appearing in $q$ with the weight function that multiplies $\\lambda$.\n\n$r = 1/x$ has the reciprocal of the correct weight."
  },
  {
    id: "mth302_ch8_008",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For the eigenvalue problem $y'' + \\lambda y = 0$ on $0 \\le x \\le 3$ with $y(0) = y(3) = 0$, the eigenfunctions are $y_n = \\sin(n\\pi x/3)$ with weight $r(x) = 1$. If $f(x)$ is expanded as $f(x) \\sim \\sum_n c_n\\sin(n\\pi x/3)$, which formula correctly gives the coefficient $c_n$?",
    options: [
      "$c_n = \\dfrac{\\int_0^3 f(x)\\sin(n\\pi x/3)\\,dx}{\\int_0^3 \\sin^2(n\\pi x/3)\\,dx}$, since $r(x) = 1$ for this problem",
      "$c_n = \\int_0^3 f(x)\\sin(n\\pi x/3)\\,dx$, omitting the normalizing denominator that the orthogonality relation for these eigenfunctions actually requires",
      "$c_n = \\dfrac{\\int_0^3 xf(x)\\sin(n\\pi x/3)\\,dx}{\\int_0^3 x\\sin^2(n\\pi x/3)\\,dx}$",
      "$c_n = \\dfrac{\\int_0^3 \\sin^2(n\\pi x/3)\\,dx}{\\int_0^3 f(x)\\sin(n\\pi x/3)\\,dx}$"
    ],
    correctAnswer: 0,
    explanation: "Multiplying $f(x) \\sim \\sum_n c_n\\sin(n\\pi x/3)$ by $r(x)\\sin(m\\pi x/3) = \\sin(m\\pi x/3)$ and integrating over $[0,3]$ uses orthogonality to kill every term but $n = m$, leaving $c_n = \\dfrac{\\int_0^3 f(x)\\sin(n\\pi x/3)\\,dx}{\\int_0^3 \\sin^2(n\\pi x/3)\\,dx}$, since $r(x) = 1$ for this equation and drops out of the notation.\n\nOmitting the denominator would only be valid if the eigenfunctions were already normalized so that $\\int_0^3 \\sin^2(n\\pi x/3)\\,dx = 1$, which is not the case here.\n\nInserting a factor of $x$ in both integrals introduces a weight this equation does not have, since $r(x) = 1$, not $x$.\n\nSwapping the numerator and denominator inverts the coefficient formula entirely."
  },
  {
    id: "mth302_ch8_009",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "The equation $y'' - 2y' + \\lambda y = 0$ is not self-adjoint as written. Multiplying through by the integrating factor $\\mu(x) = e^{-2x}$ converts it into the form $(py')' + [q + \\lambda r]y = 0$. What are $p$, $q$, and $r$?",
    options: [
      "$p = e^{-2x}$, $q = 0$, and $r = e^{-2x}$, since multiplying by the integrating factor scales both terms together",
      "$p = e^{-2x}$, $q = 0$, and $r = 1$, leaving the weight unmultiplied by the integrating factor used to fix $p$",
      "$p = -2x$, $q = 0$, and $r = e^{-2x}$",
      "$p = e^{-2x}$, $q = e^{-2x}$, and $r = 0$"
    ],
    correctAnswer: 0,
    explanation: "Multiplying $y'' - 2y' + \\lambda y = 0$ by $e^{-2x}$ gives $e^{-2x}y'' - 2e^{-2x}y' + \\lambda e^{-2x}y = 0$, and since $(e^{-2x}y')' = e^{-2x}y'' - 2e^{-2x}y'$, this is $(e^{-2x}y')' + \\lambda e^{-2x}y = 0$. Comparing with $(py')' + [q + \\lambda r]y = 0$ gives $p = e^{-2x}$, $q = 0$, and $r = e^{-2x}$, since the integrating factor multiplies every term of the original equation, including the one attached to $\\lambda$.\n\nLeaving $r = 1$ forgets that the term multiplying $\\lambda$ was scaled by the integrating factor exactly like the other two terms.\n\n$p = -2x$ mistakes the exponent of the integrating factor for the integrating factor itself.\n\nPlacing the integrating factor in $q$ instead of $r$, and zero in $r$ instead of $q$, swaps which term is the potential and which is the weight."
  },
  {
    id: "mth302_ch8_010",
    course: "MTH 302",
    chapter: "Chapter 8",
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
  {
    id: "mth302_ch8_011",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "The equation $(x^3y')' + [2x + \\lambda x^3]y = 0$ is expanded by carrying out the differentiation on the first term. What is the coefficient of $y'$ in the resulting expanded equation?",
    options: [
      "$3x^2$",
      "$x^3$, treating the leading coefficient as also multiplying $y'$",
      "$2x$, confusing the coefficient of $y'$ with the potential term $q(x)$",
      "$\\lambda x^3$, confusing the coefficient of $y'$ with the term multiplying the eigenvalue"
    ],
    correctAnswer: 0,
    explanation: "Expanding $(x^3y')' = x^3y'' + 3x^2y'$ turns the equation into $x^3y'' + 3x^2y' + 2xy + \\lambda x^3y = 0$, so the coefficient of $y'$ is $3x^2$, the derivative of $p(x) = x^3$.\n\n$x^3$ is the coefficient of $y''$, not $y'$; it is $p$ itself rather than $p'$.\n\n$2x$ is the coefficient of $y$ that does not carry $\\lambda$, which is $q(x)$, not the coefficient of $y'$.\n\n$\\lambda x^3$ is the term that carries the eigenvalue, which belongs with $q$ in the coefficient of $y$, not with $y'$."
  },
  {
    id: "mth302_ch8_012",
    course: "MTH 302",
    chapter: "Chapter 8",
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
  {
    id: "mth302_ch8_013",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "A Sturm-Liouville problem has boundary conditions $2y(0) - 5y'(0) = 0$ and $y(1) + 3y'(1) = 0$. Writing these in the standard form $\\alpha_1y(a) + \\alpha_2y'(a) = 0$ and $\\beta_1y(b) + \\beta_2y'(b) = 0$ with $a = 0$ and $b = 1$, what are $\\alpha_1$, $\\alpha_2$, $\\beta_1$, and $\\beta_2$?",
    options: [
      "$\\alpha_1 = 2$, $\\alpha_2 = -5$, $\\beta_1 = 1$, and $\\beta_2 = 3$, matching each endpoint condition in order",
      "$\\alpha_1 = 2$, $\\alpha_2 = 5$, $\\beta_1 = 1$, and $\\beta_2 = 3$, dropping the negative sign on the derivative coefficient at $x = 0$",
      "$\\alpha_1 = 1$, $\\alpha_2 = 3$, $\\beta_1 = 2$, and $\\beta_2 = -5$",
      "$\\alpha_1 = -5$, $\\alpha_2 = 2$, $\\beta_1 = 3$, and $\\beta_2 = 1$"
    ],
    correctAnswer: 0,
    explanation: "Matching $2y(0) - 5y'(0) = 0$ against $\\alpha_1y(a) + \\alpha_2y'(a) = 0$ reads off $\\alpha_1 = 2$ and $\\alpha_2 = -5$, and matching $y(1) + 3y'(1) = 0$ against $\\beta_1y(b) + \\beta_2y'(b) = 0$ reads off $\\beta_1 = 1$ and $\\beta_2 = 3$.\n\nDropping the negative sign on $\\alpha_2$ loses the minus that appears in front of $5y'(0)$ in the given condition.\n\nSwapping which pair of constants is labeled $\\alpha$ and which is labeled $\\beta$ mislabels the endpoint at $x = 0$ as $b$ and the endpoint at $x = 1$ as $a$.\n\nReversing the order of the function and derivative coefficients at each endpoint puts the derivative coefficient first where the function coefficient belongs."
  },
  {
    id: "mth302_ch8_014",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For $y'' + \\lambda y = 0$ on $0 \\le x \\le 2$ with $y(0) = 0$ and $y(2) = 0$, solving the boundary value problem gives $\\lambda_n = n^2\\pi^2/4$ for $n = 1, 2, 3, \\ldots$. Which statement about this eigenvalue sequence is correct?",
    options: [
      "Every eigenvalue is real and positive, and $\\lambda_n$ increases without bound as $n$ increases",
      "The eigenvalue $\\lambda_0 = 0$ belongs to the sequence, since a constant function satisfies both Dirichlet conditions at $x = 0$ and $x = 2$",
      "The eigenvalues eventually decrease toward zero as $n$ grows",
      "Each eigenvalue $\\lambda_n$ has two independent eigenfunctions, $\\sin(n\\pi x/2)$ and $\\cos(n\\pi x/2)$"
    ],
    correctAnswer: 0,
    explanation: "Since $\\lambda_n = n^2\\pi^2/4$ for $n = 1, 2, 3, \\ldots$, every eigenvalue is real and positive, and because $n^2$ grows without bound, so does $\\lambda_n$.\n\nA constant function satisfying $y(0) = 0$ must be the zero function, so $n = 0$ gives only the trivial solution and is excluded; $\\lambda_0 = 0$ is not part of this sequence.\n\nThe eigenvalues grow like $n^2$, so they increase rather than decrease as $n$ grows.\n\nApplying $y(0) = 0$ eliminates the cosine term, leaving only $\\sin(n\\pi x/2)$ as the eigenfunction for each $n$, not two independent functions."
  },
  {
    id: "mth302_ch8_015",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For $y'' + \\lambda y = 0$ on $0 \\le x \\le 1$ with $y'(0) = 0$ and $y(1) = 0$, solving the boundary value problem gives eigenvalues $\\lambda_n = (2n-1)^2\\pi^2/4$ for $n = 1, 2, 3, \\ldots$, so that $\\lambda_1 = \\pi^2/4$, $\\lambda_2 = 9\\pi^2/4$, and $\\lambda_3 = 25\\pi^2/4$. How are the eigenvalues of this system arranged as $n$ increases?",
    options: [
      "A strictly increasing sequence with no upper bound",
      "A strictly decreasing sequence approaching zero as $n$ increases",
      "A bounded sequence that oscillates between $\\pi^2/4$ and $25\\pi^2/4$ without settling",
      "A sequence that repeats every three terms"
    ],
    correctAnswer: 0,
    explanation: "Since $\\lambda_n = (2n-1)^2\\pi^2/4$ and $(2n-1)^2$ grows without bound as $n$ increases, the values $\\pi^2/4 < 9\\pi^2/4 < 25\\pi^2/4 < \\cdots$ form a strictly increasing sequence with no upper bound.\n\nA decreasing sequence would contradict $(2n-1)^2$ growing as $n$ grows.\n\nThe three computed values already show strict growth rather than bounded oscillation between fixed limits.\n\nOnly three terms were computed for illustration, but the formula $(2n-1)^2\\pi^2/4$ produces a new, larger value for every subsequent $n$, so nothing repeats."
  },
  {
    id: "mth302_ch8_016",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For $y'' + \\lambda y = 0$ on $0 \\le x \\le \\pi$ with $y(0) = y(\\pi) = 0$, the eigenvalue $\\lambda_4 = 16$ arises from $n = 4$. The general solution before applying boundary conditions is $y = A\\sin(4x) + B\\cos(4x)$. After applying both boundary conditions, how many linearly independent eigenfunctions correspond to $\\lambda_4 = 16$?",
    options: [
      "Exactly one, since $A$ is merely a free scaling constant rather than an independent solution",
      "Exactly two, since both $A$ and $B$ can be chosen nonzero without violating either boundary condition",
      "Infinitely many genuinely independent eigenfunctions, since $A$ can take on infinitely many distinct real values as the boundary conditions never pin it down",
      "None, since $\\sin(4\\pi) = 0$ forces $A$ to vanish as well"
    ],
    correctAnswer: 0,
    explanation: "Applying $y(0) = 0$ forces $B = 0$, leaving $y = A\\sin(4x)$. Applying $y(\\pi) = 0$ gives $A\\sin(4\\pi) = 0$, and since $\\sin(4\\pi) = 0$ automatically, this holds for any nonzero $A$, so $A$ is a free scaling constant rather than a second independent solution. There is exactly one eigenfunction up to a constant multiple.\n\n$B$ was forced to zero by the left boundary condition, so it cannot also be chosen nonzero.\n\nAllowing $A$ to range over infinitely many values only rescales the same eigenfunction; scalar multiples of one function are not independent functions.\n\n$\\sin(4\\pi)$ already equals zero regardless of $A$, so the right boundary condition does not force $A$ itself to be zero."
  },
  {
    id: "mth302_ch8_017",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "The equation $x^2y'' + 2xy' + \\lambda y = 0$ is written in self-adjoint form as $(x^2y')' + \\lambda y = 0$ for $x > 0$. With respect to which weight function are its eigenfunctions mutually orthogonal?",
    options: [
      "$r(x) = 1$, since no function multiplies $\\lambda$",
      "$r(x) = x^2$, taking the coefficient of $y''$ before differentiation as the weight",
      "$r(x) = 2x$, wrongly taking the coefficient of $y'$ itself as the weight",
      "$r(x) = 1/x^2$, taking the reciprocal of the leading coefficient as the weight"
    ],
    correctAnswer: 0,
    explanation: "Comparing $(x^2y')' + \\lambda y = 0$ with $(py')' + [q + \\lambda r]y = 0$ shows $p(x) = x^2$, $q(x) = 0$, and $r(x) = 1$, since $\\lambda$ stands alone with no function attached to it in this equation. The eigenfunctions are therefore orthogonal with weight $1$.\n\n$x^2$ is the leading coefficient $p(x)$, which sits in the derivative term before differentiation, not the weight that multiplies $\\lambda$.\n\n$2x$ is $p'(x)$, the coefficient of $y'$ that appears after expanding $(x^2y')'$, and also has no role as the weight.\n\nThe reciprocal of the leading coefficient has no place in the standard form at all; the weight is read directly from whatever multiplies $\\lambda$."
  },
  {
    id: "mth302_ch8_018",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For $y'' + \\lambda y = 0$ on $0 \\leq x \\leq 5$ with $y(0) = y(5) = 0$, what are the eigenfunctions?",
    options: [
      "$\\sin\\dfrac{n\\pi x}{5}$",
      "$\\cos\\dfrac{n\\pi x}{5}$, which would satisfy Neumann conditions instead",
      "$e^{n\\pi x/5}$, an exponential rather than a sinusoid",
      "$\\sin\\dfrac{n\\pi x}{25}$"
    ],
    correctAnswer: 0,
    explanation: "The condition $y(0) = 0$ removes the cosine and $y(5) = 0$ quantises the frequency, giving $\\sin(n\\pi x/5)$.\n\nThe cosine fails the condition at $x = 0$.\n\nAn exponential cannot vanish at both ends.\n\nThe $25$ belongs to the eigenvalue, not to the argument of the sine."
  },
  {
    id: "mth302_ch8_019",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For $y'' + \\lambda y = 0$ on $0 < x < \\pi/2$ with $y'(0) = y'(\\pi/2) = 0$, what are the eigenfunctions?",
    options: [
      "$\\cos 2nx$",
      "$\\sin 2nx$, which would satisfy Dirichlet conditions instead",
      "$\\cos nx$",
      "$\\sin nx$, combining both errors at once"
    ],
    correctAnswer: 0,
    explanation: "The condition $y'(0) = 0$ removes the sine, and $y'(\\pi/2) = 0$ gives $\\sqrt{\\lambda} = 2n$, so the eigenfunctions are $\\cos 2nx$.\n\nThe sine fails the derivative condition at the left end.\n\nOmitting the factor of two breaks the condition at $x = \\pi/2$.\n\nThe final choice fails both conditions at once."
  },
  {
    id: "mth302_ch8_020",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For the Neumann problem on $0 < x < \\pi/2$, what are the eigenvalues?",
    options: [
      "$\\lambda_n = 4n^2$",
      "$\\lambda_n = 2n$",
      "$\\lambda_n = n^2$, omitting the factor of four",
      "$\\lambda_n = 2n^2$, halving the correct coefficient"
    ],
    correctAnswer: 0,
    explanation: "From $\\sqrt{\\lambda} = 2n$ we get $\\lambda_n = 4n^2$, squaring the whole expression.\n\nTaking $2n$ leaves the square root rather than the eigenvalue.\n\nOmitting the four fails to square the factor of two.\n\nHalving the coefficient does not follow from squaring $2n$."
  },
  {
    id: "mth302_ch8_021",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Why is $n = 0$ admissible for the Neumann problem but not for the Dirichlet problem?",
    options: [
      "$\\lambda_0 = 0$ gives a nonzero constant eigenfunction",
      "The Neumann interval is shorter than the Dirichlet interval used earlier",
      "The weight function differs between the two problems",
      "The Neumann problem has no boundary conditions at the left end"
    ],
    correctAnswer: 0,
    explanation: "With Neumann ends a constant function has vanishing derivative at both ends, so $\\lambda_0 = 0$ with $y_0$ constant is a genuine eigenpair, whereas a constant satisfying Dirichlet ends must be zero.\n\nThe length of the interval does not decide whether zero is an eigenvalue.\n\nBoth problems here have weight $r = 1$.\n\nThe Neumann problem does impose a condition at the left end, on the derivative."
  },
  {
    id: "mth302_ch8_022",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For $x^2y'' + xy' + (\\lambda x^2 - \\nu^2)y = 0$ put into Sturm-Liouville form, what is $p$?",
    options: [
      "$p = x$",
      "$p = x^2$, taken directly from the coefficient before dividing",
      "$p = 1$, as for the constant-coefficient case",
      "$p = \\lambda x^2$, absorbing the eigenvalue into the leading term"
    ],
    correctAnswer: 0,
    explanation: "Dividing by $x$ makes the $y''$ coefficient $x$ and the $y'$ coefficient $1 = p'$, consistent with $(xy')' = xy'' + y'$.\n\nUsing $x^2$ reads the coefficient before the division needed for consistency.\n\nThe constant value $1$ applies only when the leading coefficient is constant.\n\nThe eigenvalue belongs with the weight, not with $p$."
  },
  {
    id: "mth302_ch8_023",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For Bessel's equation in the form $(xy')' + [-\\nu^2/x + \\lambda x]y = 0$, what is the weight?",
    options: [
      "$r = x$, being whatever multiplies the eigenvalue $\\lambda$",
      "$r = 1$, as in the unweighted constant-coefficient problems",
      "$r = -\\nu^2/x$",
      "$r = x^2$, squaring the coefficient that multiplies $\\lambda$"
    ],
    correctAnswer: 0,
    explanation: "The weight is whatever multiplies $\\lambda$, and here that is $x$.\n\nThe value $1$ would apply only if $\\lambda$ stood alone.\n\nThe expression $-\\nu^2/x$ is $q$, the potential term.\n\nSquaring the coefficient misreads the term multiplying $\\lambda$."
  },
  {
    id: "mth302_ch8_024",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For $y'' + \\lambda y = 0$ with $y(0) = y(5) = 0$, which relation determines the eigenvalues?",
    options: [
      "$5\\sqrt{\\lambda} = n\\pi$",
      "$5\\lambda = n\\pi$",
      "$\\sqrt{\\lambda} = n\\pi$",
      "$5\\sqrt{\\lambda} = 2n\\pi$, doubling the right-hand side"
    ],
    correctAnswer: 0,
    explanation: "A nontrivial solution needs $\\sin(5\\sqrt{\\lambda}) = 0$, hence $5\\sqrt{\\lambda} = n\\pi$.\n\nOmitting the square root confuses $\\lambda$ with $\\sqrt{\\lambda}$.\n\nDropping the factor $5$ ignores the length of the interval.\n\nDoubling the right-hand side corresponds to a different boundary condition."
  },
  {
    id: "mth302_ch8_025",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For $y'' + \\lambda y = 0$ with $y(0) = y(5) = 0$, what are the eigenvalues?",
    options: [
      "$\\lambda_n = \\dfrac{n^2\\pi^2}{25}$",
      "$\\lambda_n = \\dfrac{n\\pi}{5}$",
      "$\\lambda_n = \\dfrac{n^2\\pi^2}{5}$, squaring the numerator but not the length",
      "$\\lambda_n = \\dfrac{n^2\\pi^2}{10}$, doubling rather than squaring the length"
    ],
    correctAnswer: 0,
    explanation: "Squaring $\\sqrt{\\lambda} = n\\pi/5$ gives $\\lambda_n = n^2\\pi^2/25$, with the whole expression squared.\n\nLeaving the square root untaken confuses the two quantities.\n\nSquaring only the numerator is the standard slip here.\n\nDoubling the length does not follow from squaring."
  },
  {
    id: "mth302_ch8_026",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "The equation $(1+x^2)y'' + 2xy' + \\lambda y = 0$ is already in the self-adjoint form $[(1+x^2)y']' + \\lambda y = 0$. May the weight function be dropped from the orthogonality integral $\\int y_my_nr\\,dx$ for eigenfunctions of this problem?",
    options: [
      "Yes, because comparing with $(py')' + [q + \\lambda r]y = 0$ shows $r(x) = 1$ here, so the weight is simply absent from the notation",
      "No, because $r(x) = 1 + x^2$ must be carried in the integral, since $p$ is not constant and therefore cannot be treated as the weight function",
      "No, because $r(x) = 2x$ must be carried in the integral",
      "Yes, but only after rescaling the eigenfunctions to unit length"
    ],
    correctAnswer: 0,
    explanation: "Comparing $[(1+x^2)y']' + \\lambda y = 0$ with $(py')' + [q + \\lambda r]y = 0$ gives $p(x) = 1 + x^2$, $q(x) = 0$, and $r(x) = 1$, since nothing multiplies $\\lambda$ beyond the coefficient $1$. The weight can be dropped from the orthogonality integral precisely because $r \\equiv 1$ here, even though $p$ itself is not constant.\n\nAssuming a nonconstant $p$ forces a nonconstant weight is exactly the slip this equation is built to catch: $p$ and $r$ are read off from different places in the standard form, and $p = 1+x^2$ does not make $r$ equal to $1+x^2$.\n\n$2x$ is $p'(x)$, the coefficient of $y'$ after expansion, not the weight multiplying $\\lambda$.\n\nWhether the weight can be dropped from the notation depends only on whether $r \\equiv 1$, not on any rescaling of the eigenfunctions themselves."
  },
  {
    id: "mth302_ch8_027",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "The equation $y'' - 2xy' + \\lambda y = 0$ is converted to self-adjoint form by multiplying through by the integrating factor $e^{-x^2}$, giving $(e^{-x^2}y')' + \\lambda e^{-x^2}y = 0$. For eigenfunctions $y_m$ and $y_n$ of this system belonging to different eigenvalues, which integral must vanish?",
    options: [
      "$\\displaystyle\\int y_m(x)y_n(x)e^{-x^2}\\,dx = 0$, carrying the weight produced by the integrating factor",
      "$\\displaystyle\\int y_m(x)y_n(x)e^{x^2}\\,dx = 0$, using the reciprocal of the correct weight instead of the weight itself",
      "$\\displaystyle\\int [y_m(x) + y_n(x)]e^{-x^2}\\,dx = 0$, integrating a sum of the two eigenfunctions rather than their product",
      "$\\displaystyle\\int y_m(x)y_n(x)\\,dx = 0$"
    ],
    correctAnswer: 0,
    explanation: "Multiplying $y'' - 2xy' + \\lambda y = 0$ by $e^{-x^2}$ gives $(e^{-x^2}y')' + \\lambda e^{-x^2}y = 0$, so comparing with $(py')' + [q + \\lambda r]y = 0$ shows $r(x) = e^{-x^2}$. Orthogonality of eigenfunctions belonging to different eigenvalues therefore requires $\\int y_my_ne^{-x^2}\\,dx = 0$.\n\nUsing $e^{x^2}$ inverts the exponential and carries the reciprocal of the actual weight rather than the weight itself.\n\nIntegrating a sum $y_m + y_n$ rather than the product $y_my_n$ does not define an inner product at all.\n\nDropping $e^{-x^2}$ entirely repeats the standard slip of treating the weight as $1$ when the integrating factor shows it is not."
  },
  {
    id: "mth302_ch8_028",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Which product-to-sum identity is used when verifying orthogonality of sines?",
    options: [
      "$\\sin A\\sin B = \\tfrac{1}{2}[\\cos(A - B) - \\cos(A + B)]$",
      "$\\sin A\\sin B = \\tfrac{1}{2}[\\cos(A + B) - \\cos(A - B)]$",
      "$\\sin A\\sin B = \\tfrac{1}{2}[\\sin(A + B) + \\sin(A - B)]$, producing sines instead",
      "$\\sin A\\sin B = \\cos(A - B) - \\cos(A + B)$"
    ],
    correctAnswer: 0,
    explanation: "The identity converts the product into a difference of cosines with the factor $\\tfrac{1}{2}$, which integrates to zero over the interval when $m \\neq n$.\n\nExchanging the two cosine terms reverses the sign of the whole expression.\n\nA product of two sines gives cosines, not sines.\n\nDropping the factor of one half misstates the identity."
  },
  {
    id: "mth302_ch8_029",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Are $\\sin\\dfrac{n\\pi x}{L}$ and $5\\sin\\dfrac{n\\pi x}{L}$ two different eigenfunctions?",
    options: [
      "No, they differ only by a constant multiple",
      "Yes, since their amplitudes differ from one another",
      "Yes, because they correspond to different eigenvalues",
      "Only when $n$ is even rather than odd"
    ],
    correctAnswer: 0,
    explanation: "Uniqueness of the eigenfunction is understood up to a constant multiple, so scaling produces the same eigenfunction.\n\nA difference in amplitude is exactly the scaling that is being quotiented out.\n\nBoth correspond to the same eigenvalue, since they solve the same problem.\n\nThe parity of $n$ has no bearing on this."
  },
  {
    id: "mth302_ch8_030",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In the Dirichlet example, applying $y(0) = 0$ to $y = A\\sin\\sqrt{\\lambda}x + B\\cos\\sqrt{\\lambda}x$ forces what?",
    options: [
      "$B = 0$",
      "$A = 0$, removing the sine rather than the cosine",
      "$\\lambda = 0$",
      "$A = B$, tying the two constants together"
    ],
    correctAnswer: 0,
    explanation: "At $x = 0$ the sine vanishes and the cosine equals one, so $y(0) = B = 0$.\n\nRemoving the sine would be forced by a Neumann condition at the left end.\n\nThe eigenvalue is not determined by this first condition.\n\nNothing ties the two constants to each other."
  },
  {
    id: "mth302_ch8_031",
    course: "MTH 302",
    chapter: "Chapter 8",
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
  {
    id: "mth302_ch8_032",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Which classical orthogonality relation holds on $[-\\pi, \\pi]$ for $m \\neq n$?",
    options: [
      "$\\displaystyle\\int_{-\\pi}^{\\pi}\\cos mx\\cos nx\\,dx = 0$",
      "$\\displaystyle\\int_{-\\pi}^{\\pi}\\cos mx\\cos nx\\,dx = \\pi$",
      "$\\displaystyle\\int_{-\\pi}^{\\pi}\\cos mx\\cos nx\\,dx = 2\\pi$",
      "$\\displaystyle\\int_{-\\pi}^{\\pi}\\cos mx\\sin nx\\,dx = 1$, mixing the two families"
    ],
    correctAnswer: 0,
    explanation: "Distinct cosine modes are orthogonal on the symmetric interval, so the integral vanishes for $m \\neq n$.\n\nThe value $\\pi$ arises in the equal-index case.\n\nThe value $2\\pi$ arises only for the constant mode.\n\nA cosine against a sine integrates to zero, not to one."
  },
  {
    id: "mth302_ch8_033",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In the Dirichlet example on $[0, 5]$, why is $A \\neq 0$ required?",
    options: [
      "Otherwise the solution is identically zero",
      "Otherwise the eigenvalue becomes negative",
      "Otherwise the weight function fails to be positive",
      "Otherwise the interval length cannot be recovered"
    ],
    correctAnswer: 0,
    explanation: "With $B$ already zero, taking $A = 0$ as well would leave the trivial solution, which is excluded when seeking eigenfunctions.\n\nThe sign of the eigenvalue is not controlled by $A$.\n\nThe weight is fixed at one and is unaffected by $A$.\n\nThe interval length enters through the boundary condition, not through $A$."
  },
  {
    id: "mth302_ch8_034",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What does the auxiliary equation $m^2 + \\lambda = 0$ give for $\\lambda > 0$?",
    options: [
      "$m = \\pm i\\sqrt{\\lambda}$",
      "$m = \\pm\\sqrt{\\lambda}$, giving real roots and exponential solutions",
      "$m = \\pm i\\lambda$",
      "$m = \\pm\\lambda^2$, squaring rather than taking a root"
    ],
    correctAnswer: 0,
    explanation: "Solving $m^2 = -\\lambda$ with $\\lambda > 0$ gives purely imaginary roots $\\pm i\\sqrt{\\lambda}$, which produce the sine and cosine solutions.\n\nReal roots would arise from $m^2 = +\\lambda$.\n\nOmitting the square root misreads the quadratic.\n\nSquaring the eigenvalue is not what solving the quadratic requires."
  },
  {
    id: "mth302_ch8_035",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In an expansion $f \\sim \\sum_n c_n\\phi_n$ with $\\{\\phi_n\\}$ orthogonal with weight $r$, what is $c_n$?",
    options: [
      "$\\dfrac{\\int_a^b fr\\phi_n\\,dx}{\\int_a^b r\\phi_{n}^{2}\\,dx}$",
      "$\\dfrac{\\int_a^b f\\phi_n\\,dx}{\\int_a^b \\phi_{n}^{2}\\,dx}$",
      "$\\int_a^b fr\\phi_n\\,dx$",
      "$\\dfrac{\\int_a^b r\\phi_{n}^{2}\\,dx}{\\int_a^b fr\\phi_n\\,dx}$"
    ],
    correctAnswer: 0,
    explanation: "Multiplying by $r\\phi_n$ and integrating kills every other term by orthogonality, leaving the stated ratio.\n\nOmitting the weight is valid only when $r \\equiv 1$.\n\nWithout the denominator the coefficient is not normalised.\n\nInverting the quotient reverses the roles of the two integrals."
  },
  {
    id: "mth302_ch8_036",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For the eigenvalue problem $y'' + \\lambda y = 0$ on $0 \\le x \\le \\pi$ with $y(0) = 0$ and $y(\\pi) = 0$, solving gives eigenvalues $\\lambda_n = n^2$ for $n = 1, 2, 3, \\ldots$. Does this system have a finite or infinite number of eigenvalues, and why?",
    options: [
      "Infinite, since every positive integer $n$ produces a distinct eigenvalue $n^2$ satisfying both boundary conditions",
      "Finite, limited to $n = 1, 2, 3$, since larger values of $n$ no longer satisfy the boundary condition at $x = \\pi$",
      "Finite, because the interval $[0, \\pi]$ has finite length",
      "Infinite, but only for even values of $n$"
    ],
    correctAnswer: 0,
    explanation: "The eigenfunctions $y_n = \\sin(nx)$ satisfy $y(0) = 0$ automatically and $y(\\pi) = \\sin(n\\pi) = 0$ for every positive integer $n$, so every $n = 1, 2, 3, \\ldots$ produces a genuine eigenvalue $\\lambda_n = n^2$, giving an infinite sequence.\n\nThere is nothing special about $n = 1, 2, 3$; $\\sin(n\\pi) = 0$ holds for every integer $n$, so larger values keep satisfying the boundary condition.\n\nThe finite length of the interval bounds the spacing of the eigenvalues, not how many of them there are.\n\n$\\sin(n\\pi) = 0$ holds for odd integers just as much as even ones, so odd values of $n$ are not excluded."
  },
  {
    id: "mth302_ch8_037",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For $y'' + \\lambda y = 0$ on $0 \\leq x \\leq 5$, which values of $n$ give eigenvalues under Dirichlet ends?",
    options: [
      "$n = 1, 2, 3, \\ldots$",
      "$n = 0, 1, 2, \\ldots$, including the zero mode as well",
      "Only even values of $n$ throughout",
      "Only odd values of $n$ throughout"
    ],
    correctAnswer: 0,
    explanation: "Taking $n = 0$ would give the identically zero solution, so the Dirichlet sequence starts at $n = 1$.\n\nIncluding $n = 0$ is correct for Neumann ends but not for Dirichlet ends.\n\nEven values alone would omit half the genuine eigenfunctions.\n\nOdd values alone would likewise omit half of them."
  },
  {
    id: "mth302_ch8_038",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "The Legendre equation $(1-x^2)y'' - 2xy' + \\lambda y = 0$ on $-1 \\le x \\le 1$ is written in self-adjoint form as $[(1-x^2)y']' + \\lambda y = 0$, with eigenvalues $\\lambda_n = n(n+1)$ and eigenfunctions the Legendre polynomials $P_n(x)$ for $n = 0, 1, 2, \\ldots$. Which statement about this system is false?",
    options: [
      "The weight function is $r(x) = 1 - x^2$, since that factor multiplies the derivative term in the equation, before any differentiation is carried out",
      "The eigenfunctions $P_m(x)$ and $P_n(x)$ are orthogonal with weight $r(x) = 1$ for $m \\neq n$",
      "The eigenvalues are $\\lambda_n = n(n+1)$ for $n = 0, 1, 2, \\ldots$",
      "$p(x) = 1 - x^2$ is the coefficient multiplying $y'$ after differentiation, in $(py')'$"
    ],
    correctAnswer: 0,
    explanation: "Comparing $[(1-x^2)y']' + \\lambda y = 0$ with $(py')' + [q + \\lambda r]y = 0$ shows $p(x) = 1-x^2$, $q(x) = 0$, and $r(x) = 1$, since nothing beyond the coefficient $1$ multiplies $\\lambda$. Calling $1-x^2$ the weight confuses it with $p$, the coefficient that sits inside the derivative term, so this statement is false.\n\nOrthogonality with weight $r(x) = 1$ is correct, since $r = 1$ is exactly what the standard form gives.\n\nThe eigenvalues $\\lambda_n = n(n+1)$ are the correct values for this system.\n\n$p(x) = 1-x^2$ correctly names the coefficient that appears inside $(py')'$, before the derivative is expanded out."
  },
  {
    id: "mth302_ch8_039",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "A student proposes that the equation $y'' + 6xy' + \\lambda y = 0$ is already in the self-adjoint form $py'' + p'y' + (q + \\lambda r)y = 0$ with $p(x) = 1$. Is this equation already in self-adjoint Sturm-Liouville form?",
    options: [
      "No, because $p = 1$ gives $p' = 0$, which does not match the coefficient $6x$ actually multiplying $y'$ in the equation",
      "Yes, because the coefficient of $y''$ is $1$ and the coefficient of $y$ is $\\lambda$, which is all that self-adjoint form requires of an equation",
      "Yes, because $6x$ can be treated as part of the potential term $q(x)$",
      "No, because the eigenvalue $\\lambda$ must always multiply a nonconstant weight function"
    ],
    correctAnswer: 0,
    explanation: "Self-adjoint form requires the coefficient of $y'$ to equal $p'(x)$, the derivative of the coefficient of $y''$. Taking $p(x) = 1$ gives $p'(x) = 0$, but the equation's actual coefficient of $y'$ is $6x$, so $p' \\neq 6x$ and the equation is not yet self-adjoint; an integrating factor would be needed first.\n\nMatching the coefficients of $y''$ and $y$ alone is not sufficient; the coefficient of $y'$ must independently equal the derivative of the coefficient of $y''$, and here it does not.\n\n$q(x)$ multiplies $y$ alone, not $y'$, so $6x$ cannot be absorbed into $q$ without changing which derivative it multiplies.\n\nSelf-adjointness is a condition relating $p$ and $p'$ to the coefficient of $y'$; it places no requirement that $r(x)$ be nonconstant."
  },
  {
    id: "mth302_ch8_040",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For the Neumann problem, what is the eigenfunction belonging to $\\lambda_0 = 0$?",
    options: [
      "A nonzero constant, whose derivative vanishes at both ends",
      "The zero function",
      "A linear function of $x$ with nonzero slope",
      "The sine $\\sin 2x$ evaluated at the first mode"
    ],
    correctAnswer: 0,
    explanation: "A constant has vanishing derivative at both ends and solves $y'' = 0$, so it is a genuine eigenfunction for $\\lambda_0 = 0$.\n\nThe zero function is excluded, since eigenfunctions must be nontrivial.\n\nA nonconstant linear function has nonzero derivative and fails the boundary conditions.\n\nThe sine fails the derivative condition at the left end."
  }
];

export default mth302Chapter8;
