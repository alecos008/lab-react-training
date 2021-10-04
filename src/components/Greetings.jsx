import React from 'react';

function greetingDecider(language) {
  switch (language) {
    case 'en':
      return 'Hello';
    case 'de':
      return 'Hallo';
    case 'fr':
      return 'Bonjour';
    case 'es':
      return 'Hola';
    default:
      return "I don't know how to say hello in your language";
  }
}

function Greetings({ lang, children }) {
  return (
    <p>
      {greetingDecider(lang)} {children}
    </p>
  );
}

export default Greetings;
