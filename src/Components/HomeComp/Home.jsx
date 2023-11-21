import React from 'react'
import { discount, robot } from "../../assets";
import style from './Home.module.scss'
import GetStarted from './GetStarted';
import { stats } from '../../constants';
import dLayout from '../Dynamic.module.scss'


const Home = () => {
    return (
        <div id='home' className={`row ${style.homeSection}`}>
            <div className={`col-md-6 ${style.homeContent}`}>
                <div className={`d-flex align-items-center ${style.accountContent}`}>
                    <img src={discount} alt="discount" className={style.responsiveimg} />
                    <p className={`${style.paragraph1} ${dLayout.paragraph} ms-2 mb-0`}>
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
                <p className={`${dLayout.paragraph} mt-4`}>
                    Our team of experts uses a methodology to identify the credit cards
                    most likely to fit your needs. We examine annual percentage rates,
                    annual fees.
                </p>
            </div>
            <div className={`col-md-6 p-0 ${style.generationImgSection}`}>
                <img src={robot} alt="billing" className={style.cardImg} />
                {/* gradient start */}
                <div className={style.gradient1} />
                <div className={style.gradient2} />
                <div className={style.gradient3} />
                {/* gradient end */}
            </div>

            <div className={style.getStartedMob}>
                <GetStarted />
            </div>
            <section className={style.countSection} >
                {stats.map((stat) => (
                    <div key={stat.id} className={style.singleContent} >
                        <h4 className=" text-white">
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