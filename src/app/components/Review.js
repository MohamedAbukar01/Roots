"use client"
import review from "../../../public/Stars.png"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Review() {
  return (
    <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.10}} whileHover={{scale:0.9}} className=" h-screen overflow-hidden flex flex-col justify-center items-center mt-5">
      <div className=" w-full md:w-1/2 flex flex-col justify-center items-center gap-5">
        <div>
          <Image src={review} alt={'Image of review stars'}
            height={80} width={80}
          />
        </div>
        <h4 className=" text-sm md:text-base text-center">"I've tried many beard oils in the past, but none compare to this one. It leaves my beard feeling soft and nourished, and the scent is amazing."</h4>
        <p className=" text-sm md:text-base font-bold">James Smith</p>
      </div>
    </motion.div>
  )
}
