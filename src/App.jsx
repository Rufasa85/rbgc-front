import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import { fromToken } from "./utils/API";
function App() {
  const [user, setUser] = useState({
    id: 0,
    email: "",
    username: "",
    Wishlists: [],
    Collections: [],
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fromToken(token)
      .then((userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        setToken(token);
      })
      .catch((err) => {
        localStorage.removeItem("token");
      });
  }, []);

  const setUserData = (userData) => {
    setUser(userData.user);
    setIsLoggedIn(true);
    setToken(userData.token);
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUser({ id: 0, email: "", username: "", Wishlists: [], Collections: [] });
    setIsLoggedIn(false);
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} user={user} logout={logout} />
        <Routes>
          <Route
            path="/"
            element={<Home isLoggedIn={isLoggedIn} user={user} token={token} />}
          />
          <Route path="/user/:id" element={<h1>Profile page</h1>} />
          <Route path="/games" element={<h1>Games page</h1>} />
          <Route path="/game/:id" element={<h1>Single Game page</h1>} />
          <Route
            path="/login"
            element={
              <Login setUserData={setUserData} isLoggedIn={isLoggedIn} />
            }
          />
          <Route path="*" element={<h1>404 page</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
