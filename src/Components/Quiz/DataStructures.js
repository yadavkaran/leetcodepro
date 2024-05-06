import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Card, ProgressBar, Alert } from 'react-bootstrap';
import axios from 'axios';
import CustomSidenav from '../StudentSidenav';
import Questionnaire from './Questionnaire';  // Ensure this path is correct

const StudentPage = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isQSolved, setQSolved] = useState(false);

    const courses = [
        {
            title: 'Array',
            questions: 50,
            Solved: 20,
            progress: 40,
        },
        {
            title: 'Array',
            questions: 50,
            Solved: 20,
            progress: 40,
        },
        {
            title: 'String',
            questions: 40,
            Solved: 30,
            progress: 75,
        },
        {
            title: 'Linked List',
            questions: 40,
            Solved: 10,
            progress: 25,
        },
        {
            title: 'Searching Algorithm',
            questions: 30,
            Solved: 7,
            progress: 23,
        },
        {
            title: 'Sorting Algorithm',
            questions: 8,
            Solved: 1,
            progress: 12.5,
        },
        {
            title: 'Divide And Conquer Algorithm',
            questions: 20,
            Solved: 0,
            progress: 0,
        },
        {
            title: 'Stack',
            questions: 29,
            Solved: 8,
            progress: 27.6,
        },
        {
            title: 'Queue',
            questions: 71,
            Solved: 63,
            progress: 88.7,
        },
        {
            title: 'Tree Data Structure',
            questions: 90,
            Solved: 9,
            progress: 10,
        },
        {
            title: 'More Topics Loading',
            questions: 100,
            Solved: 100,
            progress: 100,
        },
    ];

    const handleTopicClick = async (topicName) => {
        console.log("Fetching questions for:", topicName);
        setSelectedTopic(topicName);
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:8000/question-topics/${topicName}`);
            setQuestions(response.data);
        } catch (error) {
            console.error('Error fetching questions:', error);
            setError('Failed to fetch questions for ' + topicName);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark" fixed="top">
                <Navbar.Brand to="/home" className='ps-5'>Leetcode Pro</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/">Logout</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div style={{width: '240px', height: '100vh', position: 'fixed', top: 0, left: 0, marginTop: '70px'}}>
                <CustomSidenav />
            </div>

            <div style={{marginLeft: '240px', padding: '25px', marginTop: '50px', maxWidth: '75%'}}>
                <h1>Data Structures </h1>
                {!selectedTopic && (
                    <div className="row">
                        {courses.map((course, index) => (
                            <div
                                style={{padding: '10px', cursor: 'pointer'}}
                                className="col-md-4"
                                key={course.title}
                                onClick={() => handleTopicClick(course.title.trim())}
                            >
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{course.title}</Card.Title>
                                        <Card.Text>
                                            Questions Solved: {course.Solved}
                                        </Card.Text>
                                        <ProgressBar now={course.progress} label={`${course.progress.toFixed(2)}%`} />
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                )}
                {loading && <Alert variant="info">Loading...</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                {selectedTopic && questions.length > 0 && (
                    <Questionnaire questions={questions} studentId={1} setQSolved={setQSolved} />
                )}
            </div>
        </>
    );
};

export default StudentPage;
