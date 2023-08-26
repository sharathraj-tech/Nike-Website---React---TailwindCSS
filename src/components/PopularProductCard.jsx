import { star } from "../assets/icons"
import AddToCartButton from "./AddToCartButton"
import {FaHeart} from 'react-icons/fa'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full hover:shadow-xl  p-3 hover:rounded-md">
      <div className="flex justify-center">
      <img
    src={imgURL} 
    alt={name}
    className="w-[280px] h-[280px] "
    />
      </div>
    
    <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">4.5</p>
    </div>
    <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
      <div className="flex justify-center mt-5 gap-1">
        <AddToCartButton/>
        <button className="bg-white border-2 border-coral-red px-3 py-2 rounded-md hover:bg-coral-red group"><FaHeart className="text-coral-red group-hover:text-white"/></button>
      </div>
    </div>
  )
}

export default PopularProductCard