import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import thunk from 'redux-thunk'
import reducer from './reducers/blogReducer'
import loginReducer from './reducers/loginReducer'

const reducers = combineReducers({
    notification: notificationReducer,
    blog: reducer,
    login: loginReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store