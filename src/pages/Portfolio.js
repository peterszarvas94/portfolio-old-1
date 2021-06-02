import React from 'react';

import Project from '../components/Project';
import '../styles/Portfolio.css';

const Portfolio = () => {

    const generateProjects = () => {
        let options = [];
        for(let i = 0; i < 4; i++) {
            options.push(<Project id={i} key={i}/>)
        }
        return options;
    }

    const handlePortfolioScroll = () => {
        const portfolio_top = document.getElementById('portfolio').getBoundingClientRect().top + window.pageYOffset;
        const nav_height = document.getElementById('nav_list').getBoundingClientRect().height;

        const projects = document.getElementsByClassName('project_element');

        const addAminationClass = (i) => {
            projects[i].classList.add('project_animation');
            i++;
            if (i < projects.length) {
                setTimeout(() => {
                    addAminationClass(i)
                }, 100);
            } else {
                document.removeEventListener('scroll', handlePortfolioScroll);
            }
        }

        if (window.pageYOffset >= portfolio_top - nav_height - window.innerHeight*1/5) {
            addAminationClass(0);
        }
    }

    document.addEventListener('scroll', handlePortfolioScroll);

    return (
        <>
            <div className='portfolio' id='portfolio'>
                <h3 className='portfolio_title'>Previous works</h3>
                <div className='portfolio_grid'>
                    { generateProjects() }
                </div>
            </div>
        </>
    )
}

export default Portfolio;
