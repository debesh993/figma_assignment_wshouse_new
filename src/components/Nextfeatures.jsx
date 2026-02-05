import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const cards = [
    { month: "Feb", day: "10", title: "CBSE: Annual Examination Syllabus (VII to XI)" },
    { month: "Feb", day: "07", title: "CI: Annual Examination Time Table 2024-25" },
    { month: "Feb", day: "07", title: "Annual Examination Time Table 2024-25 (VII to IX)" },
    { month: "Feb", day: "07", title: "Annual Examination Time Table 2024-25 (X and XII)" },
    { month: "Feb", day: "06", title: "Annual Examination Time Table 2024-25 (X and XII)" },
    { month: "Feb", day: "02", title: "Annual Examination Time Table 2024-25 (X and XII)" },
    { month: "Jan", day: "30", title: "Annual Examination Time Table 2024-25 (X and XII)" },
    { month: "Feb", day: "06", title: "Annual Examination Time Table 2024-25 (X and XII)" },
];

export default function NextFeatures() {
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
                    DC Announcements
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
                Stay ahead with real-time updates and notices from Daly College administration.
            </p>

            {/* Tabs */}
            <div className="mt-6 flex gap-4">
                <button className="px-6 py-2 rounded-full bg-black text-white">
                    Important Notices
                </button>
                <button className="px-6 py-2 rounded-full border">
                    Junior School Byte
                </button>
                <button className="px-6 py-2 rounded-full border">
                    Academic Calendar
                </button>
            </div>

            {/* Cards Slider */}
            <div
                ref={sliderRef}
                className="mt-10 flex gap-6 overflow-x-hidden scroll-smooth"
            >
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[170px]"
                    >
                        {/* Date Card */}
                        <div className="group border-1 border-black hover:bg-red-600 rounded-xl h-42 flex flex-col items-center justify-center">
                            <span className="text-lg text-black group-hover:text-white ">{item.month}</span>
                            <span className="text-5xl font-bold text-red-600 group-hover:text-white">{item.day}</span>
                        </div>

                        {/* Text */}
                        <p className="mt-4 text-sm text-gray-800">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center items-center p-12">
                <button className="bg-[#CB0B19] hover:bg-gray-700 text-white px-6 py-3 rounded-md">
                    View All
                </button>
            </div>

        </section>
    );
}