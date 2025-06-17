import { useEffect, memo } from 'react'
import styles from './index.module.scss'

const About = memo(() => {
  useEffect(() => {
    console.log('about页面')
  }, [])
  return <div className={styles.container}>about，属于home下的子路由</div>
})

export default About
