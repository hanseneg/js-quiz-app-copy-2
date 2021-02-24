import React, { useState, useEffect } from 'react'
import axios from "axios"
import QuestionsForm from "./QuestionsForm"
import { useHistory } from "react-router-dom"

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
        },
        {
            _id: 4,
            question: "Which of the following is not a valid JavaScript variable name?",
            options: [
                { answer: `REALGOODVAR`, isCorrect: false },
                { answer: `___underscoreVar`, isCorrect: false },
                { answer: `2good4var`, isCorrect: true },
                { answer: `These are all valid variable names in JavaScript`, isCorrect: false }
            ]
        },
        {
            _id: 5,
            question: "What does the 'shift' method do on an array?",
            options: [
                { answer: `Appends an element to the beginning`, isCorrect: false },
                { answer: ` Extracts an element form the end`, isCorrect: false },
                { answer: `Appends an element to the end`, isCorrect: false },
                { answer: `Extracts an element from the beginning`, isCorrect: true }
            ]
        },
        {
            _id: 6,
            question: "Which of these array methods can be used to create a new copy of the array?",
            options: [
                { answer: `Array.assign()`, isCorrect: false },
                { answer: `pop()`, isCorrect: false },
                { answer: `slice()`, isCorrect: true },
                { answer: `splice()`, isCorrect: false }
            ]
        },
        {
            _id: 7,
            question: "Which of these is not one of the basic data type in JavaScript?",
            options: [
                { answer: `number`, isCorrect: false },
                { answer: `bigint`, isCorrect: false },
                { answer: `undefined`, isCorrect: true },
                { answer: `smallint`, isCorrect: true }
            ]
        },
        {
            _id: 8,
            question: "Which of these array methods can be used to create a new copy of the array?",
            options: [
                { answer: `Array.assign()`, isCorrect: false },
                { answer: `pop()`, isCorrect: false },
                { answer: `slice()`, isCorrect: true },
                { answer: `splice()`, isCorrect: false }
            ]
        },
        {
            _id: 9,
            question: "Which of the following is a native JavaScript API used for making HTTP requests?",
            options: [
                { answer: `JSON`, isCorrect: false },
                { answer: `AJAX`, isCorrect: false },
                { answer: `Axios`, isCorrect: true },
                { answer: `Fetch`, isCorrect: true }
            ]
        },
        {
            _id: 10,
            question: "Which of these is NOT true about the && operator",
            options: [
                { answer: `It evaluates operands left to right.`, isCorrect: false },
                { answer: `It converts each operand to a boolean.`, isCorrect: false },
                { answer: `If all operands are true, it will return the last operand`, isCorrect: false },
                { answer: `It returns the first TRUTHY value`, isCorrect: true }
            ]
        }
    ]
    //const [questions, setQuestions] = useState([])
    const [submittedAnswers, setSubmittedAnswers] = useState([])
    const [finalScore, setFinalScore] = useState(0)
    const [showFinalScore, setShowFinalScore] = useState(false)

    let history = useHistory()

    useEffect(() => {
        axios.get("/questions")
            .then(response => setQuestions(response.data))
            .catch(error => console.log(error))
    }, [])

    function submitQuestion(value) {
        console.log(value)
        setSubmittedAnswers(prevSubmittedAnswers => [...prevSubmittedAnswers, value])
    }

    function scoreQuiz() {
        console.log(submittedAnswers)
        let totalCorrect = submittedAnswers.filter(each => each === "true")
        console.log(totalCorrect.length)

        setFinalScore(totalCorrect.length)
        console.log(finalScore)
        setShowFinalScore(true)
    }

    function goToLeaderBoard(event) {
        event.preventDefault()
        history.push("/leaderboard")
    }

    let quizQuestions = questions.map(each => {
        return (
            <QuestionsForm key={each._id} questions={each} submitQuestion={submitQuestion} />
        )
    })
    return (
        <div>
            <h1>Questions</h1>
            {quizQuestions}
            <button onClick={scoreQuiz}>Score Quiz</button>
            <button onClick={goToLeaderBoard}>Scores</button>
            <h1 style={{ display: showFinalScore ? "block" : "none" }}>Final Score: {`You got ${finalScore}/10 correct!`}</h1>
        </div>
    )
}
export default Questions;