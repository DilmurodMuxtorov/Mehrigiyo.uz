import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import UZB from "../../assets/images/icons/UZB.svg";
import USER from "../../assets/images/icons/USER.svg";
import LOKETION from "../../assets/images/icons/LOKETION.svg";
import line from "../../assets/images/icons/line.svg";
import LOGO from "../../assets/images/icons/LOGO.svg";
import heart from "../../assets/images/icons/heart.svg";
import korzinka from "../../assets/images/icons/korzinka.svg";

function Homeheader() {
  return (
    <header>
      <section className="backragund">
        <section className="header ">
          <div className="container">
            <div className="header-wrapper">
              <nav className="header_nav">
                <ul className="header__ul flex">
                  <li>
                    <p className="header__title">Mahsulotlar katalogi</p>
                  </li>
                  <li>
                    <p className="header__title">Foto-lavhalar</p>
                  </li>
                  <li>
                    <p className="header__title">Yetkazib berish va to'lash</p>
                  </li>
                  <li>
                    <p className="header__title">Aksiya</p>
                  </li>
                  <li>
                    <p className="header__title">Yangi</p>
                  </li>
                </ul>
              </nav>
              <ul className="gap-x-3.5 flex">
                <img src={UZB} alt="downloading . . ." />
                <li>
                  <select className="header__select">
                    <option className="header__option">UZB</option>
                    <option>ENG</option>
                    <option>RUS</option>
                  </select>
                </li>
                <img src={line} alt="" />
                <li className="flex gap-1">
                  <p className="header__title">Toshkent shahar</p>
                  <img src={LOKETION} alt="" />
                </li>
                <img src={line} alt="" />
                <li className="flex gap-1">
                  <NavLink to={"/Login"}>
                    <p className="header__title">Kirish</p>
                  </NavLink>
                  <img src={USER} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <section className="header__home">
        <div className="container">
          <div className="header__home-wrapper">
            <div className="header_home_logo">
              <img src={LOGO} alt="" />
            </div>
            <ul className="header_home">
              <li className="header_home_title">
                <NavLink to={"/"}>Bosh sahifa</NavLink>
              </li>
              <li className="header_home__title">
                <NavLink to={"/products"}>Mahsulotlar</NavLink>
              </li>
            </ul>
            <div className="header_home_btn">
              <NavLink to={"/shop"}>
                <button>
                  <img src={heart} alt="" />
                </button>
              </NavLink>
              <NavLink to={"/shoping"}>
                <button>
                  <img src={korzinka} alt="" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Homeheader;
