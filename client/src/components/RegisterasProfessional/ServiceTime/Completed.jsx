import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { gethandymanToken } from "../../../utils/cookies/getHandymanToken";
import "./Completed.css";
import workdone from "./images/work_done.jpeg";
import { motion } from "framer-motion";

function Completed() {
    const navigate = useNavigate();
    const handyman_id = gethandymanToken();
    const location = useLocation();

    const user_id = new URLSearchParams(location.search).get("user_id");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `https://quick-assist.onrender.com/api/workdonecheck`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    handyman_id,
                    user_id,
                }),
            }
        );
        try {
            const data = await response.json();
            if (response.status === 200) {
                toast.success(data.msg);
                setTimeout(() => {
                    navigate(`/handyman/dashboard`);
                }, 3000);
            } else {
                console.error(`Failed with status code ${response.status}`);
                toast.error(data.msg);
            }
        } catch (error) {
            console.error("Invalid JSON string:", error.message);
        }
    };

    return (


        <div className="bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-50 min-h-screen flex items-center justify-center py-12 px-4">
            <motion.div
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-10 flex flex-col items-center space-y-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="w-60 h-60"
                >
                    <img
                        src={workdone}
                        alt="Work Completed"
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg transition"
                >
                    ✅ Work Done?
                </motion.button>
            </motion.div>
        </div>


    );
}

export default Completed;
