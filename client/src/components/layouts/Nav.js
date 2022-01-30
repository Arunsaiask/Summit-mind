import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Arunsai(9618168958)</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="mx-3">
              <Link to="/byname">ByName</Link>
            </Navbar.Text>
            <Navbar.Text className="mx-3">
              <Link to="/">Alphabetical</Link>
            </Navbar.Text>
            <Navbar.Text className="mx-3">
              <Link to="/yearandcategory">Year&Category</Link>
            </Navbar.Text>
            <Navbar.Text className="mx-3">
              <Link to="/year">Year</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
