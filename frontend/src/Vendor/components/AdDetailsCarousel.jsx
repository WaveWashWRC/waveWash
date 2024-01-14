import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AdDetailsCarousel = ({ images }) => {
  if (!Array.isArray(images) || images.length === 0) {
    return <div>No images available</div>;
  }

  const duplicatedImages = [...images, ...images];

  return (
    <div className="z-0 md:w-[30rem] h-[20rem] overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {duplicatedImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full object-cover" // Change to object-cover to maintain aspect ratio
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdDetailsCarousel;
