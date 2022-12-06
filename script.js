const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const gamer = document.getElementById('game-rules')

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  gamer.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (correct){
    alert('BlackPink in the area!')
  }
  else {
    alert('wrong')
  }
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.disabled = true;
    element.classList.add('correct')
  } else {
    element.disabled = true;
    element.classList.add('wrong')

  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'When did Blackpink debut?',
    answers: [
      { text: 'October 23,2018', correct: false },
      { text: 'August 8,2018', correct: true },
      { text: 'September 9,2019', correct: false }
    ]
  },
  {
    question: 'Who collaborated with G-Dragon for the song Black?',
    answers: [
      { text: 'Rose', correct: false },
      { text: 'Jisoo', correct: false },
      { text: 'Jennie', correct: true },
      { text: 'Lisa', correct: false }
    ]
  },
  {
    question: 'Who is the most followed K-pop idol on instagram?',
    answers: [
      { text: 'Jennie', correct: false },
      { text: 'Jisoo', correct: false },
      { text: 'Lisa', correct: true },
      { text: 'Rose', correct: false }
    ]
  },
  {
    question: 'Which of the Following is their debut song?',
    answers: [
      { text: 'Lovesick Girls', correct: false },
      { text: 'Forever Young', correct: false },
      { text: 'Whistle', correct: true }
    ]
  }
]