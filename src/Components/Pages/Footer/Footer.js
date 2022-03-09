import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Business Hours</h2>
                        <Link to='/'>M: Closed</Link>
                        <Link to='/'>Tue: 9am-6pm CST</Link>
                        <Link to='/'>Wed: 9am-6pm CST</Link>
                        <Link to='/'>Thurs: 9am-6pm CST</Link>
                        <Link to='/'>Fri: 9am-7pm CST</Link>
                        <Link to='/'>Sat: 7am-8pm CST</Link>
                        <Link to='/'>Sun: 10am-4pm CST</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to={'//www.instagram.com/executiv_grooming/'} target='_blank'>Instagram</Link>
                        <Link to={'//www.facebook.com/'} target='_blank'>Facebook</Link>
                        <Link to={'//www.twitter.com/'} target='_blank'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            EXECUTIV
                        </Link>
                    </div>
                    <small className='website-rights' color={'#85002E'}>EXECUTIV © 2020 by <Link
                        to='//https://www.instagram.com/treydevs/'> TDAVisuals</Link></small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link'
                            to={'https://www.facebook.com/executIVgrooming/'}
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook color={'#338791'}/>
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={
                                'https://www.instagram.com/executivgrooming/'
                            }
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram color={'#338791'}/>
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={'//www.twitter.com/'}
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter color={'#338791'}/>
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={'https://www.linkedin.com/'}
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin color={"#338791"}/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
