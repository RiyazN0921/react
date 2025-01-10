import PlayButton from './PlayButton'
import Video from './Video'
import useVideos from '../hooks/Videos'
import useVideosDispatch from '../hooks/VideosDispatch'
import { useEffect } from 'react'
import axios from 'axios'

function VideoList({ editVideo }) {
  const videos = useVideos()
  const dispatch = useVideosDispatch()

  const url = 'https://my.api.mockaroo.com/learning.json?key=81785710'

  useEffect(() => {
    async function handleClick() {
      const res = await axios.get(url)
      dispatch({ type: 'LOAD', payload: res.data })
    }
    handleClick()
  }, [dispatch])
  return (
    <div
      style={{ display: 'flex' }}
      onClick={() => console.log('app')}
      className="wrapper"
    >
      {videos.map((video) => (
        <Video
          key={video.id}
          verified={video.verified}
          title={video.title}
          views={video.views}
          time={video.time}
          id={video.id}
          dispatch={dispatch}
          editVideo={editVideo}
        >
          <PlayButton
            message={{
              play: `Play video: ${video.title}`,
              stop: `Stop video: ${video.title}`,
            }}
            onPlay={(message) => console.log(message)}
            onPause={(message) => console.log(message)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      {/* <button onClick={handleClick}>get videos</button> */}
    </div>
  )
}

export default VideoList
