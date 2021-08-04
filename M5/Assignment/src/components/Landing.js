import React from 'react'
import { useHistory } from 'react-router';

const Landing = () => {
	const history = useHistory()
	return (
		<div className="landing">
			<button className="landing-btn" onClick={() => history.push('/quiz')}>Start Quiz</button>
		</div>
	)
}

export default Landing
