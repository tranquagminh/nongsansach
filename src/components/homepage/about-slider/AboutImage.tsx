"use client"
import Image from "next/image";

const AboutImage = () => {
    return (
        <div className="lg:w-1/2 w-full relative overflow-hidden mt-[-40px] mr-[-40px]">
            <Image
                src="/img/about-pic-02.jpg"
                alt="About Us"
                width={570}
                height={440}
                className="w-full block h-auto"
            />
        </div>
    );
};

export default AboutImage;