import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

  const Statistics=(props)=>{
      
    return (
        <tbody>
        <tr>
          <td>{props.text }</td>
          <td>{props.value} {props.text2}</td>
        </tr>
        </tbody>
    )   
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [yhteensa,setYhteensa]=useState(0)
    const [keskiarvo,setKeskiarvo]=useState(0)
    const [positiiviset,setPositiiviset]=useState(0)
    
  
    const handleGoodClick = () => {
        setGood(good+1)
        setYhteensa(yhteensa+1) 
        setKeskiarvo(keskiarvo+1)
        setPositiiviset(positiiviset+1)

    }
  
    const handleNeutralClick = ()=> {
        setNeutral(neutral+1)
        setYhteensa(yhteensa+1)      
    }

    const handleBadClick = () => {
        setBad(bad+1)
        setYhteensa(yhteensa+1)
        setKeskiarvo(keskiarvo-1)       
    }

    if (yhteensa===0){
        return(
            <div>
            <h1>anna palautetta</h1>
            <Button handleClick={handleGoodClick} text="hyvä" />
            <Button handleClick={handleNeutralClick} text="neutraali" />
            <Button handleClick={handleBadClick} text="huono"/>
            <h1>statistiikka</h1>
            <p>Ei yhtään palautetta annettu </p>
            </div>
        )
    }
  
    return (
        <div>
          <h1>anna palautetta</h1>
          <Button handleClick={handleGoodClick} text="hyvä" />
          <Button handleClick={handleNeutralClick} text="neutraali" />
          <Button handleClick={handleBadClick} text="huono"/>
          <h1>statistiikka</h1>
          <table>
            <Statistics text='hyvä' value={good}/>
            <Statistics text='neutraali' value={neutral}/>
            <Statistics text='huono' value={bad}/>
            <Statistics text='yhteensä' value={yhteensa}/>
            <Statistics text='keskiarvo' value={keskiarvo/yhteensa}/>
            <Statistics text='positiivisia' value={(positiiviset/yhteensa)*100} text2='%'/>
          </table>
        </div> 
    )
  }
  ReactDOM.render(<App />, 
    document.getElementById('root')
  )