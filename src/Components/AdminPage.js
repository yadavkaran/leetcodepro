import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Card, Form, Button } from 'react-bootstrap';
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

  const contentStyle = {
    marginLeft: '240px',
    padding: '20px',
    flex: '1',
    marginTop: '50px', // Allow the content to take up remaining space
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle question submission
    console.log('Question submitted:', event.target.question.value);
    // You can handle the submission using your backend or state management system
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark" fixed="top">
        <Navbar.Brand to="/Adminpage" className='ps-5'>Leetcode Pro</Navbar.Brand>
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

      <div style={contentStyle}>
        <h2>Admin Page</h2>

        {/* New Section: Basic Information */}
        <section>
          <h3>Basic Information</h3>
          <Card>
            <Card.Body>
              <Card.Title>Admin Panel Overview</Card.Title>
              <Card.Text>
                Welcome to the admin panel of Leetcode Pro. As an admin, you have the following responsibilities:
                <ol>
                  <li>Add or remove questions from the quiz section.</li>
                  <li>Manually verify and approve teacher accounts.</li>
                  {/* Add more admin responsibilities as needed */}
                </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
      
      </div>
    </>
  );
};

export default AdminPage;
