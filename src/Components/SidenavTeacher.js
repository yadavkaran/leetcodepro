import React, { useState } from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import 'rsuite/Sidenav/styles/index.css';
import 'rsuite/Nav/styles/index.css';
import { NavLink } from 'react-router-dom';

function SideNavTeacher({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) {
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
        <Nav style={styles.navItem}>  
            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
              <NavLink to="/TeacherPage" className="nav-link">Home</NavLink>
            </Nav.Item>
            <Nav.Item eventKey="2" active icon={<DashboardIcon />}>
            <NavLink to="/ExportQuiz" className="nav-link">Export Quiz</NavLink>
            </Nav.Item>
            <Nav.Item eventKey="3" active icon={<DashboardIcon />}>
              View History
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<GroupIcon />}>
              Logout
            </Nav.Item>
           

          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  )
}

export default SideNavTeacher;
