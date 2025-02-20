"use client"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import AboutImage from "./about-slider/AboutImage";
import AboutSlider from "./about-slider/AboutSlider";
import SectionTitle from "../ui/SectionTitle";

const AboutSection = ({ title }: { title: string })  => {
    return (
        <section className="py-[100px]">
            <SectionTitle title={title}/>
            
            <div className="flex flex-wrap mt-[100px] items-center">
                <AboutImage />
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
                        <AboutSlider />
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default AboutSection