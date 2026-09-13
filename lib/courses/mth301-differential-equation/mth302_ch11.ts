import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter11: QuestionV2[] = [
  {
    id: "mth302_ch11_001",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "Consider $f(x) = x^3 + x$ on $(-\\pi, \\pi)$, extended periodically with period $2\\pi$. Since $x^3$ and $x$ are both odd functions, $f(-x) = -f(x)$ for every $x$. Which Fourier coefficients of $f$ vanish as a result?",
    options: [
      "$a_0$ and all the cosine coefficients $a_n$",
      "All the sine coefficients $b_n$",
      "Both $a_n$ and $b_n$ for every $n$",
      "Only the constant term $a_0$"
    ],
    correctAnswer: 0,
    explanation: "Because $f$ is a sum of two odd functions, $f$ itself is odd, and an odd function multiplied by $\\cos(nx)$ is odd, so every cosine-related integral vanishes over the symmetric interval, including the constant term $a_0$, which uses the same integral form as $a_n$ with $n = 0$. Only the sine coefficients $b_n$ survive, so the series is a pure sine series.\n\nAll the sine coefficients $b_n$ vanishing describes what happens for an even function, not an odd one.\n\nBoth $a_n$ and $b_n$ vanishing for every $n$ would leave no series at all, which is far too strong a conclusion.\n\nOnly the constant term $a_0$ vanishing understates the result, since every cosine coefficient $a_n$ vanishes along with it, not just the constant term."
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
    text: "A function of period $2$ is defined by $f(x) = 2(1+x)$ on $(-1, 0)$ and $f(x) = 0$ on $(0, 1)$. First identify $L$, then compute $a_0 = \\dfrac{1}{L}\\displaystyle\\int_{-L}^{L} f(x)\\,dx$, and finally state the constant term $a_0/2$ of its Fourier series.",
    options: [
      "$L = 1$, $a_0 = 1$, so the constant term $a_0/2$ equals $1/2$",
      "$L = 2$, using the full period as $L$ instead of the half-period, which gives $a_0 = 1/2$ and a constant term of $1/4$",
      "$L = 1$, $a_0 = 1$, but writing the constant term as $a_0$ itself, equal to $1$",
      "$L = 1$, doubling the integral to get $a_0 = 2$, so the constant term equals $1$"
    ],
    correctAnswer: 0,
    explanation: "With $f$ defined on $(-1, 1)$ and period $2$, the half-period is $L = 1$. Then $a_0 = \\dfrac{1}{1}\\left[\\displaystyle\\int_{-1}^{0}2(1+x)\\,dx + \\int_0^1 0\\,dx\\right] = \\big[2x+x^2\\big]_{-1}^{0} = 0-(-1) = 1$, so the constant term is $a_0/2 = 1/2$, the mean value of $f$ over the period.\n\nTaking $L=2$ mistakes the full period for the half-period, the standard trap, which halves the prefactor and so halves both $a_0$ and the constant term from their correct values.\n\nWriting the constant term as $a_0=1$ itself forgets the required halving, doubling the true constant term.\n\nDoubling the integral to claim $a_0=2$ introduces an arithmetic slip not present in the actual integration, and still fails to halve for the constant term."
  },
  {
    id: "mth302_ch11_005",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "A function of period $2\\pi$ is defined by $f(x) = 1$ on $(-\\pi, 0)$ and $f(x) = 5$ on $(0, \\pi)$, with a jump discontinuity at $x = 0$. What value does its Fourier series converge to at $x = 0$?",
    options: [
      "$3$, the average of the one-sided limits $1$ and $5$",
      "$1$, the left-hand limit at the jump",
      "$5$, the right-hand limit at the jump",
      "$6$, the sum of the one-sided limits without averaging"
    ],
    correctAnswer: 0,
    explanation: "By the Dirichlet convergence theorem, at a jump discontinuity the series converges to the average of the one-sided limits, $\\tfrac{1}{2}[f(x_0^-)+f(x_0^+)]$. Here $f(0^-)=1$ and $f(0^+)=5$, so the series converges to $\\tfrac{1}{2}(1+5)=3$.\n\nTaking only the left-hand limit of $1$ ignores the contribution from the right side of the jump.\n\nTaking only the right-hand limit of $5$ has the same defect in the opposite direction.\n\nSumming the two limits to get $6$ without dividing by two skips the averaging step that the convergence theorem requires."
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
    text: "A function has period $16$. Starting from the substitution $v = \\pi x/L$ that rescales the period-$2\\pi$ formula $b_n = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} f\\sin(nv)\\,dv$, first find $L$, then state the resulting formula for $b_n$.",
    options: [
      "$L=8$, giving $b_n = \\dfrac{1}{8}\\displaystyle\\int_{-8}^{8} f\\sin\\left(\\dfrac{n\\pi x}{8}\\right)dx$",
      "$L=16$, using the full period as $L$, giving $b_n = \\dfrac{1}{16}\\displaystyle\\int_{-16}^{16} f\\sin\\left(\\dfrac{n\\pi x}{16}\\right)dx$",
      "$L=8$, but keeping the prefactor $1/\\pi$ unchanged, giving $b_n = \\dfrac{1}{\\pi}\\displaystyle\\int_{-8}^{8} f\\sin(nx)\\,dx$",
      "$L=8$, giving $b_n = \\dfrac{1}{16}\\displaystyle\\int_{-8}^{8} f\\sin\\left(\\dfrac{n\\pi x}{8}\\right)dx$, with an extra factor of two in the prefactor"
    ],
    correctAnswer: 0,
    explanation: "The half-period is $L = 16/2 = 8$. Rescaling with $v=\\pi x/L$ replaces the prefactor $1/\\pi$ by $1/L=1/8$ and the argument $nv$ by $n\\pi x/L = n\\pi x/8$, giving $b_n = \\dfrac{1}{8}\\displaystyle\\int_{-8}^{8}f\\sin\\left(\\dfrac{n\\pi x}{8}\\right)dx$.\n\nTaking $L=16$ mistakes the full period for the half-period, the standard trap, which changes both the prefactor and the harmonic argument.\n\nKeeping the prefactor as $1/\\pi$ and the argument as $nx$ fails to rescale either quantity for the new period.\n\nInserting an extra factor of two in the prefactor, giving $1/16$ instead of $1/8$, does not follow from the substitution and understates the true coefficient."
  },
  {
    id: "mth302_ch11_009",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "Consider $f(x) = 4\\cos(2x) + 1$ on $(-\\pi, \\pi)$, extended periodically with period $2\\pi$. Since $\\cos(2x)$ and the constant $1$ are both even functions, $f(-x) = f(x)$ for every $x$. Which statement about the Fourier coefficients of $f$ is correct?",
    options: [
      "All the sine coefficients $b_n$ vanish, leaving a pure cosine series",
      "All the cosine coefficients $a_n$ vanish, leaving a pure sine series",
      "The constant term $a_0$ is zero, since a nonzero constant added to a cosine cannot survive",
      "Neither family vanishes, since adding a constant to a cosine destroys the even symmetry"
    ],
    correctAnswer: 0,
    explanation: "Because $f$ is a sum of two even functions, $f$ itself is even, and an even function times $\\sin(nx)$ is odd, so every sine-related integral over the symmetric interval vanishes, leaving a pure cosine series plus the constant term, which uses the same even integrand structure as the $a_n$.\n\nClaiming the cosine coefficients vanish instead describes the odd case, not this even function.\n\nClaiming $a_0$ is zero is false, since the mean value of $f$ over a period is exactly the added constant $1$, which survives the averaging.\n\nClaiming neither family vanishes misunderstands parity, since adding a constant to an even function keeps the sum even rather than destroying its symmetry."
  },
  {
    id: "mth302_ch11_010",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For heat flow governed by $u_t = \\kappa u_{xx}$ on the rod $0 < x < 6$ with both ends held at zero temperature, $u(0,t) = u(6,t) = 0$, and a general initial temperature profile $u(x,0) = f(x)$, the profile must be expanded in eigenfunctions $\\sin(n\\pi x/L)$. What value of $L$ should be used here, and why?",
    options: [
      "$L=6$, since the eigenfunctions must vanish at both $x=0$ and $x=6$ exactly as the boundary conditions require",
      "$L=3$, halving the rod length as though $6$ were a full period rather than the interval on which the eigenfunctions are defined",
      "$L=12$, doubling the rod length before substituting into the eigenfunction formula",
      "$L=2\\pi$, applying the standard period-$2\\pi$ Fourier series without adjusting for the rod's actual length"
    ],
    correctAnswer: 0,
    explanation: "The eigenfunctions of $X''+\\lambda X=0$ with $X(0)=X(6)=0$ are $\\sin(n\\pi x/6)$, so $L$ is simply the length of the interval on which the boundary value problem is posed, giving $L=6$ directly, since these eigenfunctions must vanish at both endpoints of the rod.\n\nHalving to $L=3$ wrongly imports the half-period rule from rescaling a period-$2L$ Fourier series, but this rod-length problem never involves a period being cut in half.\n\nDoubling to $L=12$ has no basis in either the boundary conditions or the eigenfunction derivation.\n\nUsing $L=2\\pi$ ignores the specific length of the rod entirely and substitutes an unrelated constant."
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
    text: "A function of period $8$ is defined by $f(x) = 4$ on $(-1, 1)$ and $f(x) = 0$ elsewhere on $(-4, 4)$. First find $L$, then compute $a_0$, and finally state the constant term $a_0/2$ of its Fourier series.",
    options: [
      "$L=4$, $a_0=2$, so the constant term equals $1$",
      "$L=8$, using the full period as $L$, giving $a_0=1$ and a constant term of $1/2$",
      "$L=4$, $a_0=2$, but writing the constant term as $a_0$ itself, equal to $2$",
      "$L=4$, $a_0=8$, forgetting to divide by $L$ at all, so the constant term equals $4$"
    ],
    correctAnswer: 0,
    explanation: "The period is $8$, so the half-period is $L=4$. Then $a_0 = \\dfrac{1}{4}\\displaystyle\\int_{-1}^{1}4\\,dx = \\dfrac{1}{4}(8) = 2$, and the constant term is $a_0/2 = 1$, the mean value of $f$ spread over the full period.\n\nTaking $L=8$ mistakes the full period for the half-period, halving the prefactor and so halving both $a_0$ and the resulting constant term from their true values.\n\nWriting the constant term as $a_0=2$ itself skips the required halving, doubling the true constant term.\n\nDropping the prefactor $1/L$ entirely leaves the raw integral value of $8$ in place of $a_0=2$, a fourfold overstatement that then still needs, but does not receive, halving."
  },
  {
    id: "mth302_ch11_016",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "Let $f(x) = 7\\cos(4x)$ on $(-\\pi, \\pi)$, extended periodically with period $2\\pi$. Using $a_n = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} f(x)\\cos(nx)\\,dx$ together with the orthogonality relation $\\displaystyle\\int_{-\\pi}^{\\pi}\\cos(mx)\\cos(nx)\\,dx = 0$ for $m \\neq n$, what is $a_4$?",
    options: [
      "$7$",
      "$7/2$, halving the value as though the constant-term convention applied to $a_4$ as well",
      "$14$, doubling the value by using a prefactor of $2/\\pi$ instead of $1/\\pi$",
      "$0$, since orthogonality forces every cosine coefficient to vanish, including at matching indices"
    ],
    correctAnswer: 0,
    explanation: "The orthogonality relations kill every term except the one where the index matches, so $a_4 = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} 7\\cos^2(4x)\\,dx = \\dfrac{7}{\\pi}(\\pi) = 7$, using $\\int_{-\\pi}^{\\pi}\\cos^2(nx)\\,dx=\\pi$ for nonzero integer $n$.\n\nHalving to $7/2$ wrongly imports the $a_0/2$ convention, but that halving applies only to the constant term, not to $a_n$ for $n\\geq 1$.\n\nDoubling to $14$ uses the wrong prefactor; the definition here uses $1/\\pi$, not $2/\\pi$.\n\nClaiming every cosine coefficient vanishes misreads orthogonality, which only kills mismatched indices, not the matching one that actually produces the nonzero coefficient."
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
    text: "Consider $f(x) = x^2 + 1$ on $(-\\pi, \\pi)$, extended periodically. Since $x^2$ and the constant $1$ are both even, $f(-x) = f(x)$ for every $x$. Which coefficients vanish as a result?",
    options: [
      "All the sine coefficients $b_n$",
      "All the cosine coefficients $a_n$",
      "Only the constant term $a_0$, while the rest survive unchanged",
      "None of them, since adding a constant changes the parity of $x^2$"
    ],
    correctAnswer: 0,
    explanation: "Since $f$ is even, being a sum of two even functions, it is orthogonal to every sine on the symmetric interval, so every $b_n$ vanishes and the series is a pure cosine series plus the constant term.\n\nClaiming the cosine coefficients vanish instead describes the odd case, not this even function.\n\nClaiming only $a_0$ vanishes is backwards, since $a_0$ is nonzero here, the mean value of $x^2+1$ over a period being positive, while it is the sine coefficients that vanish.\n\nClaiming none vanish misunderstands parity, since adding an even constant to the even function $x^2$ keeps the sum even rather than removing its symmetry."
  },
  {
    id: "mth302_ch11_023",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "Consider $g(x) = \\sin(2x) + 3x$ on $(-\\pi, \\pi)$, extended periodically. Since $\\sin(2x)$ and $3x$ are both odd, $g(-x) = -g(x)$ for every $x$. Which coefficients vanish as a result?",
    options: [
      "$a_0$ and all the cosine coefficients $a_n$",
      "All the sine coefficients $b_n$",
      "Only $a_0$, while the cosine coefficients survive unchanged",
      "Only the even-indexed coefficients, regardless of family"
    ],
    correctAnswer: 0,
    explanation: "Since $g$ is odd, being a sum of two odd functions, it is orthogonal to the constant and to every cosine on the symmetric interval, so $a_0$ and every $a_n$ vanish, leaving a pure sine series.\n\nClaiming the sine coefficients vanish instead describes the even case, not this odd function.\n\nClaiming only $a_0$ vanishes understates the result, since every cosine coefficient $a_n$ vanishes along with it.\n\nClaiming only even-indexed coefficients vanish misidentifies the distinction, which is by family, cosine versus sine, not by index parity."
  },
  {
    id: "mth302_ch11_024",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "A function of period $4$ is defined by $f(x) = -2$ on $(-2, 0)$ and $f(x) = 6$ on $(0, 2)$, repeated periodically. Using periodicity to find the one-sided limits at $x = 2$, what value does the Fourier series converge to there?",
    options: [
      "$2$, the average of $6$ approached from the left and $-2$ approached from the right using periodicity",
      "$6$, the value of $f$ immediately to the left of $x=2$",
      "$-2$, the value of $f$ immediately to the right of $x=2$ within the next period",
      "$4$, half the total jump measured as $6-(-2)$ without locating the two one-sided limits"
    ],
    correctAnswer: 0,
    explanation: "Since $f$ has period $4$, the point $x=2$ is also a jump point: approaching from the left within $(0,2)$ gives $f(2^-)=6$, while approaching from the right means entering the next period, where $x-4$ lies just inside $(-2,0)$, giving $f(2^+) = f(-2^+) = -2$. The Dirichlet convergence theorem gives the average of these one-sided limits, $\\tfrac{1}{2}(6+(-2)) = 2$.\n\nUsing only $6$, the left-hand limit, ignores the wraparound value on the other side of the jump.\n\nUsing only $-2$, the right-hand limit, has the same defect in the opposite direction.\n\nComputing half the difference $6-(-2)$ instead of half the sum confuses the jump size with the converged value, which is the midpoint, not half the gap."
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
    text: "A function has period $12$. Starting from the substitution $v = \\pi x/L$ that rescales the period-$2\\pi$ formula $b_n = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} f\\sin(nv)\\,dv$, first find $L$, then state the resulting formula for $b_n$.",
    options: [
      "$L=6$, giving $b_n = \\dfrac{1}{6}\\displaystyle\\int_{-6}^{6} f\\sin\\left(\\dfrac{n\\pi x}{6}\\right)dx$",
      "$L=12$, using the full period as $L$, giving $b_n = \\dfrac{1}{12}\\displaystyle\\int_{-12}^{12} f\\sin\\left(\\dfrac{n\\pi x}{12}\\right)dx$",
      "$L=6$, giving $b_n = \\dfrac{1}{6}\\displaystyle\\int_{-6}^{6} f\\cos\\left(\\dfrac{n\\pi x}{6}\\right)dx$, using cosine in place of sine",
      "$L=6$, giving $b_n = \\dfrac{1}{12}\\displaystyle\\int_{-6}^{6} f\\sin\\left(\\dfrac{n\\pi x}{6}\\right)dx$, halving the prefactor beyond what the substitution requires"
    ],
    correctAnswer: 0,
    explanation: "The half-period is $L=12/2=6$. Rescaling with $v=\\pi x/L$ replaces $1/\\pi$ by $1/L=1/6$ and the argument $nv$ by $n\\pi x/6$, giving $b_n = \\dfrac{1}{6}\\displaystyle\\int_{-6}^{6}f\\sin\\left(\\dfrac{n\\pi x}{6}\\right)dx$.\n\nTaking $L=12$ mistakes the full period for the half-period, changing both the prefactor and the harmonic incorrectly.\n\nSwitching to cosine gives the formula for $a_n$, not $b_n$.\n\nHalving the prefactor to $1/12$ after already finding the correct $L=6$ introduces an extra, unjustified factor of one half."
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
    text: "A function $g(x)$ is periodic with period $2\\pi$. On one period it oscillates so rapidly near $x = 0$ that it has infinitely many local maxima and minima there, although it remains bounded and single-valued everywhere else on the period. Does $g(x)$ satisfy the Dirichlet conditions required for its Fourier series to converge?",
    options: [
      "No, because the Dirichlet conditions require only finitely many maxima and minima in a period",
      "Yes, because being bounded and single-valued is all that Dirichlet's conditions require",
      "Yes, because periodicity by itself guarantees all of Dirichlet's conditions",
      "No, because Dirichlet's conditions also require $g$ to be infinitely differentiable, which it is not"
    ],
    correctAnswer: 0,
    explanation: "The Dirichlet conditions require periodicity, single-valuedness, piecewise continuity, and only finitely many maxima, minima and discontinuities within one period. Infinitely many extrema near a single point violates that finiteness requirement directly, regardless of boundedness.\n\nBeing bounded and single-valued is necessary but not sufficient, since the finite-extrema requirement is a separate condition that this function fails.\n\nPeriodicity alone does not guarantee the other three conditions, which must be checked independently.\n\nInfinite differentiability is never one of the Dirichlet conditions, so failing it is not the actual reason this function fails to qualify."
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
    text: "What is the fundamental period of $f(x) = \\sin(2x) + \\cos(4x)$?",
    options: [
      "$\\pi$, the smallest value of $T$ for which both $\\sin(2x)$ and $\\cos(4x)$ individually repeat",
      "$2\\pi$, the period that both terms would share if $\\sin(2x)$ were instead $\\sin x$",
      "$\\pi/2$, the period of $\\cos(4x)$ alone, since it is the higher-frequency term",
      "$2\\pi/3$, dividing $2\\pi$ by the sum of the two frequencies $2$ and $4$"
    ],
    correctAnswer: 0,
    explanation: "The term $\\sin(2x)$ has period $\\pi$ and $\\cos(4x)$ has period $\\pi/2$. The fundamental period of the sum is the smallest $T$ that is an integer multiple of both individual periods, and $T=\\pi$ works since $\\pi/\\pi=1$ and $\\pi/(\\pi/2)=2$ are both integers, so $\\pi$ is the fundamental period.\n\nUsing $2\\pi$ would be correct only if the first term were $\\sin x$ rather than $\\sin(2x)$; here it overshoots the true smallest common period.\n\nUsing $\\pi/2$, the period of $\\cos(4x)$ alone, ignores that $\\sin(2x)$ does not repeat that quickly, since $\\sin(2(x+\\pi/2)) = \\sin(2x+\\pi) = -\\sin(2x) \\neq \\sin(2x)$.\n\nDividing $2\\pi$ by the sum of the frequencies has no basis in how periods of a sum combine; periods combine through a common multiple, not through the sum of frequencies."
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
    text: "A period-$2\\pi$ Fourier series is being rescaled to apply to a function of period $22$, using a substitution $v = Kx$ chosen so that $v$ runs over $2\\pi$ exactly when $x$ runs over one full period. First find $L$, then find $K$, and state the resulting substitution.",
    options: [
      "$L=11$, $K=\\pi/11$, so $v = \\pi x/11$",
      "$L=22$, using the full period as $L$ instead of the half-period, so $v = \\pi x/22$",
      "$L=11$, inverting the ratio to get $K=11/\\pi$, so $v = 11x/\\pi$",
      "$L=11$, omitting the factor of $\\pi$ from $K$, so $v = x/11$"
    ],
    correctAnswer: 0,
    explanation: "The period is $22$, so $L=11$. Choosing $K$ so that $v=2\\pi$ when $x=2L=22$ gives $2\\pi = K(22)$, so $K=\\pi/11$, and the substitution is $v = \\pi x/11$.\n\nTaking $L=22$ mistakes the full period for the half-period, the standard trap, doubling the denominator in the substitution.\n\nInverting the ratio to $K=11/\\pi$ rescales in the wrong direction entirely, producing dimensions that do not match the original period-$2\\pi$ formulas.\n\nOmitting the factor of $\\pi$ leaves the harmonics unnormalised relative to the trigonometric functions they are meant to rescale."
  },
  {
    id: "mth302_ch11_038",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "A student correctly computes $a_0 = 8$ for a function of period $2\\pi$ using $a_0 = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} f(x)\\,dx$, but then writes the constant term of the Fourier series as $a_0 = 8$ instead of $a_0/2$. By how much, and in which direction, is the resulting constant term wrong?",
    options: [
      "Too large by $4$, since the correct constant term is $a_0/2 = 4$, not $a_0 = 8$",
      "Too small by $4$, since the correct constant term should have been $12$",
      "Too large by $8$, since the correct constant term should have used $2a_0 = 16$",
      "Not wrong at all, since $a_0$ and $a_0/2$ represent the same quantity"
    ],
    correctAnswer: 0,
    explanation: "Since $a_0$ carries the same $1/\\pi$ prefactor as $a_n$ and $b_n$, the constant term of the series is $a_0/2 = 8/2 = 4$, not $a_0$ itself. Writing $8$ in place of $4$ overstates the constant term by $4$.\n\nClaiming the error makes the term too small, or that the correct value is $12$, reverses the direction of the mistake and invents a value with no basis in the computation.\n\nClaiming the correct constant term should have used $2a_0=16$ compounds the error rather than correcting it, moving further from the true value of $4$.\n\nClaiming there is no error at all denies the well-known distinction between $a_0$ and $a_0/2$ in this convention, which are not the same quantity."
  }
];

export default mth302Chapter11;
