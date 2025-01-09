import { useContext } from 'react'
import ResumeContextDispatch from '../context/ResumeDispatchContext'

function useResumeDispatch() {
  return useContext(ResumeContextDispatch)
}

export default useResumeDispatch
