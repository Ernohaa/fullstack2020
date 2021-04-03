import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

describe('<Blog/>', () => {
  let component
  const blog = {
    user: 'test user',
    title: 'test title',
    author: 'test author',
    url: 'test url',
    likes: 10,
  }
  const mockHandler = jest.fn()
  beforeEach(() => {
    component = render(
      <Blog blog={blog} addLike={mockHandler}/>
    )
  })


  test('renders without errors', () => {
    expect(component).toBeDefined()
  })

  test('renders its children', () => {
    expect(
      component.container.querySelector('.test')
    ).toBeDefined()
  })

  test('at start the children are not displayed', () => {
    const div = component.container.querySelector('.Testvisibility')
    expect(div).not.toHaveStyle('display: none')
  })

  test('after clicking the button, children are displayed', () => {
    const button = component.getByText('view')
    fireEvent.click(button)
    const div = component.container.querySelector('.Testvisibility')
    expect(div).toHaveStyle('display: none')
  })

})