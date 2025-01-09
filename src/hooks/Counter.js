import { useReducer } from 'react'

function countReducer(count, action) {
  switch (action.type) {
    case 'INCRIMENT':
      return count + 1

    case 'DECREMENT':
      return count - 1

    default:
      return count
  }
}

const useCounter = () => {
  const [count, counterDispatch] = useReducer(countReducer, 0)

  const incriment = () => counterDispatch({ type: 'INCRIMENT' })
  const decrement = () => counterDispatch({ type: 'DECREMENT' })

  return [count, incriment, decrement]
}

export default useCounter
