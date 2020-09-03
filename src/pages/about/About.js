import React from 'react';
import photo from '../../images/IMG_5977.jpg';
import './aboutStyles.css';

const About = () => {
    return (
        <div className='about'>
            <div className='about_container'>
                <div className='about_container-image'>
                    <img src={photo} alt='my_photo' width='35%'/>
                </div>
                <div className='about_container-text'>
                    <h4 className='text-center'> Meet Me </h4>
                    <p>
                        My name is Tania Stepanova. I live in Vinnytsia, Ukraine.
                        I'm 21.
                        I've been studying the frontend since winter, and I really like it.
                        I graduated from Vinnytsia National Technical University this summer.
                        I'm 21. I've been studying the frontend since winter, and I really like it. I graduated from Vinnytsia National Technical University this summer.
                        For the first time I got acquainted with the React in the EPAM university program.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;