const listHelper = require('../utils/list_helper')

describe('dummy', () => {
  test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
  })
})

describe('likes', () => {

  test('blogs with 3 likes total returns 3', () => {
    const blogs = 
    [
      {
        title: "testi",
        author: "String",
        url: "String",
        likes: 2},
    
      {
        title: "testi",
        author: "String",
        url: "String",
        likes: 1}
    ]
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(3)
  })
  
  test('empty list returns 0', () => {
    const blogs = []
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(0)
  })
  
  test('one blog list equals its like count', () => {
    const blogs = 
    [
      {
        title: "testi",
        author: "String",
        url: "String",
        likes: 2}
    ]
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(2)
  })
})

describe('favorite blogs', () => {

  test('return right favorite blog', () => {
    const blogs = 
    [
      {
        title: "testi1",
        author: "String",
        url: "String",
        likes: 122},
      {             
        title: "testi2",
        author: "Stringi",
        url: "String",
        likes: 121},  
    ]
    const result = listHelper.favoriteBlog(blogs)

    expect(result).toEqual({
      title: "testi1",
      author: "String",
      likes: 122})
    })

  test('author with most blogs', () => {
    const blogs = 
    [
      {
        title: "testi1",
        author: "String",
        url: "String",
        likes: 122
      },
      {             
        title: "testi2",
        author: "Stringi",
        url: "String",
        likes: 121
      },
      {
        title: "testi3",
        author: "Stringi",
        url: "String",
        likes: 12
      },
      {
        title: "testi3",
        author: "String",
        url: "String",
        likes: 12
      },
      {
        title: "testi3",
        author: "Stringi",
        url: "String",
        likes: 12
      },
      {
        title: "testi3",
        author: "Stringiss",
        url: "String",
        likes: 12
      } 
    ]
    const result = listHelper.mostBlogs(blogs)

    expect(result).toEqual({
      author: "Stringi",
      blogs: 3})
    })
})
  
