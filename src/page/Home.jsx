import React from 'react'
import {Container} from "react-bootstrap";
import Header from '../components/Header';
import ShowcaseColumns from '../components/ShowcaseColumns';
import ShowcaseDeck from '../components/ShowcaseDeck';
import Team from '../components/Team';
import ControlledCarousel from '../components/ControlledCarousel';
import Hero from '../components/Hero';
import CustomerReview from '../components/CustomerReview';

function Home() {
    return (
        <div>
        <Header />
         <Hero/>
        <ShowcaseDeck/>
        <Container>
            <ControlledCarousel/>
        </Container>
        <CustomerReview />
        <ShowcaseColumns/>
        <Team/>

        </div>
        
    )
}

export default Home
