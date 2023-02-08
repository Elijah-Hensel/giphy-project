import PropTypes from "prop-types"
import Gif from "./Gif"

const CopiedGifs = ({ gifs, showCopied }) => {

  console.log(showCopied)

  if (!showCopied) return null

  return (
    <div className="copied-modal">
      {gifs.length < 1 ? (
        <span id="no-gifs-to-display" className="gif-list-span">
          There are no GIF's do display...yet...
        </span>
      ) : (
        <div className="gif-list-container">
          <ul className="gif-list-copied">
            {gifs.length > 0 &&
              gifs.map((gif) => <Gif key={gif.id} alt={gif.title} gif={gif} />)}
          </ul>
        </div>
      )}
    </div>
  )
}

CopiedGifs.propTypes = {
  gifData: PropTypes.object,
}

CopiedGifs.defaultProps = {
  gifData: {
    data: [],
    pagination: null,
    currentGifs: [],
  },
}

export default CopiedGifs
