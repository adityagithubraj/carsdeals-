import ProductCard from "./ProductCard"
import { carDetails } from "../../constants/CarDetails";
import { useState } from "react";


const ProductsPage = () => {

  const [visibililty, setVisibility] = useState(6);

  const showMoreItems = () => {
    setVisibility((prevValue) => prevValue + 3);
  }

  return (
    <div>
      <h1 className="text-center text-5xl my-5">Choose Your Dream Car</h1>
      <div className="flex flex-col">

        <div className="bottom w-[96vw] mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {carDetails.slice(0, visibililty).map((item, index) => {
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

          <div className="text-center my-5">
            {visibililty === carDetails.length ? "" :
              (
                <button className="text-lg bg-[#000] rounded-[10px] text-white px-4 py-2" onClick={showMoreItems}>Load More</button>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
