import { useRef, useState } from 'react'

function States() {
  const [number, setNumber] = useState(0)

  let num = useRef(0)

  const onHandleClick = (e) => {
    e.stopPropagation()
    // const interval = setInterval(() => {
    //     setNumber(number + 1)
    //     clearInterval(interval)
    // }, 2000)

    setNumber(number + 1)

    num.current++

    console.log(num.current)
  }

  return (
    <>
      <div>
        <h1>{number}</h1>
        <button onClick={onHandleClick}>Add</button>
      </div>
    </>
  )
}

export default States
