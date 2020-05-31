import React from 'react';

export default function Project(props) {
    return (
        <div className="projects_item">
            <div className="img_container">
                <img className="projects_image" src={props.img} alt="" />
            </div>
            <div className="projects_text">
                <a href={props.link}>
                    <h4>{props.name}</h4>
                </a>
                <p>{props.skill}</p>
                <p>{props.occasion}</p>
            </div>
            {props.github &&
                <div className="link_git">
                    <a href={props.github}>
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            }
        </div>
    )
}