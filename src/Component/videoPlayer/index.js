import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const MyPlayer = props => {
  const {videoData} = props
  const {srcUrl} = videoData

  return (
    <div className="cont">
      <div className="ratio ratio-21x9">
        <iframe
          title="YouTube video player"
          src={srcUrl}
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default MyPlayer
