import {Component} from 'react'

import MusicList from './Component/MusicList'
import MyPlayer from './Component/videoPlayer'

import './App.css'

const initialTracksList = [
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl: 'https://i.ytimg.com/vi/fhT1USQJIMw/hqdefault.jpg',
    name: 'Chaleya',
    genre: 'Jawan',
    duration: '4:24',
    srcUrl:
      'https://www.youtube.com/embed/VAdGW7QDJiU?si=pI8HSTMcVrMjmK-x&autoplay=1',
  },

  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl: 'https://i1.sndcdn.com/artworks-000097329862-b95mma-t500x500.jpg',
    name: 'Night Changes',
    genre: 'One Direction',
    duration: '3:58',
    srcUrl:
      'https://www.youtube.com/embed/syFZfO_wfMQ?si=5MPY7fo_8548pxPB&autoplay=1',
  },

  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://www.cinejosh.com/reviewsimg/big/ori-devuda-review_b_2110220327.jpg',
    name: 'Gundellona',
    genre: 'Ori Devuda',
    duration: '4:48',
    srcUrl:
      'https://www.youtube.com/embed/t_aO4EMP-i0?si=-cCCMkL1zJIfNE_y&autoplay=1',
  },
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://i.pinimg.com/736x/67/97/3f/67973f2042d5335eb4e3775d51cc46e4.jpg',
    name: '3D',
    genre: 'Jk',
    duration: '4:04',
    srcUrl:
      'https://www.youtube.com/embed/mHNCM-YALSA?si=RI8OjK8WrQU5TJBY&autoplay=1',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg',
    name: 'Kesariya',
    genre: 'Brahmastra',
    duration: '4:01',
    srcUrl:
      'https://www.youtube.com/embed/BddP6PYo2gs?si=H-1QeqyPk8jN5ZOV&autoplay=1&',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl: 'https://images.justwatch.com/poster/300704972/s592/sita-ramam',
    name: 'Oh Sita Hey Rama',
    genre: 'Sita Ramam',
    duration: '3:36',
    srcUrl:
      'https://www.youtube.com/embed/hYFzyK9ExuM?si=obidQ5NKMBEEtu00&autoplay=1',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://i1.sndcdn.com/artworks-RuTdLJxuEtrUeBVN-ZdTmlA-t500x500.jpg',
    name: 'Baby',
    genre: 'Justin Bieber',
    duration: '3:49',
    srcUrl:
      'https://www.youtube.com/embed/kffacxfA7G4?si=V9eozP0Fmexlv64a&autoplay=1',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://economictimes.indiatimes.com/thumb/msid-103358971,width-1200,height-900,resizemode-4,imgsize-62882/kushi-bo.jpg?from=mdr',
    name: 'Na Roja Nuvve',
    genre: 'Kushi',
    duration: '4:26',
    srcUrl:
      'https://www.youtube.com/embed/JTpDCoxZdv8?si=WcYixwEbBuqMmrJ5&autoplay=1',
  },
]

// Replace your code here

class App extends Component {
  state = {
    searchInput: '',
    initialList: initialTracksList,
    videoClicked: false,
    videoData: null,
  }

  deleteFunction = id => {
    const {initialList} = this.state

    const deleteFilter = initialList.filter(each => each.id !== id)

    this.setState({initialList: deleteFilter})
    this.setState({videoClicked: true})

    const videoData = initialList.find(each => each.id === id)
    this.setState({videoData})
    // console.log(videoData)
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      initialList,
      searchInput,
      videoClicked,
      clickedId,
      videoData,
    } = this.state

    console.log(clickedId)
    const searchResult = initialList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        {videoClicked ? (
          <MyPlayer videoData={videoData} />
        ) : (
          <div className="bg-container">
            <h1 className="main-head">Golden97</h1>
            <p className="main-para">Mini Album</p>
          </div>
        )}

        <div className="bg-color">
          <div className="search-container">
            <h2>Songs Playlist</h2>
            <div className="input-search">
              <input
                type="search"
                className="input-search-value"
                placeholder="Search"
                onChange={this.onSearch}
                value={searchInput}
              />
            </div>
          </div>
          {searchResult.length === 0 ? (
            <p>No Songs Found View </p>
          ) : (
            <ul className="songs-list">
              {searchResult.map(each => (
                <MusicList
                  song={each}
                  key={each.id}
                  onDelete={this.deleteFunction}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
