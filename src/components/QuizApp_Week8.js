"use client";

import { useState } from 'react';

export default function QuizApp3() {
  const quizQuestions = [
    {
      id: 1,
      question: "For a positive consumption externality,",
      options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
      correctAnswer: "SMB = PMB + MB"
    },
    {
      id: 2,
      question: "For a positive production externality,",
      options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
      correctAnswer: "SMB = PMB"
    },
    {
      id: 3,
      question: "The direct cost to producers of producing an additional unit of a good is",
      options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
      correctAnswer: "private marginal cost (PMC)"
    },
    {
      id: 4,
      question: "For a negative production externality,",
      options: ["SMC = PMC + MD", "SMC = PMC - MD", "SMC = PMC", "SMC = PMC - MB"],
      correctAnswer: "SMC = PMC + MD"
    },
    {
      id: 5,
      question: "The private marginal cost to producers plus any costs associated with the production of the good that are imposed on others is",
      options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
      correctAnswer: "social marginal cost (SMC)"
    },
    {
      id: 6,
      question: "Partying with loud noise is an example of",
      options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
      correctAnswer: "negative consumption externality"
    },
    {
      id: 7,
      question: "When an individual’s consumption increases the well-being of others, but the individual is not compensated by those others, we have",
      options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
      correctAnswer: "positive consumption externality"
    },
    {
      id: 8,
      question: "When a firm’s production increases the well-being of others but the firm is not compensated by those others, we have",
      options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
      correctAnswer: "positive production externality"
    },
    {
      id: 9,
      question: "When an individual’s consumption reduces the well-being of others who are not compensated by the individual, we have",
      options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
      correctAnswer: "negative consumption externality"
    },
    {
      id: 10,
      question: "For a negative consumption externality,",
      options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
      correctAnswer: "SMB = PMB − MD"
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (questionId, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option
    });
  };

  const calculateScore = () => {
    let correctCount = 0;
    
    quizQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setScore(null);
    setSubmitted(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
    <h1 className="text-5xl font-bold text-center mb-8">Conservation Economics</h1>
      <h1 className="text-3xl font-bold text-center mb-8">Week 8</h1>
      
      <div className="space-y-8 max-h- overflow-y-auto p-4 mb-6">
        {quizQuestions.map(question => (
          <div key={question.id} className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-3">
              {question.id}. {question.question}
            </h2>
            <div className="space-y-2">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`q${question.id}-${index}`}
                    name={`question-${question.id}`}
                    value={option}
                    checked={selectedAnswers[question.id] === option}
                    onChange={() => handleOptionSelect(question.id, option)}
                    disabled={submitted}
                    className="mr-2"
                  />
                  <label 
                    htmlFor={`q${question.id}-${index}`}
                    className={`${
                      submitted && option === question.correctAnswer 
                        ? 'text-green-600 font-medium' 
                        : submitted && selectedAnswers[question.id] === option && option !== question.correctAnswer 
                          ? 'text-red-600 font-medium' 
                          : ''
                    }`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!submitted ? (
        <button 
          onClick={calculateScore}
          className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">
            Your Score: {score} out of {quizQuestions.length}
          </div>
          <button 
            onClick={resetQuiz}
            className="px-6 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            Take Quiz Again
          </button>
        </div>
      )}
    </div>
  );
}