import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bathroomwash from "/images/bathroomwash.jpg";
import bikewash from "/images/bikewash.jpg";
import carpetcleaning from "/images/carpetcleaning.jpg";
import carwash from "/images/carwash.jpg";
import gardening from "/images/gardening.jpg";
import petwash from "/images/petwash.jpg";

const images = [
  bathroomwash,
  carpetcleaning,
  carwash,
  gardening,
  petwash,
  bikewash,
];

const Carousel = () => {
  return (
    <div className="w-96">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Carousel image ${index + 1}`}
              className="w-full object-fit"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
