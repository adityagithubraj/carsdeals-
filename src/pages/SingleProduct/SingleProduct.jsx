import React, { useContext, useState } from "react";
import ProductImg from "./ProductImg";


import { carSummary } from "../../constants/CarSummary";
import { carSpecifications } from "../../constants/FAQ";

import CarSummary from "./CarSummary";
import Accordion from "../../components/Accordion/Accordion";
import ProductCard from "../../components/ProductCard";
import ReserveCar from "../../components/ReserveCar/ReserveCar";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ReserveModal from "../../components/ReserveModal";
import { useEffect } from "react";
import { CarContext } from "../../context/CarContext";
import { carDetails } from "../../constants/CarDetails";
import { useParams } from "react-router";

const SingleProduct = () => {

  const fetchedUrl = window.location.href;
  const { carDetail, setParamsId } = useContext(CarContext);
  const { id: paramsId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setParamsId(paramsId);
  }, [fetchedUrl]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalModalVisibility, setFinalModalVisibility] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const finalModalClose = () => {
    setFinalModalVisibility(false);
  };

  const buttonClose = () => {
    setIsModalOpen(false);
    setFinalModalVisibility(true);
    console.log(finalModalVisibility);
  };

  return (
    <div>
      <div>
        <ProductImg />
        <div className="mt-24 container mx-auto px-5">
          <div className="flex">
            <div
              className={`flex lg:flex-row flex-col flex-wrap gap-x-4 justify-between items-center text-center mx-auto`}
            >
              <p className="text-center font-bold text-xl taviraj mt-6 lg:mt-5  mb-2 taviraj">
                {carDetail.cname}
              </p>
              <span className="hidden lg:block font-bold mt-4 md:mt-2 text-4xl">
                |
              </span>
              <p className="text-center font-bold text-xl taviraj mt-2 lg:mt-5  mb-2 taviraj">
                {carDetail.carPrice}
              </p>
              <span className="hidden lg:block  font-bold mt-4 md:mt-2 text-4xl">
                |
              </span>
              <p className="mt-2 mb-2 lg:mt-5 text-2xl mx-5">
                EMI Starts &#x40; {carDetail.emiStartAmnt}
              </p>
            </div>
          </div>
          <div className="text-center px-5">
            <button
              onClick={showModal}
              className="rounded-full bg-black w-[200px] md:w-[300px] text-white p-2 taviraj mt-6 text-md	md:text-lg"
            >
              Reserve This Car
            </button>
          </div>
        </div>

        <section className="container mx-auto px-5 my-24">
          <div>
            <SectionHeading head="Car Summary" start={true} carSum={true} />
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:gap-10 gap-4 mx-auto pb-5 mt-10">
              {carSummary.map((item, index) => (
                <div key={index} className="flex justify-center">
                  <CarSummary
                    icon={item.img}
                    title={item.title}
                    desc={item.desc}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-5 my-24">
          <SectionHeading head="Full Specifications" start={true} />
          <div className="mt-10">
            {carSpecifications.map((item, index) => (
              <Accordion
                key={index}
                accordionTitle={item.accordionText}
                accordionDesc={item.accordionDesc}
              />
            ))}
          </div>
        </section>
      </div>

      <section className="container mx-auto px-5 my-24">
        <div className="mb-24">
          <SectionHeading head="Related Cars" start={true} />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
            {carDetails.slice(0, 6).map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  id={item?.carId}
                  imgSrc={item?.img}
                  carName={item?.cname}
                  carPrice={item?.carPrice}
                  emiStart={item?.emiStartAmnt}
                  regYear={item?.regYear}
                  kms={item?.kms}
                  fuelType={item?.fuelType}
                  regState={item?.regState}
                />
              );
            })}
          </div>
        </div>
      </section>
      {isModalOpen && (
        <ReserveCar
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          btnSubmit={buttonClose}
          car={carDetail}
        />
      )}
      {finalModalVisibility  && (
        <ReserveModal
          visibility={finalModalVisibility}
          cancelHandler={finalModalClose}
        />
      )}
    </div>
  );
};

export default SingleProduct;
