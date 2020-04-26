import React from 'react';

export default function Project(props){
    return(
            <div className="projects_item">
                <img className="img-fluid" src={props.img} alt="" />
                <div className="projects_text">
                    <a href={props.link}>
                        <h4>{props.name}</h4>
                    </a>
                    <p>{props.skill}</p>
                    <p>{props.occasion}</p>
                </div>
        </div>
    )
}