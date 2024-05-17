
const ProductCard = ({imgSrc,carName,carPrice,emiStart,regYear,kms,fuelType,regState,modalSize})=>{
  return (
    <div className={`bg-[#F3F3F3] rounded-[20px] 
                    ${ modalSize ? `py-0 my-0 h-[60vw] w-[100%] ` : `p-4 my-5 transition-transform duration-200 
                    transform ease-in-out hover:scale-105` }`}>
      <div>
        <img 
          src={imgSrc}
          className={`rounded-[20px] ${ modalSize ? `mx-auto` : "" }`}
        />
        <div className="p-5">
          <button className="rounded-full bg-black w-full text-white p-3 taviraj mt-6 text-xl	">{carPrice}</button>
          <h3 className="text-center font-bold text-xl taviraj mt-10  mb-2 taviraj">{carName}</h3>
          <p className="text-center w-full text-[#3C3C3C] text-base font-medium taviraj">EMI Starts @ {emiStart}</p>
        </div>
      </div>
      <div className="bg-[#DFDFDF] h-[2px] mt-2">

      </div>
      <div className="p-5 flex justify-evenly">
        <div>
          <p className="text-[#3C3C3C] font-semibold text-base taviraj text-center ">Reg. Year</p> <p className="text-black text-center text-base font-semibold taviraj	">{regYear}</p>
        </div>
        <div>
          <p className="text-[#3C3C3C] font-semibold text-base taviraj text-center ">Kms</p> <p className="text-black text-center text-base font-semibold taviraj	">{kms}</p>
        </div>
        <div>
          <p className="text-[#3C3C3C] font-semibold text-base taviraj text-center ">Fuel Type </p> <p className="text-black text-center text-base font-semibold taviraj	">{fuelType}</p>
        </div>
        <div>
          <p className="text-[#3C3C3C] font-semibold text-base taviraj text-center ">Reg. State</p> <p className="text-black text-center text-base font-semibold taviraj	">{regState}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

