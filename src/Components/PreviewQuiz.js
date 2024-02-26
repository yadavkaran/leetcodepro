import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import SideNavTeacher from './SidenavTeacher';
import QuizPreview from './QuizPreview';
import Footer from './Footer';



function PreviewQuiz() {
  const sidenavStyle = {
    width: '240px',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    marginTop: '70px',

  };
  

  const contentStyle = {
    marginLeft: '340px',
    padding: '50px',
    flex: '1', 
    marginTop: '50px',// Allow the content to take up remaining space
  };
  return (
    <><Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark" fixed="top">
      <Navbar.Brand to="/home" className='ps-5'>Leetcode Pro</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavLink to="/login" className="nav-link">Logout</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar><div style={sidenavStyle}>
        <SideNavTeacher/>
      </div><div style={contentStyle}>
        {/* Your StudentPage content goes here */}
        {/* Add more content as needed */}
        <QuizPreview />
      </div>
      <div style={{ textAlign: 'center', margin: '20px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '8px',color:'black' }}>
      <Footer />
      </div>
      </>
  );
}

export default PreviewQuiz;