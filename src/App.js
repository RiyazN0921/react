import Video from "./components/Video";

function App() {
  return (
    <>
    <div>Hello World</div>
      <Video title='React JS tutorial' views='10k' time='1 year ago' />
      <Video title='Node JS tutorial' views='1M' time='1 month ago' />
      <Video title='Mongo DB tutorial' views='100k' time='3 years ago'/>
    </>
  )
}

export default App;