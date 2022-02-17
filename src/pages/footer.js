import React from 'react';
import { FaFacebook, FaTwitter, FaEnvelope, FaInstagram, FaRegCopyright} from 'react-icons/fa';

export default function Footer () {
    return (
        <div className='footer'>
            <p><FaRegCopyright /> 2021 | Gordon Inc.</p>
            <div className='social'>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaEnvelope />
            </div>
        </div>
    )
}