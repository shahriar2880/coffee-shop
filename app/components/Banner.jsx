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
import { Button } from "@/components/ui/button";

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
                    <div className=" relative">
                        <h1 className="text-8xl font-bold py-4">Espresso Delicious Coffee {""}</h1>
                        <div className="absolute top-56 mt-1 right-1"><Image height={80} width={80} alt="cafe" src="/images/cafe.png"/> </div>
                        <p className="py-4">A drink from the "My Alowishus" bolted brews range QR grab one of our delicious coffee's</p>
                        <div className=" flex gap-4 py-6">
                            <Button className='p-7 rounded-full shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide'>Download App </Button>
                            <Button className='p-7 rounded-full shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide' variant="outline">Shop Coffee </Button>
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
