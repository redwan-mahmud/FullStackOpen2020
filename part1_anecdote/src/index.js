import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => 
  //console.log("Hello",props.hand)
  (
  
  <button onClick = {props.handleClick}>
    {props.text}</button>
  
)



const App = (props) => {
  const [selected, setSelected] = useState(0)
  //part 1.13
  const [votes, setVotes] = useState(anecdotes.map(()=>0))

  const maxVotes = votes.indexOf(Math.max.apply(null, votes)) //part 1.14

  const updateVotes =() => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    
  }
  //part 1.12 
  const selectRandomAnecdote = () =>(
    setSelected(Math.floor(Math.random() * anecdotes.length)) 
  )
  //console.log(randomNum)

  
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>"{props.anecdotes[selected]}" has {votes[selected]} {(votes[selected] === 1) ? 'vote' : 'votes'}.</p>
      
      <Button handleClick ={()=> updateVotes()} text ="vote"/>
      <Button handleClick = {()=>selectRandomAnecdote()} text = "next anecdote"/>
      
      <h1>Anecdote with most votes</h1>
      <p>"{props.anecdotes[maxVotes]}" has {votes[maxVotes]} {(votes[maxVotes] === 1) ? 'vote' : 'votes'}.</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)