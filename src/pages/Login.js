import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Form from "../components/Form";

const Login = () => {
  const [toDashboard, setToDashboard] = useState(false);

  if(toDashboard === true){
      return <Navigate to="/dashboard" />
  }

  return (
    <>
      <h1>Login</h1>
      {/* <Form afterSubmit={() => navigate("/dashboard")} /> */}
      <Form afterSubmit={() => setToDashboard(true)} />
    </>
  );
};

export default Login;
