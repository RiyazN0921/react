import { useState, memo } from 'react'
import './PlayButton.css'

const PlayButton = memo(function PlayButton({
  message,
  children,
  onPlay,
  onPause,
}) {
  console.log('render button', { message, children })

  const [playing, setPlaying] = useState(false)
  // let playing = false;
  function onClickHandler(e) {
    e.stopPropagation()
    if (playing) onPlay()
    else onPause()

    setPlaying(!playing)
  }
  return (
    <button onClick={onClickHandler}>
      {children} : {playing ? '⏸️' : '▶️'}
    </button>
  )
})

export default PlayButton
