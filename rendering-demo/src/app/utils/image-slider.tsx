'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
}

const ImageSlider = () =>  {
      return (
        <div style={{ width: '80%', margin: '0 auto' }}>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            </Slider>
          </div>
      )
    }
export default ImageSlider;