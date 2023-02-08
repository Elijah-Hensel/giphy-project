import { getInitialGifs, getGifsBySearchQuery } from "../api"

export const setGifsByQuery = async (query, action, pageRef) => {
  const { data, pagination } = await getGifsBySearchQuery(query)

  return action({
    data,
    pagination,
    currentGifs: data.slice(pageRef.arrayStartPointer, pageRef.arrayEndPointer),
  })
}

export const setInitialGifs = async (action) => {
  const { data, pagination } = await getInitialGifs()
  return action({ data, currentGifs: data, pagination, copiedGifs: [] })
}

export const incrementPage = (state) => {
  console.log(state)
  const { page, arrayStartPointer, arrayEndPointer } = state

  if (page === 6) return

  return {
    page: page + 1,
    arrayStartPointer: arrayStartPointer + 4,
    arrayEndPointer: arrayEndPointer + 4,
  }
}

export const decrementPage = (state) => {
  console.log(state)
  const { page, arrayStartPointer, arrayEndPointer } = state

  if (page === 1) return

  return {
    page: page - 1,
    arrayStartPointer: arrayStartPointer - 4,
    arrayEndPointer: arrayEndPointer - 4,
  }
}
