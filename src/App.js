// import Events from './components/Events'
// import Forms from './components/Form'
// import Inuputs from './components/Input'
import { useState } from 'react'
// import Clicks from './components/Click'
import Resume from './components/Resume'
// import States from './components/State'
import videoDB from './data/data'
// import Effects from './components/Effect'
// import Stopwatch from './components/Stopwatch'
import AddVideo from './components/AddVideo'
import VideoList from './components/VideoList'
// import resumeData from './data/Resume'
import ResumeEditor from './components/ResumeEditor'
// import FormEvent from './components/FormEvent'
// import SearchableList from './components/SearchPlayers'
// import Todo from './components/Todo'

function App() {
  const [resumeData, setResumeData] = useState({
    name: 'Emily',
    skills: [],
    education: [],
    experience: [],
    interests: [],
    extracurriculars: [],
  })

  const addData = (section, item) => {
    setResumeData((prevState) => ({
      ...prevState,
      [section]: [...prevState[section], item],
    }))
  }

  const deleteData = (section, index) => {
    setResumeData((prevState) => ({
      ...prevState,
      [section]: prevState[section].filter((_, i) => i !== index),
    }))
  }

  const updateData = (section, index, updatedItem) => {
    setResumeData((prevState) => ({
      ...prevState,
      [section]: prevState[section].map((item, i) =>
        i === index ? updatedItem : item,
      ),
    }))
  }

  const [videos, setVideos] = useState(videoDB)

  const [editable, setEditable] = useState(null)

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }])
  }

  function deleteVideo(id) {
    setVideos(videos.filter((videos) => videos.id !== id))
  }

  function editVideo(id) {
    setEditable(videos.find((videos) => videos.id === id))
  }

  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id)
    const newVideos = [...videos]
    newVideos.splice(index, 1, video)
    setVideos(newVideos)
  }

  return (
    <>
      <div>
        <AddVideo
          addVideo={addVideo}
          updateVideo={updateVideo}
          editable={editable}
          setEditable={setEditable}
        />
        <VideoList
          deleteVideo={deleteVideo}
          editVideo={editVideo}
          videos={videos}
        ></VideoList>
      </div>
      <Resume
        data={resumeData}
        deleteData={deleteData}
        updateData={updateData}
      />
      <ResumeEditor addData={addData} />
      {/* <Events></Events>
      <Forms></Forms>
      <Inuputs></Inuputs>
      <Clicks></Clicks>
      <States></States>
      <Effects></Effects>
      <Stopwatch></Stopwatch> */}
      {/* <FormEvent></FormEvent>
      <SearchableList></SearchableList> */}
      {/* <Todo></Todo> */}
    </>
  )
}

export default App
