import React from 'react'
import { singleCarImage } from '../../constants/SingleCarImage'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductImg = () => {

  const settings = {
    // dots: false,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: '25%',
    // autoplay: true,
    // autoplaySpeed: 3000,
    // speed: 500,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className='container mx-auto'>

    <Slider {...settings}>
      {singleCarImage.map((item, index) => (
        <div key={index}>
          <img src={item} alt="" className='h-[40vh]'/>
        </div>
      ))}
    </Slider>
    </div>

  )
}

export default ProductImg
