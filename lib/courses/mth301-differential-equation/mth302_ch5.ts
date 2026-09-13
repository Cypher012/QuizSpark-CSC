import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter5: QuestionV2[] = [
  {
    id: "mth302_ch5_001",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the correct trial particular solution for $y'' + y = \\cos x$?",
    options: [
      "$A\\cos x$",
      "$A\\cos x + B\\sin x$ with no factor of $x$",
      "$x(A\\cos x + B\\sin x)$",
      "$x^2(A\\cos x + B\\sin x)$ using a squared factor"
    ],
    correctAnswer: 2,
    explanation: "The complementary function is $C_1\\cos x + C_2\\sin x$, which already contains the naive trial $A\\cos x + B\\sin x$, so the whole trial must be multiplied by $x$ once to avoid duplicating a term already in the complementary solution, giving $x(A\\cos x + B\\sin x)$.\n\n$A\\cos x$ omits the sine term that undetermined coefficients always requires alongside cosine forcing.\n\n$A\\cos x + B\\sin x$ is exactly the trial that duplicates the complementary function and produces a contradiction when substituted.\n\n$x^2(A\\cos x + B\\sin x)$ over-corrects; the multiplication by $x$ is applied once per repetition, and here the root $\\pm i$ is simple, not repeated."
  },
  {
    id: "mth302_ch5_002",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the correct trial particular solution for $y'' - 3y' + 2y = e^x$?",
    options: [
      "$Ae^x$",
      "$Ae^{2x}$",
      "$Ax^2e^x$",
      "$Axe^x$"
    ],
    correctAnswer: 3,
    explanation: "The complementary function $y_c = C_1e^x + C_2e^{2x}$ already contains $e^x$, so the trial must be multiplied by $x$ once to avoid resonance, giving $Axe^x$. Using $Ae^x$ alone would yield the contradiction $0 = e^x$ when substituted, which is a quick way to detect resonance without memorizing the rule outright.\n\n$Ae^x$ duplicates a term already present in the complementary function.\n\n$Ae^{2x}$ matches the other complementary term instead of the actual forcing function $e^x$.\n\n$Ax^2e^x$ over-corrects, since the root $r = 1$ is simple, not repeated."
  },
  {
    id: "mth302_ch5_003",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is a particular solution of $y'' - y = x^2$?",
    options: [
      "$x^2$",
      "$-x^2 + 2$",
      "$-x^2 - 2$",
      "$x^2 + 2$"
    ],
    correctAnswer: 2,
    explanation: "Trying $y_p = ax^2 + bx + c$ gives $y_p'' - y_p = 2a - ax^2 - bx - c = x^2$, which requires $-a = 1$, $-b = 0$, and $2a - c = 0$, giving $a = -1$, $b = 0$, and $c = -2$, so $y_p = -x^2 - 2$. The constant term is forced by the second derivative $2a$, which is exactly why the full polynomial, not just the $ax^2$ term, must be tried.\n\n$x^2$ omits the required constant term entirely.\n\n$-x^2 + 2$ gets the sign of the constant term wrong.\n\n$x^2 + 2$ gets the sign of the leading term wrong."
  },
  {
    id: "mth302_ch5_004",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' + y = \\tan x$ on $0 < x < \\pi/2$, solved by variation of parameters with $y_1 = \\cos x$, $y_2 = \\sin x$, and Wronskian $W = y_1y_2' - y_1'y_2 = 1$, the formula for $y_p$ requires the integral $\\int \\dfrac{y_1 g}{W}\\,dx$ where $g(x) = \\tan x$ is the forcing term in standard form. What is this integral, up to a constant?",
    options: [
      "$-\\cos x$",
      "$\\cos x$, with the sign flipped",
      "$x$",
      "$-\\sin x$, the derivative rather than the antiderivative"
    ],
    correctAnswer: 0,
    explanation: "Since $y_1 = \\cos x$, the integrand simplifies first: $y_1g/W = \\cos x\\tan x/1 = \\cos x \\cdot \\dfrac{\\sin x}{\\cos x} = \\sin x$, and $\\int \\sin x\\,dx = -\\cos x + C$.\n\n$\\cos x$ has the sign flipped from the correct antiderivative of $\\sin x$.\n\n$x$ comes from mistakenly treating $\\tan x$ as $\\sec x$, so that $\\cos x\\sec x$ simplifies to $1$ instead of $\\sin x$, and integrating $1$ gives $x$.\n\n$-\\sin x$ is the derivative of $\\cos x$, not its antiderivative; differentiating instead of integrating is the underlying error."
  },
  {
    id: "mth302_ch5_005",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the general solution of $y'' - y' = e^{2x}$?",
    options: [
      "$C_1 + C_2e^x + \\dfrac{1}{2}e^{2x}$",
      "$C_1 + C_2e^x + e^{2x}$ without the factor one half",
      "$C_1e^x + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$ with the wrong complementary function",
      "$C_1 + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$"
    ],
    correctAnswer: 0,
    explanation: "The characteristic equation $r^2 - r = 0$ gives roots $r = 0$ and $r = 1$, so $y_c = C_1 + C_2e^x$. Trying $y_p = Ae^{2x}$ gives $4A - 2A = 1$, so $A = 1/2$, and since $r = 2$ is not a characteristic root there is no resonance to worry about.\n\n$C_1 + C_2e^x + e^{2x}$ omits the coefficient $1/2$ found from substitution.\n\n$C_1e^x + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$ uses the wrong pair of roots for the complementary function.\n\n$C_1 + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$ uses the wrong sign on the second exponent in the complementary function."
  },
  {
    id: "mth302_ch5_006",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the general solution of $y'' = e^x + \\sin x$?",
    options: [
      "$e^x - \\sin x + C_1x + C_2$",
      "$e^x + \\sin x + C_1x + C_2$",
      "$e^x - \\cos x + C_1x + C_2$",
      "$e^x - \\sin x + C_1$"
    ],
    correctAnswer: 0,
    explanation: "Setting $p = y'$ gives $p' = e^x + \\sin x$, so $p = e^x - \\cos x + C_1$, and integrating once more gives $y = e^x - \\sin x + C_1x + C_2$, since the integral of $-\\cos x$ is $-\\sin x$.\n\n$e^x + \\sin x + C_1x + C_2$ uses the wrong sign on the sine term.\n\n$e^x - \\cos x + C_1x + C_2$ stops one integration too early, leaving $p$ rather than the fully integrated $y$.\n\n$e^x - \\sin x + C_1$ has only one arbitrary constant, which is impossible for a second-order equation that requires two."
  },
  {
    id: "mth302_ch5_007",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "In solving the initial value problem $y'' + 3y' + 2y = \\sin 2x$, $y(0) = 1$, $y'(0) = 0$, the constants in $y_c = Ae^{-x} + Be^{-2x}$ must be found by applying the initial conditions to which expression?",
    options: [
      "$y_c$ only",
      "$y_p$ only",
      "$y = y_c + y_p$",
      "Either $y_c$ or $y$, whichever is more convenient"
    ],
    correctAnswer: 2,
    explanation: "The initial conditions constrain the actual solution to the differential equation, which is the full sum $y = y_c + y_p$, so both $y_p(0)$ and $y_p'(0)$ must be included when solving for $A$ and $B$; ignoring the particular solution's contribution at $x = 0$ gives incorrect values for the constants.\n\n$y_c$ only ignores the particular solution's own contribution at the initial point, which is the most common error in this type of problem.\n\n$y_p$ only ignores the complementary solution entirely, which cannot be correct since it carries the free constants being solved for.\n\nEither $y_c$ or $y$ wrongly suggests the choice does not matter, when only applying the conditions to the full solution $y$ gives the correct constants."
  },
  {
    id: "mth302_ch5_008",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - 4y = 8x^2$, the characteristic equation gives $y_c = C_1e^{2x} + C_2e^{-2x}$, and substituting the trial $y_p = ax^2 + bx + c$ gives $-4ax^2 - 4bx + (2a - 4c) = 8x^2$. Using the structure $y = y_c + y_p$, what is the general solution?",
    options: [
      "$y = C_1e^{2x} + C_2e^{-2x} - 2x^2 - 1$",
      "$y = C_1e^{2x} + C_2e^{-2x} + 2x^2 + 1$, reversing the sign of every term",
      "$y = -2x^2 - 1$",
      "$y = C_1e^{2x} + C_2e^{-2x} - 2x^2$, dropping the constant term found from $2a-4c=0$"
    ],
    correctAnswer: 0,
    explanation: "Matching coefficients: $-4a = 8$ gives $a = -2$; $-4b = 0$ gives $b = 0$; $2a - 4c = 0$ gives $c = a/2 = -1$, so $y_p = -2x^2 - 1$. The general solution keeps the complementary function together with this particular solution, $y = C_1e^{2x} + C_2e^{-2x} - 2x^2 - 1$, since $y = y_c + y_p$ always keeps both pieces together.\n\n$y = C_1e^{2x} + C_2e^{-2x} + 2x^2 + 1$ reverses the sign of every term in $y_p$.\n\n$y = -2x^2 - 1$ drops the complementary function entirely, leaving no arbitrary constants even though this is supposed to be a general solution.\n\n$y = C_1e^{2x} + C_2e^{-2x} - 2x^2$ loses the constant term $c = -1$ found from $2a - 4c = 0$."
  },
  {
    id: "mth302_ch5_009",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - 5y' + 6y = 6e^{4x}$, the characteristic roots are $2$ and $3$, so $e^{4x}$ does not appear in $y_c$. Using the trial $y_p = Ae^{4x}$, substitution gives $(16A - 20A + 6A)e^{4x} = 6e^{4x}$. What is $y_p$?",
    options: [
      "$3e^{4x}$",
      "$6e^{4x}$, copying the forcing coefficient directly",
      "$-3e^{4x}$, with the sign of $A$ reversed",
      "$3xe^{4x}$, wrongly treating this as a resonance case"
    ],
    correctAnswer: 0,
    explanation: "Simplifying gives $2Ae^{4x} = 6e^{4x}$, so $A = 3$ and $y_p = 3e^{4x}$, with no factor of $x$ needed since $4$ is not a characteristic root.\n\n$6e^{4x}$ copies the forcing coefficient directly instead of solving $2A=6$ for $A$.\n\n$-3e^{4x}$ has the sign of $A$ reversed.\n\n$3xe^{4x}$ wrongly introduces a resonance factor of $x$, but $e^{4x}$ does not duplicate either $e^{2x}$ or $e^{3x}$ in $y_c$."
  },
  {
    id: "mth302_ch5_010",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - y = x^3$, using the full polynomial trial $y_p = ax^3 + bx^2 + cx + d$, substitution gives $-ax^3 - bx^2 + (6a - c)x + (2b - d) = x^3$. What are the coefficients?",
    options: [
      "$a=-1,\\ b=0,\\ c=-6,\\ d=0$",
      "$a=-1,\\ b=0,\\ c=0,\\ d=0$, leaving the linear term from $6a$ unmatched",
      "$a=1,\\ b=0,\\ c=6,\\ d=0$, reversing the sign of every nonzero coefficient",
      "$a=-1,\\ b=0,\\ c=6,\\ d=0$"
    ],
    correctAnswer: 0,
    explanation: "Matching $x^3$ gives $-a=1$ so $a=-1$; matching $x^2$ gives $-b=0$ so $b=0$; matching $x$ gives $6a-c=0$ so $c=6a=-6$; matching constants gives $2b-d=0$ so $d=0$.\n\n$a=-1,\\ b=0,\\ c=0,\\ d=0$ ignores the linear term generated by $6a$ and leaves $c$ unmatched.\n\n$a=1,\\ b=0,\\ c=6,\\ d=0$ reverses the sign of every nonzero coefficient.\n\n$a=-1,\\ b=0,\\ c=6,\\ d=0$ keeps $a$ correct but gets the sign of $c$ backwards."
  },
  {
    id: "mth302_ch5_011",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' + 4y = 3\\sin 3x$, the trial $y_p = A\\cos 3x + B\\sin 3x$ gives, after substitution, $-5A\\cos 3x - 5B\\sin 3x = 3\\sin 3x$. What is $y_p$?",
    options: [
      "$-\\dfrac{3}{5}\\sin 3x$",
      "$\\dfrac{3}{5}\\sin 3x$",
      "$-\\dfrac{3}{5}\\cos 3x$, assigning the coefficient to the wrong trig term",
      "$-\\dfrac{3}{5}x\\sin 3x$, wrongly inserting a resonance factor of $x$"
    ],
    correctAnswer: 0,
    explanation: "Matching cosine terms gives $-5A=0$ so $A=0$; matching sine terms gives $-5B=3$ so $B=-3/5$, giving $y_p = -\\dfrac{3}{5}\\sin 3x$.\n\n$\\dfrac{3}{5}\\sin 3x$ has the sign of $B$ reversed.\n\n$-\\dfrac{3}{5}\\cos 3x$ assigns the solved coefficient to the wrong trigonometric term, when $A$ was found to be $0$.\n\n$-\\dfrac{3}{5}x\\sin 3x$ wrongly applies a resonance factor of $x$, but the roots $\\pm 2i$ do not match the forcing frequency $3$."
  },
  {
    id: "mth302_ch5_012",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - 4y' + 4y = 5e^{2x}$, the repeated root $r=2$ gives $y_c = C_1e^{2x} + C_2xe^{2x}$, so both $e^{2x}$ and $xe^{2x}$ already appear in $y_c$. Using the correctly modified trial $y_p = Ax^2e^{2x}$, substitution gives $2Ae^{2x} = 5e^{2x}$. What is $y_p$?",
    options: [
      "$\\dfrac{5}{2}x^2e^{2x}$",
      "$5x^2e^{2x}$, copying the forcing coefficient directly",
      "$\\dfrac{5}{2}xe^{2x}$, using only one factor of $x$",
      "$-\\dfrac{5}{2}x^2e^{2x}$, with the sign of $A$ reversed"
    ],
    correctAnswer: 0,
    explanation: "Since both $e^{2x}$ and $xe^{2x}$ duplicate terms in $y_c$, the trial is multiplied by $x$ twice, giving $Ax^2e^{2x}$; solving $2A=5$ gives $A=\\dfrac{5}{2}$.\n\n$5x^2e^{2x}$ copies the forcing coefficient directly instead of solving $2A=5$.\n\n$\\dfrac{5}{2}xe^{2x}$ uses only one factor of $x$, as if the root were simple rather than repeated.\n\n$-\\dfrac{5}{2}x^2e^{2x}$ has the sign of $A$ reversed."
  },
  {
    id: "mth302_ch5_013",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Why does the naive trial $A\\cos x + B\\sin x$ fail for $y'' + y = \\cos x$?",
    options: [
      "It already lies in $y_c$, so substituting gives $0 = \\cos x$",
      "It has too few undetermined coefficients",
      "It is not differentiable twice",
      "It produces a polynomial instead"
    ],
    correctAnswer: 0,
    explanation: "The complementary function is exactly $C_1\\cos x + C_2\\sin x$, so the naive trial is annihilated by the operator and yields the impossible identity $0 = \\cos x$.\n\nThe count of coefficients is not the problem; both are present.\n\nTrigonometric functions are infinitely differentiable.\n\nNo polynomial arises from a trigonometric trial."
  },
  {
    id: "mth302_ch5_014",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' + y = \\cos x$, what is the correct trial particular solution?",
    options: [
      "$x(A\\cos x + B\\sin x)$",
      "$A\\cos x + B\\sin x$",
      "$x^2(A\\cos x + B\\sin x)$",
      "$Ax\\cos x$ omitting the sine term entirely"
    ],
    correctAnswer: 0,
    explanation: "Because the naive trial duplicates $y_c$, the whole trial is multiplied by $x$, giving $x(A\\cos x + B\\sin x)$.\n\nThe unmodified trial is precisely the one that fails.\n\nA factor $x^2$ would be needed only for a double duplication, which does not occur here.\n\nDropping the sine term leaves the trial unable to match the equation."
  },
  {
    id: "mth302_ch5_015",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - 6y' + 9y = 4e^{3x}$, the characteristic equation has the repeated root $r=3$, so $y_c = C_1e^{3x} + C_2xe^{3x}$. Using the correctly modified trial $y_p = Ax^2e^{3x}$, substitution gives $2Ae^{3x} = 4e^{3x}$. What is $y_p$?",
    options: [
      "$2x^2e^{3x}$",
      "$4x^2e^{3x}$, copying the forcing coefficient directly",
      "$2xe^{3x}$, using only one factor of $x$",
      "$2x^2e^{-3x}$"
    ],
    correctAnswer: 0,
    explanation: "Solving $2A=4$ gives $A=2$, so $y_p = 2x^2e^{3x}$, with the factor $x^2$ needed because the root $r=3$ is repeated.\n\n$4x^2e^{3x}$ copies the forcing coefficient directly instead of solving $2A=4$.\n\n$2xe^{3x}$ uses only one factor of $x$, as if $r=3$ were a simple root instead of a repeated one.\n\n$2x^2e^{-3x}$ has the wrong sign in the exponent, mismatching the repeated root $r=3$."
  },
  {
    id: "mth302_ch5_016",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "In variation of parameters, $y_p = C_1(x)y_1 + C_2(x)y_2$ is used with which imposed conditions?",
    options: [
      "$C_1'y_1 + C_2'y_2 = 0$ and $C_1'y_1' + C_2'y_2' = g$",
      "$C_1'y_1 + C_2'y_2 = g$ and $C_1'y_1' + C_2'y_2' = 0$",
      "$C_1' = C_2'$ and $y_1 = y_2$",
      "$C_1'y_1' + C_2'y_2' = 0$ only"
    ],
    correctAnswer: 0,
    explanation: "The first condition removes the second derivatives of the coefficient functions, and the second matches the forcing term, giving a solvable pair.\n\nSwapping the right-hand sides destroys the cancellation the method relies on.\n\nForcing the coefficients or the solutions to be equal contradicts independence.\n\nA single condition cannot determine two unknown functions."
  },
  {
    id: "mth302_ch5_017",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - y = \\dfrac{e^x}{x}$ on $x>0$, solved by variation of parameters with $y_1=e^x$, $y_2=e^{-x}$, and Wronskian $W=y_1y_2'-y_1'y_2=-2$, the formula for $y_p$ requires the integral $\\int \\dfrac{y_2g}{W}\\,dx$, where $g(x)=e^x/x$ is the forcing term. What is this integral, up to a constant?",
    options: [
      "$-\\dfrac{1}{2}\\ln x$",
      "$\\dfrac{1}{2}\\ln x$, with the sign flipped from the negative Wronskian",
      "$-2\\ln x$, multiplying by $W$ instead of dividing",
      "$-\\dfrac{1}{2}x$"
    ],
    correctAnswer: 0,
    explanation: "The integrand simplifies to $y_2g/W = e^{-x}(e^x/x)/(-2) = -\\dfrac{1}{2x}$, and $\\int -\\dfrac{1}{2x}\\,dx = -\\dfrac{1}{2}\\ln x + C$ for $x>0$.\n\n$\\dfrac{1}{2}\\ln x$ has the sign flipped, from mishandling the negative Wronskian.\n\n$-2\\ln x$ multiplies by $W=-2$ instead of dividing by it.\n\n$-\\dfrac{1}{2}x$ mistakes $\\int \\dfrac{1}{x}\\,dx$ for $\\int 1\\,dx$, dropping the logarithm."
  },
  {
    id: "mth302_ch5_018",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For the homogeneous solutions $y_1=\\cos 3x$ and $y_2=\\sin 3x$ of $y''+9y=0$, what is the Wronskian $W=y_1y_2'-y_1'y_2$ used in the variation-of-parameters formula?",
    options: [
      "$3$",
      "$-3$",
      "$\\cos^2 3x - \\sin^2 3x$",
      "$9$"
    ],
    correctAnswer: 0,
    explanation: "Here $y_1'=-3\\sin 3x$ and $y_2'=3\\cos 3x$, so $W = \\cos 3x(3\\cos 3x) - (-3\\sin 3x)(\\sin 3x) = 3\\cos^2 3x + 3\\sin^2 3x = 3$.\n\n$-3$ comes from a sign error in the term $y_1'y_2$.\n\n$\\cos^2 3x - \\sin^2 3x$ stops before applying the Pythagorean identity to reduce the expression to the constant $3$.\n\n$9$ mistakes the coefficient in the equation $y''+9y=0$ for the value of the Wronskian."
  },
  {
    id: "mth302_ch5_019",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $2y'' + y = \\tan x$, which forcing function $g$ is used in variation of parameters?",
    options: [
      "$\\tfrac{1}{2}\\tan x$",
      "$\\tan x$ read before standardising",
      "$2\\tan x$",
      "$\\tfrac{1}{2}\\sec^2 x$"
    ],
    correctAnswer: 0,
    explanation: "The formula assumes standard form $y'' + Py' + Qy = g$, so dividing by $2$ first gives $g = \\tfrac{1}{2}\\tan x$.\n\nUsing $\\tan x$ unchanged reads the forcing term before standardising.\n\nMultiplying by $2$ moves in the wrong direction.\n\nThe secant squared is the derivative of the tangent and does not appear here."
  },
  {
    id: "mth302_ch5_020",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - y' = \\dfrac{1}{1+e^x}$, the complementary solutions are $y_1=1$ and $y_2=e^x$, giving Wronskian $W=y_1y_2'-y_1'y_2=e^x$. Since $g(x)=\\dfrac{1}{1+e^x}$ cannot be matched by any finite trial family, variation of parameters must be used instead of undetermined coefficients. What is $c_2'(x) = \\dfrac{y_1g}{W}$?",
    options: [
      "$\\dfrac{1}{e^x(1+e^x)}$",
      "$\\dfrac{e^x}{1+e^x}$, multiplying by $W$ instead of dividing by it",
      "$\\dfrac{1}{1+e^x}$, omitting the Wronskian entirely",
      "$-\\dfrac{1}{e^x(1+e^x)}$, mixing up the sign meant for $c_1'$"
    ],
    correctAnswer: 0,
    explanation: "Substituting $y_1=1$ and $W=e^x$ gives $c_2' = \\dfrac{1\\cdot g}{e^x} = \\dfrac{1}{e^x(1+e^x)}$.\n\n$\\dfrac{e^x}{1+e^x}$ multiplies by $W$ instead of dividing by it.\n\n$\\dfrac{1}{1+e^x}$ omits the Wronskian entirely, as if $W$ were $1$.\n\n$-\\dfrac{1}{e^x(1+e^x)}$ introduces a sign that belongs to the formula for $c_1'$, not $c_2'$."
  },
  {
    id: "mth302_ch5_021",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - 3y' - 10y = 7e^{5x}$, first find the characteristic roots to check whether resonance occurs. What is the correct particular solution $y_p$?",
    options: [
      "$xe^{5x}$",
      "$e^{5x}$, failing to check for resonance at all",
      "$7xe^{5x}$, using the forcing coefficient instead of solving for $A$",
      "$x^2e^{5x}$"
    ],
    correctAnswer: 0,
    explanation: "The characteristic equation $r^2-3r-10=(r-5)(r+2)=0$ has roots $5$ and $-2$, so $e^{5x}$ duplicates the root $r=5$ and the trial must be modified to $y_p=Axe^{5x}$; substituting shows the $x$-dependent terms cancel, leaving $7Ae^{5x}=7e^{5x}$, so $A=1$ and $y_p=xe^{5x}$.\n\n$e^{5x}$ fails to check for resonance: since $r=5$ satisfies the characteristic equation, this naive trial duplicates $y_c$ and is invalid, even though it looks like the obvious first guess.\n\n$7xe^{5x}$ correctly modifies the trial by $x$ but skips solving for the coefficient, using the forcing coefficient $7$ directly instead of the true value $A=1$.\n\n$x^2e^{5x}$ over-corrects by treating $r=5$ as a repeated root, when $(r-5)(r+2)=0$ shows the root is simple."
  },
  {
    id: "mth302_ch5_022",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - 3y' + 2y = e^{x}$, why is $Ae^{x}$ an unsuitable trial?",
    options: [
      "$e^{x}$ already appears in $y_c$",
      "The forcing term is not exponential",
      "The equation has complex roots",
      "The trial has too many coefficients"
    ],
    correctAnswer: 0,
    explanation: "The characteristic roots are $1$ and $2$, so $y_c = C_1e^{x} + C_2e^{2x}$ already contains $e^{x}$ and the naive trial is annihilated.\n\nThe forcing term is plainly exponential.\n\nThe roots are real and distinct, not complex.\n\nA single coefficient is the minimum, not an excess."
  },
  {
    id: "mth302_ch5_023",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the corrected trial for $y'' - 3y' + 2y = e^{x}$?",
    options: [
      "$Axe^{x}$",
      "$Ae^{x}$ with no correcting factor applied",
      "$Ax^2e^{x}$",
      "$Ae^{2x}$"
    ],
    correctAnswer: 0,
    explanation: "Since $e^{x}$ duplicates one member of $y_c$ and the root is simple, one factor of $x$ suffices, giving $Axe^{x}$.\n\nThe unmodified exponential is the trial that fails.\n\nA squared factor would be needed only for a repeated root.\n\nChanging the exponent to $2x$ no longer matches the forcing term."
  },
  {
    id: "mth302_ch5_024",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Solve the initial value problem $y'' - y' - 6y = 4e^{-x}$ with $y(0)=0$ and $y'(0)=1$. The characteristic roots are $3$ and $-2$, giving $y_c = Ae^{3x}+Be^{-2x}$, and substituting $y_p=Ce^{-x}$ gives $C=-1$, so $y_p=-e^{-x}$. Applying the initial conditions correctly to the full solution $y=y_c+y_p$, what is the value of the constant $A$?",
    options: [
      "$\\dfrac{2}{5}$",
      "$\\dfrac{1}{5}$, from applying both conditions to $y_c$ alone",
      "$0$",
      "$-\\dfrac{2}{5}$"
    ],
    correctAnswer: 0,
    explanation: "Since $y_p(0)=-1$ and $y_p'(0)=1$, the conditions become $A+B-1=0$ and $3A-2B+1=1$, i.e. $A+B=1$ and $3A-2B=0$; solving gives $B=\\tfrac{3}{2}A$ and $A=\\tfrac{2}{5}$.\n\n$\\dfrac{1}{5}$ comes from applying both conditions to $y_c$ alone, using $A+B=0$ and $3A-2B=1$ and ignoring $y_p(0)$ and $y_p'(0)$ entirely, which is the standard slip on this type of problem.\n\n$0$ comes from ignoring $y_p(0)$ while still correctly including $y_p'(0)$, giving $A+B=0$ and $3A-2B=0$.\n\n$-\\dfrac{2}{5}$ comes from using the wrong sign for $y_p(0)$, treating it as $+1$ instead of $-1$, giving $A+B=-1$ and $3A-2B=0$."
  },
  {
    id: "mth302_ch5_025",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - y = x^2$, what is the trial particular solution?",
    options: [
      "$ax^2 + bx + c$",
      "$ax^2$",
      "$ax^2 + b$",
      "$ax^3 + bx^2 + cx + d$"
    ],
    correctAnswer: 0,
    explanation: "A degree-two forcing term requires the full quadratic trial with all three coefficients present.\n\nKeeping only the square leaves no way to match the constant produced by differentiation.\n\nOmitting the linear term leaves a gap in the polynomial.\n\nRaising the degree introduces a coefficient that must vanish."
  },
  {
    id: "mth302_ch5_026",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - y = x^2$, the trial gives $2a - ax^2 - bx - c = x^2$. What are the coefficients?",
    options: [
      "$a = -1$, $b = 0$, $c = -2$",
      "$a = 1$, $b = 0$, $c = 2$ with both signs reversed",
      "$a = -1$, $b = 1$, $c = -2$ with a nonzero linear term",
      "$a = -1$, $b = 0$, $c = 2$"
    ],
    correctAnswer: 0,
    explanation: "Matching $x^2$ gives $-a = 1$ so $a = -1$; matching $x$ gives $b = 0$; matching constants gives $2a - c = 0$, so $c = 2a = -2$.\n\nPositive values of $a$ and $c$ reverse both signs.\n\nA nonzero $b$ contradicts the absence of a linear term on the right.\n\nA positive $c$ mismatches the constant equation $2a - c = 0$."
  },
  {
    id: "mth302_ch5_027",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the general solution of $y'' - y = x^2$?",
    options: [
      "$y = Ae^{x} + Be^{-x} - x^2 - 2$",
      "$y = Ae^{x} + Be^{-x} + x^2 + 2$",
      "$y = A\\cos x + B\\sin x - x^2 - 2$",
      "$y = Ae^{x} + Be^{-x} - x^2$"
    ],
    correctAnswer: 0,
    explanation: "The complementary function is $Ae^{x} + Be^{-x}$ and the particular solution is $-x^2 - 2$, giving the stated sum.\n\nPositive signs on the polynomial part contradict the computed coefficients.\n\nTrigonometric terms would arise from $y'' + y = 0$, not $y'' - y = 0$.\n\nDropping the constant $-2$ leaves the constant terms unmatched."
  },
  {
    id: "mth302_ch5_028",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "If $y$ is missing from a second-order equation, which substitution is used?",
    options: [
      "$p = y'$ treated as a function of $x$",
      "$p = y'$ treated as a function of $y$",
      "$p = y$ treated as a function of $x$",
      "$p = y''$ treated as a constant"
    ],
    correctAnswer: 0,
    explanation: "With $y$ absent the equation involves only $y'$ and $y''$, so setting $p = y'$ as a function of $x$ reduces it directly to first order.\n\nTreating $p$ as a function of $y$ is the device used when $x$ is missing instead.\n\nSetting $p = y$ achieves no reduction.\n\nTreating the second derivative as constant discards the equation."
  },
  {
    id: "mth302_ch5_029",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "If $x$ is missing from a second-order equation, what does $y''$ become under $p = y'$?",
    options: [
      "$p\\dfrac{dp}{dy}$",
      "$\\dfrac{dp}{dx}$ as used when $y$ is missing",
      "$\\dfrac{dp}{dy}$",
      "$p\\dfrac{dp}{dx}$"
    ],
    correctAnswer: 0,
    explanation: "Treating $p$ as a function of $y$ and applying the chain rule gives $y'' = \\dfrac{dp}{dx} = \\dfrac{dp}{dy}\\dfrac{dy}{dx} = p\\dfrac{dp}{dy}$.\n\nThe plain derivative in $x$ is the form used when $y$ is missing.\n\nOmitting the factor $p$ drops the chain-rule contribution.\n\nCombining $p$ with a derivative in $x$ mixes the two cases."
  },
  {
    id: "mth302_ch5_030",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Reducing $y'' = e^{x} + \\sin x$ with $p = y'$ gives $p$ equal to what?",
    options: [
      "$e^{x} - \\cos x + C_1$",
      "$e^{x} + \\cos x + C_1$ with the cosine sign reversed",
      "$e^{x} - \\sin x + C_1$ obtained by differentiating",
      "$e^{x} + \\sin x + C_1$"
    ],
    correctAnswer: 0,
    explanation: "Integrating once gives $p = e^{x} - \\cos x + C_1$, since the integral of $\\sin x$ is $-\\cos x$.\n\nA positive cosine reverses the sign produced by integration.\n\nIntegrating $\\sin x$ to $-\\sin x$ confuses integration with differentiation.\n\nLeaving $\\sin x$ unchanged skips the integration of that term."
  },
  {
    id: "mth302_ch5_031",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' + 2y(y')^2 = 0$ with $p = y'$, which equation results?",
    options: [
      "$p\\dfrac{dp}{dy} + 2yp^2 = 0$",
      "$\\dfrac{dp}{dx} + 2yp^2 = 0$ using a derivative in $x$",
      "$p\\dfrac{dp}{dy} + 2y = 0$ dropping the square on $p$",
      "$\\dfrac{dp}{dy} + 2yp = 0$"
    ],
    correctAnswer: 0,
    explanation: "Since $x$ is missing, $y'' = p\\dfrac{dp}{dy}$, and substituting into the equation gives $p\\dfrac{dp}{dy} + 2yp^2 = 0$.\n\nUsing a derivative in $x$ ignores that $x$ is the missing variable here.\n\nDropping $p^2$ discards the square on $y'$ in the original equation.\n\nRemoving the leading factor $p$ misapplies the chain rule."
  },
  {
    id: "mth302_ch5_032",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Separating $\\dfrac{1}{p}\\dfrac{dp}{dy} = -2y$ gives which expression for $p$?",
    options: [
      "$p = Ke^{-y^2}$",
      "$p = Ke^{y^2}$",
      "$p = Ke^{-2y}$",
      "$p = -y^2 + K$"
    ],
    correctAnswer: 0,
    explanation: "Integrating gives $\\ln|p| = -y^2 + C$, and exponentiating yields $p = Ke^{-y^2}$.\n\nA positive exponent reverses the sign obtained on integration.\n\nThe exponent $-2y$ omits the integration of $-2y$ with respect to $y$.\n\nStopping at $-y^2 + K$ forgets that the left side integrated to a logarithm."
  },
  {
    id: "mth302_ch5_033",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For forcing term $e^{ax}\\sin bx$, what trial form is used?",
    options: [
      "$e^{ax}(A\\cos bx + B\\sin bx)$",
      "$Ae^{ax}\\sin bx$",
      "$e^{ax} + A\\cos bx + B\\sin bx$",
      "$A\\cos bx + B\\sin bx$"
    ],
    correctAnswer: 0,
    explanation: "A product forcing term takes the product of the corresponding trial forms, so the exponential multiplies the full paired trigonometric trial.\n\nKeeping only the sine omits the cosine that differentiation generates.\n\nAdding rather than multiplying the exponential misreads the structure of the forcing term.\n\nDropping the exponential leaves the trial unable to match the growth factor."
  },
  {
    id: "mth302_ch5_034",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Consider $xy'' - y' = x^2$ for $x>0$. Attempting the standard undetermined-coefficients trial $y_p = ax^2+bx+c$, appropriate for a degree-2 forcing term, gives after substitution $xy_p'' - y_p' = -b$, which would have to equal $x^2$ for every $x$. This is impossible for any constant $b$. What does this demonstrate, and how should the equation actually be solved?",
    options: [
      "Undetermined coefficients requires constant coefficients, which this equation lacks; since $y$ itself is missing, it should instead be solved by setting $p=y'$ and reducing to the first-order linear equation $xp'-p=x^2$",
      "The trial needs an extra factor of $x$ to remove resonance, since $-b=x^2$ signals that the trial overlaps with the complementary solution",
      "The contradiction is resolved by letting $b$ depend on $x$, so $b=x^2$ becomes an acceptable coefficient in undetermined coefficients",
      "Variation of parameters should be used instead, taking $y_1=1$ and $y_2=e^x$ as the fundamental set of the homogeneous equation $xy''-y'=0$"
    ],
    correctAnswer: 0,
    explanation: "The contradiction $-b=x^2$ arises because undetermined coefficients assumes constant coefficients, and here the coefficient of $y''$ is the variable $x$; since $y$ does not appear in the equation at all, the correct approach is the reduction $p=y'$, turning $xy''-y'=x^2$ into the first-order linear equation $xp'-p=x^2$, which can then be solved with an integrating factor.\n\nCalling this a resonance issue misreads the failure: resonance occurs when a trial term duplicates part of $y_c$, but here the trial fails structurally because $xy_p''$ is never quadratic in $x$ no matter what $b$ is.\n\nLetting $b$ vary with $x$ contradicts the entire premise of undetermined coefficients, which requires the trial's coefficients to be constants determined by matching, not functions of $x$.\n\n$y_1=1$ and $y_2=e^x$ solve the constant-coefficient equation $y''-y'=0$, not $xy''-y'=0$; the homogeneous equation here is itself missing $y$ and needs the same reduction technique, not a different pair of memorized solutions."
  },
  {
    id: "mth302_ch5_035",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the complementary function of $y'' - y' = e^{2x}$?",
    options: [
      "$C_1 + C_2e^{x}$",
      "$C_1e^{x} + C_2e^{-x}$",
      "$C_1e^{2x} + C_2$",
      "$C_1\\cos x + C_2\\sin x$"
    ],
    correctAnswer: 0,
    explanation: "The characteristic equation $r^2 - r = r(r - 1) = 0$ has roots $0$ and $1$, giving $C_1 + C_2e^{x}$.\n\nRoots $\\pm 1$ would require the equation $y'' - y = 0$.\n\nA root of $2$ does not satisfy $r^2 - r = 0$.\n\nTrigonometric terms require complex roots, which do not arise here."
  },
  {
    id: "mth302_ch5_036",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For forcing term $G(x) = 5$, a nonzero constant, what is the trial form?",
    options: [
      "$A$",
      "$Ax$",
      "$A\\cos x$",
      "$Ae^{x}$"
    ],
    correctAnswer: 0,
    explanation: "A constant is a polynomial of degree zero, so the trial is a single undetermined constant $A$, provided a constant does not already lie in $y_c$.\n\nThe factor $x$ is introduced only under resonance.\n\nA trigonometric trial does not match a constant forcing term.\n\nAn exponential trial likewise does not match a constant."
  },
  {
    id: "mth302_ch5_037",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' + y = \\sec x$ on $-\\pi/2 < x < \\pi/2$, solved by variation of parameters with $y_1=\\cos x$, $y_2=\\sin x$, and $W=y_1y_2'-y_1'y_2=1$, the formula for $y_p$ requires the integral $\\int \\dfrac{y_1g}{W}\\,dx$ where $g(x)=\\sec x$ is the forcing term. What is this integral, up to a constant?",
    options: [
      "$x$",
      "$\\tan x$",
      "$\\ln|\\sec x|$",
      "$\\sec x$"
    ],
    correctAnswer: 0,
    explanation: "Since $y_1=\\cos x$, the integrand simplifies to $y_1g/W = \\cos x\\sec x/1 = 1$, and $\\int 1\\,dx = x + C$.\n\n$\\tan x$ confuses $\\cos x\\sec x$, which simplifies to $1$, with $\\sin x\\sec x$, which simplifies to $\\tan x$.\n\n$\\ln|\\sec x|$ computes the other integral in the formula, $\\int y_2g/W\\,dx = \\int \\sin x\\sec x\\,dx = \\int \\tan x\\,dx$, instead of the one asked for.\n\n$\\sec x$ fails to simplify $\\cos x\\sec x$ to $1$ before integrating, and instead integrates the original secant factor by itself."
  },
  {
    id: "mth302_ch5_038",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' + 6y' + 9y = e^{-3x}$, the characteristic equation $r^2+6r+9=(r+3)^2=0$ has the repeated root $r=-3$, so $y_c = C_1e^{-3x}+C_2xe^{-3x}$, and the correctly modified trial is $y_p=Ax^2e^{-3x}$ with $A=\\tfrac{1}{2}$. How many independent arbitrary constants does the general solution $y=y_c+y_p$ contain, and where do they come from?",
    options: [
      "$2$; both come from the complementary function $C_1e^{-3x}+C_2xe^{-3x}$",
      "$3$; one from each of $C_1$, $C_2$, and the coefficient $\\tfrac{1}{2}$ in $y_p$",
      "$1$; $C_1$ and $C_2$ must be equal since both terms come from the same repeated root",
      "$0$; once $y_p$ is found by substitution, $y_c$ becomes fixed as well"
    ],
    correctAnswer: 0,
    explanation: "The particular solution $y_p=\\tfrac{1}{2}x^2e^{-3x}$ is one fixed function pinned down entirely by substitution, so the only free constants are $C_1$ and $C_2$ in $y_c$, giving exactly two.\n\nCounting the coefficient $\\tfrac{1}{2}$ as a third constant confuses a fixed value found by matching coefficients with a genuinely arbitrary constant.\n\n$e^{-3x}$ and $xe^{-3x}$ are linearly independent solutions of the homogeneous equation precisely because $r=-3$ is repeated, so $C_1$ and $C_2$ vary independently rather than being forced equal.\n\n$y_c$ solves the homogeneous equation for any choice of $C_1,C_2$ regardless of which particular solution $y_p$ is added, so it does not become fixed."
  },
  {
    id: "mth302_ch5_039",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' + 4y = \\sin 2x$, why must the trial be multiplied by $x$?",
    options: [
      "Because $\\sin 2x$ already lies in $y_c$",
      "Because the equation has a repeated root",
      "Because the forcing term is a product",
      "Because the coefficients are variable"
    ],
    correctAnswer: 0,
    explanation: "The roots are $\\pm 2i$, so $y_c = C_1\\cos 2x + C_2\\sin 2x$ already contains the forcing term and resonance occurs.\n\nThe roots are complex and distinct rather than repeated.\n\nThe forcing term is a single sine, not a product.\n\nThe coefficients here are constants."
  },
  {
    id: "mth302_ch5_040",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "In $y = y_c + y_p$, which part carries the arbitrary constants?",
    options: [
      "$y_c$",
      "$y_p$",
      "Both equally",
      "Neither"
    ],
    correctAnswer: 0,
    explanation: "The complementary function is the general solution of the homogeneous equation and so contains the arbitrary constants.\n\nThe particular solution is one fixed function with no free constants.\n\nSplitting the constants between the two misdescribes the structure.\n\nA general solution must contain arbitrary constants somewhere."
  }
];

export default mth302Chapter5;
