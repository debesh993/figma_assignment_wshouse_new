import { FiMail, FiPhone, FiMenu } from "react-icons/fi";
import logo from "../assets/CollegeLogo.png";
import { FiLogOut } from "react-icons/fi";



const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black/70 to-black/0">
            <div className="flex justify-between px-0 h-20 md:h-24">

                {/* LEFT LOGO */}
                <div className="bg-white w-[298px] h-[63px]  pt-1.5 pb-1.5 pl-1.5 flex items-center rounded-br-[10px]">
                    <img
                        src={logo}
                        alt="Daly College Logo"
                        className="h-full w-auto object-contain"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex items-center w-[733px] h-[48px] gap-[30px] pt-4 text-white justify-end pr-3">

                    {/* EMAIL */}
                    <div className="hidden md:flex items-center gap-1.5 text-sm md:text-base">
                        <FiMail />
                        <span>contact@dalycollege.org</span>
                    </div>

                    {/* PHONE */}
                    <div className="hidden md:flex items-center gap-1.5 text-sm md:text-base">
                        <FiPhone />
                        <span>91 (0731) 2719000</span>
                    </div>

                    {/* ERP BUTTON */}
                    <button className="hidden md:flex items-center justify-center gap-2 bg-[#CB0B19] px-4 py-2 rounded-md text-sm md:text-base whitespace-nowrap text-white">
                        <FiLogOut />
                        <span>ERP Login</span>
                    </button>


                    {/* HAMBURGER */}
                    <button className="flex items-center justify-center text-white text-2xl">
                        <FiMenu />
                    </button>

                </div>

            </div>
        </header>
    );
};

export default Header;