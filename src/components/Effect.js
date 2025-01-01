import { useEffect, useState } from "react"


function Effects() {
    const [time, setTime] = useState(new Date())
    
    useEffect(() => {
        const interval = setInterval(() => {
            const newTime = new Date()
            setTime(newTime)
            clearInterval(interval)
        }, 1000);
        
    }, [time])

    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      };
    
    return (
        <>
            <div>{formatTime(time)}</div>
        </>
    )
}

export default Effects