
import { motion } from "framer-motion";
import oneclick_1 from "./images/oneclick_1.png";
import oneclick_2 from "./images/oneclick_2.png";
import oneclick_3 from "./images/oneclick_3.png";
import oneclick_4 from "./images/oneclick_4.png";

const cards = [
  { bg: "#ffb01b", btn: "#FFE455", img: oneclick_1, delay: 0 },
  { bg: "#002276", btn: "#9FC1FF", img: oneclick_2, delay: 0.1 },
  { bg: "#fc3e3e", btn: "#FF9E9E", img: oneclick_3, delay: 0.2 },
  { bg: "#bc8948", btn: "#F7D9A8", img: oneclick_4, delay: 0.3 },
];

function OneClick() {
  return (
    <div className="bg-gradient-to-br from-yellow-200 to-orange-400 py-16 px-4 sm:px-8">
      <div className=" mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          One Click Can Solve Your Problem
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: card.delay }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
              style={{ backgroundColor: card.bg }}
            >
              <a href="#">
                <div
                  className="text-center py-3 font-semibold text-lg"
                  style={{ backgroundColor: card.btn }}
                >
                  Book Now
                </div>
              </a>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex justify-center items-center p-6"
              >
                <img
                  src={card.img}
                  alt="Service"
                  className="w-32 h-32 object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OneClick;
