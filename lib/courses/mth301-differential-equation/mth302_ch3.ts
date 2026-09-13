import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter3: QuestionV2[] = [
  {
    id: "mth302_ch3_001",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Consider the initial value problem $y' = \\dfrac{5}{2}xy^{2/5}$, $y(x_0) = 0$. The right-hand side $f(x, y) = \\dfrac{5}{2}xy^{2/5}$ is continuous for every real $x$ and $y$, while $f_y = xy^{-3/5}$ is undefined at $y = 0$. Applying the existence and uniqueness theorems at this initial point, what can be concluded?",
    options: [
      "A solution exists, but uniqueness is not guaranteed",
      "Both existence and uniqueness hold, since $f$ is continuous everywhere on the plane",
      "No solution exists, since $f_y$ fails to be defined at $y = 0$",
      "The solution is unique, since $f_y$ is bounded near $y = 0$"
    ],
    correctAnswer: 0,
    explanation: "Continuity of $f$ alone secures existence by the existence theorem, but uniqueness requires $f_y$ to be continuous as well, and $f_y = xy^{-3/5}$ blows up as $y \\to 0$, so no Lipschitz bound holds there and uniqueness is not guaranteed at this point.\n\nBoth existence and uniqueness hold is the classic trap of assuming continuity of $f$ by itself is enough for uniqueness, when the uniqueness theorem specifically needs $f_y$ continuous too.\n\nNo solution exists reverses the existence theorem, since continuity of $f$ guarantees a solution regardless of what happens to $f_y$.\n\nThe solution is unique because $f_y$ is bounded near $y = 0$ is factually backwards, since $f_y = xy^{-3/5}$ grows without bound as $y \\to 0$ rather than staying bounded."
  },
  {
    id: "mth302_ch3_002",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For the initial value problem $y' = x^2y + \\sin x$, $y(0) = 0$, the right-hand side $f(x, y) = x^2y + \\sin x$ is a sum of continuous functions, so it is continuous everywhere and the existence theorem guarantees a solution near $x = 0$. Computing $f_y = x^2$, which is also continuous everywhere and bounded on any closed rectangle, what extra conclusion follows from the uniqueness theorem?",
    options: [
      "The solution is also unique on some interval about $x = 0$",
      "No extra conclusion follows, since $f_x$, not $f_y$, controls uniqueness",
      "The solution becomes unique only after also checking that $f$ itself is bounded on the rectangle",
      "The interval of existence extends to all real values of $x$"
    ],
    correctAnswer: 0,
    explanation: "Continuity of $f_y = x^2$ on a rectangle about the initial point is exactly the extra hypothesis the uniqueness theorem needs, so together with the existing continuity of $f$ it upgrades the conclusion to a unique solution on some interval about $x = 0$.\n\nNo extra conclusion follows because $f_x$ controls uniqueness swaps the roles of the two partial derivatives; the Lipschitz condition and the uniqueness theorem are stated in terms of $f_y$, not $f_x$.\n\nRequiring $f$ itself to be bounded confuses boundedness of the function with continuity of its $y$-derivative, which is the actual hypothesis being tested.\n\nExtending the interval of existence to all real $x$ overstates the theorem, which only ever guarantees a solution on some interval about the initial point."
  },
  {
    id: "mth302_ch3_003",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Near $y = 0$, how does the function $f(y) = y^{1/3}$ behave with respect to the Lipschitz condition?",
    options: [
      "Lipschitz with $L = 1$",
      "Lipschitz with $L = 1/3$",
      "Not Lipschitz",
      "Not continuous"
    ],
    correctAnswer: 2,
    explanation: "The derivative $f'(y) = \\dfrac{1}{3}y^{-2/3}$ tends to infinity as $y$ approaches $0$, so no finite constant $L$ can bound the difference quotient on any interval containing $0$, meaning $f$ is not Lipschitz there.\n\nLipschitz with $L = 1$ and Lipschitz with $L = 1/3$ both wrongly assert a finite bound exists near the singular point.\n\nNot continuous is incorrect, since $f(y) = y^{1/3}$ is in fact continuous everywhere, including at $y = 0$, which is exactly why existence still holds even though uniqueness fails for $y' = \\dfrac{3}{2}y^{1/3}$."
  },
  {
    id: "mth302_ch3_004",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For the initial value problem $y' = \\sqrt{|y|}$, $y(0) = 0$, which statement correctly describes existence and uniqueness?",
    options: [
      "Neither existence nor uniqueness holds",
      "The equation is not defined at $y = 0$",
      "Both existence and uniqueness hold",
      "Existence holds, but uniqueness is not guaranteed"
    ],
    correctAnswer: 3,
    explanation: "$f(y) = \\sqrt{|y|}$ is continuous everywhere, so at least one solution exists by the existence theorem, but $f$ is not Lipschitz at $y = 0$, and indeed both $y = 0$ and $y = x^2/4$ for $x \\geq 0$ satisfy the same initial value problem, so uniqueness fails.\n\nNeither existence nor uniqueness holds is too strong, since existence is guaranteed by continuity.\n\nThe equation is not defined at $y = 0$ is false, since $\\sqrt{|0|} = 0$ is perfectly well defined.\n\nBoth existence and uniqueness hold is false because the failure of the Lipschitz condition at $y = 0$ allows more than one solution."
  },
  {
    id: "mth302_ch3_005",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "What is a Lipschitz constant for $f(x, y) = 3y + \\sin x$ on the whole plane?",
    options: [
      "$L = 1$",
      "No such constant exists",
      "$L = 4$",
      "$L = 3$ on that rectangle"
    ],
    correctAnswer: 3,
    explanation: "The difference $|f(x, y_2) - f(x, y_1)|$ equals exactly $3|y_2 - y_1|$, since the $\\sin x$ term cancels, so $L = 3$ is the natural constant that satisfies the Lipschitz inequality; the Lipschitz condition concerns variation in $y$ only, so $\\sin x$ contributes nothing to the bound.\n\n$L = 1$ is too small to satisfy the inequality for all $y_1, y_2$.\n\nNo such constant exists is wrong since the exact bound of $3$ works everywhere.\n\n$L = 4$ works as a valid but unnecessarily loose bound, while $3$ is the value that follows directly from the computation."
  },
  {
    id: "mth302_ch3_006",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = x\\cos y$ on the closed bounded rectangle $-1 \\leq x \\leq 1$, $-\\pi \\leq y \\leq \\pi$, the partial derivative is $f_y = -x\\sin y$, which is continuous everywhere and satisfies $|f_y| \\leq 1$ on this rectangle. Which implication does this example illustrate?",
    options: [
      "Continuously differentiable in $y$ implies Lipschitz in $y$ on a closed bounded rectangle",
      "The negative sign in $f_y$ shows that $f$ is not Lipschitz in $y$ on this rectangle",
      "Lipschitz continuity in $y$ on this rectangle implies that $f$ must be continuously differentiable there as well",
      "Boundedness of $f_y$ implies that $f$ itself is bounded on the rectangle"
    ],
    correctAnswer: 0,
    explanation: "Since $f_y$ is continuous on a closed bounded rectangle it is automatically bounded there, and the mean value theorem then converts that bound directly into a Lipschitz inequality, which is exactly the implication that continuous differentiability in $y$ gives Lipschitz continuity in $y$.\n\nThe sign of $f_y$ is irrelevant to the Lipschitz condition, which bounds $|f_y|$ rather than $f_y$ itself, so a negative value does not block the conclusion.\n\nReversing the implication to claim Lipschitz continuity forces continuous differentiability is false in general, since a Lipschitz function need not even be differentiable everywhere.\n\nA bound on $f_y$ says nothing about the size of $f$ itself, only about how fast $f$ changes as $y$ varies."
  },
  {
    id: "mth302_ch3_007",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = \\dfrac{x^2 - y^2}{1 + x^2 - y^2}$, what does the partial derivative $f_y$ equal?",
    options: [
      "$\\dfrac{-2y}{(1 + x^2 - y^2)^2}$",
      "$\\dfrac{2y}{(1 + x^2 - y^2)^2}$",
      "$\\dfrac{-2y}{1 + x^2 - y^2}$",
      "$\\dfrac{-2y(x^2 - y^2)}{(1 + x^2 - y^2)^2}$"
    ],
    correctAnswer: 0,
    explanation: "Applying the quotient rule, the numerator works out to $(-2y)(1 + x^2 - y^2) - (x^2 - y^2)(-2y)$, which simplifies because the $(x^2 - y^2)$ terms cancel exactly, leaving $-2y$ over $(1 + x^2 - y^2)^2$. This cancellation is what makes $f_y$ bounded on any closed rectangle avoiding the singular curve, proving the Lipschitz property there.\n\n$\\dfrac{2y}{(1 + x^2 - y^2)^2}$ has the wrong overall sign.\n\n$\\dfrac{-2y}{1 + x^2 - y^2}$ is missing the required squaring of the denominator from the quotient rule.\n\n$\\dfrac{-2y(x^2 - y^2)}{(1 + x^2 - y^2)^2}$ fails to cancel the $(x^2 - y^2)$ terms that the correct computation removes."
  },
  {
    id: "mth302_ch3_008",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $y' = \\tan x + y$, $y(0) = 0$, the right-hand side $f(x, y) = \\tan x + y$ is continuous only for $x$ strictly between $-\\pi/2$ and $\\pi/2$, since $\\tan x$ is undefined at $x = \\pi/2$. On the smaller rectangle $-1 \\leq x \\leq 1$ with $y$ restricted to a bounded range, which lies entirely inside that interval, both $f$ and $f_y = 1$ are continuous, so the existence and uniqueness theorems both apply there. What does this illustrate about the theorems' guarantee?",
    options: [
      "The guaranteed solution interval must be chosen small enough to avoid points where $f$ fails the hypotheses",
      "The theorems guarantee a unique solution on the full interval $-1 \\leq x \\leq 1$ regardless of where $\\tan x$ is undefined",
      "Since $\\tan x$ is undefined at $x = \\pi/2$, no solution can exist anywhere near $x = 0$",
      "Uniqueness fails near $x = 0$ because $f_y$ is unbounded there"
    ],
    correctAnswer: 0,
    explanation: "The theorems only apply on a rectangle where the hypotheses genuinely hold, so the guaranteed interval about $x_0$ has to be chosen inside the region where $f$ and $f_y$ are continuous, here the interval strictly between $-\\pi/2$ and $\\pi/2$; this is exactly why the conclusion is always local rather than automatic on any rectangle a student happens to write down.\n\nClaiming the theorems guarantee uniqueness on the full stated interval regardless of the singularity ignores that $f$ is not even continuous at $x = \\pi/2$, so the hypotheses fail there.\n\nA singularity at $x = \\pi/2$ does not prevent a solution from existing near $x = 0$, since $f$ is perfectly continuous on a rectangle around that point.\n\n$f_y = 1$ is a constant and therefore bounded everywhere, so uniqueness does not fail near $x = 0$ for that reason."
  },
  {
    id: "mth302_ch3_009",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $y' = 3 - xy^2$, $y(1) = 2$, the right-hand side $f(x, y) = 3 - xy^2$ is a polynomial in $x$ and $y$, hence continuous on the rectangle $0 \\leq x \\leq 2$, $0 \\leq y \\leq 4$, which contains the point $(1, 2)$. Based on continuity of $f$ alone, before checking $f_y$, what does the existence theorem guarantee?",
    options: [
      "At least one solution exists on some interval about $x = 1$",
      "Exactly one solution exists on some interval about $x = 1$, since $f$ is continuous there",
      "A unique solution exists on the entire rectangle $0 \\leq x \\leq 2$, $0 \\leq y \\leq 4$",
      "No solution is guaranteed unless $f_y$ is continuous too"
    ],
    correctAnswer: 0,
    explanation: "Continuity of $f$ by itself only triggers the existence theorem, which guarantees at least one solution on some interval about the initial point, and says nothing yet about how many solutions there are.\n\nClaiming exactly one solution from continuity of $f$ alone is the classic slip of borrowing the uniqueness conclusion before checking $f_y$, which has not been examined yet in this question.\n\nClaiming a unique solution on the entire rectangle overstates both the uniqueness and the size of the guaranteed interval, since the theorem's conclusion is always local.\n\nDenying any guarantee without $f_y$ reverses the theorem, since continuity of $f$ alone is already enough for existence."
  },
  {
    id: "mth302_ch3_010",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $y' = e^{-x}y + x^3$, $y(0) = 1$, the right-hand side $f(x, y) = e^{-x}y + x^3$ is continuous everywhere, so the existence theorem guarantees a solution near $x = 0$. Computing $f_y = e^{-x}$, which is also continuous everywhere and bounded by $1$ for $x \\geq 0$, which additional hypothesis has just been verified to upgrade the guarantee to uniqueness?",
    options: [
      "Continuity of $f_y$ on the region",
      "Continuity of $f_x$, since it is the derivative that controls how nearby solutions spread apart in $x$",
      "Boundedness of $f$ itself on the same region, independent of $f_y$",
      "Differentiability of $f$ with respect to $x$ rather than $y$"
    ],
    correctAnswer: 0,
    explanation: "The uniqueness theorem's extra hypothesis beyond continuity of $f$ is continuity of $f_y$ on the region, and that is precisely what computing $f_y = e^{-x}$ and observing it is continuous and bounded has just confirmed.\n\nContinuity of $f_x$ swaps in the wrong partial derivative, since the Lipschitz condition and the uniqueness theorem are both stated in terms of variation in $y$, not $x$.\n\nBoundedness of $f$ itself controls the size of the function, not its rate of change in $y$, so it does not supply the hypothesis the uniqueness theorem needs.\n\nDifferentiability with respect to $x$ is again the wrong variable for the uniqueness hypothesis, which concerns $f_y$."
  },
  {
    id: "mth302_ch3_011",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = (x^2 + 1)y$ on the rectangle $-1 \\leq x \\leq 1$, $-3 \\leq y \\leq 3$, the partial derivative is $f_y = x^2 + 1$, which is continuous and satisfies $x^2 + 1 \\leq 2$ for every $x$ in that range. Which Lipschitz constant does this sufficient test supply for $f$ in $y$ on this rectangle?",
    options: [
      "$L = 2$, from the maximum of $|f_y|$ on the rectangle",
      "$L = 1$, from the constant term in $f_y$ alone, ignoring the contribution of $x^2$",
      "$L = 3$, taken from the bound on $y$ rather than the bound on $f_y$",
      "No finite Lipschitz constant exists on this rectangle"
    ],
    correctAnswer: 0,
    explanation: "The sufficient test bounds $|f_y|$ on the rectangle, and since $f_y = x^2 + 1$ reaches its largest value of $2$ at $x = \\pm 1$, the mean value theorem gives the Lipschitz inequality with $L = 2$.\n\nUsing $L = 1$ drops the $x^2$ term and keeps only the constant piece of $f_y$, understating the actual maximum.\n\nUsing $L = 3$ mistakenly reads off the bound on the variable $y$ itself rather than the bound on the derivative $f_y$, which is what the Lipschitz test actually requires.\n\nA finite Lipschitz constant does exist, since $f_y$ is continuous on a closed bounded rectangle and therefore bounded there."
  },
  {
    id: "mth302_ch3_012",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = x\\sin y + y$ on the rectangle $-2 \\leq x \\leq 2$ with $y$ unrestricted, the partial derivative is $f_y = x\\cos y + 1$, which satisfies $|f_y| \\leq |x| + 1 \\leq 3$ on this rectangle. Which theorem converts this bound into the Lipschitz inequality $|f(x, y_2) - f(x, y_1)| \\leq 3|y_2 - y_1|$, and what is the resulting constant?",
    options: [
      "The mean value theorem, giving Lipschitz constant $L = 3$",
      "The intermediate value theorem, giving Lipschitz constant $L = 3$, since $f_y$ attains every value between its bounds",
      "The fundamental theorem of calculus, giving Lipschitz constant $L = 2$ from the bound on $x$ alone",
      "Rolle's theorem, giving $L = 1$"
    ],
    correctAnswer: 0,
    explanation: "The mean value theorem writes $f(x, y_2) - f(x, y_1) = f_y(x, \\xi)(y_2 - y_1)$ for some $\\xi$ between $y_1$ and $y_2$, so the bound $|f_y| \\leq 3$ converts directly into the Lipschitz inequality with $L = 3$.\n\nThe intermediate value theorem concerns which values a continuous function attains, not how to bound a difference quotient, so it does not supply the Lipschitz inequality.\n\nThe fundamental theorem of calculus links integration and differentiation and does not by itself produce a Lipschitz bound, and $L = 2$ also drops the constant $1$ from the bound on $f_y$.\n\nRolle's theorem is the special case of the mean value theorem where the endpoint values agree, too narrow to justify the general inequality, and $L = 1$ keeps only the constant term of $f_y$."
  },
  {
    id: "mth302_ch3_013",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = y^2$ on the closed bounded rectangle $-1 \\leq x \\leq 1$, $-4 \\leq y \\leq 4$, the partial derivative $f_y = 2y$ is continuous on this rectangle and therefore bounded there, since a continuous function on a closed bounded set attains a maximum. Which chain of general implications is this specific example consistent with?",
    options: [
      "Continuously differentiable implies Lipschitz, and Lipschitz in turn implies continuous, with no arrow reversing",
      "Continuous implies Lipschitz implies continuously differentiable, so every continuous function like $y^2$ must already be continuously differentiable",
      "Lipschitz implies continuously differentiable implies continuous",
      "Continuous implies continuously differentiable implies Lipschitz"
    ],
    correctAnswer: 0,
    explanation: "This example runs from the strongest hypothesis to the weakest: continuity of $f_y$ on a closed bounded rectangle gives boundedness of $f_y$, which the mean value theorem turns into the Lipschitz condition, which in turn implies ordinary continuity, and none of these arrows reverses in general.\n\nStarting the chain from continuity and claiming it forces continuous differentiability is false in general, even though $y^2$ happens to be smooth; a function such as $y^{1/3}$ is continuous without being Lipschitz or differentiable at the origin.\n\nPlacing Lipschitz before continuous differentiability reverses the true order, since a Lipschitz function need not be differentiable at all, as $|y|$ shows.\n\nPlacing plain continuity before continuous differentiability also reverses the order, since continuity alone is the weakest of the three conditions, not a stepping stone to the other two."
  },
  {
    id: "mth302_ch3_014",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "The function $f(y) = |y|$ illustrates which situation?",
    options: [
      "Lipschitz but not differentiable at $0$",
      "Differentiable but not Lipschitz at the origin $0$",
      "Continuous but not Lipschitz in any neighbourhood of $0$",
      "Neither continuous nor Lipschitz at $0$"
    ],
    correctAnswer: 0,
    explanation: "The absolute value satisfies $||y_2| - |y_1|| \\leq |y_2 - y_1|$, so it is Lipschitz with $L = 1$, yet it has a corner at $0$ and so fails to be differentiable there.\n\nIt is not differentiable at $0$, so calling it differentiable there is wrong.\n\nIt is Lipschitz, so describing it as merely continuous understates what it satisfies.\n\nIt is certainly continuous everywhere, so denying continuity is false."
  },
  {
    id: "mth302_ch3_015",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "What is a Lipschitz constant for $f(x, y) = 5y + \\cos x$ on the whole plane?",
    options: [
      "$L = 5$",
      "$L = 1$",
      "$L = 6$",
      "No such constant exists"
    ],
    correctAnswer: 0,
    explanation: "Here $f_y = 5$, so $|f(x, y_2) - f(x, y_1)| = 5|y_2 - y_1|$ exactly, and $L = 5$ works globally.\n\n$L = 1$ comes from the bound on $\\cos x$, which involves $x$ and plays no part in the Lipschitz condition in $y$.\n\n$L = 6$ adds the two bounds together, but the $x$-dependent term cancels in the difference.\n\nA constant does exist, since $f_y$ is bounded everywhere."
  },
  {
    id: "mth302_ch3_016",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = x^2y$ on the rectangle $-3 \\leq x \\leq 3$, $-2 \\leq y \\leq 2$, the partial derivative $f_y = x^2$ is bounded by $9$ on this rectangle, while the partial derivative $f_x = 2xy$ is bounded by $12$ on the same rectangle. When checking whether $f$ is Lipschitz in $y$ using $f_y$, which variable is held fixed at a common value while the other varies between the two points being compared?",
    options: [
      "$x$ is held fixed while $y$ takes the two compared values",
      "$y$ is held fixed while $x$ takes the two compared values, since $f_y$ measures change along the $y$-direction only",
      "Both $x$ and $y$ are held fixed, and only the bound $9$ varies between the two points",
      "Neither variable is held fixed in this comparison"
    ],
    correctAnswer: 0,
    explanation: "Lipschitz continuity in $y$ compares $f$ at two points that share the same $x$-value and differ only in $y$, so it is $x$ that is held fixed while $y$ ranges over the two compared values.\n\nClaiming $y$ is held fixed while $x$ varies describes Lipschitz continuity in $x$ instead, the companion condition that uses $f_x$ rather than $f_y$.\n\nHolding both variables fixed would make the two compared points identical, leaving nothing for the inequality to say.\n\nSome variable must be held fixed for the comparison to make sense, so denying that either one is fixed misreads the definition."
  },
  {
    id: "mth302_ch3_017",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For the initial value problem $y' = \\tfrac{3}{2}y^{1/3}$, $y(0) = 0$, which pair of functions both solve it?",
    options: [
      "$y \\equiv 0$ and $y = x^{3/2}$",
      "$y \\equiv 0$ together with the function $y = x^{2/3}$",
      "$y = x$ and $y = x^{3/2}$",
      "$y \\equiv 1$ and $y = x^{3/2}$"
    ],
    correctAnswer: 0,
    explanation: "Both the zero function and $y = x^{3/2}$ for $x \\geq 0$ satisfy the equation and the condition $y(0) = 0$, so uniqueness fails even though existence holds.\n\nThe exponent $2/3$ does not satisfy the equation on substitution.\n\nThe function $y = x$ fails to satisfy the equation.\n\nThe constant $1$ violates the initial condition $y(0) = 0$."
  },
  {
    id: "mth302_ch3_018",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "In the problem $y' = \\tfrac{3}{2}y^{1/3}$, $y(0) = 0$, why does uniqueness fail while existence still holds?",
    options: [
      "$f$ is continuous but $f_y$ is unbounded at $y = 0$",
      "$f$ is discontinuous at $y = 0$",
      "$f$ is bounded but not continuous anywhere",
      "The initial condition lies outside every rectangle"
    ],
    correctAnswer: 0,
    explanation: "The function $f(y) = \\tfrac{3}{2}y^{1/3}$ is continuous, which secures existence, but $f_y = \\tfrac{1}{2}y^{-2/3}$ blows up at $y = 0$, so no Lipschitz condition holds there and uniqueness is lost.\n\nThe function is continuous at $y = 0$, so calling it discontinuous is wrong.\n\nIt is continuous everywhere, contradicting the claim that it is nowhere continuous.\n\nThe point $(0, 0)$ lies in perfectly good rectangles, so the hypothesis is not vacuous."
  },
  {
    id: "mth302_ch3_019",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $y' = y^{1/3}$, $y(0) = 8$, the right-hand side $f(x, y) = y^{1/3}$ is continuous everywhere, and its partial derivative $f_y = \\tfrac{1}{3}y^{-2/3}$ is also continuous near $y = 8$, well away from the singular point $y = 0$ where $f_y$ is undefined. Does the uniqueness theorem apply at this initial point, even though $f_y$ fails to be continuous elsewhere in the plane?",
    options: [
      "Yes, since the hypotheses need only hold locally near this point",
      "No, since $f_y$ must be continuous on the entire real line for the theorem to apply anywhere",
      "No, because the failure of continuity at $y = 0$ makes the solution non-unique at every initial point",
      "Yes, but only because $f$ itself happens to be bounded near $y = 8$"
    ],
    correctAnswer: 0,
    explanation: "The theorem only requires $f$ and $f_y$ to be continuous on some rectangle containing the initial point, and near $y = 8$ that holds comfortably, so the uniqueness theorem applies there regardless of what happens far away at $y = 0$.\n\nRequiring $f_y$ to be continuous on the entire real line demands far more than the theorem actually needs, since only a rectangle around the initial point matters.\n\nA failure of continuity at one point, $y = 0$, does not contaminate every other initial point, since the theorem is applied locally around each point separately.\n\nBoundedness of $f$ is not the hypothesis being used here; the relevant condition is continuity of $f_y$ near the initial point, which is what secures uniqueness."
  },
  {
    id: "mth302_ch3_020",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "On which sets can $f(x, y) = \\dfrac{x^2 - y^2}{1 + x^2 - y^2}$ be shown Lipschitz in $y$?",
    options: [
      "Closed bounded rectangles avoiding $1 + x^2 - y^2 = 0$",
      "The whole plane without restriction",
      "Every rectangle in the plane",
      "Open unbounded regions containing the curve"
    ],
    correctAnswer: 0,
    explanation: "The function is undefined where $1 + x^2 - y^2 = 0$, so the argument requires a closed bounded rectangle clear of that curve, on which $f_y$ is continuous and hence bounded.\n\nThe whole plane fails because the function is not even defined on the excluded curve.\n\nClaiming every rectangle works ignores those that meet the curve.\n\nUnbounded regions containing the curve fail on both counts at once."
  },
  {
    id: "mth302_ch3_021",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "What is a Lipschitz constant for $f(x, y) = 7y$ on the whole plane?",
    options: [
      "$L = 7$",
      "$L = 1$",
      "$L = 0$ for every bounded $f$",
      "$L = 49$"
    ],
    correctAnswer: 0,
    explanation: "Since $f_y = 7$, the difference satisfies $|7y_2 - 7y_1| = 7|y_2 - y_1|$, so $L = 7$ is the natural constant.\n\n$L = 1$ would require the function to change no faster than its argument, which fails by a factor of seven.\n\n$L = 0$ would force $f$ to be constant in $y$.\n\n$L = 49$ squares the coefficient, which the difference does not produce."
  },
  {
    id: "mth302_ch3_022",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Why is $f(y) = y^{1/3}$ not Lipschitz near $y = 0$?",
    options: [
      "Its derivative is unbounded as $y$ approaches $0$",
      "It is discontinuous at $y = 0$",
      "It fails to be defined at $y = 0$",
      "It is bounded but changes sign at $0$"
    ],
    correctAnswer: 0,
    explanation: "The derivative $\\tfrac{1}{3}y^{-2/3}$ grows without bound as $y$ approaches $0$, so no single constant $L$ can dominate the difference quotient near the origin.\n\nThe cube root is continuous at $0$, so discontinuity is not the obstruction.\n\nIt is defined at $0$, taking the value $0$.\n\nChanging sign is irrelevant to whether a Lipschitz bound exists."
  },
  {
    id: "mth302_ch3_023",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "In the standard statement of the theorems, how is the rectangle $R$ described?",
    options: [
      "$\\{(x, y) : a \\leq x \\leq b,\\ c \\leq y \\leq d\\}$",
      "$\\{(x, y) : a < x < b,\\ c < y < d\\}$",
      "$\\{(x, y) : x^2 + y^2 \\leq r^2\\}$",
      "$\\{(x, y) : x \\geq a,\\ y \\geq c\\}$"
    ],
    correctAnswer: 0,
    explanation: "The theorems are stated on a closed rectangle with both variables confined between fixed bounds, which is what makes continuous functions on it bounded.\n\nAn open rectangle would not guarantee that a continuous $f_y$ attains a bound.\n\nA disc is a different region and is not the set used in the statement.\n\nA quadrant is unbounded, so continuity alone would not deliver the required bound."
  },
  {
    id: "mth302_ch3_024",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Continuity of $f$ on $R$ guarantees which of the following?",
    options: [
      "Existence but not uniqueness",
      "Uniqueness but not existence in general",
      "Both existence and uniqueness of the solution",
      "Neither existence nor uniqueness of the solution"
    ],
    correctAnswer: 0,
    explanation: "Continuity is exactly the hypothesis of the existence theorem, and the example $y' = \\tfrac{3}{2}y^{1/3}$ with $y(0) = 0$ shows it cannot deliver uniqueness.\n\nUniqueness without existence is impossible, since a unique solution is in particular a solution.\n\nBoth conclusions require the additional condition on $f_y$.\n\nDenying existence contradicts the existence theorem itself."
  },
  {
    id: "mth302_ch3_025",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = 3y + \\sin x$, what is $f_y$?",
    options: [
      "$3$",
      "$\\cos x$",
      "$3 + \\cos x$",
      "$3y$"
    ],
    correctAnswer: 0,
    explanation: "Differentiating with respect to $y$ treats $\\sin x$ as a constant, leaving $f_y = 3$.\n\n$\\cos x$ is the derivative with respect to $x$, not $y$.\n\nAdding the two derivatives mixes partial derivatives in different variables.\n\nThe expression $3y$ is part of $f$ itself rather than its derivative in $y$."
  },
  {
    id: "mth302_ch3_026",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = xe^y$, the partial derivative is $f_y = xe^y$. On the closed bounded rectangle $-1 \\leq x \\leq 1$, $0 \\leq y \\leq 2$, $|f_y|$ is at most $e^2$, giving a finite Lipschitz constant, but on the unbounded strip $-1 \\leq x \\leq 1$, $y \\geq 0$, $f_y$ grows without bound as $y$ increases. Why does the argument require the rectangle to be both closed and bounded?",
    options: [
      "So that the continuous $f_y$ is guaranteed to attain a finite maximum on the region",
      "So that the solution found on this rectangle can automatically be extended to the entire real line without further checking",
      "So that the initial point is forced to lie exactly on the boundary of the region",
      "So that $f$ becomes a linear function of $y$ on the region"
    ],
    correctAnswer: 0,
    explanation: "A continuous function on a closed bounded set always attains a maximum, and that finite maximum of $|f_y|$ is exactly the constant $L$ the Lipschitz condition needs; on the unbounded strip $f_y = xe^y$ has no such maximum, which is why boundedness of the region is essential.\n\nA local Lipschitz argument on one rectangle does not automatically extend the solution to the whole real line, since the theorem's conclusion is confined to some interval about the initial point.\n\nThe initial point is required to lie inside the rectangle, not forced onto its boundary.\n\nBoundedness and closedness of the rectangle have nothing to do with making $f$ linear in $y$; here $f = xe^y$ is not linear in $y$ at all."
  },
  {
    id: "mth302_ch3_027",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "The function $f(y) = |y - 2|$ satisfies $|f(y_2) - f(y_1)| \\leq |y_2 - y_1|$, so it is Lipschitz with constant $1$, but it is not differentiable at $y = 2$ because of the corner there. The function $g(y) = y^{1/5}$ is continuous everywhere, but its derivative $\\tfrac{1}{5}y^{-4/5}$ grows without bound as $y$ approaches $0$, so $g$ is not Lipschitz near $y = 0$. Which statement about the chain of implications do these two functions together establish?",
    options: [
      "Neither the differentiable-to-Lipschitz arrow nor the Lipschitz-to-continuous arrow reverses",
      "Both functions show that Lipschitz continuity always implies differentiability everywhere on their domain",
      "Together they show that ordinary continuity is always enough to guarantee a Lipschitz bound",
      "Both arrows reverse whenever the functions involved are bounded on their domain"
    ],
    correctAnswer: 0,
    explanation: "$f(y) = |y - 2|$ blocks the reverse of the Lipschitz-to-differentiable arrow, since it is Lipschitz without being differentiable at its corner, and $g(y) = y^{1/5}$ blocks the reverse of the continuous-to-Lipschitz arrow, since it is continuous without being Lipschitz near $y = 0$, so together they confirm that neither arrow reverses.\n\nClaiming Lipschitz continuity always implies differentiability is exactly contradicted by $f(y) = |y - 2|$, which is Lipschitz yet has a corner.\n\nClaiming ordinary continuity always guarantees a Lipschitz bound is exactly contradicted by $g(y) = y^{1/5}$, which is continuous yet fails to be Lipschitz near $y = 0$.\n\nBoundedness does not repair either counterexample, since both $f$ and $g$ are bounded on the small intervals where the respective failures occur."
  },
  {
    id: "mth302_ch3_028",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "If $f_y$ fails to be continuous at a point, what may still be concluded when $f$ itself is continuous?",
    options: [
      "A solution exists, though possibly not a unique one",
      "No solution can exist through that point",
      "The solution is unique but undefined there",
      "The problem has exactly two solutions"
    ],
    correctAnswer: 0,
    explanation: "Existence rests on continuity of $f$ alone, so a solution is still guaranteed, while the loss of the condition on $f_y$ removes only the uniqueness conclusion.\n\nDenying existence misreads which hypothesis supports which conclusion.\n\nUniqueness is precisely what is lost, so asserting it is wrong.\n\nNothing forces the number of solutions to be exactly two; the example with $y^{1/3}$ admits a whole family."
  },
  {
    id: "mth302_ch3_029",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "The Lipschitz condition constrains the behaviour of $f$ with respect to which variable?",
    options: [
      "$y$ alone",
      "$x$ alone",
      "$x$ and $y$ equally",
      "Neither variable directly"
    ],
    correctAnswer: 0,
    explanation: "The inequality compares $f$ at two points sharing the same $x$ and differing in $y$, so it controls variation in $y$ only.\n\nVariation in $x$ is not constrained by the condition at all.\n\nTreating both variables equally would require a stronger joint condition that the definition does not impose.\n\nThe condition certainly constrains $f$, so saying neither variable is involved is wrong."
  },
  {
    id: "mth302_ch3_030",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = y^2$ on the rectangle where $|y| \\leq 3$, what Lipschitz constant does the derivative bound supply?",
    options: [
      "$L = 6$",
      "$L = 3$",
      "$L = 9$",
      "$L = 2$"
    ],
    correctAnswer: 0,
    explanation: "Here $f_y = 2y$, and on $|y| \\leq 3$ this satisfies $|f_y| \\leq 6$, so $L = 6$ serves as a Lipschitz constant.\n\n$L = 3$ uses the bound on $y$ itself rather than on $2y$.\n\n$L = 9$ squares the bound instead of doubling it.\n\n$L = 2$ keeps the coefficient but drops the bound on $y$."
  },
  {
    id: "mth302_ch3_031",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Why is $f(x, y) = y^2$ not Lipschitz in $y$ on the whole plane?",
    options: [
      "$f_y = 2y$ is unbounded as $|y|$ grows",
      "$f$ is discontinuous for large $|y|$",
      "$f$ fails to be defined for negative $y$",
      "$f$ does not depend on the variable $x$ at all"
    ],
    correctAnswer: 0,
    explanation: "No single constant can dominate $|2y|$ over all of the plane, so the Lipschitz inequality fails globally even though it holds on every bounded strip.\n\nThe square is continuous everywhere, so discontinuity is not the issue.\n\nIt is perfectly well defined for negative $y$.\n\nIndependence from $x$ is irrelevant to a condition stated in terms of $y$."
  },
  {
    id: "mth302_ch3_032",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $y' = y^2$, $y(0) = 1$, both $f(x, y) = y^2$ and $f_y = 2y$ are continuous and bounded on the large rectangle $-10 \\leq x \\leq 10$, $-10 \\leq y \\leq 10$, so the existence and uniqueness theorems apply there. Solving by separation of variables gives $y = \\dfrac{1}{1 - x}$, which is the unique solution but ceases to exist once $x$ reaches $1$, well before $x = 10$. What does this show about the guaranteed solution interval?",
    options: [
      "The theorems only guarantee a solution on some interval about $x = 0$",
      "The theorems guarantee that the solution exists and stays unique for every $x$ between $-10$ and $10$",
      "Since $f$ and $f_y$ are both continuous and bounded on the whole rectangle, uniqueness must extend across all of it",
      "The solution fails to exist at $x = 1$"
    ],
    correctAnswer: 0,
    explanation: "Even though $f$ and $f_y$ are continuous and bounded on the entire large rectangle, the theorems still only promise a solution on some interval about the initial point $x = 0$, and this example shows that interval can be much smaller than the rectangle, since the actual solution $y = 1/(1-x)$ breaks down at $x = 1$.\n\nClaiming the solution exists and stays unique for every $x$ from $-10$ to $10$ overstates the guarantee, since the solution itself stops existing at $x = 1$.\n\nContinuity and boundedness of $f$ and $f_y$ on the whole rectangle do not force the solution to survive across all of it; the theorems never promised that in the first place.\n\nThe solution failing to exist at $x = 1$ is the correct observation about where it breaks down, but it does not by itself state what the theorems guarantee about the interval, which is the question actually being asked."
  },
  {
    id: "mth302_ch3_033",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which function is continuous everywhere yet fails the Lipschitz condition near the origin?",
    options: [
      "$f(y) = y^{1/3}$",
      "$f(y) = |y|$ near the origin",
      "$f(y) = 3y$ on the whole real line",
      "$f(y) = y^2$ on any bounded interval"
    ],
    correctAnswer: 0,
    explanation: "The cube root is continuous at $0$ but its derivative blows up there, so no Lipschitz constant exists near the origin.\n\nThe absolute value is Lipschitz with constant $1$ despite its corner.\n\nA linear function is Lipschitz with constant $3$.\n\nThe square is Lipschitz on any bounded set, including neighbourhoods of the origin."
  },
  {
    id: "mth302_ch3_034",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which conclusion follows if $f$ and $f_y$ are both continuous on a rectangle containing the initial point?",
    options: [
      "A unique solution exists on some interval about $x_0$",
      "Infinitely many solutions pass through the point",
      "A solution exists on the whole real line",
      "No conclusion can be drawn without also assuming boundedness of $f$"
    ],
    correctAnswer: 0,
    explanation: "Continuity of $f$ gives existence and continuity of $f_y$ supplies the Lipschitz condition, so together they deliver a unique local solution.\n\nInfinitely many solutions would contradict the uniqueness conclusion.\n\nA solution on the whole line is a global statement beyond the theorem's reach.\n\nBoundedness follows automatically from continuity on a closed bounded rectangle, so no extra hypothesis is needed."
  },
  {
    id: "mth302_ch3_035",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "What is a Lipschitz constant for $f(x, y) = -4y$ on the whole plane?",
    options: [
      "$L = 4$",
      "$L = -4$",
      "$L = 16$",
      "$L = 0$ by boundedness of the sine"
    ],
    correctAnswer: 0,
    explanation: "Since $|f(x, y_2) - f(x, y_1)| = 4|y_2 - y_1|$, the constant $L = 4$ works, the sign being absorbed by the absolute value.\n\nA Lipschitz constant must be positive by definition, so a negative value is inadmissible.\n\nSquaring the coefficient is not what the difference produces.\n\nA zero constant would force $f$ to be independent of $y$."
  },
  {
    id: "mth302_ch3_036",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "What is a Lipschitz constant for $f(x, y) = \\sin y$ on the whole plane?",
    options: [
      "$L = 1$",
      "$L = 0$",
      "$L = \\pi$ from the period of the sine",
      "No such constant exists"
    ],
    correctAnswer: 0,
    explanation: "Here $f_y = \\cos y$ satisfies $|\\cos y| \\leq 1$ everywhere, so the mean value theorem gives the Lipschitz condition with $L = 1$.\n\nA zero constant would make $\\sin y$ independent of $y$.\n\nThe value $\\pi$ confuses the period of the function with a bound on its derivative.\n\nA constant does exist, because the derivative is bounded globally."
  },
  {
    id: "mth302_ch3_037",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "If $f$ is continuously differentiable on a closed bounded rectangle $R$, what follows about $f$ in $y$ on $R$?",
    options: [
      "It is Lipschitz there",
      "It fails to be continuous there",
      "It is unbounded there",
      "Nothing at all follows"
    ],
    correctAnswer: 0,
    explanation: "Continuity of $f_y$ on a closed bounded set makes $f_y$ bounded, and the mean value theorem then delivers the Lipschitz condition.\n\nContinuous differentiability implies continuity rather than contradicting it.\n\nA continuous function on a closed bounded rectangle is bounded, not unbounded.\n\nA definite conclusion does follow, which is why this is the standard sufficient test."
  },
  {
    id: "mth302_ch3_038",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which pair of functions together shows that neither arrow in the chain of implications reverses?",
    options: [
      "$|y|$ and $y^{1/3}$",
      "$3y$ and $7y$",
      "$\\sin y$ and $\\cos y$",
      "$y^2$ and $y^3$"
    ],
    correctAnswer: 0,
    explanation: "The absolute value is Lipschitz without being differentiable at $0$, and the cube root is continuous without being Lipschitz near $0$, so together they block both converses.\n\nBoth linear functions are continuously differentiable and Lipschitz, so neither blocks anything.\n\nThe sine and cosine are smooth and globally Lipschitz.\n\nBoth powers are continuously differentiable, so they provide no counterexample."
  },
  {
    id: "mth302_ch3_039",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = \\dfrac{x^2 - y^2}{1 + x^2 - y^2}$, where does the Lipschitz argument break down?",
    options: [
      "On the curve $1 + x^2 - y^2 = 0$",
      "At the origin only",
      "Wherever $y$ is negative",
      "On the line $y = x$"
    ],
    correctAnswer: 0,
    explanation: "The denominator vanishes on $1 + x^2 - y^2 = 0$, so $f$ is not even defined there and no bound on $f_y$ can hold near it.\n\nThe origin is a perfectly ordinary point, where the denominator equals $1$.\n\nNegative values of $y$ cause no difficulty, since only the square of $y$ enters.\n\nOn the line $y = x$ the numerator vanishes but the denominator equals $1$, so the function is well behaved."
  },
  {
    id: "mth302_ch3_040",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "If $f$ is continuous but not Lipschitz at a point, how many solutions may pass through that point?",
    options: [
      "Possibly more than one",
      "Exactly one",
      "None at all",
      "Exactly two"
    ],
    correctAnswer: 0,
    explanation: "Continuity still secures existence, but without a Lipschitz condition uniqueness can fail, so more than one solution may pass through the point.\n\nExactly one would require the uniqueness hypothesis that is precisely what has been lost.\n\nNo solution at all contradicts the existence theorem, which needs only continuity.\n\nNothing pins the count at two; the standard example admits a whole family."
  }
];

export default mth302Chapter3;
