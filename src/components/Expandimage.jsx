import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import swim from '../assets/swim.png'
import hostel from '../assets/hostel.png'
import first from "../assets/first.png"
import fifth from "../assets/fifth.png"
import four from "../assets/four.png"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const images = [
    {
        src: first,
        title: "Hospital",
        description: "Modern hospital facilities with well-equipped labs and wards.",
    },
    {
        src: hostel,
        title: "Mess for Students",
        description:
            "The menu is planned with care to ensure nutritious and balanced meals. Non-vegetarian food is prepared separately.",
    },
    {
        src: swim,
        title: "Sports Facilities",
        description: "DC has world class facilities for sports namely, two cricket grounds which have hosted Ranji Trophy matches, Floodlit Deco Turf Tennis Courts",
    },
    {
        src: four,
        title: "Craft Technology Design Center",
        description: "Hands-on workshops and labs for creative technology and craft.",
    },
    {
        src: fifth,
        title: "Craft Technology Design Center",
        description: "Hands-on workshops and labs for creative technology and craft.",
    },
];

const AccordionGallery = () => {
    const blocksRef = useRef([]);
    const [currentIndex, setCurrentIndex] = React.useState(1);

const slideLeft = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    expandImage(newIndex);
};

const slideRight = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    expandImage(newIndex);
};
useEffect(() => {
    expandImage(currentIndex);
}, []);


    // Expand middle image on load
    useEffect(() => {
        expandImage(1);
    }, []);

    const expandImage = (index) => {
        blocksRef.current.forEach((block, i) => {
            const img = block.querySelector("img");
            const title = block.querySelector(".title");
            const desc = block.querySelector(".description");

            if (i === index) {
                gsap.to(block, { flex: 4, duration: 0.8, ease: "power3.out" });
                gsap.to(img, { filter: "blur(0px)", duration: 0.8 });
                gsap.to(title, { opacity: 0, duration: 0.5 }); // hide vertical title
                gsap.to(desc, { opacity: 1, duration: 0.8, delay: 0.2 });
            } else {
                gsap.to(block, { flex: 1, duration: 0.8, ease: "power3.out" });
                gsap.to(img, { filter: "blur(4px)", duration: 0.8 });
                gsap.to(title, {
                    rotate: -90,
                    top: "50%",
                    left: "8px",
                    x: 0,
                    y: "-50%",
                    opacity: 1,
                    duration: 0.8,
                });
                gsap.to(desc, { opacity: 0, duration: 0.5 });
            }
        });
    };

    return (
        <>
            <div className="flex justify-between items-center px-4 md:px-16 py-4">
                {/* Left side: Title + Subtitle */}
                <div>
                    <h2 className="text-4xl font-bold">Our Campus & Infrastructure</h2>
                    <p className="text-md text-gray-600 mt-1">
                        Explore our state-of-the-art academic, residential, and sports facilities.
                    </p>
                </div>

                {/* Right side: Circular arrow buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={slideLeft}
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                    >
                        <FiArrowLeft className="text-xl" />
                    </button>

                    <button
                        onClick={slideRight}
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                    >
                        <FiArrowRight className="text-xl" />
                    </button>
                </div>

            </div>

            <div className="flex flex-row w-full md:px-16 gap-2 overflow-hidden h-auto sm:h-[400px]">
                {images.map((item, i) => (
                    <div
                        key={i}
                        ref={(el) => (blocksRef.current[i] = el)}
                        className="relative flex-1 rounded-md cursor-pointer overflow-hidden h-100 sm:h-auto"
                        onClick={() => expandImage(i)}
                    >
                        <img
                            src={item.src}
                            className="w-full h-full object-cover filter blur-md"
                        />

                        {/* Vertical title vertically centered on blurred image */}
                        <span className="title absolute top-1/2 left-2 -translate-y-1/2 text-white font-medium text-lg">
                            {item.title}
                        </span>

                        {/* Bottom description on expanded image */}
                        <div className="description absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md bg-black/10 bg-opacity-50 text-white opacity-0">
                            <h3 className="font-semibold text-lg">{item.title}</h3>

                            {/* description + arrow */}
                            <div className="flex items-center gap-2 mt-1">
                                <p className="text-sm">{item.description}</p>

                                <span className="inline-block rotate-[-9deg] shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 19l14-14M9 5h10v10"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div></>

    );
};

export default AccordionGallery;