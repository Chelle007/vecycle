// src/components/HomePage.tsx

import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const HomePage: React.FC = () => {
  return (
    <Container>
      <h1 className="my-4">Explore Our Features</h1>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Feature 1</Card.Title>
          <Card.Text>
            Learn more about our amazing Feature 1, designed to enhance your
            experience.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Feature 2</Card.Title>
          <Card.Text>
            Feature 2 brings more flexibility and power to your daily tasks.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Feature 3</Card.Title>
          <Card.Text>
            Explore Feature 3 to unlock more possibilities and streamline your
            workflow.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HomePage;
