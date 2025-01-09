import { useRef, useState, useEffect } from 'react'
import useVideosDispatch from '../hooks/VideosDispatch'

const initialState = {
  channel: 'riyaz_musics',
  time: '1 week ago',
  verified: false,
  title: '',
  views: '',
}

function AddVideo({ editable, setEditable }) {
  const [video, setVideo] = useState(editable || initialState)

  const dispatch = useVideosDispatch()

  const inputRef = useRef(null)

  // if (editable && video.id !== editable.id) {
  //   setVideo(editable)
  // }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (editable) {
      dispatch({ type: 'UPDATE', payload: video })
      setEditable(null)
    } else {
      // addVideo(video)
      dispatch({ type: 'ADD', payload: video })
    }

    setVideo(initialState)
  }

  useEffect(() => {
    if (editable) {
      setVideo(editable)
    }

    // inputRef.current.value = 'demo'
    // inputRef.current.style.background = 'red'
    inputRef.current.focus()

    // 'type here'.split('').forEach((c, i) => {
    //   console.log(c)
    //   setTimeout(() => {
    //     inputRef.current.placeholder = inputRef.current.placeholder + c
    //   }, 2000 * i)
    // })
  }, [editable])

  return (
    <>
      <form>
        <input
          ref={inputRef}
          onChange={handleChange}
          name="title"
          placeholder="enter your title"
          value={video.title}
        ></input>
        <input
          onChange={handleChange}
          name="views"
          placeholder="enter views"
          value={video.views}
        ></input>
        <button onClick={handleSubmit}>
          {editable ? 'edit' : 'add'} Video
        </button>
      </form>
    </>
  )
}

export default AddVideo
