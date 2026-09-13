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
    text: "Compute $B(5,3)$ by first writing it in terms of Gamma functions using $B(m,n) = \\Gamma(m)\\Gamma(n)/\\Gamma(m+n)$, then evaluating each Gamma at the specific integers involved.",
    options: [
      "$5!\\cdot 3!/7! = 720/5040 = 1/7$, using $m!$ and $n!$ instead of $\\Gamma(m)=(m-1)!$ and $\\Gamma(n)=(n-1)!$",
      "$\\Gamma(5)\\Gamma(3)/8! = 48/40320 = 1/840$, using $(m+n)!$ instead of $\\Gamma(m+n)=(m+n-1)!$",
      "$\\Gamma(5)\\Gamma(3)/\\Gamma(8) = 4!\\cdot 2!/7! = 48/5040 = 1/105$, since $\\Gamma(5)=4!=24$, $\\Gamma(3)=2!=2$, and $\\Gamma(8)=7!=5040$, following directly from the Beta-Gamma relation",
      "$\\Gamma(8)/[\\Gamma(5)\\Gamma(3)] = 5040/48 = 105$, inverting the correct quotient"
    ],
    correctAnswer: 2,
    explanation: "Writing $B(5,3) = \\Gamma(5)\\Gamma(3)/\\Gamma(8)$ and evaluating each Gamma as a factorial gives $\\Gamma(5)=4!=24$, $\\Gamma(3)=2!=2$, and $\\Gamma(8)=7!=5040$, so $B(5,3) = 24\\times 2/5040 = 48/5040 = 1/105$.\n\n$48/40320 = 1/840$ comes from writing $(m+n)! = 8!$ in the denominator instead of the correct $\\Gamma(m+n) = \\Gamma(8) = 7! = 5040$, the standard off-by-one slip in this relation.\n\n$720/5040 = 1/7$ comes from using $m! = 5!$ and $n! = 3!$ directly in the numerator instead of $\\Gamma(m) = (m-1)! = 4!$ and $\\Gamma(n) = (n-1)! = 2!$, confusing $\\Gamma(k)$ with $k!$.\n\n$5040/48 = 105$ inverts the quotient, placing $\\Gamma(m+n)$ in the numerator instead of the denominator."
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
    text: "By plugging $m=4$ and $n=3$ into the trigonometric form of the Beta function, $B(m,n) = 2\\displaystyle\\int_0^{\\pi/2}\\sin^{2m-1}\\theta\\cos^{2n-1}\\theta\\,d\\theta$, what is $B(4,3)$ expressed as a trigonometric integral?",
    options: [
      "$2\\displaystyle\\int_0^{\\pi/2}\\sin^7\\theta\\cos^5\\theta\\,d\\theta$, since the trig form uses $2m-1$ and $2n-1$, giving $2(4)-1=7$ and $2(3)-1=5$",
      "$2\\displaystyle\\int_0^{\\pi/2}\\sin^4\\theta\\cos^3\\theta\\,d\\theta$, using $m$ and $n$ directly as the exponents without doubling and subtracting one",
      "$\\displaystyle\\int_0^{\\pi/2}\\sin^7\\theta\\cos^5\\theta\\,d\\theta$, omitting the leading factor of $2$",
      "$2\\displaystyle\\int_0^{\\pi}\\sin^7\\theta\\cos^5\\theta\\,d\\theta$, using $\\pi$ as the upper limit instead of $\\pi/2$"
    ],
    correctAnswer: 0,
    explanation: "Substituting $m=4$ and $n=3$ into $B(m,n) = 2\\int_0^{\\pi/2}\\sin^{2m-1}\\theta\\cos^{2n-1}\\theta\\,d\\theta$ gives exponents $2(4)-1=7$ and $2(3)-1=5$, so $B(4,3) = 2\\int_0^{\\pi/2}\\sin^7\\theta\\cos^5\\theta\\,d\\theta$.\n\n$2\\int_0^{\\pi/2}\\sin^4\\theta\\cos^3\\theta\\,d\\theta$ uses $m$ and $n$ themselves as the exponents, skipping the doubling and the subtraction of one that the trigonometric substitution $x=\\sin^2\\theta$ actually produces.\n\n$\\int_0^{\\pi/2}\\sin^7\\theta\\cos^5\\theta\\,d\\theta$ has the right exponents but drops the factor of $2$ that comes from $dx = 2\\sin\\theta\\cos\\theta\\,d\\theta$.\n\n$2\\int_0^{\\pi}\\sin^7\\theta\\cos^5\\theta\\,d\\theta$ has the right exponents and factor of $2$ but the wrong upper limit; $x=1$ corresponds to $\\theta=\\pi/2$, not $\\theta=\\pi$."
  },
  {
    id: "mth302_ch9_010",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "A student tries to compute $\\Gamma(-3)$ using the reverse recurrence $\\Gamma(x) = \\Gamma(x+1)/x$, starting from $\\Gamma(1) = 1$ and stepping down one integer at a time: $\\Gamma(0) = \\Gamma(1)/0$, $\\Gamma(-1) = \\Gamma(0)/(-1)$, $\\Gamma(-2) = \\Gamma(-1)/(-2)$, $\\Gamma(-3) = \\Gamma(-2)/(-3)$. What is the value of $\\Gamma(-3)$, and why?",
    options: [
      "$0$, since dividing by zero at the $\\Gamma(0)$ step is conventionally taken to give a value of zero",
      "Undefined, since the chain divides by zero at the $\\Gamma(0)$ step, and undefined result carries to $\\Gamma(-3)$",
      "$-1/6$, obtained by evaluating $1/[(-1)\\times(-2)\\times(-3)]$ as though the chain had no poles at all",
      "$-6$, obtained by mistakenly treating $\\Gamma(-3)$ as equal to $(-3)!$ computed directly"
    ],
    correctAnswer: 1,
    explanation: "The very first step of the reverse recurrence, $\\Gamma(0) = \\Gamma(1)/0$, divides by zero, so $\\Gamma(0)$ is already undefined; every later step in the chain, including $\\Gamma(-1)$, $\\Gamma(-2)$, and $\\Gamma(-3)$, inherits that undefined value, matching the fact that $\\Gamma$ has poles at $0$ and every negative integer.\n\n$0$ misreads division by zero as producing zero; a vanishing denominator makes the quotient undefined, not zero.\n\n$-1/6$ comes from computing $1/[(-1)(-2)(-3)]$ as if $\\Gamma(1)$ could simply be divided by each successive negative integer with no pole in between, ignoring that the very first division is by zero.\n\n$-6$ mistakenly treats $\\Gamma(-3)$ as $(-3)! = (-3)(-2)(-1) = -6$, but factorials are not defined for negative integers, and $\\Gamma$ itself is undefined there too."
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
    text: "By matching the integrand of $\\displaystyle\\int_0^\\infty t^{9/2}e^{-t}\\,dt$ against the defining integral $\\displaystyle\\int_0^\\infty t^{x-1}e^{-t}\\,dt$ for $\\Gamma(x)$, and then applying the recurrence forward from $\\Gamma(1/2) = \\sqrt{\\pi}$, what is $x$, and what does the integral equal?",
    options: [
      "$x = 11/2$, giving $\\Gamma(11/2) = 105\\sqrt{\\pi}/16$, stopping the recurrence one step short of the correct value",
      "$x = 9/2$, giving $\\Gamma(9/2) = 105\\sqrt{\\pi}/16$, treating the exponent itself as $x$ instead of $x - 1$",
      "$x = 11/2$, giving $\\Gamma(11/2) = 945\\sqrt{\\pi}/32$",
      "$x = 13/2$, giving $\\Gamma(13/2) = 10395\\sqrt{\\pi}/64$, carrying the recurrence one step too far"
    ],
    correctAnswer: 2,
    explanation: "Matching $t^{9/2}$ against $t^{x-1}$ gives $x - 1 = 9/2$, so $x = 11/2$. Applying $\\Gamma(k+1)=k\\Gamma(k)$ forward from $\\Gamma(1/2)=\\sqrt{\\pi}$: $\\Gamma(3/2)=\\tfrac12\\sqrt{\\pi}$, $\\Gamma(5/2)=\\tfrac34\\sqrt{\\pi}$, $\\Gamma(7/2)=\\tfrac{15}{8}\\sqrt{\\pi}$, $\\Gamma(9/2)=\\tfrac{105}{16}\\sqrt{\\pi}$, and $\\Gamma(11/2)=\\tfrac{9}{2}\\cdot\\tfrac{105}{16}\\sqrt{\\pi} = \\tfrac{945}{32}\\sqrt{\\pi}$.\n\n$x = 9/2$ treats the exponent $9/2$ itself as $x$, forgetting that the defining integral uses $t^{x-1}$, not $t^x$.\n\n$\\Gamma(11/2) = 105\\sqrt{\\pi}/16$ correctly identifies $x=11/2$ but reports the value of $\\Gamma(9/2)$, one recurrence step short.\n\n$x = 13/2$ overshoots by one, and $\\Gamma(13/2) = 10395\\sqrt{\\pi}/64$ is the value one step past the correct $\\Gamma(11/2)$."
  },
  {
    id: "mth302_ch9_013",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "The integral $\\displaystyle\\int_0^\\infty t^{-3/2}e^{-t}\\,dt$ matches $\\displaystyle\\int_0^\\infty t^{x-1}e^{-t}\\,dt$ with $x - 1 = -3/2$, so $x = -1/2$. Does this integral converge, and how does that relate to the accepted value $\\Gamma(-1/2) = -2\\sqrt{\\pi}$?",
    options: [
      "It diverges here, since convergence of the integral requires $x>0$; $\\Gamma(-1/2)=-2\\sqrt{\\pi}$ comes from the recurrence relation instead",
      "It converges to $-2\\sqrt{\\pi}$, since the integral formula extends automatically to every negative argument",
      "It diverges, because $t^{-3/2}$ grows too quickly as $t \\to \\infty$ rather than near the origin",
      "It converges, since $e^{-t}$ decays fast enough to compensate for any negative power of $t$ near the origin"
    ],
    correctAnswer: 0,
    explanation: "The defining integral $\\int_0^\\infty t^{x-1}e^{-t}\\,dt$ converges only for $x>0$; here $x=-1/2$, so the integral itself diverges near $t=0$. The finite value $\\Gamma(-1/2)=-2\\sqrt{\\pi}$ is not obtained from this divergent integral, but by extending $\\Gamma$ to negative arguments through the reverse recurrence $\\Gamma(x)=\\Gamma(x+1)/x$, starting from $\\Gamma(1/2)=\\sqrt{\\pi}$.\n\nClaiming convergence to $-2\\sqrt{\\pi}$ confuses the recurrence-extended value of $\\Gamma(-1/2)$ with the behavior of the raw integral, which does not converge at all for this $x$.\n\nThe divergence happens near $t=0$, where $t^{-3/2}$ blows up faster than $e^{-t}\\to 1$ can control it, not at $t\\to\\infty$ where $e^{-t}$ dominates any power of $t$.\n\n$e^{-t}$ decaying at infinity says nothing about the behavior near $t=0$, which is exactly where a negative power of $t$ causes the integral to diverge."
  },
  {
    id: "mth302_ch9_014",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "A calculation shows that $\\Gamma(n+1) = 40320$ for a positive integer $n$. Using $\\Gamma(n+1) = n!$ together with the factorials $5! = 120$, $6! = 720$, $7! = 5040$, and $8! = 40320$, what is $n$, and what is $\\Gamma(n)$?",
    options: [
      "$n = 9$, and $\\Gamma(9) = 8! = 40320$, shifting the recurrence's index by one in the wrong direction",
      "$n = 8$, and $\\Gamma(8) = 8! = 40320$, treating $\\Gamma(n)$ as equal to $n!$ instead of $(n-1)!$",
      "$n = 7$, since $7! = 5040$ is the closest familiar factorial to the given value",
      "$n = 8$, and $\\Gamma(8) = 7! = 5040$, found by checking factorials until $n!$ matches"
    ],
    correctAnswer: 3,
    explanation: "Since $\\Gamma(n+1)=n!$, the equation $\\Gamma(n+1)=40320$ means $n!=40320$; checking the listed factorials shows $8!=40320$, so $n=8$. Then $\\Gamma(n)=\\Gamma(8)=7!=5040$, using $\\Gamma(k)=(k-1)!$.\n\n$\\Gamma(8) = 8! = 40320$ correctly finds $n=8$ but then applies $\\Gamma(n)=n!$ instead of $\\Gamma(n)=(n-1)!$, repeating the classic off-by-one slip on the recurrence.\n\n$n = 7$ picks the closest-looking factorial, $7!=5040$, rather than checking which factorial actually equals the given value of $40320$.\n\n$n = 9$ misreads which index solves $n!=40320$, shifting the correct $n=8$ up by one instead."
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
    text: "Given that $\\Gamma(-1/2) = -2\\sqrt{\\pi}$, apply the reverse recurrence $\\Gamma(x) = \\Gamma(x+1)/x$ three consecutive times to compute $\\Gamma(-7/2)$.",
    options: [
      "$28\\sqrt{\\pi}/15$, multiplying by $-7/2$ instead of dividing by it at the final step",
      "$-16\\sqrt{\\pi}/105$, dropping the alternating sign pattern in the final step",
      "$-8\\sqrt{\\pi}/15$, stopping the recurrence one step early at $\\Gamma(-5/2)$",
      "$16\\sqrt{\\pi}/105$"
    ],
    correctAnswer: 3,
    explanation: "Stepping down with $\\Gamma(x)=\\Gamma(x+1)/x$: $\\Gamma(-3/2) = \\Gamma(-1/2)/(-3/2) = (-2\\sqrt{\\pi})/(-3/2) = 4\\sqrt{\\pi}/3$; $\\Gamma(-5/2) = \\Gamma(-3/2)/(-5/2) = (4\\sqrt{\\pi}/3)/(-5/2) = -8\\sqrt{\\pi}/15$; $\\Gamma(-7/2) = \\Gamma(-5/2)/(-7/2) = (-8\\sqrt{\\pi}/15)/(-7/2) = 16\\sqrt{\\pi}/105$.\n\n$-16\\sqrt{\\pi}/105$ has the right magnitude but the wrong sign; the alternating sign of the recurrence, driven by dividing by a negative number at each step, makes the final result positive here, not negative.\n\n$-8\\sqrt{\\pi}/15$ is the value of $\\Gamma(-5/2)$, reached one recurrence step before the requested $\\Gamma(-7/2)$.\n\n$28\\sqrt{\\pi}/15$ comes from multiplying $\\Gamma(-5/2)$ by $-7/2$ instead of dividing by it, mistaking the reverse recurrence's direction for the forward one."
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
    text: "Starting from $\\Gamma(1/2) = \\displaystyle\\int_0^\\infty t^{-1/2}e^{-t}\\,dt$ and substituting $t = u^2$ so that $dt = 2u\\,du$, what does the integrand $t^{-1/2}e^{-t}\\,dt$ simplify to before the Gaussian integral itself is evaluated?",
    options: [
      "$e^{-u^2}\\,du$, forgetting the factor of $2$ contributed by $dt = 2u\\,du$",
      "$2e^{-u^2}\\,du$, since $t^{-1/2}=u^{-1}$ and $dt=2u\\,du$ together exactly cancel the extra $u$ factor",
      "$2u\\,e^{-u^2}\\,du$, treating $t^{-1/2}$ as $u^{-1}$ but failing to cancel the $u$ factor from $dt$",
      "$u^{-1}e^{-u^2}\\,du$, using $dt = u\\,du$ and omitting the factor of $2$ entirely"
    ],
    correctAnswer: 1,
    explanation: "With $t=u^2$, $t^{-1/2}=(u^2)^{-1/2}=u^{-1}$, $e^{-t}=e^{-u^2}$, and $dt=2u\\,du$, so $t^{-1/2}e^{-t}\\,dt = u^{-1}\\cdot e^{-u^2}\\cdot 2u\\,du = 2e^{-u^2}\\,du$, since the $u^{-1}$ and the extra $u$ from $dt$ cancel exactly.\n\n$e^{-u^2}\\,du$ correctly cancels the $u$ factor but drops the leading $2$ that $dt=2u\\,du$ contributes.\n\n$2u\\,e^{-u^2}\\,du$ keeps the extra $u$ from $dt$ without cancelling it against $t^{-1/2}=u^{-1}$, so the powers of $u$ do not simplify away as they should.\n\n$u^{-1}e^{-u^2}\\,du$ uses an incorrect differential $dt=u\\,du$ in place of the correct $dt=2u\\,du$, losing the factor of $2$ entirely."
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
    text: "What is $\\displaystyle\\int_0^\\infty x^5e^{-2x}\\,dx$?",
    options: [
      "$15/8$",
      "$15/4$, using $a^n$ instead of $a^{n+1}$ in the denominator",
      "$3/8$, using $\\Gamma(n) = 4!$ instead of $\\Gamma(n+1) = 5!$ in the numerator",
      "$7680$, multiplying by $a^{n+1}$ instead of dividing by it"
    ],
    correctAnswer: 0,
    explanation: "Using $\\int_0^\\infty x^ne^{-ax}\\,dx = \\Gamma(n+1)/a^{n+1}$ with $n=5$ and $a=2$ gives $5!/2^6 = 120/64 = 15/8$.\n\n$15/4$ comes from using $a^n = 2^5 = 32$ instead of the correct $a^{n+1}=2^6=64$ in the denominator, dropping one power of $a$.\n\n$3/8$ comes from using $\\Gamma(n) = 4! = 24$ in the numerator instead of the correct $\\Gamma(n+1) = 5! = 120$.\n\n$7680$ comes from multiplying $5!$ by $2^6$ instead of dividing by it, inverting the relationship."
  },
  {
    id: "mth302_ch9_025",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\displaystyle\\int_0^1 x^5(1-x)^3\\,dx$?",
    options: [
      "$B(6,4) = \\dfrac{\\Gamma(6)\\Gamma(4)}{\\Gamma(10)} = \\dfrac{120\\times 6}{362880} = \\dfrac{1}{504}$, matching $m=6,n=4$ from the exponents",
      "$B(5,3) = \\dfrac{1}{105}$, misreading the exponents as the parameters directly instead of adding one to each",
      "$B(6,4) = \\dfrac{1}{5040}$, using $(m+n)!$ instead of $\\Gamma(m+n) = (m+n-1)!$ in the denominator",
      "$B(6,4) = \\dfrac{1}{21}$, using $6!$ and $4!$ in the numerator instead of $5!$ and $3!$"
    ],
    correctAnswer: 0,
    explanation: "Matching $x^{m-1}(1-x)^{n-1}$ against $x^5(1-x)^3$ gives $m-1=5$ and $n-1=3$, so $m=6$ and $n=4$. Then $B(6,4)=\\Gamma(6)\\Gamma(4)/\\Gamma(10) = 5!\\cdot 3!/9! = 120\\times 6/362880 = 1/504$.\n\n$B(5,3) = 1/105$ misreads the exponents $5$ and $3$ as the Beta parameters directly, forgetting to add one to each as the matching requires.\n\n$1/5040$ comes from writing $(m+n)! = 10!$ in the denominator instead of the correct $\\Gamma(m+n) = \\Gamma(10) = 9! = 362880$, the standard off-by-one slip.\n\n$1/21$ comes from using $m! = 6!$ and $n! = 4!$ in the numerator instead of $\\Gamma(m)=(m-1)!=5!$ and $\\Gamma(n)=(n-1)!=3!$."
  },
  {
    id: "mth302_ch9_026",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is the common value of $B(3,6)$ and $B(6,3)$, computed using $B(m,n) = \\Gamma(m)\\Gamma(n)/\\Gamma(m+n)$, and why must the two expressions agree?",
    options: [
      "$1/168$ for both, since $\\Gamma(3)\\Gamma(6)$ is unchanged by the order of multiplication, and $\\Gamma(9)$ in the denominator",
      "$1/21$ for both, using $\\Gamma(8) = 7!$ in the denominator instead of the correct $\\Gamma(9) = 8!$",
      "$1/168$ for $B(3,6)$ but $-1/168$ for $B(6,3)$, treating the exchange of parameters as introducing a sign change",
      "$1/1512$ for both, using $(m+n)! = 9!$ in the denominator instead of the correct $\\Gamma(m+n) = (m+n-1)! = 8!$, an off-by-one slip"
    ],
    correctAnswer: 0,
    explanation: "$\\Gamma(3)=2!=2$, $\\Gamma(6)=5!=120$, and $\\Gamma(9)=8!=40320$, so $B(3,6)=B(6,3)=2\\times 120/40320=240/40320=1/168$. The two expressions must agree because $\\Gamma(3)\\Gamma(6)$ is a product, unaffected by the order in which the parameters are listed, and the denominator $\\Gamma(3+6)=\\Gamma(9)$ is the same regardless of which parameter is written first.\n\n$1/21$ comes from using $\\Gamma(8)=7!=5040$ in the denominator instead of the correct $\\Gamma(9)=8!=40320$, an off-by-one error in identifying which Gamma value belongs in the sum.\n\nAssigning opposite signs to $B(3,6)$ and $B(6,3)$ contradicts the fact that the Beta integral is manifestly positive for positive parameters; no sign change occurs under the symmetry $B(m,n)=B(n,m)$.\n\n$1/1512$ comes from writing $(m+n)!=9!=362880$ in the denominator instead of the correct $\\Gamma(m+n)=\\Gamma(9)=8!=40320$, the standard off-by-one trap in the Beta-Gamma relation."
  },
  {
    id: "mth302_ch9_027",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "Applying the substitution $x = \\sin^2\\theta$ to $B(4,2) = \\displaystyle\\int_0^1 x^3(1-x)\\,dx$, so that $dx = 2\\sin\\theta\\cos\\theta\\,d\\theta$, $x^3 = \\sin^6\\theta$, and $1-x=\\cos^2\\theta$, what does the integrand become?",
    options: [
      "$2\\sin^6\\theta\\cos^2\\theta\\,d\\theta$, omitting the extra $\\sin\\theta\\cos\\theta$ factor supplied by $dx$",
      "$2\\sin^7\\theta\\cos^3\\theta\\,d\\theta$, combining the sine and cosine power contributions together",
      "$\\sin^7\\theta\\cos^3\\theta\\,d\\theta$, dropping the leading factor of $2$ contributed by $dx$",
      "$2\\sin^7\\theta\\cos^2\\theta\\,d\\theta$, forgetting to include the additional power of $\\cos\\theta$ contributed by $dx$"
    ],
    correctAnswer: 1,
    explanation: "Multiplying $x^3(1-x) = \\sin^6\\theta\\cos^2\\theta$ by $dx = 2\\sin\\theta\\cos\\theta\\,d\\theta$ combines the powers: $\\sin^6\\theta\\cdot\\sin\\theta = \\sin^7\\theta$ and $\\cos^2\\theta\\cdot\\cos\\theta = \\cos^3\\theta$, giving $2\\sin^7\\theta\\cos^3\\theta\\,d\\theta$, consistent with the general trigonometric form $2\\sin^{2m-1}\\theta\\cos^{2n-1}\\theta\\,d\\theta$ for $m=4$, $n=2$.\n\n$2\\sin^6\\theta\\cos^2\\theta\\,d\\theta$ keeps only $x^3(1-x)$ itself and forgets to fold in the extra $\\sin\\theta\\cos\\theta$ that $dx$ contributes.\n\n$\\sin^7\\theta\\cos^3\\theta\\,d\\theta$ gets the powers right but drops the leading factor of $2$ that comes from $dx = 2\\sin\\theta\\cos\\theta\\,d\\theta$.\n\n$2\\sin^7\\theta\\cos^2\\theta\\,d\\theta$ correctly combines the sine powers but leaves out the extra power of $\\cos\\theta$ that $dx$ supplies, so the cosine exponent is one too low."
  },
  {
    id: "mth302_ch9_028",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $\\displaystyle\\int_0^{\\pi/2}\\sin\\theta\\cos^5\\theta\\,d\\theta$, expressed via the Beta function with $p=1$, $q=5$ and then evaluated numerically?",
    options: [
      "$B(1,3) = \\dfrac{1}{3}$, omitting the leading factor of $\\tfrac{1}{2}$ in front of the Beta function",
      "$\\tfrac{1}{2}B(1,3) = \\tfrac{1}{2}\\cdot\\dfrac{\\Gamma(1)\\Gamma(3)}{\\Gamma(4)} = \\tfrac{1}{2}\\cdot\\dfrac{1\\times 2}{6} = \\dfrac{1}{6}$, matching $p=1$ and $q=5$ in the formula",
      "$\\tfrac{1}{2}B(1/2,\\,5/2) = \\dfrac{3\\pi}{16}$, using $p/2$ and $q/2$ instead of $(p+1)/2$ and $(q+1)/2$",
      "$\\tfrac{1}{2}B(2,6) = \\dfrac{1}{84}$, using $p$ and $q$ directly as the Beta parameters without halving them first"
    ],
    correctAnswer: 1,
    explanation: "Using $\\int_0^{\\pi/2}\\sin^p\\theta\\cos^q\\theta\\,d\\theta = \\tfrac{1}{2}B\\!\\left(\\tfrac{p+1}{2},\\tfrac{q+1}{2}\\right)$ with $p=1$, $q=5$ gives $\\tfrac{1}{2}B(1,3) = \\tfrac{1}{2}\\cdot\\dfrac{\\Gamma(1)\\Gamma(3)}{\\Gamma(4)} = \\tfrac{1}{2}\\cdot\\dfrac{1\\times 2}{6} = \\dfrac{1}{6}$.\n\n$B(1,3) = 1/3$ correctly identifies the Beta parameters but omits the leading factor of $\\tfrac{1}{2}$ that the formula requires.\n\n$\\tfrac{1}{2}B(1/2,5/2) = 3\\pi/16$ uses $p/2$ and $q/2$ instead of the correct $(p+1)/2$ and $(q+1)/2$, dropping the shift by one; since $p=1$ is odd, the correct answer should be rational, and the appearance of $\\pi$ here signals the error.\n\n$\\tfrac{1}{2}B(2,6) = 1/84$ uses $p$ and $q$ directly as the Beta parameters, skipping the halving step entirely."
  },
  {
    id: "mth302_ch9_029",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What is $B(6,2)$ expressed in factorial form using $B(m,n) = \\dfrac{(m-1)!\\,(n-1)!}{(m+n-1)!}$, and what is its numeric value?",
    options: [
      "$\\dfrac{5!\\,1!}{8!} = \\dfrac{120}{40320} = \\dfrac{1}{336}$, reducing only the numerator",
      "$\\dfrac{6!\\,2!}{8!} = \\dfrac{1440}{40320} = \\dfrac{1}{28}$, leaving both factorials unreduced",
      "$\\dfrac{5!\\,1!}{7!} = \\dfrac{120}{5040} = \\dfrac{1}{42}$, the correctly reduced factorial form",
      "$\\dfrac{6!\\,2!}{7!} = \\dfrac{1440}{5040} = \\dfrac{2}{7}$, reducing only the denominator's factorial and leaving the numerator unreduced"
    ],
    correctAnswer: 2,
    explanation: "With $m=6$, $n=2$: $(m-1)!=5!=120$, $(n-1)!=1!=1$, and $(m+n-1)!=7!=5040$, so $B(6,2) = 120\\times 1/5040 = 1/42$.\n\n$1/28$ leaves every factorial unreduced, using $6!$, $2!$, and $8!$ in place of $5!$, $1!$, and $7!$.\n\n$1/336$ reduces only the numerator to $5!\\cdot 1!$ while leaving the denominator as the unreduced $8!$ instead of $7!$.\n\n$2/7$ reduces only the denominator to $7!$ while leaving the numerator as the unreduced $6!\\cdot 2!$ instead of $5!\\cdot 1!$."
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
    text: "Given that $\\Gamma(7) = 720$, $\\Gamma(2) = 1$, and $\\Gamma(9) = 40320$, use the Beta-Gamma relation $B(m,n) = \\Gamma(m)\\Gamma(n)/\\Gamma(m+n)$ to compute $B(7,2)$.",
    options: [
      "$720\\times 1/362880 = 1/504$, mistakenly using $\\Gamma(9)=9!=362880$ instead of the correct $\\Gamma(9)=8!=40320$",
      "$720\\times 1\\times 40320 = 29030400$, forming a product of all three Gamma values instead of dividing",
      "$40320/(720\\times 1) = 56$, inverting the correct quotient",
      "$\\Gamma(7)\\Gamma(2)/\\Gamma(9) = 720\\times 1/40320 = 1/56$, dividing the product of the two given Gamma values by the Gamma value of their sum"
    ],
    correctAnswer: 3,
    explanation: "The Beta-Gamma relation gives $B(7,2) = \\Gamma(7)\\Gamma(2)/\\Gamma(9) = 720\\times 1/40320 = 1/56$, dividing the product of the two given Gamma values by the Gamma value of their sum.\n\n$29030400$ multiplies all three given Gamma values together instead of dividing $\\Gamma(7)\\Gamma(2)$ by $\\Gamma(9)$.\n\n$56$ inverts the correct quotient, placing $\\Gamma(m+n)$ in the numerator instead of the denominator.\n\n$1/504$ comes from mistakenly treating $\\Gamma(9)$ as $9!=362880$ instead of the correct $\\Gamma(9)=8!=40320$, confusing $\\Gamma(k)$ with $k!$ rather than $(k-1)!$."
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
