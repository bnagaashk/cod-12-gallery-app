const ThumbnailItem = props => {
  const {eachImage, changeback} = props

  const {id, thumbnailUrl, thumbnailAltText} = eachImage
  const onChangeBackground = () => {
    changeback(id)
  }

  return (
    <li className="thubnail-con">
      <button type="button" onClick={onChangeBackground} className="btn">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
