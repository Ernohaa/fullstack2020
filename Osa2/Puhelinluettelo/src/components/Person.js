import React from 'react'

const Person = ({ henkilo, remove }) => {
    return (
      <li>{henkilo.name} {henkilo.number} <button onClick={()=>remove(henkilo.id)}>Delete</button></li>   
    )
  }
  
  export default Person