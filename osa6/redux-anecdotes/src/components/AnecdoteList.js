import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleVoteCount } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes.sort((a,b) => a.votes > b.votes ? -1 : 1)
    } else {
      return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    }
  })
  const dispatch = useDispatch()

  const vote = async (anecdote) => {
    dispatch(toggleVoteCount(anecdote))
    dispatch(setNotification(`Voted '${anecdote.content}'`,5))
  }

  return (
    <div>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )}
    <h2>create new</h2>
    </div>
  )
}

export default AnecdoteList