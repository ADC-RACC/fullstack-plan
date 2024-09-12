import { useInfo } from '../hooks/useInfo.ts'

function App() {
  const { data } = useInfo()
  console.log(data)
  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Info!</h1>
        <ul>{data && data.map((info) => <li key={info}>{info}</li>)}</ul>
      </div>
    </>
  )
}

export default App
