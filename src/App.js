import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
const {useState} = React;

function App() {
  const[count, setCount] = useState(0);
  return (
    <div className="app">
      <span>
        <ul id = "react">
          <li>R</li>
          <li>E</li>
          <li>A</li>
          <li>C</li>
          <li>T</li>
        </ul>
        {/* <ul id = "counter">
          <li>C</li>
          <li>O</li>
          <li>U</li>
          <li>N</li>
          <li>T</li>
          <li>E</li>
          <li>R</li>
        </ul> */}
      </span>
      <h1 className = {count > 0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
      <div className = "button-wrapper">
        <button onClick = {() => setCount(count-1)}>-</button>
        <button onClick = {() => setCount(count+1)}>+</button>
      </div>
      <button id = "clear" onClick = {() => setCount(0)}>clear</button>
    </div>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById("root"));