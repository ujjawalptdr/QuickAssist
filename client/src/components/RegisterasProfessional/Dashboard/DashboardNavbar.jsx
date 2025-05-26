import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { gethandymanToken } from "../../../utils/cookies/getHandymanToken";
import { removeHandymanToken } from "./../../../utils/cookies/removeHandymanToken";
import { BsArrowRightCircleFill } from "react-icons/bs";

function DashboardNavbar() {
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handyman_id = gethandymanToken();

    useEffect(() => {
        if (handyman_id === undefined) {
            toast.error("You need to login first");
            navigate("/handyman/login");
        }
    }, []);

    const handleToggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    // function to handle logout button click
    const handleLogout = () => {
        removeHandymanToken();
        toast.success("Logout Successfully")
        navigate("/");
    };

    return (
        <>
            <div className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10 py-4">
                    <nav className="flex items-center justify-between px-10">
                        {/* Logo */}
                        <div className="text-3xl  font-montserrat font-semibold text-black">
                            <Link to="/">QuickAssist</Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                to={`/handyman/profile?handyman_id=${handyman_id}`}
                                className="text-gray-700 hover:text-yellow-500 font-medium transition"
                            >
                                Profile
                            </Link>
                            <Link
                                to="/handyman/dashboard"
                                className="text-gray-700 hover:text-yellow-500 font-medium transition"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="ml-4 bg-yellow-400 font-semibold px-4 py-2 rounded-md hover:bg-black hover:text-white transition flex items-center gap-2"
                            >
                                Logout<span>< BsArrowRightCircleFill size={20} /></span>
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div
                            className="md:hidden text-2xl text-gray-700 cursor-pointer"
                            onClick={handleToggleMenu}
                        >
                            <FaBars />
                        </div>
                    </nav>
                </div>

                {/* Mobile Menu */}
                {showMobileMenu && (
                    <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4">
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <Link
                                    to={`/handyman/profile?handyman_id=${handyman_id}`}
                                    className="block text-gray-700 hover:text-yellow-500 font-medium"
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/handyman/dashboard"
                                    className="block text-gray-700 hover:text-yellow-500 font-medium"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left bg-yellow-400 text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition"
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default DashboardNavbar;
