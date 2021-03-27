import React from 'react'
import Hero from '../components/Hero';
import ShowcaseColumns from '../components/ShowcaseColumns';
import ControlledCarousel from '../components/ControlledCarousel';


function Projects() {
    return (
        <div>
            <ControlledCarousel/>
            <Hero/>
            
            <ShowcaseColumns/>
        </div>
    )
}

export default Projects
