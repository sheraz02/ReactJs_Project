import React from "react";
import "./Hero.css";
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* Left Section */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, type: "spring" }}
                        >
                            Grow your<br />
                            Bunisses with<br />  Machine Learning <br /> Algorithms
                        </motion.h1>
                    </div>

                    {/* Description */}
                    <div className="flexColStart hero-des">
                        <span className="secondaryText">Consult us today</span>
                        <span className="secondaryText">Forget all difficulties in related to your business.</span>
                    </div>

                    {/* Search Bar */}
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" placeholder="Search Location" />
                        <button className="button">Search</button>
                    </div>

                    {/* Stats Section */}
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />+
                            </span>
                            <span className="secondaryText">Premium Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />+
                            </span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} />+
                            </span>
                            <span className="secondaryText">Awards Winning</span>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flexCenter hero-right">
                    <motion.div
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: "spring" }}
                        className="image-container"
                    >
                        <img src="/Aiwoman.jpg" alt="Hero" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
