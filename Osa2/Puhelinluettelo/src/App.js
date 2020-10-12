import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import React, { useState, useEffect } from 'react'
import personservice from './services/personservice'

const App = () => {

  const [persons,setPersons] = useState([]) 
  const [newName,setNewName ] = useState('')
  const [newNumber,setNewNumber]=useState('')
  const [newSearch,setNewSearch]=useState('')
  const [newMessage, setNewMessage] = useState(null)
  const [removeName,setRemoveName] = useState(null)

  useEffect(() => {
    personservice.getAll()
      .then(InitialPersons => {
        setPersons(InitialPersons)
      })
  }, [])


  const Notification = ({message}) => {
    if (message===null){
      return null
    }
    return (
      <div className="newperson">
        {message}
      </div>
    )
  }

  const Removal = ({error}) => {
    if (error===null){
      return null
    }
    return (
      <div className="removeperson">
        {error}
      </div>
    )
  }
  

  const addPerson = (event)=>{
    event.preventDefault()

    const personObject = {
      name : newName,
      number: newNumber
    }

    if (persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())){
      if (window.confirm(`${newName} on jo luettelossa, päivitetäänkö numero?`)){
        const paivitettava = persons.find(person => person.name === newName)
        paivitettava.number = newNumber
        personservice.update(paivitettava.id,paivitettava)
        .then(returned => {
          setPersons(persons.map(person => person.id !== returned.id ? person : returned))
          setNewMessage(`${newName} numero päivitettiin`)
          setTimeout(() => {
            setNewMessage(null)
          }, 5000)
      })
      .catch(error => {
          setRemoveName(
            "VIRHE VIRHE VIRHE"
          )
          setTimeout(() => {
            setRemoveName(null)
          }, 5000)
      })
      }
    }else{

      personservice.create(personObject)
      .then(response => {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
        setNewMessage(`lisätty ${newName}`)
        setTimeout(() => {
          setNewMessage(null)
        }, 5000)
      })
    }
  }
  
  const removePerson = (id) => {
    const name = persons.filter(p => p.id === id).map(p => p.name)
    if (window.confirm(`Poistetaanko ${name}?`)) {
      personservice.remove(id)
      .then(() => {
          setPersons(persons.filter((p) => p.id !== id))
          setRemoveName(`${name} poistettiin`)
          setTimeout(() => {
            setRemoveName(null)
          }, 5000)
      })
      .catch(error => {
          setRemoveName(
            "VIRHE POISTETTAESSA HENKILÖÄ"
          )
          setTimeout(() => {
            setRemoveName(null)
          }, 5000)
      })
      }
    }


  const rows = () => personToShow.map(person =>
    <Person
      key={person.id}
      henkilo={person}
      remove={removePerson}
    />
  )
  
  const personToShow = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event)=>{  
    setNewSearch(event.target.value)
  }


  return (
    <div>
      <Notification message={newMessage}/>
      <Removal error={removeName}/>
      <h2>Puhelinluettelo</h2>

      <Filter value={newSearch} changeHandler={handleSearchChange}/>
          
      <PersonForm name={newName} nameHandler={handleNameChange}
                        number={newNumber} numberHandler={handleNumberChange}
                        submitHandler={addPerson}/>    
      <h2>Numerot</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  )

}

export default App