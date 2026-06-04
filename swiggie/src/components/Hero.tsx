// import React from 'react'
import Card from './Card'


const Hero = () => {
  return (
   <div className="mt-12 flex flex-col items-center px-4">
      <div className="text-white w-full max-w-4xl">
        
        <h1 className="text-3xl md:text-5xl text-wrap font-bold text-center leading-tight">
          Order food & groceries. Discover <br /> best restaurants. Swiggy it!
        </h1>

        <div className="mt-8 flex flex-col  w-215 md:flex-row gap-4">
          <input
            className="w-full md:w-80 bg-white text-black p-5 rounded-xl"
            placeholder="Enter your delivery location"
          />

          <input
            className="flex-1 bg-white w-100  text-black p-5 rounded-xl"
            placeholder="Search for restaurant, item or more"
          />
        </div>

        <div className="mt-20 px-4">
          <div className="flex flex-row justify-center gap-6 mt-12 px-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero