import React from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';
import { Autoplay } from 'swiper';
import { useEffect } from 'react';

const Residencies = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    {...sliderSettings}
                >
                    <SliderButtons />
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="r-card flexColStart">
                                <div className="r-image-container">
                                    <img src={card.image} alt={`Image of ${card.name}`} />
                                    <div className="r-overlay">
                                        <span className="primaryText">{card.name}</span>
                                        {/* <span className="secondaryText">${card.price}</span>
                                        <span className="secondaryText">{card.detail}</span> */}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button className="r-button prev" onClick={() => swiper.slidePrev()} aria-label="Previous Slide">❮</button>
            <button className="r-button next" onClick={() => swiper.slideNext()} aria-label="Next Slide">❯</button>
        </div>
    );
};
