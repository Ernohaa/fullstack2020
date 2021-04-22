const notificationReducer = (state = "", action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return action.data.content
        case 'CLEAR_NOTIFICATION':
            return ""
        default: return state
    }
}

export const setNotification = (content,time) => {
    return async dispatch => { 
        dispatch({
          type: 'ADD_NOTIFICATION',
          data: {content}
        })     
        const resetTimer = setTimeout(() => {
            dispatch(removeNotification())
          },time*1000)
        clearTimeout(resetTimer-1)  
        return resetTimer
    }
}

export const removeNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    }
}

export default notificationReducer 