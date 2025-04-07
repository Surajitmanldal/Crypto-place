import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext'
import Home from './Pages/Home/Home.jsx'
import Coin from './Pages/Coin/Coin.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: '/coin/:coinId', element: <Coin /> }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoinContextProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </CoinContextProvider>
  </StrictMode>
)
