"use client";

import { usePathname } from "next/navigation";
import PageBanner from "@/components/ui/PageBanner";

const CategoryPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); 

  const categoryTitles: Record<string, string> = {
    "hat-giong": "Hạt giống",
    "trai-cay": "Trái cây",
    "dac-san": "Đặc sản",
    "thuc-pham-dong-goi": "Thực phẩm đóng gói"
  };

  const categoryTitle = slug ? categoryTitles[slug] || "Danh mục" : "Danh mục";


  return (
    <div>
      <PageBanner title={categoryTitle} bgColor="#7fca90" />
      
    </div>
  );
};

export default CategoryPage;
