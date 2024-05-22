import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../context/CarContext";

function ProductCard({
  id,
  imgSrc,
  carName,
  carPrice,
  emiStart,
  regYear,
  kms,
  fuelType,
  regState,
}) {

  return (
    <div className="bg-[#F3F3F3] rounded-[20px]">
      <div className="p-2 md:p-5">
        <img src={imgSrc} className="rounded-[20px]" />
        <Link to={`/products/car/${id}`}>
          <button className="rounded-full bg-black w-full text-white p-2 taviraj mt-6 text-md	md:text-lg" >
            {carPrice}
          </button>
        </Link>
        <h3 className="text-center font-bold text-lg md:text-xl taviraj mt-5 md:mt-5  mb-2 taviraj">
          {carName}
        </h3>
        <p className="text-center w-full text-[#3C3C3C] text-base font-medium taviraj">
          EMI Starts @ {emiStart}
        </p>
      </div>
      <div className="bg-[#DFDFDF] h-[2px] mt-2"></div>
      <div className="p-2 md:p-5 flex justify-evenly">
        <div>
          <p className="text-[#3C3C3C] font-semibold text-sm md:text-base taviraj text-center ">
            Reg. Year{" "}
          </p>
          <p className="text-black text-center text-sm md:text-base font-semibold taviraj	">
            {regYear}
          </p>
        </div>
        <div>
          <p className="text-[#3C3C3C] font-semibold text-sm md:text-base taviraj text-center ">
            Kms
          </p>
          <p className="text-black text-center text-sm md:text-base font-semibold taviraj	">
            {kms}
          </p>
        </div>
        <div>
          <p className="text-[#3C3C3C] font-semibold text-sm md:text-base taviraj text-center ">
            Fuel Type
          </p>
          <p className="text-black text-center text-sm md:text-base font-semibold taviraj	">
            {fuelType}
          </p>
        </div>
        <div>
          <p className="text-[#3C3C3C] font-semibold text-sm md:text-base taviraj text-center ">
            Reg. State
          </p>
          <p className="text-black text-center text-sm md:text-base font-semibold taviraj	">
            {regState}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
