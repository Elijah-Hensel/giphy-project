import { getInitialGifs, getGifsBySearchQuery } from "../api"

export const setGifsByQuery = async (query, action, pageRef) => {
  const { data } = await getGifsBySearchQuery(query)

  return action({
    data,
    currentGifs: data.slice(pageRef.arrayStartPointer, pageRef.arrayEndPointer),
  })
}

export const setInitialGifs = async (action) => {
  const data = await getInitialGifs()
  if (data?.error) return action({ data: [], currentGifs: [], copiedGifs: [], error: data.error })
  
  return action({ data: [], currentGifs: data, copiedGifs: [] })
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
