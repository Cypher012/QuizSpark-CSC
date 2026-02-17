import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuizSpark - Interactive Course Quizzes",
  description:
    "Interactive MCQ quizzes for university courses including Assembly Language Programming, Data Structures and Algorithms, Information Systems, Computer Appreciation, and more.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "QuizSpark - Interactive Course Quizzes",
    description:
      "Smart quizzing for modern students. Randomized MCQs, instant feedback, and score tracking across multiple university courses.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1280,
        height: 640,
        alt: "QuizSpark - Smart Quizzing for Modern Students",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuizSpark - Interactive Course Quizzes",
    description:
      "Smart quizzing for modern students. Randomized MCQs, instant feedback, and score tracking across multiple university courses.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
