import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
      <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add Task</Link>
          </NavItem>
        </Nav>
        

      </Container>
    </Navbar>
  )
}
