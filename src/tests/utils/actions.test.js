import { setGifsByQuery, setInitialGifs } from '../../utils/actions';

describe("Properly sets and returns gifs after search action", () => {
  it(`returns gifs related to 'funny'`, async () => {
    const queryString = "funny"
    const action = ({data}) => ({ data })
    const { data } = await setGifsByQuery(queryString, action)
    expect(data.length).toEqual(20)
  })
})

describe("Properly sets initial gifs", () => {
  it(`returns 3 initial trending gifs`, async () => {
    const action = ({data}) => ({ data })
    const { data } = await setInitialGifs(action)
    expect(data.length).toEqual(3)
  })
})


