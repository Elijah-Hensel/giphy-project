import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import SearchForm from "../components/SearchForm"
import GifList from "../components/GifList"
import { setGifsByQuery, setInitialGifs } from "../utils/actions"
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
      setGifsByQuery(query, setGifs).catch((err) => console.error(err))
    } else {
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
