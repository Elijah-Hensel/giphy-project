import { useState } from "react"
import PropTypes from "prop-types"
import ShareModal from "./ShareModal"

const Gif = ({ gif, ...rest }) => {
  const [showModal, setShowModal] = useState(false)
  const handleModal = () => setShowModal(!showModal)

  // if (!gif) return null

  return (
    <li
      key={gif.id}
      className="gif-list-item-container"
      onMouseEnter={handleModal}
      onMouseLeave={handleModal}
    >
      <ShareModal
        url={gif.images.original_mp4.mp4}
        gif={gif}
        {...rest}
        className={showModal ? "btn-share" : "hidden"}
      />

      <video
        className="video gif-list-item"
        muted
        autoPlay
        loop
        value={gif.title}
      >
        <source src={gif.images.original_mp4.mp4} type="video/mp4" />
      </video>
    </li>
  )
}

Gif.propTypes = {
  gif: PropTypes.object.isRequired,
}

export default Gif
