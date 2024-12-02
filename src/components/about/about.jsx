import React from "react";
import './about.css';
import SkillsBar from "./skillbar";
import { GiPhotoCamera } from "react-icons/gi";

const about = () => {
    return (<>
        <section id="About">
            <h2> About Me <span><GiPhotoCamera /></span></h2>
            <section id="section-head">
                <div className="about-section">
                <img src={'/assets/images/mehmood - Copy.JPG'} loading="lazy" /> 
            
                </div>
                <div className="about-section">
                    <h2>INTRODUCTION</h2>
                    <p>Hi there! I'm Mehmood Vzyree. I'm an experienced photographer from Skardu, Gilgit-Baltistan, the Norther areas of Pakistan.
                        I've been taking photos for many years, and my passion for capturing the natural beauty of my region has
                        only grown stronger over time. I use photography to show the world the unique beauty of Gilgit-Baltistan.
                        From the stunning mountain peaks to the lush green valleys, from impressive Waterfalls to the magic of Cold deserts.
                        <br /> I also work as a tour guide, providing exciting and informative tours of my local area. Whether I'm leading a tour or taking photos, I'm passionate about helping others learn more about the world around them.

                        If you're looking for an experienced and knowledgeable photographer and a tour guide <br /> I'm here to help!</p>
                    <SkillsBar />
                </div>

            </section>


        </section>
    </>)
}
export default about;