import { useState } from 'react'

const initialState = {
  channel: 'riyaz_musics',
  time: '1 week ago',
  verified: false,
  title: '',
  views: '',
}

function AddVideo({ addVideo, updateVideo, editable, setEditable }) {
  const [video, setVideo] = useState(editable || initialState)

  if (editable && video.id !== editable.id) {
    setVideo(editable)
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (editable) {
      updateVideo(video)
      setEditable(null)
    } else {
      addVideo(video)
    }

    setVideo(initialState)
  }

  // useEffect(() => {
  //   if (editable) {
  //     setVideo(editable)
  //   }
  // }, [editable])

  return (
    <>
      <form>
        <input
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
