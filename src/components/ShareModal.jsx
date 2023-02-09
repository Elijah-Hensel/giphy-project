import { useState } from "react"

const ShareModal = ({ url, gif, setCopiedGifs, copiedGifs }) => {
  const [buttonText, setButtonText] = useState("Copy")
  
  const copyUrl = () => {
    if (!copiedGifs) return null

    navigator.clipboard.writeText(url)

    if (!Object.values(copiedGifs.gifs).includes(gif))
      // console.log(copiedGifs.gifs, url)
      setCopiedGifs({
        ...copiedGifs,
        gifs: [...copiedGifs.gifs, gif]
      })
      setButtonText("Copied!")
    }
  return (
    <div className="share-modal">
      <button type="button" className="btn-share" onClick={() => copyUrl()}>{buttonText}</button>
    </div>
  )
}

export default ShareModal