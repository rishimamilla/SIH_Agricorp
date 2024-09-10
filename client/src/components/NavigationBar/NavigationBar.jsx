import { useState } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import IMAGES from "../../assets"; // Importing images from single "IMAGES" object
import { AuthState } from "../../context/AuthProvider";
import ProfileModal from "../ProfileModal/ProfileModal";

import "./NavigationBar.css"; // Assuming custom styles are in this file

const NavigationBar = () => {
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();
  const { auth, setAuth } = AuthState();

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setAuth(null);
    return navigate("/login");
  };

  return (
    <Navbar collapseOnSelect expand="md" variant="light" bg="light" id="nav">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            alt="Crop Disease Predictor Logo"
            src={IMAGES.logo}
            height="60"
            className="d-inline-block align-top"
          />
          <div className="title ms-2">Farm-Ease</div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          {/* Add new Nav links here with text-dark class */}
          <Nav className="me-auto text-dark">
            <Nav.Link as={Link} to="/predict">
              Predict Crop Disease
            </Nav.Link>
            <Nav.Link as={Link} to="/weather">
              Weather Data
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/diseases">
              Crop Diseases
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
          </Nav>

          {auth ? (
            <DropdownButton
              variant=""
              align="end"
              title={
                <Image
                  id="profileDropdownIcon"
                  src={auth.profilePic}
                  alt="Navbar profile image"
                  roundedCircle
                />
              }
            >
              <Dropdown.Item as="button" onClick={() => setModalShow(true)}>
                Profile
              </Dropdown.Item>
              <ProfileModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              <Dropdown.Divider />

              <Dropdown.Item as="button" onClick={logoutHandler}>
                Log out
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            <Nav.Item>
              <button
                className="nav-button me-2"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
              <button
                className="nav-button"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </Nav.Item>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
