import React from "react";
import style from "./Button.module.scss";
import { NavLink } from "react-router-dom";

const Button = () => (
  <div className={style.btnSection}>
    <NavLink
      type="button"
      target="blank"
      to="http://www.linkedin.com/in/rajani-yadav-758225183"
      className={style.btnContent}
      data-aos="zoom-in-down"
      data-aos-duration="2000"
    >
      Get Started
    </NavLink>
  </div>
);

export default Button;
