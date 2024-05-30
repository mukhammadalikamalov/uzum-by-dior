import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; // If using a specific effect

export default function Usage() {
    return (
        <>
            <main>
                <Swiper style={{ marginTop: '30px' }}

                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src="https://images.uzum.uz/cp47vqffrr80f2glo6ag/main_page_banner.jpg" alt="Slide 1" style={{ width: "100%", height: "100%", borderRadius: "20px" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.uzum.uz/cp3js4nfrr80f2glk0h0/main_page_banner.jpg" alt="Slide 2" style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.uzum.uz/cp3j1nvj2e4ghqnrmkrg/main_page_banner.jpg" alt="Slide 3" style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.uzum.uz/cp67usdbnta2393flbbg/main_page_banner.jpg" alt="Slide 4" style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.uzum.uz/cp3in8vfrr80f2gljdjg/main_page_banner.jpg" alt="Slide 5" style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.uzum.uz/cp5ffiffrr80f2gm0gag/main_page_banner.jpg" alt="Slide 6" style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
                    </SwiperSlide>
                </Swiper>
            </main>
        </>
    )
}
