import React from 'react'

const CarSummary = ({ icon, title, desc }) => {
  return (
    <div className={`h-[274px] w-[282px]  border-2 border-[#CAFFAE] 
          border-solid  rounded-[20px] justify-center align-items-center flex flex-col`}>
      <div className='h-[79px] w-[79px] secondary-color rounded-full m-auto p-4'>
        <img src={icon} alt="car-summary-icon" className='h-[51px] w-[51px] m-auto secondary-color' />
      </div>
      <div className='mx-auto h-[120px] text-top'>
        <p className='h-[41px] text-center font-bold text-xl taviraj mx-auto'>{title}</p>
        <p className='w-[231px] text-center mx-auto'>{desc}</p>
      </div>
    </div>
  )
}

export default CarSummary
