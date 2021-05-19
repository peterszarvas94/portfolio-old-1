import React from 'react';

import { FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaJava } from 'react-icons/fa';
import { DiMongodb, DiHtml5, DiCss3, DiJavascript } from 'react-icons/di';
import { BiNetworkChart } from 'react-icons/bi';

import '../styles/About.css';
import '../styles/Color.css';

const About = () => {

    const handleAboutScroll = () => {
        const about_elements = ['few_line', 'current_tech', 'previous_tech'].map((el) => document.getElementById(el));
        const about_element_tops = about_elements.map((el) => el.getBoundingClientRect().top + window.pageYOffset);
        const nav_height = document.getElementById('nav_list').getBoundingClientRect().height;

        for (let i = 0; i < about_element_tops.length; i++) {
            if (window.pageYOffset >= about_element_tops[i] - nav_height - window.innerHeight*4/5) {
                about_elements[i].classList.add('about_animation');
            }
        }        
    }

    document.addEventListener('scroll', handleAboutScroll);

    return (
        <div className='about' id='about'>

            {/* few line about me */}
            <div className='about_paragraph few_line' id='few_line'>
                <h3>Nice to meet you!</h3>
                <p id='this'>
                    I'm a self-taught coder, learning new technologies and creating exciting projects every day.
                    I have always had an interest in programming and tech, and I'm currently working as a Windows system administrator.<br/>
                    I'm dedicated to coding since approx. two years, and I'm trying to become an offical developer.
                </p>
            </div>

            {/* current technologies */}
            <div className='about_paragraph current_tech' id='current_tech'>
                <p>Technologies I am currently using:</p>
                <ul>
                    <li><span className='reactBlue'><FaReact /></span>&nbsp;React</li>
                    <li><DiJavascript />&nbsp;Express</li>
                    <li><span className='nodeGreen'><FaNodeJs /></span>&nbsp;Node</li>
                    <li><span className='gitRed'><FaGitAlt /></span>&nbsp;Git</li>
                    <li><span className='mongoGreen'><DiMongodb /></span>&nbsp;MongoDB</li>
                    <li><span className='htmlOrange'><DiHtml5 /></span>&nbsp;HTML</li>
                    <li><span className='cssBlue'><DiCss3 /></span>&nbsp;CSS</li>
                </ul>
            </div>

            {/* previous technilogies */}
            <div className='about_paragraph prevoius_tech' id='previous_tech'>
                <p>I also have some experience with:</p>
                <ul>
                    <li><span className='wordpressBlue'><FaWordpress /></span>&nbsp;WordPress</li>
                    <li><span className='javaYellow'><FaJava /></span>&nbsp;Java</li>
                    <li><BiNetworkChart />&nbsp;Neural networks</li>
                </ul>
            </div>

        </div>
    )
}

export default About;
