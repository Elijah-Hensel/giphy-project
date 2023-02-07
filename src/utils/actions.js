import { getInitialGifs, getGifsBySearchQuery } from "../api"

export const setGifsByQuery = async (query, action) => {
        const { data, pagination } = await getGifsBySearchQuery(query)
        action({ data, pagination })
      }

export const setInitialGifs = async (action) => {
        const { data, pagination } = await getInitialGifs()
        action({ data, pagination })
      }