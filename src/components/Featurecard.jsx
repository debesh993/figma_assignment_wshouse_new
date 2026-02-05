import { useEffect, useRef } from "react";
import gsap from "gsap";

import image73 from "../assets/image 73.png";
import image74 from "../assets/image 74.png";
import image75 from "../assets/image 75.png";
import image76 from "../assets/image 76.png";

const images = [image73, image74, image75, image76];

export default function MoreAboutMe() {
    const reelRef = useRef(null);

    useEffect(() => {
        const reel = reelRef.current;

        const totalWidth = reel.scrollWidth / 4;

        gsap.to(reel, {
            x: -totalWidth,
            duration: 5,
            ease: "linear",
            repeat: -1,
        });
    }, []);

    return (
        <>
            <div className="w-full flex justify-center items-center mt-8 mb-4">
                <div className="
  font-inter
  font-normal
  text-[16px]        /* mobile */
  sm:text-[18px]     /* tablet */
  md:text-[20px]     /* small laptop */
  lg:text-[24px]     /* laptop */
  xl:text-[30px]     /* > laptop (Figma size) */
  leading-[100%]
  tracking-normal
  text-center
  text-black
">
                Affiliations
            </div>
            </div>

            <div className="relative w-full overflow-hidden ">
                {/* LEFT BLUR / FADE */}
                <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-[120px] z-10"
                    style={{
                        background:
                            "linear-gradient(90deg, #FFFFFF 28.11%, rgba(255, 255, 255, 0) 100%)",
                    }}
                />

                {/* RIGHT BLUR / FADE */}
                <div
                    className="pointer-events-none absolute right-0 top-0 h-full w-[120px] z-10"
                    style={{
                        background:
                            "linear-gradient(270deg, #FFFFFF 28.11%, rgba(255, 255, 255, 0) 100%)",
                    }}
                />



                <div ref={reelRef} className="flex w-max items-center p-4 ">
                    {/* first set */}
                    {images.map((src, index) => (
                        <img
                            key={`a-${index}`}
                            src={src}
                            alt=""
                            className="w-[49px] h-[49px] object-contain mx-6"
                        />
                    ))}
                    {/* second set */}
                    {images.map((src, index) => (
                        <img
                            key={`b-${index}`}
                            src={src}
                            alt=""
                            className="w-[49px] h-[49px] object-contain mx-6"
                        />
                    ))}
                    {/* third set */}
                    {images.map((src, index) => (
                        <img
                            key={`c-${index}`}
                            src={src}
                            alt=""
                            className="w-[49px] h-[49px] object-contain mx-6"
                        />
                    ))}
                    {/* fourth set */}
                    {images.map((src, index) => (
                        <img
                            key={`d-${index}`}
                            src={src}
                            alt=""
                            className="w-[49px] h-[49px] object-contain mx-6"
                        />
                    ))}
                </div>
            </div></>
    );
}
