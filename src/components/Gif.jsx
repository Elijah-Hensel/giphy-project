import { useState } from "react"
import ShareModal from "./ShareModal"

const Gif = ({ gif }) => {
  const [showModal, setShowModal] = useState(false)
  const handleModal = () => setShowModal(!showModal)

  return (
    <li key={gif.id} onMouseEnter={handleModal} onMouseLeave={handleModal}>
      {showModal && <ShareModal url={gif.embed_url} />}
      <video className="video" muted autoPlay loop value={gif.title}>
        <source src={gif.images.original_mp4.mp4} type="video/mp4" />
      </video>
    </li>
  )
}

export default Gif
