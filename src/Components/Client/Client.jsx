import { quotes } from "../../assets";
import { clients, feedback } from "../../constants";
import Button from "../Button/Button";
import cStyle from "./Client.module.scss";
import dLayout from '../Dynamic.module.scss'


const Client = () => (
    <section id="clients" className={dLayout.paddingSection}>
        <div className={cStyle.clientSection}>
            <div className={cStyle.gradient} />
            <div className={`row ${cStyle.peopleAre}`}>
                <h2 className={`col-md-6 ${dLayout.heading}`}>
                    What People are <br className="sm:block hidden" /> saying about us
                </h2>
                <div className="col-md-6">
                    <p className={dLayout.paragraph}>
                        Everything you need to accept card payments and grow your business
                        anywhere on the planet.
                    </p>
                </div>
            </div>

            <div className={cStyle.cardSection}>
                {/* {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)} */}
                {feedback.map((card) => {
                    return <div key={card.id} className={cStyle.singleCard}>
                        <img src={quotes} alt="double_quotes" className={cStyle.quotesImg} />
                        <p className={dLayout.paragraph}>
                            {card.content}
                        </p>

                        <div className={cStyle.clientInfo}>
                            <img src={card.img} alt={card.name} className="" />
                            <div className="ms-3">
                                <h4 className="mb-0 text-white">
                                    {card.name}
                                </h4>
                                <p className="m-0">
                                    {card.title}
                                </p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>

        <div className="my-4">
            <div className={cStyle.clientLogoSection}>
                {clients.map((client) => (
                    <div key={client.id} className={`${cStyle.singleClientLogo} m-5`}>
                        <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
                    </div>
                ))}
            </div>
        </div>
        <section className={cStyle.tryOurServices}>
            <div className="flex-1 flex flex-col">
                <h2 className={dLayout.heading}>Let’s try our service now!</h2>
                <p className={`${dLayout.paragraph} `}>
                    Everything you need to accept card payments and grow your business
                    anywhere on the planet.
                </p>
            </div>

            <div className={`${cStyle.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button />
            </div>
        </section>
    </section>
);

export default Client;
