import { StrictMode } from 'react'
import { ConfigProvider, theme } from 'antd';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Paths } from './paths';
import { Login } from './pages/login';
import { Register } from './pages/register';
import './index.css';

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>Employees</h1>
  },
  {
    path: Paths.login,
    element: <h1><Login/></h1>
  },
  {
    path: Paths.register,
    element: <h1><Register/></h1>
  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm
    }}>
      <RouterProvider router={ router }/>
    </ConfigProvider>
  </StrictMode>
)
