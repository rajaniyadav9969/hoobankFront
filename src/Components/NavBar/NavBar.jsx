import { useEffect, useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import header from './NavBar.module.scss'
import { NavLink } from "react-bootstrap";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className={header.headerSection}>
      <nav className={header.navbarSection}>

        <div className="" >
          <img src={logo} alt="hoobank" />
        </div>

        <ul className={header.navLinkSection}>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              // className={`${active === nav.title ? header.activeText : header.navLinkText} `}
              className={`${active === nav.title ? header.activeText : header.navLinkText}`}
              onClick={() => setActive(nav.title)}
            >
              <NavLink href={`#${nav.id}`}>{nav.title}</NavLink>
            </li>
          ))}
        </ul>

        <div className={header.mobileLink}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=""
            onClick={() => setToggle(!toggle)}
          />

          <div
            // className={`${!toggle ? "d-none" : "d-flex"}`}
            className={`${!toggle ? header.sideBar + " " + 'd-none' : header.sideBar + " " + 'd-flex'}`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`${active === nav.title ? header.activeText : header.navLinkText} ${index === navLinks.length - 1 ? "mb-0" : "mb-3"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
