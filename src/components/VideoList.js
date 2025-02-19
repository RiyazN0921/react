import PlayButton from './PlayButton'
import Video from './Video'
import useVideos from '../hooks/Videos'
import useVideosDispatch from '../hooks/VideosDispatch'
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react'
import axios from 'axios'
import moreData from '../data/MoreData'

function VideoList({ editVideo }) {
  const videos = useVideos()
  const dispatch = useVideosDispatch()
  // const defVideos = useDeferredValue(videos)

  // const [videos, setVideos] = useState([])

  // const [isPending, startTransition] = useTransition()

  // function getVideos() {
  //   startTransition(() => {
  //     setVideos(moreData)
  //   })
  // }

  const url = 'https://my.api.mockaroo.com/learning.json?key=81785710'

  useEffect(() => {
    async function handleClick() {
      const res = await axios.get(url)
      dispatch({ type: 'LOAD', payload: res.data })
    }
    handleClick()
  }, [dispatch])

  // dispatch({ type: 'LOAD', payload: moreData })

  const play = useCallback((message) => console.log(message), [])

  const pause = useCallback((message) => console.log(message), [])

  // const play = useMemo(() => (message) => console.log(message), [])
  // const pause = useMemo(() => (message) => console.log(message), [])

  const memoButton = useMemo(
    () => (
      <PlayButton onPlay={play} onPause={pause}>
        Play
      </PlayButton>
    ),
    [pause, play],
  )

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
          {memoButton}
        </Video>
      ))}
      {/* <button onClick={getVideos}>
        {isPending ? 'getting' : 'get videos'}
      </button> */}
    </div>
  )
}

export default VideoList
