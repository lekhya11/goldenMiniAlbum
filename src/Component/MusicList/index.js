import './index.css'

import {Container} from 'react-bootstrap'

const MusicList = props => {
  const {song, onDelete} = props
  const {id, imageUrl, name, genre, duration} = song

  const onClickedDelete = () => {
    onDelete(id)
    // console.log('clicked')
  }

  return (
    <li>
      <Container>
        <button
          className="bottom-container"
          type="button"
          onClick={onClickedDelete}
        >
          <div className="left-container">
            <img src={imageUrl} alt="track" className="image" />
            <div className="heading-container">
              <p>{name}</p>
              <p>{genre}</p>
              <p>{duration}</p>
            </div>
          </div>
          {/* <div className="left-container">
          <button
            type="button"
            data-testid="delete"
            className="button"
            onClick={onClickedDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
              className="delete-logo"
            />
          </button>
        </div> */}
        </button>
      </Container>
    </li>
  )
}

export default MusicList
