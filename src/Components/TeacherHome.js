import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Card, Button } from 'react-bootstrap';
import CustomSidenav from './CustomSidenav1';
import OS from '../Assets/os.png';
import DS from '../Assets/ds.png';
import PL from '../Assets/pl.png';
import SD from '../Assets/sd.jpeg';
import DB from '../Assets/db.png';
import COA from '../Assets/coa.jpeg';

const TeacherHome = () => {
  
  const contentStyle = {
 // Adjusted the right margin
    marginTop: '80px',
    marginLeft: '350px',
    marginRight: '150px',

  };

  const cardStyle = {
    width: '15rem',
    margin: 'auto',
    marginBottom: '-10px', // Bottom margin remains the same
  };

  return (
    <>
        <div style={contentStyle}>
        <h2>Welcome Teacher</h2>
        </div>
        <div style={contentStyle}>
        <div className="row mb-4" style={{ marginBottom: '1cm' }}>
          <div className="col-md-4">
            <Card style={cardStyle}>
              <Card.Img variant="top" src={PL} style={{ height: '10rem', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>Prog. Lang.</Card.Title>
                <Button variant="primary">
                  <a href="/SubTopics" style={{ color: 'white', textDecoration: 'none' }}>View</a>
                </Button>
              </Card.Body>
            </Card>
          </div>
  
          <div className="col-md-4">
            <Card style={cardStyle}>
              <Card.Img variant="top" src={DS} style={{ height: '10rem', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>Data Struct.</Card.Title>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </div>
  
          <div className="col-md-4">
            <Card style={cardStyle}>
              <Card.Img variant="top" src={DB} style={{ height: '10rem', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>Database</Card.Title>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row" style={{ marginBottom: '1cm' }}>
          <div className="col-md-4">
            <Card style={cardStyle}>
              <Card.Img variant="top" src={SD} style={{ height: '10rem', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>System Des.</Card.Title>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </div>
  
          <div className="col-md-4">
            <Card style={cardStyle}>
              <Card.Img variant="top" src={COA} style={{ height: '10rem', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>Comp. Arch.</Card.Title>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </div>
  
          <div className="col-md-4">
            <Card style={cardStyle}>
              <Card.Img variant="top" src={OS} style={{ height: '10rem', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>OS</Card.Title>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherHome;
