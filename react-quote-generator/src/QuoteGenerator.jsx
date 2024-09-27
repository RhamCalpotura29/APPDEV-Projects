// QuoteGenerator.jsx
import React, { useState } from 'react';

const quotes = [
  "The best way to predict the future is to invent it.",
  "You miss 100% of the shots you don't take.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do one thing every day that scares you.",
  "The journey of a thousand miles begins with one step.",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. — Albert Schweitzer",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
  "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
  "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
  "Opportunities don't happen, you create them. — Chris Grosser",
  "Dream big and dare to fail. — Norman Vaughan"
];

const socratesQuotes = [
  "The only true wisdom is in knowing you know nothing.",
  "An unexamined life is not worth living.",
  "I cannot teach anybody anything, I can only make them think.",
  "Wisdom begins in wonder.",
  "The greatest way to live with honor in this world is to be who we pretend to be.",
  "Strong minds discuss ideas, average minds discuss events, weak minds discuss people.",
  "To find yourself, think for yourself.",
  "He is richest who is content with the least, for content is the wealth of nature.",
  "The unexamined life is not worth living.",
  "There is only one good, knowledge, and one evil, ignorance.",
  "I know that I am intelligent because I know that I know nothing.",
  "The greatest blessings are the most ordinary, everyday things we take for granted."
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const getSocratesQuote = () => {
    const randomIndex = Math.floor(Math.random() * socratesQuotes.length);
    setQuote(socratesQuotes[randomIndex]);
  };

  return (
    <div className="quote-container">
      <div className="quote-box">
        <p className="quote-text">"{quote}"</p>
        <div className="button-container">
          <button className="random-button" onClick={getRandomQuote}>
            Random Quote
          </button>
          <button className="random-button" onClick={getSocratesQuote}>
            Socrates Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
