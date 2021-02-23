import React from 'react'
// import axios from "axios"
 import {useState} from "react";
import {useEffect} from 'react';
import highScores from "./sampleHighScores";
import "./LeaderboardStyle.css"
function Leaderboard(props){

  const [scores, setScores] = useState("");
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
     <h2>Congratulations! You ranked __ out of {scores.length}</h2>
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