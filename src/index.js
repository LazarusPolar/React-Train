import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Se renderiza la vista de App.js
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
