import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    notification: notificationReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store