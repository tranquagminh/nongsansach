import AboutSection from "@/components/homepage/AboutSection";
import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";

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
            
            
        </div>
    );
}