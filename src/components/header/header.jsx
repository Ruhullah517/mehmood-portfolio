import React from "react";
import './header.css'


const Header = () => {
    return (<>
        <header>
            <img id="headerImg" src={'/assets/images/IMG9095.JPG'} loading="lazy" />

            <div id="header-div">
                <h1>Mehmood Vzyree</h1>
            </div>
            <a href="#ContactUs"><button className="button-89" role="button">Hire Me !</button></a>

        </header>
    </>)
}
export default Header;