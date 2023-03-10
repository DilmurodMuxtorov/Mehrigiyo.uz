import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import leaf from "../../../../assets/images/photos/send_background.png";
import accardionData from "./asked/accardionData";
import Question from "./asked/Question";
import "./asked.scss";

export default function Asked() {
  const [show, setShow] = useState(accardionData);
  return (
    <div className="asked-background mb-3 mt-3 mr-24">
      <div className="GlobalWrapper">
        <div className="asked-wrapper">
          <div className="left-div">
            <h4 className="asked-heading">Ko‘p so‘raladigan savollar</h4>
            <p className="extra-p">
              Qo‘shimcha ma‘lumot uchun <br /> biz bilan bog‘laning
            </p>
            {/* <Link to='/help'> */}
            <NavLink to={"/quetions"} >
            <button className="more-btn">
              <span>Batafsil</span>
              <span className="icon-right">
                <BsArrowRight />
              </span>
            </button>
            </NavLink>
            {/* </Link> */}
          </div>
          <div className="accordion">
              <div className="section">
                  {show.map((item) => (
                    <Question width='805px' key={item.id} {...item} />
                  ))}
              </div>
          </div>
        </div>
      </div>
      <div className="leaf">
        <img src={leaf} alt="" />
      </div>
    </div>
  );
}
