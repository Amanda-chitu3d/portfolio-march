import React from 'react'
import Hero from '../components/Hero';
import ShowcaseColumns from '../components/ShowcaseColumns';
import ControlledCarousel from '../components/ControlledCarousel';
import FeatureCard from '../components/FeatureCard';


function Projects() {
    return (
        <div>
            <ControlledCarousel/>
            <Hero/>
            <FeatureCard/>
            
            <ShowcaseColumns/>
        </div>
    )
}

export default Projects
