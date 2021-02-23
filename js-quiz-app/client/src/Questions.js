import React, { useState } from 'react'
import QuestionsForm from "./QuestionsForm"

function Questions(props) {
    const sampleQuestions = [
        {
            _id: 1,
            question: "How do you add a comment in JS",
            options: [
                { answer: `"This is a comment" `, isCorrect: false },
                { answer: `//This is a comment `, isCorrect: true },
                { answer: `<!--This is a comment-->`, isCorrect: false },
                { answer: "This is a comment", isCorrect: false }
            ]
        },
        {
            _id: 2,
            question: "Which of the following is not a primitive data type",
            options: [
                { answer: `Boolean`, isCorrect: false },
                { answer: `String`, isCorrect: false },
                { answer: `Number`, isCorrect: false },
                { answer: `Object`, isCorrect: true }
            ]
        },
        {
            _id: 3,
            question: "What is the function of the Optional Chaining '?' operator?",
            options: [
                { answer: `To safely access nested object properties even if an intermediate property does not exist`, isCorrect: true },
                { answer: ` To change an object to a primitive`, isCorrect: false },
                { answer: `To create conditional branching`, isCorrect: false },
                { answer: `To have a help button appear`, isCorrect: false }
            ]
        }
    ]

    const [submittedAnswers, setSubmittedAnswers] = useState([])

    function submitQuestion(value) {
        console.log(value)
        setSubmittedAnswers(prevSubmittedAnswers => [...prevSubmittedAnswers, value])
    }

    function scoreQuiz() {
        console.log(submittedAnswers)
        let totalCorrect = submittedAnswers.filter(each => each === "true")
        console.log(totalCorrect.length)
    }

    let quizQuestions = sampleQuestions.map(each => {
        return (
            <QuestionsForm questions={each} submitQuestion={submitQuestion} />
        )
    })
    return (
        <div>
            <h1>Questions</h1>
            {quizQuestions}
            <button onClick={scoreQuiz}>Score Quiz</button>
        </div>
    )
}
export default Questions;