import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function QuizForm() {
  const [topic, setTopic] = useState('');
  const [subTopic, setSubTopic] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  const [marksPerQuestion, setMarksPerQuestion] = useState('');
  const navigate = useNavigate(); // Initialize useHistory

  const handleTopicChange = (topic) => {
    setTopic(topic);
    // Handle any additional logic related to topic selection
  };

  const handleSubTopicChange = (subTopic) => {
    setSubTopic(subTopic);
    // Handle any additional logic related to subtopic selection
  };

  const handleSubmit = () => {
    // Handle form submission logic
  };

  const handleCancel = () => {
    // Handle cancel logic
  };



  const handlePreview = () => {
    // Navigate to the preview quiz page
    navigate('/PreviewQuiz');
  };
  const handleExport = () => {
    // Handle export logic
  };

  return (
    <Card style={{ padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', border: '1px solid #ccc', width: '50rem' }}>
    <Form>
      <div style={{ marginBottom: '20px' }}>
        <p>Note: On clicking Export Quiz, the quiz will be exported as a PDF.</p>
      </div>
      <FormGroup>
        <FormLabel>Select Topic</FormLabel>
        <DropdownButton id="dropdown-topic" title={topic || "Select Topic"}>
          {/* Render topics dynamically */}
          <Dropdown.Item onClick={() => handleTopicChange('Topic 1')}>Programming Languages</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTopicChange('Topic 2')}>Data  Structures</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTopicChange('Topic 3')}>Operating System</Dropdown.Item>

          {/* Add more topics as needed */}
        </DropdownButton>
      </FormGroup>
      <FormGroup style={{ marginBottom: '20px' }}>
        <FormLabel style={{ width: '50%', marginRight: '10px' }}>No of Questions</FormLabel>
        <FormControl
          type="number"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
          style={{ width: '40%' }}
          placeholder="Enter number of questions"
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: '20px' }}>
        <FormLabel style={{ width: '50%', marginRight: '10px' }}>Marks Per Question</FormLabel>
        <FormControl
          type="number"
          value={marksPerQuestion}
          onChange={(e) => setMarksPerQuestion(e.target.value)}
          style={{ width: '40%' }}
          placeholder="Enter marks per question"
        />
      </FormGroup>
      <div style={{ marginTop: '20px' }}>
        <Button variant="secondary" onClick={handleCancel} style={{ marginRight: '10px' }}>Cancel</Button>
        <Button variant="primary" onClick={handlePreview} style={{ marginRight: '10px' }}>Preview Quiz</Button>
        <Button variant="success" onClick={handleExport}>Export Quiz</Button>
      </div>
    </Form>
  </Card>
  );
}

export default QuizForm;
