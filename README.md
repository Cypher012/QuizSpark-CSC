# QuizSpark

A modern, interactive quiz application built for university students to study and self-test across multiple courses. QuizSpark features fully randomized question order and answer shuffling, instant feedback, and a clean dark-themed UI.

---

## Features

- **Multi-course support** — switch between courses from the home screen
- **Chapter selection** — study a specific chapter or run "All Chapters" for a full mixed session
- **Randomized questions** — question order and answer options are shuffled on every session using Fisher-Yates
- **Instant feedback** — explanations are shown immediately after answering
- **Score tracking** — live score counter and a detailed results summary at the end
- **Question navigator** — jump to any previously answered question from the bottom panel
- **Course visibility settings** — enable or disable courses from the settings panel (persisted in localStorage)
- **Dark mode** — dark-first UI with light mode support via `next-themes`
- **Tokenized quiz mode** — progressive mastery system for definition-heavy courses (CSC307)

---

## Courses

| Code    | Course                          | Chapters |
|---------|---------------------------------|----------|
| CPE301  | Assembly Language Programming   | 6        |
| CSC311  | Introduction to Information Systems | 5    |
| CSC221  | Computer Appreciation           | 7        |
| CSC315  | Data Structures and Algorithms  | 2        |
| CSC307  | Numerical Computations I        | 1 (tokenized mastery mode) |

---

## Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | Next.js 16 (App Router, Turbopack)|
| Language    | TypeScript 5                      |
| Styling     | Tailwind CSS v4                   |
| UI Components | Radix UI + shadcn/ui            |
| Icons       | Lucide React                      |
| Theming     | next-themes                       |
| Analytics   | Vercel Analytics                  |

---

## Project Structure

```
interactive-quiz-application/
├── app/                        # Next.js App Router
│   ├── layout.tsx
│   └── page.tsx
├── components/                 # UI components
│   ├── quiz-container.tsx      # Main quiz orchestrator
│   ├── question-card.tsx       # Question display + answer options
│   ├── chapter-select.tsx      # Chapter picker screen
│   ├── course-select.tsx       # Course picker screen
│   ├── result-summary.tsx      # End-of-quiz results
│   ├── progress-header.tsx     # Score + progress bar
│   ├── question-navigator.tsx  # Bottom question jump panel
│   ├── course-settings.tsx     # Enable/disable courses
│   └── csc307-quiz-container.tsx # Tokenized mastery quiz (CSC307)
├── lib/
│   ├── courses.ts              # Course registry + toggle helpers
│   ├── quiz-types.ts           # QuestionV2, ShuffledQuestion types
│   ├── utils/
│   │   └── question-shuffle.ts # Fisher-Yates question + option shuffler
│   └── courses/
│       ├── cpe301-assembly/    # CPE301 question bank
│       ├── csc311-info-systems/# CSC311 question bank
│       ├── csc221-computer-appreciation/ # CSC221 question bank (ch1–7)
│       ├── csc315-dsa/             # CSC315 question bank (Lecturers 1, 3)
│       └── csc307-numerical-computation/ # CSC307 tokenized question bank
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
pnpm start
```

---

## Adding a New Course

1. Create a folder under `lib/courses/<course-id>/`
2. Add chapter files exporting `QuestionV2[]` arrays
3. Create an `index.ts` exporting a `Course` object
4. Register it in `lib/courses.ts`:
   - Import the course
   - Add to `courses`, `allCourses`, and `defaultEnabledCourses`

Each question follows the `QuestionV2` shape:

```ts
{
  id: "csc221_001",       // unique ID
  course: "CSC 221",      // display name
  chapter: "Chapter 1",   // must match a chapter id in the Course definition
  text: "Question text",
  options: ["A", "B", "C", "D"],
  correctAnswer: 0,       // index into options[]
  explanation: "Why A is correct"
}
```

---

## License

Private — for personal academic use.
