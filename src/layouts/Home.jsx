import HeroSection from '../pages/HeroSection';
import ProductGrid from '../components/products/ProductCard';
import CategoryMenu from '../components/CategoryMenu';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
    return (
        <div className="bg-offwhite">
            <HeroSection />
            <FeaturedProducts />

        </div>
    );
};

export default Home;