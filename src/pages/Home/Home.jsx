import React from "react";
import HomeHeader from "../../components/header/header";
import FirstMain from "./_components/first/first";
import PauseOnHover from "../Home/_components/SecondList/SecondList";
import Asked from "../Home/_components/questions/asked";
import Send from "../Home/_components/questions/send/send";
import Globlasponsors from "../Home/_components/GlobalSponsors/GloblaSponsors";
import Footer from "../Home/_components/footer/footer";

function home() {
  return (
    <>
      <HomeHeader />
      <FirstMain />
      <PauseOnHover />
      <Asked />
      <Send />
      <Globlasponsors />
      <Footer />
    </>
  );
}

export default home;
