const KEY = process.env.REACT_APP_GIPHY_API_KEY

export const getInitialGifs = async () => {
  try {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/trending?api_key=${KEY}&limit=3`
    )

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getGifsBySearchQuery = async (query) => {
  try {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=${KEY}&limit=20&q=${query}`
    )

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
