import { carDetails } from '../constants/CarDetails.js';

import { createContext, useState, useEffect } from "react";

export const CarContext = createContext();

export const CarContextProvider = ({ children }) => {
    const [carDetail, setCarDetail] = useState({});
    const [paramsId , setParamsId] = useState("")

    useEffect(() => {
        if (paramsId) {
            const selectedCar = carDetails.find((car) => {
                return car.carId == paramsId;
            });
            setCarDetail(selectedCar || {});
        }
    }, [paramsId]);

    return (
        <CarContext.Provider value={{ carDetail , setParamsId }}>
            {children}
        </CarContext.Provider>
    );
}
