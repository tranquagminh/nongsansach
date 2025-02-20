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

const AboutSection = () => {
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
    return (
        <section className="py-[100px] ">
                    <div className="mb-[100px]">
                        <div className="uppercase text-center text-[#392a25] font-bold tracking-widest text-[40px]">Về chúng tôi</div>
                        <div className="flex justify-center max-w-[350px] m-auto">
                            <div className="h-[1px] relative self-center flex-auto min-w-[10%]">
                                <div className="h-[1px] border-t border-solid border-[#5e5a54] block relative top-1 w-full"></div>
                            </div>
                            <div className="max-w-[100px]">
                                <Image
                                    src="/img/Screenshot_2025-02-19_113218-removebg-preview.png"
                                    alt="Flower"
                                    width={100}
                                    height={100}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="h-[1px] relative self-center flex-auto min-w-[10%]">
                                <div className="h-[1px] border-t border-solid border-[#5e5a54] block relative top-1 w-full"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center">
                        <div className="lg:w-1/2 w-full relative overflow-hidden mt-[-40px] mr-[-40px]">
                        <Image
                            src="/img/about-pic-02.jpg"
                            alt="About Us"
                            width={570}
                            height={440}
                            className="w-full block relative h-auto "
                        />
                        </div>
                        <div className="lg:w-1/2 w-full p-0 mb-[-40px] border-[#f1eeea] border-[3px] border-t-0">
                            <div className="flex mt-[-17px] text-[#392a25]">
                                <h4 className="text-2xl ml-[83px] tracking-[0.1em] font-normal uppercase">Nông Sản Sạch</h4>
                                <div className="h-[1px] self-center relative flex-1 min-w-[10%] border-t-[3px] border-[#f1eeea] ml-[30px]"></div>
                            </div>
                            <div className="mt-4 text-lg pt-[35px] pr-[43px] pb-[30px] pl-[83px] text-[#5e5a54]">
                                <p className="mb-6">Cửa hàng nông sản sạch NongSanSach.Com là một website cung cấp thực phẩm an toàn, 100% tự nhiên, nông sản sạch cho người dân. Với mong muốn thực phẩm an toàn sẽ tới tay mọi gia đình Việt Nam. Các sản phẩm tiêu biểu của chúng tôi gồm: Các loại trà, ngũ cốc dinh dưỡng, hạt dinh dưỡng, trái cây sấy,….</p>
                                <p className="my-6">Cùng chung tay xây dựng một cuộc sống an toàn và chất lượng cho người dân Việt Nam.</p>
                            </div>
                            <div className="mr-7 mb-5">
                                <Slider {...settings} className="w-full mx-auto">
                                    {[
                                        "/img/about-carousel-01.jpg",
                                        "/img/about-carousel-02.jpg",
                                        "/img/about-carousel-03.jpg",
                                        "/img/about-carousel-04.jpg",
                                        "/img/about-carousel-05.jpg",
                                        "/img/about-carousel-06.jpg",
                                    ].map((image, index) => (
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
                            </div>
                        </div>
                    </div>
                    
                </section>
    );
}

export default AboutSection