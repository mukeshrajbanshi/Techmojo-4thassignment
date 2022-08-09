import React from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { DeleteContext } from "./context/ContextProvider";

const NavBar = () => {
  const { dlttask, setDletask } = useContext(DeleteContext);
  // console.log(dlttask);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">React Redux App</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {dlttask ? (
        <Alert variant="danger" onClose={() => setDletask(false)} dismissible>
          <Alert.Heading>Your task remove successfully</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
