import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import Select from "react-select"
import { allAuthors, EDIT_AUTHOR } from '../queries'
const Authors = (props) => {

const [name, setName] = useState('')
const [born, setBorn] = useState('')

const [ editAuthor ] = useMutation(EDIT_AUTHOR, {
  refetchQueries: [ {query: allAuthors}]
  })

  const authors = useQuery(allAuthors)
  if (authors.loading)  {
    return <div>loading...</div>
  }

  if (!props.show) {
    return null
  }

  const options = authors.data.allAuthors.map( a => ({
    value: a.name,
    label: a.name
  }))

  const submit = async (event) => {
    event.preventDefault()
    editAuthor({variables: {name,born}})
    setName('')
    setBorn('')
  }
 
  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.data.allAuthors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
      <h3>Set birthyear</h3>
      
      <form onSubmit={submit}>
        <div>
          name
        <Select defaultValue={name} options={options} onChange={({ value }) => setName(value)}></Select>
        </div>
        <div>
          born
        <input type="number" value={born} onChange= {({ target }) => setBorn(Number(target.value))}></input>
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  )
}

export default Authors