import React from 'react';
import ReactDOM from 'react-dom';
import App, { color, number } from './components/app'


console.log(color, number);

ReactDOM.render(<App />, document.getElementById('root'));