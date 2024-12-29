import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import ButtonSecondary from '../AutismAppComponents/ButtonSecondary';
import ButtonPrimary from '../AutismAppComponents/ButtonPrimary';

const Puzzles = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        { letter: 'A', options: ['Apple', 'Banana', 'Carrot'], correctAnswer: 'Apple' },
        { letter: 'B', options: ['Dog', 'Elephant', 'Bear'], correctAnswer: 'Bear' },
        { letter: 'G', options: ['Red', 'Blue', 'Green'], correctAnswer: 'Green' },
        { letter: 'D', options: ['Cat', 'Dog', 'Dolphin'], correctAnswer: 'Dog' },
        { letter: 'F', options: ['Fish', 'Fox', 'Frog'], correctAnswer: 'Fish' },
    ];

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex === questions.length - 1) {
            setCompleted(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <div className="bg-gradient-to-r from-[#12E0B7] to-[#07F76B]">
            <div className="max-w-2xl mx-auto py-8">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    Alphabet Quiz Puzzle
                </h1>

                <div className="mt-6">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        {completed ? (
                            <div>
                                <Confetti
                                    width={window.innerWidth}
                                    height={window.innerHeight}
                                />
                                <p className="text-2xl font-semibold text-gray-900">
                                    Congratulations! You completed the puzzle!
                                </p>
                                <p className="mt-4 text-xl font-semibold text-gray-900">
                                    Your Score: {score} / {questions.length}
                                </p>
                            </div>
                        ) : (
                            <>
                                <p className="text-2xl font-semibold text-gray-900">
                                    What word starts with the letter {currentQuestion.letter}?
                                </p>
                                <div className="mt-4">
                                    {currentQuestion.options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswer(option)}
                                            className="rounded-md bg-[#1DA1F2] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1A91DA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1DA1F2] mr-2 mb-2"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                        <Link to="/">
                            <button>Go back to home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Puzzles;
