import PlayButton from "./components/PlayButton";
// import Resume from "./components/Resume";
// import videos from './data/data'

function App() {
  
  return (
    <>
      {/* <div style={{alignItems:'center', justifyContent:"center"}}>Welcome to Youtube Channel</div>
      <div className="wrapper">
        {/* <Video {...obj} />
        <Video verified={false} title='Node JS tutorial' views='1M' time='1 month ago' />
        <Video title='Mongo DB tutorial' views='100k' time='3 years ago' /> */}
        {/* { videos.map(video=><Video key={video.id} verified={video.verified} title={video.title} views={video.views} time={video.time} id={video.id} /> )} */}
    {/* </div >  */}
{/* } */}
      {/* <Resume /> */}
      <PlayButton message='Play button executed' onPlay={(message)=> console.log(message)} onPause={(message)=> console.log(message)}>Play</PlayButton>
      {/* <PlayButton  message='pause button executed' onSmash={(message)=> alert(message)}>Pause</PlayButton> */}
    </>
  )
}

export default App;