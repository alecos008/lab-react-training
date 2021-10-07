import React from 'react';

const whichStar = (rating) => {
  if (rating >= 4.5) {
    return '★ ★ ★ ★ ★';
  } else if (rating >= 3.5) {
    return '★ ★ ★ ★ ☆';
  } else if (rating >= 2.5) {
    return '★ ★ ★ ☆ ☆';
  } else if (rating >= 1.5) {
    return '★ ★ ☆ ☆ ☆';
  } else if (rating >= 0.5) {
    return '★ ☆ ☆ ☆ ☆';
  } else {
    return '☆ ☆ ☆ ☆ ☆';
  }
  /* if (rating >= 0.5) {
    return '★ ☆ ☆ ☆ ☆';
  } else if (rating >= 1.5) {
    return '★ ★ ☆ ☆ ☆';
  } else if (rating >= 2.5) {
    return '★ ★ ★ ☆ ☆';
  } else if (rating >= 3.5) {
    return '★ ★ ★ ★ ☆';
  } else if (rating >= 4.5) {
    return '★ ★ ★ ★ ★';
  } */
};

function Rating({ children }) {
  return (
    <div>
      <p>{whichStar(Number(children))}</p>
    </div>
  );
}

export default Rating;
