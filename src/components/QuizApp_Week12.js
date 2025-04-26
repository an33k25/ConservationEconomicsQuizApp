"use client";

import { useState } from 'react';

export default function QuizApp12() {
  const quizQuestions = [
    
      
        {
          "id": 1,
          "question": "As per Wildlife Protection Act 1972 (WPA 1972), wild life includes any animal, aquatic or land vegetation which forms part of any _____ .",
          "options": ["ecosystem", "state", "country", "habitat"],
          "correctAnswer": "habitat"
        },
        {
          "id": 2,
          "question": "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
          "options": ["umbrella species", "keystone species", "flagship species", "all of the above"],
          "correctAnswer": "all of the above"
        },
        {
          "id": 3,
          "question": "Soil formation is an example of",
          "options": ["provisioning service", "regulating service", "supporting service", "cultural service"],
          "correctAnswer": "supporting service"
        },
        {
          "id": 4,
          "question": "Zoo is an example of",
          "options": ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"],
          "correctAnswer": "ex-situ conservation"
        },
        {
          "id": 5,
          "question": "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
          "options": ["least concern species", "keystone species", "flagship species", "extinct species"],
          "correctAnswer": "keystone species"
        },
        {
          "id": 6,
          "question": "Nutrient cycling is an example of",
          "options": ["provisioning service", "regulating service", "supporting service", "cultural service"],
          "correctAnswer": "supporting service"
        },
        {
          "id": 7,
          "question": "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
          "options": ["umbrella species", "keystone species", "flagship species", "extinct species"],
          "correctAnswer": "flagship species"
        },
        {
          "id": 8,
          "question": "We prefer those areas for the creation of a conservation reserve where the level of threat is",
          "options": ["very high", "medium", "very low", "non-existent"],
          "correctAnswer": "medium"
        },
        {
          "id": 9,
          "question": "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
          "options": ["umbrella species", "keystone species", "flagship species", "all of the above"],
          "correctAnswer": "all of the above"
        },
        {
          "id": 10,
          "question": "Biological control of pest populations is an example of",
          "options": ["provisioning service", "regulating service", "supporting service", "cultural service"],
          "correctAnswer": "regulating service"
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
      <h1 className="text-3xl font-bold text-center mb-8">Week 12</h1>
      
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