const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require ('../models/blog')
const api = supertest(app)
const bcrypt = require('bcrypt')
const User = require('../models/user')
const helper = require('./test_helper')

const initialBlogs = [
    {
        "title": "Testiblogi",
        "author": "ekablogi",
        "url": "jokurl.com",
        "likes": 111
    },
    {
        "title": "Testiblogi2",
        "author": "tokablogi",
        "url": "jokurl.com",
        "likes": 222
    }
]

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(initialBlogs)
})

test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
})

test('blog id field is id instead of _id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
    

})

test('a valid blog can be added', async () => {
    
    const newBlog = {
        "title": "Test blog2",
        "author": "Admin",
        "url": "jokurl.com",
        "likes": 999
    }
    await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)

    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(initialBlogs.length+1)
})

test('blog without likes is set to 0', async () => {
    const blogWithoutLikes = {
        "title": "Test blog3",
        "author": "Admin",
        "url": "jokurl.com",
    }
    await api
    .post('/api/blogs')
    .send(blogWithoutLikes)
    
    const response = await api.get('/api/blogs')
    expect(response.body[2].likes).toEqual(0)
})

test('blogs without title/url cannot be added', async () => {
    const blogWithoutTitle = {
        "author": "Admin",
        "url": "jokurl.com",
        "likes": 999
    }
    await api
    .post('/api/blogs')
    .send(blogWithoutTitle)
    .expect(400)
})

describe('when there is initially one user at db', () => {
    beforeEach(async () => {
      await User.deleteMany({})
  
      const passwordHash = await bcrypt.hash('sekret', 10)
      const user = new User({ username: 'root',name: "Supersalainen", passwordHash })
  
      await user.save()
    })
  
    test('creation fails with proper statuscode and message if username already taken', async () => {
        const usersAtStart = await helper.usersInDb()
    
        const newUser = {
          username: 'root',
          name: 'Superuser',
          password: 'salainen',
        }
    
        const result = await api
          .post('/api/users')
          .send(newUser)
          .expect(400)
          .expect('Content-Type', /application\/json/)
    
        expect(result.body.error).toContain('`username` to be unique')
    
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })

    test('creation succeeds with a fresh username', async () => {
        const usersAtStart = await helper.usersInDb()
    
        const newUser = {
          username: 'mluukkai',
          name: 'Matti Luukkainen',
          password: 'salainen',
        }
    
        await api
          .post('/api/users')
          .send(newUser)
          .expect(200)
          .expect('Content-Type', /application\/json/)
    
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
    
        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)
      })
})

afterAll(() => {
    mongoose.connection.close()
})