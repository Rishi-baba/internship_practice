import { useEffect, useState } from "react";
import Hotel from "./Hotel";
import { NavLink } from "react-router-dom";

const Restcard = () => {
  const [Restdata, setRestdata] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      const Proxyserver = "https://cors-anywhere.herokuapp.com/";
      const SwiggieApi =
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=1098430&submitAction=ENTER";

      const response = await fetch(Proxyserver + SwiggieApi);

      const data = await response.json();

      setRestdata(data.data.cards[2].card.card.info);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full h-100 flex flex-col justify-center items-center  ">
      <NavLink to={`/menu/${Restdata?.id}`}>
        <div className="w-80 bg-white shadow hover:scale-[0.9] rounded-2xl overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${Restdata?.cloudinaryImageId}`}
              alt={Restdata?.name}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent rounded-2xl" />

            <p className="absolute bottom-2 left-3 text-white font-bold text-2xl">
              {Restdata?.aggregatedDiscountInfo?.header}
            </p>
          </div>

          <div className="p-3">
            <h2 className="font-bold text-2xl">{Restdata?.name}</h2>

            <div className="flex gap-3 font-semibold">
              <span>⭐ {Restdata?.avgRatingString}</span>
              <span>{Restdata?.sla?.slaString}</span>
            </div>

            <p className="text-gray-500 truncate">
              {Restdata?.labels?.[2]?.message}
            </p>

            <p className="text-gray-500 truncate">
              {Restdata?.labels?.[1]?.message}
            </p>
          </div>
        </div>
      </NavLink>
      
    </div>
  );
};

export default Restcard;
