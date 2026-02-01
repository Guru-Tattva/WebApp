import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AnalyticsSection from "@/components/AnalyticsSection";
import NearestReachSection from "@/components/NearestReachSection";
import BenefitsTimeline from "@/components/BenefitsTimeline";
import EventsSection from "@/components/EventsSection";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroCarousel />
        <AnalyticsSection />
        <NearestReachSection />
        <BenefitsTimeline />
        <EventsSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}
