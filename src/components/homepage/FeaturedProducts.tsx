import Image from "next/image";

const FeaturedProducts = () => {
  return (
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
  );
}

export default FeaturedProducts