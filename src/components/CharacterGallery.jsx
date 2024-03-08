import React, { useState, useEffect } from 'react';
import characterData from '../data/characterData.json';
import Character from './Character';

const CharacterGallery = ({ incrementScore, resetScore }) => {
  const [characters, setCharacters] = useState([]);
  const [clickedImages, setClickedImages] = useState([]);

  // Initialize characters from characterData
  useEffect(() => {
    setCharacters(characterData);
  }, []);

  // Function to shuffle characters
  const shuffleCharacters = () => {
    let shuffled = [...characters];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCharacters(shuffled);
  };

  // Handle click event on a character
  const handleCharacterClick = (id) => {
    console.log("Clicked id: ", id);
    if (clickedImages.includes(id)) {
      // If the image has been clicked before, reset
      resetScore();
      setClickedImages([]);
    } else {
      // If the image hasn't been clicked before, increment the score and add to clickedImages
      setClickedImages([...clickedImages, id]);
      incrementScore();
    }
    shuffleCharacters();
  };

  // Render characters as a list of elements
  const listOfChars = characters.map((char, i) => (
    <div onClick={() => handleCharacterClick(char._id)} key={i} data-testid={`character-${char._id}`}>
      <Character {...char} />
    </div>
  ));

  return (
    <section className="character-gallery">
      { listOfChars }
    </section>
  );
};

export default CharacterGallery;
