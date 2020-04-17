import React from 'react';
import Section from './Section'
import { Element } from 'react-scroll'


const ElementAbout = () => {
    return (
        <Element name="about" className="element">
            <Section>
                <h1 className="mb-0">Hailin <span className="text-primary">SIM</span>
                </h1>
                <div className="subheading mb-5">DEVELOPPEUR WEB JUNIOR &nbsp; &nbsp; | &nbsp; &nbsp; REACT JS · NODE JS
                    <br />
                    <br /> <a href="mailto:radical.rin@gmail.com">radical.rin@gmail.com</a>
                </div>
                <p className="lead">Etudiante en développement web chez Wild Code School </p>
                <p className="lead"> En recherche de stage pour une durée de 4 mois à partir d’août 2020</p>
                <p className="lead mb-5"> ✔️motivée ✔️Curieuse ✔️Dynamique ✔️autonome </p>
                <div className="social-icons subheading">
                    <a href="mailto:radical.rin@gmail.com">
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
        </Element >
    )
}

export default ElementAbout