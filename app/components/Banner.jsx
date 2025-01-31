"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="container">
                <div className="grid grid-cols-2">
                    <div className="">
                        <h1>Espresso Delicious Coffee <Image height={20} width={20} alt="web" src="/images/cafe.png"/> </h1>
                        <p>A drink from the "My Alowishus" bolted brews range QR grab one of our delicious coffee's</p>
                        <div>
                            <button>Download App </button>
                            <button>Shop Coffee </button>
                        </div>
                    </div>
                    <div className="">asdfg</div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
