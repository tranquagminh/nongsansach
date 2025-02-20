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
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
    };
    return (    
        <div id="content" className="content bg-white overflow-x-hidden">
            <div className="container mx-auto px-4">
                <div id="primary" className="content-area row">
                <div>

                </div>
                <section className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-100 text-center">
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
                
                <section>
                    <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#f5f3f0]">
                        <div className="my-[100px] py-14 px-3">
                            <div className="uppercase text-center text-[#392a25] font-bold tracking-widest text-[40px]">Danh mục sản phẩm</div>
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
                            
                            <div className="flex max-w-[1140px] gap-7 m-auto mt-10 justify-between">
                                <div className="w-1/4 flex flex-col items-center p-2 bg-white rounded-md">
                                    <a href="" className="w-full h-full">
                                        <div className="image relative w-full h-[270px] overflow-hidden">
                                            <div className="bg absolute h-[800px] w-[800px] -top-1/2 -left-1/2 rounded-full -translate-x-1/4 -translate-y-[55%] bg-[#ecd4c5]"></div>
                                            <div className="img absolute">
                                                <Image 
                                                    src="/img/homepage-img-03.png" 
                                                    alt="Nấm các loại"
                                                    width={485}
                                                    height={520}
                                                />
                                            </div>
                                        </div>
                                        <div className="title font-bold text-lg text-center uppercase py-5">Nấm các loại</div>
                                    </a>
                                </div>

                                <div className="w-1/4 flex flex-col items-center p-2 bg-white rounded-md">
                                    <a href="" className="w-full h-full">
                                        <div className="image relative w-full h-[270px] overflow-hidden">
                                            <div className="bg absolute h-[800px] w-[800px] -top-1/2 -left-1/2 rounded-full -translate-x-1/4 -translate-y-[55%] bg-[#e7f2d8]"></div>
                                            <div className="img absolute">
                                                <Image 
                                                    src="/img/do-say-kho-300x300.png" 
                                                    alt="Đặc sản"
                                                    width={485}
                                                    height={520}
                                                />
                                            </div>
                                        </div>
                                        <div className="title font-bold text-lg text-center uppercase py-5">Đặc sản</div>
                                    </a>
                                </div>

                                <div className="w-1/4 flex flex-col items-center p-2 bg-white rounded-md">
                                    <a href="" className="w-full h-full">
                                        <div className="image relative w-full h-[270px] overflow-hidden">
                                            <div className="bg absolute h-[800px] w-[800px] -top-1/2 -left-1/2 rounded-full -translate-x-1/4 -translate-y-[55%] bg-[#f6edd0]"></div>
                                            <div className="img absolute">
                                                <Image 
                                                    src="/img/rau-cu-sach-300x300 (1).png" 
                                                    alt="Rau củ an toàn"
                                                    width={485}
                                                    height={520}
                                                />
                                            </div>
                                        </div>
                                        <div className="title font-bold text-lg text-center uppercase py-5">Rau củ an toàn</div>
                                    </a>
                                </div>

                                <div className="w-1/4 flex flex-col items-center p-2 bg-white rounded-md">
                                    <a href="" className="w-full h-full">
                                        <div className="image relative w-full h-[270px] overflow-hidden ">
                                            <div className="bg absolute h-[800px] w-[800px] -top-1/2 -left-1/2 rounded-full -translate-x-1/4 -translate-y-[55%] bg-[#c6e6f6]"></div>
                                            <div className="img absolute">
                                                <Image 
                                                    src="/img/hoa-qua-sach-300x266.png"
                                                    alt="Trái Cây"
                                                    width={768}
                                                    height={682}
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="title font-bold text-lg text-center uppercase py-5">Trái Cây</div>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Products Section */}
                <section>
                    <div className="mb-10">
                        <div className="uppercase text-center text-[#392a25] font-bold tracking-widest text-[40px]">Sản phẩm nổi bật</div>
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

                    <div className="flex justify-center mb-8">
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="#filter"
                                    className="text-base text-[#5e5a54] hover:text-[#115036] uppercase"
                                    data-option-value=".product"
                                >
                                    All
                                </a>
                            </li>
                            <div className="w-[20px] h-[1px] bg-black self-center"></div>
                            <li>
                                <a
                                    href="#filter"
                                    className="text-base text-[#5e5a54] hover:text-[#115036] uppercase"
                                    data-option-value=".product_cat-dac-san"
                                >
                                    Đặc sản
                                </a>
                            </li>
                            <div className="w-[20px] h-[1px] bg-black self-center"></div>
                            <li>
                                <a
                                    href="#filter"
                                    className="text-base text-[#5e5a54] hover:text-[#115036] uppercase"
                                    data-option-value=".product_cat-trai-cay"
                                >
                                    Trái Cây
                                </a>
                            </li>
                            <div className="w-[20px] h-[1px] bg-black self-center"></div>
                            <li>
                                <a
                                    href="#filter"
                                    className="text-base text-[#5e5a54] hover:text-[#115036] uppercase"
                                    data-option-value=".product_cat-rau-cu-qua-khong-hoa-chat"
                                >
                                    Rau Không Hóa Chất & Hữu cơ
                                </a>
                            </li>
                            <div className="w-[20px] h-[1px] bg-black self-center"></div>
                            <li>
                                <a
                                    href="#filter"
                                    className="text-base text-[#5e5a54] hover:text-[#115036] uppercase"
                                    data-option-value=".product_cat-rau-cu-qua-an-toan"
                                >
                                    Rau Củ Quả An Toàn
                                </a>
                            </li>
                            <div className="w-[20px] h-[1px] bg-black self-center"></div>
                            <li>
                                <a
                                    href="#filter"
                                    className="text-base text-[#5e5a54] hover:text-[#115036] uppercase"
                                    data-option-value=".product_cat-hat-giong"
                                >
                                    Hạt giống
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 mb-20">
                        {/* Product Item 1 */}
                        <div className="rounded-md">
                            <div className="relative">
                                <Image
                                    src="/img/tac-dung-nam-lim-xanh-405x330.jpeg"
                                    alt="Nấm lim xanh"
                                    width={405}
                                    height={330}
                                    className="object-cover"
                                />
                                <div className="absolute right-4 top-4 bg-[#f76b6a] text-white p-4 rounded-[100%] text-sm">HOT</div>
                                <div className="absolute left-4 top-4 bg-[#f7aa77] text-white p-4 rounded-[100%] text-sm">SALE!</div>
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold">Nấm lim xanh – Nấm lim xanh rừng tự nhiên Tiên Phước, Quảng Nam</h3>
                                <div className="flex gap-2 justify-center text-base text-gray-700 mt-2">
                                    <span className="line-through text-[#cbcac8]">2.600.000₫</span>
                                    <span className="font-bold text-[#115036]">2.450.000₫</span>
                                </div>
                                
                            </div>
                        </div>

                        {/* Product Item 2 */}
                        <div className="rounded-md">
                            <div className="relative">
                                <Image
                                    src="/img/tieu-tien-phuoc-1-405x330.jpeg"
                                    alt="Tiêu Tiên Phước"
                                    width={405}
                                    height={330}
                                    className="object-cover"
                                />
                                <div className="absolute right-4 top-4 bg-[#f76b6a] text-white p-4 rounded-[100%] text-sm">HOT</div>
                                <div className="absolute left-4 top-4 bg-[#f7aa77] text-white p-4 rounded-[100%] text-sm">SALE!</div>
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold">Tiêu Tiên Phước – Hạt tiêu đặc trưng của xứ Quảng Nam</h3>
                                <div className="flex gap-2 justify-center text-base text-gray-700 mt-2">
                                    <span className="line-through text-[#cbcac8]">80.000₫</span>
                                    <span className="font-bold text-[#115036]">60.000₫</span>
                                </div>
                                
                            </div>
                        </div>

                        {/* Product Item 3 */}
                        <div className="rounded-md">
                            <div className="relative">
                                <Image
                                    src="/img/mat-ong-nguyen-chat-405x330.jpeg"
                                    alt="Mật ong rừng"
                                    width={405}
                                    height={330}
                                    className="object-cover"
                                />
                                <div className="absolute right-4 top-4 bg-[#f76b6a] text-white p-4 rounded-[100%] text-sm">HOT</div>
                                <div className="absolute left-4 top-4 bg-[#f7aa77] text-white p-4 rounded-[100%] text-sm">SALE!</div>
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold">Mật ong rừng nguyên chất 100% tự nhiên</h3>
                                <div className="text-base flex gap-2 justify-center text-gray-700 mt-2">
                                    <span className="line-through text-[#cbcac8]">1.200.000₫</span>
                                    <span className="font-bold text-[#115036]">1.000.000₫</span>
                                </div>
                                
                            </div>
                        </div>

                        {/* Product Item 4 */}
                        <div className="rounded-md">
                            <div className="relative">
                                <Image
                                    src="/img/297331fb-abf6-44c6-bf52-f84fd9c42eb5_039f916c59c545e69170f7cb5834ca7b-405x330.png"
                                    alt="Rau mồng tơi"
                                    width={405}
                                    height={330}
                                    className="object-cover "
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold">Rau mồng tơi baby 300gr</h3>
                                <div className="flex gap-2 justify-center text-base text-gray-700 mt-2">
                                    <span className="font-bold text-[#115036]">16.000₫</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#f5f3f0] pb-12" style={{ backgroundImage: "url('/img/testi_bg_02.jpg')" }}>

                    <div className="my-10 ">
                        <div className="leading-[112px] text-center font-normal font-greatVibes text-[56px] text-white">Khách hàng nói gì về chúng tôi</div>
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
                        <div className="flex justify-center space-x-8 my-12">
                            {/* Testimonial 1 */}
                            <div>
                                <div className="max-w-xs relative text-left text-[#5e5a54] bg-white p-9 rounded-sm">
                                    <div className="absolute top-3 left-3">
                                        <Image
                                            src="/img/Screenshot 2025-02-20 043732.png"
                                            alt="Customer 1"
                                            width={20}
                                            height={20}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <p className="italic text-lg mb-4">
                                        &quot;Mật ong rừng nguyên chất tại Nông Sản Sạch rất ngon và chất lượng.&quot;
                                    </p>
                                </div>
                                <div className="mt-4 flex justify-start items-center">
                                        <Image
                                            src="/img/testi_01.png"
                                            alt="Customer 2"
                                            width={60}
                                            height={60}
                                            className="rounded-full border-4 border-white/20"
                                        />
                                        <span className="ml-4 text-white text-lg font-semibold">Chị Linh</span>
                                </div>
                            </div>
                            {/* Testimonial 2 */}
                            <div>
                                <div className="max-w-xs relative text-left text-[#5e5a54] bg-white p-9 rounded-sm">
                                    <div className="absolute top-3 left-3 ">
                                        <Image
                                            src="/img/Screenshot 2025-02-20 043732.png"
                                            alt="Customer 1"
                                            width={20}
                                            height={20}
                                            className="rounded-full "
                                        />
                                    </div>
                                    <p className="italic text-lg mb-4">
                                        &quot;Tôi đã sử dụng nông sản của cửa hàng, tôi rất yên tâm cho bữa ăn gia đình mình.&quot;
                                    </p>
                                </div>
                                <div className="mt-4 flex justify-start items-center">
                                        <Image
                                            src="/img/testi_01.png"
                                            alt="Customer 2"
                                            width={60}
                                            height={60}
                                            className="rounded-full border-4 border-white/20"
                                        />
                                        <span className="ml-4 text-white text-lg font-semibold">Chị Hoa</span>
                                </div>
                            </div>
                            {/* Testimonial 3 */}
                            <div>
                                <div className="max-w-xs relative text-left text-[#5e5a54] bg-white p-9 rounded-sm">
                                    <div className="absolute top-3 left-3">
                                        <Image
                                            src="/img/Screenshot 2025-02-20 043732.png"
                                            alt="Customer 1"
                                            width={20}
                                            height={20}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <p className="italic text-lg mb-4">
                                        &quot;Tôi đã sử dụng nông sản của cửa hàng, tôi rất yên tâm cho bữa ăn gia đình mình.&quot;
                                    </p>
                                </div>
                                <div className="mt-4 flex justify-start items-center">
                                        <Image
                                            src="/img/testi_01.png"
                                            alt="Customer 2"
                                            width={60}
                                            height={60}
                                            className="rounded-full border-4 border-white/20"
                                        />
                                        <span className="ml-4 text-lg text-white font-semibold">Chị Đào</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

                {/* Featured Product Promo Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="flex justify-center gap-8 items-center">
                        {/* Cột bên trái (Ảnh mật ong, giá) */}
                        <div className="relative flex w-1/3 justify-center items-end mr-[-200px] mb-[-100px]">
                            {/* Giá tròn */}
                            <div className="absolute top-32 left-8 bg-green-800 text-white text-center p-4 rounded-full text-sm rotate-[-30deg]">
                                GIÁ TỪ <br /> <span className="font-semibold text-base">1TR</span>
                            </div>
                            <Image
                                src="/img/homepage-img-03.png"
                                alt="Mật Ong Rừng"
                                width={350}
                                height={350}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Cột giữa (Hộp thông tin) */}
                        <div className="bg-[#346a55] w-1/3 text-white self-start px-8 pt-8 pb-14 text-center">
                            <div className="my-9">
                                <h2 className="text-4xl font-greatVibes">Mật Ong Rừng</h2>
                                <h3 className="text-lg text-[#392a25] font-bold tracking-wide">NGUYÊN CHẤT</h3>
                            </div>
                            <p className="mt-4 text-sm leading-6">
                                Mật ong rừng nguyên chất 100% tự nhiên là một loại thực phẩm hầu như không thể thiếu trong mỗi gia đình Việt.
                            </p>
                            <p className="mt-4 text-sm leading-6">
                                Ngoài việc là nguyên liệu góp phần làm nên những món ăn đầy dinh dưỡng, mật ong còn là một dược liệu tuyệt vời
                                dùng để chăm sóc sức khoẻ và sắc đẹp.
                            </p>
                            <a
                                href="/san-pham/mat-ong-rung-tu-nhien-nguyen-chat"
                                className="inline-block mt-6 bg-[#3e2b1d] text-white py-[11px] px-[25px] rounded-md text-sm uppercase font-semibold hover:bg-[#2b1f15] transition"
                            >
                                Mua ngay
                            </a>
                        </div>

                        {/* Cột bên phải (Banner giảm giá) */}
                        <div className="flex flex-col w-1/4 space-y-6">
                            {/* Banner 1 */}
                            <div className="relative">
                                <Image
                                    src="/img/featured-product-06.jpg"
                                    alt="Giảm giá mùa dịch"
                                    width={100}
                                    height={100}
                                    className="w-full h-auto rounded-md"
                                />
                                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/30 rounded-md">
                                    <div className="text-white text-center">
                                        <h4 className="text-sm uppercase">Hỗ trợ mùa dịch</h4>
                                        <h2 className="text-3xl font-bold">GIẢM</h2>
                                        <p className="text-lg">LÊN TỚI 50%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Banner 2 */}
                            <div className="relative w-full max-w-sm mx-auto border border-black p-6 text-center" >
                                {/* Hình nền */}
                                <div className="absolute inset-0 w-full h-auto">
                                    <Image
                                        src="/img/featured-product-07.jpg"
                                        alt="Background"
                                        layout="fill"
                                        objectFit="cover"
                                        className="opacity-60"
                                    />
                                </div>

                                {/* Nội dung */}
                                <div className="relative z-10">
                                    <h4 className="text-sm uppercase text-gray-700">- GIẢM GIÁ MÙA DỊCH -</h4>
                                    <h2 className="text-4xl font-bold text-black mt-2">30%</h2>
                                    <p className="text-lg text-gray-700 mt-1">MẶT HÀNG HOA RAU CỦ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Latest News Section */}
                <section className="py-16">
                    <div className="mb-10">
                        <div className="uppercase text-center text-[#392a25] font-bold tracking-widest text-[40px]">Tin mới nhất</div>
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