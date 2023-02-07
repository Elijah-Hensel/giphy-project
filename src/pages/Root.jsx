import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import SearchForm from "../components/SearchForm"
import GifList from "../components/GifList"
import { getInitialGifs, getGifsBySearchQuery } from "../api"

function Root() {
  const [params] = useSearchParams()
  const [gifs, setGifs] = useState({
    data: [],
    pagination: null,
  })

  useEffect(() => {
    if (params.get("q")) return

    const getGifs = async () => {
      const { data, pagination } = await getInitialGifs()
      setGifs({ data, pagination })
    }

    getGifs().catch((err) => console.error(err))
  }, [params])

  useEffect(() => {
    const setGifsByQuery = async () => {
      const query = params.get("q")
      const { data, pagination } = await getGifsBySearchQuery(query)
      setGifs({ data, pagination })
    }

    setGifsByQuery().catch((err) => console.error(err))
  }, [params])

  return (
    <div className="Root">
      <SearchForm setGifs={setGifs} />
      <GifList gifData={gifs} />
    </div>
  )
}

export default Root
