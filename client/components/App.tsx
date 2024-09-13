import { useInfo } from '../hooks/useInfo.ts'
import { getInfo } from '../apis/info.ts'
import Info from './Info.tsx'

function App() {
  const { data } = useInfo()
  console.log(data)
  return (
    <>
      <div className="app">
        <header>
          <h1>Fullstack Boilerplate - with Info!</h1>
        </header>
        <main>
          <Info aria-label="main content" />
        </main>
        <footer>
          <p>hello</p>
        </footer>
      </div>
    </>
  )
}
console.log(getInfo())
export default App
