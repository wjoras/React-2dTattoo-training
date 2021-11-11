import React from 'react';

import "./Contact.css"
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
    return ( 
        <>
        <div className="top-bar">
            <div className="container">
                <div className="container-inner">
                    <div className="row">

                        <div className="social-icon">
                        <h1 className="logo-name"><span id="span-1">2</span><span id="span-2">D</span><span id="span-3">Tattoo</span></h1>
                        </div>

                        <div className="social_networks"> 
                        <a className="wpp" href="https://api.whatsapp.com/send?phone=" target="_blank" rel="noreferrer"><BsWhatsapp/></a>
                                              
                            <a className="fb-link" href="https://www.facebook.com/angelogabrieeel" target="_blank" rel="noreferrer"><BsFacebook/></a>
                            <a className="insta-link" href="https://www.instagram.com/2dtattooink/" target="_blank" rel="noreferrer"><BsInstagram/></a>
                        </div>

                </div>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default Contact;