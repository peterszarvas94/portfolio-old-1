import React from 'react';

import '../styles/HeaderTitle.css';

const HeaderTitle = () => {

    const wave = () => {
        document.getElementById('wave_animate').animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(10deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(10deg)' },
            { transform: 'rotate(0deg)' }
        ], 1000);
    }

    return (
        <div className='header_title' id='header_title'>
            <h1 className='title_animate_1'>
                Hi&nbsp;<div id='wave_animate' className='wave_animate' onClick={wave}>&#x1F44B;</div>{/*👋*/},
                I am
            </h1>
            <h1 className='title_animate_2'>
                <strong>Péter Szarvas,</strong>
            </h1>
            <h2 className='title_animate_3'>junior web developer</h2>
            
        </div>
    )
}

export default HeaderTitle;
