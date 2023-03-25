import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewItem from "./ReviewItem";
import { reviews } from "../../data/reviews";

function ReviewSlider() {
  return (
    <div className="mt-10 max-w-7xl mx-auto relative">
      <Swiper
        className="mySwiper"
        // pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          760: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          }
        }}
        // slidesPerView={2}
        // onSlideChange={() => {}}
        // onSwiper={(swiper) => {}}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewItem message={item.review} logo={item.company} role={item.role} name={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewSlider;
