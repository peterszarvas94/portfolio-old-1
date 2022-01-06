import React from 'react';

import Project from '../components/Project';
import '../styles/Portfolio.css';

import Sorting from '../images/sorting.png';
import Dividends from '../images/dividends.png';

const Portfolio = () => {

    //animate project loading
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
                    <Project
                        id={0}
                        key={0}
                        title='Sorting algorithms'
                        img={Sorting}
                        url='https://tender-booth-f0f6bb.netlify.app/'
                    />
                    <Project
                        id={1}
                        key={1}
                        title='Dividend checker'
                        img={Dividends}
                        url='https://wonderful-yalow-9a6209.netlify.app/'
                    />
                </div>
            </div>
        </>
    )
}

export default Portfolio;
