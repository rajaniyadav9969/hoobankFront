import React from "react";
import style from "./Button.module.scss";

const Button = () => (
  <button type="button" className={style.btnSection} data-aos="zoom-in-down"
  data-aos-duration="2000">
    Get Started
  </button>
);

export default Button;
