import { useState } from 'react';
import './PlayButton.css'

function PlayButton({ message, children, onPlay, onPause }) {

    const [playing, setPlaying] = useState(false)
    // let playing = false;
    function onClickHandler(e) {
      
        e.stopPropagation()
        if(playing) onPlay(message.play)
        else onPause(message.stop)
        
        setPlaying(!playing)
    }
    return (
        <button onClick={onClickHandler}>{children} : { playing ? '⏸️' : '▶️'}</button>
    )
}

export default PlayButton