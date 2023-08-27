import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customerName,feedback,rating}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]" />
        <p className="info-text mt-6 max-w-sm text-center dark:text-gray-200">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
<img src={star} alt="" width={24} height={24} className="object-contain m-0" />
<p className="text-xl font-montserrat text-slate-gray dark:text-gray-300">({rating})</p>
        </div>
        <h3 className="font-palanquin mt-1 text-3xl text-center font-bold dark:text-white">{customerName}</h3>
    </div>
  )
}

export default ReviewCard