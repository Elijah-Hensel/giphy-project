import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import SearchForm from "../components/SearchForm"
import GifList from "../components/GifList"
// import { setGifsByQuery, setInitialGifs } from "../utils/actions"
import { getInitialGifs, getGifsBySearchQuery } from "../api"

function Root() {
  const [params] = useSearchParams()
  const [gifs, setGifs] = useState({
    data: [],
    pagination: null,
  })

  useEffect(() => {
    const query = params.get("q")
    if (query) {
      const setGifsByQuery = async (query, action) => {
        console.log({ query, action }, "YEEEEEEHAW")
        const { data, pagination } = await getGifsBySearchQuery(query)
        action({ data, pagination })
      }
      setGifsByQuery(query, setGifs).catch((err) => console.error(err))
    } else {
      const setInitialGifs = async (action) => {
        const { data, pagination } = await getInitialGifs()
        action({ data, pagination })
      }
      setInitialGifs(setGifs).catch((err) => console.error(err))
    }
  }, [params])

  return (
    <div className="Root">
      <SearchForm setGifs={setGifs} />
        <GifList data-testid="gif-list" gifData={gifs} />
    </div>
  )
}

export default Root
