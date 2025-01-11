// import Events from './components/Events'
// import Forms from './components/Form'
// import Inuputs from './components/Input'
import { useCallback, useReducer, useState } from 'react'
// import Clicks from './components/Click'
import Resume from './components/Resume'
import States from './components/State'
// import videoDB from './data/data'
// import Effects from './components/Effect'
// import Stopwatch from './components/Stopwatch'
import AddVideo from './components/AddVideo'
import VideoList from './components/VideoList'
// import resumeData from './data/Resume'
import ResumeEditor from './components/ResumeEditor'
import ThemeContext, { ThemeProvider } from './context/Theme'
// import FormEvent from './components/FormEvent'
// import SearchableList from './components/SearchPlayers'
// import Todo from './components/Todo'
import Switch from 'react-switch'
import VideosContext from './context/VideosContext'
import VideosDispatchContext from './context/VideosDispatchContext'
import ResumeContextDispatch from './context/ResumeDispatchContext'
// import Counter from './components/counter'
import useWindowSize from './hooks/WindowSize'

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
      case 'LOAD':
        return action.payload
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

  const [videos, dispatch] = useReducer(videoReducer, [])

  const [editable, setEditable] = useState(null)

  const [width, height] = useWindowSize()

  const editVideo = useCallback(
    function editVideo(id) {
      console.log('editvideo')
      setEditable(videos.find((videos) => videos.id === id))
    },
    [videos],
  )

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ isDarkMode, toggleTheme }) => (
          <div
            style={{
              backgroundColor: isDarkMode ? '#333' : '#fff',
              color: isDarkMode ? '#fff' : '#000',
              height: '100vh',
              padding: '20px',
            }}
          >
            <div>
              <label>Toggle Theme</label>
              <Switch onChange={toggleTheme} checked={isDarkMode} />
            </div>

            <div>
              <h1>Window Size</h1>
              <p>Width: {width}px</p>
              <p>Height: {height}px</p>
            </div>

            <div>
              <States></States>
            </div>

            <VideosContext.Provider value={videos}>
              <VideosDispatchContext.Provider value={dispatch}>
                <AddVideo editable={editable} setEditable={setEditable} />
                <VideoList editVideo={editVideo} />
              </VideosDispatchContext.Provider>
            </VideosContext.Provider>

            <ResumeContextDispatch.Provider value={resumedispatch}>
              <Resume data={resumeData} />
              <ResumeEditor />
            </ResumeContextDispatch.Provider>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  )
}

export default App
