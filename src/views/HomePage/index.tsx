import styles from './index.module.scss'
import useQueryApi from '@/hooks/useQueryApi.ts'
import { memo, useEffect } from 'react'
import { Button } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const HomePage = memo(() => {
  const { query, loading, error } = useQueryApi()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('home page init')
  }, [])

  const logout = () => {
    navigate('/login', { replace: true })
  }

  return (
    <div className={styles.home_page}>
      <Button onClick={query}>调query</Button>
      <Button onClick={logout}>退出登录</Button>
      <Button onClick={() => navigate('user')}>用户中心</Button>
      &emsp;
      <Link to="/user">Link to user</Link>
      &emsp;
      <NavLink to="/user">NavLink to user</NavLink>
      &emsp;
      <br />
      <Link to="/">about</Link>&emsp;
      <Link to="/list">list</Link>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  )
})
export default HomePage
