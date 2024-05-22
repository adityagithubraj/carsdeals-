import React from "react";
import ProductCard from "../../components/ProductCard";
import { carDetails } from "../../constants/CarDetails.js";
import { Modal } from "antd";
import ReserveModal from "../ReserveModal";

const ReserveCar = ({ isModalOpen, closeModal , btnSubmit , car }) => {
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
            <div className="mx-auto">
                  <ProductCard
                    className="rounded-[20px]"
                    id={car?.carId}
                    imgSrc={car.img}
                    carName={car.cname}
                    carPrice={car.carPrice}
                    emiStart={car.emiStartAmnt}
                    regYear={car.regYear}
                    kms={car.kms}
                    fuelType={car.fuelType}
                    regState={car.regState}
                  />
            </div>
            <div className="my-14 px-0 md:px-5 mx-auto md:my-0 w-full">
              <h3
                className={` sm:text-xl md:text-2xl font-bold taviraj w-full `}
              >
                Please Select How you would like to reserve your car.
              </h3>
              <div>
                {modalData.map((text, index) => (
                  <div className="bg-[#CAFFAE] rounded-2xl xl:my-11 lg:my-6 md:my-4 my-6 w-full" key={index}>
                    <button
                      className={`text-md md:text-lg xl:p-5 md:p-3 p-5 font-bold taviraj`}
                    >
                      {text}
                    </button>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={ btnSubmit }
                  className="rounded-full bg-black text-white py-1 px-7 taviraj mt-2 md:mt-6 text-md md:text-lg md:py-2 "
                >
                  Reserve this car
                </button>
              </div>
            </div>
          </div>
        </section>
      </Modal>
      <ReserveModal />
    </div>
  );
};

export default ReserveCar;
