import Image from "next/image"

const TestimonialsSection = () => {
  return (
    <section className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#f5f3f0] py-12" style={{ backgroundImage: "url('/img/testi_bg_02.jpg')" }}>
        <div className="my-10 ">
            <div className="leading-[112px] text-center font-normal font-greatVibes text-[56px] text-white">Khách hàng nói gì về chúng tôi</div>
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
            <div className="flex justify-center space-x-8 my-12">
                {/* Testimonial 1 */}
                <div>
                    <div className="max-w-xs relative text-left text-[#5e5a54] bg-white p-9 rounded-sm">
                        <div className="absolute top-3 left-3">
                            <Image
                                src="/img/Screenshot 2025-02-20 043732.png"
                                alt="Customer 1"
                                width={20}
                                height={20}
                                className="rounded-full"
                            />
                        </div>
                        <p className="italic text-lg mb-4">
                            &quot;Mật ong rừng nguyên chất tại Nông Sản Sạch rất ngon và chất lượng.&quot;
                        </p>
                    </div>
                    <div className="mt-4 flex justify-start items-center">
                            <Image
                                src="/img/testi_01.png"
                                alt="Customer 2"
                                width={60}
                                height={60}
                                className="rounded-full border-4 border-white/20"
                            />
                            <span className="ml-4 text-white text-lg font-semibold">Chị Linh</span>
                    </div>
                </div>
                {/* Testimonial 2 */}
                <div>
                    <div className="max-w-xs relative text-left text-[#5e5a54] bg-white p-9 rounded-sm">
                        <div className="absolute top-3 left-3 ">
                            <Image
                                src="/img/Screenshot 2025-02-20 043732.png"
                                alt="Customer 1"
                                width={20}
                                height={20}
                                className="rounded-full "
                            />
                        </div>
                        <p className="italic text-lg mb-4">
                            &quot;Tôi đã sử dụng nông sản của cửa hàng, tôi rất yên tâm cho bữa ăn gia đình mình.&quot;
                        </p>
                    </div>
                    <div className="mt-4 flex justify-start items-center">
                            <Image
                                src="/img/testi_01.png"
                                alt="Customer 2"
                                width={60}
                                height={60}
                                className="rounded-full border-4 border-white/20"
                            />
                            <span className="ml-4 text-white text-lg font-semibold">Chị Hoa</span>
                    </div>
                </div>
                {/* Testimonial 3 */}
                <div>
                    <div className="max-w-xs relative text-left text-[#5e5a54] bg-white p-9 rounded-sm">
                        <div className="absolute top-3 left-3">
                            <Image
                                src="/img/Screenshot 2025-02-20 043732.png"
                                alt="Customer 1"
                                width={20}
                                height={20}
                                className="rounded-full"
                            />
                        </div>
                        <p className="italic text-lg mb-4">
                            &quot;Tôi đã sử dụng nông sản của cửa hàng, tôi rất yên tâm cho bữa ăn gia đình mình.&quot;
                        </p>
                    </div>
                    <div className="mt-4 flex justify-start items-center">
                            <Image
                                src="/img/testi_01.png"
                                alt="Customer 2"
                                width={60}
                                height={60}
                                className="rounded-full border-4 border-white/20"
                            />
                            <span className="ml-4 text-lg text-white font-semibold">Chị Đào</span>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default TestimonialsSection