import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog }) => {

  const [infoVisible, setInfoVisible] = useState(false)
  const [likes,setLikes] = useState(blog.likes)

  const hideWhenVisible = { display: infoVisible ? 'none' : '' }
  const showWhenVisible = { display: infoVisible ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const addLikes = async () => {
    const updatedBlog = {
      user: blog.user.id || blog.user,
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: likes + 1
    }
    try {
      setLikes(updatedBlog.likes)
      await blogService.update(blog.id,updatedBlog)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='test' style={blogStyle}>
      <div className='Testvisibility' style={hideWhenVisible}>
        {blog.title}
        <div>
          {blog.author}
        </div>
        <button id='view' onClick={() => setInfoVisible(true)}>view</button>
      </div>
      <div style={showWhenVisible}>
        <div>
          {blog.title}
        </div>
        <div>
          {blog.author}
        </div>
        <div>
          {blog.url}
        </div>
        <div>
          likes {likes}
          <button id='like' onClick={addLikes}>Like</button>
        </div>
        <button onClick={() => setInfoVisible(false)}>hide</button>
      </div>

    </div>
  )
}

export default Blog
