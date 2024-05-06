import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Card, Button } from 'react-bootstrap';
import CustomSidenav from './StudentSidenav';

const Videos = () => {
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

  const handleWatchClick = (url) => {
    window.location.href = url; // Open the provided URL in a new tab/window
  };

  const videoRecommendations = [
    { title: 'Introduction to Algorithms (Grokking Algorithms)', url: 'https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY' },
    { title: 'Cracking the Coding Interview (Free Preview)', url: 'https://www.youtube.com/watch?v=PVSvuj2MDXA' },
    { title: 'System Design Interview - How to Design Scalable Systems', url: 'https://www.youtube.com/watch?v=LxTLMQIYrook' },
    { title: 'SQL Tutorial for Beginners (Learn SQL in 1 Hour)', url: 'https://www.youtube.com/watch?v=vRLuS7hutPA' },
    { title: 'Data Structures and Algorithms Crash Course', url: 'https://www.youtube.com/watch?v=Uj46XCWNtWY' },
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
        <h2>Videos</h2>

        {videoRecommendations.map((video, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{video.title}</Card.Title>
              <Card.Text>Enhance your coding skills with these tutorials.</Card.Text>
              <div className="d-flex justify-content-end mt-2">
                <Button variant="primary" size="sm" onClick={() => handleWatchClick(video.url)}>
                  Watch
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Videos;
