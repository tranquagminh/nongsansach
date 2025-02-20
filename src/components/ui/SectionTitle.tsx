import Image from "next/image";

interface SectionTitleProps {
    title: string;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
  return (
    <div className="mb-[50px]">
        <div className="uppercase text-center text-[#392a25] font-bold tracking-widest text-[40px]">{title}</div>
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
  )
}

export default SectionTitle