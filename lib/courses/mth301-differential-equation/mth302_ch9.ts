import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter9: QuestionV2[] = [
  {
    id: "mth302_ch9_001",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the value of $\\Gamma(1/2)$?",
    options: [
      "$\\pi$",
      "$\\sqrt{\\pi}$",
      "$\\sqrt{\\pi}/2$",
      "$2\\sqrt{\\pi}$"
    ],
    correctAnswer: 1,
    explanation: "Substituting $t = u^2$ gives $\\Gamma(1/2) = 2\\displaystyle\\int_0^\\infty e^{-u^2}\\,du$, which equals $2 \\cdot \\sqrt{\\pi}/2$, using the polar-coordinate evaluation of that Gaussian integral, giving $\\Gamma(1/2) = \\sqrt{\\pi}$.\n\n$\\pi$ omits the square root, mistaking the squared value for the answer itself.\n\n$\\sqrt{\\pi}/2$ is actually the value of $\\int_0^\\infty e^{-u^2}\\,du$ on its own, before the factor of $2$ supplied by the substitution is applied.\n\n$2\\sqrt{\\pi}$ applies the factor of $2$ twice instead of once."
  },
  {
    id: "mth302_ch9_002",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the value of $\\Gamma(7/2)$?",
    options: [
      "$15\\sqrt{\\pi}/8$",
      "$3\\sqrt{\\pi}/4$",
      "$5\\sqrt{\\pi}/2$",
      "$105\\sqrt{\\pi}/16$"
    ],
    correctAnswer: 0,
    explanation: "Applying the recurrence $\\Gamma(x+1) = x\\Gamma(x)$ repeatedly gives $\\Gamma(7/2) = \\dfrac{5}{2}\\cdot\\dfrac{3}{2}\\cdot\\dfrac{1}{2}\\Gamma(1/2) = \\dfrac{15}{8}\\sqrt{\\pi}$.\n\n$3\\sqrt{\\pi}/4$ is actually the value of $\\Gamma(3/2)$, one recurrence step short of the target.\n\n$5\\sqrt{\\pi}/2$ does not match any correct step in the recurrence chain from $\\Gamma(1/2)$.\n\n$105\\sqrt{\\pi}/16$ is actually the value of $\\Gamma(9/2)$, one recurrence step too far."
  },
  {
    id: "mth302_ch9_003",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the value of $\\Gamma(-3/2)$?",
    options: [
      "$-2\\sqrt{\\pi}$",
      "$4\\sqrt{\\pi}/3$",
      "$-8\\sqrt{\\pi}/15$",
      "Undefined"
    ],
    correctAnswer: 1,
    explanation: "Using $\\Gamma(x) = \\Gamma(x+1)/x$ downward from $\\Gamma(1/2)$, first $\\Gamma(-1/2) = \\Gamma(1/2)/(-1/2) = -2\\sqrt{\\pi}$, and then $\\Gamma(-3/2) = \\Gamma(-1/2)/(-3/2) = (-2\\sqrt{\\pi})/(-3/2) = 4\\sqrt{\\pi}/3$.\n\n$-2\\sqrt{\\pi}$ is actually the value of $\\Gamma(-1/2)$, one step earlier in the chain.\n\n$-8\\sqrt{\\pi}/15$ is actually the value of $\\Gamma(-5/2)$, one step further down the chain.\n\nUndefined is wrong here since $\\Gamma$ is undefined only at $0$ and the negative integers; $-3/2$ is a negative non-integer, where the value is perfectly well defined."
  },
  {
    id: "mth302_ch9_004",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the value of $\\displaystyle\\int_0^\\infty x^7e^{-x}\\,dx$?",
    options: [
      "$7! = 5040$",
      "$8! = 40320$",
      "$6! = 720$",
      "$\\Gamma(7) = 720$"
    ],
    correctAnswer: 0,
    explanation: "Matching against $\\int_0^\\infty t^{s-1}e^{-t}\\,dt$ gives $s - 1 = 7$, so $s = 8$, and the integral equals $\\Gamma(8) = 7! = 5040$. The off-by-one relationship between the exponent in the integrand and the argument of $\\Gamma$ is exactly what this question tests.\n\n$8! = 40320$ mistakenly uses $s = 9$ rather than $s = 8$.\n\n$6! = 720$ and $\\Gamma(7) = 720$ both mistakenly use $s = 7$ rather than the correct $s = 8$."
  },
  {
    id: "mth302_ch9_005",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the value of $\\displaystyle\\int_0^\\infty x^3e^{-4x}\\,dx$?",
    options: [
      "$3/128$",
      "$6/64$",
      "$3!/4$",
      "$1/64$"
    ],
    correctAnswer: 0,
    explanation: "Using the general formula $\\int_0^\\infty x^ne^{-ax}\\,dx = \\Gamma(n+1)/a^{n+1}$, with $n = 3$ and $a = 4$, gives $3!/4^4 = 6/256 = 3/128$.\n\n$6/64$ fails to raise the denominator to the fourth power correctly.\n\n$3!/4$ forgets to raise $a$ to the power $n+1$ at all, using only the first power of $a$.\n\n$1/64$ does not follow from a correct application of the formula."
  },
  {
    id: "mth302_ch9_006",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the general formula for $B(m, n)$, the Beta function, in terms of the Gamma function?",
    options: [
      "$\\dfrac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}$",
      "$\\dfrac{\\Gamma(m)\\Gamma(n)}{(m+n)!}$",
      "$\\Gamma(m+n)\\Gamma(m)\\Gamma(n)$",
      "$\\Gamma(m)\\Gamma(n)\\Gamma(m+n)$"
    ],
    correctAnswer: 0,
    explanation: "For positive integers this identity reads $\\dfrac{(m-1)!(n-1)!}{(m+n-1)!}$, so the denominator is $\\Gamma(m+n)$, which equals $(m+n-1)!$, and not $(m+n)!$.\n\n$\\dfrac{\\Gamma(m)\\Gamma(n)}{(m+n)!}$ commits exactly the off-by-one error of using $(m+n)!$ instead of the correct $(m+n-1)!$ in the denominator.\n\n$\\Gamma(m+n)\\Gamma(m)\\Gamma(n)$ places $\\Gamma(m+n)$ in the numerator rather than the denominator, which is the reciprocal of the correct relationship.\n\n$\\Gamma(m)\\Gamma(n)\\Gamma(m+n)$ omits the division entirely, multiplying all three Gamma values together instead."
  },
  {
    id: "mth302_ch9_007",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the value of $B(4, 3)$?",
    options: [
      "$1/60$",
      "$1/12$",
      "$1/120$",
      "$1/30$"
    ],
    correctAnswer: 0,
    explanation: "Using $B(4,3) = \\dfrac{\\Gamma(4)\\Gamma(3)}{\\Gamma(7)} = \\dfrac{3! \\cdot 2!}{6!} = \\dfrac{6 \\times 2}{720} = \\dfrac{1}{60}$, which agrees with computing the reduction formula step by step down to $2B(2,1) = 1/2$.\n\n$1/12$, $1/120$, and $1/30$ do not match the correct factorial computation $3! \\cdot 2!/6!$."
  },
  {
    id: "mth302_ch9_008",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the value of $\\displaystyle\\int_0^1 x^6(1-x)^4\\,dx$?",
    options: [
      "$B(6, 4)$",
      "$B(7, 5) = 1/210$",
      "$B(7, 5) = 1/420$",
      "$1/35$"
    ],
    correctAnswer: 1,
    explanation: "Matching $\\int_0^1 x^{m-1}(1-x)^{n-1}\\,dx$ against the given integrand gives $m - 1 = 6$ and $n - 1 = 4$, so $m = 7$ and $n = 5$, and $B(7,5) = \\dfrac{6! \\cdot 4!}{10!} = \\dfrac{720 \\times 24}{3628800} = \\dfrac{1}{210}$.\n\n$B(6, 4)$ commits the off-by-one error in reading the exponents as the parameters directly, instead of adding $1$ to each.\n\n$B(7, 5) = 1/420$ correctly identifies the parameters but computes the wrong numerical value.\n\n$1/35$ does not follow from the correct factorial computation."
  },
  {
    id: "mth302_ch9_009",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the trigonometric form of the Beta function $B(m, n)$?",
    options: [
      "$\\displaystyle\\int_0^{\\pi/2}\\sin^m\\theta\\cos^n\\theta\\,d\\theta$",
      "$\\displaystyle\\int_0^1\\sin^{m-1}\\theta\\cos^{n-1}\\theta\\,d\\theta$",
      "$2\\displaystyle\\int_0^\\pi\\sin^{2m}\\theta\\cos^{2n}\\theta\\,d\\theta$",
      "$2\\displaystyle\\int_0^{\\pi/2}\\sin^{2m-1}\\theta\\cos^{2n-1}\\theta\\,d\\theta$"
    ],
    correctAnswer: 3,
    explanation: "Substituting $x = \\sin^2\\theta$ gives $dx = 2\\sin\\theta\\cos\\theta\\,d\\theta$, and $x^{m-1}(1-x)^{n-1}$ becomes $\\sin^{2m-2}\\theta\\cos^{2n-2}\\theta$; combining the powers from the substitution and the integrand produces $2\\int_0^{\\pi/2}\\sin^{2m-1}\\theta\\cos^{2n-1}\\theta\\,d\\theta$. The upper limit is $\\pi/2$ because $x = 1$ corresponds to $\\theta = \\pi/2$.\n\nThe plain $\sin^m\theta\cos^n\theta$ form uses the wrong exponents and omits the leading factor of $2$.\n\nThe version integrated from $0$ to $1$ uses the wrong upper limit for a trigonometric substitution.\n\nThe version integrated from $0$ to $\pi$ with exponents $2m$ and $2n$ uses the wrong upper limit and the wrong exponents."
  },
  {
    id: "mth302_ch9_010",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "At which values is the Gamma function undefined?",
    options: [
      "Only at $x = 0$",
      "At $0$ and every negative integer",
      "At every negative non-integer",
      "Nowhere; Gamma is defined for all real numbers"
    ],
    correctAnswer: 1,
    explanation: "Gamma has poles at $0$ and at every negative integer, where its value blows up to infinity, so it is undefined at those points; negative non-integer arguments, by contrast, are perfectly well defined and can be evaluated using the recurrence relation, with signs alternating as the argument decreases through successive negative half-integers.\n\nOnly at $x = 0$ misses the poles at every negative integer as well.\n\nAt every negative non-integer is exactly backwards, since those values are well defined while the negative integers are not.\n\nNowhere is defined for all real numbers ignores the poles entirely."
  },
  {
    id: "mth302_ch9_011",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the value of $\\displaystyle\\int_0^{\\pi/2}\\sin^5\\theta\\cos^4\\theta\\,d\\theta$?",
    options: [
      "$\\dfrac{8}{315}$",
      "$\\dfrac{16}{315}$, obtained without halving the Beta function",
      "$\\dfrac{1}{15}$, from an incorrect reduction of the parameters",
      "$\\dfrac{\\pi}{32}$, retaining a factor of $\\pi$ in the answer"
    ],
    correctAnswer: 0,
    explanation: "Using $\\int_0^{\\pi/2}\\sin^p\\theta\\cos^q\\theta\\,d\\theta = \\tfrac{1}{2}B\\!\\left(\\tfrac{p+1}{2}, \\tfrac{q+1}{2}\\right)$ with $p = 5$, $q = 4$ gives $\\tfrac{1}{2}B(3, \\tfrac{5}{2}) = \\tfrac{1}{2}\\cdot\\dfrac{\\Gamma(3)\\Gamma(5/2)}{\\Gamma(11/2)} = \\dfrac{8}{315}$.\n\nDoubling the result omits the factor $\\tfrac{1}{2}$ in front of the Beta function.\n\nA value of $\\tfrac{1}{15}$ does not follow from these parameters.\n\nBecause one of the powers is odd, the $\\sqrt{\\pi}$ factors cancel and the answer is rational, so any $\\pi$ in the answer signals an error."
  },
  {
    id: "mth302_ch9_012",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the integral definition of $\\Gamma(x)$?",
    options: [
      "$\\displaystyle\\int_0^\\infty t^{x-1}e^{-t}\\,dt$",
      "$\\displaystyle\\int_0^\\infty t^{x}e^{-t}\\,dt$, using the exponent $x$ rather than $x - 1$",
      "$\\displaystyle\\int_0^1 t^{x-1}e^{-t}\\,dt$, integrating only over the unit interval",
      "$\\displaystyle\\int_0^\\infty t^{x-1}e^{t}\\,dt$, with a growing exponential"
    ],
    correctAnswer: 0,
    explanation: "The Gamma function is defined by $\\int_0^\\infty t^{x-1}e^{-t}\\,dt$, convergent for $x > 0$.\n\nUsing the exponent $x$ instead of $x - 1$ defines $\\Gamma(x + 1)$.\n\nRestricting to the unit interval gives an incomplete Gamma function.\n\nA growing exponential makes the integral diverge."
  },
  {
    id: "mth302_ch9_013",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "For which $x$ does the defining integral for $\\Gamma(x)$ converge?",
    options: [
      "$x > 0$",
      "$x \\geq 1$, excluding the fractional values below one",
      "Every real $x$, including the negative integers",
      "$x < 0$ only, where the reverse recurrence applies"
    ],
    correctAnswer: 0,
    explanation: "The integral converges precisely for positive $x$; negative non-integer values are reached afterwards through the reverse recurrence.\n\nRestricting to $x \\geq 1$ excludes values such as $\\Gamma(1/2)$, which the integral does define.\n\nConvergence fails at zero and the negative integers.\n\nNegative arguments are handled by extension, not by the integral itself."
  },
  {
    id: "mth302_ch9_014",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the fundamental recurrence for the Gamma function?",
    options: [
      "$\\Gamma(x + 1) = x\\Gamma(x)$",
      "$\\Gamma(x + 1) = (x + 1)\\Gamma(x)$, shifting the multiplier by one",
      "$\\Gamma(x) = x\\Gamma(x + 1)$, inverting the direction of the relation",
      "$\\Gamma(x + 1) = \\Gamma(x) + x$, adding rather than multiplying"
    ],
    correctAnswer: 0,
    explanation: "Integration by parts gives $\\Gamma(x + 1) = x\\Gamma(x)$, which is the relation behind both the factorial values and the extension to negative arguments.\n\nUsing $x + 1$ as the multiplier misstates the result of the integration by parts.\n\nInverting the relation reverses which side carries the factor.\n\nThe recurrence is multiplicative, not additive."
  },
  {
    id: "mth302_ch9_015",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "For a positive integer $n$, what does $\\Gamma(n + 1)$ equal?",
    options: [
      "$n!$",
      "$(n + 1)!$, shifting the factorial by one place",
      "$(n - 1)!$, which is the value of $\\Gamma(n)$ instead",
      "$n$, without forming a factorial at all"
    ],
    correctAnswer: 0,
    explanation: "Iterating the recurrence down to $\\Gamma(1) = 1$ gives $\\Gamma(n + 1) = n!$, and correspondingly $\\Gamma(n) = (n - 1)!$.\n\nUsing $(n + 1)!$ shifts the argument one step too far.\n\nThe value $(n - 1)!$ belongs to $\\Gamma(n)$, and confusing the two is the standard slip here.\n\nThe Gamma function produces a factorial, not the argument itself."
  },
  {
    id: "mth302_ch9_016",
    course: "MTH 302",
    chapter: "Chapter 9",
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
  {
    id: "mth302_ch9_017",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "At which arguments is the Gamma function undefined?",
    options: [
      "At $0$ and the negative integers",
      "At every negative argument, integer or not",
      "At the positive integers, where the factorial takes over",
      "At the half-integers, where a square root appears"
    ],
    correctAnswer: 0,
    explanation: "The reverse recurrence blows up at zero and at each negative integer, where the function has poles, while negative non-integers are perfectly well defined.\n\nNegative non-integers such as $-1/2$ do have finite values.\n\nThe positive integers give the factorial values and are certainly defined.\n\nHalf-integers give values involving $\\sqrt{\\pi}$ and are defined."
  },
  {
    id: "mth302_ch9_018",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\Gamma(3/2)$?",
    options: [
      "$\\dfrac{\\sqrt{\\pi}}{2}$",
      "$\\sqrt{\\pi}$",
      "$\\dfrac{3\\sqrt{\\pi}}{4}$, which is the value of $\\Gamma(5/2)$",
      "$\\dfrac{\\sqrt{\\pi}}{4}$, halving the correct value once too often"
    ],
    correctAnswer: 0,
    explanation: "Applying the recurrence, $\\Gamma(3/2) = \\tfrac{1}{2}\\Gamma(1/2) = \\dfrac{\\sqrt{\\pi}}{2}$.\n\nThe bare $\\sqrt{\\pi}$ is $\\Gamma(1/2)$, one step earlier.\n\nThe value $3\\sqrt{\\pi}/4$ is $\\Gamma(5/2)$, one step later.\n\nHalving again overshoots the recurrence."
  },
  {
    id: "mth302_ch9_019",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\Gamma(5/2)$?",
    options: [
      "$\\dfrac{3\\sqrt{\\pi}}{4}$",
      "$\\dfrac{\\sqrt{\\pi}}{2}$, which is the value of $\\Gamma(3/2)$ instead",
      "$\\dfrac{15\\sqrt{\\pi}}{8}$, which is the value of $\\Gamma(7/2)$",
      "$\\dfrac{5\\sqrt{\\pi}}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Using the recurrence twice, $\\Gamma(5/2) = \\tfrac{3}{2}\\cdot\\tfrac{1}{2}\\sqrt{\\pi} = \\dfrac{3\\sqrt{\\pi}}{4}$.\n\nThe value $\\sqrt{\\pi}/2$ is one step earlier.\n\nThe value $15\\sqrt{\\pi}/8$ is one step later.\n\nMultiplying by $5/2$ misapplies the recurrence, which uses the argument minus one."
  },
  {
    id: "mth302_ch9_020",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\Gamma(-1/2)$?",
    options: [
      "$-2\\sqrt{\\pi}$",
      "$2\\sqrt{\\pi}$",
      "$\\dfrac{4\\sqrt{\\pi}}{3}$, which is the value of $\\Gamma(-3/2)$",
      "Undefined, as at the negative integers"
    ],
    correctAnswer: 0,
    explanation: "Using $\\Gamma(x) = \\dfrac{\\Gamma(x + 1)}{x}$ with $x = -1/2$ gives $\\dfrac{\\Gamma(1/2)}{-1/2} = -2\\sqrt{\\pi}$.\n\nDropping the minus sign ignores the negative denominator.\n\nThe value $4\\sqrt{\\pi}/3$ belongs to $\\Gamma(-3/2)$.\n\nNegative half-integers are defined; only zero and the negative integers are not."
  },
  {
    id: "mth302_ch9_021",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "Which substitution converts $\\Gamma(1/2)$ into a Gaussian integral?",
    options: [
      "$t = u^2$",
      "$t = \\sqrt{u}$",
      "$t = e^{-u}$, replacing the variable by an exponential",
      "$t = 1 - u$, reflecting the variable about one"
    ],
    correctAnswer: 0,
    explanation: "Putting $t = u^2$ gives $dt = 2u\\,du$ and turns $\\Gamma(1/2)$ into $2\\int_0^\\infty e^{-u^2}\\,du$, which the polar-coordinate trick evaluates.\n\nThe reverse substitution does not clear the half-power.\n\nAn exponential substitution does not produce a Gaussian.\n\nReflecting about one belongs to the Beta function's symmetry argument."
  },
  {
    id: "mth302_ch9_022",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\displaystyle\\int_0^\\infty e^{-x^2}\\,dx$?",
    options: [
      "$\\dfrac{\\sqrt{\\pi}}{2}$",
      "$\\sqrt{\\pi}$",
      "$\\dfrac{\\pi}{4}$, which is the value of its square",
      "$\\dfrac{\\pi}{2}$, confusing the square with the integral itself"
    ],
    correctAnswer: 0,
    explanation: "The polar-coordinate computation gives $I^2 = \\pi/4$, so $I = \\dfrac{\\sqrt{\\pi}}{2}$, and the factor $2$ supplied by the substitution then yields $\\Gamma(1/2) = \\sqrt{\\pi}$.\n\nThe bare $\\sqrt{\\pi}$ is $\\Gamma(1/2)$, twice this integral.\n\nThe value $\\pi/4$ is $I^2$, not $I$.\n\nThe value $\\pi/2$ matches neither the integral nor its square."
  },
  {
    id: "mth302_ch9_023",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\displaystyle\\int_0^\\infty x^5e^{-x}\\,dx$?",
    options: [
      "$120$",
      "$720$, which is $6!$ rather than $5!$",
      "$24$",
      "$5$, taking the exponent itself as the answer"
    ],
    correctAnswer: 0,
    explanation: "Matching $\\int_0^\\infty t^{s-1}e^{-t}\\,dt$ gives $s - 1 = 5$, so $s = 6$ and the integral is $\\Gamma(6) = 5! = 120$.\n\nThe value $720$ is $6!$ and overshoots by one step.\n\nThe value $24$ is $4!$ and undershoots by one step.\n\nThe exponent itself is not the value of the integral."
  },
  {
    id: "mth302_ch9_024",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the general formula for $\\displaystyle\\int_0^\\infty x^ne^{-ax}\\,dx$ with $a > 0$?",
    options: [
      "$\\dfrac{\\Gamma(n + 1)}{a^{n+1}}$",
      "$\\dfrac{\\Gamma(n + 1)}{a^{n}}$",
      "$\\dfrac{\\Gamma(n)}{a^{n+1}}$, shifting the Gamma argument down by one",
      "$a^{n+1}\\Gamma(n + 1)$, multiplying rather than dividing"
    ],
    correctAnswer: 0,
    explanation: "Substituting $y = ax$ contributes one power of $a$ for each of the $n$ factors of $x$ and one more from $dx$, giving $a^{n+1}$ in the denominator.\n\nOmitting one power of $a$ is exactly the slip this substitution is designed to catch.\n\nShifting the Gamma argument confuses $\\Gamma(n)$ with $\\Gamma(n + 1)$.\n\nMultiplying by $a^{n+1}$ inverts the relation."
  },
  {
    id: "mth302_ch9_025",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the integral definition of $B(m, n)$?",
    options: [
      "$\\displaystyle\\int_0^1 x^{m-1}(1 - x)^{n-1}\\,dx$",
      "$\\displaystyle\\int_0^1 x^{m}(1 - x)^{n}\\,dx$, without reducing either exponent",
      "$\\displaystyle\\int_0^\\infty x^{m-1}(1 - x)^{n-1}\\,dx$, over an infinite range",
      "$\\displaystyle\\int_0^1 x^{m-1}(1 + x)^{n-1}\\,dx$"
    ],
    correctAnswer: 0,
    explanation: "The Beta function is $\\int_0^1 x^{m-1}(1 - x)^{n-1}\\,dx$, convergent for $m > 0$ and $n > 0$.\n\nFailing to reduce the exponents shifts both parameters by one.\n\nThe range is the unit interval, not the half-line.\n\nThe bracket carries a minus sign, which is what confines the integrand to $[0, 1]$."
  },
  {
    id: "mth302_ch9_026",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What symmetry does the Beta function possess?",
    options: [
      "$B(m, n) = B(n, m)$",
      "$B(m, n) = -B(n, m)$, changing sign under the exchange",
      "$B(m, n) = B(m + n, 1)$, collapsing the two parameters",
      "$B(m, n) = \\dfrac{1}{B(n, m)}$, giving the reciprocal"
    ],
    correctAnswer: 0,
    explanation: "The substitution $x \\mapsto 1 - x$ exchanges the two exponents, showing $B(m, n) = B(n, m)$.\n\nA sign change would contradict the positivity of the integrand.\n\nCollapsing the parameters discards information the function retains.\n\nThe reciprocal relation does not follow from the substitution."
  },
  {
    id: "mth302_ch9_027",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "Which substitution produces the trigonometric form of the Beta function?",
    options: [
      "$x = \\sin^2\\theta$",
      "$x = \\sin\\theta$, without the square on the sine",
      "$x = \\cos\\theta$, using the cosine instead",
      "$x = \\tan^2\\theta$"
    ],
    correctAnswer: 0,
    explanation: "Putting $x = \\sin^2\\theta$ gives $1 - x = \\cos^2\\theta$ and $dx = 2\\sin\\theta\\cos\\theta\\,d\\theta$, sending $x = 0$ to $\\theta = 0$ and $x = 1$ to $\\theta = \\pi/2$.\n\nOmitting the square fails to convert $1 - x$ into a clean square.\n\nThe cosine reverses the limits and does not simplify the bracket.\n\nThe tangent squared runs to infinity rather than to one."
  },
  {
    id: "mth302_ch9_028",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\displaystyle\\int_0^{\\pi/2}\\sin^p\\theta\\cos^q\\theta\\,d\\theta$ in terms of the Beta function?",
    options: [
      "$\\tfrac{1}{2}B\\!\\left(\\dfrac{p+1}{2},\\ \\dfrac{q+1}{2}\\right)$",
      "$B\\!\\left(\\dfrac{p+1}{2},\\ \\dfrac{q+1}{2}\\right)$",
      "$\\tfrac{1}{2}B\\!\\left(\\dfrac{p}{2},\\ \\dfrac{q}{2}\\right)$",
      "$2B\\!\\left(\\dfrac{p+1}{2},\\ \\dfrac{q+1}{2}\\right)$, doubling instead of halving"
    ],
    correctAnswer: 0,
    explanation: "Inverting the trigonometric form gives the integral as one half of the Beta function with each parameter shifted and halved.\n\nOmitting the factor of one half doubles the answer.\n\nDropping the shift by one misreads the parameters.\n\nDoubling inverts the required factor."
  },
  {
    id: "mth302_ch9_029",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "For positive integers, what does $B(m, n)$ equal in factorial form?",
    options: [
      "$\\dfrac{(m-1)!\\,(n-1)!}{(m+n-1)!}$",
      "$\\dfrac{m!\\,n!}{(m+n)!}$",
      "$\\dfrac{(m-1)!\\,(n-1)!}{(m+n)!}$, reducing only the numerator",
      "$\\dfrac{m!\\,n!}{(m+n-1)!}$, reducing only the denominator"
    ],
    correctAnswer: 0,
    explanation: "Since $B(m, n) = \\dfrac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}$ and $\\Gamma(k) = (k-1)!$, every factorial is reduced by one.\n\nLeaving all the factorials unreduced is the standard off-by-one error.\n\nReducing only the numerator is inconsistent.\n\nReducing only the denominator is likewise inconsistent."
  },
  {
    id: "mth302_ch9_030",
    course: "MTH 302",
    chapter: "Chapter 9",
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
  {
    id: "mth302_ch9_031",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\displaystyle\\int_0^1 x^3(1 - x)^2\\,dx$?",
    options: [
      "$\\dfrac{1}{60}$",
      "$\\dfrac{1}{12}$",
      "$\\dfrac{1}{30}$, doubling the correct value",
      "$\\dfrac{1}{20}$, from an incorrect parameter match"
    ],
    correctAnswer: 0,
    explanation: "Matching $x^{m-1}(1-x)^{n-1}$ gives $m = 4$ and $n = 3$, so the integral is $B(4, 3) = \\dfrac{3!\\,2!}{6!} = \\dfrac{12}{720} = \\dfrac{1}{60}$.\n\nThe value $1/12$ corresponds to different parameters.\n\nDoubling the result misplaces a factor.\n\nA value of $1/20$ does not follow from these factorials."
  },
  {
    id: "mth302_ch9_032",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the relation between the Beta and Gamma functions?",
    options: [
      "$B(m, n) = \\dfrac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m + n)}$",
      "$B(m, n) = \\dfrac{\\Gamma(m)\\Gamma(n)}{(m + n)!}$",
      "$B(m, n) = \\dfrac{\\Gamma(m + n)}{\\Gamma(m)\\Gamma(n)}$",
      "$B(m, n) = \\Gamma(m)\\Gamma(n)\\Gamma(m + n)$, forming a product of all three"
    ],
    correctAnswer: 0,
    explanation: "The Beta function is the product of two Gamma values divided by the Gamma of their sum.\n\nWriting $(m + n)!$ in the denominator carries an off-by-one error, since $\\Gamma(m + n) = (m + n - 1)!$.\n\nInverting the quotient gives the reciprocal.\n\nA product of all three has entirely the wrong structure."
  },
  {
    id: "mth302_ch9_033",
    course: "MTH 302",
    chapter: "Chapter 9",
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
  {
    id: "mth302_ch9_034",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "Why is the answer to $\\displaystyle\\int_0^{\\pi/2}\\sin^5\\theta\\cos^4\\theta\\,d\\theta$ rational rather than a multiple of $\\pi$?",
    options: [
      "One of the powers is odd, so the $\\sqrt{\\pi}$ factors cancel",
      "Both powers are even, which always removes the irrational part",
      "The interval of integration is symmetric about its midpoint",
      "The Beta function is always rational for integer parameters"
    ],
    correctAnswer: 0,
    explanation: "An odd power makes one Beta parameter an integer, so the half-integer Gamma values pair up and their $\\sqrt{\\pi}$ factors cancel, leaving a rational number.\n\nBoth powers being even is precisely the case in which a $\\pi$ survives.\n\nSymmetry of the interval does not control the arithmetic of the result.\n\nThe Beta function is not rational for all integer parameters in the half-integer setting."
  },
  {
    id: "mth302_ch9_035",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "In evaluating $\\displaystyle\\int_0^\\infty x^3e^{-4x}\\,dx$, what power of $4$ appears in the denominator?",
    options: [
      "$4^4$",
      "$4^3$, counting only the powers contributed by $x^3$",
      "$4^1$, counting only the contribution from $dx$",
      "$4^2$, counting half of the required contributions"
    ],
    correctAnswer: 0,
    explanation: "The substitution $y = 4x$ contributes one factor of $4$ for each of the three powers of $x$ and one more from $dx$, giving $4^4$.\n\nCounting only the powers from $x^3$ forgets the contribution of $dx$.\n\nCounting only $dx$ forgets the three powers of $x$.\n\nA squared factor accounts for neither contribution correctly."
  },
  {
    id: "mth302_ch9_036",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\Gamma(-5/2)$ in terms of $\\sqrt{\\pi}$?",
    options: [
      "$-\\dfrac{8\\sqrt{\\pi}}{15}$",
      "$\\dfrac{8\\sqrt{\\pi}}{15}$",
      "$\\dfrac{4\\sqrt{\\pi}}{3}$, which is the value of $\\Gamma(-3/2)$",
      "$-2\\sqrt{\\pi}$"
    ],
    correctAnswer: 0,
    explanation: "Applying $\\Gamma(x) = \\Gamma(x+1)/x$ once more to $\\Gamma(-3/2) = 4\\sqrt{\\pi}/3$ gives $\\Gamma(-5/2) = \\dfrac{4\\sqrt{\\pi}/3}{-5/2} = -\\dfrac{8\\sqrt{\\pi}}{15}$.\n\nDropping the sign ignores that the values alternate.\n\nThe value $4\\sqrt{\\pi}/3$ is one step earlier.\n\nThe value $-2\\sqrt{\\pi}$ is two steps earlier."
  },
  {
    id: "mth302_ch9_037",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "How do the values of $\\Gamma$ at successive negative half-integers behave in sign?",
    options: [
      "They alternate",
      "They are all negative without exception",
      "They are all positive without exception",
      "They keep the sign of the nearest integer argument"
    ],
    correctAnswer: 0,
    explanation: "Each application of $\\Gamma(x) = \\Gamma(x+1)/x$ divides by a negative number, so the sign flips at every step.\n\nA uniformly negative sequence contradicts the division by successive negatives.\n\nA uniformly positive sequence fails for $\\Gamma(-1/2) = -2\\sqrt{\\pi}$.\n\nThe sign is set by the recurrence, not by a neighbouring integer."
  },
  {
    id: "mth302_ch9_038",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\displaystyle\\int_0^{\\pi/2}\\sin^2\\theta\\cos^2\\theta\\,d\\theta$?",
    options: [
      "$\\dfrac{\\pi}{16}$",
      "$\\dfrac{\\pi}{8}$, doubling the correct value",
      "$\\dfrac{1}{16}$",
      "$\\dfrac{\\pi}{4}$, from an incorrect parameter match"
    ],
    correctAnswer: 0,
    explanation: "With $p = q = 2$ the formula gives $\\tfrac{1}{2}B(3/2, 3/2) = \\tfrac{1}{2}\\cdot\\dfrac{\\Gamma(3/2)^2}{\\Gamma(3)} = \\tfrac{1}{2}\\cdot\\dfrac{\\pi/4}{2} = \\dfrac{\\pi}{16}$.\n\nDoubling misplaces the factor of one half.\n\nBecause both powers are even the $\\sqrt{\\pi}$ factors survive, so a $\\pi$ must appear.\n\nA value of $\\pi/4$ does not follow from these parameters."
  },
  {
    id: "mth302_ch9_039",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\displaystyle\\lim_{x \\to 0^+}\\Gamma(x)$?",
    options: [
      "$\\infty$",
      "$0$, approaching the value of the argument",
      "$1$",
      "$\\sqrt{\\pi}$"
    ],
    correctAnswer: 0,
    explanation: "The recurrence $\\Gamma(x) = \\Gamma(x+1)/x$ has a numerator tending to $\\Gamma(1) = 1$ while the denominator tends to zero from above, so the limit is infinite and the function has a pole there.\n\nA limit of zero contradicts the blow-up.\n\nThe value $1$ is attained at $x = 1$, not in this limit.\n\nThe value $\\sqrt{\\pi}$ belongs to $\\Gamma(1/2)$."
  },
  {
    id: "mth302_ch9_040",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "Convergence of the Beta integral requires which condition?",
    options: [
      "$m > 0$ and $n > 0$",
      "$m > 1$ and $n > 1$, excluding the values between zero and one",
      "$m + n > 0$ only, allowing one parameter to be negative",
      "$m$ and $n$ both integers"
    ],
    correctAnswer: 0,
    explanation: "Both parameters must be strictly positive for the integrand to be integrable at each endpoint of $[0, 1]$.\n\nRequiring values above one excludes cases such as $B(1/2, 1/2)$, which converge.\n\nA condition on the sum alone permits a divergent endpoint.\n\nThe parameters need not be integers, as the half-integer cases show."
  }
];

export default mth302Chapter9;
