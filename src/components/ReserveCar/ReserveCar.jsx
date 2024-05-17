import React from 'react'

// import ProductCard from '../../pages/Product/ProductCard.jsx';
import ProductCard from '../ProductCard.jsx';
import { carDetails } from '../../constants/CarDetails.js';
import { Modal, Button } from "antd";

const ReserveCar = ({ isModalOpen, closeModal }) => {

    const modalSize = true;
    const modalData =
        [
            "Pay 2 Lacs & Reserve Car for 24 hours",
            "Pay 10% & get confirmed booking",
            "Pay 100% & get car delivered home"
        ]

    return (
        <div>

        <Modal
            visible={isModalOpen}
            onCancel={closeModal}
            footer={null}
            width="90%"
            className='md:h-[100%] h-[80%] rounded-2xl overflow-hidden 
            overflow-y-scroll md:overflow-visible'
            centered
        >
            <section>
                <div className='grid grid-rows-2 md:grid-cols-2'>
                    <div className='mx-auto md:w-[90%] w-[100%]'>
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
                    <div className='my-5 w-[90%] flex flex-col justify-between px-0 md:px-5 mx-auto lg:my-0'>
                        <h3 className={`text-2xl font-bold taviraj w-full mb-5`}>Please Select How you would like to reserve your car.</h3>

                        {modalData.map((text, index) => (
                            <div className='bg-[#CAFFAE] rounded-2xl mx-auto xl:my-5 my-2 w-full'>
                                <button className={`text-lg xl:p-10 p-6 font-bold taviraj`}>{text}</button>
                            </div>
                        ))}
                        <div className='text-center'>
                            <button
                                className='rounded-full bg-black w-full 
                                text-white p-3 taviraj mt-6 text-xl mb-5'>
                                Reserve This Car
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Button>

            </Button>
        </Modal>
        </div>
    )
}

export default ReserveCar
