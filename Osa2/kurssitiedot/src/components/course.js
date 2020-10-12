import React from 'react'


const Course = ({ course }) => {
      
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts}/>
            
        </div>
    )
}

const Header = props =>
<h1>{props.course}</h1>

const Total = props => {
const summa=props.parts.reduce((acc,harkka)=>acc+harkka.exercises,0)

return(
  <div>
      <p>Yhteensä {summa} tehtävää </p>
  </div>
  )
}  

const Part = props =>
<p>{props.part.name} {props.part.exercises}</p>

const Content = props => {
  const content =()=>props.parts.map(kurssi=><Part key={kurssi.id} part={kurssi}/>)  
  return(
      content()
  )
}

export default Course