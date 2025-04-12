"use client";

import { useState } from 'react';

export default function QuizApp7() {
  const quizQuestions = [
    
        {
          id: 1,
          question: "the price of a good that prevails in the world market for that good” is the definition of",
          options: ["export price", "import price", "world price", "domestic price"],
          correctAnswer: "world price"
        },
        {
          id: 2,
          question: "The area between the demand curve and the price is an indicator of",
          options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
          correctAnswer: "consumer surplus"
        },
        {
          id: 3,
          question: "the amount a buyer is willing to pay for a good minus the amount the buyer actually pays for it is",
          options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
          correctAnswer: "consumer surplus"
        },
        {
          id: 4,
          question: "the amount a seller is paid for a good minus the seller’s cost of providing it is",
          options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
          correctAnswer: "producer surplus"
        },
        {
          id: 5,
          question: "Value to buyers - Cost to sellers is",
          options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
          correctAnswer: "total surplus"
        },
        {
          id: 6,
          question: "the fall in total surplus that results from a market distortion, such as a tax is",
          options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
          correctAnswer: "deadweight loss"
        },
        {
          id: 7,
          question: "Laffer's curve is the relationship between",
          options: ["inflation and unemployment", "tax size and tax revenue", "producer surplus and consumer surplus", "tax size and deadweight loss"],
          correctAnswer: "tax size and tax revenue"
        },
        {
          id: 8,
          question: "Imposition of tariff",
          options: ["increases producer surplus and government revenue", "increases consumer surplus and government revenue", "increases producer surplus, consumer surplus and government revenue", "increases total surplus"],
          correctAnswer: "increases producer surplus and government revenue"
        },
        {
          id: 9,
          question: "the maximum amount that a buyer will pay for a good is",
          options: ["willingness to pay", "market demand", "demand curve", "buyer’s surplus"],
          correctAnswer: "willingness to pay"
        },
        {
          id: 10,
          question: "The area between the supply curve and the price is an indicator of",
          options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
          correctAnswer: "producer surplus"
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
      <h1 className="text-3xl font-bold text-center mb-8">Week 7</h1>
      
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