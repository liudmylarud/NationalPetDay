import React from 'react';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/twitter.png';
import './footerStyle.css';
import footerImg from '../../images/paws.png';
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='col-12 text-center'>
                <img src={footerImg} alt='footerImg' width='690px' height='370px'/>
            </div>
            <div className='container pb-2 bg-white'>
                <div className='row mr-auto ml-auto text-center'>
                    <div className='col-lg-4 col-md-12 pt-3'>
                        <div className='font-weight-bold'>BE THEIR HERO</div>
                        <div>Animals have come to mean so much in our lives.</div>
                    </div>
                    <div className='col-lg-4 col-md-12 pt-3'>
                        <div className='font-weight-bold'>WE ARE IN SOCIAL MEDIA</div>
                        <div className='row pt-4 pl-3 pr-3'>
                            <NavLink to='#instagram' className='col-4 text-center'>
                                <img onClick={(e)=> window.location = 'https://www.instagram.com/nationalpetday/'} src={instagram} alt='instagram' width='40px'/>
                            </NavLink>
                            <NavLink to='#facebook' className='col-4 text-center'>
                                <img onClick={(e)=> window.location = 'https://www.facebook.com/nationalpetday/'} src={facebook} alt='facebook' width='40px'/>
                            </NavLink>
                            <NavLink to='#twitter' className='col-4 text-center'>
                                <img onClick={(e)=> window.location = 'https://twitter.com/nationalpetday'} src={linkedin} alt='twitter' width='40px'/>
                            </NavLink>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 pt-3'>
                        <div className='font-weight-bold'>PETS CHANGE LIVES. WE CHANGE THEIRS</div>
                        <p>We believe that everyone's help is important.</p>
                    </div>
                </div>
            </div>
            <div className='pt-5'>
                Copyright <span>&copy;</span> NPD Co. 2022. All rights reserved
            </div>
        </div>
    );
};

export default Footer;