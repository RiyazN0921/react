import Events from './components/Events'
import Forms from './components/Form'
import Inuputs from './components/Input'
import { useState } from 'react'
import Clicks from './components/Click'
import Resume from './components/Resume'
import States from './components/State'
import videoDB from './data/data'
import Effects from './components/Effect'
import Stopwatch from './components/Stopwatch'
import AddVideo from './components/AddVideo'
import VideoList from './components/VideoList'

function App() {
  const [videos, setVideos] = useState(videoDB)

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }])
  }

  return (
    <>
      <div style={{ alignItems: 'center', justifyContent: 'center' }}>
        <AddVideo addVideo={addVideo} />
      </div>
      <div style={{ display: 'flex' }}>
        <VideoList videos={videos}></VideoList>
      </div>
      <Resume />
      <Events></Events>
      <Forms></Forms>
      <Inuputs></Inuputs>
      <Clicks></Clicks>
      <States></States>
      <Effects></Effects>
      <Stopwatch></Stopwatch>
    </>
  )
}

export default App
