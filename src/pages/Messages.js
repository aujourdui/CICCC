import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Messages = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Messages</h1>
      <Outlet />
    </>
  );
};

export default Messages;
