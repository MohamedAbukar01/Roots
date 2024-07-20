import Image from "next/image";

export default function Delivery({ deliveryService, setShippingPrice }) {
  
  return (
    <div className="flex flex-col justify-start items-start gap-4">
      {deliveryService.map((service) => (
        <div
          key={service.id}
          onClick={() => setShippingPrice(service.price)}
          className="flex flex-row justify-between items-center px-4 py-4 w-full bg-white border rounded hover:border-zinc-700 cursor-pointer"
        >
          <div className="flex flex-col justify-start items-start gap-2">
            <Image src={service.img} alt={service.name} height={80} width={80} />
            <p >{service.delivery}</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <p>{service.price}</p>
            <input type="checkbox" className="w-5 h-5 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

