import final1 from '../assets/final1.png'
import final2 from '../assets/imagelast.png'
const LastSection = () => {
    return (
        <>
            <section className="mt-[50px]">
                <div className='w-full flex flex-col md:flex-row'>
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 ">

                            {/* LEFT CARD */}
                            <div className='bg-[#FFFAE8] p-10'>
                                <div className="bg-[#FFFAE8] border border-[#E7DCC3] rounded-3xl p-10 text-center h-auto md:h-[600px]">
                                <img
                                    src={final1}  // ← IMAGE 1
                                    alt="About Daly College"
                                    className="w-36 h-36 mx-auto rounded-2xl object-cover mb-6"
                                />

                                <h3 className="text-2xl font-semibold mb-6">
                                    About Daly College
                                </h3>

                                <p className="text-gray-700 leading-7 text-sm mb-6">
                                    The new building was inaugurated on November 14, 1885 by the
                                    Viceroy, Lord Dufferin. By 1891 the Holkars of Indore and the
                                    Scindias of Gwalior donated the two student houses.
                                </p>

                                <p className="text-gray-700 leading-7 text-sm">
                                    In 1905 Sir Henry's Son, Sir Hugh Daly, was appointed Agent at
                                    Indore, to the position previously occupied by his father. He took
                                    great interest in Daly College which flourished as a Chiefs
                                    College. The Holkars then donated 118 acres east of the old campus
                                    and various Chiefs contributed to build on the newly acquired
                                    land.
                                </p>
                            </div>
                            </div>

                            {/* CENTER CARD */}
                            <div className='bg-[#E7DCC3] p-10 '>
                                <div className="bg-[#E7DCC3] h-auto md:h-[600px] border border-[#FFFFFFCC] rounded-3xl flex flex-col items-center text-center">
                                <p className="text-sm text-gray-700 mb-3">Founded in</p>
                                <h2 className="text-5xl font-bold mb-6">1870</h2>

                                <div className="w-10 h-px bg-gray-400 mb-8" />

                                <p className="text-sm text-gray-700 mb-3">Campus Size</p>
                                <h2 className="text-4xl font-bold mb-6">119 Acres</h2>

                                <div className="w-10 h-px bg-gray-400 mb-8" />

                                <p className="text-sm text-gray-700 mb-3">Student Strength</p>
                                <h2 className="text-4xl font-bold mb-6">2,000+</h2>

                                <div className="w-10 h-px bg-gray-400 mb-8" />

                                <p className="text-sm text-gray-700 mb-3">
                                    student–teacher ratio
                                </p>
                                <h2 className="text-4xl font-bold">30 : 1</h2>
                            </div>
                            </div>

                            {/* RIGHT CARD */}
                            <div className='p-10 bg-[#FFFAE8]'>
                                <div className="bg-[#FFFAE8] h-auto md:h-[600px] border border-[#E7DCC3] rounded-3xl p-10 text-center">
                                <img
                                    src={final2}   // ← IMAGE 2
                                    alt="The Founder"
                                    className="w-36 h-36 mx-auto rounded-2xl object-cover "
                                />

                                <h3 className="text-2xl font-semibold mb-6">
                                    The Founder
                                </h3>

                                <p className="text-gray-700 leading-7 text-sm mb-6">
                                    Sir Henry Dermot Daly was born at Kirkee, near Poona, on 25th
                                    October 1823. His father, Francis Dermot Daly, was a soldier and
                                    served in British Indian from 1821 in the 4th Light Dragoons.
                                </p>

                                <p className="text-gray-700 leading-7 text-sm">
                                    Sir Daly was a keen student of history and delved into the history
                                    of the States of Malwa region. His cheerful and pleasant
                                    disposition won him the friendship and confidence of the Chiefs
                                    of Malwa States. In 1870, he took up the appointment of Agent to the
                                    Governor General which he held until he left India eleven years
                                    later.
                                </p>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default LastSection