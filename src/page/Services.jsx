import React from 'react'
import Pricing from '../components/Pricing';
import Hero from '../components/Hero';
import ControlledCarousel from '../components/ControlledCarousel';

function Services() {
    return (
        <div>
             <Hero/>
            <Pricing/>
            <ControlledCarousel/>
            <Hero/>
        </div>
    )
}

export default Services
