import React from 'react';
import Section from './Section'
import EducationItem from './EducationItem'
import Project from './Project'
import { Element } from 'react-scroll'

class Content extends React.Component {



    render() {

        return (
            <div className="container-fluid p-0">
                <Element name="#about" className="element">
                <Section id="about">
                    <h1 className="mb-0">Hailin <span className="text-primary">SIM</span>
                    </h1>
                    <div className="subheading mb-5">DEVELOPPEUR WEB JUNIOR &nbsp; &nbsp; | &nbsp; &nbsp; REACT · NODE JS
                    <br /> Recherche de stage d'une durée de 6 mois à partir de Aout 2020
                    <br /> <a href="mailto:radical.rin@gmail.com">radical.rin@gmail.com</a>
                    </div>
                    <p className="lead mb-5">Je suis actuellement en formation chez Wild Code School. I have got through XX
                    professional experiences, which can contribute in dev work by XXX. I am capable of XX. I am
                    passionated blabla!! </p>
                    <div className="social-icons">
                        <a href="#contact">
                            <i className="fas fa-at"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/lena-hailin-sim">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/lenasim">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="file/CV-Dev-Stage-Hailin SIM -Aout.pdf">
                            <i className="fas fa-file-download"></i>
                        </a> &nbsp; Telechargez mon CV 
                    </div>
                </Section>
                </Element>

                <hr className="m-0" />

                <Element name="#education" className="element">
                <Section id="education">
                    <h2 className="mb-5">Education</h2>
                    <EducationItem 
                        name="Wild Code School " 
                        city="Paris" 
                        diplome="Titre professionnel Web et Web Mobile &nbsp;≡ BAC+2" 
                        period="03. 2020 - 07. 2020 (Present)" />
                    <EducationItem 
                        name="GASTRONOMICOM " 
                        city="Agde" 
                        diplome="Diplôme en Pâtisserie &nbsp;≡ BEP" 
                        period="09. 2017 - 10. 2018" />
                    <EducationItem 
                        name="EWHA WOMANS UNIVERSITY " 
                        city="SEOUL, COREE DU SUD" 
                        diplome="Licence en Administration et gestion et en Psychologie" 
                        period="2007 - 2014" />                
                </Section>
                </Element>

                <hr className="m-0" />

                <Element name="#experience" className="element">
                <Section id="experience">
                    <h2 className="mb-5">Experience</h2>
                    <EducationItem 
                        name="Chef Patissiere " 
                        diplome="YITHE, Paris 1E" 
                        period="05. 2019 - 03. 2020" />  
                    <EducationItem 
                        name="Patissiere " 
                        diplome="Philippe Conticini, Paris 7E" 
                        period="11. 2018 - 02. 2019" />                        
                    <EducationItem 
                        name="Stagiaire en patisserie " 
                        diplome={`La Bastide de Gordes, 
                        PEIR par Pierre Gagnaire, Gordes`}
                        period="04. 2018 - 10. 2018" />                        

                    <EducationItem 
                        name="Assistant Marketing " 
                        diplome="Hansalim, Seoul, Coree du sud" 
                        period="12. 2013 - 01. 2016"
                        detail="En charge du site web / Promotion des boutiques / Management de réseaux sociaux / Mise en
                        application de site responsive d'entreprise en TF team" />                        
                    <EducationItem 
                        name="Stagiaire en Marketing | UX | UI " 
                        diplome="NAVER, Seongnam, Coree du sud" 
                        period="06. 2013 - 08. 2013"
                        detail="En formation UX, UI, Web marketing / Création de pages événementielles" />                        
                    <EducationItem 
                        name="Responsable de projet " 
                        diplome="ONG NanumMunhwa, Seoul, Coree du sud" 
                        period="05. 2008 - 02. 2012"
                        detail="Planification d’une collecte de fonds et d’une pétition et présidence des conférences
                        publiques" />                        
                </Section>
                </Element>            

                <hr className="m-0" />

                <Element name="#skills" className="element">
                <Section id="skills">
                    <h2 className="mb-5">Skills</h2>

                    <div className="mb-5">
                        <h3 className="mb-0">Programming Languages &amp; Tools</h3>
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

                    <h3 className="mb-0">Soft skills</h3>
                    <p> </p>
                    <ul className="fa-ul mb-0">
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Mobile-First, Responsive Design</li>
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Agile Development &amp; Scrum</li>
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Point de vue du marketing &amp; UX &amp; UI <br /> ➔ Etudes et experiences professionnelles dans
                                                            le
                        marketing</li>
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Gestion de temps <br />➔ Apte à un travail précis sous pression &amp; gérer en fonction des
                        échéanciers</li>
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Travail d’équipe</li>
                        <li className="softskills">
                            <i className="fa-li fa fa-check"></i>
                        Maîtriser des langues <br />➔ Francais | Anglais | Coreen</li>
                    </ul>
                </Section>
                </Element>            

                <hr className="m-0" />

                <Element name="#projects" className="element">
                <Section id="projects">
                    <h2 className="mb-5">Projects</h2>
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
                                name="Refonte du site web responsive" 
                                occasion="2014 @NAVER" />                            
                        </div>
                    </div>
                </Section>
                </Element>            

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