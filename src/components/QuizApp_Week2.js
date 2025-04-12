"use client";

import { useState } from 'react';

export default function QuizApp2() {
  const quizQuestions = [
    {
        id: 1,
        question: "Which of these is not a pillar of sustainability?",
        options: ["environmental sustainability", "economic sustainability", "trans-boundary sustainability", "social sustainability"],
        correctAnswer: "trans-boundary sustainability"
      },
      {
        id: 2,
        question: "The Trinity explosion of 1945 is taken as the beginning of the",
        options: ["Holocene", "Cenocene", "Anthropocene", "Eocene"],
        correctAnswer: "Anthropocene"
      },
      {
        id: 3,
        question: "According to Malthusian model,",
        options: [
          "Population grows in geometric progression, food supply increases in arithmetic progression",
          "Population grows in geometric progression, food supply increases in geometric progression",
          "Population grows in arithmetic progression, food supply increases in arithmetic progression",
          "Population grows in arithmetic progression, food supply increases in geometric progression"
        ],
        correctAnswer: "Population grows in geometric progression, food supply increases in arithmetic progression"
      },
      {
        id: 4,
        question: "The demographic transition sees a society move from",
        options: [
          "high birth rate, low death rate to low birth rate, high death rate",
          "low birth rate, high death rate to low birth rate, low death rate",
          "high birth rate, high death rate to low birth rate, low death rate",
          "high birth rate, high death rate to low birth rate, high death rate"
        ],
        correctAnswer: "high birth rate, high death rate to low birth rate, low death rate"
      },
      {
        id: 5,
        question: "Which of these is a pillar of sustainability",
        options: ["social sustainability", "industrial sustainability", "agricultural sustainability", "trans-boundary sustainability"],
        correctAnswer: "social sustainability"
      },
      {
        id: 6,
        question: "Which of these is a preventive check according to Malthus?",
        options: ["foresight", "vice", "misery", "flood"],
        correctAnswer: "foresight"
      },
      {
        id: 7,
        question: "The quantum of human impacts can be written as",
        options: ["I = P + A + T", "I = P X A + T", "I = P X A X T", "I = P + A X T"],
        correctAnswer: "I = P X A X T"
      },
      {
        id: 8,
        question: "The book \"An Essay on the Principle of Population\" was written by",
        options: ["Darwin", "Malthus", "Spencer", "Owens"],
        correctAnswer: "Malthus"
      },
      {
        id: 9,
        question: "The logistic growth equation curve is",
        options: ["I-shaped", "J-shaped", "S-shaped", "U-shaped"],
        correctAnswer: "S-shaped"
      },
      {
        id: 10,
        question: "Which of these is a positive check according to Malthus?",
        options: ["late marriage", "war", "celibacy", "moral restraint"],
        correctAnswer: "war"
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
      <h1 className="text-3xl font-bold text-center mb-8">Week 2</h1>
      
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