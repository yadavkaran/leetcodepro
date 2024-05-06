import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Card, Form, Button } from 'react-bootstrap';
import CustomSidenav from './StudentSidenav';

const Websites = () => {
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

  const handleVisitClick = (url) => {
    window.location.href = url; // Open the provided URL in a new tab/window
  };

  const websiteRecommendations = [
    { title: 'LeetCode Practice Problems', url: 'https://leetcode.com/problems/' },
    { title: 'HackerRank Coding Challenges', url: 'https://www.hackerrank.com/challenges' },
    { title: 'Interview Cake Coding Interview Questions', url: 'https://www.interviewcake.com/career-resources/coding-interview-questions' },
    { title: 'GeeksforGeeks Computer Science Tutorials', url: 'https://www.geeksforgeeks.org/' },
    { title: 'freeCodeCamp Web Development Courses', url: 'https://www.freecodecamp.org/learn/' },
    { title: 'MDN Web Docs - Mozilla Developer Network', url: 'https://developer.mozilla.org/en-US/' },
    { title: 'Stack Overflow - Programming Q&A for Professionals', url: 'https://stackoverflow.com/' },
  ];

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark" fixed="top">
        <Navbar.Brand to="/home" className='ps-5'>Leetcode Pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">Logout</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div style={sidenavStyle}>
        <CustomSidenav />
      </div>

      <div style={contentStyle}>
        <h2>Websites</h2>

        {websiteRecommendations.map((website, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{website.title}</Card.Title>
              <Card.Text>Practice coding challenges and learn new concepts.</Card.Text>
              <div className="d-flex justify-content-end mt-2">
                <Button variant="primary" size="sm" onClick={() => handleVisitClick(website.url)}>
                  Visit
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Websites;
