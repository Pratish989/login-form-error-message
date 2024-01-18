import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <>
      <div className="login-form">
        <h1>Logout 🖥️</h1>
      <button onClick={handleLogout}>
        Logout
      </button>
        </div>
    </>
  );
};

export default LogoutPage;
