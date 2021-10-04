import React from 'react';

/* function getRandomNum(num) {
  return Math.floor(Math.random() * num);
}

 let boxStyle = {
  backgroundColor:
    'rgb(' +
    getRandomNum(255) +
    ',' +
    getRandomNum(255) +
    ',' +
    getRandomNum(255) +
    ')',
  height: '50px',
  width: '80vw',
  margin: 'auto',
}; */

function BoxColor({ r, g, b }) {
  return (
    <div
      style={{
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
        height: '50px',
        width: '80vw',
        margin: 'auto',
      }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
}

export default BoxColor;
