import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';

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
      <Random min={1} max={6}></Random>
      <Random min={1} max={100}></Random>
      <Random min={6} max={1000}></Random>
      <Random min={2} max={100}></Random>
      <BoxColor
        r={Math.floor(Math.random() * 255)}
        g={Math.floor(Math.random() * 255)}
        b={Math.floor(Math.random() * 255)}
      />
      <BoxColor
        r={Math.floor(Math.random() * 255)}
        g={Math.floor(Math.random() * 255)}
        b={Math.floor(Math.random() * 255)}
      />
      <div className="cards-div">
        <CreditCard
          type="../img/visa.png"
          number="1234567891234561"
          expirationMonth={Math.floor(Math.random() * 12 + 1)}
          expirationYear={2025}
          bank="BBVA"
          owner="Alejandro Cazorla"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="../img/master-card.svg"
          number="1234567891234561"
          expirationMonth={Math.floor(Math.random() * 12 + 1)}
          expirationYear={2024}
          bank="Santander"
          owner="Fernando Cazorla"
          bgColor="darkred"
          color="white"
        />
        <CreditCard
          type="../img/visa.png"
          number="1234567891234561"
          expirationMonth={Math.floor(Math.random() * 12 + 1)}
          expirationYear={2027}
          bank="N26"
          owner="Fernando Cazorla"
          bgColor="grey"
          color="white"
        />
      </div>
      <Rating>0.5</Rating>
      <Rating>1.2</Rating>
      <Rating>2.49</Rating>
      <Rating>3.5</Rating>
      <Rating>4.3</Rating>
      <Rating>5</Rating>
    </div>
  );
}

export default App;
