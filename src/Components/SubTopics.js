
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import SideNavTeacher from './SidenavTeacher';
import Footer from './Footer';

function SubTopics() {
  const carouselHeight = '700px';
  const sidenavStyle = {
    width: '240px',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    marginTop: '70px',

  };
  const topicstyle = {
    padding: '10px',
};
  const containerStyle = {
    marginLeft: '240px',
    padding: '25px',
    marginTop: '50px', // Allow the content to take up remaining space
    maxWidth: '75%' ,
};
const courses = [
  {
      title: 'C ',
      questions: 30,
      Solved:0,
  },
  {
      title: 'C++ ',
      questions: 50,
      Solved:20,           
  },
  {
      title: 'JAVA ',
      questions: 40,
      Solved:10,
  },
  {
      title: 'PYTHON ',
      questions: 50,
      Solved:20,
  },

  {
      title: 'R LEARNING ',
      questions: 40,
      Solved:30,
  },

  {
      title: 'More Topics Loading',
      questions: 100,
      Solved:100,
  },

  {
      title: 'Something',
      questions: 70,
      Solved:10,
  }

];
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark" fixed="top">
      <Navbar.Brand to="/home" className='ps-5'>Leetcode Pro</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavLink to="/login" className="nav-link">Logout</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar><div style={sidenavStyle}>
        <SideNavTeacher/>
      </div>
<div style={containerStyle} className="container">
                <h1>Coding</h1>
                <div className="row">{courses.map((course) => (
                    <div style={topicstyle} className="col-md-4" key={course.title}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    Questions: {course.questions}
                                </Card.Text>
                                </Card.Body>
                        </Card>
                    </div>
                ))}</div>
            </div>
    <div style={{ textAlign: 'center', margin: '20px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '8px',color:'black' }}>
      <Footer />
      </div></>
  );
}

export default SubTopics;
