// StudentPage.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const StudentPage = () => {
  const { topic, questionId } = useParams();
  const [selectedTopic, setSelectedTopic] = useState(topic);

  const handleTopicSelect = (selectedTopic) => {
    setSelectedTopic(selectedTopic);
  };

  // Mock topics and questions data
  const topics = ['JavaScript', 'React', 'CSS']; // Add more topics as needed

  const questionsByTopic = {
    JavaScript: [
      { id: '1', text: 'What is JavaScript?' },
      { id: '2', text: 'What is a closure?' },
    ],
    React: [
      { id: '3', text: 'How to use React?' },
      { id: '4', text: 'What are React Hooks?' },
    ],
    CSS: [
      { id: '5', text: 'What is the box model?' },
      { id: '6', text: 'How to center elements in CSS?' },
    ],
  };

  const currentQuestions = questionsByTopic[selectedTopic] || [];

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left-hand side menu */}
      <div style={{ width: '25%', background: '#000', padding: '20px' }}>
        <h2 style={{ color: '#fff' }}>Topics</h2>
        <ul>
          {topics.map((t) => (
            <li key={t}>
              <Link
                to={`/student/${t}`}
                onClick={() => handleTopicSelect(t)}
                style={{
                  color: '#fff',
                  textDecoration: t === selectedTopic ? 'underline' : 'none',
                }}
              >
                {t}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right-hand side content */}
      <div style={{ flex: 1, padding: '20px', color: '#fff' }}>
        {!topic && (
          <div>
            <h2>Welcome to QuizLearner!</h2>
            <p>Select a topic from the left menu to view questions.</p>
          </div>
        )}

        {topic && (
          <div>
            <h2>{selectedTopic} Questions</h2>
            <ul>
              {currentQuestions.map((question) => (
                <li key={question.id}>
                  <Link to={`/student/${selectedTopic}/${question.id}`}>
                    {question.text}
                  </Link>
                </li>
              ))}
            </ul>

            {questionId && (
  <div>
    <h3>Question Details</h3>
    <p>Question ID: {questionId}</p>
    {/* Add more details based on your data structure */}
    {/* For example, if questionsByTopic is an array, find the question by ID */}
    {currentQuestions.map((question) =>
      question.id === questionId ? (
        <div key={question.id}>
          <p>{question.text}</p>
          {/* Add more details as needed */}
        </div>
      ) : null
    )}
  </div>
)}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPage;
