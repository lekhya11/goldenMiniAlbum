import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container} from 'react-bootstrap'

const MyPlayer = props => {
  const {videoData} = props
  const {srcUrl} = videoData

  return (
    <Container>
      <div className="cont">
        <h1>Video player</h1>
        <div className="ratio ratio-16x9">
          <iframe
            title="YouTube video player"
            src={srcUrl}
            allow="autoplay"
            allowFullScreen
          />
        </div>
      </div>
    </Container>
  )
}

export default MyPlayer
