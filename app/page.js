import EmblaCarousel from "./components/landingpage/EmblaCarousel";
import Clients from "./components/landingpage/Clients";
import Slide2 from "./components/landingpage/Slide2";
import Stats from "./components/landingpage/Stats";
import Slide3 from "./components/landingpage/Slide3";
import Last from "./components/landingpage/Last";
import ContactUs from "./components/landingpage/ContactUs";
import Nav from "./components/nav";
export default function Home() {
const OPTIONS = { loop: true }
  return (
    <div className="w-screen h-full flex flex-col md:py-[85px] max-md:py-[60px] flex-grow-[1] justify-start items-center pb-2 ">
      <Nav/>
      <EmblaCarousel  options={OPTIONS} />
      <Clients/>
      <Slide2/>
      <Stats/>
      <Slide3/>
      <ContactUs/>
      <Last/>
      
    </div>

  );
}
