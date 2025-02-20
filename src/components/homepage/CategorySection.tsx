import Image from "next/image";

const CategorySection = () => {
    return (
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
    );
}

export default CategorySection;