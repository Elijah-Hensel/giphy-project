import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import SearchForm from "../components/SearchForm"
import GifList from "../components/GifList"
import CopiedGifs from "../components/CopiedGifs"
import PageControllers from "../components/PageControllers"
import { setGifsByQuery, setInitialGifs } from "../utils/actions"

function Root() {
  const [params] = useSearchParams()
  const [gifs, setGifs] = useState({
    data: [],
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
      <PageControllers pageRef={pageRef} setPageRef={setPageRef} gifs={gifs} />
      <CopiedGifs
        showCopied={copiedGifs.modalIsOpen}
        gifs={copiedGifs.gifs}
        copiedGifs={copiedGifs}
        setCopiedGifs={setCopiedGifs}
      />
    </div>
  )
}

export default Root
