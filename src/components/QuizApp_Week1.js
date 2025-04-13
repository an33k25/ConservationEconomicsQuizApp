"use client";

import { useState } from 'react';

export default function QuizApp() {
  const quizQuestions = [
    {
      id: 1,
      question: "In the word root for conservation, 'con' stands for",
      options: [ "together","to keep","house","manage"],
      correctAnswer: "together"
    },
    {
      id: 2,
      question: "“the ability of a single economic actor (or small group of actors) to have a substantial influence on market prices” is known as",
      options: [ "price power","market power","externality","economic power"],
      correctAnswer: "market power"
    },
    {
      id: 3,
      question: "“an economy that allocates resources through the decentralised decisions of many firms and households as they interact in markets for goods and services” is a / an",
      options: ["urban economy","rural economy","planned economy","market economy"],
      correctAnswer: "market economy"
    },
    {
      id: 4,
      question: "In the word root for conservation, servare stands for ",
      options: ["together","to keep","house","manage"],
      correctAnswer: "to keep"
    },
    {
      id: 5,
      question: "Which of these is true??",
      options: ["Wants are unlimited, resources are unlimited","Wants are limited, resources are limited", "Wants are unlimited, resources are limited","Wants are limited, resources are unlimited"],
      correctAnswer: "Wants are unlimited, resources are limited"
    },
    {
      id: 6,
      question: "“an increase in the overall level of prices in the economy” is",
      options: ["inflation", "deflation", "stagflation", "priceflation"],
      correctAnswer: "inflation"
    },
    {
      id: 7,
      question: "Phillips curve shows the relation between",
      options: ["profit and loss", "marked price and selling price", "inflation rate and unemployment rate", "electricity consumption and heat output"],
      correctAnswer: "inflation rate and unemployment rate"
    },
    {
      id: 8,
      question: "In the word root for Economics, oikos stands for",
      options: ["together", "to keep", "house", "manage"],
      correctAnswer: "house"
    },
    {
      id: 9,
      question: "Most of rational thinking occurs",
      options: ["before the margin", "at the margin", "after the margin", "none of these"],
      correctAnswer: "at the margin"
    },
    {
      id: 10,
      question: "Input costs that do not require an outlay of money are",
      options: ["explicit costs", "implicit costs", "opportunity costs", "phantom costs"],
      correctAnswer: "implicit costs"
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
      <h1 className="text-3xl font-bold text-center mb-8">Week 1</h1>
      
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