import PropTypes from "prop-types"
import Gif from "./Gif"
import NoGifs from "./NoGifs"

const GifList = ({ gifData, ...rest }) => {
  const { currentGifs } = gifData

  if (currentGifs.length < 1)
    return (
      <NoGifs />
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
    currentGifs: [],
  },
}

export default GifList
