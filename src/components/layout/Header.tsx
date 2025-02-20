import Image from "next/image";
import { FiSearch } from "react-icons/fi"; 
import { BsCart3 } from "react-icons/bs"; 
import Link from "next/link";

export default function Header(){
    return (
        <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="text-white p-2 bg-[#115036]">
                <div className="container m-auto">
                    <div className="flex text-lg">
                        <div className="flex-1">
                            <p>Giờ mờ cửa từ 7:00 đến 22:00 hàng ngày</p>
                        </div>
                        <div className="flex-1 text-end">
                            <a href="https://nongsansach.com/tai-khoan/">Login/Register</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container m-auto">
                    <div className="flex">
                        <div className="flex w-[16.77%] px-4">
                            <a className="w-full self-center" href="https://nongsansach.com/">
                                <Image
                                    className="w-full"
                                    src="/img/logo-ns-web.png"
                                    alt="Vercel logomark"
                                    width={200}
                                    height={200}
                                    />
                            </a>
                        </div>
                        <div className="flex-1">
                            <nav>
                                <ul className="flex justify-end text-[#115036] font-medium text-lg">
                                    <li className="uppercase">
                                        <Link className="px-7 py-10 inline-block" href="/">Trang Chủ</Link>
                                    </li>
                                    <li className="uppercase">
                                        <Link className="px-7 py-10 inline-block" href="/gioi-thieu">Giới thiệu</Link>
                                    </li>
                                    <li className="uppercase">
                                        <a className="px-7 py-10 inline-block" href="#">Sản phẩm</a>
                                    </li>
                                    <li className="uppercase">
                                        <Link className="px-7 py-10 inline-block" href="/tin-tuc">Kiến thức</Link>
                                    </li>
                                    <li className="uppercase">
                                        <a className="px-7 py-10 inline-block" href="/danh-muc/hat-giong">Hạt giống</a>
                                    </li>
                                    <li className="uppercase">
                                        <Link className="px-7 py-10 inline-block" href="/lien-he">Liên hệ</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="ml-5 flex">
                            <div className="flex self-center gap-5 text-2xl">
                                <div>
                                    <FiSearch className="cursor-pointer" />
                                </div>
                                <div className="relative">
                                    <BsCart3 className="cursor-pointer" />
                                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}