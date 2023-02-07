import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import SearchForm from "../components/SearchForm"
import { getInitialGifs, getGifsBySearchQuery } from "../api"

function Root() {
  const [params] = useSearchParams()
  const [query, setQuery] = useState("")
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
  }, [params, query])

  const GifList = (gifData) => {
    const { data } = gifData

    if (data.length < 0) return null

    return (
      <div>
        {data.length > 0 &&
          data.map((gif) => (
            <video muted autoPlay loop key={gif.id}>
              <source src={gif.images.original_mp4.mp4} type="video/mp4" />
            </video>
          ))}
      </div>
    )
  }

  return (
    <div className="Root">
      <SearchForm setGifs={setGifs} />
      <div>{gifs.data.length > 1 ? GifList(gifs) : null}</div>
    </div>
  )
}

export default Root
