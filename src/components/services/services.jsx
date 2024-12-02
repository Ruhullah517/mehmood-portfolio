import React from "react";
import './services.css'



const Services = () => {
    return (<>
        <section id="services-section">
            <h2>Services</h2>
            <div id="servcies-main">
                <div id="center-box">
                    <div className="servicesBox">
                        <p>Services Packages</p>
                        <div className="pkg-Div">
                            <h1>BASIC</h1>
                            <ul>
                                <li>ONLY PhotoShoot</li>
                                <li>ONLY VedioShoot</li>
                                <li>ONLY Aerial cinematography</li>
                                <li>ONLY Get-Me-A-TourGuide</li>
                            </ul>
                            <a href="#ContactUs"><button>Book Now</button></a>
                        </div>
                    </div>
                    <div className="servicesBox">
                        <p>Services Packages</p>
                        <div className="pkg-Div">
                            <h1>PREMIUM</h1>
                            <ul>
                                <li>ONLY PhotoShoot & VedioShoot </li>
                                <li>ONLY VedioShoot & Ariel Cinematography</li>
                                <li>ONLY PhotoShoot & Get-Me-A TourGuide</li>
                                <li>ONLY Get-Me-A TourGuide & VedioShooting</li>
                                <li>ONLY WEDDING SHOOTS</li>
                            </ul>
                            <a href="#ContactUs"><button>Book Now</button></a>
                        </div>
                    </div>
                    <div className="servicesBox">
                        <p>Services Packages</p>
                        <div className="pkg-Div">
                            <h1>BUNDLE PACKAGE</h1>
                            <ul>
                                <li>INCLUDES Every Kind Of Photo & Vediography</li>
                                <li>INCLUDES Hotel Bookings</li>
                                <li>INCLUDES Rent-A-Car</li>
                                <li>INCLUDES Get-Me-A-TourGuide</li>
                            </ul>
                            <a href="#ContactUs"><button>Book Now</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}


export default Services;