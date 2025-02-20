import Image from "next/image";

const HeroSection = () => {
    return (
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
    );
}

export default HeroSection;