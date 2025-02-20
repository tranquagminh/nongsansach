import Image from "next/image";

interface PageBannerProps {
  title: string;
  bgColor?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, bgColor = "#115036" }) => {
  return (
    <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] text-center mt-32" style={{ backgroundColor: bgColor }}>
      <Image
        src="/img/big_title_bg_1.png"
        alt="Hero Image"
        width={600}
        height={600}
        className="w-[30%] h-auto object-contain absolute bottom-0 right-1/2 translate-x-1/2"
      />
      <div className="text-white">
        <h1 className="leading-[112px] font-normal font-greatVibes text-[83px] py-32">{title}</h1>
      </div>
    </div>
  );
};

export default PageBanner;