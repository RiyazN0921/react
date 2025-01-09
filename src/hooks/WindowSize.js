import { useState, useEffect, useRef } from 'react'

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const resizeListener = useRef(null)

  useEffect(() => {
    resizeListener.current = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', resizeListener.current)

    return () => {
      window.removeEventListener('resize', resizeListener.current)
    }
  }, [])

  return [size.width, size.height]
}

export default useWindowSize
