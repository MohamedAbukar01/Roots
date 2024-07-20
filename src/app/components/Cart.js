'use client '
import Image from "next/image"
import { useRouter } from "next/navigation"


export default function Cart({ toggleCart, cartItems, removeCartItems }) {
  const router = useRouter()

  const totalAmount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  return (
    <div className=" border bg-white w-[300px] h-[500px] z-10 absolute top-full right-0 shadow-md rounded-lg">
      <div className=" flex flex-col justify-between px-4">
        <div className="flex flex-row justify-between items-center mt-2">
          <h3 className=" text-sm font-bold">ROOTS</h3>
          <button onDoubleClick={toggleCart} className=" text-sm font-bold border rounded-full px-4 py-1">Close</button>
        </div>

        <div className="flex flex-col justify-center items-start  w-full h- h-[350px] overflow-y-auto mt-2 rounded  text-base px-2 gap-2 ">
          {cartItems.map((product) => (
            <div key={product.id} className="  w-full flex flex-row justify-center items-center p-2 gap-2 shadow-sm rounded" >
              <Image src={product.img} alt={product.title} height={70} width={70} />
              <h3 className=" text-xs font-bold text-start">{product.title}</h3>
              <p className=" text-xs text-start ">{product.price}</p>
              <button onClick={() => removeCartItems(product)}
                className=" border-l h-full px-2 hover:bg-slate-300 rounded ">X</button>
            </div>
          ))}
          {cartItems.length === 0 && (
            <div className=" w-full flex-col justify-center items-center">
              <h1>Empty</h1>
            </div>

          )}
        </div>
        <div className=" mt-8">
          <button onClick={()=>{router.push('/checkout')}} className=" bg-black px-[40px] py-[7px] font-bold text-white w-full rounded-full mt-2">Check Out</button>
        </div>
      </div>

    </div>

  )
}
