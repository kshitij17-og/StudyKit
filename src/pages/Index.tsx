import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VisionMission from "@/components/VisionMission";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <VisionMission />
      <Team />
      <Timeline />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
