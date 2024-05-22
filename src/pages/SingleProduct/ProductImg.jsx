import React from 'react'
import { singleCarImage } from '../../constants/SingleCarImage'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../../assets/left.png'
import rightArrow from '../../assets/right.png'


const ProductImg = () => {

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
  

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "25%",
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    responsive: [

      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };
  return (
    <div className="slider-container pt-10">
      <Slider {...settings}>
        {singleCarImage.map((item, index) => (
          <div className='px-2' key={index}>
          <h3>
            <img src={singleCarImage[index]} className='w-[100%] rounded-2xl' alt="" />
          </h3>
        </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductImg
