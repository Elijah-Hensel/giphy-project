import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const KEY = 'dbQ1W7CDCrQ4pLA92RRSiQRZZFK276hK'

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
