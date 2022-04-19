import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<UserList />} />
        <Route path=":userId" element={<UserDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
