import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter10: QuestionV2[] = [
  {
    id: "mth302_ch10_001",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the Legendre polynomial $P_2(x)$?",
    options: [
      "$(3x^2 - 1)/2$",
      "$(3x^2 + 1)/2$",
      "$(5x^2 - 3)/2$",
      "$3x^2 - 1$"
    ],
    correctAnswer: 0,
    explanation: "By Rodrigues' formula, $P_2 = \\dfrac{1}{8}\\dfrac{d^2}{dx^2}(x^2-1)^2$, which works out to $\\dfrac{12x^2-4}{8} = \\dfrac{3x^2-1}{2}$. An instant check is that $P_2(1)$ must equal $1$, and $\\dfrac{3-1}{2} = 1$ confirms this while immediately ruling out the options with a plus sign or a different leading coefficient.\n\n$(3x^2+1)/2$ has the wrong sign on the constant term and fails the check $P_2(1) = 1$.\n\n$(5x^2-3)/2$ uses coefficients that belong to $P_3$ rather than $P_2$.\n\n$3x^2 - 1$ omits the necessary division by $2$, so it fails the normalization check $P_2(1) = 1$."
  },
  {
    id: "mth302_ch10_002",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the Legendre polynomial $P_3(x)$?",
    options: [
      "$(5x^2 - 3x)/2$",
      "$(5x^3 - 3x)/2$",
      "$(5x^3 - 3)/2$",
      "$(35x^3 - 30x)/8$"
    ],
    correctAnswer: 1,
    explanation: "From the recurrence $3P_3 = 5xP_2 - 2P_1 = 5x\\cdot\\dfrac{3x^2-1}{2} - 2x$, which simplifies to $\\dfrac{15x^3-9x}{2}$, giving $P_3 = \\dfrac{5x^3-3x}{2}$. Two instant checks confirm this: the degree of $P_n$ must equal $n$ exactly, ruling out the quadratic option, and $P_3(1)$ must equal $1$, which $\\dfrac{5-3}{2} = 1$ satisfies.\n\n$(5x^2-3x)/2$ has the wrong power on the leading term, since $P_3$ must be cubic, not quadratic.\n\n$(5x^3-3)/2$ fails the check $P_3(1) = 1$, since $\\dfrac{5-3}{2} = 1$ works only with the $x$ multiplying the second term.\n\n$(35x^3-30x)/8$ uses coefficients that belong to a different Legendre polynomial, not $P_3$."
  },
  {
    id: "mth302_ch10_003",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What are the values of $P_n(1)$ and $P_n(-1)$ respectively?",
    options: [
      "$1$ and $1$",
      "$n$ and $-n$",
      "$(-1)^n$ and $1$",
      "$1$ and $(-1)^n$"
    ],
    correctAnswer: 3,
    explanation: "Setting $x = 1$ in the generating function reduces it to $1/(1-t)$, whose power series is $\\sum t^n$, so $P_n(1) = 1$ for every $n$. Setting $x = -1$ reduces it to $1/(1+t)$, whose power series is $\\sum(-1)^nt^n$, so $P_n(-1) = (-1)^n$. This normalization $P_n(1) = 1$ is exactly what fixes the constants in each Legendre polynomial.\n\n$1$ and $1$ wrongly gives the same value at both endpoints, ignoring the alternating sign at $x = -1$.\n\n$n$ and $-n$ do not match the actual constant values $1$ and $(-1)^n$ obtained from the generating function.\n\n$(-1)^n$ and $1$ has the two values swapped."
  },
  {
    id: "mth302_ch10_004",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the value of $\\displaystyle\\int_{-1}^1 P_3(x)^2\\,dx$?",
    options: [
      "$0$",
      "$2/7$",
      "$2/3$",
      "$2$"
    ],
    correctAnswer: 1,
    explanation: "The normalization formula for Legendre polynomials states that $\\int_{-1}^1 P_{n}^{2}\\,dx = \\dfrac{2}{2n+1}$, so with $n = 3$ the value is $2/7$.\n\n$0$ is the value that would apply to the integral of $P_m$ times $P_n$ for two different indices $m$ and $n$, not to the integral of $P_n$ squared with itself.\n\n$2/3$ and $2$ do not match the correct substitution $n = 3$ into the formula $2/(2n+1)$."
  },
  {
    id: "mth302_ch10_005",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is Rodrigues' formula for the Legendre polynomials?",
    options: [
      "$P_n = \\dfrac{1}{2^nn!}\\dfrac{d^n}{dx^n}(x^2-1)^n$",
      "$P_n = \\dfrac{1}{n!}\\dfrac{d^n}{dx^n}(x^2-1)^n$",
      "$P_n = \\dfrac{1}{2^nn!}\\dfrac{d^n}{dx^n}(1-x^2)^n$",
      "$P_n = \\dfrac{1}{2^n}\\dfrac{d^n}{dx^n}(x^2-1)$"
    ],
    correctAnswer: 0,
    explanation: "The correct normalizing factor is $\\dfrac{1}{2^nn!}$, and the expression differentiated $n$ times is $(x^2-1)$ raised to the same power $n$ as the order of differentiation.\n\n$P_n = \\dfrac{1}{n!}\\dfrac{d^n}{dx^n}(x^2-1)^n$ omits the necessary factor of $2^n$ in the denominator.\n\n$P_n = \\dfrac{1}{2^nn!}\\dfrac{d^n}{dx^n}(1-x^2)^n$ differs by a sign inside the parentheses, which would violate the normalization $P_n(1) = 1$ for odd values of $n$.\n\n$P_n = \\dfrac{1}{2^n}\\dfrac{d^n}{dx^n}(x^2-1)$ both omits the $n!$ factor and fails to raise the bracket to the power $n$."
  },
  {
    id: "mth302_ch10_006",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the recurrence relation for the Legendre polynomials?",
    options: [
      "$(n+1)P_{n+1} = (2n+1)xP_n - nP_{n-1}$",
      "$nP_{n+1} = (2n+1)xP_n - (n+1)P_{n-1}$",
      "$P_{n+1} = xP_n - P_{n-1}$",
      "$(2n+1)P_{n+1} = (n+1)xP_n - nP_{n-1}$"
    ],
    correctAnswer: 0,
    explanation: "Testing this recurrence with $n = 1$ gives $2P_2 = 3xP_1 - P_0 = 3x^2 - 1$, so $P_2 = (3x^2-1)/2$, which matches the known correct polynomial, confirming that $(n+1)P_{n+1} = (2n+1)xP_n - nP_{n-1}$ is the correct form. Testing a low case against a known polynomial is the fastest way to verify the recurrence quickly.\n\n$nP_{n+1} = (2n+1)xP_n - (n+1)P_{n-1}$ has the coefficients $n$ and $n+1$ swapped relative to the correct recurrence.\n\n$P_{n+1} = xP_n - P_{n-1}$ omits the necessary coefficients $(2n+1)$ and $n$ entirely.\n\n$(2n+1)P_{n+1} = (n+1)xP_n - nP_{n-1}$ misplaces the coefficient $(2n+1)$, which should multiply $xP_n$, not $P_{n+1}$."
  },
  {
    id: "mth302_ch10_007",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "For integer $n$, how does $J_{-n}(x)$ relate to $J_n(x)$?",
    options: [
      "$J_{-n}(x) = J_n(x)$",
      "$J_{-n}(x) = -J_n(x)$",
      "$J_{-n}(x) = (-1)^nJ_n(x)$",
      "$J_{-n}(x) = Y_n(x)$"
    ],
    correctAnswer: 2,
    explanation: "Because $\\Gamma$ is infinite at every non-positive integer, the first $n$ terms of the series for $J_{-n}$ vanish, and re-indexing the remaining series with $k = p + n$ produces the overall factor $(-1)^n$, giving $J_{-n}(x) = (-1)^nJ_n(x)$. The practical consequence is that $J_n$ and $J_{-n}$ are linearly dependent for integer order, which is exactly why the second solution $Y_n$ must be introduced.\n\n$J_{-n}(x) = J_n(x)$ is correct only when $n$ is even, but the general relation includes the sign factor $(-1)^n$ for all integers.\n\n$J_{-n}(x) = -J_n(x)$ is correct only when $n$ is odd, again missing the general $(-1)^n$ pattern.\n\n$J_{-n}(x) = Y_n(x)$ confuses the negative-order Bessel function of the first kind with the entirely separate Bessel function of the second kind."
  },
  {
    id: "mth302_ch10_008",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the general solution of $x^2y'' + xy' + (x^2-4)y = 0$?",
    options: [
      "$AJ_4(x) + BY_4(x)$",
      "$AJ_2(x) + BY_2(x)$",
      "$AJ_2(x) + BJ_{-2}(x)$",
      "$AP_2(x) + BQ_2(x)$"
    ],
    correctAnswer: 1,
    explanation: "Comparing with the standard Bessel equation $x^2y'' + xy' + (x^2-\\nu^2)y = 0$ gives $\\nu^2 = 4$, so the order is $\\nu = 2$, not $4$, and the general solution is $AJ_2(x) + BY_2(x)$.\n\n$AJ_4(x) + BY_4(x)$ commits the standard slip of reading the order as $4$ directly from the constant term instead of taking its square root.\n\n$AJ_2(x) + BJ_{-2}(x)$ fails because $J_{-2} = (-1)^2J_2 = J_2$, meaning it is not independent of $J_2$ and cannot serve as the second solution.\n\n$AP_2(x) + BQ_2(x)$ wrongly applies the Legendre function solutions, which belong to a different differential equation entirely."
  },
  {
    id: "mth302_ch10_009",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is Legendre's differential equation?",
    options: [
      "$(1 - x^2)y'' - 2xy' + k(k+1)y = 0$",
      "$(1 - x^2)y'' + 2xy' + k(k+1)y = 0$, with the middle sign reversed",
      "$x^2y'' + xy' + (x^2 - n^2)y = 0$, which is Bessel's equation instead",
      "$(1 + x^2)y'' - 2xy' + k(k+1)y = 0$, with a plus inside the bracket"
    ],
    correctAnswer: 0,
    explanation: "Legendre's equation is $(1 - x^2)y'' - 2xy' + k(k+1)y = 0$ on $[-1, 1]$.\n\nReversing the sign of the first-derivative term breaks the self-adjoint structure.\n\nThe equation with $x^2 - n^2$ is Bessel's equation.\n\nA plus sign inside the bracket changes the singular points away from $\\pm 1$."
  },
  {
    id: "mth302_ch10_010",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "On what interval is Legendre's equation considered?",
    options: [
      "$[-1, 1]$",
      "$[0, 1]$, using only the positive half of the range",
      "$[0, \\infty)$, matching the Bessel setting",
      "$[-\\pi, \\pi]$, the interval used for Fourier series"
    ],
    correctAnswer: 0,
    explanation: "The natural interval is $[-1, 1]$, whose endpoints are the singular points of the equation.\n\nHalving the range discards the symmetry that gives the polynomials their parity.\n\nThe half-line belongs to Bessel's equation.\n\nThe interval $[-\\pi, \\pi]$ belongs to Fourier analysis."
  },
  {
    id: "mth302_ch10_011",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the general solution of Legendre's equation?",
    options: [
      "$y = AP_k(x) + BQ_k(x)$",
      "$y = AP_k(x)$ alone, since the second solution is discarded",
      "$y = AJ_k(x) + BY_k(x)$, which uses the Bessel functions",
      "$y = A\\cos kx + B\\sin kx$, a trigonometric pair"
    ],
    correctAnswer: 0,
    explanation: "Being second order, the equation has two independent solutions, the Legendre functions of the first and second kind.\n\nDiscarding $Q_k$ happens in physical problems for boundedness, but the general solution retains both.\n\nThe Bessel functions solve a different equation.\n\nTrigonometric solutions belong to the constant-coefficient case."
  },
  {
    id: "mth302_ch10_012",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "When does the first-kind Legendre solution become a polynomial?",
    options: [
      "When $k$ is a non-negative integer",
      "When $k$ is any real number whatsoever",
      "When $k$ is negative, so the series terminates from below",
      "When $k$ is a half-integer, as for the Gamma function"
    ],
    correctAnswer: 0,
    explanation: "For $k = n$ a non-negative integer one of the two Frobenius series terminates, producing the Legendre polynomial $P_n$.\n\nA general real $k$ leaves both series infinite.\n\nNegative values do not truncate the series.\n\nHalf-integers do not terminate the series either."
  },
  {
    id: "mth302_ch10_013",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "How are the arbitrary constants chosen in defining $P_n$?",
    options: [
      "So that $P_n(1) = 1$",
      "So that $P_n(0) = 1$, normalising at the midpoint instead",
      "So that the leading coefficient equals one",
      "So that the integral of $P_n$ over $[-1, 1]$ equals one"
    ],
    correctAnswer: 0,
    explanation: "The standard normalisation fixes $P_n(1) = 1$, which is also the quickest check on any offered polynomial.\n\nNormalising at the origin would fail for odd $n$, where $P_n(0) = 0$.\n\nA monic normalisation gives different polynomials.\n\nThe integral of $P_n$ vanishes for $n \\geq 1$ by orthogonality against $P_0$."
  },
  {
    id: "mth302_ch10_014",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "Why is $Q_n$ discarded in most physical problems?",
    options: [
      "It is unbounded at $x = \\pm 1$",
      "It fails to satisfy Legendre's equation at interior points",
      "It is not orthogonal to the polynomials $P_m$",
      "It is identically zero for integer $n$"
    ],
    correctAnswer: 0,
    explanation: "The second-kind solution blows up at the endpoints, so boundedness on the closed interval rules it out.\n\nIt does satisfy the equation; that is why it is a solution at all.\n\nOrthogonality is not the reason for discarding it.\n\nIt is a genuine nonzero function."
  },
  {
    id: "mth302_ch10_015",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is Rodrigues' formula for the Legendre polynomials?",
    options: [
      "$P_n(x) = \\dfrac{1}{2^nn!}\\dfrac{d^n}{dx^n}(x^2 - 1)^n$",
      "$P_n(x) = \\dfrac{1}{2^nn!}\\dfrac{d^n}{dx^n}(x^2 + 1)^n$, with a plus inside the bracket",
      "$P_n(x) = \\dfrac{1}{n!}\\dfrac{d^n}{dx^n}(x^2 - 1)^n$, omitting the power of two",
      "$P_n(x) = \\dfrac{1}{2^nn!}\\dfrac{d^{n}}{dx^{n}}(x - 1)^n$, without squaring $x$"
    ],
    correctAnswer: 0,
    explanation: "Rodrigues' formula differentiates $(x^2 - 1)^n$ exactly $n$ times and divides by $2^nn!$.\n\nA plus sign inside the bracket changes the roots away from $\\pm 1$.\n\nOmitting $2^n$ destroys the normalisation $P_n(1) = 1$.\n\nDropping the square gives a different polynomial family."
  },
  {
    id: "mth302_ch10_016",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is $P_1(x)$?",
    options: [
      "$x$",
      "$1$, which is $P_0(x)$ instead",
      "$\\tfrac{1}{2}(3x^2 - 1)$, which is $P_2(x)$",
      "$2x$, doubling the correct polynomial"
    ],
    correctAnswer: 0,
    explanation: "Rodrigues' formula with $n = 1$ gives $P_1(x) = x$, which indeed satisfies $P_1(1) = 1$.\n\nThe constant $1$ is $P_0$.\n\nThe quadratic is $P_2$.\n\nDoubling would give $P_1(1) = 2$, breaking the normalisation."
  },
  {
    id: "mth302_ch10_017",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is $P_4(x)$?",
    options: [
      "$\\dfrac{35x^4 - 30x^2 + 3}{8}$",
      "$\\dfrac{35x^4 - 30x^2 + 3}{16}$, halving the correct denominator",
      "$\\dfrac{35x^3 - 30x}{8}$",
      "$\\dfrac{5x^4 - 3x^2}{2}$, from an incorrect recurrence step"
    ],
    correctAnswer: 0,
    explanation: "Rodrigues' formula gives $P_4(x) = \\dfrac{35x^4 - 30x^2 + 3}{8}$, and substituting $x = 1$ gives $\\dfrac{35 - 30 + 3}{8} = 1$ as required.\n\nDoubling the denominator would give $P_4(1) = 1/2$.\n\nA cubic cannot be $P_4$, since $P_n$ has degree exactly $n$.\n\nThe last expression fails the check $P_4(1) = 1$."
  },
  {
    id: "mth302_ch10_018",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the degree and parity of $P_n(x)$?",
    options: [
      "Degree exactly $n$, even for even $n$ and odd for odd $n$",
      "Degree $n$, but always an even function regardless of $n$",
      "Degree $2n$, with parity matching that of $n$",
      "Degree $n - 1$, with parity opposite to that of $n$"
    ],
    correctAnswer: 0,
    explanation: "Each Legendre polynomial has degree exactly $n$ and inherits the parity of $n$, so $P_3$ is an odd cubic.\n\nUniform evenness fails for $P_1(x) = x$.\n\nThe degree is $n$, not $2n$.\n\nA degree of $n - 1$ contradicts Rodrigues' formula."
  },
  {
    id: "mth302_ch10_019",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the recurrence relation for the Legendre polynomials?",
    options: [
      "$(n+1)P_{n+1} = (2n+1)xP_n - nP_{n-1}$",
      "$(n+1)P_{n+1} = (2n+1)xP_n + nP_{n-1}$",
      "$P_{n+1} = xP_n - P_{n-1}$, dropping every coefficient",
      "$(2n+1)P_{n+1} = (n+1)xP_n - nP_{n-1}$, exchanging two coefficients"
    ],
    correctAnswer: 0,
    explanation: "The three-term recurrence is $(n+1)P_{n+1} = (2n+1)xP_n - nP_{n-1}$, which reproduces $P_3$ from $P_2$ and $P_1$.\n\nReversing the final sign gives the wrong polynomial.\n\nDropping the coefficients loses the normalisation.\n\nExchanging the two outer coefficients breaks the identity."
  },
  {
    id: "mth302_ch10_020",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "Applying the recurrence with $n = 2$ gives which polynomial?",
    options: [
      "$P_3 = \\dfrac{5x^3 - 3x}{2}$",
      "$P_3 = \\dfrac{5x^2 - 3x}{2}$",
      "$P_3 = \\dfrac{3x^2 - 1}{2}$, which is $P_2$ instead",
      "$P_3 = \\dfrac{35x^3 - 30x}{8}$, from a later step of the recurrence"
    ],
    correctAnswer: 0,
    explanation: "From $3P_3 = 5xP_2 - 2P_1$ we get $3P_3 = \\dfrac{15x^3 - 5x}{2} - 2x = \\dfrac{15x^3 - 9x}{2}$, so $P_3 = \\dfrac{5x^3 - 3x}{2}$.\n\nA quadratic cannot be $P_3$, since the degree must equal three.\n\nThe expression $\\dfrac{3x^2 - 1}{2}$ is $P_2$.\n\nThe last expression does not satisfy $P_3(1) = 1$."
  },
  {
    id: "mth302_ch10_021",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "On what interval and with what weight are the Legendre polynomials orthogonal?",
    options: [
      "On $[-1, 1]$ with weight $1$",
      "On $[-1, 1]$ with weight $x$",
      "On $[0, 1]$ with weight $1$, over half the interval",
      "On $[-\\pi, \\pi]$ with weight $1$, as for trigonometric families"
    ],
    correctAnswer: 0,
    explanation: "Legendre polynomials satisfy $\\int_{-1}^{1}P_mP_n\\,dx = 0$ for $m \\neq n$, with weight one.\n\nThe weight $x$ belongs to Bessel's equation in Sturm-Liouville form.\n\nHalving the interval destroys the orthogonality, which relies on symmetry.\n\nThe trigonometric interval belongs to Fourier series."
  },
  {
    id: "mth302_ch10_022",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is $\\displaystyle\\int_{-1}^{1}P_n(x)^2\\,dx$?",
    options: [
      "$\\dfrac{2}{2n+1}$",
      "$\\dfrac{1}{2n+1}$",
      "$\\dfrac{2}{n+1}$, using the wrong denominator",
      "$2$, independent of the index $n$"
    ],
    correctAnswer: 0,
    explanation: "The normalisation integral is $\\dfrac{2}{2n+1}$, which for $n = 3$ gives $\\dfrac{2}{7}$.\n\nOmitting the two halves the value.\n\nUsing $n + 1$ in the denominator misstates the formula.\n\nA constant value would contradict the dependence on $n$."
  },
  {
    id: "mth302_ch10_023",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the generating function for the Legendre polynomials?",
    options: [
      "$\\dfrac{1}{\\sqrt{1 - 2xt + t^2}} = \\sum_{n=0}^{\\infty}P_n(x)t^n$",
      "$\\dfrac{1}{1 - 2xt + t^2} = \\sum_{n=0}^{\\infty}P_n(x)t^n$, without the square root",
      "$\\dfrac{1}{\\sqrt{1 + 2xt + t^2}} = \\sum_{n=0}^{\\infty}P_n(x)t^n$",
      "$e^{xt} = \\sum_{n=0}^{\\infty}P_n(x)t^n$, an exponential generating function"
    ],
    correctAnswer: 0,
    explanation: "The generating function is $(1 - 2xt + t^2)^{-1/2}$, valid for $|t| < 1$.\n\nOmitting the square root gives a different family of coefficients.\n\nA plus sign in the middle changes the expansion point.\n\nAn exponential generating function belongs to other polynomial families."
  },
  {
    id: "mth302_ch10_024",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "Setting $x = 1$ in the generating function establishes which value?",
    options: [
      "$P_n(1) = 1$",
      "$P_n(1) = n$, growing with the index",
      "$P_n(1) = 0$ for every $n \\geq 1$",
      "$P_n(1) = (-1)^n$"
    ],
    correctAnswer: 0,
    explanation: "At $x = 1$ the generating function collapses to $\\dfrac{1}{1 - t} = \\sum t^n$, so every coefficient is one.\n\nGrowth with $n$ contradicts the geometric series obtained.\n\nVanishing coefficients would contradict the same expansion.\n\nThe alternating values arise at $x = -1$."
  },
  {
    id: "mth302_ch10_025",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is $P_n(-1)$?",
    options: [
      "$(-1)^n$",
      "$1$ for every $n$, as at the other endpoint",
      "$-1$ for every $n$, regardless of parity",
      "$0$ for odd $n$ and $1$ for even $n$"
    ],
    correctAnswer: 0,
    explanation: "At $x = -1$ the generating function becomes $\\dfrac{1}{1 + t} = \\sum(-1)^nt^n$, giving $P_n(-1) = (-1)^n$.\n\nA constant value of one holds at $x = +1$, not at $x = -1$.\n\nA constant value of $-1$ fails for even $n$.\n\nThe polynomials do not vanish at the endpoint for odd $n$; they equal $-1$."
  },
  {
    id: "mth302_ch10_026",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "Which quick check rules out an offered expression for $P_n(x)$?",
    options: [
      "Substituting $x = 1$ and requiring the value $1$",
      "Substituting $x = 0$ and requiring the value $1$",
      "Checking that the leading coefficient equals one",
      "Checking that the polynomial has no constant term"
    ],
    correctAnswer: 0,
    explanation: "Because every Legendre polynomial satisfies $P_n(1) = 1$, evaluating at $x = 1$ eliminates wrong options instantly.\n\nThe value at the origin is zero for odd $n$, so it is not a uniform check.\n\nThe polynomials are not monic.\n\nEven-index polynomials do have constant terms, as $P_2$ shows."
  },
  {
    id: "mth302_ch10_027",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "Verifying $k = 2$, what does $(1 - x^2)y'' - 2xy' + 6y$ equal for $y = \\tfrac{1}{2}(3x^2 - 1)$?",
    options: [
      "$0$",
      "$6$",
      "$3x^2 - 1$, reproducing the polynomial itself",
      "$3$, the second derivative of the polynomial"
    ],
    correctAnswer: 0,
    explanation: "With $y' = 3x$ and $y'' = 3$, the expression becomes $3 - 3x^2 - 6x^2 + 9x^2 - 3 = 0$, confirming $P_2$ solves the equation.\n\nA nonzero constant would mean the polynomial fails the equation.\n\nReproducing the polynomial would likewise indicate failure.\n\nThe second derivative alone is not the value of the whole expression."
  },
  {
    id: "mth302_ch10_028",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is Bessel's differential equation of order $n$?",
    options: [
      "$x^2y'' + xy' + (x^2 - n^2)y = 0$",
      "$x^2y'' + xy' + (x^2 + n^2)y = 0$",
      "$(1 - x^2)y'' - 2xy' + n(n+1)y = 0$, which is Legendre's equation",
      "$x^2y'' + xy' + (n^2 - x^2)y = 0$, with the bracket reversed"
    ],
    correctAnswer: 0,
    explanation: "Bessel's equation of order $n$ is $x^2y'' + xy' + (x^2 - n^2)y = 0$, with a regular singular point at the origin.\n\nA plus before $n^2$ gives the modified equation with different solutions.\n\nThe second expression is Legendre's equation.\n\nReversing the bracket changes the sign of the whole term."
  },
  {
    id: "mth302_ch10_029",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "For $x^2y'' + xy' + (x^2 - 4)y = 0$, what is the order $\\nu$?",
    options: [
      "$\\nu = 2$",
      "$\\nu = 4$",
      "$\\nu = 16$, squaring the constant in the bracket",
      "$\\nu = 1$"
    ],
    correctAnswer: 0,
    explanation: "Matching $x^2 - \\nu^2$ against $x^2 - 4$ gives $\\nu^2 = 4$, so $\\nu = 2$.\n\nReading $4$ as the order confuses $\\nu^2$ with $\\nu$ and is the standard slip.\n\nSquaring again compounds the error.\n\nThe coefficient of $y'$ carries no information about the order."
  },
  {
    id: "mth302_ch10_030",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the general solution of $x^2y'' + xy' + (x^2 - 4)y = 0$?",
    options: [
      "$y = AJ_2(x) + BY_2(x)$",
      "$y = AJ_4(x) + BY_4(x)$",
      "$y = AJ_2(x) + BJ_{-2}(x)$",
      "$y = AP_2(x) + BQ_2(x)$, using the Legendre functions"
    ],
    correctAnswer: 0,
    explanation: "With $\\nu = 2$ the two independent solutions are $J_2$ and $Y_2$.\n\nUsing order four misreads $\\nu^2 = 4$.\n\nFor integer order $J_{-n} = (-1)^nJ_n$, so that pair is dependent and cannot form a general solution.\n\nThe Legendre functions solve a different equation."
  },
  {
    id: "mth302_ch10_031",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "For integer $n$, how are $J_{-n}$ and $J_n$ related?",
    options: [
      "$J_{-n}(x) = (-1)^nJ_n(x)$",
      "$J_{-n}(x) = J_n(x)$ for every integer $n$",
      "$J_{-n}(x) = -J_n(x)$, regardless of parity",
      "$J_{-n}(x) = \\dfrac{1}{J_n(x)}$, giving the reciprocal"
    ],
    correctAnswer: 0,
    explanation: "Because $\\Gamma$ is infinite at non-positive integers, the first $n$ terms of the series for $J_{-n}$ vanish, and reindexing gives $J_{-n} = (-1)^nJ_n$.\n\nEquality without the sign fails for odd $n$.\n\nA uniform minus sign fails for even $n$.\n\nA reciprocal relation has no basis in the series."
  },
  {
    id: "mth302_ch10_032",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "Why is $Y_n$ needed as a second solution for integer order?",
    options: [
      "Because $J_n$ and $J_{-n}$ are not independent then",
      "Because $J_n$ fails to satisfy Bessel's equation for integer $n$",
      "Because $J_n$ is unbounded at the origin for integer $n$",
      "Because $J_n$ is only defined for non-integer order"
    ],
    correctAnswer: 0,
    explanation: "For integer order the relation $J_{-n} = (-1)^nJ_n$ makes the two proportional, so a genuinely independent second solution $Y_n$ is required.\n\nThe function $J_n$ does satisfy the equation for integer order.\n\nIt is $Y_n$, not $J_n$, that is unbounded at the origin.\n\nThe function $J_n$ is defined for every real order."
  },
  {
    id: "mth302_ch10_033",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What are the first three terms of $J_0(x)$?",
    options: [
      "$1 - \\dfrac{x^2}{4} + \\dfrac{x^4}{64}$",
      "$1 - \\dfrac{x^2}{2} + \\dfrac{x^4}{16}$, with the denominators halved",
      "$1 - \\dfrac{x^2}{4} + \\dfrac{x^4}{16}$",
      "$x - \\dfrac{x^3}{16} + \\dfrac{x^5}{384}$"
    ],
    correctAnswer: 0,
    explanation: "The series gives $J_0(x) = 1 - \\dfrac{x^2}{4} + \\dfrac{x^4}{64} - \\dfrac{x^6}{2304} + \\cdots$.\n\nHalving the denominators misreads the factors $2^{2k}(k!)^2$.\n\nThe fourth-power term has denominator $64$, not $16$.\n\nThe expansion beginning at $x/2$ is that of $J_1$, not $J_0$."
  },
  {
    id: "mth302_ch10_034",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What are the first three terms of $J_1(x)$?",
    options: [
      "$\\dfrac{x}{2} - \\dfrac{x^3}{16} + \\dfrac{x^5}{384}$",
      "$\\dfrac{x}{2} - \\dfrac{x^3}{8} + \\dfrac{x^5}{192}$, with each denominator halved",
      "$1 - \\dfrac{x^2}{4} + \\dfrac{x^4}{64}$",
      "$x - \\dfrac{x^3}{16} + \\dfrac{x^5}{384}$"
    ],
    correctAnswer: 0,
    explanation: "The series gives $J_1(x) = \\dfrac{x}{2} - \\dfrac{x^3}{16} + \\dfrac{x^5}{384} - \\cdots$, where $384 = 12 \\times 32$.\n\nHalving the denominators misreads the factorial factors.\n\nThe expansion beginning at one is that of $J_0$.\n\nOmitting the factor one half misstates the leading term."
  },
  {
    id: "mth302_ch10_035",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What kind of point is $x = 0$ for Bessel's equation?",
    options: [
      "A regular singular point",
      "An ordinary point",
      "An irregular singular point",
      "A point outside the domain of the equation"
    ],
    correctAnswer: 0,
    explanation: "Dividing by $x^2$ produces coefficients singular at the origin but mildly enough for the Frobenius method, so the origin is a regular singular point.\n\nAn ordinary point would allow an ordinary power series without the Frobenius exponent.\n\nAn irregular singular point would obstruct the Frobenius construction.\n\nThe origin lies in the natural domain of the equation."
  },
  {
    id: "mth302_ch10_036",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "For $x^2y'' + xy' + (\\lambda^2x^2 - n^2)y = 0$, what is the solution?",
    options: [
      "$J_n(\\lambda x)$",
      "$J_{\\lambda}(nx)$, exchanging the order and the scaling",
      "$\\lambda J_n(x)$",
      "$J_n(x)$"
    ],
    correctAnswer: 0,
    explanation: "The parameter $\\lambda$ rescales the argument, so the solution is $J_n(\\lambda x)$.\n\nExchanging the roles of $n$ and $\\lambda$ misidentifies the order.\n\nA multiplicative constant outside does not absorb the rescaling.\n\nIgnoring $\\lambda$ loses the scaling entirely."
  },
  {
    id: "mth302_ch10_037",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is $P_0(x)$?",
    options: [
      "$1$",
      "$x$",
      "$0$",
      "$\\tfrac{1}{2}$, halving the correct constant"
    ],
    correctAnswer: 0,
    explanation: "Rodrigues' formula with $n = 0$ gives the constant polynomial $1$, consistent with $P_0(1) = 1$.\n\nThe linear polynomial is $P_1$.\n\nThe zero polynomial would fail the normalisation.\n\nHalving would give $P_0(1) = 1/2$."
  },
  {
    id: "mth302_ch10_038",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "Which behaviour distinguishes $Y_n$ from $J_n$ at the origin?",
    options: [
      "$Y_n$ is unbounded there",
      "$Y_n$ vanishes there for every order $n$",
      "$Y_n$ equals one there for every order $n$",
      "$Y_n$ is undefined for non-integer order"
    ],
    correctAnswer: 0,
    explanation: "The Bessel function of the second kind blows up at $x = 0$, which is why bounded physical problems retain only $J_n$.\n\nVanishing at the origin describes $J_n$ for $n \\geq 1$.\n\nThe value one at the origin describes $J_0$.\n\nThe function $Y_n$ is defined for non-integer order as well."
  },
  {
    id: "mth302_ch10_039",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is $P_2(x)$?",
    options: [
      "$\\dfrac{3x^2 - 1}{2}$",
      "$\\dfrac{3x^2 + 1}{2}$",
      "$\\dfrac{5x^2 - 3}{2}$, from an incorrect recurrence step",
      "$3x^2 - 1$"
    ],
    correctAnswer: 0,
    explanation: "Rodrigues' formula gives $P_2(x) = \\dfrac{3x^2 - 1}{2}$, and substituting $x = 1$ gives $1$ as required.\n\nA plus sign would give $P_2(1) = 2$.\n\nThe third expression fails the check at $x = 1$.\n\nOmitting the division gives $P_2(1) = 2$."
  },
  {
    id: "mth302_ch10_040",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "In the series for $J_n(x)$, which function appears in the denominator of each term?",
    options: [
      "$k!\\,\\Gamma(n + k + 1)$",
      "$k!\\,\\Gamma(n + k)$, shifting the Gamma argument down by one",
      "$k!\\,(n + k)!$",
      "$\\Gamma(k)\\,\\Gamma(n + 1)$, splitting the factors incorrectly"
    ],
    correctAnswer: 0,
    explanation: "Each term carries $\\dfrac{(-1)^k}{k!\\,\\Gamma(n + k + 1)}$, and the Gamma function is what permits non-integer order.\n\nShifting the argument breaks the reduction to factorials for integer $n$.\n\nA factorial denominator would restrict the definition to integer order.\n\nSplitting the factors that way does not match the series."
  }
];

export default mth302Chapter10;
