import CategorySection from '@/components/sections/home/CategorySection';
import HeroSection from '@/components/sections/home/HeroSection';
import InfoSection from '@/components/sections/home/InfoSection';
import LogoSection from '@/components/sections/home/LogoSection';
import PopularProductSection from '@/components/sections/home/PopularProductSection';

const Home = function () {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <CategorySection />
      <InfoSection />
      
      <PopularProductSection />
    </>
  );
};

Home.layout = 'base';
export default Home;
