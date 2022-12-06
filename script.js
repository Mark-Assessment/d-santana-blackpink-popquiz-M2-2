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
    alert('Oops! Wrong answer')
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
    // If the answer was correct, disable all buttons and add bootstrap class to make the correct answer green
    element.disabled = true;
    element.classList.remove('btn')
    element.classList.add('btn-success')
  } else {
    // If the answer was wrong, disable all buttons and add bootstrap class to make the incorrect answers red
    element.disabled = true;
    element.classList.remove('btn')
    element.classList.add('btn-danger')

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
      { text: 'September 9,2019', correct: false },
      { text: 'August 16,2017', correct: false }
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
      { text: 'Whistle', correct: true },
      { text: 'Pink Venon', correct: false }
    ]
  },
  {
    question: 'Blackpink was the first K-Pop group to perform at?',
    answers: [
      { text: 'Coachella', correct: true },
      { text: 'Tomorrowland', correct: false },
      { text: 'Summerfest', correct: false},
      { text: 'Rock in Rio', correct: false }
    ]
  },
  {
    question: 'What is Rose first single Album?',
    answers: [
      { text: 'Solo', correct: false },
      { text: 'Born Pink', correct: false },
      { text: '-R-', correct: true},
      { text: 'The Album', correct: false }
    ]
  },
  {
    question: 'Who collaborated with Blackpink for the song "sour candy"?',
    answers: [
      { text: 'Selena Gomez', correct: false },
      { text: 'Dua Lipa', correct: false },
      { text: 'Lady Gaga', correct: true},
      { text: 'Cardi B', correct: false }
    ]
  },
  {
    question: 'How many songs are in Blackpink Born Pink Album?',
    answers: [
      { text: '5', correct: false },
      { text: '8', correct: true },
      { text: '7', correct: false},
      { text: '12', correct: false }
    ]
  },
  {
    question: 'Which song became the first K-Pop group to surpass 1 Billion views?',
    answers: [
      { text: 'Bombayaah', correct: false },
      { text: 'Kill this love', correct: false },
      { text: 'DDU-DU DDU-DU', correct: true},
      { text: 'DNA', correct: false }
    ]
  },
  {
    question: 'Jennie is Global ambasador for which Fahion Brand?',
    answers: [
      { text: 'Channel', correct: true },
      { text: 'Yve Saint Laurent', correct: false },
      { text: 'Dior', correct: false},
      { text: 'Celine', correct: false }
    ]
  }
]