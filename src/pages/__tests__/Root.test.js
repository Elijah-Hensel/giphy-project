import React from 'react'
import { render, act, waitFor, fireEvent } from '@testing-library/react'
import Root from '../Root'
import { BrowserRouter } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    q: "big"
  }),
}));

describe('Root', () => {
  it('renders without crashing', async () => {
    const { container } = render(<Root />, {wrapper: BrowserRouter})
    await waitFor(() => container.querySelector('video'))
    expect(container).toBeDefined()
  })

  // it('displays gifs from the API', async () => {
  //   const { queryByTestId } = render(<Root />, {wrapper: BrowserRouter})
  //   await waitFor(() => queryByTestId('gif-list'))
  //   expect(queryByTestId('gif-list')).toBeDefined()
  // })

  // it('searches for gifs', async () => {
  //   const { queryByTestId, getByPlaceholderText, queryByDisplayValue } = render(<Root />, {wrapper: BrowserRouter})
  //   // fireEvent.click(queryByTestId('search-button'))
  //   const input = getByPlaceholderText('What kind of GIF would you like to see..?')
  //   act(() => {
  //     fireEvent.change(input, { target: { value: 'big' } })
  //   })
  //   fireEvent.click(queryByTestId('search-button'))
  //   await waitFor(() => queryByTestId('gif-list'))

  //   const gifs = document.querySelectorAll('video')
  //   // const gifsDescriptions = gifs.map((gif) => gif.value)
  //   console.log({gifs})
  //   // expect(gifsDescriptions).toEqual(gifsDescriptions)
  // })
})
