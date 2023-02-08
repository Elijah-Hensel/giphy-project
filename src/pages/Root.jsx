import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import SearchForm from "../components/SearchForm"
import GifList from "../components/GifList"
import CopiedGifs from "../components/CopiedGifs"
import {
  setGifsByQuery,
  setInitialGifs,
  incrementPage,
  decrementPage,
} from "../utils/actions"

function Root() {
  const [params] = useSearchParams()
  const [gifs, setGifs] = useState({
    data: [],
    pagination: null,
    currentGifs: [],
  })
  const [pageRef, setPageRef] = useState({
    page: 1,
    arrayStartPointer: 0,
    arrayEndPointer: 3,
  })
  const [copiedGifs, setCopiedGifs] = useState({
    gifs: [],
    modalIsOpen: false,
  })

  useEffect(() => {
    const query = params.get("q")
    if (query) {
      setGifsByQuery(query, setGifs, pageRef).catch((err) => console.error(err))
    } else {
      setInitialGifs(setGifs).catch((err) => console.error(err))
    }
  }, [params, setGifs, pageRef])

  return (
    <div className="root">
      <div className="title">
        <span>GIPHY!</span>
      </div>
      <SearchForm />
      <GifList
        gifData={gifs}
        copiedGifs={copiedGifs}
        setCopiedGifs={setCopiedGifs}
      />
      <div className="page-controllers">
        {pageRef.page > 1 && (
          <p
            onClick={() => setPageRef(decrementPage(pageRef))}
            className="prev-page"
          >
            {`<<`}
          </p>
        )}
        {pageRef.page < 6 && gifs.data.length > 0 && (
          <p
            onClick={() => setPageRef(incrementPage(pageRef))}
            className="next-page"
          >
            {`>>`}
          </p>
        )}
      </div>
      <div className="show-copied-container">
        <button
          className="btn-primary show-copied"
          onClick={() =>
            setCopiedGifs({
              ...copiedGifs,
              modalIsOpen: !copiedGifs.modalIsOpen,
            })
          }
        >
          History
        </button>
        <CopiedGifs
          showCopied={copiedGifs.modalIsOpen}
          gifs={copiedGifs.gifs}
        />
      </div>
    </div>
  )
}

export default Root
