import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
const {useState} = React;

function App() {
  const[count, setCount] = useState(0);
  return (
    <div className="app">
      <h1 className = {count > 0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
      <div className = "button-wrapper">
        <button onClick = {() => setCount(count-1)}>-</button>
        <button onClick = {() => setCount(count+1)}>+</button>
      </div>
    </div>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById("root"));