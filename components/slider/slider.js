import React from "react";
import Slider from "react-slick";
import Image from 'next/image'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './slider.module.css';



export default function SimpleSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
        
    <Slider {...settings}>
    {props.sliders.map((slider,idx)=>{
      return(
    <div key={idx} >
      <Image src={slider.desktop_url} alt="spices"  
      
      width={1400}
      height={600} />
    </div>)
    })}

    </Slider>
  );
}





