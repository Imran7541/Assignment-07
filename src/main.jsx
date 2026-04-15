import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.jsx'
import Timeline from './pages/timeline/Timeline.jsx'
import Stats from './pages/stats/Stats.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import HomePage from './pages/homepage/HomePage.jsx'



const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          index:true,
          element:<HomePage/>,
          loader:()=>fetch('/friends.json')
        },
        {
          path:'/timeline',
          element:<Timeline/>
        },
        {
          path:'/stats',
          element:<Stats/>
        }
      ],
      errorElement:<NotFoundPage/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
