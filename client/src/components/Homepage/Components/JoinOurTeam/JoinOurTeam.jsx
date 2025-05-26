import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import joinourteam from "./images/joinourteam.png";
import serviceBoy from "./images/serviceBoy.jpg"
import { BsArrowRightCircleFill } from "react-icons/bs";

function JoinOurTeam() {
  return (
    <div className="bg-white py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 flex flex-col gap-2"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold ">
            Want to join our <br /> helping team?
          </h2>
          <Link to="/handyman/register"
            className="bg-yellow-400 hover:bg-black hover:text-white pl-5 pr-2 py-3 text-lg rounded-full shadow-md font-semibold flex items-center gap-2 transition duration-300 w-fit"
          >
            Register as a Professional
            <span className="text-4xl transition text-white  duration-300">
              <BsArrowRightCircleFill />
            </span>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={serviceBoy}
            alt="Join our team"
            className="w-64 sm:max-w-full md:w-96 object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default JoinOurTeam;
