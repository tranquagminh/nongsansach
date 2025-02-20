import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

const CategorySection = () => {
    return (
        <section>
            <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#f5f3f0]">
                <div className="my-[100px] py-14 px-3">
                    <SectionTitle title="Danh mục sản phẩm"/>
                    
                    <div className="flex max-w-[1140px] gap-7 m-auto justify-between">
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