import './PlayButton.css'

function PlayButton({ message, children, onPlay, onPause }) {
    let playing = false;
    function onClickHandler(e) {
        console.log(e)
        e.stopPropagation()
        if(playing) onPlay(message)
        else onPause(message)
        
        playing = !playing
    }
    return (
        <button onClick={onClickHandler}>{children} : { playing ? '>' : '||'}</button>
    )
}

export default PlayButton