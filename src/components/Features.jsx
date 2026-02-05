import image1 from '../assets/feature1.png'
import image2 from '../assets/feature2.png'
import image3 from '../assets/feature3.png'
import { FiArrowRight } from "react-icons/fi";
import bgimg from '../assets/bgimage.jpg'


const Features = () => {
    return (
        <div className="w-full
    bg-no-repeat
    bg-center
    bg-cover "
    style={{
    backgroundImage: `url(${bgimg})`,
  }}>
            <div
                className="relative w-full h-[100px] md:h-[150px] lg:h-[200px] flex flex-col justify-center items-center text-center bg-transparent"

            >
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-semibold text-white">
                    Read. Discover. Connect.
                </h1>
                <p className="mt-4 text-base sm:text-md md:text-lg lg:text-xl text-white/80">
                    Experience Daly College Through Our Publications.
                </p>
            </div>
            import {FiArrowRight} from "react-icons/fi";

            <div className="flex flex-col sm:flex-row justify-center gap-6.5 px-4 pb-20">
                {/* CARD 1 */}
                <div className="relative w-full sm:w-1/4 h-64 sm:h-110 rounded-md group overflow-hidden">

                    {/* IMAGE LAYER (ONLY THIS SCALES) */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                        style={{ backgroundImage: `url(${image1})` }}
                    ></div>

                    {/* RED GLASS OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-b from-red-300/35 to-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* ARROW */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-600 z-10">
                        <FiArrowRight className="text-white w-10 h-10 sm:w-16 sm:h-16 stroke-[1]" />
                    </div>

                    {/* TEXT */}
                    <span className="text-white font-Poppins absolute text-4xl bottom-0 left-1/3 -translate-x-1/2 m-8 z-10">
                        Read our Newsletter
                    </span>
                </div>

                {/* CARD 2 */}
                <div className="relative w-full sm:w-1/4 h-64 sm:h-110 rounded-md group overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                        style={{ backgroundImage: `url(${image2})` }}
                    ></div>

                    <div className="absolute inset-0 bg-gradient-to-b from-red-300/35 to-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-600 z-10">
                        <FiArrowRight className="text-white w-10 h-10 sm:w-16 sm:h-16 stroke-[1]" />
                    </div>

                    <span className="text-white font-Poppins absolute text-4xl bottom-0 left-1/3 -translate-x-1/2 m-8 z-10">
                        Download Brochure
                    </span>
                </div>

                {/* CARD 3 */}
                <div className="relative w-full sm:w-1/4 h-64 sm:h-110 rounded-md group overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                        style={{ backgroundImage: `url(${image3})` }}
                    ></div>

                    <div className="absolute inset-0 bg-gradient-to-b from-red-300/35 to-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-600 z-10">
                        <FiArrowRight className="text-white w-10 h-10 sm:w-16 sm:h-16 stroke-[1]" />
                    </div>

                    <span className="text-white font-Poppins absolute text-4xl bottom-0 left-1/3 -translate-x-1/2 m-8 z-10">
                        Explore DC Magazine
                    </span>
                </div>
            </div>



        </div>

    )
}

export default Features