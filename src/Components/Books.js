import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Card, Form, Button } from 'react-bootstrap';
import CustomSidenav from './StudentSidenav';

const Books = () => {
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
  const handleReadClick = (url) => {
    window.location.href = url; // Open the provided URL in a new tab/window
  };

  const bookRecommendations = [
    { title: 'Database Management Systems', author: 'Raghu Ramakrishnan and Johannes Gehrke', url: 'https://www.amazon.com/Introduction-Database-Systems-8th/dp/0321197844' },
    { title: 'Introduction to Database Systems', author: 'C.J. Date', url: 'https://www.amazon.com/Introduction-Database-Systems-8th/dp/0321197844' },
    { title: 'SQL in 10 Minutes, Sams Teach Yourself', author: 'Ben Forta', url: 'https://www.amazon.com/SQL-Minutes-Sams-Teach-Yourself/dp/0672336073' },
    { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', url: 'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321' },
    { title: 'System Design Interview', author: 'Alex Xu et al.', url: 'https://www.interviewkickstart.com/interview-questions/amazon-system-design-interview-questions' },
    { title: 'Elements of Scalable Systems', author: 'Adam Newman', url: 'https://www.amazon.com/Designing-Scalable-Systems-Solutions-Tomorrow/dp/B0CS77KBB2' },
    { title: 'Introduction to Algorithms', author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein', url: 'https://www.amazon.com/Introduction-Algorithms-International-Thomas-Cormen/dp/0262533057' },
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
        <h2>Books</h2>
        
        
        {bookRecommendations.map((book, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>By {book.author}</Card.Text>
              <div className="d-flex justify-content-end mt-2">
                <Button variant="primary" size="sm" onClick={() => handleReadClick(book.url)}>
                  Read
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
        
      </div>
    </>
  );
};

export default Books;
