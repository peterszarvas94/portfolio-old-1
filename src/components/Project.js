import React from 'react';

import '../styles/Project.css';

const Project = (props) => {

    return (
    
        <div
            className='project_container'
        >
            
            <img
                alt={props.img}
                className='project_filter'
                src={props.img}
            />
            <a href={props.url} target='_blank' rel='noreferrer'>
                <div
                    className='project_element'
                    id={'project_' + props.id}
                    style={{color: props.color}}
                >
                {props.title}
                </div>
            </a>
        </div>

        
    )
}

export default Project;
