import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Card, ProgressBar, Button, Alert } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import CustomSidenav from '../StudentSidenav';

const DesignPrinciples = () => {
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
    maxWidth: '75%',
  };

  const topicstyle = {
    padding: '10px',
    cursor: 'pointer', // Add cursor pointer to indicate the card is clickable
  };

  const backArrowStyle = {
    cursor: 'pointer',
    marginBottom: '10px',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
  };

  const [selectedCard, setSelectedCard] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [attemptsLeft, setAttemptsLeft] = useState(2);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const courses = [
    {
      title: 'System Design Principles',
      questions1: 100,
      solved: 50,
      questions: [
        {
          question: 'What is a design principle?',
          correctAnswer: 'A',
          answers: ['A', 'B', 'C', 'D'],
          explanation: 'Explanation for the correct answer goes here.',
        },
        {
          question: 'Another question for System Design Principles?',
          correctAnswer: 'A',
          answers: ['A', 'B', 'C', 'D'],
          explanation: 'Explanation for the correct answer goes here.',
        },
      ],
    },
    {
      title: 'More Topics Loading',
      questions1: 100,
      solved: 100,
      questions: [
        {
          question: 'What is being loaded?',
          correctAnswer: 'Answer 1',
          answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
          explanation: 'Explanation for the correct answer goes here.',
        },
        {
          question: 'Another question for More Topics Loading?',
          correctAnswer: 'Correct',
          answers: ['Correct', 'Incorrect', 'Option 3', 'Option 4'],
          explanation: 'Explanation for the correct answer goes here.',
        },
      ],
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setCurrentQuestionIndex(0);
    setAnswerSubmitted(false);
    setSelectedAnswer(null);
    setAttemptsLeft(2);
  };

  const handleAnswerSubmit = (answer) => {
    setAnswerSubmitted(true);

    if (answer === courses[selectedCard].questions[currentQuestionIndex].correctAnswer) {
      // Correct answer
      setSelectedAnswer('correct');
    } else {
      // Wrong answer
      setAttemptsLeft(attemptsLeft - 1);
      setSelectedAnswer('wrong');
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setAnswerSubmitted(false);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    handleReset();
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    handleReset();
  };

  const handleBack = () => {
    setSelectedCard(null);
    setCurrentQuestionIndex(0);
    handleReset();
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

      <div style={containerStyle} className="container">
        {selectedCard !== null && (
          <div style={backArrowStyle} onClick={handleBack}>
            <FaArrowLeft />
            <span className="ms-2">Back</span>
          </div>
        )}

        <h1>System Design</h1>
        <div className="row">
          {courses.map((course, index) => (
            <div
              key={course.title}
              style={topicstyle}
              className={`col-md-4 ${selectedCard !== null && selectedCard !== index ? 'd-none' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <Card>
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>
                    Questions: {course.questions1} | Solved: {course.solved}
                  </Card.Text>
                  <ProgressBar now={(course.solved / course.questions1) * 100} label={`${((course.solved / course.questions1) * 100).toFixed(2)}%`} />
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        {selectedCard !== null && (
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="question-container">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder={`Question: ${courses[selectedCard].questions[currentQuestionIndex].question}`}
                  readOnly={answerSubmitted}
                />
              </div>
              <div className="answers-container mt-3">
                {courses[selectedCard].questions[currentQuestionIndex].answers.map((answer, ansIndex) => (
                  <div key={ansIndex} className="answer-option">
                    <input
                      type="radio"
                      id={`answer${ansIndex}`}
                      name="answers"
                      disabled={answerSubmitted}
                      onChange={() => setSelectedAnswer(answer)}
                    />
                    <label htmlFor={`answer${ansIndex}`}>{answer}</label>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={() => handleAnswerSubmit(selectedAnswer)}
                  disabled={!selectedAnswer || answerSubmitted}
                >
                  Submit Answer
                </Button>
                <Button
                  variant="secondary"
                  className="me-2"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>
                <Button
                  variant="info"
                  onClick={handleNextQuestion}
                  disabled={currentQuestionIndex === courses[selectedCard].questions.length - 1}
                >
                  Next
                </Button>
              </div>
              {answerSubmitted && (
                <div className="mt-3">
                  {selectedAnswer === 'correct' ? (
                    <Alert variant="success">{courses[selectedCard].questions[currentQuestionIndex].explanation}</Alert>
                  ) : (
                    <div>
                      <Alert variant="danger">{`Wrong Answer! ${attemptsLeft} attempts left.`}</Alert>
                      {attemptsLeft > -1 && (
                        <Button variant="secondary" onClick={handleReset}>
                          Reset
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DesignPrinciples;
