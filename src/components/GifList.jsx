import PropTypes from "prop-types"
import Gif from "./Gif"

const GifList = ({ gifData, ...rest }) => {
  console.log(gifData)
  const { currentGifs } = gifData

  if (currentGifs.length < 1)
    return (
      <span id="no-gifs-to-display" className="gif-list-span">
        There are no GIF's do display...yet...
      </span>
    )

  return (
    <div className="gif-list-container">
      <ul className="gif-list center">
        {currentGifs.length > 0 &&
          currentGifs.map((gif) => (
            <Gif key={gif.id} alt={gif.title} gif={gif} {...rest} />
          ))}
      </ul>
    </div>
  )
}

GifList.propTypes = {
  gifData: PropTypes.object,
}

GifList.defaultProps = {
  gifData: {
    data: [],
    pagination: null,
    currentGifs: [],
  },
}

export default GifList
