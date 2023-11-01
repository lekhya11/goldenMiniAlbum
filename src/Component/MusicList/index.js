import './index.css'

const MusicList = props => {
  const {song} = props
  const {imageUrl, name, genre, duration} = song

  return (
    <li className="bg-color">
      <div className="search-container">
        <h2>Songs Playlist</h2>
        <input type="search" className="input-search" />
      </div>
      <div className="bottom-container">
        <div className="left-container">
          <img src={imageUrl} alt={name} className="image" />
          <div className="heading-container">
            <h4>{name}</h4>
            <p>{genre}</p>
          </div>
        </div>
        <div className="left-container">
          <p>{duration}</p>
          <button type="button" className="button">
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicList
