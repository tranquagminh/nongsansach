import Image from "next/image"

const LatestNews = () => {
  return (
    <section>
        <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#f5f3f0]">
            <div className="py-14">
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
            <div className="container m-auto px-[150px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {/* Bài viết 1 */}
                    <div className="bg-white rounded-md  overflow-hidden">
                        <div className="w-full h-[200px] overflow-hidden">
                            <Image
                                src="/img/dieu-gi-xay-ra-voi-co-the-khi-ban-uong-tra-gung-moi-ngay-812-380x220.jpg"
                                alt="Trà gừng mỗi ngày"
                                width={370}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <div className="text-gray-500 text-sm flex items-center space-x-3">
                                <span className="flex items-center">
                                    📅 5 Tháng 12, 2023
                                </span>
                                <span className="flex items-center">
                                    💬 0
                                </span>
                            </div>
                            <a href="/blog/post1" className="block mt-3 text-xl font-semibold text-[#392a25]">
                                Điều gì xảy ra với cơ thể khi bạn uống trà gừng mỗi ngày?
                            </a>
                            <p className="text-gray-600 mt-2 text-sm">
                                Trà gừng là loại đồ uống có nhiều tác dụng chữa bệnh nhưng nên sử dụng ở mức độ vừa phải...
                            </p>
                            <a href="/blog/post1" className="flex mt-3 gap-2 text-sm font-semibold text-[#5e5a54] hover:underline">
                                <span className="w-7 h-[1px] self-center inline-block bg-black"></span> Read more 
                            </a>
                        </div>
                    </div>

                    {/* Bài viết 2 */}
                    <div className="bg-white rounded-md  overflow-hidden">
                        <div className="w-full h-[200px] overflow-hidden">
                            <Image
                                src="/img/ca-phe-nong-hay-da-tot-hon-1582-380x220.jpg"
                                alt="Cà phê nóng hay đá tốt hơn"
                                width={370}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <div className="text-gray-500 text-sm flex items-center space-x-3">
                                <span className="flex items-center">
                                    📅 4 Tháng 12, 2023
                                </span>
                                <span className="flex items-center">
                                    💬 0
                                </span>
                            </div>
                            <a href="/blog/post2" className="block mt-3 text-xl font-semibold text-[#392a25]">
                                Cà phê nóng hay đá tốt hơn?
                            </a>
                            <p className="text-gray-600 mt-2 text-sm">
                                Cà phê nóng có nhiều chất chống oxy hóa hơn còn cà phê đá có tác dụng tốt khi bạn muốn giảm cân...
                            </p>
                            <a href="/blog/post1" className="flex mt-3 gap-2 text-sm font-semibold text-[#5e5a54] hover:underline">
                                <span className="w-7 h-[1px] self-center inline-block bg-black"></span> Read more 
                            </a>
                        </div>
                    </div>

                    {/* Bài viết 3 */}
                    <div className="bg-white rounded-md  overflow-hidden">
                        <div className="w-full h-[200px] overflow-hidden">
                            <Image
                                src="/img/ca-le-ngu-ban-khap-cac-cho-bo-voi-nguoi-tre-tot-cho-nguoi-gia-1577-380x220.jpg"
                                alt="Loại cá bán khắp các chợ"
                                width={370}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <div className="text-gray-500 text-sm flex items-center space-x-3">
                                <span className="flex items-center">
                                    📅 4 Tháng 12, 2023
                                </span>
                                <span className="flex items-center">
                                    💬 0
                                </span>
                            </div>
                            <a href="/blog/post3" className="block mt-3 text-xl font-semibold text-[#392a25]">
                                Loại cá bán khắp các chợ, tốt với người trẻ, bổ cho người già
                            </a>
                            <p className="text-gray-600 mt-2 text-sm">
                                Cá lóc có thể nấu bánh canh, kho tộ, nướng trui nổi tiếng khắp các miền...
                            </p>
                            <a href="/blog/post1" className="flex mt-3 gap-2 text-sm font-semibold text-[#5e5a54] hover:underline">
                                <span className="w-7 h-[1px] self-center inline-block bg-black"></span> Read more 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default LatestNews