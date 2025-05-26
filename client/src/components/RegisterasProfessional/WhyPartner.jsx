import React from "react";
import { FaClock, FaMoneyBillWave, FaHeadset } from "react-icons/fa";
import whyRegister from "./images/whyRegister.png";

function WhyPartner() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
        Why partner with us
      </h2>

      <div className="flex justify-center mb-10">
        <img
          src={whyRegister}
          alt="Why Register"
          className="w-full max-w-3xl rounded-xl shadow-md object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:bg-yellow-300">
          <FaClock className="text-yellow-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
            Set your own hours
          </h3>
          <p className="text-center text-gray-600 text-sm">
            You decide when and how often you want to give service.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:bg-yellow-300">
          <FaMoneyBillWave className="text-green-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
            Get paid fast
          </h3>
          <p className="text-center text-gray-600 text-sm">
            Weekly payments directly into your bank account.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:bg-yellow-300">
          <FaHeadset className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
            Get support at every turn
          </h3>
          <p className="text-center text-gray-600 text-sm">
            If there’s anything that you need, you can reach us anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyPartner;
