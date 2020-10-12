import React from 'react'

const PersonForm = ({name, nameHandler, number, numberHandler, submitHandler}) => {

  return (
      <form>
          <h2>Lisää uusi</h2>
          <div>
              nimi: <input value={name} onChange={nameHandler}/>
          </div>
          <div>
              numero: <input value={number} onChange={numberHandler}/>
          </div>
          <div>
              <button type="submit" onClick={submitHandler}>lisää</button>
          </div>
      </form>
  )
}

  export default PersonForm