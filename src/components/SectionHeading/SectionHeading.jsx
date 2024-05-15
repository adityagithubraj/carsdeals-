import React from "react";

function SectionHeading(props) {
  return (
    <>
      <h2 className="text-center mb-2 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">{props.head}</h2>
      <p className="text-[#676767] text-center text-lg lg:text-2xl ">
        {props.subtext}
      </p>
    </>
  );
}

export default SectionHeading;
