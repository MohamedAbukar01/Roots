import Button from "../components/Button"
import Image from "next/image";
import img_1 from "../../../public/IMG1.png"
import img_2 from "../../../public/IMG2.png"
import img_3 from "../../../public/IMG3.png"
import img_4 from "../../../public/IMG4.png"
import Footer from "./Footer";


export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center ">

      <div  className=" flex flex-col justify-center items-center gap-2">
        <h1 className=" text-center text-2xl md:text-5xl mt-5 w-[80%] md:w-[60%]">Unleash your beard's full potential with <span className=" font-bold">ROOTS</span>. Nurture your roots and elevate your style today !</h1>
        <Button comment='BUY' href="/store" style='text-white font-bold  px-16 py-2 bg-black  rounded-full m-5 ' />
      </div>
      

      <div className="grid grid-cols-2 md:grid-cols-4 items-end ">
        <div>
          <p className=" text-xs md:text-base sm:order-1"><span className=" font-bold">Chemical-Free:</span>Free from synthetic additives and harsh chemicals.</p>
          <div className=" relative w-[200px] md:w-[300px] h-[200px] md:h-[320px]">
            <Image className=" bg-cover rounded absolute" src={img_1} alt="Image of beard oil" fill />
          </div>
        </div>

        <div >
          <p className=" text-xs md:text-base "><span className=" font-bold">Eco-Friendly:</span> 100% recyclable packaging to reduce your carbon footprint.</p>
          <div className=" w-[200px] md:w-[300px] h-[200px] md:h-[260px] relative">
            <Image className=" bg-cover rounded absolute" src={img_2} alt="Image of beard oil" fill />
          </div>
        </div>

        <div >
          <p className="text-xs md:text-base"><span className="font-bold">Natural Scent:</span> Subtle, fresh scent derived from natural ingredients.</p>
          <div className=" w-[200px] md:w-[300px] h-[200px] md:h-[260px] relative">
            <Image className="bg-cover rounded absolute" src={img_3} alt="Image of beard oil" fill />
          </div>

        </div>

        <div>
          <p className="text-xs md:text-base sm:order-2"> <span className="font-bold">Pure Ingredients: </span>Sourced directly from organic farms for unmatched purity.</p>
          <div className=" relative w-[200px] md:w-[300px] h-[200px] md:h-[320px]">
            <Image className="bg-cover rounded absolute" src={img_4} alt="Image of beard oil" fill />
          </div>

        </div>
      </div>
    </div>
  );
}
