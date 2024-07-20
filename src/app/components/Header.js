'use client'
import Link from "next/link"
import { navbar } from "../constant"
import { useState } from "react"
import Cart from "./Cart"
import { useCart } from "./CartContext"
import { useSession } from "next-auth/react"
import SignOutBtn from "./SignOutBtn"




export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const toggleCart = () => { setIsCartOpen(!isCartOpen) }
  const { cartItems, removeCartItems } = useCart()
  const {status} = useSession()

  return (
    <div className=" w-full flex justify-center items-center px-16 md:px-9 mt-2 ">
      <div className=" w-full flex flex-row  justify-between items-center ">
        <Link href={"/"} className=" text-lg font-bold w-[150px]">ROOTS</Link>
        <div className="flex flex-row justify-evenly items-center w-[150px]  px-2 gap-3">
          {navbar.map((nav) => (
            <ul key={nav.id} className=" hidden md:block">
              <li><Link href={nav.href} className=" relative text-sm">{nav.title}</Link></li>
            </ul>
          ))}
        </div>
        
        <div className="flex flex-row justify-center items-center gap-3 w-[250px] md:w-[200px]">
          <SignOutBtn/>
          <button className="text-sm relative" onClick={toggleCart}>CART <span> ({cartItems.length}) </span>
            {isCartOpen && (
              <Cart toggleCart={toggleCart} cartItems={cartItems} removeCartItems={removeCartItems} />
            )}
          </button>


        </div>
      </div>
    </div>
  )
}
