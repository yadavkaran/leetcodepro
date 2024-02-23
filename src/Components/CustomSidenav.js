import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import 'rsuite/Sidenav/styles/index.css';
import 'rsuite/Nav/styles/index.css';

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
  navItem: {
    '&:hover': {
      backgroundColor: '#555', // Set the background color on hover
    },
  },
};

const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
  return (
    <div style={styles.container}>
      <Sidenav
        appearance="dark"
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Sidenav.Body>
          <Nav {...navProps} style={styles.navItem}>
            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
              LeetCode
            </Nav.Item>
            <Nav.Menu eventKey="2" title="Quiz" icon={<MagicIcon />}>
              <Nav.Item eventKey="2-1">Data Structures</Nav.Item>
              <Nav.Item eventKey="2-2">Coding</Nav.Item>
              <Nav.Item eventKey="2-3">Data Structures</Nav.Item>
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
