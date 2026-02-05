import { useRef } from "react";
import image1 from "../assets/lastimage1.png";
import image2 from "../assets/lastImage2.png";
import image3 from "../assets/lastimage3.png";
import image4 from "../assets/lastimage4.png";
import image5 from "../assets/lastimage5.png";
import image6 from "../assets/lastimage6.png";
import image7 from "../assets/lastimage7.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const images = [image1, image2, image3, image4, image5, image6, image7];

export default function MomentsAtDaly() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };

  return (
    <section className="w-full py-16 bg-white relative overflow-hidden">
      {/* HEADER */}
      <div className="text-center px-6 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Moments @ Daly
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Explore events, achievements, and everyday moments that define us.
        </p>

        {/* TABS */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-5 py-2 rounded-full bg-black text-white text-sm">
            Photo Gallery
          </button>
          <button className="px-5 py-2 rounded-full border text-sm">
            Video Gallery
          </button>
          <button className="px-5 py-2 rounded-full border text-sm">
            Print Media
          </button>
        </div>
      </div>

      {/* 🔵 TOP CURVE — FIXED & VISIBLE */}
<div className="hidden sm:block absolute top-[230px] left-1/2 -translate-x-1/2 w-full h-[100px] bg-white rounded-[80%] z-30" />

      {/* IMAGE SLIDER */}
      <div className="relative mt-16 w-full z-10">
        {/* LEFT ARROW */}
        <button
          onClick={slideLeft}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white w-12 h-12 rounded-full shadow flex items-center justify-center"
        >
          <FiArrowLeft size={22} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={slideRight}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white w-12 h-12 rounded-full shadow flex items-center justify-center"
        >
          <FiArrowRight size={22} />
        </button>

        {/* SLIDER TRACK */}
        <div
          ref={sliderRef}
          className="flex gap-10 overflow-x-hidden scroll-smooth px-24"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[360px] h-[260px] rounded-xl overflow-hidden"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* 🌫️ BOTTOM GRADIENT BLUR */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white via-white/30 to-transparent z-20" />
      </div>
    </section>
  );
}
