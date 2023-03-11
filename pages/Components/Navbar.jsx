import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public/images/smallLogo2.png";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/AboutMe" },
  { text: "Projects", href: "/Projects" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
        
      <nav className={`nav`}>
        <Link href={"/"}>
        <Image
            className="navlogo"
            src={Logo}
            alt="Picture of the author"
            width="350px"
            height="300px"
        />
        
            {/* <h1 className="logo">CodeWithAoife</h1> */}
        </Link>

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;