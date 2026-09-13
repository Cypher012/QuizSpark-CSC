import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter11: QuestionV2[] = [
  {
    id: "mth302_ch11_001",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "If $f$ is an odd function on $[-\\pi, \\pi]$, which Fourier coefficients vanish?",
    options: [
      "The sine coefficients $b_n$",
      "The constant term $a_0$ and all cosine coefficients $a_n$",
      "Both $a_n$ and $b_n$ for all $n$",
      "Only the constant term $a_0$"
    ],
    correctAnswer: 1,
    explanation: "An odd function multiplied by $\\cos(nx)$ is itself odd, so every cosine-related integral over the symmetric interval vanishes, including the constant term $a_0$, which is computed the same way. Only the sine coefficients survive, giving a pure sine series.\n\nThe sine coefficients $b_n$ is exactly the statement for an even function, not an odd one.\n\nBoth $a_n$ and $b_n$ vanishing for all $n$ would leave no series at all, which is too strong.\n\nOnly the constant term $a_0$ understates the result, since every cosine coefficient $a_n$ vanishes as well, not just the constant term."
  },
  {
    id: "mth302_ch11_002",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For the square wave $f = -k$ on $(-\\pi, 0)$ and $f = k$ on $(0, \\pi)$, what is the Fourier series?",
    options: [
      "$\\dfrac{4k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$",
      "$\\dfrac{2k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 2x}{2} + \\cdots\\right)$",
      "$\\dfrac{4k}{\\pi}\\left(\\cos x + \\dfrac{\\cos 3x}{3} + \\cdots\\right)$",
      "$\\dfrac{k}{2} + \\dfrac{4k}{\\pi}\\sin x$"
    ],
    correctAnswer: 0,
    explanation: "The function is odd, so $a_0$ and all $a_n$ vanish, and $b_n = \\dfrac{2k}{n\\pi}(1 - \\cos n\\pi)$, which equals $4k/(n\\pi)$ for odd $n$ and $0$ for even $n$, giving the series $\\dfrac{4k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$.\n\nThe version with even harmonics like $\sin(2x)/2$ includes terms that this odd square wave does not actually contain.\n\nThe cosine-based version wrongly uses cosine terms for a function that is odd and therefore has a pure sine expansion.\n\nThe version with a leading $k/2$ term wrongly includes a nonzero constant, but the mean value of this particular function over a period is zero."
  },
  {
    id: "mth302_ch11_003",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For the square wave $f = -k$ on $(-\\pi, 0)$ and $f = k$ on $(0, \\pi)$, what is the coefficient $b_4$?",
    options: [
      "$4k/(4\\pi)$",
      "$k/\\pi$",
      "$0$",
      "$2k/\\pi$"
    ],
    correctAnswer: 2,
    explanation: "The formula $b_n$ is proportional to $(1 - \\cos n\\pi)$, which equals $1 - (-1)^n$, giving $0$ for every even $n$ and $2$ for every odd $n$. Since $n = 4$ is even, $b_4 = 0$, a direct consequence of the half-wave symmetry this square wave possesses.\n\n$4k/(4\\pi)$ and $k/\\pi$ both wrongly assign a nonzero value to an even-indexed coefficient.\n\n$2k/\\pi$ is the value that would apply to an odd-indexed coefficient, not the even $n = 4$ case."
  },
  {
    id: "mth302_ch11_004",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "In the expansion $f(x) = \\dfrac{a_0}{2} + \\sum(a_n\\cos nx + b_n\\sin nx)$, with $a_0$ defined by the standard integral formula, what does the constant term $a_0/2$ represent?",
    options: [
      "Twice the mean value of $f$",
      "The maximum value of $f$",
      "The mean value of $f$ over a period",
      "It is always zero"
    ],
    correctAnswer: 2,
    explanation: "Since $a_0/2$ equals $\\dfrac{1}{2\\pi}\\displaystyle\\int f\\,dx$ over one period, it is precisely the average value of $f$ over that period. This gives a quick sanity check on any Fourier answer: for a function that equals $0$ on half the period and $a$ on the other half, the constant term must work out to $a/2$.\n\nTwice the mean value of $f$ is off by a factor of $2$ from the correct interpretation.\n\nThe maximum value of $f$ confuses the constant, or average, term with a completely different quantity.\n\nIt is always zero is only true for functions whose average over a period happens to be zero, such as the odd square wave, not for Fourier series in general."
  },
  {
    id: "mth302_ch11_005",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "At a point where a function $f$ has a jump discontinuity, what does its Fourier series converge to?",
    options: [
      "The left-hand limit $f(x_0^-)$",
      "The right-hand limit $f(x_0^+)$",
      "The average of the left and right limits, one half times the sum $f(x_0^-) + f(x_0^+)$",
      "The series diverges"
    ],
    correctAnswer: 2,
    explanation: "By the Dirichlet convergence theorem, at a jump discontinuity the Fourier series converges to the average of the one-sided limits, $\\dfrac{1}{2}[f(x_0^-) + f(x_0^+)]$. For the square wave at $x = 0$ this gives $0$, the midpoint between $-k$ and $k$, even though the function itself is defined to equal one of those two values at that exact point.\n\nThe left-hand limit and the right-hand limit each capture only one side of the jump rather than the correct average of both.\n\nThe series diverges is incorrect, since Dirichlet's theorem guarantees convergence to a specific value even at a jump."
  },
  {
    id: "mth302_ch11_006",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the period of $y = 3\\sin(5x)$?",
    options: [
      "$2\\pi/5$",
      "$5\\pi$",
      "$2\\pi$",
      "$\\pi/5$"
    ],
    correctAnswer: 0,
    explanation: "The period of $A\\sin(nx)$ is $2\\pi/n$ regardless of the amplitude $A$, so with $n = 5$ the period is $2\\pi/5$. The amplitude $3$ has no effect on the period whatsoever.\n\n$5\\pi$ and $\\pi/5$ do not follow from the formula $2\\pi/n$ with $n = 5$.\n\n$2\\pi$ is the period of $\\sin x$ itself, ignoring the factor of $5$ multiplying $x$."
  },
  {
    id: "mth302_ch11_007",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For $f(x) = 0$ on $(-\\pi, 0)$ and $f(x) = a$ on $(0, \\pi)$, with period $2\\pi$, what is the Fourier series?",
    options: [
      "$\\dfrac{a}{2} + \\dfrac{2a}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$",
      "$a + \\dfrac{2a}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\cdots\\right)$",
      "$\\dfrac{a}{2} + \\dfrac{4a}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\cdots\\right)$",
      "$\\dfrac{a}{2} + \\dfrac{2a}{\\pi}\\left(\\cos x + \\dfrac{\\cos 3x}{3} + \\cdots\\right)$"
    ],
    correctAnswer: 0,
    explanation: "Here $a_0 = \\dfrac{1}{\\pi}\\displaystyle\\int_0^\\pi a\\,dx$, which equals $a$, so the constant term is $a_0/2 = a/2$, matching the mean value of the function over the period. The cosine coefficients $a_n$ vanish, and $b_n = \\dfrac{a}{n\\pi}(1 - \\cos n\\pi)$, which equals $2a/(n\\pi)$ for odd $n$, giving the series $\\dfrac{a}{2} + \\dfrac{2a}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$.\n\nThe version with a leading $a$ rather than $a/2$ forgets to halve $a_0$, doubling the constant term.\n\nThe version with $4a/\pi$ doubles $b_n$ by mistakenly applying the formula used for the symmetric square wave rather than this one-sided pulse.\n\nThe cosine-based version wrongly uses cosine terms, but the $a_n$ coefficients here are actually all zero."
  },
  {
    id: "mth302_ch11_008",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For a function of period $2L$, what is the formula for the coefficient $b_n$?",
    options: [
      "$\\dfrac{1}{L}\\displaystyle\\int_{-L}^{L} f\\sin\\left(\\dfrac{n\\pi x}{L}\\right)dx$",
      "$\\dfrac{1}{2L}\\displaystyle\\int_{-L}^{L} f\\sin\\left(\\dfrac{n\\pi x}{L}\\right)dx$",
      "$\\dfrac{1}{\\pi}\\displaystyle\\int_{-L}^{L} f\\sin(nx)\\,dx$",
      "$\\dfrac{1}{L}\\displaystyle\\int_0^{L} f\\sin\\left(\\dfrac{n\\pi x}{L}\\right)dx$"
    ],
    correctAnswer: 0,
    explanation: "Rescaling $v = \\pi x/L$ so that $v$ runs over $2\\pi$ while $x$ runs over $2L$ turns every prefactor of $1/\\pi$ in the period-$2\\pi$ formulas into $1/L$, with the limits becoming $\\pm L$ and $nx$ becoming $n\\pi x/L$, giving $b_n = \\dfrac{1}{L}\\int_{-L}^{L} f\\sin(n\\pi x/L)\\,dx$.\n\nThe version with $1/(2L)$ has an extra factor of $2$ in the denominator that does not belong.\n\nThe version with $1/\\pi$ and $\\sin(nx)$ incorrectly keeps the period-$2\\pi$ prefactor and argument rather than rescaling them for period $2L$.\n\nThe version integrated from $0$ to $L$ is the half-range sine formula, which carries a different prefactor of $2/L$ and different limits, not the full-range formula asked for here."
  },
  {
    id: "mth302_ch11_009",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For $f(x) = x^2$ on $(-\\pi, \\pi)$ extended periodically, which statement is correct?",
    options: [
      "All the $a_n$ coefficients vanish",
      "The series has only sine terms",
      "The constant term $a_0$ is zero",
      "All the $b_n$ coefficients vanish"
    ],
    correctAnswer: 3,
    explanation: "Since $x^2$ is an even function, $f(x)\\sin(nx)$ is odd, so every sine-related integral over the symmetric interval $[-\\pi, \\pi]$ vanishes, meaning all $b_n$ coefficients are zero. The resulting expansion is a pure cosine series, with $a_0$ equal to $2\\pi^2/3$ and $a_n$ equal to $4(-1)^n/n^2$.\n\nAll the $a_n$ coefficients vanish is exactly backwards, since it is the cosine coefficients that survive for this even function.\n\nThe series has only sine terms is also backwards, since an even function produces a cosine series, not a sine series.\n\nThe constant term $a_0$ is zero is false, since $a_0$ works out to the nonzero value $2\\pi^2/3$ for this function."
  },
  {
    id: "mth302_ch11_010",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "Solving $u_t = \\kappa u_{xx}$ on $0 < x < L$ with $u(0, t) = u(L, t) = 0$ and a general initial temperature profile requires expanding $u(x, 0)$ in which type of series?",
    options: [
      "A full Fourier series on the interval from $-L$ to $L$",
      "A half-range cosine series",
      "A half-range sine series",
      "A Taylor series"
    ],
    correctAnswer: 2,
    explanation: "The eigenfunctions of the associated Sturm-Liouville problem $X'' + \\lambda X = 0$ with $X(0) = X(L) = 0$ are $\\sin(n\\pi x/L)$, so the initial condition must be expanded in those functions alone, which is a half-range sine series. A half-range cosine series would instead be required for insulated ends, where the boundary condition involves $u_x = 0$ at both endpoints rather than $u = 0$.\n\nA full Fourier series on the interval from $-L$ to $L$ does not match the boundary conditions given here, which are defined only on $(0, L)$.\n\nA half-range cosine series is the companion expansion appropriate for insulated, not zero-temperature, boundary conditions.\n\nA Taylor series has no connection to satisfying the zero-boundary eigenfunction structure required by this problem."
  },
  {
    id: "mth302_ch11_011",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "A function of period $4$ is given on $(-2, 2)$. Which harmonics appear in its Fourier series?",
    options: [
      "$\\cos\\dfrac{n\\pi x}{2}$ and $\\sin\\dfrac{n\\pi x}{2}$",
      "$\\cos\\dfrac{n\\pi x}{4}$ and $\\sin\\dfrac{n\\pi x}{4}$, using the full period as $L$",
      "$\\cos n\\pi x$ and $\\sin n\\pi x$, taking $L$ to be one",
      "$\\cos nx$ and $\\sin nx$, as for a function of period $2\\pi$"
    ],
    correctAnswer: 0,
    explanation: "Here $L$ is the half-period, so $T = 4$ gives $L = 2$ and the harmonics are $\\cos(n\\pi x/2)$ and $\\sin(n\\pi x/2)$.\n\nUsing $L = 4$ mistakes the full period for the half-period, which is the standard trap.\n\nTaking $L = 1$ corresponds to a function of period $2$.\n\nThe plain integer harmonics belong to period $2\\pi$."
  },
  {
    id: "mth302_ch11_012",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "If a function has period $T$, what is $L$ in the general Fourier formulas?",
    options: [
      "$L = \\dfrac{T}{2}$",
      "$L = T$, taking the full period directly",
      "$L = 2T$, doubling the period instead",
      "$L = \\dfrac{T}{2\\pi}$, dividing by a factor of $2\\pi$"
    ],
    correctAnswer: 0,
    explanation: "The general formulas are written on $[-L, L]$, an interval of length $2L$, so $L$ is the half-period.\n\nTaking $L = T$ doubles the interval and halves every harmonic frequency.\n\nDoubling the period compounds the same error.\n\nDividing by $2\\pi$ confuses the period with an angular frequency."
  },
  {
    id: "mth302_ch11_013",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the period of $y = A\\sin nx$?",
    options: [
      "$\\dfrac{2\\pi}{n}$",
      "$2\\pi n$, multiplying rather than dividing by $n$",
      "$\\dfrac{\\pi}{n}$, which is half the correct period",
      "$\\dfrac{n}{2\\pi}$, inverting the whole expression"
    ],
    correctAnswer: 0,
    explanation: "The sine completes one cycle when $nx$ increases by $2\\pi$, so the period is $2\\pi/n$.\n\nMultiplying by $n$ reverses the effect of the frequency.\n\nHalving gives the period of $\\sin 2nx$ instead.\n\nInverting the expression has the wrong dimensions."
  },
  {
    id: "mth302_ch11_014",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For $y = 6\\sin\\tfrac{2}{3}x$, what are the amplitude and period?",
    options: [
      "Amplitude $6$, period $3\\pi$",
      "Amplitude $6$, period $\\dfrac{2\\pi}{3}$, dividing by the reciprocal",
      "Amplitude $\\tfrac{2}{3}$, period $6$, exchanging the two quantities",
      "Amplitude $3$, period $2\\pi$, halving the amplitude"
    ],
    correctAnswer: 0,
    explanation: "The amplitude is the multiplier $6$, and the period is $\\dfrac{2\\pi}{2/3} = 3\\pi$.\n\nDividing by $3/2$ rather than by $2/3$ inverts the frequency.\n\nThe amplitude and frequency cannot be exchanged.\n\nHalving the amplitude misreads the multiplier."
  },
  {
    id: "mth302_ch11_015",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "In the expansion $f(x) = \\dfrac{a_0}{2} + \\sum(a_n\\cos nx + b_n\\sin nx)$, what does $\\dfrac{a_0}{2}$ represent?",
    options: [
      "The mean value of $f$ over a period",
      "The amplitude of the first harmonic in the series",
      "The value of $f$ at the origin of the interval",
      "Twice the average value of $f$ over a period"
    ],
    correctAnswer: 0,
    explanation: "With $a_0 = \\dfrac{1}{\\pi}\\int_{-\\pi}^{\\pi}f\\,dx$, the constant term $\\dfrac{a_0}{2}$ equals the average of $f$ over one period.\n\nThe first harmonic's amplitude is governed by $a_1$ and $b_1$.\n\nThe value at the origin is generally different from the mean.\n\nDoubling rather than halving is exactly the error this convention invites."
  },
  {
    id: "mth302_ch11_016",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the formula for $a_n$ on the interval $[-\\pi, \\pi]$?",
    options: [
      "$\\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi}f(x)\\cos nx\\,dx$",
      "$\\dfrac{1}{2\\pi}\\displaystyle\\int_{-\\pi}^{\\pi}f(x)\\cos nx\\,dx$, halving the prefactor",
      "$\\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi}f(x)\\sin nx\\,dx$, which gives $b_n$ instead",
      "$\\dfrac{2}{\\pi}\\displaystyle\\int_{0}^{\\pi}f(x)\\cos nx\\,dx$, valid only for even $f$"
    ],
    correctAnswer: 0,
    explanation: "The cosine coefficient carries the prefactor $\\dfrac{1}{\\pi}$ over the full interval $[-\\pi, \\pi]$.\n\nHalving the prefactor is the convention in which the constant term is written as $a_0$ rather than $a_0/2$.\n\nUsing the sine gives $b_n$.\n\nThe half-range form applies only when $f$ is even and is not the general definition."
  },
  {
    id: "mth302_ch11_017",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For the square wave $f = -k$ on $(-\\pi, 0)$ and $f = k$ on $(0, \\pi)$, what is $a_0$?",
    options: [
      "$0$",
      "$k$, the value taken on the positive half",
      "$2k$, the total jump across the discontinuity",
      "$\\dfrac{4k}{\\pi}$, which is the value of $b_1$"
    ],
    correctAnswer: 0,
    explanation: "The contributions $-k\\pi$ and $+k\\pi$ cancel, so $a_0 = 0$, consistent with the function being odd.\n\nThe value $k$ ignores the negative half of the interval.\n\nThe jump size is not the mean value.\n\nThe quantity $4k/\\pi$ is the first sine coefficient."
  },
  {
    id: "mth302_ch11_018",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For the square wave $f = -k$ on $(-\\pi, 0)$ and $f = k$ on $(0, \\pi)$, why do all the cosine coefficients vanish?",
    options: [
      "The function is odd",
      "The function is even",
      "The function is discontinuous at the origin",
      "The period is $2\\pi$ rather than a general $2L$"
    ],
    correctAnswer: 0,
    explanation: "An odd function has $a_0 = a_n = 0$, leaving a pure sine series, which is exactly what the square wave produces.\n\nAn even function would kill the sines instead.\n\nDiscontinuity affects convergence at the jump, not which family survives.\n\nThe length of the period does not decide the parity."
  },
  {
    id: "mth302_ch11_019",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For the square wave $f = -k$ on $(-\\pi, 0)$ and $f = k$ on $(0, \\pi)$, what is the general formula for $b_n$?",
    options: [
      "$\\dfrac{2k}{\\pi n}(1 - \\cos n\\pi)$",
      "$\\dfrac{2k}{\\pi n}(1 + \\cos n\\pi)$",
      "$\\dfrac{4k}{\\pi n}$ for every $n$, ignoring the parity",
      "$\\dfrac{k}{\\pi n}(1 - \\cos n\\pi)$, halving the prefactor"
    ],
    correctAnswer: 0,
    explanation: "Integrating gives $b_n = \\dfrac{2k}{\\pi n}(1 - \\cos n\\pi)$, which is $\\dfrac{4k}{n\\pi}$ for odd $n$ and zero for even $n$.\n\nReversing the sign inside the bracket would make the even terms survive instead.\n\nA formula independent of parity contradicts the vanishing even coefficients.\n\nHalving the prefactor gives the wrong odd-index values."
  },
  {
    id: "mth302_ch11_020",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For the square wave $f = -k$ on $(-\\pi, 0)$ and $f = k$ on $(0, \\pi)$, what is $b_3$?",
    options: [
      "$\\dfrac{4k}{3\\pi}$",
      "$\\dfrac{4k}{\\pi}$, which is the value of $b_1$",
      "$0$",
      "$\\dfrac{2k}{3\\pi}$, halving the correct value"
    ],
    correctAnswer: 0,
    explanation: "Since $3$ is odd, $b_3 = \\dfrac{4k}{3\\pi}$.\n\nThe value $4k/\\pi$ belongs to $b_1$.\n\nZero occurs at even indices only.\n\nHalving misreads the odd-index formula."
  },
  {
    id: "mth302_ch11_021",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the Fourier series of that square wave?",
    options: [
      "$\\dfrac{4k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$",
      "$\\dfrac{4k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 2x}{2} + \\dfrac{\\sin 3x}{3} + \\cdots\\right)$, keeping every index",
      "$\\dfrac{4k}{\\pi}\\left(\\cos x + \\dfrac{\\cos 3x}{3} + \\cdots\\right)$, using cosines instead",
      "$\\dfrac{2k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\cdots\\right)$, halving the prefactor"
    ],
    correctAnswer: 0,
    explanation: "Only the odd sine harmonics survive, each with coefficient $\\dfrac{4k}{n\\pi}$.\n\nKeeping every index contradicts the vanishing even coefficients.\n\nCosines vanish because the function is odd.\n\nHalving the prefactor misstates the coefficients."
  },
  {
    id: "mth302_ch11_022",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "If $f$ is even, which coefficients vanish?",
    options: [
      "All the $b_n$",
      "All the $a_n$",
      "Only $a_0$, while the rest survive unchanged",
      "None of them, since parity does not affect the coefficients"
    ],
    correctAnswer: 0,
    explanation: "An even function is orthogonal to every sine on a symmetric interval, so $b_n = 0$ and the series is a pure cosine series plus the constant.\n\nKilling the cosines describes the odd case.\n\nThe constant term generally survives for an even function.\n\nParity is precisely what determines which family survives."
  },
  {
    id: "mth302_ch11_023",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "If $f$ is odd, which coefficients vanish?",
    options: [
      "$a_0$ and all the $a_n$",
      "All the $b_n$",
      "Only $a_0$, while the cosines survive unchanged",
      "Only the odd-index coefficients throughout"
    ],
    correctAnswer: 0,
    explanation: "An odd function is orthogonal to the constant and to every cosine, so only sine terms remain.\n\nKilling the sines describes the even case.\n\nThe cosines vanish as well, not only the constant.\n\nThe distinction is by family, not by index parity."
  },
  {
    id: "mth302_ch11_024",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "At a jump discontinuity $x_0$, to what value does the Fourier series converge?",
    options: [
      "$\\tfrac{1}{2}[f(x_0^-) + f(x_0^+)]$",
      "$f(x_0^+)$",
      "$f(x_0^-)$, the value approached from the left",
      "The larger of the two one-sided limits"
    ],
    correctAnswer: 0,
    explanation: "Under the Dirichlet conditions the series converges to the average of the two one-sided limits at a jump.\n\nTaking the right-hand limit ignores the left-hand contribution.\n\nTaking the left-hand limit has the same defect.\n\nSelecting the larger limit has no basis in the convergence theorem."
  },
  {
    id: "mth302_ch11_025",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For the square wave with $f = -k$ on $(-\\pi, 0)$ and $f = k$ on $(0, \\pi)$, to what value does its series converge at $x = 0$?",
    options: [
      "$0$",
      "$k$",
      "$-k$, the value taken just to the left of the origin",
      "$\\dfrac{4k}{\\pi}$, the first sine coefficient"
    ],
    correctAnswer: 0,
    explanation: "The one-sided limits are $-k$ and $+k$, so the series converges to their average, which is zero.\n\nThe right-hand value alone ignores the averaging rule.\n\nThe left-hand value has the same defect.\n\nA Fourier coefficient is not a value of the sum."
  },
  {
    id: "mth302_ch11_026",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the formula for $b_n$ for a function of period $2L$?",
    options: [
      "$\\dfrac{1}{L}\\displaystyle\\int_{-L}^{L}f\\sin\\dfrac{n\\pi x}{L}\\,dx$",
      "$\\dfrac{1}{2L}\\displaystyle\\int_{-L}^{L}f\\sin\\dfrac{n\\pi x}{L}\\,dx$, halving the prefactor",
      "$\\dfrac{1}{L}\\displaystyle\\int_{-L}^{L}f\\cos\\dfrac{n\\pi x}{L}\\,dx$",
      "$\\dfrac{1}{\\pi}\\displaystyle\\int_{-L}^{L}f\\sin\\dfrac{n\\pi x}{L}\\,dx$"
    ],
    correctAnswer: 0,
    explanation: "Rescaling the period-$2\\pi$ formulas by $v = \\pi x/L$ replaces the prefactor $1/\\pi$ by $1/L$ and the harmonic $\\sin nx$ by $\\sin(n\\pi x/L)$.\n\nHalving the prefactor belongs to a different normalisation.\n\nUsing the cosine gives $a_n$.\n\nRetaining $\\pi$ in the prefactor fails to rescale consistently."
  },
  {
    id: "mth302_ch11_027",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For the period-$4$ pulse with $f = k$ on $(-1, 1)$ and $f = 0$ elsewhere on $(-2, 2)$, what is $a_0$?",
    options: [
      "$k$",
      "$2k$, doubling the computed value",
      "$\\dfrac{k}{2}$",
      "$0$, as for an odd function"
    ],
    correctAnswer: 0,
    explanation: "With $L = 2$, $a_0 = \\dfrac{1}{2}\\int_{-1}^{1}k\\,dx = \\dfrac{1}{2}(2k) = k$, so the constant term of the series is $a_0/2 = k/2$.\n\nDoubling misplaces the prefactor $1/L$.\n\nThe value $k/2$ is the constant term, not $a_0$ itself.\n\nThe function is even and nonnegative, so its mean cannot vanish."
  },
  {
    id: "mth302_ch11_028",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For the period-$4$ pulse with $f = k$ on $(-1, 1)$ and $f = 0$ elsewhere on $(-2, 2)$, why do all the sine coefficients vanish?",
    options: [
      "The pulse is an even function",
      "The pulse is an odd function about the origin",
      "The pulse is discontinuous at $x = \\pm 1$",
      "The period is $4$ rather than $2\\pi$"
    ],
    correctAnswer: 0,
    explanation: "The pulse is symmetric about the origin, so it is even and every $b_n$ vanishes.\n\nAn odd function would kill the cosines instead.\n\nDiscontinuity governs convergence at the jumps, not which family survives.\n\nThe numerical period does not determine parity."
  },
  {
    id: "mth302_ch11_029",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For the period-$4$ pulse with $f = k$ on $(-1, 1)$ and $f = 0$ elsewhere on $(-2, 2)$, what is $a_n$?",
    options: [
      "$\\dfrac{2k}{n\\pi}\\sin\\dfrac{n\\pi}{2}$",
      "$\\dfrac{2k}{n\\pi}\\cos\\dfrac{n\\pi}{2}$, replacing the sine by a cosine",
      "$\\dfrac{k}{n\\pi}\\sin\\dfrac{n\\pi}{2}$, halving the prefactor",
      "$\\dfrac{2k}{n\\pi}\\sin n\\pi$, which vanishes for every $n$"
    ],
    correctAnswer: 0,
    explanation: "Integrating $k\\cos(n\\pi x/2)$ over $(-1, 1)$ with prefactor $\\tfrac{1}{2}$ gives $\\dfrac{2k}{n\\pi}\\sin\\dfrac{n\\pi}{2}$.\n\nA cosine would not vanish at the required places.\n\nHalving the prefactor misstates the integral.\n\nEvaluating at $n\\pi$ instead of $n\\pi/2$ would make every coefficient zero."
  },
  {
    id: "mth302_ch11_030",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What are the Dirichlet conditions for convergence of a Fourier series?",
    options: [
      "Periodic, single valued, piecewise continuous, with finitely many extrema and discontinuities in a period",
      "Continuous and differentiable everywhere on the whole real line",
      "Bounded and monotonic throughout each period without exception",
      "Infinitely differentiable with all derivatives bounded"
    ],
    correctAnswer: 0,
    explanation: "The Dirichlet conditions require periodicity, single-valuedness, piecewise continuity, and finitely many maxima, minima and discontinuities in a period.\n\nRequiring differentiability everywhere would exclude the square wave, whose series converges.\n\nMonotonicity is far too strong and excludes ordinary oscillating functions.\n\nInfinite differentiability is likewise unnecessary."
  },
  {
    id: "mth302_ch11_031",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "At a point of continuity, to what does the Fourier series converge?",
    options: [
      "To $f(x)$ itself",
      "To the mean value of $f$ over the whole period",
      "To the average of the two neighbouring extrema",
      "To zero, regardless of the value of $f$ there"
    ],
    correctAnswer: 0,
    explanation: "Under the Dirichlet conditions the series reproduces $f(x)$ at every point where $f$ is continuous.\n\nThe mean value is the constant term, not the sum at a general point.\n\nNeighbouring extrema play no part in the convergence statement.\n\nConvergence to zero would contradict reproducing the function."
  },
  {
    id: "mth302_ch11_032",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For the ramp $f = -x$ on $(-\\pi, 0)$ and $f = 0$ on $(0, \\pi)$, what is $a_0$?",
    options: [
      "$\\dfrac{\\pi}{2}$",
      "$\\dfrac{\\pi}{4}$",
      "$\\pi$",
      "$0$, as for an odd function"
    ],
    correctAnswer: 0,
    explanation: "Computing $a_0 = \\dfrac{1}{\\pi}\\int_{-\\pi}^{0}(-x)\\,dx = \\dfrac{1}{\\pi}\\cdot\\dfrac{\\pi^2}{2} = \\dfrac{\\pi}{2}$, so the constant term is $a_0/2 = \\pi/4$.\n\nThe value $\\pi/4$ is the constant term, not $a_0$.\n\nOmitting the halving misreads the integral.\n\nThe function is nonnegative and not identically zero, so its mean is positive."
  },
  {
    id: "mth302_ch11_033",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "Which orthogonal system underlies the Fourier series of period $2\\pi$?",
    options: [
      "$\\{1,\\ \\cos nx,\\ \\sin nx\\}$",
      "$\\{\\cos nx\\}$ alone",
      "$\\{P_n(x)\\}$, the Legendre polynomials",
      "$\\{J_n(x)\\}$, the Bessel functions of the first kind"
    ],
    correctAnswer: 0,
    explanation: "The Fourier expansion is precisely an expansion in the orthogonal system consisting of the constant together with all the cosines and sines.\n\nDropping the sines and the constant leaves an incomplete system.\n\nThe Legendre polynomials are orthogonal on $[-1, 1]$, a different setting.\n\nThe Bessel functions belong to problems with weight $x$."
  },
  {
    id: "mth302_ch11_034",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the fundamental period of a periodic function?",
    options: [
      "The smallest positive period",
      "The largest period the function possesses",
      "The average spacing between successive maxima",
      "Any interval over which the function repeats"
    ],
    correctAnswer: 0,
    explanation: "Every integer multiple of a period is again a period, so the fundamental period is defined as the smallest positive one.\n\nNo largest period exists, since multiples grow without bound.\n\nSpacing between maxima can differ from the period for a general profile.\n\nAny repeating interval is a period, but not necessarily the fundamental one."
  },
  {
    id: "mth302_ch11_035",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For $f(x) = x^2$ on $(-\\pi, \\pi)$ extended periodically, which coefficients vanish?",
    options: [
      "All the $b_n$, since the function is even",
      "All the $a_n$, since the function is odd",
      "Only $a_0$, since the mean value is zero",
      "None of them, since the square destroys any symmetry"
    ],
    correctAnswer: 0,
    explanation: "Squaring produces an even function, so every sine coefficient vanishes and the series is a cosine series plus a constant.\n\nThe function is even rather than odd, so the cosines survive.\n\nThe mean of $x^2$ is positive, so $a_0$ does not vanish.\n\nThe square creates symmetry rather than destroying it."
  },
  {
    id: "mth302_ch11_036",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the period of $y = 3\\sin 5x$ in degrees?",
    options: [
      "$72^\\circ$",
      "$360^\\circ$, ignoring the frequency altogether",
      "$1800^\\circ$",
      "$5^\\circ$"
    ],
    correctAnswer: 0,
    explanation: "The period is $\\dfrac{360^\\circ}{5} = 72^\\circ$.\n\nIgnoring the factor $5$ gives the period of $\\sin x$.\n\nMultiplying inverts the effect of the frequency.\n\nThe frequency itself is not a period."
  },
  {
    id: "mth302_ch11_037",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "Rescaling a period-$2\\pi$ series to period $2L$ uses which substitution?",
    options: [
      "$v = \\dfrac{\\pi x}{L}$",
      "$v = \\dfrac{Lx}{\\pi}$",
      "$v = 2\\pi x$",
      "$v = \\dfrac{x}{2L}$, omitting the factor $\\pi$"
    ],
    correctAnswer: 0,
    explanation: "Choosing $\\kappa$ so that $v$ runs over $2\\pi$ while $x$ runs over $2L$ gives $\\kappa = \\pi/L$, hence $v = \\pi x/L$.\n\nInverting the ratio rescales in the wrong direction.\n\nIgnoring $L$ fails to match the two ranges.\n\nOmitting $\\pi$ leaves the harmonics unnormalised."
  },
  {
    id: "mth302_ch11_038",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "Which error does writing the constant term as $a_0$ rather than $\\dfrac{a_0}{2}$ produce?",
    options: [
      "It doubles the mean value of the function",
      "It halves every sine coefficient in the series",
      "It shifts each harmonic frequency by one",
      "It has no effect on the resulting series"
    ],
    correctAnswer: 0,
    explanation: "With $a_0$ defined using the same prefactor $1/\\pi$ as the other coefficients, the constant term must be $a_0/2$, so omitting the halving doubles the mean.\n\nThe sine coefficients are untouched by this convention.\n\nThe harmonic frequencies are unaffected.\n\nThe error changes the constant term and so does affect the series."
  }
];

export default mth302Chapter11;
