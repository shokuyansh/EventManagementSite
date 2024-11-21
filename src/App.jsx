import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import { routes } from './routes/routes'
const route = createBrowserRouter(routes)
function App() {
  
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
