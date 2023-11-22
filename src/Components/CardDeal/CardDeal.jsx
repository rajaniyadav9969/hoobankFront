import { card } from "../../assets";
import Button from "../Button/Button";
import layout from '../Product/Product.module.scss'
import dLayout from '../Dynamic.module.scss'

const CardDeal = () => (
  <section className={`row ${layout.sectionReverse} ${dLayout.paddingSection}`}>
    <div  className={`col-md-6 ${layout.sectionInfo}`}
    data-aos="fade-right"
    data-aos-duration="2000">
      <h2 className={dLayout.heading}>
        Find a better card deal  in few easy
        steps.
      </h2>
      <p className={`mt-4 ${dLayout.paragraph}`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button style={`mt-10`} />
    </div>
    <div className={`col-md-6 ${layout.sectionImgReverse}`}
     data-aos="zoom-in"
      data-aos-duration="2000">
      <img src={card} alt="billing" />
    </div>
  </section>
);

export default CardDeal;
