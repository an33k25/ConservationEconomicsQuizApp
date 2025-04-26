"use client";

import { useState } from 'react';

export default function QuizApp11() {
  const quizQuestions = [
    
    {
      "id": 1,
      "question": "“An action taken by an uninformed party to induce an informed party to reveal information” is known as",
      "options": ["signalling", "screening", "informing", "heuristics"],
      "correctAnswer": "screening"
    },
    {
      "id": 2,
      "question": "“The part of actual resources that can be developed profitably in the future” are",
      "options": ["potential resources", "actual resources", "reserve resources", "stock resources"],
      "correctAnswer": "reserve resources"
    },
    {
      "id": 3,
      "question": "“The limit on the consumption bundles that a consumer can afford” is known as",
      "options": ["consumption constraint", "budget constraint", "bundle constraint", "affordability constraint"],
      "correctAnswer": "budget constraint"
    },
    {
      "id": 4,
      "question": "“Mental short cut using emotion (gut feeling) to influences the decision” is",
      "options": ["affect heuristic", "availability heuristic", "effort heuristic", "familiarity heuristic"],
      "correctAnswer": "affect heuristic"
    },
    {
      "id": 5,
      "question": "“Those resources that are currently being used after surveying, quantification and qualification” are",
      "options": ["potential resources", "actual resources", "reserve resources", "stock resources"],
      "correctAnswer": "actual resources"
    },
    {
      "id": 6,
      "question": "“The change in consumption that results when a price change moves the consumer along a given indifference curve to a point with a new marginal rate of substitution” is known as",
      "options": ["income effect", "substitution effect", "indifference effect", "budget effect"],
      "correctAnswer": "substitution effect"
    },
    {
      "id": 7,
      "question": "An inferior good whose demand increases with price is called as",
      "options": ["Normal good", "Veblen good", "Giffen good", "Demand good"],
      "correctAnswer": "Giffen good"
    },
    {
      "id": 8,
      "question": "Which of these is not a property of indifference curves?",
      "options": ["Higher indifference curves are preferred to lower ones", "Indifference curves are downward-sloping", "Indifference curves cross at right angles", "Indifference curves are bowed inwards"],
      "correctAnswer": "Indifference curves cross at right angles"
    },
    {
      "id": 9,
      "question": "“An action taken by an informed party to reveal private information to an uninformed party” is known as",
      "options": ["signalling", "screening", "informing", "heuristics"],
      "correctAnswer": "signalling"
    },
    {
      "id": 10,
      "question": "“Simple strategies or mental processes used to quickly form judgments, make decisions, and find solutions to complex problems” is known as",
      "options": ["signalling", "screening", "informing", "heuristics"],
      "correctAnswer": "heuristics"
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
      <h1 className="text-3xl font-bold text-center mb-8">Week 11</h1>
      
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