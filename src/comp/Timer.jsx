import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './timer.module.css'



const Timer = () => {
  const [timer,setTimer] = useState(0)
  const [timerId,setTimerid] = useState(null)

   const start = ()=>{
let id = setInterval(() => {
  if(!timerId){
  setTimer((prev)=>prev+1)}
}, 1000);
setTimerid(id)

  }
  const reset = ()=>{
clearInterval(timerId)
setTimer(0)

  }
  const pause = ()=>{
clearInterval(timerId)
setTimerid(null)


  }
  return (
   <div className = {styles.hang} >

{/* count:{timer} */}
<h1>StopWatch</h1>
<h2>{timer}</h2>

<button onClick= {start}>Start</button>
<button onClick = {pause}>Pause</button>
<button onClick = {reset}>Reset</button>

   </div>

  )
}

export default Timer
