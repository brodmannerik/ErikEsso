import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'normalize.css'
import LayoutWrapper from './components/Layout/LayoutWrapper'
import ArchComponent from './components/Pages/ArchComponent'
import CanvasComponent from './components/Pages/CanvasComponent'
import PastWrapper from './components/Layout/PastWrapper'
import InfoWrapper from './components/Layout/InfoWrapper'
import PastComponent from './components/Pages/PastComponent'
import InfoComponent from './components/Pages/InfoComponent'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <LayoutWrapper />
        <CanvasComponent />
      </>
    )
  },
  {
    path: 'archive',
    element: (
      <>
        <LayoutWrapper />
        <ArchComponent />
      </>
    )
  },
  {
    path: 'info',
    element: (
      <>
        <InfoWrapper />
        <InfoComponent />
      </>
    )
  },
  {
    path: 'past',
    element: (
      <>
        <PastWrapper />
        <PastComponent />
      </>
    )
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
