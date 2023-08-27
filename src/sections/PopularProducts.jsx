import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const PopularProducts = () => {
  const sliderSettings={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    
  };

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold dark:text-white">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-gray-400">Experience top-notch uqality anbd style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className="mt-16 mx-3">
        <Slider {...sliderSettings}>
        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product}/>
        ))}
        </Slider>
      </div>
    </section>
  )
}

export default PopularProducts