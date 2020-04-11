import React from 'react';

export default function EducationItem(props) {
    return (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                <h3 className="mb-0 titletext"> {props.name}<span>{props.city}</span></h3>
                <div className="subheading mb-3">{props.diplome}</div>
                <p>{props.detail}</p>
            </div>
            <div className="resume-date text-md-right">
                <span className="text-primary">{props.period}</span>
            </div>
        </div>
    )
}



