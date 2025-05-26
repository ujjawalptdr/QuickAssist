
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import service_1 from "./images/service_1.png";
import service_2 from "./images/service_2.png";
import service_3 from "./images/service_3.png";
import service_4 from "./images/service_4.png";
import service_5 from "./images/service_5.png";
import service_6 from "./images/service_6.png";
import services_bottom from "./images/services_bottom.png";

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

function OurServices() {
    const services = [
        { id: 1, name: "Carpenter", image: service_1 },
        { id: 2, name: "Maid", image: service_2 },
        { id: 3, name: "Plumber", image: service_3 },
        { id: 4, name: "Garbage Collector", image: service_4 },
        { id: 5, name: "All Rounder", image: service_5 },
        { id: 6, name: "Electrician", image: service_6 },
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-black font-montserrat mb-4">Our Services</h2>
                <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                    Whether it’s a leaky pipe, a broken chair, or a helping hand at home — QuickAssist brings you skilled professionals at your doorstep.
                </p>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="group bg-white shadow-lg rounded-xl p-6 cursor-pointer transition duration-300 hover:shadow-2xl flex flex-col items-center text-center"
                        >
                            <Link to={`/services/servicePage`} className="flex flex-col items-center">
                                {/* Image container adjusted */}
                                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 mb-4 transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="text-lg font-semibold text-gray-800 group-hover:text-yellow-500 transition">
                                    {service.name}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>


                <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 bg-yellow-100 p-8 rounded-xl shadow-md">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Get a hand for your every need</h3>
                        <p className="text-gray-700 text-base max-w-xl">
                            QuickAssist is your one-stop solution for all household services. Reliable, affordable, and always on time.
                        </p>
                    </div>
                    <div className="w-60 md:w-80">
                        <img src={services_bottom} alt="Helping Hand" className="w-full object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
