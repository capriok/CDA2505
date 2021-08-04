import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

const QuizResult = ({ questions, questionAnswers }) => {

	const history = useHistory()

	function resultClasses(questionIndex, answerIndex, cl = 'answer ') {
		let className = cl
		const q = questions[questionIndex]
		const correctAnswer = q.correctAnswer
		const isAnswer = correctAnswer === q.answers[answerIndex]

		const userAnswer = questionAnswers[questionIndex]
		const isIndexAnswer = q.answers[answerIndex] === userAnswer
		const isWrong = correctAnswer !== userAnswer

		if (isAnswer) className = className += 'correct'
		if (isWrong && isIndexAnswer) className = className += 'wrong'

		return className
	}

	useEffect(() => {
		if (!questionAnswers.length)
			history.push('/')
	}, [])

	return (
		<div className="quiz-result">
			<h3>Quiz Result</h3>
			<br />
			{questions.map((question, questionIndex) =>
				<div className="result" key={questionIndex}>
					<div className="question">{question.question}</div>
					<div className="answers">{question.answers.map((answer, answerIndex) =>
						<button key={answerIndex} className={resultClasses(questionIndex, answerIndex)}>
							{answer}
						</button>
					)}</div>
				</div>
			)}
		</div>
	)
}

export default QuizResult
