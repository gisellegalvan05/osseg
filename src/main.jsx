import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Afiliarse from './pages/Afiliarse'
import Sedes from './pages/Sedes'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import 'flowbite'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        index:true,
        path:'/home',
        element: <Home/>
      },
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/nosotros',
        element: <Nosotros />
      },
      {
        path:'/afiliarse',
        element: <Afiliarse />
      },
      {
        path:'/delegaciones',
        element: <Sedes />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
