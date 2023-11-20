import { features } from "../../constants";
import Button from "../Button/Button";
// import { layout } from "../style";
// import Button from "./Button";
import fStyle from './Features.module.scss'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={fStyle.featureCard}>
    <div className={fStyle.imgContent}>
      <img src={icon} alt="star" className={fStyle.cardImg} />
    </div>
    <div className={fStyle.cardContent}>
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const FeatureComp = () =>  (
  <section id="features" className={`row ${fStyle.fsection}`}>
    <div className={`col-md-6 ${fStyle.fSectionInfo}`}>
      <h2 className={fStyle.heading2}>
        You do the business, <br/> we’ll handle
        the money.
      </h2>
      <p className={`${fStyle.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button />
    </div>

    <div className={`col-md-6 ${fStyle.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default FeatureComp;
