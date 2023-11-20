import { arrowUp } from "../../assets";
import style from './Home.module.scss'

const GetStarted = () => (
  <div className={style.getStartedSection}>
    <div className={style.getStartedContent}>
      <div className={style.getContent}>
        {/* <p className="font-poppins font-medium text-[18px] leading-[23.4px]"> */}
          <span className={style.textGradent}>Get</span>
        {/* </p> */}
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className={style.textGradent}>Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
