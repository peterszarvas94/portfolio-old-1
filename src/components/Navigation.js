import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import '../styles/Navigation.css';

const Navigation = () => {

    // state for the menu opening
    const [opened, setOpened] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // updating the menu
    useEffect(() => {
        const list = document.getElementById('nav_list');
        list.classList.remove('nav_list_animate_in', 'nav_list_animate_out');
        list.classList.add((opened) ? 'nav_list_animate_in' : 'nav_list_animate_out');
    }, [opened]);

    //check if clicked and not auto-run
    useEffect(() => {
        const list = document.getElementById('nav_list');
        if (loaded) list.style.display = 'block';
    }, [loaded]);

    document.addEventListener('scroll', console.log('hey'))

    // handling sandwich menu click
    const toggleMenu = () => {
        if (!loaded) setLoaded(true);
        setOpened(!opened);
    }

    // get the absolute top Y coordinate of an element
    const getElementTop = (id) => document.getElementById(id).getBoundingClientRect().top + window.pageYOffset;

    // scroll to an element from the menu
    const scrollTo = (id) => {
        if (id === 0) {
            window.scroll(0, 0);
            toggleMenu();
            return;
        }


        const nav_height = document.getElementById('nav_container').getBoundingClientRect().height;
        window.scroll(0, getElementTop(id) - nav_height +1);

        toggleMenu();
    }

    // highlight current button, remove highlight from previous
    document.addEventListener('scroll', () => {
        const nav_elements = document.getElementsByClassName('nav_animate');
        const nav_height = document.getElementById('nav_container').getBoundingClientRect().height;
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
            <div className='nav_container' id='nav_container'>
                <div className='nav_sandwich'>
                    <div className="nav_sandwich_button" onClick={toggleMenu}>
                        <HiMenu/>
                    </div>
                </div>
                <ul className='nav_list' id='nav_list'>
                    <li className='nav_close' onClick={toggleMenu}>
                        <HiX />
                    </li>
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
