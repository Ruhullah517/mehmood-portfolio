import React, { useState } from "react";
import './contact.css';
import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";
import GoogLocation from "./map";

const Contact = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        contactNumber: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Custom form validation
    const validateForm = () => {
        const errors = {};
        if (!formData.username.trim()) {
            errors.username = 'Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.contactNumber.trim()) {
            errors.contactNumber = 'Contact number is required';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true);
            alert("Message Sent!");
            // Reset form after submission
            setFormData({
                username: '',
                email: '',
                contactNumber: '',
                message: '',
            });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <>
            <section id="ContactUs">
                <h2>Contact Us</h2>
                <div className="background">
                    <div className="container">
                        <div className="screen">
                            <div className="screen-header">
                                <div className="screen-header-left">
                                    <div className="screen-header-button close" />
                                    <div className="screen-header-button maximize" />
                                    <div className="screen-header-button minimize" />
                                </div>
                                <div className="screen-header-right">
                                    <div className="screen-header-ellipsis" />
                                    <div className="screen-header-ellipsis" />
                                    <div className="screen-header-ellipsis" />
                                </div>
                            </div>
                            <div className="screen-body">
                                <div className="screen-body-item left">
                                    <div className="app-title">
                                        <span>CONTACT</span>
                                        <span>US</span>
                                    </div>
                                    <div className="app-contact">
                                        <a
                                            className='social-icon-link'
                                            href="https://instagram.com/hello_skardu?igshid=YmMyMTA2M2Y="
                                            target='_blank'
                                            rel="noopener noreferrer"
                                        ><SiInstagram /></a>
                                        <a
                                            className='social-icon-link'
                                            href="https://www.facebook.com/VZYREEPHOTOGRAP?mibextid=ZbWKwL"
                                            target='_blank'
                                            rel="noopener noreferrer"
                                        ><SiFacebook /></a>
                                        <a
                                            className='social-icon-link'
                                            href="https://www.tiktok.com/@hello_skardu?is_from_webapp=1&sender_device=pc"
                                            target='_blank'
                                            rel="noopener noreferrer"
                                        ><SiTiktok /></a>
                                    </div>
                                </div>
                                <div className="screen-body-item">
                                    <form onSubmit={handleSubmit}>
                                        <div className="app-form">
                                            <div className="app-form-group">
                                                <input
                                                    className="app-form-control"
                                                    placeholder="NAME"
                                                    name="username"
                                                    value={formData.username}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.username && <p className="error">{errors.username}</p>}
                                            </div>
                                            <div className="app-form-group">
                                                <input
                                                    className="app-form-control"
                                                    placeholder="EMAIL"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.email && <p className="error">{errors.email}</p>}
                                            </div>
                                            <div className="app-form-group">
                                                <input
                                                    className="app-form-control"
                                                    placeholder="CONTACT NO"
                                                    name="contactNumber"
                                                    value={formData.contactNumber}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}
                                            </div>
                                            <div className="app-form-group message">
                                                <input
                                                    className="app-form-control"
                                                    placeholder="MESSAGE"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.message && <p className="error">{errors.message}</p>}
                                            </div>
                                            <div className="app-form-group buttons">
                                                <button className="app-form-button" type="submit">SEND</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GoogLocation />
            </section>
        </>
    );
};

export default Contact;
