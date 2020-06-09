import React from 'react';
import Section from './Section'
import { Element } from 'react-scroll'


const ElementAbout = () => {
    return (
        <Element name="about" className="element">
            <Section>
                <h1 className="mb-0">Hailin <span className="text-primary">SIM</span>
                </h1>
                <div className="subheading-main mb-5">DEVELOPPEUR WEB JUNIOR &nbsp; &nbsp; | &nbsp; &nbsp; REACT JS · NODE JS
                    <br />
                    <br /> <a href="mailto:radical.rin@gmail.com">hailin.sim@gmail.com</a>
                </div>
                <p className="lead bold">Etudiante en développement web à la Wild Code School </p>
                <p className="lead bold"> En recherche d’un stage ou d’une alternance à partir d’août 2020</p>
                <p className="lead mb-5"> Après dix années passées dans le domaine du marketing et de la pâtisserie, 
                j’effectue aujourd’hui une nouvelle transition dans mon parcours professionnel. 
                Attentive à l’évolution des nouvelles technologies, je suis en veille constante et 
                je suis toujours prête à relever de nouveaux défis. </p>
                <div className="social-icons subheading">
                    <a href="mailto:hailin.sim@gmail.com">
                        <i className="fas fa-at"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/lena-hailin-sim">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/lenasim">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="file/CV-HailinSIM-dev.pdf">
                        <i className="fas fa-file-download"></i>
                    </a> &nbsp; Telechargez mon CV
                </div>
            </Section>
        </Element >
    )
}

export default ElementAbout