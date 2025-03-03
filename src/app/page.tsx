import About from "./components/About";
import BannerSection from "./components/BannerSection";
import Contact from "./components/common/Contact";
import Faq from "./components/common/Faq";
import HeroSection from "./components/common/HeroSection";
import OurClients from "./components/OurClients";
import OurExpertise from "./components/OurExpertise";
import OurServices from "./components/OurServices";
import OurServices2 from "./components/OurServices2";

export default function Home() {
  return (
    <div>
      <HeroSection
        title={"AWESOME"}
        description={
          "We turn creative ideas into reality with stunning and functional designs. From custom websites to innovative digital solutions, we make sure each project provides outstanding results, blending style and purpose smoothly."
        }
        link={"/"}
        image={"/assets/bg/bannerHome"}
      />
      <About />
      <OurServices />
      <BannerSection />
      <OurServices2 />
      <OurClients />
      <OurExpertise />
      <Faq />
      <Contact />
    </div>
  );
}
