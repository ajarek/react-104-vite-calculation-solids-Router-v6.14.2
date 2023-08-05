import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()

import Main from './layouts/Main/Main'
import Sphere from './pages/Sphere/Sphere'
import Cuboid from './pages/Cuboid/Cuboid'
import Cylinder from './pages/Cylinder/Cylinder'
import Cone from './pages/Cone/Cone'
import Pyramid from './pages/Pyramid/Pyramid'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Sphere />,
        errorElement: <Error />,
      },
      {
        path:'/cuboid',
        element: <Cuboid />,
        errorElement: <Error />,
      },
      {
        path:'/cylinder',
        element: <Cylinder />,
        errorElement: <Error />,
      },
      {
        path:'/cone',
        element: <Cone />,
        errorElement: <Error />,
      },
      {
        path:'/pyramid',
        element: <Pyramid />,
        errorElement: <Error />,
      },

      
    ],
  },
])
function App() {
  return (
    <div className='App'>
      <AppContext.Provider value={{}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
