import { useInfo } from '../hooks/useInfo.ts'
import { getInfo } from '../apis/info.ts'
import Info from './Info.tsx'

function App() {
  const { data } = useInfo()
  console.log(data)
  return (
    <>
      <div className="app">
        <div className="header">
          <h1>Fullstack Boilerplate - with Info!</h1>
        </div>
        <Info aria-label="Main Page Content" />
      </div>
    </>
  )
}
console.log(getInfo())
export default App
