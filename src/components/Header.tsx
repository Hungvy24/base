import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-info">
      <ul className="d-flex justify-content-center gap-5">
        <li>
          <NavLink to={"/"}>Trang chủ</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/register"}>Đăng ký</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Đăng nhập</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
