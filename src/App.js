import Video from "./components/Video";

function App() {
  const videos = [{
    id:1,
    title: 'React JS tutorial',
    views: '10k',
    time: '1 year ago',
    verified: true
  },
    {
    id:2,
    title: 'Node JS tutorial',
    views: '1M',
    time: '1 month ago',
    verified: true
    },
    {
      id:3,
      title: 'Mongo DB tutorial',
      views: '100k',
      time: '1 week ago',
      verified: false
    }
  ]
  return (
    <>
      <div style={{alignItems:'center', justifyContent:"center"}}>Welcome to Youtube Channel</div>
      <div className="wrapper">
        {/* <Video {...obj} />
        <Video verified={false} title='Node JS tutorial' views='1M' time='1 month ago' />
        <Video title='Mongo DB tutorial' views='100k' time='3 years ago' /> */}
        { videos.map(video=><Video key={video.id} verified={video.verified} title={video.title} views={video.views} time={video.time} id={video.id} /> )}
      </div>
    </>
  )
}

export default App;