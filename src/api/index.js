const KEY = process.env.REACT_APP_GIPHY_API_KEY

export const getInitialGifs = async () => {
  try {
    const responses = await Promise.all([
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&limit=3`),
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&limit=3`),
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&limit=3`),
    ])

    const data = await Promise.all(
      responses.map(async function (response) {

        // send status with every response
        const { status } = response
        const {data} = await response.json()
        return {data, status}
      })
    )
    return data.map(({data, status}) => ({data, status}))
  } catch (error) {
    console.error(error)
  }
}

export const getGifsBySearchQuery = async (query) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&limit=20&q=${query}`
    )

    // send status with every response
    const { status } = response
    const { data } = await response.json()
    return { data, status }
  } catch (error) {
    console.error(error)
  }
}
