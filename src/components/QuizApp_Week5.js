"use client";

import { useState } from 'react';

export default function QuizApp5() {
  const quizQuestions = [
    
    {
        id: 1,
        question: "“a measure of the responsiveness of quantity demanded or quantity supplied to a change in one of its determinants” is",
        options: ["elasticity", "responsivity", "demand-supply equilibrium", "pricing"],
        correctAnswer: "elasticity"
      },
      {
        id: 2,
        question: "“the ability to produce a good using fewer inputs than another producer” is",
        options: ["comparative advantage", "absolute advantage", "production advantage", "resource advantage"],
        correctAnswer: "absolute advantage"
      },
      {
        id: 3,
        question: "Common resource goods are",
        options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
        correctAnswer: "non-excludable, rival in consumption"
      },
      {
        id: 4,
        question: "“If private parties can bargain without cost over the allocation of resources, they can solve the problem of externalities on their own.” This is a statement for",
        options: ["Allocation theorem", "Phillips theorem", "Coase theorem", "Nash theorem"],
        correctAnswer: "Coase theorem"
      },
      {
        id: 5,
        question: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs is known as",
        options: ["Good development", "Sustainable development", "Futuristic development", "Gandhian development"],
        correctAnswer: "Sustainable development"
      },
      {
        id: 6,
        question: "Club goods are",
        options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
        correctAnswer: "excludable, non-rival in consumption"
      },
      {
        id: 7,
        question: "Which of these is not a method of internalisation of externalities?",
        options: ["tradable pollution permits", "charities to social causes", "command-and-control policies", "free market"],
        correctAnswer: "free market"
      },
      {
        id: 8,
        question: "Private goods are",
        options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
        correctAnswer: "excludable, rival in consumption"
      },
      {
        id: 9,
        question: "“a simplified description, especially a mathematical one, of a system or process, to assist calculations and predictions” is the definition of a / an",
        options: ["equation", "model", "philosophy", "process dynamics"],
        correctAnswer: "model"
      },
      {
        id: 10,
        question: "“the impact of one person’s actions on the well-being of a bystander” is",
        options: ["actor-observer effect", "externality", "internality", "benefits principle"],
        correctAnswer: "externality"
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
      <h1 className="text-3xl font-bold text-center mb-8">Week 5</h1>
      
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