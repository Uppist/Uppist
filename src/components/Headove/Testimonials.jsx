/** @format */

import React, { useRef } from "react";
import Slider from "react-slick";

import testimonial from "../../Testimonials.json";

export default function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 7000,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  return (
    <section className='testimonials'>
      <label>Testimonials</label>
      <div className='reviewpart'>
        <Slider ref={sliderRef} {...settings} className='custom-slider'>
          {testimonial.map((data, index) => (
            <div className='businessowner' key={index}>
              <img className='imageowner' src={data.Image} alt={data.Name} />
              <div className='name'>
                <span className='datareview'>{data.Name}</span>
                <span className='dataname'>{data.Title}</span>
                <span className='testimony'>{data.Testimonial}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
