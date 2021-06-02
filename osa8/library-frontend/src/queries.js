import { gql } from '@apollo/client'

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

export const BOOK_ADDED = gql`
subscription {
  bookAdded {
    ...BookDetails
  }
}
${BOOK_DETAILS}
`

export const allBooks = gql`
  {
    allBooks {
      ...BookDetails
  }
}
${BOOK_DETAILS}
`

export const allAuthors = gql`
    query {
      allAuthors  {
        name
        born
        bookCount
      }
    }
  ` 
export const EDIT_AUTHOR = gql `
    mutation editAuthor($name: String!, $born: Int!){
      editAuthor(
        name: $name,
        setBornTo: $born
      ){
        name
        born
      }   
    }
  `
export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
      login(username: $username, password: $password)  {
      value
      }
  }
`

export const NEW_BOOK = gql `

  mutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!){
    addBook(
      title: $title,
      author: $author,
      published: $published,
      genres: $genres
    ){
      title
      author {
        name
      }
      published
      genres
    }
  } 
`