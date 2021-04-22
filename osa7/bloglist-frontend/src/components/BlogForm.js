import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleBlogChange = async (event) => {
    event.preventDefault()
    createBlog({
      title,
      author,
      url
    })
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <form onSubmit={handleBlogChange}>
      <div>
        Title
        <input
          type="text"
          id = 'title'
          name="Title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}/>
      </div>
      <div>
        Author
        <input
          type="text"
          id = 'author'
          name="Author"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}/>
      </div>
      <div>
        URL
        <input
          type="text"
          id = 'url'
          name="Url"
          value={url}
          onChange={({ target }) => setUrl(target.value)}/>
      </div>
      <button id='create' type="submit">create</button>
    </form>
  )
}

export default BlogForm