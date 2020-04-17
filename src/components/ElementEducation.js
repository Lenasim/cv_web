import React from 'react';
import Section from './Section'
import EducationItem from './EducationItem'
import { Element } from 'react-scroll'

const ElementEducation = () => {
    return (
        <Element name="education" className="element">
            <Section>
                <h2 className="mb-5">Diplômes</h2>
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
    )
}

export default ElementEducation