import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { loginUser } from '../reducers/loginReducer'
import { Form, Button } from 'react-bootstrap' 

const LoginForm = () => {

  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()  
    try {
      await dispatch(loginUser(username, password))
      await dispatch(setNotification('login successful',2))
    } catch (exception) {
      dispatch(setNotification('wrong credentials',5))
    }
  }
    return (
      <div>
      <h2 className="d-flex justify-content-center">Login to application</h2>
      <div className="container">
    <Form onSubmit={handleLogin}>
      <Form.Group> 
      <Form.Label><h5>username:</h5></Form.Label>
      <Form.Control
          type="text"
          name="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
     
     <Form.Label><h5>password:</h5></Form.Label>
      <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />  
      <Button variant="primary" id="login-button" type="submit">login</Button>
      </Form.Group>
    </Form>
    </div>
    </div>
    
  )}

  export default LoginForm