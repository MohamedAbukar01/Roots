'use client'

import { useState } from "react";
import Image from "next/image";
import { productList } from "../constant";
import { useCart } from "./CartContext";

export default function Product() {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const { addToCart } = useCart()

  const handleMouseEnter = (id) => {
    setHoveredProductId(id);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };


  return (
    <div className="p-8">
      <p className="text-base  font-bold  mb-6">TOP SELLING PRODUCTS</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {productList.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded p-4">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={product.img}
                alt={product.title}
                width={285}
                height={356}
                className="rounded"
              />
              {hoveredProductId === product.id && (
                <button className=" w-[80%] md:w-1/2 absolute bottom-9 md:bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-xs md:text-sm  text-white px-2 py-1 rounded-full" onClick={() => addToCart(product)}>
                  ADD TO CART
                </button>
              )}
            </div>
            <div className="flex flex-col justify-start items-start w-full max-w-[250px] gap-1 mt-4 ">
              <h3 className="font-bold text-xs md:text-base ">{product.title}</h3>
              <p className="text-sm"> <span className="font-bold">Ingredients:</span>{product.description}</p>
              <p className="font-bold text-sm">Price:{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
