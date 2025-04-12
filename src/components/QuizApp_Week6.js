"use client";

import { useState } from 'react';

export default function QuizApp6() {
  const quizQuestions = [
    
        {
          "id": 1,
          "question": "“the claim that, other things being equal, the quantity demanded of a good falls when the price of the good rises” is a statement of",
          "options": ["law of demand", "law of supply", "law of quantity demanded", "law of quantity supplied"],
          "correctAnswer": "law of demand"
        },
        {
          "id": 2,
          "question": "“a legal maximum on the price at which a good can be sold” is",
          "options": ["price ceiling", "price floor", "selling ceiling", "selling floor"],
          "correctAnswer": "price ceiling"
        },
        {
          "id": 3,
          "question": "“a good for which, other things being equal, an increase in income leads to a decrease in demand” is",
          "options": ["normal good", "inferior good", "Giffen good", "common good"],
          "correctAnswer": "inferior good"
        },
        {
          "id": 4,
          "question": "“a table that shows the relationship between the price of a good and the quantity supplied” is",
          "options": ["demand table", "demand schedule", "supply table", "supply schedule"],
          "correctAnswer": "supply schedule"
        },
        {
          "id": 5,
          "question": "“a graph of the relationship between the price of a good and the quantity demanded” is",
          "options": ["demand curve", "supply curve", "Laffer's curve", "Phillips curve"],
          "correctAnswer": "demand curve"
        },
        {
          "id": 6,
          "question": "“a table that shows the relationship between the price of a good and the quantity demanded” is",
          "options": ["demand table", "demand schedule", "supply table", "supply schedule"],
          "correctAnswer": "demand schedule"
        },
        {
          "id": 7,
          "question": "“a measure of how much the quantity demanded of one good responds to a change in the price of another good, computed as the percentage change in quantity demanded of the first good divided by the percentage change in price of the second good” is",
          "options": ["price elasticity of demand", "income elasticity of demand", "cross-price elasticity of demand", "price elasticity of supply"],
          "correctAnswer": "cross-price elasticity of demand"
        },
        {
          "id": 8,
          "question": "Rice and wheat are",
          "options": ["substitutes", "complements", "club goods", "public goods"],
          "correctAnswer": "substitutes"
        },
        {
          "id": 9,
          "question": "“a good for which, other things being equal, an increase in income leads to an increase in demand” is",
          "options": ["normal good", "inferior good", "Giffen good", "common good"],
          "correctAnswer": "normal good"
        },
        {
          "id": 10,
          "question": "“a measure of how much the quantity demanded of a good responds to a change in the price of that good, computed as the percentage change in quantity demanded divided by the percentage change in price” is",
          "options": ["price elasticity of demand", "income elasticity of demand", "cross-price elasticity of demand", "price elasticity of supply"],
          "correctAnswer": "price elasticity of demand"
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
      <h1 className="text-3xl font-bold text-center mb-8">Week 6</h1>
      
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