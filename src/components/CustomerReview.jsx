import React from 'react'
import {  Card, Container,Carousel } from 'react-bootstrap';

function CustomerReview() {
    return (
        <Container className="mt-2">
         
          <Card className="text-center bg-warning" border="light">
    <Card.Body>
      <Card.Title>Customer Review Quote</Card.Title>
      <Card.Text>
      With us, you can reduce your tech workload while maximising your productivity and growth.

      </Card.Text>
      
    </Card.Body>
          </Card>
           
           
          <Carousel fade >
  <Carousel.Item>
            <Card >
  <Card.Header>Margaret Miller</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0 bg-">
      <p>
        {' '}
         They did good service.Popularity makes no law invulnerable to invalidation. Americans accept judicial supervision of their democracy - judicial review of popular but possibly unconstitutional statutes - because they know that if the Constitution is truly to constitute the nation, it must trump some majority preferences.{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card >
</Carousel.Item>
<Carousel.Item>
<Card >
  <Card.Header>Oliver Byrne</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}I have gone to great lengths, and in some cases beyond what is required by the reporting guidelines to ensure all of my filings are beyond reproach, by hiring an independent third-party accounting firm to review and audit all of my previous annual financial disclosures.{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Carousel.Item>
<Carousel.Item>
<Card>
  <Card.Header>Kyle Park</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        My congratulations to you, sir. Your manuscript is both good and original; but the part that is good is not original, and the part that is original is not good.{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Carousel.Item>
<Carousel.Item>
<Card >
  <Card.Header>Daniel Kahneman</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}No matter how good you think you are as a leader, my goodness, the people around you will have all kinds of ideas for how you can get better. So for me, the most fundamental thing about leadership is to have the humility to continue to get feedback and to try to get better – because your job is to try to help everybody else get better.
        {' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Carousel.Item>
<Carousel.Item>
<Card >
  <Card.Header>Frank A. Clark</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}True intuitive expertise is learned from prolonged experience with good feedback on mistakes.{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Carousel.Item>
<Carousel.Item>
<Card >
  <Card.Header>Robert Allen</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}I have gone to great lengths, and in some cases beyond what is required by the reporting guidelines to ensure all of my filings are beyond reproach, by hiring an independent third-party accounting firm to review and audit all of my previous annual financial disclosures.{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Carousel.Item>
</Carousel>
</Container>
    )
}

export default CustomerReview
