import { getInitialGifs, getGifsBySearchQuery } from "../api"

export const setGifsByQuery = async (query, action) => {
        const { data, pagination } = await getGifsBySearchQuery(query)
        return action({ data, pagination })
      }

export const setInitialGifs = async (action) => {
        const { data, pagination } = await getInitialGifs()
        return action({ data, pagination })
      }