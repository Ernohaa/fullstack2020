import React from 'react'
import { useSelector } from 'react-redux'



const Notification = () => {
  const msg = useSelector(state => state.notification)
  return (
    <div className="error">
      {msg === "" ? null : <h5>{msg}</h5>}
    </div>
  )
}

export default Notification
