import React from "react";

function SectionHeading(props) {
  return (
    <>
      <h2 className="text-center mb-5 text-6xl font-bold">{props.head}</h2>
      <p className="text-[#676767] text-center text-2xl">
        {props.subtext}
      </p>
    </>
  );
}

export default SectionHeading;
