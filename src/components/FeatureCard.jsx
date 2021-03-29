import React from 'react'
import { Container, Card, Accordion, CardGroup } from 'react-bootstrap';

function FeatureCard() {
    return (
        <div>
            <Container>
                <CardGroup>
                    <Card>
                <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Feature 1
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et mollitia aliquid dignissimos odio. Voluptatum voluptates blanditiis atque. Eveniet eum, quas fugit maiores illo molestias excepturi ex. Illo inventore repudiandae pariatur modi quod magnam unde accusantium assumenda esse sint beatae officiis accusamus error, earum necessitatibus numquam excepturi ab, quasi commodi. Alias, est optio sed mollitia dolores aliquam laboriosam quo reiciendis aut. Voluptatem sunt laudantium necessitatibus, ea voluptatibus quae cumque labore reiciendis hic, voluptas quidem modi. Eaque adipisci voluptatibus delectus cumque, nemo similique quas dicta saepe sint nostrum! Tenetur eum quasi nulla dolore, aperiam, eos sunt architecto, deserunt iste saepe sed autem.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Feature 2
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla ipsa, nisi modi eos quibusdam ab quod dolorum magnam itaque asperiores aliquam tempore quasi veniam laborum nesciunt illo quisquam ratione suscipit. Molestias optio vitae corporis blanditiis enim sunt repellat, veniam aut praesentium rem officia veritatis sint, ab autem sit assumenda.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> </Card>
<Card>
<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Feature 3
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body> Lorem ipsum dolollit illo molestias excepturi ex. Illo inventore repudiandae pariatur modi quod magnam unde accusantium assumenda esse sint beatae officiis accusamus error, earum necessitatibus numquam excepturi ab, quasi commodi. Alias, est optio sed mollitia dolores aliquam laboriosam quo reiciendis aut. Voluptatem sunt laudantium necessitatibus, ea voluptatibus quae cumque labore reiciendis hic, voluptas quidem modi. Eaque adipisci voluptatibus delectus cumque, nemo similique quas dicta saepe sint nostrum! Tenetur eum quasi nulla dolore, aperiam, eos sunt architecto, deserunt iste saepe sed autem.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Feature 4
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla ipsa, nisi modi eos quibusdam ab quod dolorum magnam itaque asperiores aliquam tempore quasi veniam laborum nesciunt illo quisquam ratione suscipit. Molestias optio vitae corporis blanditiis enim sunt repellat, veniam aut praesentium rem officia veritatis sint, ab autem sit assumenda.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> </Card>
                </CardGroup>
            </Container>
        </div>
    )
}

export default FeatureCard
