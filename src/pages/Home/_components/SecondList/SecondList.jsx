import React, { Component } from "react";
import Slider from "react-slick";
import "./SecondList.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dori from "../../../../assets/images/icons/dori-1.svg";
import dori1 from "../../../../assets/images/icons/dori-2.svg";
import dori2 from "../../../../assets/images/icons/dori-3.svg";
import dori3 from "../../../../assets/images/icons/dori-4.svg";
import dori4 from "../../../../assets/images/icons/dori-5.svg";
import yurak from "../../../../assets/images/icons/yurak.svg";
import way from "../../../../assets/images/icons/way.svg";
import way2 from "../../../../assets/images/icons/way2.svg";
import background from "../../../../assets/images/photos/backgraund-3.png";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="backgraund_slider">
        <div className="Home_slider">
          <Slider {...settings}>
            <div className="Home_slider_card">
              <div>
                <img src={dori} alt="" />
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
                Tafsilotlar <img className="mt-1.5 mx-2" src={way} alt="" />
              </button>
            </div>
            <div className="Home_slider_card">
              <div>
                <img src={dori1} alt="" />
              </div>
              <button className="heart">
                <img src={yurak} alt="" />
              </button>
              <div className="flex gap-x-6">
                <div>
                  <p className="Home_slider_text">Rohat Sirop</p>
                  <p className="Home_slider_text__bottom">Erkaklar kuchi</p>
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
                Tafsilotlar <img className="mt-1.5 mx-2" src={way} alt="" />
              </button>
            </div>
            <div className="Home_slider_card">
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
                Tafsilotlar <img className="mt-1.5 mx-2" src={way} alt="" />
              </button>
            </div>
            <div className="Home_slider_card">
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
                Tafsilotlar <img className="mt-1.5 mx-2" src={way} alt="" />
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
                Tafsilotlar <img className="mt-1.5 mx-2" src={way} alt="" />
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
                Tafsilotlar <img className="mt-1.5 mx-2" src={way} alt="" />
              </button>
            </div>
          </Slider>

          <div>
            <button className="Home_slider___btn flex mx-20 mt-16 gap-x-6">
              Barcha mahsulotlarni ko’rish{" "}
              <img className=" mt-2" src={way2} alt="" />
            </button>
            <div className="Home_photo_back mr-8">
              <div className="flex ml-20">
                <p className="Home_photo_text mt-36 ml-3">
                  Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz
                </p>
                <img className="ml-5 mt-10" src={background} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
