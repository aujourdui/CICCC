import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<h4>WHOOPS~!!! 404 Page Not Found!</h4>} />
      </Routes>
    </>
  );
};

export default App;
