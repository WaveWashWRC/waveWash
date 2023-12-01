import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bathroomwash from "/images/User/bathroomwash.jpg";
import bikewash from "/images/User/bikewash.jpg";
import carpetcleaning from "/images/User/carpetcleaning.jpg";
import carwash from "/images/User/carwash.jpg";
import gardening from "/images/User/gardening.jpg";
import petwash from "/images/User/petwash.jpg";

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
    <div className="z-0 md:w-[30rem]">
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
