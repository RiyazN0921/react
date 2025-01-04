import { useState } from 'react'

const initialState = {
  channel: 'riyaz_musics',
  time: '1 week ago',
  verified: false,
  title: '',
  views: '',
}

function AddVideo({ addVideo }) {
  const [video, setVideo] = useState(initialState)

  function handleChange(e) {
    console.log(e.target.name, e.target.value)
    setVideo({ ...video, [e.target.name]: e.target.value })

    console.log(video)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(video)
    addVideo(video)
    setVideo(initialState)
  }

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
        <button onClick={handleSubmit}>Add Video</button>
      </form>
    </>
  )
}

export default AddVideo
