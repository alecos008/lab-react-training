import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        lastName="Cazorla"
        firstName="Alejandro"
        gender="Male"
        height={181}
        birth={new Date('2000-02-22')}
      />
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        lastName="Cazorla"
        firstName="Santiago"
        gender="Male"
        height={182}
        birth={new Date('1989-02-22')}
      />
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        lastName="Cazorla"
        firstName="Fernando"
        gender="Male"
        height={183}
        birth={new Date('1996-01-30')}
      />
      <Greetings lang="de">Sina</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">Louise</Greetings>
      <Greetings lang="es">Lucia</Greetings>
      <Random min="1" max="6"></Random>
      <Random min="1" max="100"></Random>
      <Random min="6" max="1000"></Random>
      <Random min="2" max="100"></Random>
    </div>
  );
}

export default App;
