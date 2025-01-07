import PlayButton from './PlayButton'
import Video from './Video'

function VideoList({ videos, deleteVideo, editVideo }) {
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
          deleteVideo={deleteVideo}
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
    </div>
  )
}

export default VideoList
