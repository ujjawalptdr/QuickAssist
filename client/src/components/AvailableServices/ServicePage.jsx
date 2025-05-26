import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import availableServices from "../../utils/AvailableServices";
import { getUserToken } from "../../utils/cookies/getUserToken";
import IndividualServices from "./IndividualServices";
import Navbar from "../Global Components/Navbar/Navbar.jsx";
// import "./ServicePage.css";

function ServicePage() {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    const user_id = getUserToken();
    useEffect(() => {

        if (user_id === undefined) {
            toast.error("You need to login first");
            navigate("/user/login");
        }
    }, []);

    function handleSearchInputChange(event) {
        setSearchInput(event.target.value);
    }

    function servicesIndividual(serviceDetails) {
        return (
            <IndividualServices
                key={serviceDetails.id}
                serviceName={serviceDetails.serviceName}
                serviceInfo={serviceDetails.serviceInfo}
                serviceImage={serviceDetails.serviceImage}
                serviceTime={serviceDetails.serviceTime}
                serviceURL={`/services/${serviceDetails.serviceName.toLowerCase()}`}
            />
        );
    }

    const filteredServices = availableServices.filter((service) =>
        service.serviceName.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className="bg-gradient-to-br from-yellow-200 via-transparent to-pink-200 min-h-screen">
            <Navbar />
            <div className="py-10">
                <div className="mt-20 max-w-6xl mx-auto px-4">
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="What do you need?"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Services</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredServices.map(servicesIndividual)}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ServicePage;
