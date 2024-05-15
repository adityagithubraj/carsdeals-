import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { reviews } from "../../constants/Reviews";
import starImg from "../../assets/stars.png";
import leftArrow from '../../assets/left.png'
import rightArrow from '../../assets/right.png'

const ReviewCard = ({ img, name, review, star }) => {
  return (
    <div className="bg-[#CAFFAE] rounded-[20px] p-10 mx-3">
      <img src={img} alt={name} className="mx-auto"/>
      <p className="text-center text-xl my-4">{name}</p>
      <img src={star} alt="star" className="mx-auto mb-4"/>
      <p className="text-center text-xl">{review}</p>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-right-arrow`}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
       <img src={rightArrow} alt="Next" />
      </div>
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-left-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={leftArrow} alt="Next" className="w-20"/>
      </div>
      
  );
}

function Reviews() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      
    ]
  };

  return (
    <div className="container mx-auto pt-[2rem] review pb-[11rem] px-5">
      <SectionHeading
        head="Hear it from our happy customers"
        subtext="Read what our delighted customers have to say"
      />
      <Slider {...settings} className="mt-[3rem]">
      {reviews.map((review, index) => {
        return (
          <ReviewCard
            key={index}
            img={review.img}
            name={review.name}
            review={review.review}
            star={starImg}
          />
        );
      })}
      </Slider>
      
    </div>
  );
}

export default Reviews;
