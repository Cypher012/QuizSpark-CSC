#!/usr/bin/env node

/**
 * Script to migrate a question file from old structure to new QuestionV2 structure.
 *
 * Usage: node scripts/migrate-question-file.js <file-path> <course-name> <start-number>
 * Example: node scripts/migrate-question-file.js lib/courses/csc311-info-systems/chapter-3.ts "CSC 311" 201
 */

const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 3) {
  console.error('Usage: node migrate-question-file.js <file-path> <course-name> <start-number>');
  console.error('Example: node migrate-question-file.js lib/courses/csc311-info-systems/chapter-3.ts "CSC 311" 201');
  process.exit(1);
}

const [filePath, courseName, startNumberStr] = args;
const startNumber = parseInt(startNumberStr);

// Derive course code from course name
const courseCode = courseName.toLowerCase().replace(/\s+/g, '');

console.log(`Migrating: ${filePath}`);
console.log(`Course: ${courseName} (${courseCode})`);
console.log(`Starting ID number: ${startNumber}`);

// Read the file
const fullPath = path.join(process.cwd(), filePath);
if (!fs.existsSync(fullPath)) {
  console.error(`File not found: ${fullPath}`);
  process.exit(1);
}

let content = fs.readFileSync(fullPath, 'utf-8');

// Step 1: Replace import statement
content = content.replace(
  /export interface Option \{[\s\S]*?\}\s*export interface Question \{[\s\S]*?\}/m,
  'import { QuestionV2 } from "../../quiz-types";'
);

// Step 2: Replace array declaration
content = content.replace(
  /export const (\w+): Question\[\] = \[/,
  'export const $1: QuestionV2[] = ['
);

// Step 3: Track question counter
let questionCounter = startNumber;

// Step 4: Transform each question
content = content.replace(
  /\{[\s\n]*id: ["']([^"']+)["'],[\s\n]*(?:chapter: ["']([^"']+)["'],[\s\n]*)?text: ["']([\s\S]*?)["'],[\s\n]*options: \[([\s\S]*?)\],[\s\n]*correctOptionId: ["']([a-dA-D])["'],[\s\n]*explanation:[\s\n]*["']([\s\S]*?)["'],?[\s\n]*\}/g,
  (match, oldId, chapter, text, optionsStr, correctId, explanation) => {
    // Parse options
    const optionMatches = [...optionsStr.matchAll(/\{\s*id:\s*["']([a-dA-D])["'],\s*text:\s*["']([\s\S]*?)["']\s*\}/g)];

    // Extract option texts in order (a, b, c, d)
    const optionTexts = ['a', 'b', 'c', 'd'].map(id => {
      const match = optionMatches.find(m => m[1].toLowerCase() === id);
      return match ? match[2] : '';
    }).filter(t => t);

    // Convert correctOptionId to index
    const correctIndex = correctId.toLowerCase().charCodeAt(0) - 97;

    // Generate new ID with zero-padding
    const newId = `${courseCode}_${String(questionCounter).padStart(3, '0')}`;
    questionCounter++;

    // Build new question object
    const chapterField = chapter || 'Chapter 3';

    return `{
    id: "${newId}",
    course: "${courseName}",
    chapter: "${chapterField}",
    text: "${text}",
    options: [
      "${optionTexts[0]}",
      "${optionTexts[1]}",
      "${optionTexts[2]}",
      "${optionTexts[3]}"
    ],
    correctAnswer: ${correctIndex},
    explanation: "${explanation}"
  }`;
  }
);

// Write the migrated content back
fs.writeFileSync(fullPath, content, 'utf-8');

console.log(`✓ Migration complete! Migrated ${questionCounter - startNumber} questions.`);
console.log(`  New IDs: ${courseCode}_${String(startNumber).padStart(3, '0')} to ${courseCode}_${String(questionCounter - 1).padStart(3, '0')}`);
console.log(`✓ File updated: ${filePath}`);
