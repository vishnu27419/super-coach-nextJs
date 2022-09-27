import Image from "next/image";
import Link from "next/link";
import React from "react";
import headerStyle from "../styles/css/header.module.css";

function Header() {
  return (
    <div>
      <header className={headerStyle.header}>
        <nav
          className={`${headerStyle.navbar} navbar navbar-expand-lg navbar-light`}
        >
          <div className="container">
            <div className={headerStyle.webLogo}>
              <a
                className={`${headerStyle.logoCont} navbar-brand logo `}
                href="#"
              >
                <Image
                  src="/assets/images/logo.png"
                  className="img-fluid"
                  width={80}
                  height={80}
                  alt="no_image"
                />
                <div style={{ fontWeight: "bold" }}>
                  <span>Super</span>
                  <br /> Coach
                </div>
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
              <span>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className={`${headerStyle.navItem} active`}>
                  <Link href="/">
                    <a className={`${headerStyle.navLink} home`}>
                      {" "}
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className={`${headerStyle.navItem} `}>
                  <Link href="/forAthlete">
                    <a className={`${headerStyle.navLink} athlete`}>
                      For Athletes
                    </a>
                  </Link>
                </li>
                <li className={`${headerStyle.navItem} `}>
                  <Link href="/forCoach">
                    <a className={`${headerStyle.navLink}`}>For Coaches</a>
                  </Link>
                </li>

                <li className={`${headerStyle.navItem} `}>
                  <Link href="/pricing">
                    <a className={`${headerStyle.navLink}`}>Services</a>
                  </Link>
                </li>
                <li className={`${headerStyle.navItem} `}>
                  <a className={`${headerStyle.navLink}`}>Login</a>
                </li>
                <li className={`${headerStyle.navItem} `}>
                  <a className={`${headerStyle.navLink}`} href="#">
                    Free Trial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
