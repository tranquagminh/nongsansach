"use client"
import Image from "next/image";
import { FiSearch } from "react-icons/fi"; 
import { BsCart3 } from "react-icons/bs"; 
import Link from "next/link";
import { useState } from "react";

export default function Header(){
    // const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState({
        sanPham: false,
        kienThuc: false,
        hatGiong: false,
    });

    const toggleDropdown = (key: string, isOpen: boolean) => {
        setDropdownOpen({ sanPham: false, kienThuc: false, hatGiong: false, [key]: isOpen });
    };

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
                                <ul className="flex justify-end text-[#5e5a54] font-medium text-sm">
                                    <li className="uppercase">
                                        <Link className="px-7 py-10 inline-block" href="/">Trang Chủ</Link>
                                    </li>
                                    <li className="uppercase">
                                        <Link className="px-7 py-10 inline-block" href="/gioi-thieu">Giới thiệu</Link>
                                    </li>
                                    <li  onMouseEnter={() => toggleDropdown("sanPham", true)}
                                        onMouseLeave={() => toggleDropdown("sanPham", false)}
                                        className=" relative">
                                        <a className="px-7 py-10 uppercase inline-block" href="#">Sản phẩm <span className="ml-2"><i className="fa-solid fa-angle-down"></i></span></a>
                                        {dropdownOpen.sanPham && (
                                            <ul className="absolute left-0 top-full w-64 text-[14px] text-[#5e5a54] bg-white shadow-lg border text-left">
                                                <li className="px-5">
                                                    <Link href="/danh-muc/dac-san" className="block px-5 py-4 border-b hover:text-[#115036] ">Đặc sản</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/nam-cac-loai" className="block px-5 py-4 border-b hover:text-[#115036] ">Nấm các loại</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/trai-cay" className="block px-5 py-4 border-b hover:text-[#115036] ">Trái Cây</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/rau-huu-co" className="block px-5 py-4 border-b hover:text-[#115036] ">Rau Không Hóa Chất & Hữu cơ</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/rau-cu" className="block px-5 py-4 border-b hover:text-[#115036] ">Rau Củ Quả An Toàn</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/thuc-pham-dong-goi" className="block px-5 py-4 border-b hover:text-[#115036] ">Thực phẩm đóng gói</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/bun-gao-dau" className="block px-5 py-4 border-b hover:text-[#115036] ">Bún – Gạo – Đậu hạt</Link>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onMouseEnter={() => toggleDropdown("kienThuc", true)}
                                        onMouseLeave={() => toggleDropdown("kienThuc", false)}
                                        className="relative ">
                                        <Link className="px-7 py-10 inline-block uppercase" href="/tin-tuc">Kiến thức <span className="ml-2"><i className="fa-solid fa-angle-down"></i></span></Link>
                                        {dropdownOpen.kienThuc && (
                                            <ul className="absolute left-0 top-full w-64 text-[14px] text-[#5e5a54] bg-white shadow-lg border text-left">
                                                <li className="px-5">
                                                    <Link href="/danh-muc/dac-san" className="block px-5 py-4 border-b hover:text-[#115036] ">Trồng trọt</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/nam-cac-loai" className="block px-5 py-4 border-b hover:text-[#115036] ">Hướng dẫn trồng rau</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/trai-cay" className="block px-5 py-4 border-b hover:text-[#115036] ">Nhân giống</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/rau-huu-co" className="block px-5 py-4 border-b hover:text-[#115036] ">Chơi cảnh</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/rau-cu" className="block px-5 py-4 border-b hover:text-[#115036] ">Sâu bệnh hại cây trồng</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/thuc-pham-dong-goi" className="block px-5 py-4 border-b hover:text-[#115036] ">Phân bón</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/bun-gao-dau" className="block px-5 py-4 border-b hover:text-[#115036] ">Sức khỏe và làm đẹp</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/bun-gao-dau" className="block px-5 py-4 border-b hover:text-[#115036] ">Món ngon theo vùng miền</Link>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onMouseEnter={() => toggleDropdown("hatGiong", true)}
                                    onMouseLeave={() => toggleDropdown("hatGiong", false)}
                                    className="relative ">
                                        <Link className="px-7 py-10 inline-block uppercase" href="/danh-muc/hat-giong">Hạt giống <span className="ml-2"><i className="fa-solid fa-angle-down"></i></span></Link>
                                        {dropdownOpen.hatGiong && (
                                            <ul className="absolute left-0 top-full w-64 text-[14px] text-[#5e5a54] bg-white shadow-lg border text-left">
                                                <li className="px-5">
                                                    <Link href="/danh-muc/dac-san" className="block px-5 py-4 border-b hover:text-[#115036] ">Hạt giống rau sạch</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/nam-cac-loai" className="block px-5 py-4 border-b hover:text-[#115036] ">Hạt giống củ quả</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/trai-cay" className="block px-5 py-4 border-b hover:text-[#115036] ">Nhân giống</Link>
                                                </li>
                                                <li className="px-5">
                                                    <Link href="/danh-muc/rau-huu-co" className="block px-5 py-4 border-b hover:text-[#115036] ">Hạt giống hoa</Link>
                                                </li>
                                            </ul>
                                        )}
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