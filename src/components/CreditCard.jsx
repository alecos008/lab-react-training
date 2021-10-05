import React from 'react';

function hideCardNum(number) {
  return '**** **** **** ' + number.slice(number.length - 4);
}

function CreditCard({
  number,
  type,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        width: '20vw',
        height: '28vh',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
      }}
    >
      <img
        src={type}
        alt="Card Type"
        style={{ width: '15%', marginLeft: '75%', marginTop: '5%' }}
      />
      <p>{hideCardNum(number)}</p>
      <p>
        Expires {expirationMonth}/{expirationYear} {'     '} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
