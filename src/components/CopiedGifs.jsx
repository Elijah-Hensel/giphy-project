import PropTypes from "prop-types"
import Gif from "./Gif"
import NoGifs from "./NoGifs"

const CopiedGifs = ({ gifs, showCopied, copiedGifs, setCopiedGifs }) => {
  return (
    <>
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
        {showCopied && (
          <div className="copied-modal">
            {gifs.length < 1 ? (
              <NoGifs />
            ) : (
              <div className="gif-list-container">
                <ul className="gif-list-copied">
                  {gifs.length > 0 &&
                    gifs.map((gif) => (
                      <Gif key={gif.id} alt={gif.title} gif={gif} />
                    ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

CopiedGifs.propTypes = {
  gifData: PropTypes.object,
}

CopiedGifs.defaultProps = {
  gifData: {
    data: [],
    currentGifs: [],
  },
}

export default CopiedGifs
