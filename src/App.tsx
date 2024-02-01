import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectById />} /> */}
        <Route path='*' element={<p>404</p>} />
      </Routes>
    </>
  );
}

export default App;
