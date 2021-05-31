import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const Books = (props) => {

  const [filter,setFilter] = useState(null)

  const BOOK_DETAILS = gql`
    fragment BookDetails on Book {
      title
      author {
        name
      }
      published
      genres
    }
    `
  
  const allBooks = gql`
      {
        allBooks {
          ...BookDetails
      }
    }
    ${BOOK_DETAILS}
  `
  let books = useQuery(allBooks)

  
  if (!props.show) {
    return null
  }
  
  if (books.loading)  {
    return <div>loading...</div>
  }
  
  books = books.data.allBooks
  let genrelist = []

  books.map(a => a.genres.forEach(genre => {
    genrelist.push(genre)
  }))
  genrelist = [...new Set(genrelist)]

  if (filter) {
    books = books.filter(books => books.genres.includes(filter))
    
  }
  
  return (
    <div>
      <h2>books</h2>
      <table>
        <tbody>
          <tr>
            <th>
              title
            </th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {books.map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
      <h4>Filter by genre</h4>
        {genrelist.map(genre => 
            <button onClick={() => setFilter(genre)} key={genre} value={genre}>{genre}</button>)}
            <button onClick={() => setFilter(null)}>all</button>
    </div>
  )
}

export default Books