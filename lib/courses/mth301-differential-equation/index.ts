import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import mth302Chapter1 from "./mth302_ch1";
import mth302Chapter2 from "./mth302_ch2";
import mth302Chapter3 from "./mth302_ch3";
import mth302Chapter4 from "./mth302_ch4";
import mth302Chapter5 from "./mth302_ch5";
import mth302Chapter6 from "./mth302_ch6";
import mth302Chapter7 from "./mth302_ch7";
import mth302Chapter8 from "./mth302_ch8";
import mth302Chapter9 from "./mth302_ch9";
import mth302Chapter10 from "./mth302_ch10";
import mth302Chapter11 from "./mth302_ch11";

export const mth302DifferentialEquationsCourse: Course = {
  id: "mth302-differential-equations",
  code: "MTH302",
  name: "Mathematical Methods IV",
  description:
    "Full-course coverage of ordinary and partial differential equations, Sturm-Liouville theory, special functions, and Fourier series, built for a multiple-choice examination: classification and recognition of equation types, standard solution methods, and the recurring traps examiners build distractors from.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Foundations and Classification",
      description:
        "What a differential equation is, order and degree, linear versus nonlinear, homogeneous equations, general and particular solutions, singular solutions, and the distinction between initial value and boundary value problems, including PDE classification into linear, semilinear, and quasilinear.",
    },
    {
      id: "Chapter 2",
      label: "First-Order Ordinary Differential Equations",
      description:
        "Separable equations, homogeneous first-order equations and the y = vx substitution, linear first-order equations and integrating factors, exact equations and integrating factors for non-exact equations, and the Bernoulli equation.",
    },
    {
      id: "Chapter 3",
      label: "Existence, Uniqueness, and Lipschitz Continuity",
      description:
        "The existence and uniqueness theorems for y' = f(x, y), the Lipschitz condition and how it differs from mere continuity, worked examples of Lipschitz verification, and cases where uniqueness fails despite existence holding.",
    },
    {
      id: "Chapter 4",
      label: "Second-Order Linear ODEs, Wronskian, and Abel's Theorem",
      description:
        "General form and superposition for homogeneous linear equations, the Wronskian and linear independence, Abel's theorem for computing the Wronskian without solving the equation, constant-coefficient equations with distinct, repeated, and complex roots, and reduction of order.",
    },
    {
      id: "Chapter 5",
      label: "Nonhomogeneous Second-Order Equations",
      description:
        "Structure of the general solution as complementary plus particular, undetermined coefficients including resonance and the multiply-by-x rule, variation of parameters for forcing terms outside the undetermined coefficients trial family, and applying initial conditions to the full solution.",
    },
    {
      id: "Chapter 6",
      label: "First-Order PDEs and the Method of Characteristics",
      description:
        "The characteristic equation derived from a change of variables, the Jacobian condition for an admissible transformation, worked characteristics examples, quasilinear equations and characteristics in (x, y, u) space, and the significance of characteristics for the Cauchy problem.",
    },
    {
      id: "Chapter 7",
      label: "Second-Order PDEs: Classification and Normal Form",
      description:
        "The discriminant B^2 - 4AC and classification into elliptic, parabolic, and hyperbolic types, pointwise classification for variable-coefficient equations, characteristic directions, and reduction to normal form for each of the three types, including the wave equation's normal form.",
    },
    {
      id: "Chapter 8",
      label: "Sturm-Liouville Systems and Orthogonality",
      description:
        "The Sturm-Liouville standard form and reading off p, q, r, and the weight function, the four core properties of regular Sturm-Liouville systems, worked eigenvalue problems under Dirichlet and Neumann conditions, and expansion in orthogonal eigenfunctions.",
    },
    {
      id: "Chapter 9",
      label: "The Gamma and Beta Functions",
      description:
        "The Gamma function's definition, recurrence, integer and half-integer values, behavior at negative non-integer arguments versus its poles at zero and negative integers, using Gamma to evaluate integrals, the Beta function and its trigonometric form, and the Beta-Gamma relation.",
    },
    {
      id: "Chapter 10",
      label: "Legendre and Bessel Functions",
      description:
        "Legendre's equation and the Legendre polynomials via Rodrigues' formula, the three-term recurrence relation, orthogonality and normalization, the generating function, and Bessel's equation with the relation between Bessel functions of positive and negative integer order.",
    },
    {
      id: "Chapter 11",
      label: "Periodic Functions and Fourier Series",
      description:
        "Periodic functions and their period, the Fourier series of period 2 pi and general period 2L, the constant term as the mean value, convergence at jump discontinuities, and symmetry shortcuts for even and odd functions.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...mth302Chapter1,
      ...mth302Chapter2,
      ...mth302Chapter3,
      ...mth302Chapter4,
      ...mth302Chapter5,
      ...mth302Chapter6,
      ...mth302Chapter7,
      ...mth302Chapter8,
      ...mth302Chapter9,
      ...mth302Chapter10,
      ...mth302Chapter11,
    ];
  },
};
