import React from "react";
// import "./Banner.css";
import registerProfessionalImg from "./images/registerProfessional.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center mt-20">
        <img
          src={registerProfessionalImg}
          alt="Register as Professional"
          className=" rounded-lg shadow-md mb-6"
        />
        <Link to="/handyman/signup">
          <button className="bg-yellow-500 hover:bg-black hover:text-white text-lg px-6 py-3 rounded-full shadow-lg transition duration-300">
            Register Here
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
