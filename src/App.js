import React from "react";
import { Routes, Route } from "react-router-dom";
import Comments from "./pages/Comments";
import Dashboard from './pages/Dashboard';
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

// reddit/r/search?q=cats&src=caturday
// {q: 'cats',src: 'caturday'}

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard name={'Hoge'} />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<h4>WHOOPS~!!! 404 Page Not Found!</h4>} />
      </Routes>
    </>
  );
};

export default App;
