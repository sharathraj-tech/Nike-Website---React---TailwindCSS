import { useState } from "react"

import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-containe"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 dark:bg-gray-700 dark:text-white ">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> <span className="dark:text-white">Shoes</span>
        </h1>
        <p className="font-montserrat dark:text-gray-400 text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconURL={arrowRight}  />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stat,index)=>(
              <div key={index}>
                <p className="text-4xl font-palanquin font-extrabold dark:text-white">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray dark:text-gray-400">{stat.label}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} width={610} height={500} className="z-10 object-contain relative"/>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe,index)=>(
            <div key={index}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe)=>setBigShoeImg(shoe)} bigShoeImage={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero