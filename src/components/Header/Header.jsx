import React, { useState } from "react";
import "./Header.css";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="header">
      <h1 className="logo">FitHive</h1>
      {menuOpen === false && mobile === true ? (
        <div onClick={() => setmenuOpen(true)}>
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              span={true}
              activeClass="active"
              smooth={true}
              onClick={() => setmenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setmenuOpen(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setmenuOpen(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setmenuOpen(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setmenuOpen(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
