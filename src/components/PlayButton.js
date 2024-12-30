import './PlayButton.css'

function PlayButton({ message, children, onPlay, onPause }) {
    let playing = false;
    function onClickHandler() {
        if(playing) onPlay('play')
        else onPause('stop')
        
        playing = !playing
    }
    return (
        <button onClick={onClickHandler}>{children} : { playing ? '>' : '||'}</button>
    )
}

export default PlayButton