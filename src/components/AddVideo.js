import {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
} from 'react'
import useVideosDispatch from '../hooks/VideosDispatch'

const initialState = {
  channel: 'riyaz_musics',
  time: '1 week ago',
  verified: false,
  title: '',
  views: '',
}

const AddVideo = forwardRef(function AddVideo({ editable, setEditable }, ref) {
  const [video, setVideo] = useState(editable || initialState)

  const dispatch = useVideosDispatch()

  // const inputRef = useRef(null)

  // if (editable && video.id !== editable.id) {
  //   setVideo(editable)
  // }

  const iRef = useRef(null)

  useLayoutEffect(() => {
    const { height } = iRef.current.getBoundingClientRect()
    console.log(height)
  })

  useImperativeHandle(
    ref,
    () => {
      return {
        jumpTo() {
          iRef.current.focus()
        },
        scrollIntoView() {
          iRef.current.scrollIntoView()
        },
      }
    },
    [],
  )

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
    // inputRef.current.focus()

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
          ref={iRef}
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
})

export default AddVideo
