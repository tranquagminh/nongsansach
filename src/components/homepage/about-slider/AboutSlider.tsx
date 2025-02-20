"use client"
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomArrowProps } from "react-slick";

const NextArrow: React.FC<CustomArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-next flex justify-center items-center`}
            style={{ ...style, display: "block", right: "-25px" }}
            onClick={onClick}
        />
    );
};

const AboutSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
    };

    const images = [
        "/img/about-carousel-01.jpg",
        "/img/about-carousel-02.jpg",
        "/img/about-carousel-03.jpg",
        "/img/about-carousel-04.jpg",
        "/img/about-carousel-05.jpg",
        "/img/about-carousel-06.jpg",
    ];

    return (
        <Slider {...settings} className="w-full mx-auto">
            {images.map((image, index) => (
                <div key={index} className="">
                    <div className="aspect-[3/2] w-[150px] p-1 h-auto overflow-hidden">
                        <div className="p-1 rounded-md bg-white">
                            <Image
                                src={image}
                                alt={`Carousel Image ${index + 1}`}
                                width={150}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default AboutSlider;