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
    text: "Starting from the generating function $\\dfrac{1}{\\sqrt{1-2xt+t^2}} = \\sum_{n=0}^{\\infty}P_n(x)t^n$, set $x=1$ so the left side simplifies to $\\dfrac{1}{1-t}$, and set $x=-1$ so it simplifies to $\\dfrac{1}{1+t}$. Expanding each as a power series in $t$ and reading off the coefficient of $t^6$, what are the values of $P_6(1)$ and $P_6(-1)$ respectively?",
    options: [
      "$1$ and $1$",
      "$1$ and $-1$",
      "$6$ and $-6$",
      "$1$ and $0$"
    ],
    correctAnswer: 0,
    explanation: "Since $\\dfrac{1}{1-t} = \\sum_{n=0}^{\\infty}t^n$, every coefficient equals $1$, so $P_6(1) = 1$. Since $\\dfrac{1}{1+t} = \\sum_{n=0}^{\\infty}(-1)^nt^n$, the coefficient of $t^6$ is $(-1)^6 = 1$ because $6$ is even, so $P_6(-1) = 1$ as well.\n\n$1$ and $-1$ assumes the alternating sign always lands on $-1$, ignoring that $(-1)^n$ depends on the parity of $n$ and equals $1$ for the even index $n=6$.\n\n$6$ and $-6$ mistakes the index $n$ itself for the coefficient being extracted, rather than reading off the coefficient of $t^n$ in the expanded series.\n\n$1$ and $0$ wrongly assumes the coefficient vanishes at $x=-1$ for some parity of $n$, but the geometric series $\\sum(-1)^nt^n$ never has a zero coefficient."
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
    text: "Apply Rodrigues' formula $P_n(x) = \\dfrac{1}{2^nn!}\\dfrac{d^n}{dx^n}(x^2-1)^n$ with $n=2$ to derive $P_2(x)$ by hand. Expand $(x^2-1)^2 = x^4-2x^2+1$, differentiate twice with respect to $x$, and divide by the correct normalizing constant. What polynomial results?",
    options: [
      "$(3x^2-1)/2$",
      "$(3x^2+1)/2$",
      "$3x^2 - 1$",
      "$(4x^3-4x)/8$"
    ],
    correctAnswer: 0,
    explanation: "Differentiating $x^4-2x^2+1$ once gives $4x^3-4x$, and differentiating again gives $12x^2-4$. Dividing by the normalizing constant $2^2\\cdot2! = 8$ gives $\\dfrac{12x^2-4}{8} = \\dfrac{3x^2-1}{2}$, which checks out since $P_2(1)$ must equal $1$ and $\\dfrac{3-1}{2}=1$.\n\n$(3x^2+1)/2$ results from expanding $(x^2-1)^2$ with the wrong sign, as if it were $(x^2+1)^2$, before differentiating.\n\n$3x^2 - 1$ comes from dividing by $2^n=4$ alone and forgetting the $n!=2$ factor in the normalizing constant $2^nn!$.\n\n$(4x^3-4x)/8$ stops after only one differentiation instead of the two required for $n=2$, then divides by the correct constant anyway."
  },
  {
    id: "mth302_ch10_006",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "The three-term recurrence relation for the Legendre polynomials is $(n+1)P_{n+1}(x) = (2n+1)xP_n(x) - nP_{n-1}(x)$. Given $P_2(x) = \\dfrac{3x^2-1}{2}$ and $P_3(x) = \\dfrac{5x^3-3x}{2}$, apply the recurrence with $n=3$ to derive $P_4(x)$.",
    options: [
      "$(35x^4-30x^2+3)/8$",
      "$(35x^4-30x^2+3)/2$",
      "$(35x^4-12x^2-3)/8$",
      "$(3x^3+x)/4$"
    ],
    correctAnswer: 0,
    explanation: "With $n=3$ the recurrence reads $4P_4 = 7xP_3 - 3P_2 = 7x\\cdot\\dfrac{5x^3-3x}{2} - 3\\cdot\\dfrac{3x^2-1}{2} = \\dfrac{35x^4-30x^2+3}{2}$, so dividing by $4$ gives $P_4 = \\dfrac{35x^4-30x^2+3}{8}$.\n\n$(35x^4-30x^2+3)/2$ stops right after combining the two terms and forgets to divide by the coefficient $(n+1)=4$.\n\n$(35x^4-12x^2-3)/8$ comes from using a plus sign instead of a minus sign on the $nP_{n-1}$ term.\n\n$(3x^3+x)/4$ comes from swapping the roles of $P_2$ and $P_3$, multiplying $x$ by $P_2$ instead of $P_3$."
  },
  {
    id: "mth302_ch10_007",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "For the Bessel function of the first kind, the relation for integer order $n$ is $J_{-n}(x) = (-1)^nJ_n(x)$. Using $n=7$, what is $J_{-7}(x)$ in terms of $J_7(x)$?",
    options: [
      "$J_{-7}(x) = -J_7(x)$",
      "$J_{-7}(x) = J_7(x)$",
      "$J_{-7}(x) = -7J_7(x)$",
      "$J_{-7}(x) = Y_7(x)$"
    ],
    correctAnswer: 0,
    explanation: "Since $\\Gamma$ is infinite at non-positive integers, the first $n$ terms of the series for $J_{-n}$ vanish, and reindexing gives $J_{-n}(x) = (-1)^nJ_n(x)$. With $n=7$, which is odd, $(-1)^7=-1$, so $J_{-7}(x) = -J_7(x)$.\n\n$J_{-7}(x) = J_7(x)$ applies the sign for an even order, but $7$ is odd.\n\n$J_{-7}(x) = -7J_7(x)$ mistakes the exponent $(-1)^n$ for a multiplication by $n$ itself.\n\n$J_{-7}(x) = Y_7(x)$ confuses the negative-order Bessel function of the first kind with the entirely separate Bessel function of the second kind."
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
    text: "Legendre's differential equation with degree $k$ is $(1-x^2)y'' - 2xy' + k(k+1)y = 0$. Substituting $k=3$ and $y = P_3(x) = \\dfrac{5x^3-3x}{2}$, so that $y' = \\dfrac{15x^2-3}{2}$ and $y'' = 15x$, what is the value of $(1-x^2)y'' - 2xy' + 12y$?",
    options: [
      "$0$",
      "$15x^3$",
      "$30x^3 - 6x$",
      "$-15x^3 + 9x$"
    ],
    correctAnswer: 0,
    explanation: "Substituting gives $(1-x^2)(15x) - 2x\\cdot\\dfrac{15x^2-3}{2} + 12\\cdot\\dfrac{5x^3-3x}{2} = (15x-15x^3) + (-15x^3+3x) + (30x^3-18x)$. The $x^3$ terms cancel to $0$ and the $x$ terms cancel to $0$, leaving $0$, confirming $P_3$ solves the equation with $k=3$.\n\n$15x^3$ results from dropping the factor $(1-x^2)$ on the $y''$ term and using $y''$ by itself.\n\n$30x^3 - 6x$ results from using a plus sign instead of a minus sign on the $2xy'$ term.\n\n$-15x^3 + 9x$ results from miscomputing $k(k+1)$ with $k=3$ as $6$ instead of $12$."
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
    text: "The Legendre equation $(1-x^2)y'' - 2xy' + 20y = 0$ has the standard form $(1-x^2)y'' - 2xy' + k(k+1)y = 0$. Solve $k(k+1) = 20$ for the non-negative integer $k$, then state the general solution of the equation.",
    options: [
      "$y = AP_4(x) + BQ_4(x)$",
      "$y = AP_5(x) + BQ_5(x)$",
      "$y = AP_4(x)$ alone",
      "$y = AJ_4(x) + BY_4(x)$"
    ],
    correctAnswer: 0,
    explanation: "Factoring $k^2+k-20=0$ gives $(k-4)(k+5)=0$, and the non-negative integer root is $k=4$. Being second order, the equation has two independent solutions, so the general solution is $y = AP_4(x) + BQ_4(x)$.\n\n$y = AP_5(x) + BQ_5(x)$ comes from dropping the linear term and solving $k^2=20$ instead of $k(k+1)=20$, then rounding the approximate root up to $k=5$.\n\n$y = AP_4(x)$ alone correctly finds $k=4$ but wrongly discards the second solution; $Q_4$ is only dropped for boundedness in physical problems, not from the general solution.\n\n$y = AJ_4(x) + BY_4(x)$ correctly finds $k=4$ but wrongly applies the Bessel functions, which solve a different equation entirely."
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
    text: "For $k=2$, the series solution of Legendre's equation before normalization is $y(x) = a_0(1-3x^2)$, where $a_0$ is an arbitrary constant. Using the condition $P_2(1)=1$ that fixes the arbitrary constants in defining $P_n$, what is the value of $a_0$?",
    options: [
      "$-1/2$",
      "$1/2$",
      "$-2$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "Setting $x=1$ gives $y(1) = a_0(1-3) = -2a_0$, and requiring $y(1)=1$ gives $-2a_0=1$, so $a_0 = -\\dfrac{1}{2}$.\n\n$1/2$ drops the negative sign when solving $-2a_0=1$.\n\n$-2$ mistakes the bracket value $1-3(1)^2=-2$, computed as if $a_0$ were already $1$, for the value of $a_0$ itself.\n\n$1$ assumes the normalization directly sets $a_0=1$, skipping the equation $-2a_0=1$ that must actually be solved."
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
    text: "Apply Rodrigues' formula $P_n(x) = \\dfrac{1}{2^nn!}\\dfrac{d^n}{dx^n}(x^2-1)^n$ with $n=3$ to derive $P_3(x)$ by hand. Expand $(x^2-1)^3 = x^6-3x^4+3x^2-1$, differentiate three times with respect to $x$, and divide by the correct normalizing constant. What polynomial results?",
    options: [
      "$(5x^3-3x)/2$",
      "$(5x^3+3x)/2$",
      "$15x^3 - 9x$",
      "$30x^4 - 36x^2 + 6$"
    ],
    correctAnswer: 0,
    explanation: "Differentiating $x^6-3x^4+3x^2-1$ three times gives, in order, $6x^5-12x^3+6x$, then $30x^4-36x^2+6$, then $120x^3-72x$. Dividing by the normalizing constant $2^3\\cdot3! = 48$ gives $\\dfrac{120x^3-72x}{48} = \\dfrac{5x^3-3x}{2}$, which checks out since $P_3(1) = \\dfrac{5-3}{2}=1$.\n\n$(5x^3+3x)/2$ results from a sign error in expanding $(x^2-1)^3$, as if it were $(x^2+1)^3$, before differentiating.\n\n$15x^3 - 9x$ results from dividing $120x^3-72x$ by $2^3=8$ alone and forgetting the $3!=6$ factor in the normalizing constant.\n\n$30x^4 - 36x^2 + 6$ stops after only two differentiations instead of the three required for $n=3$."
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
    text: "Rodrigues' formula gives $P_5(x) = \\dfrac{1}{2^5\\cdot5!}\\dfrac{d^5}{dx^5}(x^2-1)^5$, where $(x^2-1)^5$ is a polynomial of degree $10$. After differentiating five times, determine the degree and parity (even or odd function) of the resulting polynomial, and use that parity to state the value of $P_5(-1)$.",
    options: [
      "Degree $5$, an odd function, with $P_5(-1) = -1$",
      "Degree $10$, an even function, with $P_5(-1) = 1$",
      "Degree $5$, an odd function, with $P_5(-1) = 1$",
      "Degree $4$, an even function, with $P_5(-1) = 1$"
    ],
    correctAnswer: 0,
    explanation: "Differentiating a degree-$10$ polynomial five times reduces its degree by five, giving degree $5$, and $P_n$ always inherits the parity of its index, so $P_5$ is an odd function. Using $P_n(-1) = (-1)^n$ with $n=5$ gives $P_5(-1) = (-1)^5 = -1$.\n\nDegree $10$ and an even function keeps the pre-differentiation degree of $(x^2-1)^5$ instead of subtracting the five derivatives taken.\n\nDegree $5$, an odd function, with $P_5(-1) = 1$ correctly finds the degree and parity but wrongly applies $P_n(-1)=1$ for every $n$ regardless of parity.\n\nDegree $4$, an even function, with $P_5(-1) = 1$ over-subtracts, treating the five derivatives as reducing the degree by six instead of five."
  },
  {
    id: "mth302_ch10_019",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "The three-term recurrence relation for the Legendre polynomials is $(n+1)P_{n+1}(x) = (2n+1)xP_n(x) - nP_{n-1}(x)$. Given $P_3(x) = \\dfrac{5x^3-3x}{2}$ and $P_4(x) = \\dfrac{35x^4-30x^2+3}{8}$, apply the recurrence with $n=4$ to derive $P_5(x)$.",
    options: [
      "$(63x^5-70x^3+15x)/8$",
      "$(315x^5-350x^3+75x)/8$",
      "$(35x^4-30x^2+3)/8$",
      "$(10x^4+3x^2-3)/10$"
    ],
    correctAnswer: 0,
    explanation: "With $n=4$ the recurrence reads $5P_5 = 9xP_4 - 4P_3 = 9x\\cdot\\dfrac{35x^4-30x^2+3}{8} - 4\\cdot\\dfrac{5x^3-3x}{2} = \\dfrac{315x^5-350x^3+75x}{8}$, so dividing by $5$ gives $P_5 = \\dfrac{63x^5-70x^3+15x}{8}$.\n\n$(315x^5-350x^3+75x)/8$ stops right after combining the two terms and forgets to divide by the coefficient $(n+1)=5$.\n\n$(35x^4-30x^2+3)/8$ comes from using $n=3$ in the recurrence instead of $n=4$, which only reproduces $P_4$ rather than advancing to $P_5$.\n\n$(10x^4+3x^2-3)/10$ comes from swapping the roles of $P_3$ and $P_4$, multiplying $x$ by $P_3$ instead of $P_4$."
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
    text: "The generating function for the Legendre polynomials is $\\dfrac{1}{\\sqrt{1-2xt+t^2}} = \\sum_{n=0}^{\\infty}P_n(x)t^n$. Using the binomial series $(1-u)^{-1/2} = 1 + \\dfrac{u}{2} + \\dfrac{3u^2}{8} + \\cdots$ with $u = 2xt - t^2$, expand up to the $t^2$ term and read off its coefficient. What polynomial does this give for $P_2(x)$?",
    options: [
      "$(3x^2-1)/2$",
      "$(3x^2+1)/2$",
      "$4x^2 - 1$",
      "$-1/2$"
    ],
    correctAnswer: 0,
    explanation: "The linear term contributes $\\dfrac{u}{2} = xt - \\dfrac{t^2}{2}$, giving $-\\dfrac{1}{2}$ from the $t^2$ piece, and the quadratic term contributes $\\dfrac{3u^2}{8}$, whose $t^2$ piece comes from $4x^2t^2$ inside $u^2$, giving $\\dfrac{3}{2}x^2$. Adding these gives $\\dfrac{3x^2}{2} - \\dfrac{1}{2} = \\dfrac{3x^2-1}{2}$.\n\n$(3x^2+1)/2$ results from dropping the minus sign inside $u=2xt-t^2$ when squaring it, as if $u=2xt+t^2$.\n\n$4x^2 - 1$ results from using the ordinary binomial series for exponent $-1$, namely $1+u+u^2+\\cdots$, instead of the correct exponent $-1/2$.\n\n$-1/2$ keeps only the linear term of the binomial series and omits the $u^2$ contribution entirely, losing the $x^2$ dependence."
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
    text: "Bessel's differential equation of order $n$ is $x^2y'' + xy' + (x^2-n^2)y = 0$. What is Bessel's equation of order $n=5$, written out explicitly?",
    options: [
      "$x^2y'' + xy' + (x^2-25)y = 0$",
      "$x^2y'' + xy' + (x^2-5)y = 0$",
      "$x^2y'' + xy' + (x^2+25)y = 0$",
      "$x^2y'' + xy' + (25-x^2)y = 0$"
    ],
    correctAnswer: 0,
    explanation: "Substituting $n=5$ into $x^2-n^2$ gives $x^2-25$, so the equation is $x^2y'' + xy' + (x^2-25)y = 0$.\n\n$x^2y'' + xy' + (x^2-5)y = 0$ uses $n$ itself instead of $n^2$ in the bracket, the standard slip of reading the order directly as the constant term.\n\n$x^2y'' + xy' + (x^2+25)y = 0$ flips the sign before $n^2$, giving the modified Bessel equation instead of the ordinary one.\n\n$x^2y'' + xy' + (25-x^2)y = 0$ reverses the bracket, changing the sign of the entire quadratic term."
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
    text: "For the Bessel function of the first kind, the relation for integer order $n$ is $J_{-n}(x) = (-1)^nJ_n(x)$. Using $n=6$, what is $J_{-6}(x)$ in terms of $J_6(x)$?",
    options: [
      "$J_{-6}(x) = J_6(x)$",
      "$J_{-6}(x) = -J_6(x)$",
      "$J_{-6}(x) = 6J_6(x)$",
      "$J_{-6}(x) = Y_6(x)$"
    ],
    correctAnswer: 0,
    explanation: "Since $\\Gamma$ is infinite at non-positive integers, the first $n$ terms of the series for $J_{-n}$ vanish, and reindexing gives $J_{-n}(x) = (-1)^nJ_n(x)$. With $n=6$, which is even, $(-1)^6=1$, so $J_{-6}(x) = J_6(x)$.\n\n$J_{-6}(x) = -J_6(x)$ applies the sign for an odd order, but $6$ is even.\n\n$J_{-6}(x) = 6J_6(x)$ mistakes the exponent $(-1)^n$ for a multiplication by $n$ itself.\n\n$J_{-6}(x) = Y_6(x)$ confuses the negative-order Bessel function of the first kind with the entirely separate Bessel function of the second kind."
  },
  {
    id: "mth302_ch10_032",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "For integer order $n$, $J_{-n}(x) = (-1)^nJ_n(x)$. Using $n=3$, compute the ratio $J_{-3}(x)/J_3(x)$ and use it to determine whether a genuinely independent second solution is required for Bessel's equation of order $3$.",
    options: [
      "The ratio is $-1$, so $J_{-3}$ and $J_3$ are proportional (linearly dependent), meaning a second solution $Y_3$ is needed",
      "The ratio is $1$, so $J_{-3}$ and $J_3$ are proportional, meaning a second solution $Y_3$ is needed",
      "The ratio is $-1$, so $J_{-3}$ and $J_3$ are independent, meaning no second solution is required",
      "The ratio is $-3$, so $J_{-3}$ and $J_3$ are proportional, meaning a second solution $Y_3$ is needed"
    ],
    correctAnswer: 0,
    explanation: "With $n=3$, $(-1)^n = (-1)^3 = -1$, so $J_{-3}(x)/J_3(x) = -1$. A constant nonzero ratio means the two functions are proportional, hence linearly dependent, so they cannot form a general solution on their own and a genuinely independent second solution $Y_3$ is required.\n\nThe ratio is $1$ wrongly treats $n=3$ as even when computing $(-1)^n$, giving the wrong sign.\n\nThe ratio is $-1$, so $J_{-3}$ and $J_3$ are independent correctly computes the ratio but misapplies the independence test, since a constant nonzero ratio is exactly what proportionality (dependence) means.\n\nThe ratio is $-3$ mistakes the exponent $(-1)^n$ for a multiplication by $n$ itself, rather than raising $-1$ to the power $n$."
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
    text: "For the equation $x^2y'' + xy' + (x^2-9)y = 0$, dividing through by $x^2$ writes it as $y'' + p(x)y' + q(x)y = 0$ with $p(x) = 1/x$ and $q(x) = 1 - 9/x^2$. Examining the limits of $xp(x)$ and $x^2q(x)$ as $x \\to 0$, what kind of point is $x=0$?",
    options: [
      "A regular singular point, since $xp(x) \\to 1$ and $x^2q(x) \\to -9$ remain finite as $x \\to 0$",
      "An ordinary point, since $q(x) = 1 - 9/x^2$ is finite at $x=0$ once the $9/x^2$ term is ignored",
      "An irregular singular point, since $p(x) = 1/x$ itself blows up as $x \\to 0$",
      "A point outside the domain of the equation, since dividing by $x^2$ is undefined there"
    ],
    correctAnswer: 0,
    explanation: "Computing $xp(x) = x\\cdot\\dfrac{1}{x} = 1$ and $x^2q(x) = x^2\\left(1 - \\dfrac{9}{x^2}\\right) = x^2 - 9$, both limits as $x\\to 0$ are finite ($1$ and $-9$), which is exactly the test for a regular singular point.\n\nAn ordinary point ignoring the $9/x^2$ term is not a valid simplification, since that term is precisely what makes $q(x)$ singular at $x=0$.\n\nAn irregular singular point tests $p(x)$ and $q(x)$ directly rather than the required products $xp(x)$ and $x^2q(x)$, which is the correct test.\n\nA point outside the domain confuses the algebraic step of dividing by $x^2$ with the domain of the original equation, which is perfectly defined at $x=0$ before dividing."
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
