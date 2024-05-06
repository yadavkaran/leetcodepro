import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import 'rsuite/Sidenav/styles/index.css';
import 'rsuite/Nav/styles/index.css';
import { useNavigate } from 'react-router-dom';


const styles = {
  container: {
    width: '240px',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    background: 'black', // Set the background color to black
    color: 'white',
    marginTop: 50,
  },
};

const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
  const navigate = useNavigate();

  const handleNavItemSelect = (eventKey) => {
    // You can handle different navigation logic based on the eventKey
    switch (eventKey) {
      case '1':
        navigate('/Studentpage');
        break;
      case '2-1':
        navigate('/Studentpage/Quiz/DataStructures');
        break;
      case '2-2':
        navigate('/Studentpage/Quiz/Coding');
        break;
      case '2-3':
        navigate('/Studentpage/Quiz/DBMS');
        break;
      case '2-4':
        navigate('/Studentpage/Quiz/DesignPrinciples');
        break;
      case '3-1':
        navigate('/PracticeExam');
        break;
      case '4-1':
        navigate('/Studentpage/Refrences/Books');
        break;
      case '4-2':
        navigate('/Studentpage/Refrences/Websites');
        break;
      case '4-3':
        navigate('/Studentpage/Refrences/Videos');
        break;

      // Add more cases for other event keys as needed
      default:
        break;
    }
  };

  return (
    <div style={styles.container}>
      <Sidenav
        appearance="dark"
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Sidenav.Body>
          <Nav {...navProps} onSelect={handleNavItemSelect}>
            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
              LeetCode
            </Nav.Item>
            <Nav.Menu eventKey="2" title="Quiz" icon={<MagicIcon />}>
              <Nav.Item eventKey="2-1">Data Structures</Nav.Item>
              <Nav.Item eventKey="2-2">Coding</Nav.Item>
              <Nav.Item eventKey="2-3">DBMS</Nav.Item>
              <Nav.Item eventKey="2-4">System Design </Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="3" title="Exam Practice" icon={<GroupIcon />}>
              <Nav.Item eventKey="3-1">Data Structures</Nav.Item>
              <Nav.Item eventKey="3-2">Coding</Nav.Item>
              <Nav.Item eventKey="3-3">Data Structures</Nav.Item>
              <Nav.Item eventKey="3-4">System Design </Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Refrences" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Books</Nav.Item>
              <Nav.Item eventKey="4-2">Websites</Nav.Item>
              <Nav.Item eventKey="4-3">Videos</Nav.Item>
            </Nav.Menu>
            <Nav.Item eventKey="5" icon={<GroupIcon />}>
              Logout
            </Nav.Item>


          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default CustomSidenav;
