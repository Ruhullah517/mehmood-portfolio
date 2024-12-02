import React from "react";
import './myspecialities.css';
// import ReactCompareImage from 'react-compare-image';
import ImageCompareSlider from "./imagecompare";

const mySpecialities = () => {
    return (<>
        <section id="MySpecialities">
            <h2>My Specialities</h2>
            <div id="main-div">
                <div className="speciality">
                    <div className="speciality-detail">
                        <h2 className="hover-underline-animation">01 - Landscape Photography</h2>
                        <p>I may choose to focus on landscape photography because I find beauty in the natural world,
                            enjoy capturing the unique qualities of different locations, and exploring new places.
                            Landscape photography also allows me to be creative in how they document outdoor scenes and the
                            ever-changing weather and light. Furthermore, landscapes are often timeless,
                            which can create a sense of nostalgia when the images are viewed many years later.</p>
                    </div>
                    <div className="speciality-img">
                        <img src={'/assets/images/deosailandscape.JPG'} loading="lazy" />
                    </div>
                </div>
                <div className="speciality">
                    <div className="speciality-detail">
                        <h2 className="hover-underline-animation">02 - Before - After</h2>
                        <p>With the help of editing software,I bring out the best in their photos and make them stand
                            out from the rest. Editing also allows me to add my own creative touch to the image,
                            adding a personal touch that cannot be replicated.
                            Editing helps to bring out the beauty and artistry in each photo, making it something truly special.</p>
                    </div>
                    <div className="speciality-img Be-Af">
                        <ImageCompareSlider
                            leftImage={'/assets/images/effect2copy.png'}
                            rightImage={'/assets/images/effect1copy.jpg'}
                        />

                    </div>
                </div>
                <div className="speciality">
                    <div className="speciality-detail">
                        <h2 className="hover-underline-animation">03 - Portrait Photography</h2>
                        <p>Portrait photography is a special art form that allows photographers to share the story of a person's life
                            without having to use words. Through careful use of lighting, posing, and backgrounds,
                            I am able to create a powerful image that speaks volumes about the individuals.</p>
                    </div>
                    <div className="speciality-img">
                        <img src={'/assets/images/portrait3.jpg'} loading="lazy" />
                    </div>
                </div>
                <div className="speciality arial">
                    <div className="speciality-detail">
                        <h2 className="hover-underline-animation">04 - Aerial Photo/Vediogrpahy</h2>
                        <p>The beauty of aerial Photo/Vediography lies in its ability to capture the grandeur of our world from
                            a unique perspective, showcasing the natural beauty of our planet and the intricate details of human-made
                            structures. It can make us feel like we are flying, and it can give a sense of scale that is often hard to convey in other ways.</p>
                    </div>
                    <div className="speciality-img">
                        <img src={'/assets/images/drone.JPG'} loading="lazy" />
                    </div>
                </div>

            </div>


        </section>
    </>)
}

export default mySpecialities;