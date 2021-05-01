import loginService from '../services/login'
import blogService from '../services/blogs'

const loggedUserJSON = JSON.parse(window.localStorage.getItem('loggedBlogappUser'))
const initialState = loggedUserJSON ? loggedUserJSON : null

export const loginUser = (username,password) => {
    return async dispatch => {
        const authenticate = await loginService.login({username,password})
        blogService.setToken(authenticate.token)
        window.localStorage.setItem('loggedBlogappUser', JSON.stringify(authenticate))
        dispatch({
            type:"LOGIN",
            data: authenticate
        })
    }
}

export const logoutUser = () => {
    window.localStorage.clear()
    return {
        type:"LOGOUT"
    }         
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.data
        case "LOGOUT":
            return null
        default: return state
    }
}


export default loginReducer