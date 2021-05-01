import blogService from '../services/blogs'


export const initializeBlogs = () => {
    return async dispatch => {
      const blogs = await blogService.getAll()
      dispatch({
        type: 'INIT_BLOGS',
        data: blogs
      })
    }
}

export const toggleLikeCount = (blog) => {
    return async dispatch => {
      const likeBlog = {...blog, likes: blog.likes + 1}
      dispatch({
        type: 'LIKE',
        data: likeBlog.id
      })
      await blogService.update(likeBlog.id,likeBlog)
      
    }
  }

export const addNewBlog = (title) => {
    return async dispatch => {
        const newBlog = await blogService.create(title)
        dispatch({
          type: 'NEW_BLOG',
          data: newBlog
        })
      }  
  }

const reducer = (state = [], action) => {
    switch (action.type){
      case 'LIKE':
        const id  = action.data
        const blogToLike = state.find(n => n.id === id)
        const likedBlog = { ...blogToLike, likes : blogToLike.likes + 1 }
        return state.map(blog => blog.id !== id ? blog : likedBlog)
      case 'NEW_BLOG':
        return state.concat(action.data)
      case 'INIT_BLOGS':
        return action.data
      default: return state
    }
  }
  
  export default reducer