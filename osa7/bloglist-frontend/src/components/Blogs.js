import React from 'react'
import { Link } from "react-router-dom"
import Togglable from './Togglable'
import BlogForm from './BlogForm'
import { logoutUser } from '../reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import { addNewBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Table, Button } from 'react-bootstrap'

const Blogs = () => {
  
  const user = useSelector(state => state.login)
  const blogs = useSelector(state => state.blog)

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

  return (
    <div >
    <h5>{user.name} logged in <Button variant="secondary" onClick = {() => {dispatch(logoutUser())}} type="submit">logout</Button></h5>
    <div>
    {blogForm()}
    <Table striped>
    <tbody>  
    {blogs.map(blog =>
    <tr key={blog.id}>
    <td>
    <div key={blog.id}>
    <Link to={`/blogs/${blog.id}`}><h4>{blog.title}</h4></Link>
    </div>
    </td>
    </tr>
    )}
    </tbody>
    </Table>       
    </div>
    
    </div>
  )
}

export default Blogs