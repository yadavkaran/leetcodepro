import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Card, ProgressBar } from 'react-bootstrap';
import CustomSidenav from '../StudentSidenav';

const StudentPage = () => {
    const sidenavStyle = {
        width: '240px',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
        marginTop: '70px',
    };

    const containerStyle = {
        marginLeft: '240px',
        padding: '25px',
        marginTop: '50px', // Allow the content to take up remaining space
        maxWidth: '75%' ,
    }

    const topicstyle = {
        padding: '10px',
    }

    const courses = [
        {
            title: 'Arrays ',
            questions: 50,
            Solved:20,
            progress: (20/50)*100,
        },
        {
            title: 'String ',
            questions: 40,
            Solved:30,
            progress: (30/40)*100,
        },
        {
            title: 'Linked List ',
            questions: 40,
            Solved:10,
            progress: (10/40)*100,
        },
        {
            title: 'Searching Algorithm ',
            questions: 30,
            Solved:7,
            progress: (7/30)*100,
        },

        {
            title: 'Sorting Algorithm ',
            questions: 8,
            Solved:1,
            progress: (1/8)*100,
        },

        {
            title: 'Divide And Conquer Algorithm ',
            questions: 20,
            Solved:0,
            progress: (0/20)*100,
        },

        {
            title: 'Stack ',
            questions: 29,
            Solved:8,
            progress: (8/29)*100,
        },

        {
            title: 'Queue ',
            questions: 71,
            Solved:63,
            progress: (63/71)*100,
        },

        {
            title: 'Tree Data Structure',
            questions: 90,
            Solved:9,
            progress: (9/90)*100,
        },

        {
            title: 'More Topics Loading',
            questions: 100,
            Solved:100,
            progress: 100,
        },

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

            <div style={containerStyle} className="container">
                <h1>Data Structures</h1>
                <div className="row">{courses.map((course) => (
                    <div style={topicstyle} className="col-md-4" key={course.title}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    Questions: {course.questions} | Solved: {course.Solved}
                                </Card.Text>
                                <ProgressBar now={course.progress} />
                            </Card.Body>
                        </Card>
                    </div>
                ))}</div>
            </div>

        </>
    );
};

export default StudentPage;
