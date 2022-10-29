import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar variant="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#clients">Clients</Nav.Link>
          <Nav.Link href="#orders">Orders</Nav.Link>
          <Nav.Link href="#messages">Messages</Nav.Link>
          <Nav.Link href="#users">Users</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
