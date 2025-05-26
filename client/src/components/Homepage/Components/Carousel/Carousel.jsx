import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import carousel_1 from "./images/carousel_1.png";
import carousel_2 from "./images/carousel_2.png";
import carousel_3 from "./images/carousel_3.png";
import carousel_4 from "./images/carousel_4.png";

const slides = [
    {
        image: carousel_1,
        heading: "Expert Help At Your Fingertips",
        subheading: "QuickAssist - Your reliable service partner",
    },
    {
        image: carousel_2,
        heading: "Skilled Professionals Ready To Assist",
        subheading: "Get your tasks done hassle-free and fast",
    },
    {
        image: carousel_3,
        heading: "From Repairs to Installations",
        subheading: "We have you covered 24/7 with quality service",
    },
    {
        image: carousel_4,
        heading: "Your Trusted Home Handyman",
        subheading: "Reliable, affordable & convenient solutions",
    },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full h-screen overflow-hidden select-none">
            {slides.map((slide, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={`slide ${idx + 1}`}
                        className="w-full h-full object-cover brightness-90"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-center items-center text-center px-4 md:px-0">
                        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                            {slide.heading}
                        </h1>
                        <p className="text-orange-400 text-lg md:text-2xl font-semibold drop-shadow-md max-w-xl">
                            {slide.subheading}
                        </p>
                    </div>
                </div>
            ))}

            {/* Left arrow */}
            <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full focus:outline-none transition"
            >
                <FiChevronLeft size={28} />
            </button>

            {/* Right arrow */}
            <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full focus:outline-none transition"
            >
                <FiChevronRight size={28} />
            </button>
        </div>
    );
}
