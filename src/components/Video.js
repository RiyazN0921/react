import { useContext } from 'react'
import ThemeContext from '../context/Theme'
import './Video.css'
function Video({
  title,
  views,
  time,
  channel = 'Riyaz Musics',
  verified,
  id,
  children,
  editVideo,
  dispatch,
}) {
  const theme = useContext(ThemeContext)
  return (
    <>
      <div className={`container ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: 'DELETE', payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
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
