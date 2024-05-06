import React, { useState, useEffect } from 'react';
import { Button, Alert } from 'react-bootstrap';

const Questionnaire = ({ questions, studentId, setQSolved }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerSubmitted, setAnswerSubmitted] = useState(false);
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [solvedQuestions, setSolvedQuestions] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/solved-questions/${studentId}`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Failed to fetch solved questions');
            })
            .then(data => setSolvedQuestions(data))
            .catch(error => console.error('Error fetching solved questions:', error));
    }, [studentId]);

    useEffect(() => {
        const isSolved = solvedQuestions.includes(questions[currentQuestionIndex]?.QuestionId);
        setQSolved(isSolved);
    }, [solvedQuestions, currentQuestionIndex, setQSolved, questions]);

    if (!questions || questions.length === 0) {
        return <div>No questions available.</div>;
    }

    const handleAnswerSubmit = async () => {
        setAnswerSubmitted(true);
        const correctAnswer = questions[currentQuestionIndex][`Option${questions[currentQuestionIndex].Answer}`];
        if (selectedAnswer === correctAnswer) {
            alert("Correct answer!");
            const payload = JSON.stringify({
                studentId,
                questionIds: [questions[currentQuestionIndex].QuestionId]
            });

            try {
                const response = await fetch('http://localhost:8000/submit-answers', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: payload
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log('Submission success:', result);
            } catch (error) {
                console.error('Error submitting answers frontEnd:', error);
            }
        } else {
            setAttemptsLeft(prev => prev - 1);
            alert("Wrong answer. Attempts left: " + (attemptsLeft - 1));
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setAnswerSubmitted(false);
            setSelectedAnswer(null);
            setAttemptsLeft(3);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setAnswerSubmitted(false);
            setSelectedAnswer(null);
            setAttemptsLeft(3);
        }
    };

    const isSolved = solvedQuestions.includes(questions[currentQuestionIndex].QuestionId);
    // const isSolved = true
    setQSolved(isSolved)
    return (
        <div>
            <div className="question-container" style={{ position: 'relative' }}>
                {solvedQuestions.includes(questions[currentQuestionIndex]?.QuestionId) && (
                    <span style={{ position: 'absolute', right: 0, top: '-20px', backgroundColor: 'lightgreen', padding: '5px' }}>Solved</span>
                )}
                <textarea
                    className="form-control"
                    rows="4"
                    value={`Question: ${questions[currentQuestionIndex].Question}`}
                    readOnly
                />
            </div>
            <div className="answers-container">
                {["Option1", "Option2", "Option3", "Option4"].map((option, index) => {
                    const optionValue = questions[currentQuestionIndex][option];
                    if (optionValue) {
                        return (
                            <div key={index} className="answer-option" >
                                <input
                                    type="radio"
                                    id={`answer-${index}`}
                                    name="answers"
                                    disabled={answerSubmitted}
                                    onChange={() => setSelectedAnswer(optionValue)}
                                    checked={selectedAnswer === optionValue}
                                />
                                <label htmlFor={`answer-${index}`}>{optionValue}</label>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div>
                <Button variant="primary" onClick={handleAnswerSubmit} disabled={!selectedAnswer || answerSubmitted}>
                    Submit Answer
                </Button>
                <Button variant="secondary" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                    Previous
                </Button>
                <Button variant="info" onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
                    Next
                </Button>
            </div>
            {answerSubmitted && (
                <Alert variant={selectedAnswer === questions[currentQuestionIndex][`Option${questions[currentQuestionIndex].Answer}`] ? "success" : "danger"}>
                    {selectedAnswer === questions[currentQuestionIndex][`Option${questions[currentQuestionIndex].Answer}`] ? "Correct Answer!" : `Wrong Answer! ${attemptsLeft} attempts left.`}
                </Alert>
            )}
        </div>
    );
};

export default Questionnaire;
