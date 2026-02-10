const fs = require('fs');
const path = require('path');

/**
 * Converts old Question format to new QuestionV2 format
 * 
 * Old format:
 * - options: [{ id: "a", text: "..." }]
 * - correctOptionId: "b"
 * - id: "csc311-1" (hyphen, no padding)
 * 
 * New format:
 * - options: ["...", "..."]
 * - correctAnswer: 1 (index)
 * - id: "csc311_001" (underscore, zero-padded)
 * - course: "CSC 311" (added field)
 */

function convertQuestionFile(inputPath, outputPath, courseCode, courseName) {
  console.log(`\n📖 Reading: ${inputPath}`);
  
  // Read the file
  const content = fs.readFileSync(inputPath, 'utf8');

  // Extract the questions array - handle different variable names
  const questionsMatch = content.match(/(?:const|export const)\s+(\w+):\s*Question(?:V2)?\[\]\s*=\s*\[([\s\S]*)\];/);
  
  if (!questionsMatch) {
    console.error('❌ Could not find questions array');
    return null;
  }

  const originalVarName = questionsMatch[1];
  
  // Parse each question object
  const questionsText = questionsMatch[2];
  const questionRegex = /\{[\s\S]*?id:\s*"([^"]+)"[\s\S]*?text:\s*"((?:[^"\\]|\\.)*)"\s*,[\s\S]*?options:\s*\[([\s\S]*?)\][\s\S]*?correctOptionId:\s*"([^"]+)"[\s\S]*?explanation:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?chapter:\s*"([^"]+)"[\s\S]*?\}/g;

  const questions = [];
  let match;
  let questionNumber = 1;

  while ((match = questionRegex.exec(questionsText)) !== null) {
    const [, id, text, optionsStr, correctOptionId, explanation, chapter] = match;
    
    // Extract option texts from the options array
    const optionMatches = [...optionsStr.matchAll(/text:\s*"((?:[^"\\]|\\.)*)"/g)];
    const options = optionMatches.map(m => m[1]);
    
    // Convert correctOptionId to index (a=0, b=1, c=2, d=3)
    const correctAnswer = correctOptionId.charCodeAt(0) - 'a'.charCodeAt(0);
    
    // Create standardized ID (zero-padded with underscore)
    const standardizedId = `${courseCode.toLowerCase().replace(/\s+/g, '')}_${String(questionNumber).padStart(3, '0')}`;
    
    questions.push({
      id: standardizedId,
      course: courseName,
      chapter: chapter,
      text: text,
      options: options,
      correctAnswer: correctAnswer,
      explanation: explanation
    });
    
    questionNumber++;
  }

  if (questions.length === 0) {
    console.error('❌ No questions found');
    return null;
  }

  // Generate the new variable name based on course and chapter
  const chapterMatch = questions[0].chapter.match(/Chapter (\d+)/i);
  const chapterNum = chapterMatch ? chapterMatch[1] : '1';
  const newVarName = `${courseCode.toLowerCase().replace(/\s+/g, '')}Chapter${chapterNum}`;

  // Generate the TypeScript file
  const output = `import { QuestionV2 } from "@/lib/quiz-types";

export const ${newVarName}: QuestionV2[] = ${JSON.stringify(questions, null, 2)};

export default ${newVarName};
`;

  fs.writeFileSync(outputPath, output);

  console.log(`✅ Converted ${questions.length} questions`);
  console.log(`📝 Variable name: ${newVarName}`);
  console.log(`💾 Saved to: ${outputPath}`);
  
  return questions.length;
}

// Main function to convert multiple files or a single file
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
Usage:
  node convert-questions.js <input-file> <output-file> <course-code> <course-name>
  
Example:
  node convert-questions.js ./data/chapter-1.ts ./data/chapter-1-converted.ts "CSC 311" "Introduction to Information Systems"
  
Or convert all files in a directory:
  node convert-questions.js ./data ./data-converted "CSC 311" "Introduction to Information Systems"
    `);
    return;
  }

  const [inputPath, outputPath, courseCode, courseName] = args;

  if (!courseCode || !courseName) {
    console.error('❌ Please provide course code and course name');
    return;
  }

  // Check if input is a directory
  if (fs.existsSync(inputPath) && fs.statSync(inputPath).isDirectory()) {
    console.log('📁 Converting all .ts files in directory...');
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    const files = fs.readdirSync(inputPath).filter(f => f.endsWith('.ts'));
    let totalConverted = 0;

    files.forEach(file => {
      const inputFile = path.join(inputPath, file);
      const outputFile = path.join(outputPath, file.replace('.ts', '-converted.ts'));
      const count = convertQuestionFile(inputFile, outputFile, courseCode, courseName);
      if (count) totalConverted += count;
    });

    console.log(`\n🎉 Total questions converted: ${totalConverted}`);
  } else {
    // Convert single file
    convertQuestionFile(inputPath, outputPath, courseCode, courseName);
  }
}

main();
