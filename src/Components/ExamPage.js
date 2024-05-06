import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, Dropdown } from 'react-bootstrap';
import CustomSidenav from './StudentSidenav';
import { NavLink } from 'react-router-dom';

const ExamPage = () => {

  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [timer, setTimer] = useState(null);

  const sidenavStyle = {
    width: '240px',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    marginTop: '70px',
};

  const handleStartTest = () => {
    // Start the timer based on the selected duration
    const durationInSeconds = parseInt(selectedDuration) * 60;
    setTimer(durationInSeconds);

    // Fetch questions from the database based on the selected topic
    // You can implement this part according to your backend/database setup
    fetchQuestions(selectedTopic);
  };

  const fetchQuestions = (topic) => {
    // Implement fetching questions from the database based on the selected topic
    console.log(`Fetching questions for topic: ${topic}`);
  };

  const handleDropdownChange = (eventKey, event) => {
    setSelectedTopic(eventKey);
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

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

      <div style={{ marginLeft: '240px', padding: '20px', flex: '1', marginTop: '50px' }}>
        <h2>Exam</h2>
        <Form>
          <Form.Group controlId="topicDropdown">
            <Form.Label>Select Topic:</Form.Label>
            <Dropdown onSelect={handleDropdownChange}>
              <Dropdown.Toggle variant="primary" id="topicDropdownToggle">
                {selectedTopic ? selectedTopic : 'Select Topic'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Array">Array</Dropdown.Item>
                <Dropdown.Item eventKey="String">String</Dropdown.Item>
                <Dropdown.Item eventKey="Map">Map</Dropdown.Item>
                <Dropdown.Item eventKey="Trees">Trees</Dropdown.Item>
              
                {/* Add more topics as needed */}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Form.Group controlId="durationSelect">
            <Form.Label>Select Duration (minutes):</Form.Label>
            <Form.Control as="select" onChange={handleDurationChange}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="60">60</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={handleStartTest}>Start Test</Button>
        </Form>
      </div>
    </>
  );
};

export default ExamPage;
