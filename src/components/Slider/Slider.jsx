import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "./index.css"


const Slider = () => {

    const industryData = [
        {title: "Technology",  image: "/assets/images/techno.webp" },
        {title: "Retail",  image: "/assets/images/retails.webp" },
        {title: "Finance", image: "/assets/images/finance.webp" },
        {title: "Pharma & Helthcare", image: "/assets/images/healthcare.webp" },
        {title: "Industrial", image: "/assets/images/industry.webp" },
        {title: "Consumer", image: "/assets/images/consumer.webp" },
        {title: "Automobile", image: "/assets/images/automobile.webp" },
      
    ];

    return (

        <div>
                     
      <Swiper
        modules={[ Autoplay]}
        // slidesPerView={3}
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
        
            894: {
              slidesPerView: 3,
            }
          }}
        spaceBetween={20}
        loop={true}
        autoplay={{delay: 3000}}
      >
        {industryData.map((ind, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center " data-aos="fade-up" >
                <div className="w-220  p-8 rounded-full bg-green-100">
                <img src={ind.image} alt={`Journey ${ind.title}`} className="size-36" />

                </div>
                <h3 className="mt4 text-sky-800 text-2xl font-semibold font-poppins">{ind.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        </div>

    );

}

export default Slider;