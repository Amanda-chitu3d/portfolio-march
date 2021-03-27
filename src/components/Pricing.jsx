import React from 'react';
import { Button,Container,Card,ListGroup,CardGroup } from 'react-bootstrap';

function Pricing() {
    return (
        
        <Container className="mt-3 mb-3">
       
        <Card.Img variant="top" src="https://picsum.photos/1800/960" />
           <Card border="light">
             <Card.Title>Pricing</Card.Title>
             <Card.Text>Our business is to deliver high quality IT solutions and maintain a company’s IT infrastructure. Our goal is to offer IT solutions which are unique and extremely cost effective, and establish a long term business relationship with our customers. With us, you can reduce your tech workload while maximising your productivity and growth.
             </Card.Text>
           </Card>
          
           <CardGroup>
        <Card style={{ width: '18rem' }}>
        
        <Card.Header>Free</Card.Header>
        <Card.Body>
          <Card.Title>$0 / mo</Card.Title>
          <ListGroup variant="flush">
  <ListGroup.Item>10 users included</ListGroup.Item>
  <ListGroup.Item>2 GB of storage</ListGroup.Item>
  <ListGroup.Item>Email support</ListGroup.Item>
  <ListGroup.Item>Help center access</ListGroup.Item>
</ListGroup>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Pro</Card.Header>
        <Card.Body>
          <Card.Title>$15 / mo</Card.Title>
          <ListGroup variant="flush">
  <ListGroup.Item>10 users included</ListGroup.Item>
  <ListGroup.Item>2 GB of storage</ListGroup.Item>
  <ListGroup.Item>Email support</ListGroup.Item>
  <ListGroup.Item>Help center access</ListGroup.Item>
</ListGroup>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Header>Enterprise</Card.Header>
        <Card.Body>
          <Card.Title> $50 / mo</Card.Title>
         
          <Card.Text>
          <ListGroup variant="flush">
  <ListGroup.Item>10 users included</ListGroup.Item>
  <ListGroup.Item>2 GB of storage</ListGroup.Item>
  <ListGroup.Item>Email support</ListGroup.Item>
  <ListGroup.Item>Help center access</ListGroup.Item>
</ListGroup>
          </Card.Text>
          <Button variant="primary">Sign up for free</Button>
        </Card.Body>
      </Card>
      </CardGroup>
      </Container> 
      

       
    )
}

export default Pricing
