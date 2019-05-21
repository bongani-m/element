import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import withTracker from './utils/analytics';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const TrackedApp = withTracker(App);

ReactDOM.render(<TrackedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
