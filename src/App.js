import Events from "./components/Events";
import Forms from "./components/Form";
import Inuputs from "./components/Input";
import { useState } from "react";
import Clicks from "./components/Click";
import PlayButton from "./components/PlayButton";
import Resume from "./components/Resume";
import States from "./components/State";
import Video from "./components/Video";
import videoDB from './data/data'
import Effects from "./components/Effect";

function App() {

  const [videos, setVideos] = useState(videoDB)

  return (
    <>
      <div style={{ alignItems: 'center', justifyContent: "center" }}>
        <button onClick={() => {
          setVideos([...videos,
            {
            id:videos.length+1,
            title: 'GoLang DB tutorial',
            views: '100k',
            time: '1 week ago',
            verified: false
          }])
        }}>add Video</button>
      </div>
      <div onClick={() => console.log('app')} className="wrapper">
        {videos.map(video =>
          <Video key={video.id} verified={video.verified} title={video.title} views={video.views} time={video.time} id={video.id}>
            <PlayButton message={{ play: `Play video: ${video.title}`, stop: `Stop video: ${video.title}` }} onPlay={(message) => console.log(message)} onPause={(message) => console.log(message)}>{video.title}
            </PlayButton>
          </Video>)}

      </div >
    <Resume /> 
      <Events></Events>
      <Forms></Forms>
      <Inuputs></Inuputs>
      <Clicks></Clicks>
      <States></States>
      <Effects></Effects>
    </>
  )
}

export default App;