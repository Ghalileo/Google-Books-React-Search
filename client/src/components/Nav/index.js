import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";

function Navb (props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Google Books</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
            <Link
              to="/Search"
              className={window.location.pathname === "/search" ? "nav-link active navv" : "nav-link"} 
            >Search</Link>
            </NavItem>
            <NavItem>
            <Link
              to="/Saved"
              className={window.location.pathname === "/saved" ? "nav-link active navv" : "nav-link"} 
            >Saved</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navb;