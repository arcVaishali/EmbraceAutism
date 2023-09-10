import React, { useState, useEffect } from 'react';

const Games = () => {
  const [objects, setObjects] = useState([
    { name: 'Ball', description: "It's round and bounces." },
    { name: 'Car', description: 'It has four wheels and you can drive it.' },
    { name: 'Book', description: 'You read it to learn new things.' },
  ]);

  const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [listening, setListening] = useState(false);
  const [recognizer, setRecognizer] = useState(null);

  const loadRecognizer = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false; 
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      if (transcript.includes(objects[currentObjectIndex].name.toLowerCase())) {
        setScore((prevScore) => prevScore + 1);
      }
      setListening(false);
      setCurrentObjectIndex((prevIndex) => prevIndex + 1);
    };

    recognition.onend = () => {
      setListening(false);
      setCurrentObjectIndex((prevIndex) => prevIndex + 1);
    };

    setRecognizer(recognition);
  };

  useEffect(() => {
    loadRecognizer();
  }, []);

  const handleListening = () => {
    if (recognizer) {
      setListening(true);
      recognizer.start();
    }
  };

  const speakDescription = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(
      `What is this? ${objects[currentObjectIndex].description}`
    );
    synth.speak(utterance);
  };

  useEffect(() => {
    if (currentObjectIndex < objects.length) {
      speakDescription();
    }
  }, [currentObjectIndex, objects]);

  return (
    <div className="bg-gradient-to-r from-[#12E0B7] to-[#07F76B] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-8">Guess the Object</h1>
      {currentObjectIndex < objects.length ? (
        <div className="p-10 bg-gray-100 lg:rounded">
          <p className="text-xl text-black mb-4">
            Listen to the description and guess the object. Say the name when you're ready.
          </p>
          <p className="text-xl text-black">Score: {score}</p>
          <button
            onClick={handleListening}
            disabled={listening}
            className={`${
              listening ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
            } text-red-500 font-semibold py-2 px-4 rounded-full text-lg transition-all duration-300 mt-4`}
          >
            {listening ? 'Listening...' : 'Start Listening'}
          </button>
        </div>
      ) : (
        <div className="p-10 bg-gray-100 lg:rounded">
          <p className="text-xl text-black mb-4">Congratulations! You've completed the game.</p>
          <p className="text-xl text-black mb-4">Your Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Games;
