import { Route, Routes } from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import PostsListPage from './pages/PostsListPage'
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogPage />}>
        <Route index element={<PostsListPage />} />
        <Route path="/:id" element={<PostPage />} />
      </Route>
    </Routes>
  )
}

export default App
