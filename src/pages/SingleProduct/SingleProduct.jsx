import React from 'react';
import ProductImg from './ProductImg';

import { carDetails } from "../../constants/CarDetails";
import { carSummary } from '../../constants/CarSummary';
import { carSpecifications } from '../../constants/FAQ';

import CarSummary from './CarSummary';
import Accordion from '../../components/Accordion/Accordion';
import ProductCard from '../Product/ProductCard';

// showing single cars , so all the data will be pre linked with the car is being displayed , which will be taken by the car id
const SingleProduct = () => {
  return (
    <div>
          <ProductImg />
      <section>
        <div className="car">
          <div className='flex'>
            {
              carDetails.slice(0, 1).map((item, index) => (
                <div key={index} className={`flex flex-wrap justify-center items-center text-center  mx-auto`}>
                  <p className="text-center font-bold text-xl taviraj mt-10 md:mt-5  mb-2 taviraj mx-5">{item.cname}</p>
                  <span className='font-bold mt-8 md:mt-2 text-4xl'>|</span>
                  <p className="text-center font-bold text-xl taviraj mt-10 md:mt-5  mb-2 taviraj mx-5">{item.carPrice}</p>
                  <span className='font-bold mt-8 md:mt-2 text-4xl'>|</span>
                  <p className='mt-10 mb-2 md:mt-4 text-2xl mx-5'>EMI Starts &#x40; {item.emiStartAmnt}</p>
                </div>
              ))
            }
          </div>
          <div className='reserve-car-btn text-center '>
            <button className='rounded-full bg-black w-[300px] text-white p-3 taviraj mt-6 text-xl mb-5'>Reserve This Car</button>
          </div>
        </div>
      </section>

      <section>
        <div className="car-summary">
          {/* double loop one to ensure that car have that property and second inside to pass in the data and display the content  */}
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10 mx-auto lg:mx-auto md:mx-auto sm:mx-auto w-[80vw] pb-5'>
            {carSummary.map((item , index)=>(
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

      <section>
        <p className='text-4xl px-10 font-bold '>Full Specifications</p>
        <div className="faq w-100 m-auto p-5 px-10 h-min-fit">
          {carSpecifications.map((item , index)=>(
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
        <div className="related-cars pb-10">
          <p className='text-4xl px-10 font-bold'>Related Cars</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 z-0 mx-5">
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

    </div>
  )
}

export default SingleProduct
