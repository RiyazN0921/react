import './Video.css'
function Video({ title, views, time, channel = 'Riyaz Musics', verified, id, children }) {
     
    return (
        <>
            <div className='container'>
            <div> <img
                src={`https://picsum.photos/id/${id}/200/300`}
                alt="Katherine Johnson"
            /> <div className='title'>{title}</div>
                <div className='views'>{views}</div>
                    <div className='time'>{time}</div>
                    <div className='channel'>{channel} {verified && '✔️'}</div>
                </div>
                
            </div>
            <div>
                    {children}
                </div>
        </>
    )
}

export default Video