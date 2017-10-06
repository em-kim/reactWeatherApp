import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import WeatherComponent from "./Weather.js";
import WeatherComponent from "./iconWidget/IconWidget.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-fontawesome';

ReactDOM.render(<WeatherComponent />, document.getElementById('root'));
// ReactDOM.render(<WeatherComponent />, document.getElementById('root'));

registerServiceWorker();