import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const navigate = useNavigate()
  return (
    <>
      用户中心
      <Button onClick={() => navigate('/')}>去首页</Button>
      <Button onClick={() => navigate('/list')}>去list</Button>
    </>
  )
}

export default User
