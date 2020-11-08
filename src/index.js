import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const user = {
  name:"manoj",
  email:"test.com"
}

const element = <h1>hello {user.name}, email to {user.email}</h1>

var numbers = [1,2,3,4];
var doubleNumbers = numbers.map((eachNumber)=>eachNumber*2+";");


// timer that auto update using set interval
var counter =0;
function updateCount()
{
  console.log("updating.." + counter++);
}

setInterval(updateCount,1000);// call updateCounter after every second


ReactDOM.render(
  //element
  <h1>double numbers : {doubleNumbers}</h1>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
