import { useState } from "react"

const ShareModal = ({ url, gif, setCopiedGifs, copiedGifs }) => {
  const [buttonText, setButtonText] = useState("Copy")

  const copyUrl = () => {
    navigator.clipboard.writeText(url)
    setCopiedGifs({
      ...copiedGifs,
      gifs: [...copiedGifs.gifs, gif]
    })
    setButtonText("Copied!")
  }

  return (
    <div className="share-modal">
      <input defaultValue={url} />
      <button type="button" className="btn-share" onClick={copyUrl}>{buttonText}</button>
    </div>
  )
}

export default ShareModal