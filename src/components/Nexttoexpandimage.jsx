import { useRef } from "react";
import image1 from "../assets/newimage.png";
import image2 from "../assets/neimage2.png";
import image3 from "../assets/neimage3.png";
import image4 from "../assets/newimage5.png";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const cards = [
  {
    image: image1,
    title: "Aryaman Tekriwal to Cornell for Material Science!",
    desc: "Daly College proudly announces that Aryaman Tekriwal has secured a coveted place at the prestigious Cornell University, USA for Majors in Material Science and Engineering.",
    date: "25 JAN 2025",
  },
  {
    image: image2,
    title: "Podium Perfect! Aarvi Secures the Gold!",
    desc: "Aarvi Jain has struck gold and brought home a trophy at the Inter-School Junior Olympics 2025 Table Tennis Tournament, hosted by The Emerald Heights World School.",
    date: "25 Jan 2025",
  },
  {
    image: image3,
    title: "Head Girl Saara Lunawat to Oxford for Law!",
    desc: "Daly College proudly announces an extraordinary achievement: our Head Girl, Saara Lunawat, has secured a...",
    date: "24 JAN 2025",
  },
  {
    image: image4,
    title: "Bronze Glory: Daly College Triumphs at Table Tennis Tournament!",
    desc: "Team Daly College secured a hard-fought Bronze medal and a trophy at the Sri Indu Bhai Davey Memorial T...",
    date: "24 JAN 2025",
  },
];

export default function Nextexpand() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -260,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-6 sm:px-12 py-12 mb-2 border-gray-900">
      {/* Header + Arrows */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl sm:text-5xl font-inter font-bold">
          Latest News
        </h1>

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

      {/* Subtitle */}
      <p className="mt-4 text-gray-700 max-w-2xl">
        Discover the latest stories, achievements, and happenings from Daly College.
      </p>

      {/* Cards Slider */}
      <div
        ref={sliderRef}
        className="mt-10 flex gap-6 overflow-x-hidden scroll-smooth"
      >
        {cards.map((item, index) => (
          <div key={index} className="min-w-[800px] max-w-[800px]">
            {/* FIXED HEIGHT CARD */}
            <div className="border border-gray-200 rounded-xl overflow-hidden group bg-white h-[340px]">
              <div className="flex flex-col sm:flex-row h-full">
                {/* LEFT IMAGE */}
                <div className="sm:w-[42%] w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-all duration-500"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="sm:w-[58%] w-full p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-black leading-snug">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-gray-600 text-base sm:text-lg">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded-md">
                      {item.date}
                    </span>

                    <FiArrowUpRight size={27} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center items-center p-12">
        <button className="bg-[#CB0B19] hover:bg-gray-700 text-white px-6 py-3 rounded-md">
          View All News
        </button>
      </div>
    </section>
  );
}
