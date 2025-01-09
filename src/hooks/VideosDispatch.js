import { useContext } from 'react'
import VideosDispatchContext from '../context/VideosDispatchContext'

function useVideosDispatch() {
  return useContext(VideosDispatchContext)
}

export default useVideosDispatch
