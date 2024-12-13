import Image from "next/image";
import EmblaCarousel from "./components/EmblaCarousel";
import Clients from "./components/Clients";
export default function Home() {
const OPTIONS = { loop: true }
  return (
    <div className="w-screen h-screen  flex flex-col justify-start items-center  ">
      <div className="w-full  md:h-[85px] max-md:h-[60px]"></div>
      <EmblaCarousel  options={OPTIONS} />
      <Clients/>
    </div>
  );
}
