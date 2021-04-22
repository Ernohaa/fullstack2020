import React from 'react'
import { useSelector } from 'react-redux'



const Notification = () => {
  const msg = useSelector(state => state.notification)
  return (
    <div className="error">
      {msg === "" ? null :
      msg}
    </div>
  )
}

export default Notification
