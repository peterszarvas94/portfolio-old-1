import React from 'react';

import '../../styles/WeatherApp.css';
import ScreenShot1 from '../../images/weather_screenshot_1.png';
import ScreenShot2 from '../../images/weather_screenshot_2.png';

const WeatherApp = () => {
    return (
        <>
            <div className='weather_app_container'>
                <h2>Weahter app</h2>
                <p>Here you can find some screenshots from the app, there is currently no live preview. I get the data from OperWeatherMap API.</p>
                <p>You can find the source code at <a href='https://github.com/peterszarvas94/weather' target='_blank' rel='noreferrer'>this link</a></p>
                <img alt='screenshot1' src={ScreenShot1} />
                <img alt='screenshot2' src={ScreenShot2} />
                
            </div>
        </>
    )
}

export default WeatherApp;