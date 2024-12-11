import Image from "next/image";
import EmblaCarousel from "./components/EmblaCarousel";
export default function Home() {
const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
console.log(SLIDES)
  return (
    <div className="w-screen h-screen  flex flex-col justify-center items-center  ">
      <div className="w-full  md:h-[85px] max-md:h-[60px] "></div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
