import React from 'react';
import ElementAbout from './ElementAbout'
import ElementSkills from './ElementSkills'
import ElementEducation from './ElementEducation'
import ElementExperiences from './ElementExperiences'
import ElementProjects from './ElementProjects'

class Content extends React.Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <ElementAbout />
                <hr className="m-0" />
                <ElementSkills />
                <hr className="m-0" />
                <ElementEducation />
                <hr className="m-0" />
                <ElementExperiences />
                <hr className="m-0" />
                <ElementProjects />
                <hr className="m-0" />
                {/* <Element name="#contact" className="element">
                <Section id="contact">
                    <h2 className="mb-5">Contact Me</h2>
                    <div className="contact-form">
                        <input type="text" className="form-control" placeholder="Your Name" />
                        <input type="text" className="form-control" placeholder="Your Email" />
                        <textarea className="form-control" placeholder="Your Message"></textarea>
                        <button type="submit">Send</button>
                    </div>
                </Section>
                </Element>             */}
            </div>
        )
    }
}


export default Content