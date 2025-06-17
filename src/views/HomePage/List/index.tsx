import { memo, useEffect } from 'react'

const List = memo(() => {
  useEffect(() => {
    console.log('list页面')
  }, [])
  return <>列表页面，属于home下的子路由</>
})

export default List
