import React from 'react';

import { FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaJava } from 'react-icons/fa';
import { DiMongodb, DiHtml5, DiCss3, DiJavascript } from 'react-icons/di';
import { BiNetworkChart } from 'react-icons/bi';

import '../styles/Paragraph.css';
import '../styles/Color.css';

const Paragraph = () => {

    return (
        <>
            {/* few line about me */}
            <div className='home_paragraph few_line' id='few_line'>
                <h3>Nice to meet you!&nbsp;&#x1F60A;{/*😊*/}</h3>
                <p id='this'>
                    I'm a self-taught coder, learning new technologies and creating exciting projects every day.
                    I had some experiences with programming and tech before, I'm working in the IT sector.<br/>
                    I'm dedicated to coding since two years, and my natural curiosity drives me forward since than.
                </p>
            </div>

            {/* current technologies */}
            <div className='home_paragraph current_tech'>
                <p>Technologies I am currently using:</p>
                <ul>
                    <li className='reactBlue'><FaReact />&nbsp;React</li>
                    <li><DiJavascript />&nbsp;Express</li>
                    <li className='nodeGreen'><FaNodeJs />&nbsp;Node</li>
                    <li className='gitRed'><FaGitAlt />&nbsp;Git</li>
                    <li className='mongoGreen'><DiMongodb />&nbsp;MongoDB</li>
                    <li className='htmlOrange'><DiHtml5 />&nbsp;HTML</li>
                    <li className='cssBlue'><DiCss3 />&nbsp;CSS</li>
                </ul>
            </div>

            {/* previous technilogies */}
            <div className='home_paragraph prevoius_tech'>
                <p>I also have some experience with:</p>
                <ul>
                    <li className='wordpressBlue'><FaWordpress />&nbsp;WordPress</li>
                    <li className='javaYellow'><FaJava />&nbsp;Java</li>
                    <li><BiNetworkChart />&nbsp;Neural networks</li>
                </ul>
            </div>
        </>
    )
}

export default Paragraph;
