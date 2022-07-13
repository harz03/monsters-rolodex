import React from 'react'; //critical for react to work
//it is the engine hoe react function as application builder
import ReactDOM from 'react-dom/client'; //releated to web tools to build to web application
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* throw error message things that are depriciated */}
    <App />
  </React.StrictMode>
);

reportWebVitals();
