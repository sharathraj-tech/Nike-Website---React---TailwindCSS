import {FaCartPlus} from 'react-icons/fa'

const AddToCartButton = () => {
  return (
    <button className='group w-full py-4 px-4 border-2 border-coral-red bg-coral-red rounded-md flex justify-center align-middle text-white font-montserrat hover:bg-white hover:text-coral-red'>
        <FaCartPlus className='mr-3 text-2xl'/> Add Item to Cart
    </button>
  )
}

export default AddToCartButton