import React from 'react'
import { Modal, Button } from "antd";
import paytm from '../assets/paytm.png'
import phonepe from '../assets/phonepq.png'
import google from '../assets/google.png'

function ReserveModal({ onFormSubmit, visibility, cancelHandler }) {
  return (
    <Modal
      visible={visibility}
      onCancel={cancelHandler}
      footer={null}
      width="auto"
      centered
      className="reserve-modal-outer"	
    >
      <div className='reserve-modal-inner pr-7'>
        <p className='font-bold text-base md:text-[19px] rufina lg-text[20px]'>Reserve your own luxury</p>
        <p className='text-[#3BAB00] text-2xl md:text-3xl rufina my-1 md:my-3'>Pay 2 lacs &amp; Reserve Car for 24 hrs</p>
        <p className='text-[#606060] mb-7 rufina text-sm md:text-xl'>Just a few steps away from making your dream car a reality! Fill in a few details and we can begin the <br /> reservation…</p>

        <form>
            <h3 className='text-xl font-semibold rufina mb-3'>PERSONAL INFORMATION</h3>
            <div className='grid gridf-cols-1 md:grid-cols-2 gap-3'>
                <input type="text" placeholder='Name' className=' placeholder-black	 px-2 py-3 border border-black rounded-lg'/>
                <input type="number" placeholder='Phone Number' className=' placeholder-black	 px-2 py-3 border border-black rounded-lg'/>
                <input type="email" placeholder='Email' className=' placeholder-black	 px-2 py-3 border border-black rounded-lg'/>
                <input type="text" placeholder='Address' className=' placeholder-black	 px-2 py-3 border border-black rounded-lg'/>
            </div>

            <div className='flex justify-center gap-x-3 mt-2 md:mt-5'>
                <img  src={paytm}  className='w-[30px] md:w-[50px]'/>
                <img  src={phonepe}  className='w-[30px] md:w-[50px]'/>
                <img  src={google}  className='w-[30px] md:w-[50px]'/>
            </div>

            <button type='submit' className="rounded-full bg-black text-white py-1 px-7 taviraj mt-2 md:mt-6 text-md md:text-lg md:py-2 w-full">
          Reserve this car
        </button>
        </form>

      </div>
    </Modal>
  )
}

export default ReserveModal