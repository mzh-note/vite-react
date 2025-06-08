import { useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from '@/views/HomePage/HomePage'
import useStore from '@/store/useStore.ts'

function App() {
  const [count, setCount] = useState(0)
  const { time, setTime, status, setStatus } = useStore()
  console.log('App 渲染')
  const list = useMemo(() => {
    console.log('list初始化')
    return [1, 2, 3, 4]
  }, [])
  // const list = () => {
  //   console.log('list初始化')
  //   return [1,2,3,4]
  // }
  useEffect(() => {
    console.log('App init，session接口初始化')
  }, [])
  console.log(count)
  const handleClick = useCallback(() => {
    console.log('click')
  }, [])
  // const handleClick = () => {
  //   console.log('click')
  // }
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
      <span>当前time：{time}</span>
      <button color="primary" onClick={() => setTime()}>
        修改全局time状态
      </button>
      <span>当前status：{JSON.stringify(status)}</span>
      <button color="primary" onClick={() => setStatus({ status: !status })}>
        修改全局setStatus状态
      </button>
      <span>当前count：{count}</span>
      <button color="primary" onClick={() => setCount((count) => count + 1)}>
        count + 1
      </button>
      <button color="primary" onClick={() => setCount(0)}>
        count 变为0
      </button>
      <HomePage />
      <HomePage list={list} handleClick={handleClick} />
    </>
  )
}

export default App
