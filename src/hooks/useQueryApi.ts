import { useEffect, useRef, useState } from 'react'
import useStore from '@/store/useStore.ts'

const useQueryApi = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { status } = useStore()
  const isFirstRender = useRef(true)

  const query = () => {
    console.log('query api。。。')
  }
  // useEffect(() => {
  //   console.log('无依赖，默认执行一次query')
  //   query()
  // }, [])
  useEffect(() => {
    console.log('isFirstRender.current', isFirstRender.current)
    // 仅在条件变化且非首次渲染时触发初始化，可使用useRef标记初始状态
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    // if (status) {
    //   console.log(`依赖状态${status}，每次执行，初始化也会执行`)
    //   query()
    // }
    console.log(`依赖状态${status}，每次执行，初始化也会执行`)
    query()
  }, [status])
  return {
    query,
    loading,
    setLoading,
    error,
    setError,
  }
}

export default useQueryApi
