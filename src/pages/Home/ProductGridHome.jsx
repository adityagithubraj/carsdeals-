import React, { useState } from "react";

import filter from "../../assets/filter.svg";
import ProductCard from "../../components/ProductCard";
import { carDetails } from "../../constants/CarDetails";
import FilterModal from "./FilterModal";

function ProductGridHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   Initialize form data here
  //   Example:
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // Example: sendFormData(formData);
    setIsModalOpen(false); // Close modal after form submission
  };

  const sortFilters = ["Price Low to High", "Price High to Low", "Price"];

  return (
    <>
      <div className="flex justify-end gap-x-4 md:gap-x-8 my-10">
        <div className="flex justify-center items-center">
          <span className="lg:text-2xl text-md  text-[#717171]">Filter</span>
          <img
            src={filter}
            className="ml-2 md:ml-4 border-2 border-[#717171] rounded-md  lg:px[13px] lg:py-[8px] p-[8px] cursor-pointer lg:w-[40px] w-[35px]"
            onClick={showModal}
          />
        </div>
        <div className="flex justify-center items-center gap-x-1 md:gap-x-5">
          <span className="lg:text-2xl text-md text-[#717171]">Sort By</span>
          <select className="lg:text-xl text-sm  text-[#717171] border-2 border-[#717171] rounded-md py-1 px-[5px]  price-filter">
            {sortFilters.map((item, index) => (
              <option key={index} className=" lg:text-md text-lg text-[#717171]">
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {carDetails.map((item, index) => {
          return (
            <ProductCard
              key={index}
              imgSrc={item.img}
              carName={item.cname}
              carPrice={item.carPrice}
              emiStart={item.emiStartAmnt}
              regYear={item.regYear}
              kms={item.kms}
              fuelType={item.fuelType}
              regState={item.regState}
            />
          );
        })}
      </div>
      <div className="flex justify-center w-full mt-5"> 
        <button className="rounded-full bg-black text-white py-1 px-7 taviraj mt-6 text-md md:text-lg md:py-2">
          View All
        </button>
      </div>

      <FilterModal onFormSubmit={handleSubmit} visibility={isModalOpen} cancelHandler={handleCancel}/>
    </>
  );
}

export default ProductGridHome;
