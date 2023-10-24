const questions = [
  {
    question: "In what year HTML was invented?",
    options: ["1991", "2000", "1878", "1999"],
    correctAnswer: 0,
  },
  {
    question:
      "Which of the following HTML Elements is used for making any text bold ?",
    options: ["<li>", "<b>", "<i>", "<p>"],
    correctAnswer: 1,
  },
  {
    question: "What does JavaScript primarily provide in web development?",
    options: [
      "Database management",
      "Server-side rendering",
      "Client-side interactivity",
      "Web design tools",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which one is not Data Type?",
    options: ["Subject", "String", "Null", "Number"],
    correctAnswer: 0,
  },
  {
    question: "How can you clear the console?",
    options: ["shutDownComputer()", "destroy()", "clear()", "killme()"],
    correctAnswer: 2,
  },
  {
    question: "Which one is not DOM selector?",
    options: [
      "sgetElementById",
      "getAttribute",
      "pleaseSelectMe",
      "querySelector",
    ],
    correctAnswer: 2,
  },
];
questions.sort(() => Math.random() - 0.5);
let score = 0;
let currentQuestionIndex = 0;
console.log(questions)
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const main = document.querySelector("main");
  const questionField = document.addElement("h1");
  const optionsField = document.addElement("div");
  const resultField = document.addElement("p");
  main.appendChild(questionField);
  main.appendChild(optionsField);
  main.appendChild(resultField);
   questionField.textContent = currentQuestion.question;
}
showQuestion();
