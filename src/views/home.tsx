import React from 'react';
import Body from '../components/body/body';
import InputForm from '../components/input/inputForm';
import './home.css';
const Home = () => {
  return (
    <div className="home">
      <h1>Redux Assignment</h1>
      <InputForm />
      <Body />
    </div>
  );
};

export default Home;
