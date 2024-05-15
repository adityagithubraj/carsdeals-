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
      <div className="flex justify-end gap-x-10 my-14">
        <div className="flex justify-center items-center">
          <span className="text-2xl text-[#717171]">Filter</span>
          <img
            src={filter}
            className="ml-4 border-2 border-[#717171] rounded-md py-[8px] px-[12px] cursor-pointer"
            onClick={showModal}
          />
        </div>
        <div className="flex justify-center items-center">
          <span className="text-2xl text-[#717171]">Sort By</span>
          <select className="text-xl text-[#717171] border-2 border-[#717171] rounded-md py-1 px-[10px] ml-4 price-filter">
            {sortFilters.map((item, index) => (
              <option key={index} className="text-xl text-[#717171]">
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
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
      <div className="flex justify-center w-full mt-12">
        <button className="rounded-full bg-black text-white py-3 px-10 taviraj mt-6 text-xl">
          View All
        </button>
      </div>

      <FilterModal onFormSubmit={handleSubmit} visibility={isModalOpen} cancelHandler={handleCancel}/>
    </>
  );
}

export default ProductGridHome;