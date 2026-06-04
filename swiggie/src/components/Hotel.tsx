// import React from 'react'

const Hotel = ({restInfo}:any) => {
  return (
    <div>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+ restInfo.info.cloudinaryImageId} alt="" />
    </div>
  )
}

export default Hotel