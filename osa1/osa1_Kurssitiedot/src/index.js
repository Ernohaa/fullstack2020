import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}


  const Header = (props) => {
    return (
       <h1>{props.course}</h1>  
    )
  }

  const Content =(props)=>{
    const sisalto = props.parts
    return(
      <>
        <Part name={sisalto[0].name} exercises={sisalto[0].exercises} />
        <Part name={sisalto[1].name} exercises={sisalto[1].exercises} />
        <Part name={sisalto[2].name} exercises={sisalto[2].exercises} />
      </>
    )
  }

  const Part = (props) => {
    return(
      <p>
        {props.name} {props.exercises}
      </p>
    )
}

const Total = (props) => {
  let maara = 0
  props.parts.forEach(value => {
    maara += value.exercises
  });
  return (    
    <>
      <p>yhteensä {maara}</p>
    </>
  )
}

  
  ReactDOM.render(<App />, document.getElementById('root'))
