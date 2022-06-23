import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginBtn = ({ loginState }) => {
  async function loginOrLogout() {
    // get 요청
    try {
      await axios.get("http://localhost:3005/auth/googlelogin");
    } catch {
      console.log("app.js get failed!");
    }
  }

  return (
    <div className="menu-div">
      <button className="menu-button" onClick={loginOrLogout}>
        <div className="logo">{loginState}</div>
      </button>
    </div>
  );
};

export default LoginBtn;
