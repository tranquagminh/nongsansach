"use client"
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import CategorySection from "./CategorySection";
import FeaturedProducts from "./FeaturedProducts";
import TestimonialsSection from "./TestimonialsSection";
import PromoSection from "./PromoSection";
import LatestNews from "./LatestNews";


const HomePage = () => {
    return (    
        <>
            <HeroSection />

            {/* About Us Section */}
            <AboutSection title="Về Chúng tôi"/>
            
            <CategorySection />

            {/* Featured Products Section */}
            <FeaturedProducts />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Featured Product Promo Section */}
            <PromoSection />
            {/* Latest News Section */}
            <LatestNews />
        </>
    );
}

export default HomePage