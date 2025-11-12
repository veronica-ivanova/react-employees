import { StrictMode } from 'react'
import { ConfigProvider, theme } from 'antd';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Paths } from './paths';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Auth } from './features/auth/auth';
import { Employees } from './pages/employees';
import './index.css';

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Employees/>
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
    <Provider store={store}>
      <ConfigProvider theme={{
        algorithm: theme.darkAlgorithm
      }}>
        <Auth>
          <RouterProvider router={ router }/>
        </Auth>
      </ConfigProvider>
    </Provider>
  </StrictMode>
)
