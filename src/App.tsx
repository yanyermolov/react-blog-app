import { Route, Routes } from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import PostsListPage from './pages/PostsListPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogPage />}>
        <Route index element={<PostsListPage />} />
      </Route>
    </Routes>
  )
}

export default App
