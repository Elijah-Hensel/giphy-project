const KEY = process.env.REACT_APP_GIPHY_API_KEY

const reqLimitMet = (response) => {
  if (response.status === '429') return true

  return false
}

export const getInitialGifs = async () => {
  try {
    const responses = await Promise.all([
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&limit=3`),
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&limit=3`),
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&limit=3`),
    ])

    const data  = await Promise.all(
      responses.map(function (response) {
        if (reqLimitMet(response)) return { error: "Request Limit Met" }
        
        const data = response.json()
       return data
      })
    )
    return data.map((obj) => obj.data)
  } catch (error) {
    console.error(error)
  }
}

export const getGifsBySearchQuery = async (query) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&limit=20&q=${query}`
    )

    if (reqLimitMet(response)) return { error: "Request Limit Met" }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
