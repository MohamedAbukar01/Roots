'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function page() {
  return (
    <div className=' relative h-[200vh]'>
      <div className='flex flex-col justify-center items-center sticky top-0 h-screen'>
        <div className='w-1/2 flex flex-col justify-center items-center text-center gap-4'>
          <motion.h1 initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.10}} className='font-bold text-4xl md:text-6xl'>Welcome to ROOTS: Beard Care Rooted in Nature</motion.h1>
          <motion.p initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.5}} className='text-md md:text-xl'> At <span className='font-bold'>ROOTS</span> , we believe in the power of nature to nurture and transform. Our beard oil is crafted with the highest quality organic ingredients, sourced from the heart of nature to bring you a product that is as pure as it is effective.</motion.p>
        </div>
      </div>


      <div className='flex flex-col  justify-start items-center relative h-screen px-4 bg-black py-4 '>
       <div className=' mb-5'>
        <h1 className=' text-xl md:text-4xl mt-4 text-zinc-100'>WHY ARE WE SO UNIQUE </h1>
       </div>
       <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.15}} className='grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-h-full md:h-full overflow-y-auto md:overflow-hidden px-2 md:p-4 '>
       <motion.div whileHover={{scale: 1.1}}  className=' flex flex-col justify-center items-center text-center shadow-zinc-700 shadow-xl rounded  gap-2 p-4  bg-zinc-100 '>
        <h2 className='font-bold text-xl md:text-2xl'>Organic Ingredients</h2>
        <p className='text-sm'>Our beard oil is made from 100% organic ingredients, free from harmful chemicals and synthetic additives. Each bottle is packed with the natural goodness of botanical oils and essential vitamins, ensuring your beard gets the best care possible.</p>
       </motion.div>
       <motion.div whileHover={{scale: 1.1}} className=' flex flex-col justify-center items-center text-center shadow-zinc-700 shadow-xl rounded  gap-2 p-4  bg-zinc-100 '>
        <h2 className='font-bold text-xl md:text-2xl'>Healthy Beard, Healthy You</h2>
        <p className='text-sm' >We understand that what you put on your skin matters. That's why we've carefully selected ingredients known for their nourishing and healing properties. Our beard oil promotes healthy beard growth, reduces itchiness, and keeps your skin hydrated and soft.</p>
       </motion.div>
       <motion.div whileHover={{scale: 1.1}} className=' flex flex-col justify-center items-center text-center shadow-zinc-700 shadow-xl rounded gap-2 p-4  bg-zinc-100 '>
        <h2 className='font-bold text-xl md:text-2xl'>Eco-Friendly and Sustainable</h2>
        <p className='text-sm'>ROOTS is committed to sustainability. Our ingredients are responsibly sourced, and our packaging is eco-friendly, reducing our environmental footprint. When you choose ROOTS, you're not just caring for your beard – you're caring for the planet.</p>
       </motion.div>
       <motion.div whileHover={{scale: 1.1}} className=' flex flex-col justify-center items-center text-center shadow-zinc-700 shadow-xl rounded gap-2 p-4  bg-zinc-100 '>
        <h2 className='font-bold text-xl md:text-2xl'>Pure and Potent</h2>
        <p className='text-sm'>Each drop of ROOTS beard oil is rich in nutrients that strengthen your beard from root to tip. Our unique blend includes organic jojoba oil, argan oil, and vitamin E, all known for their ability to promote a fuller, healthier beard.</p>
       </motion.div>
       <motion.div whileHover={{scale: 1.1}} className=' flex flex-col justify-center items-center text-center shadow-zinc-700 shadow-xl rounded  gap-2 p-4  bg-zinc-100 '>
        <h2 className='font-bold text-xl md:text-2xl'>Nature’s Best</h2>
        <p className='text-sm'>Our ingredients are handpicked from the best organic farms, ensuring that each bottle of ROOTS beard oil is packed with nature’s best. From the soothing properties of lavender to the invigorating scent of cedarwood, our beard oil is a sensory delight that keeps your beard looking and feeling its best.</p>
       </motion.div>
       <motion.div whileHover={{scale: 1.1}} className=' flex flex-col justify-center items-center text-center shadow-zinc-700 shadow-xl rounded gap-2 p-4  bg-zinc-100 '>
        <h2 className='font-bold text-xl md:text-2xl'>Luxurious Scent Profiles</h2>
        <p className='text-sm'>Enjoy the rich, natural scents of ROOTS Beard Oil, crafted from carefully curated botanical extracts like soothing lavender and refreshing cedarwood, providing a pleasing aroma that lasts all day.</p>
       </motion.div>
      
       </motion.div>
      </div>

      <div className='relative h-screen mt-72'>
        <div className='flex flex-col justify-center items-center text-center '>
          <div className='w-[60%] flex flex-col justify-center items-center gap-8'>
            <motion.h1 initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.10}} className='font-bold text-6xl'>Join the ROOTS Community</motion.h1>
            <motion.p initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.5}}  className='text-xl text-center'>Join a community of men who value quality, purity, and sustainability. At ROOTS, we are more than just a beard oil company; we are a movement towards healthier grooming practices and a greener planet. Experience the difference with ROOTS beard oil, where organic meets effective, and nature meets nurture.</motion.p>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.5}} className='flex flex-row justify-center items-center gap-2 mb-10'>
              <input type='email' placeholder='Email' className='border rounded-full px-4 py-2 '/>
              <button className='font-bold rounded-full border px-4 py-2  hover:bg-black hover:text-white'>Subscribe</button>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  )
}
