import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data.json';

function sortArr(arrData) {
  arrData.sort(function(obj1, obj2) {
    return obj2.value - obj1.value;
  });
  return arrData;
}

ReactDOM.render(<App arrData = {sortArr(data)} />, document.getElementById('root'));

function tick() {

  data.map(function(item) {
    var bienDo = Math.random() * (5 - (-5)) + (-5);
    item.percent = bienDo;
    item.change_value = item.price * (item.percent/100);
    item.volume += Math.floor(Math.random() * (30-10) + 10);
    item.price += item.change_value;
    item.value = item.price * item.volume;
  });
  sortArr(data);

  ReactDOM.render(<App arrData = {data} />, document.getElementById('root'));
}
setInterval(tick, 5000);
