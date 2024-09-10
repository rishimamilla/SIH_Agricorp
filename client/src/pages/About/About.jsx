import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Make sure the CSS file includes the styles
import IMAGES from "../../assets";

const About = () => {
  const teamMembers = [
    {
      name: "Sharanya Peri",
      role: "Machine Learning Engineer",
      class: "AIDS-1 3rd Year",
      image: IMAGES.sharanya,
    },
    {
      name: "Sneha Arumugam",
      role: "Machine Learning Engineer",
      class: "AIDS-2 3rd Year",
      image: IMAGES.sneha,
    },
    {
      name: "Gayathri Reddy",
      role: "Machine Learning Engineer",
      class:"",
      image: IMAGES.sneha,
    },
    {
      name: "Mukesh Chevula",
      role: "Full Stack Developer",
      class: "CSE-1 3rd Year",
      image: IMAGES.mukesh,
    },
    {
      name: "Adithya Gella",
      role: "UX/UI Designer",
      class: "CSE-1 3rd Year",
      image: IMAGES.adithya,
    },
    {
      name: "Rishi Mamilla",
      role: "Frontend Developer",
      class: "CSE-1 3rd Year",
      image: IMAGES.rishi,
    },
  ];

  return (
    <>
      <Container className="about-us-container">
        <h1>About Us</h1>
        <p>
          Our crop disease prediction application leverages advanced machine
          learning techniques to help farmers identify and manage crop diseases
          effectively. By analyzing images and environmental data, our model
          predicts potential diseases, providing actionable insights and timely
          alerts. Our goal is to empower farmers with technology, reduce crop
          losses, and promote sustainable agriculture.
        </p>

        <h2>Meet Our Team</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="team-card">
                <Card.Img variant="top" src={member.image} alt={member.name} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {member.role}
                  </Card.Subtitle>
                  <Card.Text>{member.class}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default About;
