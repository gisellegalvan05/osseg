import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Afiliarse from './pages/Afiliarse'
import Sedes from './pages/Sedes'
import Noticias from './pages/Noticias'
import UnaNoticia from './pages/UnaNoticia'
import ProgramasPreventivos from './pages/ProgramasPreventivos'
import MoreNums from './pages/MoreNums'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import 'flowbite'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        index:true,
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
        path:'/delegaciones/:id',
        element: <Sedes />
      },
      {
        path:'/noticias',
        element: <Noticias />
      },
      {
        path:'/noticias/:id',
        element: <UnaNoticia />
      },
      {
        path:'/prevencion',
        element: <ProgramasPreventivos />
      },
      {
        path:'/prevencion/:id',
        element: <UnaNoticia />
      },
      {
        path:'/masnumeros',
        element: <MoreNums />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
