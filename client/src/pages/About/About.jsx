import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Add a CSS file for styling
import { NavigationBar } from "../../components";

const About = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Data Scientist",
      class:
        "Alice specializes in machine learning models and data analysis, with a focus on agricultural applications. She has a passion for using AI to solve real-world problems.",
      image: "path/to/alice-image.jpg",
    },
    {
      name: "Bob Smith",
      role: "Machine Learning Engineer",
      class:
        "Bob is an expert in deploying and scaling machine learning models. He ensures our algorithms run efficiently and accurately for crop disease prediction.",
      image: "path/to/bob-image.jpg",
    },
    {
      name: "Carol Williams",
      role: "Frontend Developer",
      class:
        "Carol creates intuitive and user-friendly interfaces for our application, ensuring a seamless experience for all users.",
      image: "path/to/carol-image.jpg",
    },
    {
      name: "David Lee",
      role: "Backend Developer",
      class:
        "David is responsible for developing the backend services that power our application, handling everything from database management to server-side logic.",
      image: "path/to/david-image.jpg",
    },
    {
      name: "Eve Davis",
      role: "UX/UI Designer",
      class:
        "Eve designs the visual elements of our platform, making sure the application is both aesthetically pleasing and easy to navigate.",
      image: "path/to/eve-image.jpg",
    },
    {
      name: "Frank Thomas",
      role: "Agricultural Expert",
      class:
        "Frank provides the essential agricultural knowledge that guides our machine learning models, ensuring they are tailored to the specific needs of farmers.",
      image: "path/to/frank-image.jpg",
    },
  ];

    return (<>
      <NavigationBar/>
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
