import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Comments from "./pages/Comments";
import Dashboard from "./pages/Dashboard";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";

// reddit/r/search?q=cats&src=caturday
// {q: 'cats',src: 'caturday'}

const App = () => {
  return (
    <div className="wrapper">

      <div className="sidebar">
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
        {/* <Routes>
          <Route path="/" element={<p>This is your home page</p>} />
          <Route path="/login" element={<p>This is your login page</p>} />
          <Route path="/register" element={<p>This is your register page</p>} />
        </Routes> */}
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard name={"Hoge"} />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<h4>WHOOPS~!!! 404 Page Not Found!</h4>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
