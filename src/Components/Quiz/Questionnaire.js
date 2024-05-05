import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

const Questionnaire = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerSubmitted, setAnswerSubmitted] = useState(false);
    const [attemptsLeft, setAttemptsLeft] = useState(3);

    if (!questions || questions.length === 0) return <div>No questions available.</div>;

    const handleAnswerSubmit = () => {
        setAnswerSubmitted(true);
        const correctAnswer = questions[currentQuestionIndex][`Option${questions[currentQuestionIndex].Answer}`];
        if (selectedAnswer === correctAnswer) {
            alert("Correct answer!");
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

    return (
        <div>
            <div className="question-container">
                <textarea
                    className="form-control"
                    rows="4"
                    value={`Question: ${questions[currentQuestionIndex].Question}`}
                    readOnly
                />
            </div>
            <div className="answers-container">
                {["Option1", "Option2", "Option3", "Option4"].map((option, index) => (
                    questions[currentQuestionIndex][option] && <div key={index} className="answer-option">
                        <input
                            type="radio"
                            id={`answer-${index}`}
                            name="answers"
                            disabled={answerSubmitted}
                            onChange={() => setSelectedAnswer(questions[currentQuestionIndex][option])}
                            checked={selectedAnswer === questions[currentQuestionIndex][option]}
                        />
                        <label htmlFor={`answer-${index}`}>{questions[currentQuestionIndex][option]}</label>
                    </div>
                ))}
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
