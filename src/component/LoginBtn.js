import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const LoginBtn = ({ loginState }) => {
  function loginOrLogout() {
    console.log("login logout");
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
