import React from 'react'
import { Link } from "react-router-dom"
import Togglable from './Togglable'
import BlogForm from './BlogForm'
import { logoutUser } from '../reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs, addNewBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

const Blogs = ({ blogs }) => {
  
  const user = useSelector(state => state.login)  
  const dispatch = useDispatch()  
  const blogForm = () => (
    <Togglable buttonLabel="New blog">
        <BlogForm createBlog={addBlog} />
    </Togglable>
    )  

    const addBlog = async (newBlog) => {
        try {
          dispatch(addNewBlog(newBlog))
          dispatch(setNotification(`Added ${newBlog.title}`,5))
        } catch (exception) {
          dispatch(setNotification('Could not add blog',5))
        }
      }
      

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
      <div>
      <div>
    <p>{user.name} logged in <button onClick = {() => {dispatch(logoutUser())}} type="submit">logout</button></p>
    </div>
      <div >
      {blogForm()}
        <ul style ={blogStyle}>
      {blogs.map(blog =>
         <li  key={blog.id}>
         <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
         </li>
         )}
    </ul>
    </div>
    </div>
  )
}

export default Blogs