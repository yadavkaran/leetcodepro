import React from 'react';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CustomSidenav1 from './CustomSidenav1';
const PendingApproval = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '80px',
  };

  const tableStyle = {
    height: '200px',
    overflowY: 'auto',
    width: '50%',
    marginBottom: '20px', // Adjust margin bottom to create space between table and buttons
  };

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

      <div style={containerStyle}>
        <Table striped bordered hover size="sm" style={tableStyle}>
          <thead>
            <tr>
              <th colSpan="2">Teacher Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">First Name</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td className="fw-bold">Last Name</td>
              <td>Markww</td>
            </tr>
            <tr>
              <td className="fw-bold">Email</td>
              <td colSpan="2">mark@gmail.com</td>
            </tr>
          </tbody>
        </Table>
        <div>
          <Button variant="success">Approve</Button>{' '}
          <Button variant="danger">Reject</Button>{' '}
        </div>
      </div>
      <div style={containerStyle}>
        <Table striped bordered hover size="sm" style={tableStyle}>
          <thead>
            <tr>
              <th colSpan="2">Teacher Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">First Name</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td className="fw-bold">Last Name</td>
              <td>Markww</td>
            </tr>
            <tr>
              <td className="fw-bold">Email</td>
              <td colSpan="2">mark@gmail.com</td>
            </tr>
          </tbody>
        </Table>
        <div>
          <Button variant="success">Approve</Button>{' '}
          <Button variant="danger">Reject</Button>{' '}
        </div>
      </div>
      <div style={containerStyle}>
        <Table striped bordered hover size="sm" style={tableStyle}>
          <thead>
            <tr>
              <th colSpan="2">Teacher Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">First Name</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td className="fw-bold">Last Name</td>
              <td>Markww</td>
            </tr>
            <tr>
              <td className="fw-bold">Email</td>
              <td colSpan="2">mark@gmail.com</td>
            </tr>
          </tbody>
        </Table>
        <div>
          <Button variant="success">Approve</Button>{' '}
          <Button variant="danger">Reject</Button>{' '}
        </div>
      </div>
    </>
  );
};

export default PendingApproval;
