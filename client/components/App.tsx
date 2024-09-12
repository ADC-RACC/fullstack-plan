import { useInfo } from '../hooks/useInfo.ts'
import { getInfo } from '../apis/info.ts'
function App() {
  const { data } = useInfo()
  console.log(data)
  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Info!</h1>
        <ul>
          {data &&
            data.map((info) => (
              <li key={info.title}>
                {info.title}: {info.info}
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
console.log(getInfo())
export default App
