import { apple, bill, google } from "../../assets";
import layout from './Product.module.scss'
import dLayout from '../Dynamic.module.scss'


const Product = () => (
  <section id="product" className={`row ${layout.sectionReverse} ${dLayout.paddingSection} ${layout.productSection}`}>
    <div className={`col-md-6 ${layout.sectionImgReverse}`}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className={layout.gradient} />
      <div className={layout.gradient2} />
      {/* gradient end */}
    </div>

    <div className={`col-md-6 ${layout.sectionInfo}`}>
      <h2 className={dLayout.heading}>
        Easily control your billing &
        invoicing
      </h2>
      <p className={`mt-4 ${dLayout.paragraph}`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className={` ${layout.appsImgSection}`}>
        <img src={apple} alt="google_play" className="" />
        <img src={google} alt="google_play" className="" />
      </div>
    </div>
  </section>
);

export default Product;
