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
    text: "Eigenfunctions of a Sturm-Liouville system corresponding to distinct eigenvalues satisfy which relation?",
    options: [
      "$\\displaystyle\\int_a^b y_my_n\\,dx = 1$",
      "$\\displaystyle\\int_a^b y_my_n\\,r(x)\\,dx = 0$",
      "$\\displaystyle\\int_a^b y_my_n\\,dx = \\dfrac{2}{2n+1}$",
      "$y_m = y_n$"
    ],
    correctAnswer: 1,
    explanation: "Orthogonality of Sturm-Liouville eigenfunctions is always taken with respect to the weight function $r(x)$ appearing in the equation, so the integral of $y_my_nr(x)\\,dx$ vanishes for $m \\neq n$. The weight may be omitted from the notation only when $r$ is identically $1$.\n\n$\\displaystyle\\int_a^b y_my_n\\,dx = 1$ wrongly assumes normalization to $1$ without the weight function.\n\n$\\displaystyle\\int_a^b y_my_n\\,dx = \\dfrac{2}{2n+1}$ is the special normalization used for Legendre polynomials, not a general Sturm-Liouville property.\n\n$y_m = y_n$ contradicts the premise that the eigenvalues, and hence the eigenfunctions, are distinct."
  },
  {
    id: "mth302_ch8_005",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Which statement about a regular Sturm-Liouville system is false?",
    options: [
      "The eigenvalues are real",
      "The eigenvalues form an increasing sequence tending to infinity",
      "Each eigenvalue has exactly one linearly independent eigenfunction",
      "Two different eigenvalues can share the same eigenfunction"
    ],
    correctAnswer: 3,
    explanation: "An eigenfunction determines its eigenvalue uniquely through the differential equation it satisfies, so it is impossible for two different eigenvalues to share the same eigenfunction, making this statement false.\n\nThe eigenvalues are real is one of the standard listed properties of Sturm-Liouville systems, and is true.\n\nThe eigenvalues form an increasing sequence tending to infinity is also a standard true property.\n\nEach eigenvalue has exactly one linearly independent eigenfunction is true as well, understood as unique up to a constant multiple."
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
    text: "If $f$ is expanded as $\\sum_n c_n\\phi_n$, where the $\\phi_n$ are orthogonal on the interval from $a$ to $b$ with weight $r$, what is the formula for the coefficient $c_n$?",
    options: [
      "$c_n = \\displaystyle\\int_a^b rf\\phi_n\\,dx$",
      "$c_n = \\dfrac{\\displaystyle\\int_a^b rf\\phi_n\\,dx}{\\displaystyle\\int_a^b r\\phi_{n}^{2}\\,dx}$",
      "$c_n = \\dfrac{\\displaystyle\\int_a^b f\\phi_n\\,dx}{\\displaystyle\\int_a^b \\phi_n\\,dx}$",
      "$c_n$ equals the average of $f$ over the interval from $a$ to $b$"
    ],
    correctAnswer: 1,
    explanation: "Multiplying the expansion by $r\\phi_m$ and integrating over the interval from $a$ to $b$ uses orthogonality to eliminate every term except the one with $n = m$, leaving $\\displaystyle\\int_a^b rf\\phi_n\\,dx$ equal to $c_n$ times $\\displaystyle\\int_a^b r\\phi_{n}^{2}\\,dx$, and dividing gives the coefficient formula.\n\n$c_n = \\displaystyle\\int_a^b rf\\phi_n\\,dx$ alone is correct only when the system is orthonormal, meaning the denominator integral happens to equal $1$, which is not assumed in general.\n\n$c_n = \\dfrac{\\int f\\phi_n\\,dx}{\\int \\phi_n\\,dx}$ omits the weight function $r$ from both integrals and uses $\\phi_n$ instead of $\\phi_n$ squared in the denominator.\n\n$c_n$ equals the average of $f$ describes only the special case of the constant term in a Fourier series, not the general Sturm-Liouville expansion coefficient."
  },
  {
    id: "mth302_ch8_009",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Which equation is the general form of a Sturm-Liouville problem?",
    options: [
      "$(p(x)y')' + [q(x) + \\lambda r(x)]y = 0$",
      "$p(x)y'' + q(x)y' + r(x)y = 0$, with no eigenvalue parameter present",
      "$(p(x)y')' + \\lambda y = 0$, omitting the functions $q$ and $r$ entirely",
      "$y'' + \\lambda y = 0$, which is only the simplest special case"
    ],
    correctAnswer: 0,
    explanation: "The general form places the eigenvalue against the weight function, giving $(py')' + [q + \\lambda r]y = 0$ on $a \\leq x \\leq b$ with $r > 0$.\n\nAn equation with no $\\lambda$ is not an eigenvalue problem at all.\n\nDropping $q$ and $r$ discards both the potential term and the weight.\n\nThe constant-coefficient equation is one instance rather than the general form."
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
    text: "In the expanded form $p(x)y'' + p'(x)y' + [q(x) + \\lambda r(x)]y = 0$, how is $p$ identified?",
    options: [
      "As the coefficient of $y''$",
      "As the coefficient of $y'$, which is actually its derivative",
      "As the coefficient of $y$, alongside the eigenvalue term",
      "As the reciprocal of the weight function $r$"
    ],
    correctAnswer: 0,
    explanation: "Comparing with the expanded form shows the coefficient of $y''$ is $p$ and the coefficient of $y'$ is $p'$, which is the consistency check.\n\nThe coefficient of $y'$ is the derivative $p'$, not $p$ itself.\n\nThe coefficient of $y$ contains $q$ and $\\lambda r$.\n\nThe weight is a separate function and is not the reciprocal of $p$."
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
    text: "What form do the boundary conditions of a Sturm-Liouville system take?",
    options: [
      "$\\alpha_1y(a) + \\alpha_2y'(a) = 0$ and $\\beta_1y(b) + \\beta_2y'(b) = 0$",
      "$y(a) = y(b)$ with the derivatives left entirely unconstrained",
      "$y(a) = 1$ and $y(b) = 1$, fixing the values at the two ends",
      "$y'(a) = y'(b) = \\lambda$, tying the derivatives to the eigenvalue"
    ],
    correctAnswer: 0,
    explanation: "Each end carries a homogeneous condition combining the function and its derivative, which is what makes the trivial solution always admissible and the eigenvalues discrete.\n\nMatching values at the two ends describes periodic conditions, a different type.\n\nNonzero prescribed values would make the conditions nonhomogeneous.\n\nTying the derivatives to $\\lambda$ is not a standard boundary condition."
  },
  {
    id: "mth302_ch8_014",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What is true of the eigenvalues of a Sturm-Liouville system?",
    options: [
      "They are real, and non-negative under the usual sign conditions",
      "They are complex in general, since the auxiliary roots are imaginary",
      "They form a finite set determined by the interval length",
      "They may repeat, with several eigenfunctions sharing one value"
    ],
    correctAnswer: 0,
    explanation: "The eigenvalues are real and, under the usual sign conditions, non-negative, even though the auxiliary equation produces roots $m = \\pm i\\sqrt{\\lambda}$.\n\nThe imaginary auxiliary roots do not make the eigenvalues complex.\n\nThe eigenvalues form an infinite sequence tending to infinity.\n\nEach eigenvalue is simple, so repetition does not occur."
  },
  {
    id: "mth302_ch8_015",
    course: "MTH 302",
    chapter: "Chapter 8",
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
  {
    id: "mth302_ch8_016",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "How many linearly independent eigenfunctions correspond to each eigenvalue?",
    options: [
      "Exactly one, understood up to a constant multiple",
      "Exactly two",
      "Infinitely many, since any multiple is also an eigenfunction",
      "A number that varies from one eigenvalue to the next"
    ],
    correctAnswer: 0,
    explanation: "The problem is simple, so each eigenvalue carries one eigenfunction up to a constant multiple, meaning $\\sin(n\\pi x/L)$ and $5\\sin(n\\pi x/L)$ are not counted as different.\n\nThe second-order equation admits two solutions, but only one satisfies both boundary conditions.\n\nConstant multiples do not count as independent.\n\nSimplicity means the count is one for every eigenvalue."
  },
  {
    id: "mth302_ch8_017",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "With respect to what are Sturm-Liouville eigenfunctions orthogonal?",
    options: [
      "The weight function $r(x)$, which must be carried in the integral",
      "The coefficient $p(x)$ appearing in the leading term",
      "The potential $q(x)$ appearing alongside the eigenvalue",
      "No weight at all"
    ],
    correctAnswer: 0,
    explanation: "The relation is $\\int_a^b y_my_nr\\,dx = 0$ for $m \\neq n$, so the weight $r$ must be carried unless it happens to equal one.\n\nThe coefficient $p$ appears in the differential operator, not in the inner product.\n\nThe potential $q$ likewise plays no part in orthogonality.\n\nDropping the weight is valid only in the special case $r \\equiv 1$."
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
    text: "When may the weight be omitted from the orthogonality integral?",
    options: [
      "Only when $r \\equiv 1$",
      "Whenever the eigenvalues are distinct from one another",
      "Whenever the interval is symmetric about the origin",
      "Always"
    ],
    correctAnswer: 0,
    explanation: "The weight can be dropped only in the special case where it is identically one; otherwise it must be carried.\n\nDistinct eigenvalues are what make the integral vanish, not what removes the weight.\n\nSymmetry of the interval has no bearing on the weight.\n\nThe weight does not cancel and omitting it is a standard error."
  },
  {
    id: "mth302_ch8_027",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Two functions are orthogonal on $[a, b]$ with respect to $r$ when which integral vanishes?",
    options: [
      "$\\displaystyle\\int_a^b f(x)g(x)r(x)\\,dx$",
      "$\\displaystyle\\int_a^b [f(x) + g(x)]r(x)\\,dx$, integrating a sum instead of a product",
      "$\\displaystyle\\int_a^b \\dfrac{f(x)}{g(x)}r(x)\\,dx$, integrating a quotient of the two",
      "$\\displaystyle\\int_a^b f(x)g(x)\\,dx$"
    ],
    correctAnswer: 0,
    explanation: "Weighted orthogonality means the integral of the product of the two functions against the positive weight vanishes.\n\nA sum rather than a product does not define an inner product.\n\nA quotient is undefined wherever $g$ vanishes.\n\nOmitting the weight gives the unweighted notion, valid only when $r \\equiv 1$."
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
    text: "The eigenvalues of a Sturm-Liouville system form which kind of set?",
    options: [
      "An infinite sequence",
      "A finite set whose size equals the order of the equation",
      "A continuous interval of admissible values",
      "A single value determined by the weight function"
    ],
    correctAnswer: 0,
    explanation: "The solutions form an infinite sequence of eigenfunctions with eigenvalues indexed by $n = 0, 1, 2, \\ldots$ tending to infinity.\n\nA finite set would contradict the unbounded increasing sequence.\n\nA continuum of eigenvalues does not arise for a regular problem.\n\nA single eigenvalue would leave no expansion to build."
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
    text: "Which statement about a regular Sturm-Liouville system is false?",
    options: [
      "Some eigenvalues may be repeated",
      "The eigenvalues are all real numbers",
      "The eigenfunctions are mutually orthogonal with weight $r$",
      "The eigenvalues increase without bound"
    ],
    correctAnswer: 0,
    explanation: "The system is simple, meaning each eigenvalue carries exactly one independent eigenfunction, so repetition never occurs and this statement is the false one.\n\nReality of the eigenvalues is one of the core properties.\n\nWeighted orthogonality is likewise a core property.\n\nGrowth without bound is part of the standard ordering of the eigenvalues."
  },
  {
    id: "mth302_ch8_039",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In the expanded Sturm-Liouville form, what must the coefficient of $y'$ equal?",
    options: [
      "$p'(x)$",
      "$q(x)$",
      "$r(x)$",
      "Zero in every admissible case"
    ],
    correctAnswer: 0,
    explanation: "Expanding $(py')'$ gives $py'' + p'y'$, so consistency requires the coefficient of $y'$ to be exactly the derivative of the coefficient of $y''$.\n\nThe potential $q$ multiplies $y$, not $y'$.\n\nThe weight $r$ multiplies $\\lambda y$.\n\nThe coefficient vanishes only when $p$ happens to be constant."
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
