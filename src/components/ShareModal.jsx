import { useState } from "react"

const ShareModal = ({ url, gif, setCopiedGifs, copiedGifs, className }) => {
  const [buttonText, setButtonText] = useState("Copy")
  
  const copyUrl = () => {
    if (!copiedGifs) return null

    navigator.clipboard.writeText(url)

    if (!Object.values(copiedGifs.gifs).includes(gif))

      setCopiedGifs({
        ...copiedGifs,
        gifs: [...copiedGifs.gifs, gif]
      })
      setButtonText("Copied!")
    }
  return (
    <div className="share-modal" name="container">
      <button type="button" className={className} onClick={() => copyUrl()}>{buttonText}</button>
    </div>
  )
}

export default ShareModal