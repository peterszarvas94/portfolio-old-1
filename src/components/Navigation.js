import React from 'react';

import '../styles/Navigation.css';

const Navigation = () => {

    // get the absolute top Y coordinate of an element
    const getElementTop = (id) => document.getElementById(id).getBoundingClientRect().top + window.pageYOffset;

    // scroll to an element from the menu
    const scrollTo = (id) => {
        if (id === 0) {
            window.scroll(0, 0);
            return;
        }

        const nav_height = document.getElementById('nav_list').getBoundingClientRect().height;
        window.scroll(0, getElementTop(id) - nav_height +1);
    }

    // highlight current button, remove highlight from previous
    document.addEventListener('scroll', () => {
        const nav_elements = document.getElementsByClassName('nav_animate');
        const nav_height = document.getElementById('nav_list').getBoundingClientRect().height;
        const page_elements = ['header_title', 'about', 'portfolio', 'contact'];
        const element_tops = page_elements.map((el) => getElementTop(el));

        for (let i = 0; i < element_tops.length; i++) {
            const current_top = element_tops[i] - nav_height;
            const next_top = element_tops[i+1] - nav_height;
            
            if (window.pageYOffset >= current_top) {
                if ((next_top && window.pageYOffset < next_top) || !next_top) {

                    for(let el of nav_elements) {
                        if (el.classList.contains('nav_active')) {
                            el.classList.remove('nav_active');
                        }
                        nav_elements[i].classList.add('nav_active')                        
                    }
                }
            }
        }                
    });

    return (
        <>
            <div className='nav_before' id='nav_before' />
            <div class='nav_container'>
                <ul className='nav_list' id='nav_list'>
                    <li className='nav_animate nav_animate_1 nav_active' onClick={
                        () => { scrollTo(0) }
                    }>
                        <button>
                            HOME
                        </button>
                    </li>
                    <li className='nav_animate nav_animate_2' onClick={
                        () => { scrollTo('about') }
                    }>
                        <button>
                            ABOUT
                        </button>
                    </li>
                    <li className='nav_animate nav_animate_3' onClick={
                        () => { scrollTo('portfolio') }
                        }>
                        <button>
                            PORTFOLIO
                        </button>
                    </li>
                    <li className='nav_animate nav_animate_4' onClick={
                        () => { scrollTo('contact') }
                    }>
                        <button>
                            CONTACT
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation;
