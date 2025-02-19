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



const HomePage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Số ảnh hiển thị trên 1 lần cuộn
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
    };
    return (    
        <div id="content" className="content bg-white">
            <div className="container mx-auto px-4">
                <div id="primary" className="content-area row">

                {/* Hero Section */}
                <div>

                </div>
                <section className="relative bg-gray-100 text-center">
                    <Image
                    src="/img/slider-home-03-slide3-background.jpg" 
                    alt="Hero Image" 
                    width={1920} 
                    height={600}
                    className="w-[1420px] h-auto"
                    />
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white">
                    <h4 className="text-base font-semibold uppercase">Nông Sản Sạch Gia Linh</h4>
                    <h1 className="leading-[112px] font-normal font-greatVibes text-[83px] ">Sản phẩm chất lượng</h1>
                    <p className="mt-4 text-sm text-pretty max-w-[426px] m-auto leading-7">Cam kết đưa đến người tiêu dùng loại nông sản tươi ngon nhất của các vùng miền trên toàn quốc với mục đích là &quot;Mang trọn tinh hoa từ người nông dân đến tay người tiêu dùng&quot;.</p>
                    <a href="/shop" className="inline-block mt-8 bg-[#5fbd73] text-white py-2 px-6 rounded-md text-base">Mua ngay</a>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="py-[100px] ">
                    <div className="mb-[100px]">
                        <div className="uppercase text-center font-bold tracking-widest text-[40px]">Về chúng tôi</div>
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
                                        <div key={index} className="px-2">
                                            <div className="aspect-[3/2] w-[150px] p-1 h-auto overflow-hidden">
                                                <Image
                                                    src={image}
                                                    alt={`Carousel Image ${index + 1}`}
                                                    width={150}
                                                    height={100}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                    
                </section>

                {/* Featured Products Section */}
                <section className="py-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Sản phẩm nổi bật</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Product Item 1 */}
                    <div className="text-center">
                        <Image
                        src="/product1.jpg"
                        alt="Product 1"
                        width={300}
                        height={300}
                        className="w-full h-auto"
                        />
                        <h3 className="text-xl mt-4">Product Name</h3>
                        <p className="text-lg">Product Description</p>
                        <a href="/product" className="inline-block mt-4 bg-green-600 text-white py-2 px-6 rounded-lg">Xem chi tiết</a>
                    </div>
                    {/* More product items can be added here */}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="bg-gray-50 py-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Khách hàng nói về chúng tôi</h2>
                    <div className="flex justify-center space-x-8">
                    {/* Testimonial 1 */}
                    <div className="max-w-xs text-center">
                        <p className="italic">&quot;Mật ong rừng nguyên chất tại Nông Sản Sạch rất ngon và chất lượng&quot;</p>
                        <div className="mt-4 flex justify-center items-center">
                        <Image
                            src="/customer1.jpg"
                            alt="Customer 1"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                        <span className="ml-4 text-lg font-semibold">Chị Linh</span>
                        </div>
                    </div>
                    {/* More testimonials can be added here */}
                    </div>
                </section>

                {/* Featured Product Promo Section */}
                <section className="relative py-16">
                    <div className="flex flex-wrap items-center">
                    <div className="lg:w-1/2 w-full p-4">
                        <h1 className="text-4xl font-bold">Mật Ong Rừng 100% Nguyên Chất</h1>
                        <p className="mt-4 text-lg">Mật ong rừng nguyên chất 100% tự nhiên là một loại thực phẩm không thể thiếu trong mỗi gia đình Việt.</p>
                        <a href="/product" className="inline-block mt-8 bg-green-600 text-white py-2 px-6 rounded-lg">Mua ngay</a>
                    </div>
                    <div className="lg:w-1/2 w-full p-4">
                        <Image
                        src="/promo-image.jpg"
                        alt="Promo"
                        width={485}
                        height={520}
                        className="w-full h-auto"
                        />
                    </div>
                    </div>
                </section>

                {/* Latest News Section */}
                <section className="py-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Tin Mới Nhất</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Post 1 */}
                    <div className="text-center">
                        <Image
                        src="/blog1.jpg"
                        alt="Blog Post 1"
                        width={370}
                        height={214}
                        className="w-full h-auto"
                        />
                        <div className="mt-4">
                        <a href="/blog/post1">
                            <h3 className="text-xl font-semibold">Điều gì xảy ra với cơ thể khi bạn uống trà gừng mỗi ngày?</h3>
                        </a>
                        <p className="text-lg mt-2">Trà gừng là loại đồ uống có nhiều tác dụng chữa bệnh nhưng nên sử dụng ở mức độ vừa phải...</p>
                        </div>
                    </div>
                    {/* More blog posts can be added here */}
                    </div>
                </section>
                </div>
            </div>
        </div>
    );
}

export default HomePage