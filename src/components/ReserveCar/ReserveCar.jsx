import React from "react";

// import ProductCard from '../../pages/Product/ProductCard.jsx';
import ProductCard from '../../components/ProductCard'
import { carDetails } from "../../constants/CarDetails.js";
import { Modal, Button } from "antd";

const ReserveCar = ({ isModalOpen, closeModal }) => {
  const modalSize = true;
  const modalData = [
    "Pay 2 Lacs & Reserve Car for 24 hours",
    "Pay 10% & get confirmed booking",
    "Pay 100% & get car delivered home",
  ];

  return (
    <div>
      <Modal
        visible={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width="75%"
        className=" rounded-2xl car-reserve"
        centered
      >
        <section>
          <div className="grid md:grid-cols-2 gap-x-10">
            <div className="mx-auto ">
              {carDetails.slice(0, 1).map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    className="rounded-[20px]"
                    imgSrc={item.img}
                    carName={item.cname}
                    carPrice={item.carPrice}
                    emiStart={item.emiStartAmnt}
                    regYear={item.regYear}
                    kms={item.kms}
                    fuelType={item.fuelType}
                    regState={item.regState}
                    modalSize={modalSize}
                  />
                );
              })}
            </div>
            <div className="my-5  px-0 md:px-5 mx-auto lg:my-0">
              <h3 className={` sm:text-xl md:text-2xl font-bold taviraj w-full `}>
                Please Select How you would like to reserve your car.
              </h3>

              <div>
                {modalData.map((text, index) => (
                  <div className="bg-[#CAFFAE] rounded-2xl mx-auto xl:my-11 my-2 w-full">
                    <button
                      className={`text-md md:text-lg xl:p-5 md:p-4 font-bold taviraj`}
                    >
                      {text}
                    </button>
                  </div>
                ))}
              </div>
              <div className="text-center">
              <button type='submit' className="rounded-full bg-black text-white py-1 px-7 taviraj mt-2 md:mt-6 text-md md:text-lg md:py-2 ">
          Reserve this car
        </button>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default ReserveCar;
