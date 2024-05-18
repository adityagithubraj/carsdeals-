import React from "react";

const CarSummary = ({ icon, title, desc }) => {
  return (
    <>
      <div className={`lg:h-[274px] lg:w-[282px] w-[238px] h-[230px]  border-2 border-[#CAFFAE] 
          border-solid  rounded-[20px] justify-center align-items-center flex flex-col`}>
      <div className='md:h-[79px] md:w-[79px] h-[90px] w-[90px] secondary-color rounded-full md:m-auto mx-auto p-4'>
        <img src={icon} alt="car-summary-icon" className='md:h-[51px] md:w-[51px] h-[50px] w-[50px] m-auto  secondary-color' />
      </div>
      <div className='mx-auto md:h-[120px] text-top md:p-0 p-5'>
        <p className='md:h-[41px] h-fit text-center font-bold text-xl taviraj mx-auto'>{title}</p>
        <p className='md:w-[231px] w-fit text-center mx-auto'>{desc}</p>
      </div>
    </div>
    </>
  );
};

export default CarSummary;
