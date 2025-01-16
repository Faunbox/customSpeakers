import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OrderSteps from "@/components/OrderSteps";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <OrderSteps />
      <Contact />
      <Footer />
    </main>
  );
}
