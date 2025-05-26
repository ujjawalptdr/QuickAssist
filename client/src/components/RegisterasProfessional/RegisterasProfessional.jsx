import React from "react";
import WhyPartner from "./WhyPartner";
import Banner from "./Banner";
import Navbar from "../Global Components/Navbar/Navbar.jsx"

function RegisterasProfessional() {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to bg-yellow-200">
      <Navbar />
      <Banner />
      <WhyPartner />
    </div>
  );
}

export default RegisterasProfessional;
