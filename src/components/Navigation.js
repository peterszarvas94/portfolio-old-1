import React from 'react';

import '../styles/Navigation.css';

const Navigation = () => {

    const scrollTo = (id, current) => {


        // scroll to element

        const nav_elements = document.getElementsByClassName('nav_animate');
        const nav_height = nav_elements[0].getBoundingClientRect().height;
        const element_top = document.getElementById(id).getBoundingClientRect().top + window.pageYOffset;
        window.scroll(0, element_top - nav_height);

        // highlight current button, remove highlight from previous

        for(let el of nav_elements) {
            if (el.classList.contains('nav_active')) {
                el.classList.remove('nav_active');
            }
            if (el.classList.contains(current)) {
                el.classList.add('nav_active');
            }
        }

        // * add min height to title (.few_line min top position)
    }

    return (
        <>
            <ul className='nav_list'>
                <li className='nav_animate nav_animate_1 nav_active' onClick={() => {scrollTo('header_title', 'nav_animate_1')}}>
                    <button>
                        home
                    </button>
                </li>
                <li className='nav_animate nav_animate_2' onClick={() => {scrollTo('few_line', 'nav_animate_2')}}>
                    <button>
                        about
                    </button>
                </li>
                <li className='nav_animate nav_animate_3' onClick={() => {scrollTo('portfolio', 'nav_animate_3')}}>
                    <button>
                        portfolio
                    </button>
                </li>
                <li className='nav_animate nav_animate_4' onClick={() => {scrollTo('contact', 'nav_animate_4')}}>
                    <button>
                        contact
                    </button>
                </li>
            </ul>
        </>
    )
}

export default Navigation;
