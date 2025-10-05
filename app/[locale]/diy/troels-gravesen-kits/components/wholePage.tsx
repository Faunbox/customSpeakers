import Hero from "./Hero";
import Benefits from "./Benefits";
import Faq from "./Faq";
import Contact from "./Contact";
import TroelsTextWall from "./Text-wall";
// import Gallery from "./Gallery";

export default function TroelsContent() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-black">
      <div className="w-full mx-auto ">
        <Hero />
        <TroelsTextWall />
        {/* <Gallery /> */}
        <Benefits />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
