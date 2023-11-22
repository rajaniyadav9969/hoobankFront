import React from 'react'
import footer from './Footer.module.scss'
import { footerLinks, socialMedia } from '../../constants'
import { logo } from '../../assets'
import dLayout from '../Dynamic.module.scss'

const Footer = () => {
    return (
        <section className={`${footer.footerSection} ${dLayout.paddingSection}`}>
            <div className={footer.footerLinkSection}>
                <div className={footer.logoSection}>
                    <img
                        src={logo}
                        alt="hoobank"
                        className=""
                    />
                    <p className={`${dLayout.paragraph} mt-3`}>
                        A new way to make the payments easy, reliable and secure.
                    </p>
                </div>

                <div className={footer.footerLinkContent}>
                    {footerLinks.map((footerlink) => (
                        <div key={footerlink.title} className={footer.footerCategory}>
                            <h4 className="">
                                {footerlink.title}
                            </h4>
                            <ul className="mt-3">
                                {footerlink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`${index !== footerlink.links.length - 1 ? "mb-3" : "mb-0"}`}
                                    >
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className={footer.copyrightContent}>
                <p className="">
                    Copyright Ⓒ 2022 HooBank. All Rights Reserved.
                </p>

                <div className={footer.socialMediaLink}>
                    {socialMedia.map((social, index) => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`${index !== socialMedia.length - 1 ? "me-4" : "me-0"}`}
                            onClick={() => window.open(social.link)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer