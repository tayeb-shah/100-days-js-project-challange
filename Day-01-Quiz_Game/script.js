// Selecting the elements
// SCREENS
const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");

// BUTTONS
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");

// QUESTIONS INFO
const questionText = document.querySelector("#question-text");
const currentQuestionSpan = document.querySelector("#current-question");
const totalQuestionsSpan = document.querySelector("#total-questions");
const scoreSpan = document.querySelector("#score");
const answerContainer = document.querySelector("#answer-container");
const progress = document.querySelector("#progress");
const finalScoreSpan = document.querySelector("#final-score");
const maxScoreSpan = document.querySelector("#max-score");
const resultMessage = document.querySelector("#result-message");

// Creating an array of questions and options
const quizQuestions = [
  {
    question: "What is the Capital of Bangladesh?",
    answers: [
      { text: "Chattogram", correct: false },
      { text: "Dhaka", correct: true },
      { text: "Rajshahi", correct: false },
      { text: "Sylhet", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mars", correct: true },
    ],
  },
  {
    question: "Who invented the light bulb?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Thomas Edison", correct: true },
      { text: "Isaac Newton", correct: false },
      { text: "Nikola Tesla", correct: false },
    ],
  },
  {
    question: "How many continents are there in the world?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "Which is the largest ocean in the world?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  }
];


// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let selectDisable = false;


totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// Event Listeners
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;    


    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}


function showQuestion() {
  // reset states
  let currentQuestion = quizQuestions[currentQuestionIndex];

  selectDisable = false;

  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  
  // applying progress parcentage in this function cz every time user select answer then this function will call

  const progressPercent = (currentQuestionIndex /  quizQuestions.length) * 100;

  progress.style.width = progressPercent + "%";
  
  questionText.textContent = currentQuestion.question;

  // this will remove all old answer options
  answerContainer.textContent = "";


  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it is allow you to
    button.dataset.correct = answer.correct;


    button.addEventListener("click", selectAnswer);

    answerContainer.appendChild(button);
  });


  function selectAnswer(event) {
    if (selectDisable) return;

    selectDisable = true;

    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    Array.from(answerContainer.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct")
      } else if (button === selectedBtn) {
        button.classList.add("incorrect");
      }
    });

    if (isCorrect){
      score++;
      scoreSpan.textContent = score;
    } 

    setTimeout(function () {
      currentQuestionIndex++;

      if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }, 1000);
  }
  
  function showResult() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    // creating percentages for showing result message based on user performance
    const accuracy = (score / quizQuestions.length) * 100;

    if (accuracy === 100) {
      resultMessage.textContent = "Perfect! You are a genius!"
    } else if (accuracy >= 80) {
      resultMessage.textContent = "Great job! You know your stuff!"
    } else if (accuracy >= 60) {
      resultMessage.textContent = "Good effort! Keep learning!"
    } else if (accuracy >= 40) {
      resultMessage.textContent = "Not bad! Try again to improve"
    } else if (accuracy <= 40) {
      resultMessage.textContent = "Keep studying! You'll get better"
    }
  }
}


function restartQuiz() {
  resultScreen.classList.remove("active");


  startQuiz();
}