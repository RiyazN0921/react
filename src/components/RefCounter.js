import { useState } from 'react'

function RefCounter() {
  const [count, setCount] = useState(0)

  function handleClick(e) {
    setCount(count + 1)
  }

  return <button></button>
}

export default RefCounter
