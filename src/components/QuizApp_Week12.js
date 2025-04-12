"use client";

import { useState } from 'react';

export default function QuizApp12() {
  const quizQuestions = [
    
      {
        id: 1,
        question: "Which of these is a deterministic factor?",
        options: ["environmental variation", "forest fire", "death rate", "diseases"],
        correctAnswer: "death rate"
      },
      {
        id: 2,
        question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
        options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
        correctAnswer: "allelopathy"
      },
      {
        id: 3,
        question: "The movement of lions across the Gir landscape is an example of",
        options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
        correctAnswer: "diffusion"
      },
      {
        id: 4,
        question: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
        options: ["Liebig’s law of the minimum", "Liebig’s law of the maximum", "Shelford’s law of tolerance", "Shelford’s law of intolerance"],
        correctAnswer: "Shelford’s law of tolerance"
      },
      {
        id: 5,
        question: "The regular, seasonal movement of animals, often along fixed routes is called",
        options: ["translocation", "migration", "dispersal", "drifting"],
        correctAnswer: "migration"
      },
      {
        id: 6,
        question: "Which of these is a stochastic factor?",
        options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
        correctAnswer: "environmental fluctuation"
      },
      {
        id: 7,
        question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
        options: ["translocation", "migration", "dispersal", "drifting"],
        correctAnswer: "dispersal"
      },
      {
        id: 8,
        question: "Scarcity of food is a",
        options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
        correctAnswer: "push factor"
      },
      {
        id: 9,
        question: "Which of these correctly represents the process of habitat fragmentation and loss?",
        options: [
          "Original forest → Dissection → Perforation → Fragmentation → Attrition",
          "Original forest → Dissection → Attrition → Fragmentation → Perforation",
          "Original forest → Dissection → Perforation → Attrition → Fragmentation",
          "Original forest → Dissection → Fragmentation → Perforation → Attrition"
        ],
        correctAnswer: "Original forest → Dissection → Perforation → Fragmentation → Attrition"
      },
      {
        id: 10,
        question: "A root zone treatment plant is an example of",
        options: ["phytoremediation", "biological control", "biomagnification", "bioaccumulation"],
        correctAnswer: "phytoremediation"
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