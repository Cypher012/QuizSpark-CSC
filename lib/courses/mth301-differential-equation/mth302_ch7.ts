import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter7: QuestionV2[] = [
  {
    id: "mth302_ch7_001",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $u_{xx} + 6u_{xy} + 9u_{yy} = 0$ classified?",
    options: [
      "Elliptic",
      "Parabolic",
      "Hyperbolic",
      "Its type depends on $x$"
    ],
    correctAnswer: 1,
    explanation: "With $A = 1$, $B = 6$, $C = 9$, the discriminant $B^2 - 4AC = 36 - 36 = 0$, so the equation is parabolic. A perfect square in the second-order terms, since the operator is $(\\partial_x + 3\\partial_y)^2$ applied to $u$, is always parabolic.\n\nElliptic would require a negative discriminant, which is not the case here.\n\nHyperbolic would require a positive discriminant.\n\nIts type depends on $x$ is wrong since the coefficients here are constants, so the discriminant is the same at every point."
  },
  {
    id: "mth302_ch7_002",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is the Tricomi equation $yu_{xx} + u_{yy} = 0$ classified?",
    options: [
      "Elliptic everywhere",
      "Hyperbolic everywhere",
      "Hyperbolic for $y < 0$ and elliptic for $y > 0$",
      "Elliptic for $y < 0$ and hyperbolic for $y > 0$"
    ],
    correctAnswer: 2,
    explanation: "With $A = y$, $B = 0$, $C = 1$, the discriminant is $B^2 - 4AC = -4y$, which is positive, giving hyperbolic type, when $y < 0$, and negative, giving elliptic type, when $y > 0$; on $y = 0$ the equation is parabolic. Classification is a pointwise property, so no single global label applies to this equation.\n\nElliptic everywhere and hyperbolic everywhere both wrongly assign one type across the entire plane, ignoring the dependence on the sign of $y$.\n\nElliptic for $y < 0$ and hyperbolic for $y > 0$ has the two regions reversed."
  },
  {
    id: "mth302_ch7_003",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $(1 + x^2)u_{xx} + (1 + y^2)u_{yy} + xu_x + yu_y = 0$ classified?",
    options: [
      "Elliptic everywhere",
      "Parabolic on the coordinate axes",
      "Hyperbolic wherever $xy < 0$",
      "Elliptic only in the first quadrant"
    ],
    correctAnswer: 0,
    explanation: "Here $B = 0$, so the discriminant is $-4(1 + x^2)(1 + y^2)$, which is strictly negative for every real $x$ and $y$ since both factors are always at least $1$. The lower-order terms $xu_x + yu_y$ have no effect on the classification at all, since only $A$, $B$, and $C$ determine the type.\n\nParabolic on the coordinate axes and hyperbolic wherever $xy < 0$ both wrongly assume the discriminant can vanish or turn positive, which never happens for this equation.\n\nElliptic only in the first quadrant wrongly restricts a classification that in fact holds everywhere."
  },
  {
    id: "mth302_ch7_004",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $u_{xx} + xu_{xy} + yu_{yy} = 0$, in which region is the equation hyperbolic?",
    options: [
      "$y > x^2/4$",
      "$y > x^2$",
      "$y < x^2/4$",
      "$x > y^2$"
    ],
    correctAnswer: 2,
    explanation: "The discriminant is $B^2 - 4AC = x^2 - 4y$, which is positive, giving hyperbolic type, exactly when $y < x^2/4$, that is, below the parabola $y = x^2/4$. On that curve the equation is parabolic, and above it the equation is elliptic.\n\n$y > x^2/4$ is the elliptic region, the opposite of hyperbolic.\n\n$y > x^2$ and $x > y^2$ do not match the correct discriminant expression $x^2 - 4y$."
  },
  {
    id: "mth302_ch7_005",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $u_{xx} - 2u_{xy} = 0$ classified?",
    options: [
      "Parabolic",
      "Elliptic",
      "Hyperbolic",
      "Not classifiable"
    ],
    correctAnswer: 2,
    explanation: "With $A = 1$, $B = -2$, $C = 0$, the discriminant is $B^2 - 4AC = 4$, which is positive, so the equation is hyperbolic. Whenever $C$ equals $0$ with $B$ nonzero, the discriminant reduces to $B^2$, which is automatically positive, giving a hyperbolic classification.\n\nParabolic would require the discriminant to equal zero, which it does not here.\n\nElliptic would require a negative discriminant, the opposite of what is found.\n\nNot classifiable is wrong since $A$, $B$, and $C$ are well defined constants here, giving a definite discriminant value."
  },
  {
    id: "mth302_ch7_006",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $xu_{xx} + yu_{yy} + xu_x + yu_y = 0$, in which region is the equation hyperbolic?",
    options: [
      "The first and third quadrants",
      "Nowhere in the plane",
      "The whole plane",
      "The second and fourth quadrants"
    ],
    correctAnswer: 3,
    explanation: "The discriminant is $B^2 - 4AC = -4xy$, which is positive precisely when $xy < 0$, describing the second and fourth quadrants. In the first and third quadrants $xy > 0$ and the equation is elliptic instead, and on either coordinate axis it is parabolic.\n\nThe first and third quadrants is actually where the equation is elliptic, not hyperbolic.\n\nNowhere in the plane and the whole plane both ignore the sign dependence of the discriminant on $xy$."
  },
  {
    id: "mth302_ch7_007",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $u_{xx} + (2x + 3)u_{xy} + 6xu_{yy} = 0$, at what value of $x$ is the equation parabolic?",
    options: [
      "$x = 0$",
      "$x = 3$",
      "$x = -3/2$",
      "$x = 3/2$"
    ],
    correctAnswer: 3,
    explanation: "The discriminant is $B^2 - 4AC = (2x + 3)^2 - 24x = 4x^2 - 12x + 9 = (2x - 3)^2$, which vanishes only when $x = 3/2$ and is positive everywhere else, so the equation is hyperbolic except on the single line $x = 3/2$, where it is parabolic.\n\n$x = 0$, $x = 3$, and $x = -3/2$ are not roots of the expanded discriminant $(2x - 3)^2$."
  },
  {
    id: "mth302_ch7_008",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $2u_{xx} + 2u_{xy} + 5u_{yy} = 0$, compute the discriminant $B^2 - 4AC$ and determine how many real characteristic families the equation has.",
    options: [
      "1, since the discriminant is assumed to vanish here, matching the parabolic case where the two characteristic directions coincide into a single family",
      "0, since the discriminant equals -36, which is negative, so the equation is elliptic",
      "2, since a positive discriminant would give two distinct real directions",
      "Infinitely many"
    ],
    correctAnswer: 1,
    explanation: "Here $A=2$, $B=2$, $C=5$, so $B^2-4AC = 4 - 40 = -36$, which is negative, making the equation elliptic. An elliptic equation has no real characteristic directions at all, since the roots of the characteristic quadratic are complex conjugates.\n\nOne real family is the count for a parabolic equation, which requires the discriminant to equal zero, not -36.\n\nTwo real families is the count for a hyperbolic equation, which requires a positive discriminant.\n\nInfinitely many does not correspond to any of the three classification types, since the family count is always 0, 1, or 2."
  },
  {
    id: "mth302_ch7_009",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Using $\\xi = y - 3x$ and $\\eta = x$, what is the normal form of $u_{xx} + 6u_{xy} + 9u_{yy} = 0$?",
    options: [
      "$u_{\\xi\\xi} = 0$",
      "$u_{\\eta\\eta} = 0$",
      "$u_{\\xi\\eta} = 0$",
      "$u_{\\xi\\xi} + u_{\\eta\\eta} = 0$"
    ],
    correctAnswer: 1,
    explanation: "Substituting the transformed derivatives, the $u_{\\xi\\xi}$ terms cancel exactly, since $9 - 18 + 9 = 0$, and so do the $u_{\\xi\\eta}$ terms, since $-6 + 6 = 0$, leaving only $u_{\\eta\\eta} = 0$. Parabolic equations always reduce to a single pure second derivative in the normal form, never to the mixed derivative $u_{\\xi\\eta}$, which is the hyperbolic pattern.\n\n$u_{\\xi\\xi} = 0$ wrongly keeps the term that actually cancels in this parabolic reduction.\n\n$u_{\\xi\\eta} = 0$ is the correct pattern for a hyperbolic equation, not a parabolic one.\n\n$u_{\\xi\\xi} + u_{\\eta\\eta} = 0$ is the elliptic normal form pattern, which does not apply here."
  },
  {
    id: "mth302_ch7_010",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Integrating the parabolic normal form $u_{\\eta\\eta} = 0$ gives which general solution?",
    options: [
      "$u = \\eta f(\\xi) + g(\\xi)$",
      "$u = f(\\xi) + g(\\eta)$",
      "$u = \\xi f(\\eta) + g(\\eta)$",
      "$u = f(\\xi)g(\\eta)$"
    ],
    correctAnswer: 0,
    explanation: "Integrating $u_{\\eta\\eta} = 0$ twice with respect to $\\eta$ treats $\\xi$ as a parameter, so the two constants of integration are arbitrary functions of $\\xi$, giving $u = \\eta f(\\xi) + g(\\xi)$.\n\nA plain sum of functions of each variable does not satisfy the equation, since differentiating twice in $\\eta$ would not annihilate $g(\\eta)$.\n\nInterchanging the roles of the variables integrates in the wrong direction.\n\nA product of two arbitrary functions does not arise from repeated integration."
  },
  {
    id: "mth302_ch7_011",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Transforming the wave equation $u_{tt} = a^2u_{xx}$ using $\\xi = x + at$ and $\\eta = x - at$ gives which normal form?",
    options: [
      "$u_{\\xi\\xi} = 0$",
      "$u_{\\xi\\eta} = 0$",
      "$u_{\\xi\\xi} + u_{\\eta\\eta} = 0$",
      "$u_{\\xi\\xi} - u_{\\eta\\eta} = 0$"
    ],
    correctAnswer: 1,
    explanation: "Since $u_{xx} = u_{\\xi\\xi} + 2u_{\\xi\\eta} + u_{\\eta\\eta}$ and $u_{tt} = a^2(u_{\\xi\\xi} - 2u_{\\xi\\eta} + u_{\\eta\\eta})$, subtracting $a^2u_{xx}$ from $u_{tt}$ leaves $-4a^2u_{\\xi\\eta} = 0$. Integrating twice gives $u = f(x + at) + g(x - at)$, the two traveling waves of D'Alembert's solution.\n\n$u_{\\xi\\xi} = 0$ is the parabolic pattern, not the hyperbolic pattern that applies to the wave equation.\n\n$u_{\\xi\\xi} + u_{\\eta\\eta} = 0$ is the elliptic pattern.\n\n$u_{\\xi\\xi} - u_{\\eta\\eta} = 0$ does not match the cancellation that actually occurs during the substitution."
  },
  {
    id: "mth302_ch7_012",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $3u_{xx} + 4u_{xy} + 2u_{yy} + 7u_x - 5u_y + u = e^x$, which classification does it have?",
    options: [
      "Elliptic, since only $A=3$, $B=4$, and $C=2$ enter the discriminant, giving $B^2-4AC = 16-24 = -8$, while the terms $7u_x$, $-5u_y$, and $u$ play no role in the classification",
      "Hyperbolic, obtained by treating the coefficient of $u_x$ as the value of $C$ instead of $2$",
      "Parabolic, obtained by assuming the discriminant vanishes whenever lower-order terms are present",
      "Indeterminate, since the classification cannot be decided without also knowing the coefficient of $u$"
    ],
    correctAnswer: 0,
    explanation: "Only the second-order, or principal, part of the equation decides the classification, through the discriminant $B^2-4AC$. Here $A=3$, $B=4$, $C=2$, so $B^2-4AC = 16-24 = -8$, which is negative, giving an elliptic equation; the lower-order coefficients $7$, $-5$, and $1$, and the forcing term $e^x$, play no part in the computation.\n\nTreating the coefficient of $u_x$ as if it were $C$ mixes up a first-order coefficient with a second-order one, which changes the discriminant to a value that does not belong to this equation at all.\n\nAssuming lower-order terms force the discriminant to vanish misunderstands the rule entirely, since $D$, $E$, and $F$ never enter $B^2-4AC$.\n\nThe classification never depends on the coefficient of $u$, since $F$ is a lower-order coefficient just like $D$ and $E$."
  },
  {
    id: "mth302_ch7_013",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $u_{xx} + 4u_{xy} + u_{yy} = 0$, using this course's convention where $B$ is the full coefficient of $u_{xy}$, what is the value of the discriminant $B^2-4AC$, and what type does it give?",
    options: [
      "12, since $B^2-4AC = 16 - 4 = 12$, which is positive, so the equation is hyperbolic",
      "15, obtained by using the alternative convention $B^2-AC$ that applies when the equation is written with a leading factor of $2$ on the mixed term, giving a different numerical value though not a different type",
      "$-12$, obtained by reversing the sign of the standard formula",
      "$-15$"
    ],
    correctAnswer: 0,
    explanation: "With $A=1$, $B=4$, $C=1$ and $B$ read as the full coefficient of $u_{xy}$, the discriminant is $B^2-4AC = 16-4 = 12$, which is positive, so the equation is hyperbolic.\n\nThe value 15 belongs to the alternative convention in which the mixed term is written as $2Bu_{xy}$ and the discriminant is $B^2-AC$; the sign, and hence the type, is unchanged, but the numerical value differs from this course's convention.\n\nReversing the sign to $-12$ would wrongly turn a hyperbolic equation into an elliptic one.\n\n$-15$ compounds both of the errors above at once."
  },
  {
    id: "mth302_ch7_014",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $6u_{xx} + 2u_{xy} + 5u_{yy} = 0$, compute the discriminant and classify the equation.",
    options: [
      "Hyperbolic",
      "Elliptic, since $B^2-4AC = 4 - 120 = -116$, which is negative",
      "Parabolic, obtained by assuming the cross term contributes $B^2-AC$ rather than $B^2-4AC$ and that this alternative value happens to equal zero for these coefficients",
      "Undetermined without also knowing the lower-order coefficients"
    ],
    correctAnswer: 1,
    explanation: "Here $A=6$, $B=2$, $C=5$, so $B^2-4AC = 4 - 120 = -116$, which is negative, corresponding to the elliptic case modelled by the Laplace equation.\n\nHyperbolic would require a positive discriminant, the opposite sign of what is found here.\n\nUsing $B^2-AC$ instead of $B^2-4AC$ still gives $4-30=-26$, which is negative, not zero, so this route does not actually produce a parabolic conclusion either.\n\nThe lower-order coefficients play no part in classification, since only $A$, $B$, and $C$ enter the discriminant."
  },
  {
    id: "mth302_ch7_015",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $xu_{xx} + 4u_{xy} + yu_{yy} + x^3u_x - 2u = 0$, how is it classified at the point $(x,y) = (1,3)$?",
    options: [
      "Hyperbolic, since at this point $A=1$, $B=4$, $C=3$, giving $B^2-4AC = 16-12 = 4$, which is positive",
      "Elliptic everywhere, since a single fixed type must apply across the whole plane once the equation is written down, regardless of how $A$ and $C$ depend on position",
      "Parabolic, since the discriminant is assumed to vanish once the term $x^3u_x$ is included",
      "Elliptic"
    ],
    correctAnswer: 0,
    explanation: "Only the coefficients of the second-order derivatives enter the discriminant, so the terms $x^3u_x$ and $-2u$ play no role here. At $(x,y)=(1,3)$, $A=x=1$, $B=4$, $C=y=3$, giving $B^2-4AC = 16-12 = 4$, which is positive, so the equation is hyperbolic at this point.\n\nSince $A$ and $C$ are functions of position here, the type is decided pointwise and can change across the plane, so no single fixed label can be assigned without specifying where.\n\nThe first-order term $x^3u_x$ has no effect on the discriminant at all, so it cannot make the equation parabolic.\n\nElliptic would require a negative discriminant, which is not the value found at this point."
  },
  {
    id: "mth302_ch7_016",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $u_t = 5u_{xx}$, treating $x$ and $t$ as the two independent variables so that $A$ is the coefficient of $u_{xx}$ and there is no $u_{tt}$ or mixed term, what is the resulting classification?",
    options: [
      "Hyperbolic",
      "Parabolic, since $C=0$ and $B=0$ give $B^2-4AC = 0$, matching the diffusion equation pattern",
      "Elliptic, obtained by assuming that the missing $u_{tt}$ term should be replaced with a negative coefficient before the discriminant is computed",
      "Undetermined"
    ],
    correctAnswer: 1,
    explanation: "With $A=5$, and no $u_{tt}$ term and no mixed term, $C=0$ and $B=0$, so $B^2-4AC = 0-0 = 0$, making the equation parabolic; this is exactly the diffusion-equation pattern, since $u_t=\\kappa u_{xx}$ has the same structure for any positive $\\kappa$.\n\nHyperbolic would require a positive discriminant, which does not occur when $B=0$ and $C=0$.\n\nInventing a coefficient for a $u_{tt}$ term that is not actually present in the equation is not a valid step; $C$ is genuinely $0$ here, not negative.\n\nThe equation is well posed and its coefficients are fully known, so the discriminant, and hence the type, is determined rather than undetermined."
  },
  {
    id: "mth302_ch7_017",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Why must an equation with variable coefficients be classified pointwise?",
    options: [
      "Its discriminant can change sign from one point of the region to another",
      "Its order changes as the point moves across the region under consideration",
      "Its lower-order terms vary with position and so alter the type",
      "Its solutions cease to exist outside a bounded region of the plane"
    ],
    correctAnswer: 0,
    explanation: "Because $A$, $B$ and $C$ may depend on $x$ and $y$, the sign of $B^2 - 4AC$ can differ at different points, so the type is assigned point by point.\n\nThe order of the equation is fixed and does not vary with position.\n\nLower-order terms never affect classification.\n\nExistence of solutions is a separate matter from the classification."
  },
  {
    id: "mth302_ch7_018",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $y^2u_{xx} - 2xyu_{xy} + x^2u_{yy} = \\dfrac{y^2}{x}u_x + \\dfrac{x^2}{y}u_y$ classified?",
    options: [
      "Parabolic everywhere, since the discriminant vanishes identically",
      "Hyperbolic everywhere",
      "Elliptic everywhere, because both outer coefficients are squares",
      "Elliptic for $xy > 0$ and hyperbolic for $xy < 0$"
    ],
    correctAnswer: 0,
    explanation: "With $A = y^2$, $B = -2xy$, $C = x^2$ we get $\\Delta = 4x^2y^2 - 4x^2y^2 = 0$, so it is parabolic at every point.\n\nThe sign of $B$ is irrelevant, since $B$ is squared in the discriminant.\n\nBeing squares does not by itself force an elliptic classification.\n\nThe discriminant vanishes identically, so the type never changes."
  },
  {
    id: "mth302_ch7_019",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $2u_{xx} - 2u_{xy} + 5u_{yy} = 0$ classified?",
    options: [
      "Elliptic",
      "Hyperbolic",
      "Parabolic, because the discriminant vanishes for these coefficients",
      "Elliptic only where $y > 0$ and hyperbolic elsewhere"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = (-2)^2 - 4(2)(5) = 4 - 40 = -36 < 0$, so the equation is elliptic.\n\nA positive discriminant would be needed for the hyperbolic case.\n\nA vanishing discriminant would be needed for the parabolic case.\n\nThe coefficients are constants, so the type cannot vary with position."
  },
  {
    id: "mth302_ch7_020",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $4u_{xx} - 4u_{xy} + u_{yy} = 0$ classified?",
    options: [
      "Parabolic",
      "Hyperbolic, because the mixed coefficient exceeds the other two in magnitude",
      "Elliptic",
      "Hyperbolic except along a single line where it is parabolic"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = (-4)^2 - 4(4)(1) = 16 - 16 = 0$, so the equation is parabolic.\n\nA positive discriminant would be required for the hyperbolic case.\n\nThe discriminant is zero rather than negative.\n\nWith constant coefficients the type is the same at every point."
  },
  {
    id: "mth302_ch7_021",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $u_{xx} + 2\\sin x\\,u_{xy} - \\cos^2 x\\,u_{yy} - \\cos x\\,u_y = 0$ classified?",
    options: [
      "Hyperbolic everywhere",
      "Parabolic wherever $\\sin x$ vanishes and hyperbolic elsewhere",
      "Elliptic everywhere",
      "Hyperbolic only where $\\cos x$ is positive"
    ],
    correctAnswer: 0,
    explanation: "With $A = 1$, $B = 2\\sin x$, $C = -\\cos^2 x$ we get $\\Delta = 4\\sin^2 x + 4\\cos^2 x = 4 > 0$ for every $x$, so it is hyperbolic everywhere.\n\nThe identity $\\sin^2 x + \\cos^2 x = 1$ prevents the discriminant from ever vanishing.\n\nA negative $C$ with positive $A$ pushes the discriminant up, not down.\n\nThe term $-\\cos x\\,u_y$ is a first-order term and cannot affect the type."
  },
  {
    id: "mth302_ch7_022",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $(x^2 - 1)u_{xx} + 2yu_{xy} - u_{yy} = 0$, where is the equation hyperbolic?",
    options: [
      "Outside the unit circle",
      "Inside the unit circle, where the discriminant becomes positive",
      "Only on the unit circle itself, where the discriminant vanishes",
      "Everywhere in the plane, regardless of position"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = 4y^2 + 4(x^2 - 1) = 4(x^2 + y^2 - 1)$, which is positive precisely when $x^2 + y^2 > 1$.\n\nInside the circle the discriminant is negative, giving the elliptic case.\n\nOn the circle the discriminant vanishes, giving the parabolic case.\n\nThe sign genuinely changes, so no single type covers the plane."
  },
  {
    id: "mth302_ch7_023",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the Tricomi equation $yu_{xx} + u_{yy} = 0$, what is the discriminant?",
    options: [
      "$-4y$",
      "$4y$",
      "$-y$",
      "$y^2$"
    ],
    correctAnswer: 0,
    explanation: "With $A = y$, $B = 0$, $C = 1$ we get $\\Delta = 0 - 4(y)(1) = -4y$.\n\nDropping the minus sign inverts the elliptic and hyperbolic regions.\n\nOmitting the factor four changes the numerical value.\n\nSquaring $y$ misreads which coefficient is squared in the formula."
  },
  {
    id: "mth302_ch7_024",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $7u_{xx} + 2u_{yy} = 0$, where the mixed-derivative coefficient is $B=0$, what does the sign of the discriminant come from, and what is the resulting classification?",
    options: [
      "The product $AC = 14$, giving $B^2-4AC = -56$, which is negative, so the equation is elliptic",
      "The value of $A$ alone, since $A=7$ is positive, which by itself is treated as sufficient to conclude that the equation is elliptic without reference to $C$",
      "The sum $A+C = 9$, giving a positive discriminant and a hyperbolic classification",
      "Neither $A$ nor $C$, since $B=0$ forces the equation to be parabolic"
    ],
    correctAnswer: 0,
    explanation: "With $B=0$ the discriminant reduces to $-4AC$. Here $A=7$ and $C=2$, so $AC=14$ and $B^2-4AC = 0 - 56 = -56$, which is negative, so like signs in $A$ and $C$ give an elliptic equation.\n\n$A$ alone cannot determine the product's sign, since a positive $A$ paired with a negative $C$ would instead give a hyperbolic equation.\n\nThe sum $A+C$ never appears in the discriminant formula, only the product does.\n\nSetting $B=0$ does not by itself force a parabolic type; that requires $AC=0$ as well, which is not the case here since neither $A$ nor $C$ vanishes."
  },
  {
    id: "mth302_ch7_025",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $3u_{xx} + 5u_{xy} = 0$, where $C=0$ and $B=5 \\neq 0$, what type is the equation, and why does the value of $A$ not matter here?",
    options: [
      "Hyperbolic, since $B^2-4AC$ reduces to $B^2 = 25$, which is positive regardless of $A$",
      "Parabolic, since setting $C=0$ is treated as forcing the whole second-order part to vanish, which is assumed to make the discriminant zero regardless of the value of $B$",
      "Elliptic, since $A=3$ is positive and assumed to dominate the sign",
      "Indeterminate without knowing $A$"
    ],
    correctAnswer: 0,
    explanation: "With $C=0$, the discriminant $B^2-4AC$ reduces to $B^2 = 25$, which is positive regardless of what $A$ equals, so the equation is hyperbolic automatically once $C=0$ and $B \\neq 0$.\n\nA vanishing $C$ does not make the discriminant zero unless $B$ also vanishes, and here $B=5 \\neq 0$.\n\nThe discriminant is a perfect square in this case and so cannot be negative, ruling out an elliptic classification regardless of the sign of $A$.\n\nThe value of $A$ genuinely drops out of the discriminant once $C=0$, so the type is fully determined without it."
  },
  {
    id: "mth302_ch7_026",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "An equation whose second-order part is a perfect square, such as $u_{xx} + 2xu_{xy} + x^2u_{yy}$, is of which type?",
    options: [
      "Parabolic",
      "Hyperbolic",
      "Elliptic, because the coefficient of $u_{yy}$ is a square",
      "Hyperbolic away from the origin and parabolic at the origin"
    ],
    correctAnswer: 0,
    explanation: "A perfect square gives $\\Delta = (2x)^2 - 4(1)(x^2) = 0$ identically, so the equation is parabolic everywhere.\n\nA variable coefficient does not by itself create a positive discriminant.\n\nThe square on $C$ does not force an elliptic classification.\n\nThe discriminant vanishes identically, so the type does not change with position."
  },
  {
    id: "mth302_ch7_027",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $u_{xx} - 6u_{xy} + 3u_{yy} = 0$, compute the discriminant and state how many real characteristic families the equation has.",
    options: [
      "Zero",
      "One, since the discriminant is assumed to vanish for these coefficients",
      "Two, since $B^2-4AC = 36 - 12 = 24$, which is positive, so the equation is hyperbolic",
      "Infinitely many, since the mixed-derivative term $-6u_{xy}$ is treated as introducing an extra family beyond the two ordinary directions given by a positive discriminant"
    ],
    correctAnswer: 2,
    explanation: "Here $A=1$, $B=-6$, $C=3$, so $B^2-4AC = 36 - 12 = 24$, which is positive, so the equation is hyperbolic and has two distinct real roots for $dy/dx$, hence two real characteristic families.\n\nZero real families is the count for an elliptic equation, which requires a negative discriminant, not $24$.\n\nOne family corresponds to the parabolic case, where the discriminant vanishes and the two roots coincide, which is not the case here.\n\nThe mixed-derivative coefficient does not introduce any additional families beyond the two given by the two roots of the characteristic quadratic."
  },
  {
    id: "mth302_ch7_028",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $9u_{xx} + 6u_{xy} + u_{yy} = 0$, compute the discriminant and state how many real characteristic families the equation has.",
    options: [
      "Two, since a positive discriminant is assumed here even though $B^2-4AC$ actually equals $36-36=0$ for these coefficients",
      "One, since $B^2-4AC = 36-36 = 0$, so the equation is parabolic",
      "Zero, since the coefficients $9$ and $1$ are both positive, which is treated as automatically giving a negative discriminant regardless of the middle coefficient",
      "Infinitely many"
    ],
    correctAnswer: 1,
    explanation: "Here $A=9$, $B=6$, $C=1$, so $B^2-4AC = 36-36 = 0$, meaning the discriminant vanishes; this makes the two roots of the characteristic equation coincide, leaving a single real family, so the equation is parabolic.\n\nTwo distinct families would require a positive discriminant, but $36-36=0$ is not positive.\n\nBoth outer coefficients being positive does not by itself force a negative discriminant, since the middle coefficient $B$ still enters through $B^2$; here it happens to make the discriminant exactly zero rather than negative.\n\nThe count refers to families of curves, not to individual curves, and a second-order equation in two variables never has more than two real families."
  },
  {
    id: "mth302_ch7_029",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $u_{xx} - 5u_{xy} + 6u_{yy} = 0$, use the characteristic-direction formula $\\dfrac{dy}{dx} = \\dfrac{B \\pm \\sqrt{B^2-4AC}}{2A}$ to find the two characteristic directions.",
    options: [
      "2 and 3, obtained by treating $B$ as $+5$ instead of $-5$ before applying the formula",
      "$-1/3$ and $-1/2$, obtained by dividing by $2C$ instead of $2A$ in the denominator",
      "$-2$ and $-3$, obtained from $(-5 \\pm 1)/2$",
      "$-4$ and $-6$"
    ],
    correctAnswer: 2,
    explanation: "Here $A=1$, $B=-5$, $C=6$, so $B^2-4AC = 25 - 24 = 1$, confirming the equation is hyperbolic. The two directions are $\\dfrac{-5 \\pm \\sqrt{1}}{2} = \\dfrac{-5 \\pm 1}{2}$, giving $-2$ and $-3$.\n\nTreating $B$ as though it were $+5$ instead of the actual value $-5$ flips both resulting directions to the wrong sign.\n\nDividing by $2C$ instead of $2A$ misplaces which coefficient belongs in the denominator of the formula.\n\nOmitting the factor of $2$ from the denominator $2A$ and dividing by $1$ instead gives values twice as large in magnitude as the correct directions."
  },
  {
    id: "mth302_ch7_030",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $4u_{xx} - 12u_{xy} + 9u_{yy} = 0$, first confirm that it is parabolic, then find its single characteristic direction $\\dfrac{dy}{dx} = \\dfrac{B}{2A}$.",
    options: [
      "$-3$, obtained by dividing $B$ by $A$ instead of by $2A$, which omits the factor of two required by the formula",
      "$-2/3$, obtained by inverting the ratio and computing $2A/B$ instead of $B/(2A)$",
      "$-3/2$, since $B=-12$ and $2A=8$",
      "$9/8$"
    ],
    correctAnswer: 2,
    explanation: "Here $A=4$, $B=-12$, $C=9$, so $B^2-4AC = 144-144=0$, confirming the equation is parabolic, with $\\Delta=0$ making the square root vanish and the two directions collapse to the single value $\\dfrac{B}{2A} = \\dfrac{-12}{8} = -\\dfrac{3}{2}$.\n\nDividing $B$ by $A$ instead of by $2A$ omits the factor of two required by the formula, doubling the magnitude of the result.\n\nInverting the ratio to $2A/B$ reverses which quantity is on top, giving the reciprocal of the correct direction instead of the direction itself.\n\nUsing $C$ in the numerator instead of $B$ misreads which coefficient survives once the square root vanishes."
  },
  {
    id: "mth302_ch7_031",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $u_{xx} + 3u_{xy} + u_{yy} = 0$, first classify it using the discriminant, then state which normal form it reduces to after transforming to characteristic coordinates $\\xi, \\eta$.",
    options: [
      "$u_{\\xi\\eta} = \\phi$",
      "$u_{\\xi\\xi} + u_{\\eta\\eta} = \\phi$, the elliptic pattern, which would require a negative discriminant rather than the positive value $5$ found here",
      "$u_{\\eta\\eta} = \\phi$, the parabolic pattern, which would require the discriminant to vanish rather than equal $5$",
      "$u_{\\xi\\xi} = \\phi$, obtained by mistaking the single pure second derivative of the parabolic case for the mixed-derivative pattern that this positive discriminant actually requires"
    ],
    correctAnswer: 0,
    explanation: "Here $A=1$, $B=3$, $C=1$, so $B^2-4AC = 9-4 = 5$, which is positive, so the equation is hyperbolic. In characteristic coordinates a hyperbolic equation reduces to the mixed-derivative form $u_{\\xi\\eta} = \\phi$, equivalently $u_{\\xi\\xi} - u_{\\eta\\eta} = \\phi$.\n\nThe sum of two pure second derivatives is the elliptic normal form, which would require a negative discriminant rather than the positive value $5$ found here.\n\nA single pure second derivative of the form $u_{\\eta\\eta}=\\phi$ is the parabolic normal form, which would require the discriminant to vanish rather than equal $5$.\n\nThe same objection applies to $u_{\\xi\\xi}=\\phi$, which is just the other equivalent way of writing the parabolic normal form and does not match a positive discriminant."
  },
  {
    id: "mth302_ch7_032",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $u_{xx} + u_{xy} + u_{yy} = 0$, first classify it using the discriminant, then state which normal form it reduces to after transforming to characteristic coordinates $\\xi, \\eta$.",
    options: [
      "$u_{\\xi\\eta} = \\phi$, the hyperbolic pattern, which would require a positive discriminant rather than the negative value $-3$ found here",
      "$u_{\\eta\\eta} = \\phi$, the parabolic pattern, which would require the discriminant to vanish rather than equal $-3$",
      "$u_{\\xi\\xi} + u_{\\eta\\eta} = \\phi$",
      "$u_{\\xi\\xi} - u_{\\eta\\eta} = \\phi$, an alternative hyperbolic pattern that likewise requires a positive discriminant rather than the negative value found here"
    ],
    correctAnswer: 2,
    explanation: "Here $A=1$, $B=1$, $C=1$, so $B^2-4AC = 1-4 = -3$, which is negative, so the equation is elliptic. An elliptic equation reduces to the Laplace-like form $u_{\\xi\\xi} + u_{\\eta\\eta} = \\phi$, reflecting the absence of any real characteristic directions.\n\nThe mixed-derivative form $u_{\\xi\\eta}=\\phi$ is the hyperbolic pattern, which would require a positive discriminant rather than the negative value $-3$ found here.\n\nA single pure second derivative such as $u_{\\eta\\eta}=\\phi$ is the parabolic pattern, which would require the discriminant to vanish rather than equal $-3$.\n\nThe difference form $u_{\\xi\\xi}-u_{\\eta\\eta}=\\phi$ is just the equivalent way of writing the hyperbolic pattern, so it fails for the same reason as the mixed-derivative form."
  },
  {
    id: "mth302_ch7_033",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $(1 - M^2)u_{xx} + u_{yy} = 0$, for which $M$ is the equation elliptic?",
    options: [
      "$|M| < 1$",
      "$|M| > 1$",
      "$M = \\pm 1$ exactly, where the leading coefficient vanishes",
      "Every real $M$"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = -4(1 - M^2) = 4(M^2 - 1)$, which is negative precisely when $M^2 < 1$, that is $|M| < 1$.\n\nFor $|M| > 1$ the discriminant is positive, giving the hyperbolic case.\n\nAt $M = \\pm 1$ the discriminant vanishes, giving the parabolic case.\n\nThe sign genuinely changes with $M$, so no single type covers all values."
  },
  {
    id: "mth302_ch7_034",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $u_{xx} + xu_{xy} + yu_{yy} = 0$, on which curve is the equation parabolic?",
    options: [
      "$y = \\dfrac{x^2}{4}$",
      "$y = x^2$",
      "$y = 4x^2$",
      "$x = \\dfrac{y^2}{4}$, interchanging the roles of the two variables"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = x^2 - 4y$, which vanishes exactly when $y = \\dfrac{x^2}{4}$.\n\nOmitting the division by four misreads the discriminant.\n\nMultiplying by four moves in the wrong direction.\n\nInterchanging the variables solves the wrong equation."
  },
  {
    id: "mth302_ch7_035",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "When choosing new coordinates to reach normal form, what must be true of $\\xi$ and $\\eta$?",
    options: [
      "Their Jacobian must not vanish, so the transformation stays invertible",
      "They must be chosen parallel to one another so the algebra simplifies",
      "They must both be constant along the same characteristic family",
      "They must be linear functions of $x$ and $y$ in every case"
    ],
    correctAnswer: 0,
    explanation: "A nonvanishing Jacobian keeps the change of variables invertible, which is why $\\eta$ must not be chosen parallel to $\\xi$ in the parabolic case.\n\nParallel choices make the Jacobian vanish and destroy the transformation.\n\nUsing the same family for both would again collapse the Jacobian.\n\nCharacteristic coordinates are frequently nonlinear, as the Tricomi equation shows."
  },
  {
    id: "mth302_ch7_036",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $u_{xx} - 2u_{xy} + u_{yy} = 0$ classified?",
    options: [
      "Parabolic",
      "Hyperbolic",
      "Elliptic",
      "Parabolic only along the line $y = x$"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = (-2)^2 - 4(1)(1) = 0$, so the equation is parabolic at every point.\n\nThe sign of $B$ is irrelevant because $B$ is squared.\n\nPositive outer coefficients do not by themselves force the elliptic case.\n\nThe coefficients are constants, so the type cannot vary."
  },
  {
    id: "mth302_ch7_037",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Under the alternative convention writing the equation as $Au_{xx} + 2Bu_{xy} + Cu_{yy}$, what changes?",
    options: [
      "The numerical value of the discriminant changes, but the classification is unaffected",
      "The classification itself, since the sign of the discriminant reverses",
      "Both the value and the resulting type assigned to the equation",
      "Neither the value nor the type, since the conventions agree exactly"
    ],
    correctAnswer: 0,
    explanation: "The two conventions differ by a positive factor, so the sign, and hence the classification, is unchanged while the numerical value differs.\n\nA positive factor cannot reverse a sign.\n\nSince the sign is preserved, the type cannot change.\n\nThe values do differ, so the conventions do not agree numerically."
  },
  {
    id: "mth302_ch7_038",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $xu_{xx} + yu_{yy} + xu_x + yu_y = 0$, where is the equation elliptic?",
    options: [
      "Where $xy > 0$",
      "Where $xy < 0$",
      "On the coordinate axes",
      "Everywhere"
    ],
    correctAnswer: 0,
    explanation: "With $A = x$, $B = 0$, $C = y$ the discriminant is $-4xy$, which is negative exactly when $xy > 0$, that is in the first and third quadrants.\n\nWhere $xy < 0$ the discriminant is positive and the equation is hyperbolic.\n\nOn the axes the discriminant vanishes, giving the parabolic case.\n\nThe sign of $xy$ varies, so the type is not constant."
  },
  {
    id: "mth302_ch7_039",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the equation $u_{xx} - 4u_{xy} + 4u_{yy} = 0$, first classify it using the discriminant, then state which normal form it reduces to after transforming to characteristic coordinates $\\xi, \\eta$.",
    options: [
      "$u_{\\xi\\eta} = \\phi$, the hyperbolic pattern, which would require a positive discriminant rather than the value $0$ found here",
      "$u_{\\xi\\xi} + u_{\\eta\\eta} = \\phi$, the elliptic pattern, which would require a negative discriminant rather than the value $0$ found here",
      "$u_{\\xi\\xi} - u_{\\eta\\eta} = \\phi$, an alternative hyperbolic pattern that requires a positive rather than zero discriminant",
      "$u_{\\eta\\eta} = \\phi$"
    ],
    correctAnswer: 3,
    explanation: "Here $A=1$, $B=-4$, $C=4$, so $B^2-4AC = 16-16 = 0$, so the equation is parabolic. With only one real characteristic direction, a parabolic equation reduces to a single pure second derivative, $u_{\\eta\\eta} = \\phi$, equivalently $u_{\\xi\\xi} = \\phi$.\n\nThe mixed-derivative form $u_{\\xi\\eta}=\\phi$ characterises the hyperbolic case, which would require a positive discriminant rather than the value $0$ found here.\n\nThe sum of two pure second derivatives characterises the elliptic case, which would require a negative discriminant rather than the value $0$ found here.\n\nThe difference of two pure second derivatives is just the equivalent way of writing the hyperbolic pattern, so it fails for the same reason as the mixed-derivative form."
  },
  {
    id: "mth302_ch7_040",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $u_{xx} + 6u_{xy} + 9u_{yy} = 0$ classified, and what is its discriminant?",
    options: [
      "Parabolic, with $\\Delta = 0$",
      "Hyperbolic",
      "Elliptic",
      "Parabolic"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = 6^2 - 4(1)(9) = 36 - 36 = 0$, so the equation is parabolic.\n\nTaking $\\Delta = 36$ omits the subtraction of $4AC$ entirely.\n\nA negative value would require $4AC$ to exceed $B^2$.\n\nUsing $36 - 9$ forgets the factor of four multiplying $AC$."
  }
];

export default mth302Chapter7;
