import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<h1>Profile page</h1>} />
          <Route path="/games" element={<h1>Games page</h1>} />
          <Route path="/game/:id" element={<h1>Single Game page</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="*" element={<h1>404 page</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
