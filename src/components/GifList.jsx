import PropTypes from "prop-types"
import Gif from "./Gif"

const GifList = ({ gifData }) => {
  console.log(gifData)
  const { data } = gifData

  if (data.length < 1)
    return (
      <span id="no-gifs-to-display" className="gif-list-span">
        There are no GIF's do display...yet...
      </span>
    )

  return (
    <div>
      <ul>{data.length > 0 && data.map((gif) => <Gif gif={gif} />)}</ul>
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
  },
}

export default GifList
