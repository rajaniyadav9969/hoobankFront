import React from 'react'
import { discount, robot } from "../../assets";
import style from './Home.module.scss'
import GetStarted from './GetStarted';
import { stats } from '../../constants';
const Home = () => {
    return (

        <div id='home' className={`row ${style.homeSection}`}>
            <div className={`col-md-6 ${style.homeContent}`}>
                <div className={`d-flex align-items-center ${style.accountContent}`}>
                    <img src={discount} alt="discount" className={style.responsiveimg} />
                    <p className={`${style.paragraph} ms-2 mb-0`}>
                        <span className="">20%</span> Discount For{" "}
                        <span className="">1 Month</span> Account
                    </p>
                </div>
                <div className={style.generationContent}>
                    <h1 className={style.heading}>
                        The Next <br className="" />{" "}
                        <span className={style.textGradent}>Generation</span>{" "}
                    </h1>
                    <div className={style.getStarted}>
                        <GetStarted />
                    </div>
                </div>
                <h1 className={style.heading}>
                    Payment Method.
                </h1>
                <p className={`${style.paragraph} mt-5`}>
                    Our team of experts uses a methodology to identify the credit cards
                    most likely to fit your needs. We examine annual percentage rates,
                    annual fees.
                </p>
            </div>
            <div className="col-md-6 p-0">
                <img src={robot} alt="billing" className={style.cardImg} />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

            <div className={style.getStartedMob}>
                <GetStarted />
            </div>
            <section className={style.countSection} >
                {stats.map((stat) => (
                    <div key={stat.id} className={style.singleContent} >
                        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                            {stat.value}
                        </h4>
                        <p className={style.textGradent}>
                            {stat.title}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Home