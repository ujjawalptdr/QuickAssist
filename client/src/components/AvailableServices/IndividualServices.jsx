import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "./images/arrowright.png";

function IndividualServices(props) {
    return (
        <Link to={props.serviceURL}>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-full">
                {/* Top: Image and Duration */}
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200">
                        <img
                            src={props.serviceImage}
                            alt={props.serviceName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-xs font-medium bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                        {props.serviceTime} mins
                    </span>
                </div>

                {/* Middle: Service Name & Info */}
                <div className="flex-grow">
                    <h3 className="text-md font-semibold text-gray-800">{props.serviceName}</h3>
                    <p className="text-sm text-gray-500">{props.serviceInfo}</p>
                </div>

                {/* Bottom: Arrow */}
                <div className="mt-4 text-right">
                    <img
                        src={rightArrow}
                        alt="arrow"
                        className="w-5 h-5 inline-block opacity-70 transition-transform duration-200 group-hover:translate-x-1"
                    />
                </div>
            </div>
        </Link>

    );
}

export default IndividualServices;
