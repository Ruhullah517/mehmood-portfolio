import React, { useState } from "react";
import './mywork.css'
import { FaUserFriends, FaAward, FaCamera, } from 'react-icons/fa'
import { BsCameraReelsFill } from "react-icons/bs";
// import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";
import Countup from "./countup";
import ScrollTrigger from "./scrolltrigger";

const MyWork = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (<>
        <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
        >
            <section id="myWorkSect">
                <h2 id="work-heading">My Work</h2>
                <div className="containerr">
                    <div className="circle">
                        <div className="aligner">
                            <div className="div-work">
                                <div className="work-icons">
                                    <FaUserFriends className="icons" />
                                </div>
                                <h2>{counterOn && <Countup start={0} end={200} duration={1} delay={0} />}+</h2>
                                <p>Satisfied Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="circle">
                        <div className="aligner">
                            <div className="div-work">
                                <div className="work-icons">
                                    <BsCameraReelsFill className="icons" />
                                </div>
                                <h2>{counterOn && <Countup start={0} end={80} duration={1} delay={0} />}+</h2>
                                <p>Sessions</p>
                            </div>
                        </div>
                    </div>
                    <div className="circle">
                        <div className="aligner">
                            <div className="div-work">
                                <div className="work-icons">
                                    <FaAward className="icons" />
                                </div>
                                <h2>{counterOn && <Countup start={0} end={50} duration={1} delay={0} />}+</h2>
                                <p>Satisfied Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="circle">
                        <div className="aligner">
                            <div className="div-work">
                                <div className="work-icons">
                                    <FaCamera className="icons" />
                                </div>
                                <h2>{counterOn && <Countup start={0} end={200} duration={1} delay={0} />}+</h2>
                                <p>Completed Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    </>)
}

export default MyWork;