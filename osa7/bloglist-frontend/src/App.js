import React, { useEffect } from 'react'
import blogService from './services/blogs'
import Notification from './components/Notification'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import { Switch, Route } from "react-router-dom"

const App = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.login)

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  useEffect(() => {
     const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
     if (loggedUserJSON) {
       const user = JSON.parse(loggedUserJSON)
       blogService.setToken(user.token)
     }
   }, [])


  if (!user) {
    return (
    <div>
    <Notification/> 
    <LoginForm/>
    </div>
    ) 
  }

  return (
    <div>
    <div className="d-flex justify-content-center">
      <h2>Blogs</h2>
      </div>
      <div className= "container">
      <Notification/>
      <Switch>
        <Route path="/blogs/:id">
        <Blog/>
        </Route>
        <Route path="/">
        <Blogs/>
        </Route>
      </Switch>
    </div>
    </div>
  )
}

export default App