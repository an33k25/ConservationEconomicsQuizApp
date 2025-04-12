"use client";

import { useState } from 'react';

export default function QuizApp3() {
  const quizQuestions = [
    {
      id: 1,
      question: "“an absolute level of income set by the government for each family size below which a family is deemed to be in poverty” is known as",
      options: ["deprivation line", "poverty line", "deprivation index", "poverty index"],
      correctAnswer: "poverty line"
    },
    {
      id: 2,
      question: "Absolute poverty depends",
      options: ["on income but not on access to social services", "not on income but on access to social services", "on income and on access to social services", "neither on income nor on access to social services"],
      correctAnswer: "on income and on access to social services"
    },
    {
      id: 3,
      question: "“the equipment and structures used to produce goods and services” is the definition of",
      options: ["tools", "machinery", "capital", "factors of production"],
      correctAnswer: "capital"
    },
    {
      id: 4,
      question: "“above-equilibrium wages paid by firms to increase worker productivity” are known as",
      options: ["compensating wage", "efficiency wage", "productivity wage", "retention wage"],
      correctAnswer: "efficiency wage"
    },
    {
      id: 5,
      question: "“government policy aimed at protecting people against the risk of adverse events” is",
      options: ["Social protection", "Social insurance", "Social security", "Socialism"],
      correctAnswer: "Social insurance"
    },
    {
      id: 6,
      question: "“a difference in wages that arises to offset the non-monetary characteristics of different jobs” is known as",
      options: ["differentiating differential", "compensating differential", "differentiating integral", "compensating integral"],
      correctAnswer: "compensating differential"
    },
    {
      id: 7,
      question: "For a competitive and profit-maximising firm,",
      options: ["each factor’s rental price < the value of the marginal product for that factor", "each factor’s rental price = the value of the marginal product for that factor", "each factor’s rental price > the value of the marginal product for that factor", "each factor’s rental price = the value of the average product for that factor"],
      correctAnswer: "each factor’s rental price = the value of the marginal product for that factor"
    },
    {
      id: 8,
      question: "“a condition characterised by severe deprivation of basic human needs, including food, safe drinking water, sanitation facilities, health, shelter, education and information” is known as",
      options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
      correctAnswer: "absolute poverty"
    },
    {
      id: 9,
      question: "“a condition where a household’s income is lower than the median income in the particular country” is known as",
      options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
      correctAnswer: "relative poverty"
    },
    {
      id: 10,
      question: "“the increase in the amount of output from an additional unit of labor” is",
      options: ["marginal product of labour", "marginal product of input", "average product of labour", "average product of input"],
      correctAnswer: "marginal product of labour"
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
      <h1 className="text-3xl font-bold text-center mb-8">Week 10</h1>
      
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