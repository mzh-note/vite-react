import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/', { replace: true })
  }
  return (
    <>
      <Button onClick={goHome}>登录</Button>
    </>
  )
}

export default Login
