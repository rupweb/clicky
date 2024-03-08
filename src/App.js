import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Left from './components/Left.js';
import Right from './components/Right.js';
import NotFound from './components/NotFound.js';
import CharacterGallery from './components/CharacterGallery.jsx';

import './styles/bootstrap.min.css';
import './styles/app.css';
import './styles/images.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("");

  const incrementScore = () => {
    setScore(prevScore => {
      const newScore = prevScore + 1;
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      return newScore;
    });
    setMessage(""); // Reset message when the user guesses correctly
  };

  const resetScore = () => {
    setScore(0);
    setMessage("You guessed wrong!");
  };

  return (
    <Router>
      <div className="container">
        <Header score={score} highScore={highScore} message={message} />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <Layout>
                <div className="column">
                  <CharacterGallery incrementScore={incrementScore} resetScore={resetScore} />
                </div>
              </Layout>
            } />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const Layout = ({ children }) => (
  <>
    <div className="left-column"><Left /></div>
    <div className="middle-column">{children}</div>
    <div className="right-column"><Right /></div>
  </>
);

export default App;
