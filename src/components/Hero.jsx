import heroVideo from '../assets/vedio.mp4';
import things_to_do from '../assets/things_to_do.png';
import personShield from '../assets/person_shield.png';
import crowdsource from '../assets/crowdsource.png';
import folder_zip from '../assets/folder_zip.png';
import { FaEnvelope, FaFileAlt } from "react-icons/fa";

const HeroSection = () => {
    return (
        <>
            {/* Hero Section with Video */}
            <section className="relative w-full h-screen overflow-hidden">

                {/* Background video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Dark overlay for readability */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none"></div>

                {/* Hero content */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 sm:px-6 lg:px-8">
                    <h1 className="text-[70px] font-bold font-inter text-white mb-4 leading-tight">
                        Live. Learn. Lead.
                    </h1>

                    <p className="text-[22px] font-medium font-inter text-white mb-8 max-w-2xl">
                        Shaping Leaders Since 1882
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-2 bg-red-700 text-white px-6 py-3 rounded-md hover:bg-gray-200 hover:text-gray-950 transition duration-300 w-full sm:w-auto">
                            <FaFileAlt /> Explore Admissions
                        </button>

                        <button className="flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-950 transition duration-300 w-full sm:w-auto">
                            <FaEnvelope /> Enquire Now
                        </button>
                    </div>
                </div>

                {/* Content under video */}
                <div className="w-full flex justify-center absolute bottom-0 z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)]">

                    {/* Daly College of Business Management */}
                    <div className="group flex flex-wrap md:flex-nowrap justify-center items-center gap-2 w-[250px] px-4 py-3 cursor-pointer border-r border-gray-900 transition-all duration-1000 hover:bg-gradient-to-b hover:from-red-400 hover:to-red-700">
                        <img src={things_to_do} alt="Things To Do" className="w-10 h-10 object-contain transition-transform duration-1000 group-hover:scale-105" />
                        <span className="text-[14px] font-medium font-inter text-white transition-colors duration-1000 group-hover:text-white">Daly College of Business Management</span>
                    </div>

                    {/* Parent's Login */}
                    <div className="group flex flex-wrap md:flex-nowrap justify-center items-center gap-2 w-[200px] px-4 py-3 cursor-pointer border-r border-gray-900 transition-all duration-1000 hover:bg-gradient-to-b hover:from-red-400 hover:to-red-700">
                        <img src={personShield} alt="Shield" className="w-10 h-10 object-contain transition-transform duration-1000 group-hover:scale-105" />
                        <span className="text-[14px] font-medium font-inter text-white transition-colors duration-1000 group-hover:text-white">Parent's Login</span>
                    </div>

                    {/* Old Dalian Association */}
                    <div className="group flex flex-wrap md:flex-nowrap justify-center items-center gap-2 w-[200px] px-4 py-3 cursor-pointer border-r border-gray-900 transition-all duration-1000 hover:bg-gradient-to-b hover:from-red-400 hover:to-red-700">
                        <img src={crowdsource} alt="Crowdsource" className="w-10 h-10 object-contain transition-transform duration-1000 group-hover:scale-105" />
                        <span className="text-[14px] font-medium font-inter text-white transition-colors duration-1000 group-hover:text-white">Old Dalian Association</span>
                    </div>

                    {/* The Daly Prophet */}
                    <div className="group flex flex-wrap md:flex-nowrap justify-center items-center gap-2 w-[200px] px-4 py-3 cursor-pointer transition-all duration-1000 hover:bg-gradient-to-b hover:from-red-400 hover:to-red-700">
                        <img src={folder_zip} alt="Folder Zip" className="w-10 h-10 object-contain transition-transform duration-1000 group-hover:scale-105" />
                        <span className="text-[14px] font-medium font-inter text-white transition-colors duration-1000 group-hover:text-white">The Daly Prophet</span>
                    </div>

                </div>

            </section>
        </>
    );
};

export default HeroSection;