

function Events() {
    const handleMouseOver = (event) => {
        event.target.style.transform = 'scale(1.2)';
        event.target.style.transition = 'transform 0.3s';
    };

    const handleMouseOut = (event) => {
        event.target.style.transform = 'scale(1)';
        event.target.style.transition = 'transform 0.3s';
    };

    const handleCopy=() => {
        alert('something was copied')
    }

    const handlePaste=() => {
        alert('something was Pasted')
    }

    const handleCut=() => {
        alert('something was Cutted')
    }
    return (
        <>
            <div>
                <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src="https://picsum.photos/id/1/200/300" alt="random"/>
            </div>
            <div>
                <button  onClick={() => console.log('Single clicked')}
                    onDoubleClick={() => alert('Button double clicked!')}>Hello</button>
            </div>
            <div>
                <input onFocus={()=> console.log('focused on the textbox')} onBlur={()=>console.log('out of textbox')} placeholder="enter you name"></input>
            </div>

            <div>
                <p 
                    onCopy={handleCopy} 
                    onCut={handleCut} 
                    onPaste={handlePaste} 
                    contentEditable={true} 
                >
                    Try copying, cutting, or pasting this text to see the events in action.
                </p>
            </div>
        </>
    )
}

export default Events