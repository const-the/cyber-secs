import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
const router = createBrowserRouter([
  {path: "/", Component: Home },
  {path: "/login", Component: Login}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode><RouterProvider router={router} /></StrictMode>
)
