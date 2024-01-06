import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects";
import ProjectById from "./views/ProjectById";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectById />} />
        <Route path='*' element={<p>404</p>} />
      </Routes>
    </>
  );
}

export default App;
