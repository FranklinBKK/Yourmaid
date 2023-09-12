import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="card indicator transition-transform duration-150 ease-in-out lg:w-56 md:w-60 sm:w-64 bg-neutral-content shadow-xl hover:scale-105">
      <figure>
        {/* <div className="absolute mt-1 self-start badge badge-md badge-secondary">
          Up to Snuff!
        </div> */}
        <Image src="/maid.jpg" width={300} height={0} alt="Maid" />
      </figure>
      <div className="card-body flex-row justify-evenly items-baseline py-3">
        <div className="text text-md font-bold">1,500฿/h</div>
        <div className="card-actions">
          <button className="btn btn-primary btn-md">Book!</button>
        </div>
      </div>
      <span className="indicator-item mt-4 mr-10 badge badge-secondary z-0">Real</span>
    </div>
  );
};

export default Card;
