// import About from "@/components/About";
// import Contact from "@/components/Contact";
import CustomCabinetShowcase from "@/components/Craft";
// import MaterialsAndFinishings from "@/components/Material";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import Gallery from "@/components/Gallery";
// import Hero from "@/components/Hero";
import Contact from "@/components/New_Contct";
import HorizontalGallery from "@/components/New_gallery";
import Hero from "@/components/New_hero";
import ServicesShowcase from "@/components/New_offert";
import OrderSteps from "@/components/OrderSteps";
// import Services from "@/components/Services";
import TextWall from "@/components/TextWall";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <Hero />
      <CustomCabinetShowcase />
      {/* <About /> */}
      {/* <Services /> */}
      <ServicesShowcase />
      {/* <Gallery /> */}
      <HorizontalGallery />
      {/* <MaterialsAndFinishings /> */}
      <OrderSteps />
      <TextWall />
<Contact />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
}
