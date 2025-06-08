import styles from './index.module.scss'
import useQueryApi from '@/hooks/useQueryApi.ts'
import { memo, useEffect } from 'react'
import { Button } from 'antd'

const HomePage = memo((props: { msg?: number; list?: number[]; handleClick?: () => void }) => {
  const { query, loading, error } = useQueryApi()
  console.log('homePage渲染')
  useEffect(() => {
    console.log('home page init')
  }, [])

  return (
    <div className={styles.home_page}>
      <p>当前count：{props?.msg}</p>
      <Button className={styles.btn} onClick={props?.handleClick}>
        父组件的子组件
      </Button>
      list：{props?.list?.map((item) => <a key={item}>{item}</a>)}
      <Button onClick={query}>调query</Button>
    </div>
  )
})
export default HomePage
