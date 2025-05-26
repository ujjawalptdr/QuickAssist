import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function PaymentSuccess() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="flex flex-col items-center justify-center space-y-4 p-6 bg-white shadow-lg rounded-2xl max-w-sm mx-auto mt-10"
        >
            <FaCheckCircle className="text-green-500 text-6xl" />
            <h2 className="text-xl font-semibold text-gray-800">Payment Successful</h2>
            <p className="text-gray-500 text-sm text-center">
                Thank you! Your payment has been processed successfully.
            </p>
            <Link to="/" className="px-3 py-2 text-sm border-2 border-green-400 rounded-full hover:bg-green-200 transition duration-300 ">Back To Homepage {">"}</Link>
        </motion.div>

    );
}

export default PaymentSuccess;
