import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import { setNotification } from './reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchdata = async () => {
      const data = await blogService.getAll()
      setBlogs(data)
    }
    fetchdata()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    //console.log('logging in with', username)

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      dispatch(setNotification('wrong credentials',5))
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <h2>Login to application</h2>
      <div>
        username
        <input
          id='username'
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          id='password'
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button id="login-button" type="submit">login</button>
    </form>
  )


  const blogForm = () => (
    <Togglable buttonLabel="New blog">
      <BlogForm createBlog={addBlog} />
    </Togglable>
  )

  const addBlog = async (newBlog) => {
    try {
      const blog = await blogService.create(newBlog)
      setBlogs(blogs.concat(blog))
      dispatch(setNotification(`Added ${blog.title}`,5))
    } catch (exception) {
      dispatch(setNotification('Could not add blog',5))
    }
  }

  return (
    <div>
      <h2>Blogs</h2>
      <Notification/>
      {user === null ? loginForm() :
        <div>
          <p>{user.name} logged in <button onClick = {() => { window.localStorage.clear() }} type="submit">logout</button></p>
          <h3>Create a new blog</h3>
          {blogForm()}
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}
        </div>}
    </div>
  )
}

export default App