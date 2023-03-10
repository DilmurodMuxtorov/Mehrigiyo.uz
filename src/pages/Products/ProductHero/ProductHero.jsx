import React from "react";
import { Link } from "react-router-dom";
import "./ProductHero.scss";
import Search from "../../../assets/images/icons/search.svg";
import Reset from "../../../assets/images/icons/reset-logo.svg";
import ViewMore from "../../../assets/images/icons/arrow-green.svg";
import Leaf from "../../../assets/images/icons/leaf.svg";
import dori from "../../../assets/images/icons/dori-1.svg";
import dori1 from "../../../assets/images/icons/dori-2.svg";
import dori2 from "../../../assets/images/icons/dori-3.svg";
import dori3 from "../../../assets/images/icons/dori-4.svg";
import dori4 from "../../../assets/images/icons/dori-5.svg";
import yurak from "../../../assets/images/icons/yurak.svg";
import way from "../../../assets/images/icons/way.svg";
import MainLeaf from "../../../assets/images/icons/product-leaf.svg";
import TellHome from "../../../assets/images/icons/tell.svg";
import SmsHome from "../../../assets/images/icons/sms.svg";
const ProductHero = () => {
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
            <div className="full-main-wrapper">
              <div className="p-hero__div">
                <div className="p-hero__select">
                  <div className="p-hero__select-box">
                    <h3 className="p-hero__select-title">Kategoriyalar</h3>
                  </div>
                  <form id="selectform" className="p-hero__select-form">
                    <div className="reset__btn-box">
                      <img src={Reset} alt="" />
                      <button type="reset" className="reset__btn">
                        Tozalash
                      </button>
                    </div>
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
              <div className="full-main-main">
                <div className="product_wrapper">
                  <div className="product-card">
                    <div>
                      <img src={dori} alt="" />
                    </div>
                    <button className="heart">
                      <img src={yurak} alt="" />
                    </button>
                    <div className="flex gap-x-6">
                      <div>
                        <p className="product__text">ROHAT Yog`i №2</p>
                        <p className="product__text__bottom">Mavjud</p>
                        <p className="Home_slider_text__bottom">
                          <del> 17,190, uzs</del>
                        </p>
                        <p className="product__text_num">16 000 uzs</p>
                      </div>
                      <div>
                        <button className="Home_slider_btn ">+</button>
                      </div>
                    </div>
                    <button className="Home_slider__btn flex mx-20 mt-6">
                      Tafsilotlar{" "}
                      <img className="mt-1.5 mx-2" src={way} alt="" />
                    </button>
                  </div>
                  <div className="Home_slider_card product-card">
                    <div>
                      <img src={dori1} alt="" />
                    </div>
                    <button className="heart">
                      <img src={yurak} alt="" />
                    </button>
                    <div className="flex gap-x-6">
                      <div>
                        <p className="Home_slider_text">Rohat Sirop</p>
                        <p className="Home_slider_text__bottom">
                          Erkaklar kuchi
                        </p>
                        <p className="Home_slider_text__bottom">
                          <del>200,190, uzs</del>
                        </p>
                        <p className="Home_slider_text_num">150 000 uzs</p>
                      </div>
                      <div>
                        <button className="Home_slider_btn ">+</button>
                      </div>
                    </div>
                    <button className="Home_slider__btn flex mx-20 mt-6">
                      Tafsilotlar{" "}
                      <img className="mt-1.5 mx-2" src={way} alt="" />
                    </button>
                  </div>
                  <div className="Home_slider_card product-card">
                    <div>
                      <img src={dori2} alt="" />
                    </div>
                    <button className="heart">
                      <img src={yurak} alt="" />
                    </button>
                    <div className="flex gap-x-6">
                      <div>
                        <p className="Home_slider_text">Organic Bananas</p>
                        <p className="Home_slider_text__bottom">7pcs, Price</p>
                        <p className="Home_slider_text__bottom">
                          <del>17,190, uzs</del>
                        </p>
                        <p className="Home_slider_text_num">16 000 uzs</p>
                      </div>
                      <div>
                        <button className="Home_slider_btn ">+</button>
                      </div>
                    </div>
                    <button className="Home_slider__btn flex mx-20 mt-6">
                      Tafsilotlar{" "}
                      <img className="mt-1.5 mx-2" src={way} alt="" />
                    </button>
                  </div>
                  <div className="Home_slider_card product-card">
                    <div>
                      <img src={dori3} alt="" />
                    </div>
                    <button className="heart">
                      <img src={yurak} alt="" />
                    </button>
                    <div className="flex gap-x-6">
                      <div>
                        <p className="Home_slider_text">ROHAT Yog`i №2</p>
                        <p className="Home_slider_text__bottom">Mavjud</p>
                        <p className="Home_slider_text__bottom">
                          <del> 17,190, uzs</del>
                        </p>
                        <p className="Home_slider_text_num">16 000 uzs</p>
                      </div>
                      <div>
                        <button className="Home_slider_btn ">+</button>
                      </div>
                    </div>
                    <button className="Home_slider__btn flex mx-20 mt-6">
                      Tafsilotlar{" "}
                      <img className="mt-1.5 mx-2" src={way} alt="" />
                    </button>
                  </div>
                  <div className="Home_slider_card">
                    <div>
                      <img src={dori4} alt="" />
                    </div>
                    <button className="heart">
                      <img src={yurak} alt="" />
                    </button>
                    <div className="flex gap-x-6">
                      <div>
                        <p className="Home_slider_text">Rohat Sirop</p>
                        <p className="Home_slider_text__bottom">Mavjud</p>
                        <p className="Home_slider_text__bottom">
                          <del> 17,190, uzs</del>
                        </p>
                        <p className="Home_slider_text_num">16 000 uzs</p>
                      </div>
                      <div>
                        <button className="Home_slider_btn ">+</button>
                      </div>
                    </div>
                    <button className="Home_slider__btn flex mx-20 mt-6">
                      Tafsilotlar{" "}
                      <img className="mt-1.5 mx-2" src={way} alt="" />
                    </button>
                  </div>
                  <div className="Home_slider_card">
                    <div>
                      <img src={dori4} alt="" />
                    </div>
                    <button className="heart">
                      <img src={yurak} alt="" />
                    </button>
                    <div className="flex gap-x-6">
                      <div>
                        <p className="Home_slider_text">ROHAT Yog`i №2</p>
                        <p className="Home_slider_text__bottom">Mavjud</p>
                        <p className="Home_slider_text__bottom">
                          <del> 17,190, uzs</del>
                        </p>
                        <p className="Home_slider_text_num">179 000 uzs</p>
                      </div>
                      <div>
                        <button className="Home_slider_btn ">+</button>
                      </div>
                    </div>
                    <button className="Home_slider__btn flex mx-20 mt-4">
                      Tafsilotlar{" "}
                      <img className="mt-1.5 mx-2" src={way} alt="" />
                    </button>
                  </div>
                </div>
                <div className="tell-main-boxes">
                  <img
                    src={TellHome}
                    width="100%"
                    height="100%"
                    alt="Downloading . . . "
                  />
                  <img
                    src={SmsHome}
                    width="150"
                    height="150"
                    alt="Downloading . . . "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="leaf-box">
          <img src={Leaf} alt="downloading . . . " />
        </div>
      </section>
      <div className="main-leaf">
        <img src={MainLeaf} alt="downloading . . . " />
      </div>
    </>
  );
};

export default ProductHero;
