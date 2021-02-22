import React from "react"
import Welcome from "./Welcome";
import Leaderboard from "./Leaderboard";
import Questions from "./Questions";
// import {Route, Switch, Link} from "react-router-dom";


function App(){
    return(
        <div>
            
            <Welcome />
            <Leaderboard/>
            <Questions />
        </div>
    )
}

export default App