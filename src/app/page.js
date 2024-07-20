import Hero from "../app/components/Hero"
import BrandInfo from "./components/BrandInfo"
import LearnMore from "./components/LearnMore"
import Product from "./components/Product"
import Review from "./components/Review"

export default function page() {
  return (
    <div className=" container mx-auto px-4 ">
      <Hero/>
      <Product/>
      <BrandInfo/>
      <LearnMore/>
      <Review/>
      
    </div>
  )
}
