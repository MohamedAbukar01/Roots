'use client'
import Delivery from "../components/Delivery";
import DropDown from "../components/DropDown";
import { deliveryService } from "../constant"
import { useCart } from "../components/CartContext"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function page() {
  const { cartItems, removeCartItems } = useCart()
  const [shippingPrice, setShippingPrice] = useState(0.00)
  const [total, setTotal] = useState(0);
  const router = useRouter()
  const { data: session, status } = useSession()

  const parsPrice = (price) => {
    const match = price.match(/\$([\d.]+)/)
    return match ? parseFloat(match[1]) : 0
  }

  const calculateTotal = (item) => {
    return item.reduce((total, item) => {
      return total + parsPrice(item.price)
    }, 0)
  }

 useEffect(() => {
    setTotal(calculateTotal(cartItems) + parseFloat(shippingPrice))
  }, [cartItems, shippingPrice])

  useEffect(()=>{
   if (status === 'unauthenticated') {
    router.push('/login')
  }
  },[status, router])

  if (status === 'loading') {
    return <div className="flex flex-col justify-center items-center h-screen">
      <div role="status">
        <svg aria-hidden="true" class="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>

    </div>
  }
 
  if (!session || !session.user) {
    return <div>
      Please log in to view this page.
      </div>
  }

  return (
    <div className=" container mx-auto px-6 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
        <div className=" order-2 w-full h-full flex flex-col justify-center items-center rounded  gap-5 p-6 bg-black ">

          <form className=" w-full" >
            <div className=" flex flex-col justify-start items-start gap-2">
              <h1 className=" font-bold text-4xl text-white">WELCOME {session.user.name} </h1>
              <p className=" text-base text-white ">Nice selection! Just a few clicks away from enjoying the benefits of our beard oil</p>
            </div>

            <div className="mt-10 flex flex-col  gap-2">
              <div>
                <h2 className="order-1 font-bold text-white  text-xl">DELIVERY ADDRESS</h2>
              </div>

              <div className=" flex flex-row gap-2">
                <div className="flex flex-col w-1/2 justify-center items-start gap-2">
                  <label className=" text-base text-white ">First Name</label>
                  <input type="string" placeholder="First Name" className=" w-full px-4 py-2 rounded-full"></input>
                </div>
                <div className="flex flex-col w-1/2 justify-center items-start gap-2">
                  <label className=" text-base text-white ">Last Name</label>
                  <input type="string" placeholder="Last Name" className=" w-full px-4 py-2 rounded-full"></input>
                </div>
              </div>

              <div>
                <DropDown />
              </div>

              <div className="flex flex-col justify-center items-start gap-2">
                <label className=" text-white  text-base">Address</label>
                <input type="string" placeholder="Enter your address" className="px-4 py-2 rounded-full w-full"></input>
              </div>

              <div className=" flex flex-row gap-2">
                <div className="flex flex-col w-1/2 justify-center items-start gap-2">
                  <label className="text-white  text-base">City</label>
                  <input type="string" placeholder="City" className=" w-full px-4 py-2 rounded-full"></input>
                </div>
                <div className="flex flex-col w-1/2 justify-center items-start gap-2">
                  <label className=" text-white  text-base">Postcode</label>
                  <input type="string" placeholder="Postcode" className=" w-full px-4 py-2 rounded-full"></input>
                </div>
              </div>

              <div className="flex flex-col justify-start item-start">
                <div className="border-b border-zinc-200 mt-5 w-full mb-5 "></div>
                <div className="mb-5"><h2 className="order-1 font-bold text-white text-xl">SHIPPING METHODS</h2></div>
                <Delivery deliveryService={deliveryService} setShippingPrice={setShippingPrice} />

              </div>
              <div className="w-full mt-5">
                <button className=" hover:bg-white hover:text-black bg-black text-white w-full border rounded-full px-5 py-4 ">CONTINUE TO PAYMENT</button>
              </div>
            </div>
          </form>
        </div>



        <div className=" flex flex-col justify-start items-start gap-2 w-full h-full">
          <div>
            <h1 className=" font-bold text-6xl">CHECKOUT</h1>
          </div>

          <div className="  w-full h-[800px] overflow-y-auto px-4 py-4 rounded">
            <h1 className="  font-bold text-lg">DETAIL PRODUCT</h1>

            <div className="flex flex-col justify-start items-start gap-4 mt-5">
              {cartItems.map((product) => (
                <div key={product.id} className=" w-full flex flex-row justify-between items-center p-2 gap-2 shadow-sm rounded border" >
                  <Image src={product.img} alt={product.title} height={100} width={100} />
                  <div className="flex flex-col justify-start items-start gap-2">
                    <h3 className=" text-lg font-bold text-start">{product.title}</h3>
                    <p className="text-sm">{product.description}</p>
                    <p className=" text-base font-bold ">{product.price}</p>
                  </div>
                  <div className=" flex flex-row justify-center items-center px-1 h-[100px] border-l">
                    <button onClick={() => removeCartItems(product)}
                      className=" h-full px-2 rounded ">X</button>
                  </div>

                </div>
              ))}
            </div>

          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2 px-4 py-4">
            <div className="flex flex-row justify-between items-center border-b w-full">
              <p className="text-lg">SHIPPING</p>
              <p className="font-bold text-lg">{`$ ${shippingPrice}`}</p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className=" font-bold text-lg">TOTAL</p>
              <p className="font-bold text-lg">{`$${total}`}</p>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}
