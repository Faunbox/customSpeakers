import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import HorizontalGallery from "@/components/New_gallery";
import OrderSteps from "@/components/OrderSteps";
import Services from "@/components/Services";
import TextWall from "@/components/TextWall";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      {/* <HorizontalGallery /> */}
      <OrderSteps />
      <TextWall />
      <Contact />
      <Footer />
    </main>
  );
}
