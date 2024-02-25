import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Card, Form, Button } from 'react-bootstrap';
import CustomSidenav from './StudentSidenav';

const StudentPage = () => {
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
        <h2>Student Page</h2>
        {/* Add more content as needed */}

        {/* New Section: Basic Information */}
        <section>
          <h3>Basic Information</h3>
          <Card>
            <Card.Body>
              <Card.Title>How to Use Leetcode Pro</Card.Title>
              <Card.Text>
                Leetcode Pro is a platform designed to help students practice coding and improve their problem-solving skills.
                Follow these steps to get started:
                <ol>
                  <li>Create an account and log in.</li>
                  <li>Explore the Quiz section to practice various topics.</li>
                  <li>Engage in Exam Practice to prepare for coding interviews.</li>
                  <li>Check out the References section for recommended books, websites, and videos.</li>
                </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </section>

        {/* New Section: Q&A */}
        <section>
          <h3>Q&A</h3>

          {/* Sample Q&A */}
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Q: How do I improve my coding speed?</Card.Title>
              <Card.Text>
                A: Practice regularly on coding platforms like Leetcode Pro. Focus on understanding problem-solving patterns
                and optimizing your code. Additionally, participate in coding challenges and mock interviews.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Additional Sample Q&A */}
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Q: What are some common data structures used in coding interviews?</Card.Title>
              <Card.Text>
                A: Common data structures include arrays, linked lists, stacks, queues, trees, and graphs. Familiarize
                yourself with their properties, use cases, and implementation details.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Q: How should I prepare for system design interviews?</Card.Title>
              <Card.Text>
                A: System design interviews focus on designing scalable and efficient systems. Study distributed systems,
                database design, and networking concepts. Practice designing systems and explaining your thought process.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Q: Can you recommend any online resources for learning algorithms?</Card.Title>
              <Card.Text>
                A: Certainly! Websites like LeetCode, HackerRank, and CodeSignal offer a variety of algorithmic challenges.
                Additionally, consider reading books like "Cracking the Coding Interview" for in-depth preparation.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Q: What is the best way to prepare for system design interviews?</Card.Title>
              <Card.Text>
                A: System design interviews require a deep understanding of designing scalable and reliable systems.
                Start by studying fundamental system design concepts. Practice by solving design problems on platforms like Leetcode.
                Review real-world system designs and understand trade-offs in different scenarios.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Q: How can I stay motivated while solving challenging coding problems?</Card.Title>
              <Card.Text>
                A: Staying motivated is crucial in coding. Break down problems into smaller tasks and celebrate small victories.
                Join coding communities to share experiences and get support. Set realistic goals and take breaks when needed.
                Remember that every challenge you overcome makes you a better coder.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Ask a Question</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="questionForm">
                  <Form.Label>Your Question</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Type your question here..." />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit Question
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </section>
      </div>
    </>
  );
};

export default StudentPage;
