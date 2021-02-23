import React, { useState } from "react"

function QuestionsForm(props) {
    const [value, setValue] = useState()
    const [showQuestion, setShowQuestion] = useState(true)

    function selected(event) {
        setValue(event.target.value)
        console.log(value)
    }

    function displayChange(event) {
        event.preventDefault()
        setShowQuestion(false)
        console.log(value)
        props.submitQuestion(value)
    }

    return (
        <div style={{ display: showQuestion ? "block" : "none" }}>
            Question: {`${props.questions.question}?`}
            <form onSubmit={displayChange}>
                {/*Answer One*/}
                <input
                    type="radio"
                    name={props.questions._id}
                    value={props.questions.options[0].isCorrect}
                    onChange={selected}
                />
                {props.questions.options[0].answer}

                {/*Answer Two*/}
                <input
                    type="radio"
                    name={props.questions._id}
                    value={props.questions.options[1].isCorrect}
                    onChange={selected}
                />
                {props.questions.options[1].answer}

                {/*Answer Three*/}
                <input
                    type="radio"
                    name={props.questions._id}
                    value={props.questions.options[2].isCorrect}
                    onChange={selected}
                />
                {props.questions.options[2].answer}

                {/*Answer Four*/}
                <input
                    type="radio"
                    name={props.questions._id}
                    value={props.questions.options[3].isCorrect}
                    onChange={selected}
                />
                {props.questions.options[3].answer}
                <button>Submit Question</button>
            </form>
        </div>
    )
}

export default QuestionsForm