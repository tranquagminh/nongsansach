import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
<footer className="bg-[#019359] text-white">
      <div className="container mx-auto py-8">
        {/* Logo and Description Section */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/logo-ns-web-ft2.png"
                alt="Nông Sản Sạch"
                width={300}
                height={200}
                className="rounded-full"
              />
            </div>
            <p className="text-gray-200 max-w-[450px] text-lg mb-6">
              Chào mừng đến với Nông Sản Sạch – Nông sản xanh, cuộc sống an lành – mang sức khỏe và tương lai đến mọi nơi! Chúng tôi luôn kiểm soát chất lượng đầu vào chặt chế, liên kết sản xuất và định hướng bà con nông dân trồng trọt theo phương hướng nông nghiệp bền vững để tạo ra nguồn nông sản không chỉ đảm bảo về chất lượng mà còn đa dạng về sản phẩm, tất cả vì sức khỏe người tiêu dùng.
            </p>
            <div className="flex gap-5 text-lg">
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Information Section */}
          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-7 border-b pb-4">THÔNG TIN CẦN BIẾT</h3>
            <ul className="space-y-5">
              <li><a href="#" className="hover:text-gray-300">Sản phẩm</a></li>
              <li><a href="#" className="hover:text-gray-300">Tin tức</a></li>
              <li><a href="#" className="hover:text-gray-300">Hướng dẫn trồng rau</a></li>
              <li><a href="#" className="hover:text-gray-300">An toàn thực phẩm</a></li>
            </ul>
          </div>
            <div className="col-span-2"></div>
          {/* Newsletter Section */}
          <div className="col-span-3">
            <h3 className="text-xl font-semibold mb-4 border-b pb-4">ĐĂNG KÝ NHẬN TIN</h3>
            <p className="mb-4">Hãy nhận ưu đãi hấp dẫn từ Nông Sản Sạch nào!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 p-2 text-gray-800 focus:outline-none"
              />
              <button className="bg-green-700 px-4 py-2 hover:bg-green-800">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-600">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <p>Copyright © 2008-2023 Nông Sản Sạch</p>
          <div className="flex gap-2">
            <Image src="/paypal.png" alt="PayPal" width={50} height={30} />
            <Image src="/visa.png" alt="Visa" width={50} height={30} />
            <Image src="/mastercard.png" alt="Mastercard" width={50} height={30} />
          </div>
        </div>
      </div>
    </footer>
  );
}