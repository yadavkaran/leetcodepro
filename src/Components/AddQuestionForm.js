import React, { useState } from 'react';
import './AddQuestionForm.css'; // Import CSS file for styling
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap'; // Import Dropdown component
import CustomSidenav1 from './CustomSidenav1';

const AddQuestionForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctOption, setCorrectOption] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Topic');

  const handleSubmit = (event) => {
  event.preventDefault();

  // Check if any of the input fields is empty
  if (!question || !option1 || !option2 || !option3 || !option4 || !correctOption) {
    alert('Please fill in all fields before adding the question.');
    return; // Don't proceed further
  }

  // If all fields are filled, add the question
  onAddQuestion({ question, options: [option1, option2, option3, option4], correctOption });
  setQuestion('');
  setOption1('');
  setOption2('');
  setOption3('');
  setOption4('');
  setCorrectOption('');
};

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const sidenavStyle = {
    width: '240px',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    marginTop: '70px',
  };

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
      </Navbar>
      <div style={sidenavStyle}>
        <CustomSidenav1 />
      </div>

      <form onSubmit={handleSubmit} className="add-question-form">
        
        <h2>Add a new question</h2>
        Select Topic
        <Dropdown>
          <Dropdown.Toggle  id="dropdown-basic" title='Topic'>
            {selectedCategory}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleCategorySelect('DSA')}>DSA</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategorySelect('DBMS')}>DBMS</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategorySelect('CODING')}>CODING</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategorySelect('SYSTEM DESIGN')}>SYSTEM DESIGN</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <label>
          Question:
          <input
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
        </label>
        <label>
          Option 1:
          <input
            type="text"
            value={option1}
            onChange={(event) => setOption1(event.target.value)}
          />
        </label>
        <label>
          Option 2:
          <input
            type="text"
            value={option2}
            onChange={(event) => setOption2(event.target.value)}
          />
        </label>
        <label>
          Option 3:
          <input
            type="text"
            value={option3}
            onChange={(event) => setOption3(event.target.value)}
          />
        </label>
        <label>
          Option 4:
          <input
            type="text"
            value={option4}
            onChange={(event) => setOption4(event.target.value)}
          />
        </label>
        <label>
          Correct Option:
          <select
            value={correctOption}
            onChange={(event) => setCorrectOption(event.target.value)}
          >
            <option value="">-- Select an option --</option>
            <option value={option1}>{option1}</option>
            <option value={option2}>{option2}</option>
            <option value={option3}>{option3}</option>
            <option value={option4}>{option4}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </>
  );
};

const DisplayQuestion = () => {
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div className="display-question-container">
      <div className="add-question-form-container">
        <h1>Quiz App</h1>
        <AddQuestionForm onAddQuestion={handleAddQuestion} />
      </div>
      <div className="displayed-questions-container">
        {questions.map((question, index) => (
          <div key={index} className="question-card">
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
            <p>Correct Answer: {question.correctOption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayQuestion;
