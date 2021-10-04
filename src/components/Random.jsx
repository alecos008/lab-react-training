import React from 'react';

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Random({ min, max }) {
  return (
    <p>
      Random number between {min} - {max} = {getRandomNum(min, max)}
    </p>
  );
}

export default Random;
