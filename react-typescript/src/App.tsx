import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import InputSection from './Components/InputSection/InputSection';
import FormPage from './Components/FormPage/FormPage';
import StateComponent from './Components/StateComponent/StateComponent';


function App() {
  const style = {
    margin: "0.5rem 1rem",
    "padding": "1rem",
    "border": "1px solid blue",
    "background-color": "bisque"
  }
  return (
    <div className="App">
      <h2>Hello React Typescript</h2>
      <Button>
        <button>click me</button>
      </Button>
      <InputSection/>
      <FormPage/>
      <StateComponent style={style}></StateComponent>
    </div>
  );
}

export default App;
