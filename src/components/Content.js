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
                <ElementProjects />
                <hr className="m-0" />
                <ElementEducation />
                <hr className="m-0" />
                <ElementExperiences />
                <hr className="m-0" />
            </div>
        )
    }
}


export default Content