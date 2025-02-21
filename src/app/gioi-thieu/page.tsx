import AboutSection from "@/components/homepage/AboutSection";
import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div>
            <PageBanner title="Giới thiệu"/>
            
            <div className="py-5 mb-2">
                <p className="text-base uppercase flex gap-5">
                    <Link href="/">Home</Link> 
                    <span>/</span> 
                    <span className="text-gray-300 uppercase"> Giới thiệu</span>
                </p>
            </div>
            <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <div className="h-[1px] bg-[#eeeeee]"></div>
            </div>
            <div className="text-center mt-[100px]">
                <h1 className="leading-[112px] font-normal font-greatVibes text-[56px] text-[#115036]">Chào mừng đến với Nông Sản Sạch!</h1>
            </div>
            <div className="-mt-[100px]">
                <AboutSection title="Câu chuyện về chúng tôi"/>
            </div>
            <div className="relative py-16 w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#f5f3f0]">
                <div className="mb-[50px]">
                    <div className="text-center">
                        <h1 className="leading-[112px] font-normal font-greatVibes text-[56px] text-[#115036]">Tại sao chọn Nông Sản Sạch?
                        </h1>
                    </div>
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
                <div className="container m-auto">
                    <div className="flex gap-4">
                        <div className="w-1/3 flex flex-col gap-6">
                            {[
                                {
                                    title: "Ăn uống lành mạnh hơn",
                                    description: "Có được các loại trái cây và rau quả được thu hoạch hàng ngày.",
                                },
                                {
                                    title: "Chúng tôi có danh tiếng.",
                                    description: "Chúng tôi đã cung cấp các sản phẩm hữu cơ cho khách hàng từ năm 2008.",
                                },
                                {
                                    title: "Tươi & Không có thuốc trừ sâu.",
                                    description: "Chúng tôi cung cấp các sản phẩm hữu cơ không có thuốc trừ sâu và được trồng bền vững.",
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-7">
                                    <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f9f9f9] rounded-full">
                                        <Image 
                                            src="/img/Screenshot_2025-02-21_183431-removebg-preview.png"
                                            alt="About Us"
                                            width={50}
                                            height={50}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h3 className="text-base font-bold text-[#392a25] mb-3">{item.title}</h3>
                                        <p className="text-[#5e5a54] ">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-1/3">
                            <Image 
                                src="/img/rau-cu-sach-300x300 (1).png"
                                alt="About Us"
                                width={1300}
                                height={1300}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-1/3 flex flex-col gap-6">
                            {[
                                {
                                    title: "Ăn uống lành mạnh hơn",
                                    description: "Có được các loại trái cây và rau quả được thu hoạch hàng ngày.",
                                },
                                {
                                    title: "Chúng tôi có danh tiếng.",
                                    description: "Chúng tôi đã cung cấp các sản phẩm hữu cơ cho khách hàng từ năm 2008.",
                                },
                                {
                                    title: "Tươi & Không có thuốc trừ sâu.",
                                    description: "Chúng tôi cung cấp các sản phẩm hữu cơ không có thuốc trừ sâu và được trồng bền vững.",
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-7">
                                    
                                    <div className="flex-1 text-right">
                                        <h3 className="text-base font-bold text-[#392a25] mb-3">{item.title}</h3>
                                        <p className="text-[#5e5a54] ">{item.description}</p>
                                    </div>
                                    <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f9f9f9] rounded-full">
                                        <Image 
                                            src="/img/Screenshot_2025-02-21_183431-removebg-preview.png"
                                            alt="About Us"
                                            width={50}
                                            height={50}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}