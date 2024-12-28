import './Video.css'
function Video({title, views, time}) {
    return (
        <>
            <div className='container'>
            <div> <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson"
            /> <div className='title'>{title}</div>
                <div className='views'>{views}</div>
                <div className='time'>{time}</div>
                </div>
                </div>
        </>
    )
}

export default Video