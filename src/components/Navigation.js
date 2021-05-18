import React from 'react';

import '../styles/Navigation.css';

const Navigation = () => {

    // get the absolute top Y coordinate of an element
    const getElementTop = (id) => document.getElementById(id).getBoundingClientRect().top + window.pageYOffset;

    // scroll to an element from the menu
    const scrollTo = (id, current) => {
        const nav_height = document.getElementById('nav_list').getBoundingClientRect().height;
        window.scroll(0, getElementTop(id) - nav_height);
    }

    // highlight current button, remove highlight from previous
    document.addEventListener('scroll', () => {
        const nav_elements = document.getElementsByClassName('nav_animate');
        const nav_height = document.getElementById('nav_list').getBoundingClientRect().height;
        const page_elements = ['header_title', 'about', 'portfolio', 'contact'];
        const element_tops = page_elements.map((el) => getElementTop(el));

        for (let i = 0; i < element_tops.length; i++) {
            const current_top = Math.floor(element_tops[i] - nav_height);
            const next_top = Math.floor(element_tops[i+1] - nav_height);
            
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
            <ul className='nav_list' id='nav_list'>
                <li className='nav_animate nav_animate_1 nav_active' onClick={
                    () => { scrollTo('header_title', 'nav_animate_1') }
                }>
                    <button>
                        home
                    </button>
                </li>
                <li className='nav_animate nav_animate_2' onClick={
                    () => { scrollTo('about', 'nav_animate_2') }
                }>
                    <button>
                        about
                    </button>
                </li>
                <li className='nav_animate nav_animate_3' onClick={
                    () => { scrollTo('portfolio', 'nav_animate_3') }
                    }>
                    <button>
                        portfolio
                    </button>
                </li>
                <li className='nav_animate nav_animate_4' onClick={
                    () => { scrollTo('contact', 'nav_animate_4') }
                }>
                    <button>
                        contact
                    </button>
                </li>
            </ul>
        </>
    )
}

export default Navigation;
