import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white w-full">
                {/* MAIN FOOTER CONTENT */}
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">

                        {/* ABOUT */}
                        <div>
                            <h3 className="text-lg font-medium mb-6">About</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li>Principal&apos;s Desk</li>
                                <li>Prefects and Captains</li>
                                <li>Synopsis on DC</li>
                                <li>Alumni / ODA</li>
                                <li>Campus</li>
                                <li>Facilities</li>
                                <li>Location</li>
                            </ul>
                        </div>

                        {/* HISTORY */}
                        <div>
                            <h3 className="text-lg font-medium mb-6">History</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li>Evolution</li>
                                <li>Founder of DC</li>
                                <li>Presidents of the Board</li>
                                <li>Original Donors</li>
                                <li>Patrons of the College</li>
                                <li>Principals at DC</li>
                                <li>First Batch</li>
                                <li>The College Coat of Arms</li>
                                <li>Visits of Dignitaries</li>
                            </ul>
                        </div>

                        {/* ADMISSION */}
                        <div>
                            <h3 className="text-lg font-medium mb-6">Admission</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li>Admission Procedure</li>
                                <li>E-Brochure</li>
                                <li>Fee Structure</li>
                                <li>Registration</li>
                            </ul>
                        </div>

                        {/* ACADEMICS */}
                        <div>
                            <h3 className="text-lg font-medium mb-6">Academics</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li>Committee</li>
                                <li>Mandatory Disclosure</li>
                                <li>Transfer Certificate</li>
                            </ul>
                        </div>

                        {/* CAREER */}
                        <div>
                            <h3 className="text-lg font-medium mb-6">
                                Career &amp; College Guidance
                            </h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li>Career Guidance Activities</li>
                                <li>ICS Career Login</li>
                                <li>Placement Records</li>
                                <li>Career Guidance Calendar</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-white/10" />

                {/* BOTTOM BAR */}
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-sm">

                    <p>
                        © 2025 Daly College Indore &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms of Use &nbsp;|&nbsp; Sitemap
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-6 text-white text-lg">
                        <FaFacebookF className="cursor-pointer hover:opacity-70" />
                        <FaXTwitter className="cursor-pointer hover:opacity-70" />
                        <FaInstagram className="cursor-pointer hover:opacity-70" />
                        <FaYoutube className="cursor-pointer hover:opacity-70" />
                    </div>


                </div>
            </footer>

        </>
    )
}
export default Footer