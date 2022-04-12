import React from "react";
import { Link, Navigate } from "react-router-dom";

const Dashboard = ({ name, user }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome, {name}</p>
      <hr />
      <Link to="/post/1">Link to Post ID 1</Link>
    </>
  );
};

export default Dashboard;
