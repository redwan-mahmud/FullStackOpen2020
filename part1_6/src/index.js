import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => (
  <h1>{props.header}</h1>
)
const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const DisplayStats = (props) => (
  <tbody>
  {props.text} {props.value}
  </tbody>
)

const Statistics = (props) =>{
  // displays all statistics 
  var good = props.good
  var bad = props.bad
  var neutral = props.neutral
  
  var totalVotes = 0
  totalVotes = good+bad+neutral
  var posVotes = good*1
  var neutralVotes =neutral*0
  var negVotes = bad*-1
  if(good ===0 & bad === 0 & neutral ===0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
      <table>
        
          <DisplayStats text="good" value={good} />
          <DisplayStats text="neutral" value={neutral} />
          <DisplayStats text="bad" value={bad} />
          <DisplayStats text = "positive" value = {(posVotes/totalVotes).toFixed(2)}/>
          <DisplayStats text= "average" value = {`${((posVotes+neutralVotes+negVotes)/totalVotes*100).toFixed(2)}%`}/>
        
      </table>
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display header ="Give Feedback"/>
      <Button handleClick= {()=> setGood(good + 1)} text = "good"/>
      <Button handleClick= {()=> setNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick= {()=> setBad(bad + 1)} text = "bad"/>
      <Display header = "Statistics"/>
      
      <Statistics good = {good} bad = {bad} neutral={neutral}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)