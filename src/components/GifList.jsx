const GifList = ({ gifData }) => {
  const { data } = gifData

  if (data.length < 0) return null

  return (
    <div>{
       data.length > 0 &&
        data.map((gif) => (
          <video muted autoPlay loop key={gif.id}>
            <source src={gif.images.original_mp4.mp4} type="video/mp4" />
          </video>
        ))
    }
    </div>
  )
}

export default GifList