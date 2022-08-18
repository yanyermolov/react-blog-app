import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PostsContextProvider } from './context/PostsContextProvider'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <PostsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostsContextProvider>
  </React.StrictMode>
)
