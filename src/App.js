import React, { useState } from "react";
import { useRoutes } from "react-router-dom";

import CustomLink from "./components/CustomLink";
import Chats from "./pages/Chats";
import Messages from "./pages/Messages";

const Home = React.lazy(() => import("./pages/Home"));
const Comments = React.lazy(() => import("./pages/Comments"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const PostPage = React.lazy(() => import("./pages/PostPage"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// reddit/r/search?q=cats&src=caturday
// {q: 'cats',src: 'caturday'}

const App = () => {
  const [user, setUser] = useState(false);

  const handleLogin = () => setUser(true);
  const handleLogout = () => setUser(false);

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/login",
      element: <Login user={user} handleLogin={handleLogin} />,
    },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard user={user} /> },
    { path: "/post/:postId", element: <PostPage user={user} /> },
    { path: "/comments", element: <Comments user={user} /> },
    { path: "/profile", element: <Profile user={user} /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/messages",
      element: <Messages user={user} />,
      children: [{ path: ":id", element: <Chats /> }],
    },
  ]);
  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul className="nav">
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          {user ? (
            <li onClick={handleLogout}>
              <CustomLink to="/login">Logout</CustomLink>
            </li>
          ) : (
            <li>
              <CustomLink to="/login">Login</CustomLink>
            </li>
          )}
          <li>
            <CustomLink to="/register">Register</CustomLink>
          </li>
          {user && (
            <li>
              <CustomLink to="/dashboard">Dashboard</CustomLink>
            </li>
          )}
        </ul>
        {/* <Routes>
          <Route path="/" element={<p>This is your home page</p>} />
          <Route path="/login" element={<p>This is your login page</p>} />
          <Route path="/register" element={<p>This is your register page</p>} />
        </Routes> */}
      </div>

      <div className="content">
        <React.Suspense fallback={<p>Loading...</p>}>
          {routes}
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard name={"Hoge"} />} />
            <Route path="/post/:postId" element={<PostPage />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />}>
              <Route path=":id" element={<Chats />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes> */}
        </React.Suspense>
      </div>
    </div>
  );
};

export default App;
