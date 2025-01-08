// import Events from './components/Events'
// import Forms from './components/Form'
// import Inuputs from './components/Input'
import { useReducer, useState } from 'react'
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

const initialState = {
  name: 'Emily',
  skills: [],
  education: [],
  experience: [],
  interests: [],
  extracurriculars: [],
}

function App() {
  function resumeReducer(resumeData, action) {
    switch (action.type) {
      case 'ADDRESUME':
        return {
          ...resumeData,
          [action.section]: [...resumeData[action.section], action.payload],
        }

      case 'DELETERESUME':
        return {
          ...resumeData,
          [action.section]: resumeData[action.section].filter(
            (_, i) => i !== action.payload,
          ),
        }

      case 'UPDATERESUME':
        return {
          ...resumeData,
          [action.section]: resumeData[action.section].map((item, i) =>
            i === action.index ? action.payload : item,
          ),
        }

      default:
        return resumeData
    }
  }

  const [resumeData, resumedispatch] = useReducer(resumeReducer, initialState)

  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }]

      case 'DELETE':
        return videos.filter((videos) => videos.id !== action.payload)

      case 'UPDATE':
        const index = videos.findIndex((v) => v.id === action.payload.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload)
        return newVideos

      default:
        return action.payload
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB)

  const [editable, setEditable] = useState(null)

  function editVideo(id) {
    setEditable(videos.find((videos) => videos.id === id))
  }

  return (
    <>
      <div>
        <AddVideo
          dispatch={dispatch}
          editable={editable}
          setEditable={setEditable}
        />
        <VideoList
          dispatch={dispatch}
          editVideo={editVideo}
          videos={videos}
        ></VideoList>
      </div>
      <Resume data={resumeData} resumedispatch={resumedispatch} />
      <ResumeEditor resumedispatch={resumedispatch} />
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
