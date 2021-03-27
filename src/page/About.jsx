import React from 'react'
import ShowcaseColumns from '../components/ShowcaseColumns'
import Hero from '../components/Hero';
import {Container} from "react-bootstrap";
import ControlledCarousel from '../components/ControlledCarousel';
import Team from '../components/Team';

function About() {
    return (
        <div>
        <Container>
         <ControlledCarousel/>   
        </Container>
        <Hero/>
        <ShowcaseColumns/>
        <Hero/>
        <Team/>
        </div>
    )
}

export default About
