import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App.jsx';

ReactDOM.render(<App data={{English: "Write more",
							Maths: "Add and subtract"}}/>, document.getElementById('app'));



