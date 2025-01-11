import { useCallback, useMemo, useRef, useState } from 'react'

function States() {
  const [number, setNumber] = useState(5)

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

  const memoizedFib = useCallback(function fib(n) {
    if (n === 1 || n === 2) {
      return 1
    }
    return fib(n - 1) + fib(n - 2)
  }, [])

  const memoFib = useMemo(() => memoizedFib(number), [number, memoizedFib])

  return (
    <>
      <div>
        <h1>
          {number} | {memoFib}
        </h1>
        <button onClick={onHandleClick}>Add</button>
      </div>
    </>
  )
}

export default States
