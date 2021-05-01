import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { toggleLikeCount } from '../reducers/blogReducer'
import { useRouteMatch } from "react-router-dom"
import { setNotification } from '../reducers/notificationReducer'
import { Button } from 'react-bootstrap'



const Blog = () => {

  const blogs = useSelector(state => state.blog)
  const match = useRouteMatch('/blogs/:id')
  const blog = match ? blogs.find(blog => blog.id === match.params.id) : null
  const dispatch = useDispatch()
  const addLikes = async (blog) => {
  
    try {
      dispatch(toggleLikeCount(blog))
      dispatch(setNotification('Blog liked',3))
  
    } catch (error) {
      console.log(error)
    }
  }

  if (!blog) {
    return null
  }
  
  return (
    <div>
      <h3>{blog.title}</h3>
      <a href={blog.url}> <h5>{blog.url}</h5></a>
      <div>
        <h5>{blog.likes} likes</h5> <Button variant="primary" id='like' onClick={() => addLikes(blog)}>Like</Button>
      </div>
      <div>
        <h4>added by {blog.author}</h4>
      </div>
    </div>   
  )
}

export default Blog