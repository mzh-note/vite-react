import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const HomePage = lazy(() => import('@/views/HomePage'))
const Login = lazy(() => import('@/views/Login'))
const User = lazy(() => import('@/views/User'))
const About = lazy(() => import('@/views/HomePage/About'))
const List = lazy(() => import('@/views/HomePage/List'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        index: true, // 指定默认路由
        element: <About />,
      },
      {
        path: 'list',
        element: <List />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]

export const router = createBrowserRouter(routes)
