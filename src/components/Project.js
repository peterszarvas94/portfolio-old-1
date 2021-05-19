import React from 'react';

import '../styles/Project.css';

const Project = (props) => {

    const randomColor = () => [74, 78, 105].map((n) => Math.floor(Math.random()*40-20+n));
    const colors = randomColor();

    return (
        <div className='project_container'>
            <div
                className='project_element'
                id={'project_' + props.id}
                style={{
                    backgroundColor:'rgb(' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + ')'
                }}
            >
                project {props.id}
            </div>
        </div>
    )
}

export default Project;
