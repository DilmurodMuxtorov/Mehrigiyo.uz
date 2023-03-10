import React from "react";
import "./first.scss";
import brat from "../../../../assets/images/photos/BRAT.png";
import com from "../../../../assets/images/icons/_con.svg";
import com_1 from "../../../../assets/images/icons/con-2.svg";
import com_2 from "../../../../assets/images/icons/con-3.svg";
import tell from "../../../../assets/images/icons/tell.svg";
import sms from "../../../../assets/images/icons/sms.svg";
import car_1 from "../../../../assets/images/icons/car-1.svg";
import car_2 from "../../../../assets/images/icons/car-2.svg";
import car_3 from "../../../../assets/images/icons/car-3.svg";
import car_4 from "../../../../assets/images/icons/car-4.svg";

function first() {
  return (
    <section className="backgraund">
      <section className="container">
        <h1 className="Home__title">Bepul shifokor maslahat kerakmi?</h1>
        <section className="Home__text">
          <h5 className="Home_title">
            24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq <br />
            Faqat{" "}
          </h5>{" "}
          <p className="Home_title_text">mobil ilovada</p>
        </section>
        <section className="Home_img">
          <img className="Home__user" src={brat} alt="" />
          <img className="Home_person" src={com} alt="" />
          <img className="Home_ava" src={com_1} alt="" />
          <img className="Home_boy" src={com_2} alt="" />
          <img className="Home_tell" src={tell} alt="" />
          <img className="Home_sms" src={sms} alt="" />
        </section>
        <hr className="Home_hr" />
        <ul className="flex gap-x-16">
          <li className="flex gap-x-5">
            <section>
              <img src={car_1} alt="" />
            </section>
            <section>
              <p className="Home_text">Yetkazib berish bepul</p>
              <p className="Home___text">
                100 000 so'mdan ortiq <br />
                buyurtma berganingizda
              </p>
            </section>
          </li>
          <li className="flex gap-x-5">
            <section>
              <img src={car_2} alt="" />
            </section>
            <section>
              <p className="Home_text">Tez to'lov</p>
              <p className="Home___text">100% xavfsiz to'lov</p>
            </section>
          </li>
          <li className="flex gap-x-5">
            <section>
              <img src={car_3} alt="" />
            </section>
            <section>
              <p className="Home_text">Doimiy chegirmalarl</p>
              <p className="Home___text">Ular allaqachon ishlamoqda</p>
            </section>
          </li>
          <li className="flex gap-x-5">
            <section>
              <img src={car_4} alt="" />
            </section>
            <section>
              <p className="Home_text">Onlayn yordam</p>
              <p className="Home___text">Ish vaqti: 08:00 - 18:00</p>
            </section>
          </li>
        </ul>
        <hr className="Home___hr" />
        <h4 className="Home_bottom_text">
          Mahsulotlarimiz <br /> ro'yxati
        </h4>
      </section>
    </section>
  );
}

export default first;
