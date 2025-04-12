"use client";

import { useState } from 'react';

export default function QuizApp3() {
  const quizQuestions = [
    {
      id: 1,
      question: "“costs that have already been committed and cannot be recovered” are",
      options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
      correctAnswer: "sunk costs"
    },
    {
      id: 2,
      question: "“total revenue minus total cost, including both explicit and implicit costs” is a definition of",
      options: ["economic profit", "accounting profit", "profit", "loss"],
      correctAnswer: "economic profit"
    },
    {
      id: 3,
      question: "“the increase in total cost that arises from an extra unit of production” are",
      options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
      correctAnswer: "marginal costs"
    },
    {
      id: 4,
      question: "A monopolist firm’s profit is given by",
      options: ["(Price - ATC) × Q", "(Price - Q) × ATC", "(ATC - Q) × Price", "Price × Q - ATC"],
      correctAnswer: "(Price - ATC) × Q"
    },
    {
      id: 5,
      question: "Which of the following is true for a competitive firm?",
      options: ["P > MR", "P > MC", "MR > MC", "MR = MC"],
      correctAnswer: "MR = MC"
    },
    {
      id: 6,
      question: "“the amount a firm receives for the sale of its output” is a definition of",
      options: ["total revenue", "total cost", "profit", "loss"],
      correctAnswer: "total revenue"
    },
    {
      id: 7,
      question: "When the cost of production for a single firm is much lesser than the cost of production for competitive firms, we have a / an",
      options: ["natural monopoly", "artificial monopoly", "oligopoly", "duopoly"],
      correctAnswer: "natural monopoly"
    },
    {
      id: 8,
      question: "“costs that do not vary with the quantity of output produced” are",
      options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
      correctAnswer: "fixed costs"
    },
    {
      id: 9,
      question: "“costs that vary with the quantity of output produced” are",
      options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
      correctAnswer: "variable costs"
    },
    {
      id: 10,
      question: "“the increase in output that arises from an additional unit of input” is",
      options: ["marginal product", "marginal profit", "marginal loss", "marginal cost"],
      correctAnswer: "marginal product"
    }
  ]
  ;

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
      <h1 className="text-3xl font-bold text-center mb-8">Week 9</h1>
      
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