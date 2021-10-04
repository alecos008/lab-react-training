import React from 'react';

function getRandomNum(num1, num2) {
  return Math.floor(Math.random() * num2);
}

function Random({ min, max }) {
  return (
    <p>
      Random number between {min} - {max} = {getRandomNum(min, max)}
    </p>
  );
}

export default Random;
