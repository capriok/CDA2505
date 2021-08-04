import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './components/Landing'
import Quiz from './components/Quiz'
import QuizResult from './components/QuizResult'

import './App.css'

function App() {

  const [currQuestion, setCurrQuestion] = useState(0)
  const [questions] = useState(QUESTIONS)
  const [questionAnswers, setQuestionAnswers] = useState([])

  return (
    <div className="App">
      <header>
        <h1>Quizzer</h1>
      </header>
      <Router>
        <main>
          <Route exact path="/" render={() =>
            <Landing />
          } />
          <Route path="/quiz" render={() =>
            <Quiz
              questions={questions}
              currQuestion={currQuestion}
              setCurrQuestion={setCurrQuestion}
              questionAnswers={questionAnswers}
              setQuestionAnswers={setQuestionAnswers} />
          } />
        </main>
        <section>
          <Route path="/quiz-result" render={() =>
            <QuizResult
              questions={questions}
              questionAnswers={questionAnswers} />
          } />
        </section>
      </Router>
    </div>
  )
}

export default App

const QUESTIONS = [
  {
    question: 'What does VDOM stand for?',
    answers: [
      'Verified DOM',
      'Visual DOM',
      'Virtual DOM',
      'Visible DOM',
    ],
    correctAnswer: 'Virtual DOM'
  },
  {
    question: 'What version were React hooks introduced?',
    answers: [
      '17.9',
      '16.8',
      '15.5',
      '19',
    ],
    correctAnswer: '16.8'
  },
  {
    question: 'Web browsers can read JSX?',
    answers: [
      'True',
      'False',
    ],
    correctAnswer: 'False'
  },
  {
    question: 'What does JSX stand for?',
    answers: [
      'JavaScript X',
      'JavaScript HTML',
      'JavaScript Cross',
      'JavaScript XML',
    ],
    correctAnswer: 'JavaScript XML'
  },
  {
    question: 'Props are immutable?',
    answers: [
      'True',
      'False',
    ],
    correctAnswer: 'True'
  }
]
