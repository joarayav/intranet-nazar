import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Header from './header';
//import Footer from './footer';
//import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const rootTwo = ReactDOM.createRoot(document.getElementById('rootTwo'));
rootTwo.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

/*const rootThree = ReactDOM.createRoot(document.getElementById('rootThree'));
rootThree.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
