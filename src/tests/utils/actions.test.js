import { setGifsByQuery, setInitialGifs, incrementPage, decrementPage } from "../../utils/actions"

describe("#setGifsByQuery", () => {
  it(`returns gifs related to 'funny'`, async () => {
    const queryString = "funny"
    const action = ({ data }) => ({ data })
    const pageRef = { arrayStartPointer: 0, arrayEndPointer: 2 }
    const { data } = await setGifsByQuery(queryString, action, pageRef)
    expect(data.length).toEqual(20)
  })
})

describe("#setInitialGifs", () => {
  it(`returns 3 initial trending gifs`, async () => {
    const action = ({ data }) => ({ data })
    const { data } = await setInitialGifs(action)
    expect(data.length).toEqual(3)
  })
})

describe("#incrementPage", () => {
  const state = { page: 1, arrayStartPointer: 0, arrayEndPointer: 3 }
  it(`increments page by one and pointer by 3`, async () => {
    const updatedState = { page: 2, arrayStartPointer: 4, arrayEndPointer: 7 }
    expect(incrementPage(state)).toEqual(updatedState)
  })
  it(`returns original state if on last page`, async () => {
    state.page = 6
    expect(incrementPage(state)).toEqual(state)
  })
})

describe("#decrementPage", () => {
  const state = { page: 6, arrayStartPointer: 20, arrayEndPointer: 23 }
  it(`decrements page by one and pointer by 3`, async () => {
    const updatedState = { page: 5, arrayStartPointer: 16, arrayEndPointer: 19 }
    expect(decrementPage(state)).toEqual(updatedState)
  })
  it(`returns original state if on last page`, async () => {
    state.page = 1
    expect(decrementPage(state)).toEqual(state)
  })
})
