import React from 'react';
import Section from './Section'
import Project from './Project'
import { Element } from 'react-scroll'

const ElementExperiences = () => {
    return (
        <Element name="projects" className="element">
            <Section>
                <h2 className="mb-5">Projets</h2>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="projects_inner row">
                        <Project
                            img="img/projet1.png"
                            link="https://lenasim.github.io/p1-js-PAW/"
                            name="Site web fictif - JS/HTML/CSS"
                            occasion="2020 @Wild Code School" />
                        <Project
                            img="img/projet2015.png"
                            link="http://eng.hansalim.or.kr/"
                            name="Refonte du site web responsive"
                            occasion="2015 @Hansalim, TF team" />
                        <Project
                            img="img/projet2014.jpg"
                            link="https://vimeo.com/124384331"
                            name="UX UI Marketing Bootcamp"
                            occasion="2014 @NAVER" />
                             
                    </div>
                </div>
            </Section>
        </Element>
    )
}

export default ElementExperiences