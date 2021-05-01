import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

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
    <div>
    <Form onSubmit={handleBlogChange}>
      <Form.Group>
      <Form.Label><h5>Title</h5></Form.Label>
      <Form.Control
          type="text"
          id = 'title'
          name="Title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      <Form.Label><h5>Author</h5></Form.Label>
      <Form.Control
          type="text"
          id = 'author'
          name="Author"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
        <Form.Label><h5>URL</h5></Form.Label>
        <Form.Control
          type="text"
          id = 'url'
          name="Url"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
      
      <Button variant="primary" id='create' type="submit">create</Button>
      </Form.Group>
    </Form>
    </div>
  )
}

export default BlogForm