import React from 'react';
import './gallery.css';
import { slides, slides2, slides3 } from './slides';
import Carousel from './crousel';

const Gallery = () => {
    return (
        <section id="gallery">
            <h2 className="gallery-title">Gallery</h2>
            <div className='content-container'>
                {/* Portrait Section */}
                <div className="gallery-item">
                    <div className="gallery-images">
                        <Carousel images={slides} />
                    </div>
                    <div className="gallery-text">
                        <h2>Portrait Shots</h2>
                        <p>
                            Portrait photography is an art form that tells a story through lighting, posing, and backgrounds.
                            I strive to create powerful images that speak volumes about individuals without words.
                        </p>
                    </div>
                </div>

                {/* Landscape Section */}
                <div className="gallery-item">
                    <div className="gallery-text">
                        <h2>Landscape Shots</h2>
                        <p>
                            I capture the natural world's beauty and explore unique locations. Landscape photography allows me
                            to be creative and document timeless scenes that evoke nostalgia.
                        </p>
                    </div>
                    <div className="gallery-images landscape">
                        <Carousel images={slides2} />
                    </div>
                </div>

                {/* Faces of the North Section */}
                <div className="gallery-item">
                    <div className="gallery-images">
                        <Carousel images={slides3} />
                    </div>
                    <div className="gallery-text">
                        <h2>Faces of the North</h2>
                        <p>
                            Capturing the essence of Northern Pakistan’s people and culture is humbling and inspiring.
                            Through my lens, I showcase their resilience, warmth, and rich heritage.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
