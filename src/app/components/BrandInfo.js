import banner from '../../../public/banner-2.png'
import Image from 'next/image'


export default function BrandInfo() {
  return (
    <div>
      <div className=' relative flex flex-col justify-center items-center w-full'>
        <Image src={banner} 
        alt='Image of beard oil in water'
        width={1200} height={800}
        className=' rounded hover:opacity-90 '/>
        <p className='absolute bottom-[68%] md:bottom-1/2 right-4 md:right-20 md:text-lg w-52 text-base'>
        <span className=' font-bold text-base md:text-lg'>Trusted Choice:</span> Over 10,000 bottles sold nationwide.</p>
      </div>
    </div>
  )
}
