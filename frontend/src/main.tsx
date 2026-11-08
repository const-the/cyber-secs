import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import ChatHomePage from './pages/ChatHomePage.tsx'
import { AuthProvider, useAuth } from './util/AuthContext.tsx'
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { authToken } = useAuth();
  if (!authToken) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

const router = createBrowserRouter([
  {path: "/", Component: Home },
  {path: "/login", Component: Login},
  {path: "/register", Component: Register},
  {path: "/chat", element: (
      <ProtectedRoute>
        <ChatHomePage />
      </ProtectedRoute>
    )}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode><AuthProvider><RouterProvider router={router} /></AuthProvider></StrictMode>
)
