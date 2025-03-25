import React from "react";
import './Contact.css'
import {MdCall}  from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
    return (
        
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* Left side */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Easy to Contact Us</span>
                    <span className="secondaryText">We are always ready to help by providing the best services.</span>
                    <div className="flexColStart contactModes">
                        {/* First row */}
                        <div className="flexStart row">
                            {/* Call Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">+923155488814</span>
                                    </div>
                                </div>
                                <button className="flexCenter button">Call Now</button>
                            </div>

                            {/* Chat Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">+923155488814</span>
                                    </div>
                                </div>
                                <button className="flexCenter button">Chat Now</button>
                            </div>
                        </div>

                        {/* Second row */}
                        <div className="flexStart row">
                            {/* Message Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">+923155488814</span>
                                    </div>
                                </div>
                                <button className="flexCenter button">Message Now</button>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">+923155488814</span>
                                    </div>
                                </div>
                                <button className="flexCenter button">Message Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="/1230.jpg" alt="contact" />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Contact;