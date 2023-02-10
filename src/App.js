import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: null,
      },
    ],
  },
])

function App() {

  return (
    <div id="app" className="body-bg min-h-screen pb-6 px-2 md:px-0;">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
