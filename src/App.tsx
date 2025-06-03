import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Space } from 'antd-mobile'
import { AntOutline } from 'antd-mobile-icons'
import HomePage from '@/views/HomePage/HomePage'
import useStore from '@/store/useStore.ts'

function App() {
  const [count, setCount] = useState(0)
  const { time, setTime, status, setStatus } = useStore()

  useEffect(() => {
    console.log('session接口初始化')
  }, [])
  return (
    <>
      <HomePage />
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
      <p>当前time：{time}</p>
      <Button color="primary" onClick={() => setTime()}>
        修改全局time状态
      </Button>
      <p>当前status：{JSON.stringify(status)}</p>
      <Button color="primary" onClick={() => setStatus({ status: !status })}>
        修改全局setStatus状态
      </Button>
      <p>当前count：{count}</p>
      <Button color="primary" onClick={() => setCount((count) => count + 2)}>
        count + 2
      </Button>
      <Button color="primary" onClick={() => setCount(0)}>
        count 变为0
      </Button>
    </>
  )
}

export default App
