import { arrowUp } from "../../assets";
import style from './Home.module.scss'
import { Link, NavLink } from "react-router-dom";

const GetStarted = () => (
  <div className={style.getStartedSection}>
    <NavLink
      className={style.getStartedContent}
      target="blank" to="http://www.linkedin.com/in/rajani-yadav-758225183"
    >
      <div className={style.getContent}>
        <span className={style.textGradent}>Get</span>
        <img src={arrowUp} alt="arrow-up" className="" />
      </div>
      <p className="">
        <span className={style.textGradent}>Started</span>
      </p>
    </NavLink>
  </div>
);

export default GetStarted;
