import React from 'react';


export default function Section(props) {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div className="w-100">
                {props.children}
            </div>
        </section>
    )
}