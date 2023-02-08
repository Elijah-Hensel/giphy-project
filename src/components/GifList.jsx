import PropTypes from "prop-types"

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
      <ul>
        {data.length > 0 &&
          data.map((gif) => (
            <li key={gif.id}>
              <video className="video" muted autoPlay loop value={gif.title}>
                <source src={gif.images.original_mp4.mp4} type="video/mp4" />
              </video>
            </li>
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
  },
}

export default GifList
