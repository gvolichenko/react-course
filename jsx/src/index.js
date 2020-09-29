// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

const getButtonText = () => {return 'Click on me'};

// Create a react component
const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name"/>
            <button style={{backgroundColor: 'blue', color:'white'}}> {getButtonText()} </button>
        </div>
    );
};
// Take the react component and show it on the screen
ReactDOM.render(
  <App/>,
  document.querySelector("#root")
);