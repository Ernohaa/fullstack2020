import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.addanec.value
    event.target.addanec.value = ''
    props.createAnecdote(content)
    props.setNotification(`Added '${content}'`,5)
  }
  return (
    <form onSubmit={addAnecdote}>
    <div><input name='addanec'/></div>
    <button type='submit'>create</button>
  </form>
  )
}

const mapDispatchToProps = {
  setNotification,
  removeNotification,
  createAnecdote
}

const ConnectedForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedForm

