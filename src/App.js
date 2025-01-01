// import Events from "./components/Events";
// import Forms from "./components/Form";
// import Inuputs from "./components/Input";
import Clicks from "./components/Click";
import PlayButton from "./components/PlayButton";
import Resume from "./components/Resume";
import Video from "./components/Video";
import videos from './data/data'

function App() {

  return (
    <>
      {/* <div style={{ alignItems: 'center', justifyContent: "center" }}>Welcome to Youtube Channel</div>
      <div onClick={() => console.log('app')} className="wrapper">
        {videos.map(video =>
          <Video key={video.id} verified={video.verified} title={video.title} views={video.views} time={video.time} id={video.id}>
            <PlayButton message={{ play: `Play video: ${video.title}`, stop: `Stop video: ${video.title}` }} onPlay={(message) => console.log(message)} onPause={(message) => console.log(message)}>{video.title}
            </PlayButton>
          </Video>)}

      </div > */}
      {/* {<Resume /> } */}

      {/* <Events></Events> */}
      {/* <Forms></Forms> */}
      {/* <Inuputs></Inuputs> */}
      <Clicks></Clicks>
    </>
  )
}

export default App;