// import axios from "axios"
import React, {useState, useEffect, useContext} from "react";
import {UserContext} from "./UserContext";
import highScores from "./sampleHighScores";
import "./LeaderboardStyle.css"

function Leaderboard(props){

  const [scores, setScores] = useState("");
  const context = useContext(UserContext)
  console.log(context)
 useEffect(() => {

    // axios.get("/highScores")
    //     .then(res => {
    //         setScores(res.data);
    //     })
    setScores(highScores.sort((a,b) => b.score - a.score))
 }, [])
 return (
     <div className="leaderboard">
        <h1>Leaderboard</h1>
        <h2>Congratulations, ! You ranked __ out of {scores.length}</h2>
        {scores && scores.map(score => (
            <div className="score">
                <h3>{score.user}</h3>
                <p>{score.score}</p>
            </div>
        ))}
     </div>
     

 )
}
export default Leaderboard;