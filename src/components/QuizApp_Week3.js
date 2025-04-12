"use client";

import { useState } from 'react';

export default function QuizApp3() {
  const quizQuestions = [
    
    {
      id: 1,
      question: "___ is used to identify which potential impacts are relevant to assess. (Fill in the blank)",
      options: ["screening", "scoping", "reporting", "review"],
      correctAnswer: "scoping"
    },
    {
      id: 2,
      question: "“the potential or capacity of a material to have adverse effects on living organisms” is",
      options: ["vulnerability", "susceptibility", "sustainability", "toxicity"],
      correctAnswer: "toxicity"
    },
    {
      id: 3,
      question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",
      options: ["recovery", "restoration", "enhancement", "replacement"],
      correctAnswer: "restoration"
    },
    {
      id: 4,
      question: "Hydrocarbons derived from incomplete burning of mineral oils are",
      options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
      correctAnswer: "pyrogenic hydrocarbons"
    },
    {
      id: 5,
      question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",
      options: ["recovery", "restoration", "enhancement", "replacement"],
      correctAnswer: "replacement"
    },
    {
      id: 6,
      question: "“the relative effect of exposure” is",
      options: ["vulnerability", "sensitivity", "sustainability", "toxicity"],
      correctAnswer: "sensitivity"
    },
    {
      id: 7,
      question: "___ determines which projects or developments require a full or partial impact assessment study. (Fill in the blank)",
      options: ["screening", "scoping", "reporting", "review"],
      correctAnswer: "screening"
    },
    {
      id: 8,
      question: "“the extent to which a chemical is available for uptake into an organism” is",
      options: ["bioavailability", "bioaccumulation", "biomagnification", "bioresponse"],
      correctAnswer: "bioavailability"
    },
    {
      id: 9,
      question: "Hydrocarbons derived from biological processes acting on mineral oils are",
      options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
      correctAnswer: "biogenic hydrocarbons"
    },
    {
      id: 10,
      question: "“Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead” is a definition for",
      options: ["adaptation", "mitigation", "maladaptation", "malmitigation"],
      correctAnswer: "maladaptation"
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
      <h1 className="text-3xl font-bold text-center mb-8">Week 3</h1>
      
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