import Image from "next/image"


const PromoSection = () => {
  return (
    <section className="container mx-auto px-4 py-[85px]">
        <div className="flex justify-center gap-8 items-center">
            {/* Cột bên trái (Ảnh mật ong, giá) */}
            <div className="relative flex w-1/3 justify-center items-end mr-[-200px] mb-[-100px]">
                {/* Giá tròn */}
                <div className="absolute top-32 left-8 bg-green-800 text-white text-center p-4 rounded-full text-sm rotate-[-30deg]">
                    GIÁ TỪ <br /> <span className="font-semibold text-base">1TR</span>
                </div>
                <Image
                    src="/img/homepage-img-03.png"
                    alt="Mật Ong Rừng"
                    width={350}
                    height={350}
                    className="w-full h-auto"
                />
            </div>

            {/* Cột giữa (Hộp thông tin) */}
            <div className="bg-[#346a55] w-1/3 text-white self-start px-8 pt-8 pb-14 text-center">
                <div className="my-9">
                    <h2 className="text-4xl font-greatVibes">Mật Ong Rừng</h2>
                    <h3 className="text-lg text-[#392a25] font-bold tracking-wide">NGUYÊN CHẤT</h3>
                </div>
                <p className="mt-4 text-sm leading-6">
                    Mật ong rừng nguyên chất 100% tự nhiên là một loại thực phẩm hầu như không thể thiếu trong mỗi gia đình Việt.
                </p>
                <p className="mt-4 text-sm leading-6">
                    Ngoài việc là nguyên liệu góp phần làm nên những món ăn đầy dinh dưỡng, mật ong còn là một dược liệu tuyệt vời
                    dùng để chăm sóc sức khoẻ và sắc đẹp.
                </p>
                <a
                    href="/san-pham/mat-ong-rung-tu-nhien-nguyen-chat"
                    className="inline-block mt-6 bg-[#3e2b1d] text-white py-[11px] px-[25px] rounded-md text-sm uppercase font-semibold hover:bg-[#2b1f15] transition"
                >
                    Mua ngay
                </a>
            </div>

            {/* Cột bên phải (Banner giảm giá) */}
            <div className="flex flex-col w-1/4 space-y-6">
                {/* Banner 1 */}
                <div className="relative">
                    <Image
                        src="/img/featured-product-06.jpg"
                        alt="Giảm giá mùa dịch"
                        width={100}
                        height={100}
                        className="w-full h-auto rounded-md"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/30 rounded-md">
                        <div className="text-white text-center">
                            <h4 className="text-sm uppercase">Hỗ trợ mùa dịch</h4>
                            <h2 className="text-3xl font-bold">GIẢM</h2>
                            <p className="text-lg">LÊN TỚI 50%</p>
                        </div>
                    </div>
                </div>

                {/* Banner 2 */}
                <div className="relative w-full max-w-sm mx-auto p-6 text-center" >
                    {/* Hình nền */}
                    <div className="absolute inset-0 w-full h-auto">
                        <Image
                            src="/img/featured-product-07.jpg"
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-60"
                        />
                    </div>

                    {/* Nội dung */}
                    <div className="relative z-10">
                        <h4 className="text-sm uppercase text-gray-700">- GIẢM GIÁ MÙA DỊCH -</h4>
                        <h2 className="text-4xl font-bold text-black mt-2">30%</h2>
                        <p className="text-lg text-gray-700 mt-1">MẶT HÀNG HOA RAU CỦ</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default PromoSection