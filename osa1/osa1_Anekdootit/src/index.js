import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(6))
  
 
  const copy = [...votes]

  const mostVotes=copy.indexOf(Math.max(...copy));

  const bestanecdote=props.anecdotes[mostVotes]
  

  const voting = () => {
    copy[selected] += 1   
    setVotes(copy)

}
const random = () => {
    setSelected(Math.floor(Math.random() * 6))
}




  return (
    <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}
        <p>Has {votes[selected]} votes</p>
        <Button handleClick={voting} text="vote" />
        <Button handleClick={random} text='next anecdote'/>
        <h1>Anecdote with most votes </h1>
        {bestanecdote} 
        <p>has {votes[mostVotes]} votes</p>
    </div>
  )
}



const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

 
  

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