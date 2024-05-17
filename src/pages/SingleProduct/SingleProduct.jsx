import React, { useState } from 'react';
import ProductImg from './ProductImg';

import { carDetails } from "../../constants/CarDetails";
import { carSummary } from '../../constants/CarSummary';
import { carSpecifications } from '../../constants/FAQ';

import CarSummary from './CarSummary';
import Accordion from '../../components/Accordion/Accordion';
import ProductCard from '../Product/ProductCard';
import ReserveCar from '../../components/ReserveCar/ReserveCar';

// showing single cars , so all the data will be pre linked with the car is being displayed , which will be taken by the car id
const SingleProduct = () => {

  const [isModalOpen , setIsModalOpen] = useState(false);

  const showModal = ()=>{
    setIsModalOpen(true);
  }

  const closeModal = ()=>{
    setIsModalOpen(false);
  }

  return (
    <div>
      <ProductImg />
      <section className='container'>
        <div className="mt-24">
          <div className='flex'>
            {
              carDetails.slice(0, 1).map((item, index) => (
                <div key={index} className={`flex lg:flex-row flex-col flex-wrap gap-x-4 justify-between items-center text-center mx-auto`}>
                  <p className="text-center font-bold text-xl taviraj mt-8 lg:mt-5  mb-2 taviraj">{item.cname}</p>
                  <span className='hidden lg:block font-bold mt-8 md:mt-2 text-4xl'>|</span>
                  <p className="text-center font-bold text-xl taviraj mt-8 lg:mt-5  mb-2 taviraj">{item.carPrice}</p>
                  <span className='hidden lg:block  font-bold mt-8 md:mt-2 text-4xl'>|</span>
                  <p className='mt-8 mb-2 lg:mt-5 text-2xl mx-5'>EMI Starts &#x40; {item.emiStartAmnt}</p>
                </div>
              ))
            }
          </div>
          <div className='text-center'>
            <button
              onClick={showModal}
              className='rounded-full bg-black w-[300px] 
            text-white p-3 taviraj mt-6 text-xl mb-5'>
              Reserve This Car
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-1 w-[100vw]">
        <p className='text-4xl md:mx-24 text-center mx-5 font-bold my-10'>Car Summary</p>
          {/* double loop one to ensure that car have that property and second inside to pass in the data and display the content  */}
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 md:gap-10 gap-4 mx-auto  md:mx-20 pb-5'>
            {carSummary.map((item, index) => (
              <div key={index} className='flex justify-center'>
                <CarSummary
                  icon={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))
            }
          </div>
        </div>
      </section>

      <section className='md:mx-24 mx-5'>
        <p className='text-4xl my-10 font-bold text-center mx-5'>Full Specifications</p>
        <div className="faq w-100 m-auto h-min-fit">
          {carSpecifications.map((item, index) => (
            <div key={index} className='my-4'>
              <Accordion
                accordionTitle={item.accordionText}
                accordionDesc={item.accordionDesc}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-24 my-20 md:mx-24 mx-5">
          <p className='text-4xl font-bold'>Related Cars</p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 z-0">
            {carDetails.slice(0, 6).map((item, index) => {
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
                />
              );
            })}
          </div>
        </div>
      </section>
          {isModalOpen && <ReserveCar isModalOpen={isModalOpen} closeModal={closeModal} />}
    </div>
  )
}

export default SingleProduct
