import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
    </main>
  );
}
