import './App.css';
import { useState } from 'react';
function App() {
  const [ball, setBall] = useState(0)
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <div className='wrapper'>
        <h1>Cricket Score Board</h1>
        <h2>Balls: {ball}</h2>
        <h2>Score: {score}</h2>
      </div>
      <div className='buttonBox'>
        <h3>You get 1 over (6 balls). The hit button gets disabled after that</h3>
        <button className='hit' onClick={function changeOnClick(){
           if(ball<6){
            setBall(()=>ball+1)
            var val=Math.floor(Math.random()*100)
            if(val!=0){
              val%=7
              setScore(()=>score+val)
            }
           }
          }}>Click to hit the ball</button>
        <button className='rSet' onClick={function resetOnClick(){
          setBall(0)
          setScore(0)
        }}>Click to reset game</button>
      </div>
    </div>
  );
}

 

export default App;
