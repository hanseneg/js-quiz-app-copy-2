import React from 'react'
import {useState} from 'react';
import {useHistory} from "react-router-dom"

function Welcome(props){
    const [user, setUser] = useState("")
    let history = useHistory();


    const handleChange = (e) => {
        setUser(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        history.push("/questions");
        
    }

 return (
     <div>
         <h1>Welcome to the JavaScript Quiz</h1>
         <h2>Enter your name to begin.</h2>

         <form name="user-form" onSubmit={handleSubmit}>
             <input
             type="text"
             name="user"
             onChange={handleChange}
             placeholder="Enter your name"
             value={user}
             >
             </input>
             <button>Submit and Start Game!</button>

         </form>
     </div>
     

 )
}
export default Welcome;