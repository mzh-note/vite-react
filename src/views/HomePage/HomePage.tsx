import styles from './index.module.scss'
import useQueryApi from '@/hooks/useQueryApi.ts'
import { useEffect } from 'react'
import { Button } from 'antd-mobile'

export default function HomePage() {
  const { query, loading, error } = useQueryApi()
  useEffect(() => {
    console.log('home page')
  }, [])
  return (
    <div className={styles.home_page}>
      <p>this is home page</p>
      <button className={styles.btn}>btn</button>
      <Button onClick={query}>调query</Button>
    </div>
  )
}
