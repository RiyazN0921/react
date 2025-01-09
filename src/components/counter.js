import useCounter from '../hooks/Counter'

function Counter() {
  const [count, incriment, decrement] = useCounter(0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incriment}>add</button>
      <button onClick={decrement}>substract</button>
    </>
  )
}

export default Counter
