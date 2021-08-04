import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

const Questionnaire = ({ questions, currQuestion, setCurrQuestion, questionAnswers, setQuestionAnswers }) => {
	const history = useHistory()

	const question = questions[currQuestion]

	function chooseAnswer(answer) {
		setQuestionAnswers([...questionAnswers, answer])
		setCurrQuestion(curr => curr + 1)
		console.log([...questionAnswers, answer]);

		if (currQuestion === questions.length - 1) {
			return history.push('/quiz-result')
		}
	}

	useEffect(() => {
		if (!question) history.push('/')
	}, [])

	return (
		<div className="questionnaire">
			<div className="question">{question.question}</div>
			<div className="answers">{question.answers.map((answer, i) =>
				<button
					key={i}
					className="answer"
					onClick={() => chooseAnswer(answer)}>
					{answer}
				</button>
			)}</div>
		</div>
	)
}

export default Questionnaire