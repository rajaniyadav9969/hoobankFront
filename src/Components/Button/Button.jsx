import React from "react";
import style from "./Button.module.scss";

const Button = () => (
  <div className={style.btnSection}>
    <button type="button" className={style.btnContent} data-aos="zoom-in-down"
      data-aos-duration="2000">
      Get Started
    </button>
  </div>
);

export default Button;
