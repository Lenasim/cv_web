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
                            img="img/projet-6.png"
                            name="Application de gestion de stock"
                            skill="NodeJS · MySQL · ReactJS · Git · Scrum"
                            occasion="2020 @Wild Code School"
                        />
                        <Project
                            img="img/hackathon-travelmemorygame.png"
                            link="https://travel-memory-game.netlify.app/"
                            name="Travel Memory Game"
                            skill="ReactJS · Hooks · Web API · Git"
                            occasion="Hackathon 2020 @Wild Code School"
                            github="https://github.com/Lenasim/hackathon-wcs" />
                        <Project
                            img="img/projet-5.png"
                            link="https://random-night.netlify.app/"
                            name="Generateur d'activites pour la soiree"
                            skill="ReactJS · Web API · Git · Scrum"
                            occasion="2020 @Wild Code School"
                            github="https://github.com/Lenasim/Random-night" />
                        <Project
                            img="img/projet-4.png"
                            link="https://hailin-sim.netlify.app/"
                            name="CV web"
                            skill="ReactJS · Bootstrap"
                            occasion="2020"
                            github="https://github.com/Lenasim/cv_web" />
                        <Project
                            img="img/projet-3.png"
                            link="https://lenasim.github.io/p1-js-PAW/"
                            name="Blog pour une photographe"
                            skill="HTML · CSS · JS vanilla · Git"
                            occasion="2020 @Wild Code School"
                            github="https://github.com/Lenasim/p1-js-PAW" />
                        <Project
                            img="img/projet-2.png"
                            name="Refonte du site web responsive"
                            skill="UX · TaskForce Team"
                            occasion="2015 @Hansalim" />
                        <Project
                            img="img/project2014.png"
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