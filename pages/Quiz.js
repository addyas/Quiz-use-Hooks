import React, { useState } from 'react'
import QuizQuestion from '../components/QuizQuestion.js'
import QuizEnd from '../components/QuizEnd.js'

let quizData = require('../data/quiz_data.json')

const Quiz = () => {

    const [quizPosition, setQuizPosition] = useState(1)
    const showNextQuestion = () => {
        setQuizPosition(quizPosition + 1)
    }
    const handleResetClick = () => {
        setQuizPosition(1)
    }
    const isQuizEnd = ((quizPosition - 1 ) === quizData.quiz_questions.length)? true : false;
    let quiz = null

    if(isQuizEnd){
        quiz = <QuizEnd resetClickHandler={handleResetClick} />
    }
    else{
        quiz = <QuizQuestion quiz_question={quizData.quiz_questions[quizPosition - 1]}
        showNextQuestionHandler={showNextQuestion} />
    }
     return quiz;
}

export default Quiz