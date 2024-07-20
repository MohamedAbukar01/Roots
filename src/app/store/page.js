'use client'
import Image from "next/image"
import { useState } from "react"
import { product } from "../constant"
import {useCart} from "../components/CartContext"

export default function Page() {
  const [showCart, setShowCart] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(product.beardOil)
  const {addToCart} = useCart()
  

  const mouseEnter = (id) => {setShowCart(id)};
  const mouseLeave = () => {setShowCart(null)};

  const handleChanges = (productKey) => {
    setSelectedProduct(product[productKey])

  }

  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-rows-1 md:grid-cols-3  mt-5">
        <div className="md:border-r flex flex-row md:flex-col justify-center items-start gap-2">
          <div className=" flex flex-col justify-center items-end md:items-center ml-2 mt-3 ">
            <h1 className=" text-xs md:text-md font-bold mb-2 ">SELECT PRODUCTS</h1>
          </div>
          <button className= "border px-[21px] py-[7px] rounded-full text-sm md:text-base font-bold" onClick={()=> handleChanges("beardOil") }> Beard Oil </button>
          <button className="border px-[21px] py-[7px] rounded-full text-sm md:text-base font-bold" onClick={()=> handleChanges('beardWax') }>Beard Wax </button>
          <button className="border px-[21px] py-[7px] rounded-full text-sm md:text-base font-bold" onClick={()=> handleChanges('beardBalm') }>Beard Balm </button>
        </div>

        <div className="flex flex-col md:justify-evenly justify-center md:items-start items-center px-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <p className=" text-sm mb-5 mt-5">Top Selling Product</p>
            <h3 className="font-bold text-3xl">{selectedProduct[0].title}</h3>
            <p className="text-base"><span className="font-bold">Ingredients:</span>{selectedProduct[0].description}</p>
            <p className="text-lg"><span className="font-bold">Price:</span>{selectedProduct[0].price}</p>
          </div>
          <div className="flex flex-row justify-start md:items-start items-center gap-2">
            <p className="font-bold text-sm">High-Quality Ingredients</p>
            <p className="font-bold text-sm">Expertly Formulated</p>
          </div>
        </div>

        <div className="flex flex-row justify-center md:justify-end items-end">
          <Image src={selectedProduct[0].img} alt={'Picture of product'} height={350} width={350} className="rounded" />
        </div>
      </div>

      {/* Second Col */}
      <div>
        <p className="font-bold text-base md:mb-5 mt-5 ">{selectedProduct[0].category}</p>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {selectedProduct.map((product) => (
              <div key={product.id} className="border flex flex-col justify-center items-center rounded p-4 shadow-md bg-white relative">
                <div
                  className="flex flex-col justify-center items-center"
                  onMouseEnter={() => mouseEnter(product.id)}
                  onMouseLeave={mouseLeave}
                >
                  <Image src={product.img} alt={product.title} height={250} width={250} className="rounded" />
                  {showCart === product.id && (
                    <button className="w-[70%] md:w-1/2 absolute bottom-66 md:bottom-56 left-1/2 transform -translate-x-1/2 bg-black text-xs md:text-sm  text-white px-2 py-1 rounded-full"
                    onClick={()=> addToCart(product)}>
                      ADD TO CART
                    </button>
                  )}
                </div>
                <div className="flex flex-col justify-start items-start gap-2 mt-4">
                  <h3 className="font-bold text-base">{product.title}</h3>
                  <p className="text-sm">{product.description}</p>
                  <p className="font-bold text-base">Price: {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
