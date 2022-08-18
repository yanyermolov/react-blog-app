import { Route, Routes } from "react-router-dom";
import BlogList from "./pages/BlogList";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<BlogList />}/>
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
