import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Space } from 'antd-mobile'
import { AntOutline } from 'antd-mobile-icons'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Space wrap>
        <Button color="primary" fill="solid">
          Solid
        </Button>
        <Button color="primary" fill="outline">
          Outline
        </Button>
        <Button color="primary" fill="none">
          None
        </Button>
        <AntOutline fontSize={32} />
        <AntOutline fontSize={32} color="var(--adm-color-danger)" />
      </Space>
      <p>Vite + React</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
