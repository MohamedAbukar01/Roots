"use client"
import Link from "next/link"
import { footerLinks } from "../constant"

export default function Footer() {
  return (
    <div className="flex flex-row justify-center items-center mt-14">
      <div className="w-[90%] md:w-1/2 h-[50px] flex flex-row justify-between items-center bg-black rounded-full px-6">
        <div>
          <h1 className=" font-bold text-white text-lg">ROOTS</h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          {footerLinks.map(link => (
          <Link className=" text-white text-xs md:text-sm hover:underline" key={link.id} href={link.href}>{link.title}</Link>
        ))}
        </div>
        
        
      </div>

     
    </div>
  )
}
