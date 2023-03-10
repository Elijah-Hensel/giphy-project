import { getInitialGifs, getGifsBySearchQuery } from "../api"

export const setGifsByQuery = async (query, action, pageRef) => {
  const { data, status } = await getGifsBySearchQuery(query)
  
  const responseLimitReached = () => status === 429

  if (responseLimitReached()) {
    return alert(`You've reached the maximum number of requests for this API!`)
  }

  return action({
    data,
    currentGifs: data.slice(pageRef.arrayStartPointer, pageRef.arrayEndPointer),
    status,
  })
}

export const setInitialGifs = async (action) => {
  const data = await getInitialGifs()
  const formattedData = data.map((obj) => obj.data)
  const statusArr = data.map((obj) => obj.status)

  const responseLimitReached = () => statusArr.includes(429)

  if (responseLimitReached()) {
    return alert(`You've reached the maximum number of requests for this API!`)
  }
  
  return action({
    data: formattedData,
    currentGifs: formattedData,
    copiedGifs: [],
  })
}

export const incrementPage = (state) => {
  const { page, arrayStartPointer, arrayEndPointer } = state

  if (page === 6) return state

  return {
    page: page + 1,
    arrayStartPointer: arrayStartPointer + 4,
    arrayEndPointer: arrayEndPointer + 4,
  }
}

export const decrementPage = (state) => {
  const { page, arrayStartPointer, arrayEndPointer } = state

  if (page === 1) return state

  return {
    page: page - 1,
    arrayStartPointer: arrayStartPointer - 4,
    arrayEndPointer: arrayEndPointer - 4,
  }
}
