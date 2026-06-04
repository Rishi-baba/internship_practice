// import React from 'react'
type FoodCardProps = {
  data: {
    id: string;
    imageId: string;
    action: {
      link: string;
      text: string;
      type: string;
    };
  };
};

const FoodCard = ({data}: FoodCardProps) => {
  return (
    <a href={data.action.link} className="mt-10  ">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${data.imageId}`}
          alt={data.action.text}
          className="w-40 h-50 object-center "
          
        />
    </a>
  )
}

export default FoodCard