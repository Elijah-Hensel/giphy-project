import PropTypes from "prop-types";

const Gif = ({ gif }) => (
  <li key={gif.id}>
    <video className="video" muted autoPlay loop value={gif.title}>
      <source src={gif.images.original_mp4.mp4} type="video/mp4" />
    </video>
  </li>
)

Gif.propTypes = {
  gif: PropTypes.object.isRequired,
}

export default Gif