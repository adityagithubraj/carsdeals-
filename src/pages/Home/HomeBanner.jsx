import React from "react";
import { scroller } from "react-scroll";
import scroll from "../../assets/scroll.png";

function HomeBanner() {
  const handleScroll = () => {
    scroller.scrollTo("process", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div className="home-banner p-10 flex flex-col justify-between pt-[6rem]">
        <div className="flex flex-col justify-center md:items-baseline items-center gap-y-8 banner-txt">
          <h1 className="text-white xl:text-8xl lg:text-6xl lg:leading-[5rem] text-[30px] text-center md:text-left ">
            Experience the thrill <br />
            of the road with our
            <br /> top-notch cars!"
          </h1>
          <p className="text-white text-2xl 2xl:text-4xl text-center md:text-left w-full desk-btn" >
            Buy a quality second-hand car
          </p>
          <button className="text-white banner-btn text-md md:text-xl py-2 px-4 tavira desk-btn">
            {" "}
            Buy - +91 9264492644
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
        <p className="text-white text-2xl text-center md:text-left w-full mob-btn mb-4">
            Buy a quality second-hand car
          </p>
        <button className="text-white banner-btn text-md md:text-xl py-2 px-4 taviraj mob-btn mb-4">
            {" "}
            Buy - +91 9264492644
          </button>
          <p className="text-white text-center">Scroll down to explore</p>

          <img
            className="w-5 mt-[13px] cursor-pointer arrow-img "
            src={scroll}
            onClick={handleScroll}
          />
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
