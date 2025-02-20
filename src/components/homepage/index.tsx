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
        <div id="content" className="content bg-white overflow-x-hidden">
            <div className="container mx-auto px-4">
                <div id="primary" className="content-area row">
                <HeroSection />

                {/* About Us Section */}
                <AboutSection />
                
                <CategorySection />

                {/* Featured Products Section */}
                <FeaturedProducts />

                {/* Testimonials Section */}
                <TestimonialsSection />

                {/* Featured Product Promo Section */}
                <PromoSection />
                {/* Latest News Section */}
                <LatestNews />
                
                </div>
            </div>
        </div>
    );
}

export default HomePage