import React from 'react'

const Filter = ({value, changeHandler}) => {
    return (<div>
        Rajaa näytettäviä: <input value={value} onChange={changeHandler}/>
    </div>)
}

export default Filter