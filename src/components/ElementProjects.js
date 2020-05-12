import React from 'react';
import Section from './Section'
import Project from './Project'
import { Element } from 'react-scroll'

const ElementExperiences = () => {
    return (
        <Element name="projects" className="element">
            <Section>
                <h2 className="mb-5">Projets</h2>
                <div className="resume-item">
                    <div className="projects_inner">
                        <Project
                            img="img/projet-5.png"
                            link="https://random-night-test.netlify.app/"
                            name="Generateur d'activites pour la soiree"
                            skill="ReactJS · Git · Scrum"
                            occasion="2020 @Wild Code School" />
                        <Project
                            img="img/projet-4.png"
                            link="https://cv-hailin-sim.netlify.app/"
                            name="CV web"
                            skill="ReactJS · Bootstrap"
                            occasion="2020" />
                        <Project
                            img="img/projet-3.png"
                            link="https://lenasim.github.io/p1-js-PAW/"
                            name="Blog pour une photographe"
                            skill="HTML · CSS · JS vanilla · Git"
                            occasion="2020 @Wild Code School" />
                        <Project
                            img="img/projet-2.png"
                            link="http://eng.hansalim.or.kr/"
                            name="Refonte du site web responsive"
                            skill="UX · TaskForce Team"
                            occasion="2015 @Hansalim" />
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