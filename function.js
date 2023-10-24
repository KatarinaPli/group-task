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
      "getElementById",
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
console.log(questions);

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const main = document.querySelector("main");

  const questionField = document.createElement("h2");
  const optionsField = document.createElement("div");
  const resultField = document.createElement("p");

  main.appendChild(questionField);
  main.appendChild(optionsField);
  main.appendChild(resultField);

  questionField.textContent = currentQuestion.question;
  optionsField.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement("button");
    optionElement.classList.add("option");
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => checkAnswer(index));
    optionsField.appendChild(optionElement);
  });
  resultField.textContent = "";
}
showQuestion();

function checkAnswer(choosenAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  if (choosenAnswer === currentQuestion.correctAnswer) {
    score++;

    document.querySelector("p").textContent = "You are correct! Good job.";
  } else {
    document.querySelector("p").textContent =
      "Sorry, you are wrong! Try again.";
  }
}

function goNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz(score) {
  const resultField = document.querySelector("p");
  resultField.innerText = `You choose Finish. You scored ${score} from ${questions.length}. `;
  if (score <= 2) {
    const resultMessage = ` You must work harder and become a genius!`;
  } else {
    const resultMessage = ` You did a great work and become a genius!`;
  }
  resultField.textContent += ` ${resultMessage}`;
}
