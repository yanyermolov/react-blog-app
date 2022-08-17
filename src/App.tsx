import { Route, Routes } from "react-router-dom";
import BlogList from "./pages/BlogList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<BlogList />}/>
      </Routes>
    </div>
  );
}

export default App;
