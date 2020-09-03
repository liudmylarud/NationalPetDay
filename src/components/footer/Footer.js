import React from 'react';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import './footerStyle.css';
import footerImg from '../../images/footer.png';
import {NavLink} from "react-router-dom";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='col-12 text-center'>
                <img src={footerImg} alt='footerImg' width='100%'/>
            </div>
            <div className='container pb-2 bg-white'>
                <div className='row mr-auto ml-auto text-center'>
                    <div className='col-lg-4 col-md-12 pt-3'>
                        <div className='font-weight-bold'>LOCATION</div>
                        <div>some where in Vinnytsia</div>
                    </div>
                    <div className='col-lg-4 col-md-12 pt-3'>
                        <div className='font-weight-bold'>AROUND THE WEB</div>
                        <div className='row pt-4 pl-3 pr-3'>
                            <NavLink to='#instagram' className='col-4 text-center'>
                                <img src={instagram} alt='instagram' width='40px'/>
                            </NavLink>
                            <NavLink to='#facebook' className='col-4 text-center'>
                                <img src={facebook} alt='facebook' width='40px'/>
                            </NavLink>
                            <NavLink to='#linkedin' className='col-4 text-center'>
                                <img src={linkedin} alt='linkedin' width='40px'/>
                            </NavLink>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 pt-3'>
                        <div className='font-weight-bold'>ABOUT PROJECT</div>
                        <p>This is a simple blog using React, Redux, Bootstrap</p>
                    </div>
                </div>
            </div>
            <div className='pt-5'>
                Copyright <span>&copy;</span> T. Stepanova 2020
            </div>
        </div>
    );
};

export default Footer;