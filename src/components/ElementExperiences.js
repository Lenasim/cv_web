import React from 'react';
import Section from './Section'
import EducationItem from './EducationItem'
import { Element } from 'react-scroll'

const ElementExperiences = () => {
    return (
        <Element name="#experiences" className="element">
            <Section id="experiences">
                <h2 className="mb-5">Expériences</h2>
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
    )
}

export default ElementExperiences