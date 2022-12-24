import "./styles.css";
import React, { useState } from "react"

export default function App() {
  const [ball, setBall] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <div style={{backgroundColor: 'black', color: 'white'}}>
        <h1>Cricket Score Board</h1>
        <h2>Balls: {ball}</h2>
        <h2>Runs: {score}</h2>
      </div>
      <p> 
        You get total of 6 balls(1 over). The button get disabled after that
      </p>
      <div className="Hit">
        <button onClick={function changeOnClick(){
          if(ball<6){
            setBall(()=>ball+1)
            var val=Math.floor(Math.random()*100)
            if(val!=0) {
              val%=7
              setScore(()=>score+val)
            }
          }
        }}>
          Click to hit the ball
        </button>
      </div>
      <div className="Reset">
        <button onClick={function changeOnClick(){
          if(ball == 6){
            setBall(()=>0)
            setScore(()=>0)
          }
        }}>
          Reset Game
        </button>
      </div>
    </div>
  );
}
