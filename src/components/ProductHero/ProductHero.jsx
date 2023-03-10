import React from "react";
import { Link } from "react-router-dom";
import "./ProductHero.scss";
import Search from "../../assets/images/icons/search.svg";
import Reset from "../../assets/images/icons/reset-logo.svg";
import ViewMore from "../../assets/images/icons/arrow-green.svg";
import Leaf from "../../assets/images/icons/leaf.svg";
const form = document.querySelector("#selectform");

const ProductHero = () => {
  const resetFunc = () => {
    form.reset();
  };

  return (
    <>
      <section className="products__hero">
        <div className="container">
          <div className="p-hero__wrapper">
            <div className="p-hero__box">
              <div className="p-hero__left">
                <Link to="/" className="p-hero__link">
                  Bosh sahifa /{" "}
                  <span className="p-hero__span">Mahsulotlar</span>
                </Link>
                <h3 className="p-hero__title">Mahsulotlar</h3>
              </div>
              <div className="p-hero__right">
                <form className="p-hero__form">
                  <img
                    className="p-hero__logo"
                    src={Search}
                    alt="downloading . . . "
                  />
                  <input
                    className="p-hero__input"
                    type="text"
                    placeholder="Qidirish"
                  />
                </form>
              </div>
            </div>
            <div className="p-hero__div">
              <div className="p-hero__select">
                <div className="p-hero__select-box">
                  <h3 className="p-hero__select-title">Kategoriyalar</h3>
                  <div className="reset__btn-box">
                    <img src={Reset} alt="" />
                    <button
                      onClick={resetFunc}
                      type="reset"
                      className="reset__btn"
                    >
                      Tozalash
                    </button>
                  </div>
                </div>
                <form id="selectform" className="p-hero__select-form">
                  <label className="p-hero__select-label" htmlFor="checkbox">
                    <input id="checkbox" disabled checked type="checkbox" />
                    Hammasi
                  </label>
                  <label className="p-hero__select-label" htmlFor="checkbox1">
                    <input id="checkbox1" type="checkbox" />
                    Choy
                  </label>
                  <label className="p-hero__select-label" htmlFor="checkbox2">
                    <input id="checkbox2" type="checkbox" />
                    Asal
                  </label>
                  <label className="p-hero__select-label" htmlFor="checkbox3">
                    <input id="checkbox3" type="checkbox" />
                    Yog’
                  </label>
                  <label className="p-hero__select-label" htmlFor="checkbox4">
                    <input id="checkbox4" type="checkbox" />
                    Non
                  </label>
                  <label className="p-hero__select-label" htmlFor="checkbox5">
                    <input id="checkbox5" type="checkbox" />
                    Ziravorlar
                  </label>
                  <label className="p-hero__select-label" htmlFor="checkbox6">
                    <input id="checkbox6" type="checkbox" />
                    Sharbatlar
                  </label>
                  <label className="p-hero__select-label" htmlFor="checkbox7">
                    <input id="checkbox7" type="checkbox" />
                    Lolipoplar
                  </label>
                  <label className="p-hero__select-label" htmlFor="checkbox8">
                    <input id="checkbox8" type="checkbox" />
                    Tabletkalar
                  </label>
                </form>
                <div className="view-more-box">
                  <img src={ViewMore} alt="downloading . . ." />
                  Ko’proq
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="leaf-box">
          <img src={Leaf} alt="downloading . . . " />
        </div>
      </section>
    </>
  );
};

export default ProductHero;
