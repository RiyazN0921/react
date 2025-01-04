import './Video.css'
function Video({
  title,
  views,
  time,
  channel = 'Riyaz Musics',
  verified,
  id,
  children,
}) {
  return (
    <>
      <div className="container">
        <img
          src={`https://picsum.photos/id/${id}/200/300`}
          alt="Katherine Johnson"
        />
        <div>{title}</div>
        <div>{views}</div>
        <div>{time}</div>
        <div>
          {channel} {verified && '✔️'}
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}

export default Video
