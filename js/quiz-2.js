const questions = [
  {
    question: "What is the capital of France?",
    choices: {
      Paris: true,
      London: false,
      Berlin: false,
      Madrid: false,
    },
  },
  {
    question: "What is the capital of Spain?",
    choices: {
      Paris: false,
      London: false,
      Berlin: false,
      Madrid: true,
    },
  },
  {
    question: "What is the capital of Germany?",
    choices: {
      Paris: false,
      London: false,
      Berlin: true,
      Madrid: false,
    },
  },
  {
    question: "What is the capital of the United Kingdom?",
    choices: {
      Paris: false,
      London: true,
      Berlin: false,
      Madrid: false,
    },
  },
];

const questionElement = document.getElementById("question");
const optionsDiv = document.querySelector(".options");

let questionIndex = 0;
let total = 0;

function startQuiz(index = 0, curTotal = 0) {
  questionIndex = index;
  total = curTotal;
  let questionObj = questions[questionIndex];
  questionElement.innerHTML = questionObj.question;
  for (let i = 0; i < optionsDiv.children.length; i++) {
    const curButton = optionsDiv.children.item(i);
    curButton.innerHTML = Object.entries(questionObj.choices)[i][0];
    curButton.classList.add(`${Object.entries(questionObj.choices)[i][1]}`);
  }
}

function checkAnswer(target) {
  if (questionIndex >= Object.entries(questions).length) {
    console.log(
      "Quiz finished!\nTotal: " + total + "/" + Object.entries(questions).length
    );
    return;
  }
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((button) => {
    button.disabled = true;
  });
  if (target.classList.contains("true")) {
    target.style["background-color"] = "green";
    target.style["color"] = "white";
    total++;
  } else {
    target.style["background-color"] = "red";
    target.style["color"] = "white";
  }
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex >= Object.entries(questions).length) {
    console.log(
      "Quiz finished!\nTotal: " + total + "/" + Object.entries(questions).length
    );
    return;
  }
  startQuiz(questionIndex, total);
}

const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    checkAnswer(e.target);
  });
});

nextButton.addEventListener("click", () => {
  resetStyles();
  nextQuestion();
});

function resetStyles() {
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((button) => {
    button.style["background-color"] = "";
    button.style["color"] = "";
    button.disabled = false;
  });
}

if (questionIndex <= Object.entries(questions).length) {
  startQuiz();
}
