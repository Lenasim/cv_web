import React from 'react';
import Section from './Section'
import { Element } from 'react-scroll'

const ElementSkills = () => {
    return(
        <Element name="skills" className="element">
                <Section>
                    <h2 className="mb-5">Compétences</h2>

                    <div className="mb-5">
                        <h3 className="mb-0">Langages &amp; Outils</h3>
                        <p>HTML5 | CSS3 | JS ES6 | React | Node JS | Git | Bootstrap | mySQL | Adobe Photoshop Illustrator
                    </p>
                        <ul className="list-inline dev-icons">
                            <li className="list-inline-item">
                                <i className="fab fa-html5"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-css3-alt"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-js-square"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-react"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-node"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-git-alt"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-bootstrap"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fas fa-database"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-gulp"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-npm"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-adobe"></i>
                            </li>
                        </ul>
                    </div>

                    <h3 className="mb-0">Compétences</h3>
                    <p> </p>
                    <ul className="fa-ul mb-0">
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Mobile-First, Responsive Design</li>
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Developpement Agile &amp; Scrum</li>
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Marketing &amp; UX &amp; UI experiences </li>
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Gestion de temps </li>
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Travail d’équipe</li>
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Maîtriser des langues <br />➔ Francais | Anglais | Coreen</li>
                    </ul>
                </Section>
                </Element>            
    )
}

export default ElementSkills