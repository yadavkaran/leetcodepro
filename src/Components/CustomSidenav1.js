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
    background: 'black',
    color: 'white',
    marginTop: 50,
  },
  navItem: {
    '&:hover': {
      backgroundColor: '#555',
    },
  },
};

const CustomSidenav1 = ({ expanded, onSelect, activeKey }) => {
  const navigate = useNavigate();

  const handleNavItemSelect = (eventKey) => {
    const currentPathname = window.location.pathname;
  
    switch (eventKey) {
      case '1':
        navigate('/');
        break;
      case 'add_question':
        if (currentPathname !== '/Adminpage/AddQuestion') {
          navigate('/Adminpage/AddQuestion');
        }
        break;
      case 'pending_approval':
        navigate('/Adminpage/PendingApproval');
        break;
      case 'support':
        navigate('/');
        break;
      case 'Logout':
        navigate('/login');
        break;
      default:
        break;
    }
  };
    
  return (
    <div style={styles.container}>
      <Sidenav appearance="dark" expanded={expanded} onSelect={handleNavItemSelect} activeKey={activeKey}>
        <Sidenav.Body>
          <Nav style={styles.navItem} onSelect={onSelect}>
            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
              LeetCode
            </Nav.Item>
            <Nav.Item eventKey="add_question" icon={<MagicIcon />}>
              Add Question
            </Nav.Item>
            <Nav.Item eventKey="pending_approval" icon={<GroupIcon />}>
              Pending Approval
            </Nav.Item>
            <Nav.Item eventKey="support" icon={<GearCircleIcon />}>
              Support
            </Nav.Item>
            <Nav.Item eventKey="Logout" icon={<GroupIcon />}>
              Logout
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default CustomSidenav1;
