import React from 'react';
import photo from '../../images/about.jpg';
import photo1 from '../../images/about1.jpg';
import photo2 from '../../images/about2.jpg';
import './aboutStyles.css';

const About = () => {
    return (
        <div className='about'>
            <div className='about_container'>
                <div className='about_container-image'>
                    <img className='mt-3' src={photo} alt='my_photo' width='35%'/>
                </div>
                <div className='about_container-image1'>
                    <img id='catPhoto' src={photo1} alt='my_photo' width='37%'/>
                    <img id='dogPhoto' src={photo2} alt='my_photo' width='38%'/>
                </div>
                <div className='about_container-text'>
                    <h4 className='text-center'> ABOUT US </h4>
                    <p>
                        This project was created as an practice and has the goal to draw the attention of mankind to the problems of animals both in urban areas and in the wild.
                        National Pet Day on April 11th dedicates the day to those pets who may not always get the companionship and attention pets deserve. Celebrity Pet Lifestyle Expert & Animal Welfare Advocate Colleen Paige founded the day in 2005. While loving our pets is something we do every day, the observance encourages helping out orphaned pet companions.
                        The problem of helping wild animals also remains relevant. We believe that everyone's help is important and can make a big difference.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;