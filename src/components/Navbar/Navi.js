import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
  Input,
} from "reactstrap";
import SignOut from "../Auth/SignOut";
import SignIn from "../Auth/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">SellCar</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar/>
          <div style={{marginRight: "5px"}}>
          <a href="/addAuto">
            <Button>İlan ver</Button>
          </a>
          </div>
          {user ? <SignOut /> : <SignIn />}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
