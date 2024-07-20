"use client"
import Button from './Button'
import Image from 'next/image'
import secondBanner from "../../../public/banner.png"
import { motion } from "framer-motion";

export default function LearnMore() {
  return (
    <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.10}} className=' flex flex-col justify-center items-center mt-5'>
      <div className='flex flex-col justify-center items-center w-full md:w-1/2 text-center gap-5 '>
        <h3 className=' text-lg md:text-xl font-bold '>Rooted in Nature: Our Story</h3>
        <p className=' text-sm md:text-base'>Roots Beard Oil started on a small family farm, where we discovered the power of organic ingredients. Passionate about sustainable living, we use fresh, farm-sourced ingredients and 100% recyclable packaging.
          At Roots, we believe in natural grooming and caring for the earth. Our oils are free from synthetic additives, offering pure, eco-friendly care for your beard. Join us in nurturing your roots with nature's best.</p>
        <Button comment="Learn More" href={"/learnMore"} style=' font-black px-16 py-2 text-base rounded-full bg-white text-black border hover:bg-black hover:text-white ' />
      </div>
      <div className='mt-5 relative'>
        <Image alt='Beard oil bottle' src={secondBanner}
          width={1200} height={800}
          className='rounded' />
        <motion.p whileHover={{scale:1.1}} className=' absolute top-[15%] md:top-[45%] left-5 md:left-12 text-base md:text-xl w-52'><span className=' font-bold'>Customer Satisfaction:</span> 95% of users report healthier, softer beards</motion.p>
      </div>

    </motion.div>
  )
}
