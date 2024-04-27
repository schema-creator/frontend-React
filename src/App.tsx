import { Routes, Route } from "react-router-dom";
import { DialogDemo } from "@/views/Home";
import "./index.css";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DialogDemo />} />
        {/* <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectById />} /> */}
        <Route path='*' element={<p>404</p>} />
      </Routes>
    </>
  );
}

export default App;
