// import React from 'react'
import data from '../utils/data'
import FoodCard from './FoodCard'

const Foodoption = () => {
  return (
    <div className='w-[80%] flex flex-wrap mx-auto '>
      {
        data.map((data)=><FoodCard key={data.id} data={data}></FoodCard>)
      }
    </div>
  )
}

export default Foodoption