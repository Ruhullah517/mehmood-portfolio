import React from 'react';
import './map.css';

const GoogLocation = () => {
    return <>
        <div className='frame-div'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d628.9436099443222!2d75.63355883463667!3d35.299043359300676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e463ee4ec2340b%3A0xd7b8d935dcf8846e!2sAli%20Shopping%20Mall%20Skardu!5e0!3m2!1sen!2s!4v1673221296548!5m2!1sen!2s"
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    </>
}

export default GoogLocation;