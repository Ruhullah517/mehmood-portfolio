import React from "react";
import { SiInstagram, SiFacebook, SiTiktok, SiGmail } from "react-icons/si";

import './footer.css';

const footer = () => {
    let data = new Date().getFullYear();
    return (<>
        <footer>
            <div className="footer-container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">
                            Copyright © {data} Mehmood Vzyree. All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li>

                                <a className="dribbble" target="_blank" href="https://instagram.com/hello_skardu?igshid=YmMyMTA2M2Y=" >
                                    <SiInstagram />
                                </a>
                            </li>
                            <li>

                                <a className="facebook" target="_blank" href="https://www.facebook.com/VZYREEPHOTOGRAP?mibextid=ZbWKwL">
                                    <SiFacebook />
                                </a>
                            </li>
                            <li>
                                <a className="twitter" target="_blank" href="https://www.tiktok.com/@hello_skardu?is_from_webapp=1&sender_device=pc">

                                    <SiTiktok />
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    </>)
}

export default footer;