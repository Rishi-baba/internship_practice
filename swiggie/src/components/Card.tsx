const Card = () => {
  return (
    <a
      className="
        relative
        w-[320px]
        h-55
        bg-[#f2f2f5]
        rounded-[28px]
        overflow-hidden
        shadow-md
        p-6
        cursor-pointer
        transition-transform
        duration-300
        hover:scale-105
      "
    >
      {/* Heading */}
      <h2
        className="
          text-[32px]
          leading-[0.9]
          font-black
          text-[#3d3d4e]
        "
      >
        FOOD
        <br />
        DELIVERY
      </h2>

      {/* Subtitle */}
      <p
        className="
          mt-1
          text-[12px]
          font-medium
          tracking-wide
          text-[#8b8d97]
        "
      >
        FROM RESTAURANTS
      </p>

      {/* Offer Badge */}
      <div
        className="
          inline-block
          mt-4
          px-3
          py-1
          rounded-lg
          bg-[#f8e7d4]
        "
      >
        <span
          className="
            text-orange-500
            font-bold
            text-sm
          "
        >
          UPTO 60% OFF
        </span>
      </div>

      {/* Arrow Button */}
      <button
        className="
          absolute
          left-6
          bottom-6
          w-10
          h-10
          rounded-full
          bg-orange-500
          text-white
          text-xl
          flex
          items-center
          justify-center
        "
      >
        →
      </button>

      {/* Image */}
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
        alt="Food"
        className="
          absolute
          bottom-0
          right-0
          w-32.5
          object-contain
        "
      />
    </a>
  );
};

export default Card;
