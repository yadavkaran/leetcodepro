import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import DisplayQuestion from './AddQuestionForm'; // Assuming both components are in the same directory
import './AddQuestionForm.css'; // Import CSS file for styling

import CustomSidenav1 from './CustomSidenav1';


const AdminPage = () => {
  const sidenavStyle = {
    width: '240px',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    marginTop: '70px',

  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark" fixed="top">
        <Navbar.Brand to="/home" className='ps-5'>Leetcode Pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/login" className="nav-link">Logout</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div style={sidenavStyle}>
        <CustomSidenav1 />
      </div>
      
      
    </>
  );
};

export default AdminPage;
