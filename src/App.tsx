import { Routes, Route } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='*' element={<p>404</p>} />
      </Routes>
    </>
  );
}

export default App;
