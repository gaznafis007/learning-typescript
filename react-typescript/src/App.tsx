import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import InputSection from './Components/InputSection/InputSection';
import FormPage from './Components/FormPage/FormPage';


function App() {
  return (
    <div className="App">
      <h2>Hello React Typescript</h2>
      <Button>
        <button>click me</button>
      </Button>
      <InputSection/>
      <FormPage/>
    </div>
  );
}

export default App;
