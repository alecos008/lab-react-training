import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div>
      <img src={picture} alt="Profile Picture" />
      <h2>First Name: {firstName}</h2>
      <h2>Last Name: {lastName}</h2>
      <h2>Gender: {gender}</h2>
      <h2>height: {height / 100}m</h2>
      <h2>Birth: {birth.toDateString()}</h2>
    </div>
  );
}

export default IdCard;
